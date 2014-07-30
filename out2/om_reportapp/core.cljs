(ns om-reportapp.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require

            [cljs-http.client :as http]
            [cljs.core.async :refer [>! <! chan put!]]   ))

(enable-console-print!)



   (go (let [response (<! (http/get "https://api.github.com/users" {:with-credentials? false}))]
      (prn (:status response))
      (prn (map :login (:body response)))))
