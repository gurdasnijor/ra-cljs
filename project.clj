(defproject om-reportapp "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [cljs-http "0.1.15"]
                 [om "0.6.5"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]]

  :source-paths ["src"]
  :ring {:handler om-reportapp.core/app}
  :cljsbuild {
    :builds [{:id "om-reportapp"
              :source-paths ["src"]
              :compiler {
                :output-to "om_reportapp.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
