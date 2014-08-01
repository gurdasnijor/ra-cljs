(ns om-reportapp.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as string]
            [cljs-http.client :as http]
            [cljs.core.async :refer [>! <! chan put!]]))

(enable-console-print!)

(def entity-endpoint "https://controlpanel.ogprojectx.us/api/v1/entities?limit=1000&embed=products")

(def tx-endpoint "https://controlpanel.ogprojectx.us/api/transactions/v0/query/f207b2a8-22f4-49b3-969b-6431c1672b9f")
(def tx-schema-endpoint "https://controlpanel.ogprojectx.us/api/transactions/v0/schema/f207b2a8-22f4-49b3-969b-6431c1672b9f")
(def request-options {:with-credentials? false :headers {"Authorization" "Token token=30f3e25fa4349d83545ab5a26c74f3ce"}})


(def ENTER_KEY 13)


(def app-state (atom {:schema [] :transactions []}))



(defn get-tx [offset limit search]
  (go
    (let [response (<! (http/post tx-endpoint (conj request-options {:json-params {:offset offset :limit limit :filter {:all {:contains search}}     }})  ))]
      (swap! app-state assoc :transactions (:transactions (:body response)) :total (:total_count_estimate response))   )))



(defn get-tx-schema []
  (go
    (let [response (<! (http/get tx-schema-endpoint request-options))]
      (swap! app-state assoc :schema (:schema (:body response))))))



(defn record-contains[record value]
    (some #(not= (.indexOf (string/upper-case %) (string/upper-case value)) -1) (filter #(not= % nil) (vals record))))



(defn tx-tr [tx owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/tr #js {:className "data-row"}
        (map #(dom/td nil %) (vals (into (sorted-map) tx)))))))



(defn thead-view [data owner]
  (reify
      om/IRender
      (render [this]
        (dom/thead nil
          (apply dom/tr nil
            (om/build-all #(dom/th nil (:label %)) data ))))))



(defn tbody-view [data owner]
  (reify
      om/IRenderState
      (render-state [this state]
        (.log js/console (str search-term))

        (apply dom/tbody nil
          (om/build-all tx-tr data)))))







 (defn handle-event [type app val]
  (case type
    :search   (get-tx 0 2000 val)
    nil))




 (defn handle-search-keydown [e app owner comm]
  (when (== (.-which e) ENTER_KEY)
    (let [new-field (om/get-node owner "tx-search")]

        (let [search-term (.-value new-field)]
          ;(get-tx 0 1000 search-term)

           (put! comm [:search search-term])

          ;(om/set-state! owner :search-term search-term)
          ;(.log js/console search-term)
          (comment (set! (.-value new-field) ""))  ) false)))





 (defn search-view [_ owner]
   (reify
   om/IRenderState
   (render-state [_ {:keys [comm] :as state}]
     (dom/form #js{:className "ui-search" :style #js{"width" "200px"}}
              (dom/span #js{:className "icon-search-1"})
              (dom/input
                #js {:ref "tx-search"
                     :id "tx-search"
                     :placeholder "Search..."
                     :type "search"
                     :onKeyDown #(handle-search-keydown % _ owner comm)})))))




   (defn table-view[{:keys [schema transactions] :as app} owner]
    (reify
      om/IWillMount
    (will-mount [_]
      (get-tx-schema)
      (get-tx 0 500)

      (let [comm (chan)]

        (om/set-state! owner :comm comm)
        (go (while true
              (let [[type value] (<! comm)]
                (handle-event type app value))))))
      om/IRenderState
      (render-state [_ state] 
        (dom/div #js {:className "ui-table"}

           (om/build search-view app)
           (dom/table nil
            (om/build thead-view schema )
            (om/build tbody-view transactions ))))))




(om/root table-view app-state
   {:target (.getElementById js/document "app")})




