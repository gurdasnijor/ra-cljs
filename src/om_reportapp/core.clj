(ns om-reportapp.core
  (:use [compojure.core])
  (:require
        [ring.util.response :as resp]))

(defroutes main-routes
  (GET "/" [] (resp/redirect "../../index.html")))

(def app main-routes)

