(ns om-reportapp.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [>! <! chan put!]]))

(enable-console-print!)

(def entity-endpoint "https://controlpanel.ogprojectx.us/api/v1/entities?limit=1000&embed=products")


(def tx-endpoint "https://controlpanel.ogprojectx.us/api/transactions/v0/query/f207b2a8-22f4-49b3-969b-6431c1672b9f")
(def tx-schema-endpoint "https://controlpanel.ogprojectx.us/api/transactions/v0/schema/f207b2a8-22f4-49b3-969b-6431c1672b9f")
  

(def request-options {:with-credentials? false :headers {"Authorization" "Token token=30f3e25fa4349d83545ab5a26c74f3ce"}})


(def app-state (atom {}))


(defn get-tx [offset limit]
  (go
    (let [response (<! (http/post tx-endpoint (conj request-options {:json-params {:offset offset :limit limit}})  ))]
      (swap! app-state assoc :transactions (:transactions (:body response)) :total (:total_count_estimate response))   )))


(defn get-tx-schema []
  (go
    (let [response (<! (http/get tx-schema-endpoint request-options))]
      (swap! app-state assoc :schema (:body response)))))


(get-tx-schema)

(get-tx 0 100)




;(filter #(not= (:label %) "Payment Method") (:schema (:schema @app-state)))


;(map #(dissoc % :all) (:transactions @app-state))



; (map #(dom/th nil   (:label %) ) (:schema (:schema @app-state)  ) )




(defn tx-tr [tx owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/tr #js {:className "data-row"}
        (map (fn [cell] (dom/td nil cell)) (vals tx))))))



(defn thead-view [data owner]
  (reify
      om/IRender
      (render [this]
        (dom/thead nil
          (apply dom/tr nil
            (om/build-all #(dom/th nil   (:label %) ) (:columns data) ))))))



(defn tbody-view [data owner]
  (reify
      om/IRender
      (render [this]
        (apply dom/tbody nil
          (om/build-all tx-tr (:rows data))))))


(defn table-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/h2 nil "Transaction list")
        (dom/div #js {:className "ui-table"}
        (dom/table nil
          (om/build thead-view {:columns (:schema (:schema app))})
          (om/build tbody-view {:rows (map #(dissoc % :all)(:transactions app))    }))))))



(om/root table-view app-state
   {:target (.getElementById js/document "app")})


