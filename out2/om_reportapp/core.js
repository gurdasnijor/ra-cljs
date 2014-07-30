// Compiled by ClojureScript 0.0-2268
goog.provide('om_reportapp.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
var c__5708__auto___8841 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___8841){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___8841){
return (function (state_8831){var state_val_8832 = (state_8831[(1)]);if((state_val_8832 === (2)))
{var inst_8824 = (state_8831[(2)]);var inst_8825 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_8824);var inst_8826 = cljs.core.prn.call(null,inst_8825);var inst_8827 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_8824);var inst_8828 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_8827);var inst_8829 = cljs.core.prn.call(null,inst_8828);var state_8831__$1 = (function (){var statearr_8833 = state_8831;(statearr_8833[(7)] = inst_8826);
return statearr_8833;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8831__$1,inst_8829);
} else
{if((state_val_8832 === (1)))
{var inst_8819 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];var inst_8820 = [false];var inst_8821 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_8819,inst_8820);var inst_8822 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_8821);var state_8831__$1 = state_8831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8831__$1,(2),inst_8822);
} else
{return null;
}
}
});})(c__5708__auto___8841))
;return ((function (switch__5693__auto__,c__5708__auto___8841){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_8837 = [null,null,null,null,null,null,null,null];(statearr_8837[(0)] = state_machine__5694__auto__);
(statearr_8837[(1)] = (1));
return statearr_8837;
});
var state_machine__5694__auto____1 = (function (state_8831){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_8831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e8838){if((e8838 instanceof Object))
{var ex__5697__auto__ = e8838;var statearr_8839_8842 = state_8831;(statearr_8839_8842[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8843 = state_8831;
state_8831 = G__8843;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_8831){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_8831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___8841))
})();var state__5710__auto__ = (function (){var statearr_8840 = f__5709__auto__.call(null);(statearr_8840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___8841);
return statearr_8840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___8841))
);

//# sourceMappingURL=core.js.map