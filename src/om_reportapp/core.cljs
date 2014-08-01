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


(def app-state (atom {:schema [] :transactions [] :query {:offset 0 :limit 200}}))


(defn get-tx! [query]
  (swap! app-state update-in [:query] (fn [e] (merge e query)))
  (go
   (let [response (<! (http/post tx-endpoint (conj request-options {:json-params (:query @app-state) })))]
     (swap! app-state assoc :transactions (:transactions (:body response)) :total (:total_count_estimate response))   )))



(defn get-tx-schema! []
  (go
   (let [response (<! (http/get tx-schema-endpoint request-options))]
     (swap! app-state assoc :schema (:schema (:body response))))))



;(defn record-contains[record value]
;  (some #(not= (.indexOf (string/upper-case %) (string/upper-case value)) -1) (filter #(not= % nil) (vals record))))




(defn handle-search-keydown [e app owner comm]
  (when (== (.-which e) ENTER_KEY)
    (let [new-field (om/get-node owner "tx-search")]
      (let [search-term (.-value new-field)]
        (put! comm [:search search-term])
        (comment (set! (.-value new-field) ""))  ) false)))



(defn search-view [_ owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [comm] :as state}]
      (dom/form #js{:className "ui-search" :style #js{"width" "200px"}}
        (dom/span #js{:className "icon-search-1"})
        (dom/input #js {:ref "tx-search"
                        :id "tx-search"
                        :placeholder "Search..."
                        :type "search"
                        :onKeyDown #(handle-search-keydown % _ owner comm)})))))




(defn tx-tr [tx owner]
  (reify
    om/IRender
    (render [this]
            (apply dom/tr #js {:className "data-row"}
                   (map #(dom/td nil %) (vals (into (sorted-map) tx)))))))





(defn handle-sort-click [e label owner comm]
  (put! comm [:sort label]))





(defn thead-th-view [{:keys[sort label]} owner]
  (reify
     om/IRenderState
    (render-state [_ {:keys [comm] :as state}]
      (dom/th #js {:onClick #(handle-sort-click % label owner comm)}   (str label sort) ))))



(defn thead-view [data owner]
  (reify
     om/IRenderState
    (render-state [_ {:keys [comm] :as state}]
      (dom/thead nil
         (apply dom/tr nil
            (om/build-all thead-th-view data {:init-state {:comm comm}} ))))))



(defn tbody-view [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
                  (.log js/console (str search-term))
                  (apply dom/tbody nil
                         (om/build-all tx-tr data)))))






;;Global handlers



(defn search [search-term]
    (get-tx! (if (not (string/blank? search-term)) {:filter {:all {:contains search-term}}} {:filter {}})))



(defn sort-column [app label]
   (get-tx! {:sort [{label "asc"}]})
   (om/transact! app :schema
     (fn [columns] (map #(if (= label (:label %))
                               (assoc % :sort "asc")
                               (assoc % :sort "desc")) columns))))




(defn handle-event [type app val]
  (case type
    :search   (search val)
    :sort (sort-column app val)
    :reorder (.log js/console val)
    :row-select (.log js/console val)
    :group (.log js/console val)
    :row-visibility-toggle (.log js/console val)
    nil))




(defn table-view[app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (get-tx-schema!)
        (get-tx!)

        (om/set-state! owner :comm comm)
        (go (while true
          (let [[type value] (<! comm)]
            (handle-event type app value))))))
    om/IRenderState
    (render-state [_ {:keys [comm]}] 
                  (dom/div #js {:className "ui-table"}

                            (dom/label nil (print-str (:query app)))

                           (om/build search-view app {:init-state {:comm comm}})
                           (dom/table nil
                                      (om/build thead-view (:schema app)  {:init-state {:comm comm}} )
                                      (om/build tbody-view (:transactions app) ))))))




(om/root table-view app-state
         {:target (.getElementById js/document "app")})




