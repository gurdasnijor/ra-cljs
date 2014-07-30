// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10304 = (function (f,fn_handler,meta10305){
this.f = f;
this.fn_handler = fn_handler;
this.meta10305 = meta10305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10304.cljs$lang$type = true;
cljs.core.async.t10304.cljs$lang$ctorStr = "cljs.core.async/t10304";
cljs.core.async.t10304.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10304");
});
cljs.core.async.t10304.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10306){var self__ = this;
var _10306__$1 = this;return self__.meta10305;
});
cljs.core.async.t10304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10306,meta10305__$1){var self__ = this;
var _10306__$1 = this;return (new cljs.core.async.t10304(self__.f,self__.fn_handler,meta10305__$1));
});
cljs.core.async.__GT_t10304 = (function __GT_t10304(f__$1,fn_handler__$1,meta10305){return (new cljs.core.async.t10304(f__$1,fn_handler__$1,meta10305));
});
}
return (new cljs.core.async.t10304(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10308 = buff;if(G__10308)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10308.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10308.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10308);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10308);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10309 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10309);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10309,ret){
return (function (){return fn1.call(null,val_10309);
});})(val_10309,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___10310 = n;var x_10311 = (0);while(true){
if((x_10311 < n__4399__auto___10310))
{(a[x_10311] = (0));
{
var G__10312 = (x_10311 + (1));
x_10311 = G__10312;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10313 = (i + (1));
i = G__10313;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10317 = (function (flag,alt_flag,meta10318){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10318 = meta10318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10317.cljs$lang$type = true;
cljs.core.async.t10317.cljs$lang$ctorStr = "cljs.core.async/t10317";
cljs.core.async.t10317.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10317");
});})(flag))
;
cljs.core.async.t10317.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10319){var self__ = this;
var _10319__$1 = this;return self__.meta10318;
});})(flag))
;
cljs.core.async.t10317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10319,meta10318__$1){var self__ = this;
var _10319__$1 = this;return (new cljs.core.async.t10317(self__.flag,self__.alt_flag,meta10318__$1));
});})(flag))
;
cljs.core.async.__GT_t10317 = ((function (flag){
return (function __GT_t10317(flag__$1,alt_flag__$1,meta10318){return (new cljs.core.async.t10317(flag__$1,alt_flag__$1,meta10318));
});})(flag))
;
}
return (new cljs.core.async.t10317(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10323 = (function (cb,flag,alt_handler,meta10324){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10324 = meta10324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10323.cljs$lang$type = true;
cljs.core.async.t10323.cljs$lang$ctorStr = "cljs.core.async/t10323";
cljs.core.async.t10323.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10323");
});
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10325){var self__ = this;
var _10325__$1 = this;return self__.meta10324;
});
cljs.core.async.t10323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10325,meta10324__$1){var self__ = this;
var _10325__$1 = this;return (new cljs.core.async.t10323(self__.cb,self__.flag,self__.alt_handler,meta10324__$1));
});
cljs.core.async.__GT_t10323 = (function __GT_t10323(cb__$1,flag__$1,alt_handler__$1,meta10324){return (new cljs.core.async.t10323(cb__$1,flag__$1,alt_handler__$1,meta10324));
});
}
return (new cljs.core.async.t10323(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10326_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10326_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10327_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10327_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10328 = (i + (1));
i = G__10328;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10329){var map__10331 = p__10329;var map__10331__$1 = ((cljs.core.seq_QMARK_.call(null,map__10331))?cljs.core.apply.call(null,cljs.core.hash_map,map__10331):map__10331);var opts = map__10331__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10329 = null;if (arguments.length > 1) {
  p__10329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10329);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10332){
var ports = cljs.core.first(arglist__10332);
var p__10329 = cljs.core.rest(arglist__10332);
return alts_BANG___delegate(ports,p__10329);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10340 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10340 = (function (ch,f,map_LT_,meta10341){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10341 = meta10341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10340.cljs$lang$type = true;
cljs.core.async.t10340.cljs$lang$ctorStr = "cljs.core.async/t10340";
cljs.core.async.t10340.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10340");
});
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10343 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10343 = (function (fn1,_,meta10341,ch,f,map_LT_,meta10344){
this.fn1 = fn1;
this._ = _;
this.meta10341 = meta10341;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10344 = meta10344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10343.cljs$lang$type = true;
cljs.core.async.t10343.cljs$lang$ctorStr = "cljs.core.async/t10343";
cljs.core.async.t10343.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10343");
});})(___$1))
;
cljs.core.async.t10343.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10343.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10333_SHARP_){return f1.call(null,(((p1__10333_SHARP_ == null))?null:self__.f.call(null,p1__10333_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10345){var self__ = this;
var _10345__$1 = this;return self__.meta10344;
});})(___$1))
;
cljs.core.async.t10343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10345,meta10344__$1){var self__ = this;
var _10345__$1 = this;return (new cljs.core.async.t10343(self__.fn1,self__._,self__.meta10341,self__.ch,self__.f,self__.map_LT_,meta10344__$1));
});})(___$1))
;
cljs.core.async.__GT_t10343 = ((function (___$1){
return (function __GT_t10343(fn1__$1,___$2,meta10341__$1,ch__$2,f__$2,map_LT___$2,meta10344){return (new cljs.core.async.t10343(fn1__$1,___$2,meta10341__$1,ch__$2,f__$2,map_LT___$2,meta10344));
});})(___$1))
;
}
return (new cljs.core.async.t10343(fn1,___$1,self__.meta10341,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10340.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10342){var self__ = this;
var _10342__$1 = this;return self__.meta10341;
});
cljs.core.async.t10340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10342,meta10341__$1){var self__ = this;
var _10342__$1 = this;return (new cljs.core.async.t10340(self__.ch,self__.f,self__.map_LT_,meta10341__$1));
});
cljs.core.async.__GT_t10340 = (function __GT_t10340(ch__$1,f__$1,map_LT___$1,meta10341){return (new cljs.core.async.t10340(ch__$1,f__$1,map_LT___$1,meta10341));
});
}
return (new cljs.core.async.t10340(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10349 = (function (ch,f,map_GT_,meta10350){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10350 = meta10350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10349.cljs$lang$type = true;
cljs.core.async.t10349.cljs$lang$ctorStr = "cljs.core.async/t10349";
cljs.core.async.t10349.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10349");
});
cljs.core.async.t10349.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10349.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10349.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10351){var self__ = this;
var _10351__$1 = this;return self__.meta10350;
});
cljs.core.async.t10349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10351,meta10350__$1){var self__ = this;
var _10351__$1 = this;return (new cljs.core.async.t10349(self__.ch,self__.f,self__.map_GT_,meta10350__$1));
});
cljs.core.async.__GT_t10349 = (function __GT_t10349(ch__$1,f__$1,map_GT___$1,meta10350){return (new cljs.core.async.t10349(ch__$1,f__$1,map_GT___$1,meta10350));
});
}
return (new cljs.core.async.t10349(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10355 = (function (ch,p,filter_GT_,meta10356){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10356 = meta10356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10355.cljs$lang$type = true;
cljs.core.async.t10355.cljs$lang$ctorStr = "cljs.core.async/t10355";
cljs.core.async.t10355.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10355");
});
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10357){var self__ = this;
var _10357__$1 = this;return self__.meta10356;
});
cljs.core.async.t10355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10357,meta10356__$1){var self__ = this;
var _10357__$1 = this;return (new cljs.core.async.t10355(self__.ch,self__.p,self__.filter_GT_,meta10356__$1));
});
cljs.core.async.__GT_t10355 = (function __GT_t10355(ch__$1,p__$1,filter_GT___$1,meta10356){return (new cljs.core.async.t10355(ch__$1,p__$1,filter_GT___$1,meta10356));
});
}
return (new cljs.core.async.t10355(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___10440 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___10440,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___10440,out){
return (function (state_10419){var state_val_10420 = (state_10419[(1)]);if((state_val_10420 === (7)))
{var inst_10415 = (state_10419[(2)]);var state_10419__$1 = state_10419;var statearr_10421_10441 = state_10419__$1;(statearr_10421_10441[(2)] = inst_10415);
(statearr_10421_10441[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (1)))
{var state_10419__$1 = state_10419;var statearr_10422_10442 = state_10419__$1;(statearr_10422_10442[(2)] = null);
(statearr_10422_10442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (4)))
{var inst_10401 = (state_10419[(7)]);var inst_10401__$1 = (state_10419[(2)]);var inst_10402 = (inst_10401__$1 == null);var state_10419__$1 = (function (){var statearr_10423 = state_10419;(statearr_10423[(7)] = inst_10401__$1);
return statearr_10423;
})();if(cljs.core.truth_(inst_10402))
{var statearr_10424_10443 = state_10419__$1;(statearr_10424_10443[(1)] = (5));
} else
{var statearr_10425_10444 = state_10419__$1;(statearr_10425_10444[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (6)))
{var inst_10401 = (state_10419[(7)]);var inst_10406 = p.call(null,inst_10401);var state_10419__$1 = state_10419;if(cljs.core.truth_(inst_10406))
{var statearr_10426_10445 = state_10419__$1;(statearr_10426_10445[(1)] = (8));
} else
{var statearr_10427_10446 = state_10419__$1;(statearr_10427_10446[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (3)))
{var inst_10417 = (state_10419[(2)]);var state_10419__$1 = state_10419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10419__$1,inst_10417);
} else
{if((state_val_10420 === (2)))
{var state_10419__$1 = state_10419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10419__$1,(4),ch);
} else
{if((state_val_10420 === (11)))
{var inst_10409 = (state_10419[(2)]);var state_10419__$1 = state_10419;var statearr_10428_10447 = state_10419__$1;(statearr_10428_10447[(2)] = inst_10409);
(statearr_10428_10447[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (9)))
{var state_10419__$1 = state_10419;var statearr_10429_10448 = state_10419__$1;(statearr_10429_10448[(2)] = null);
(statearr_10429_10448[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (5)))
{var inst_10404 = cljs.core.async.close_BANG_.call(null,out);var state_10419__$1 = state_10419;var statearr_10430_10449 = state_10419__$1;(statearr_10430_10449[(2)] = inst_10404);
(statearr_10430_10449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (10)))
{var inst_10412 = (state_10419[(2)]);var state_10419__$1 = (function (){var statearr_10431 = state_10419;(statearr_10431[(8)] = inst_10412);
return statearr_10431;
})();var statearr_10432_10450 = state_10419__$1;(statearr_10432_10450[(2)] = null);
(statearr_10432_10450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10420 === (8)))
{var inst_10401 = (state_10419[(7)]);var state_10419__$1 = state_10419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10419__$1,(11),out,inst_10401);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___10440,out))
;return ((function (switch__5693__auto__,c__5708__auto___10440,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_10436 = [null,null,null,null,null,null,null,null,null];(statearr_10436[(0)] = state_machine__5694__auto__);
(statearr_10436[(1)] = (1));
return statearr_10436;
});
var state_machine__5694__auto____1 = (function (state_10419){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_10419);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e10437){if((e10437 instanceof Object))
{var ex__5697__auto__ = e10437;var statearr_10438_10451 = state_10419;(statearr_10438_10451[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10452 = state_10419;
state_10419 = G__10452;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_10419){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_10419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___10440,out))
})();var state__5710__auto__ = (function (){var statearr_10439 = f__5709__auto__.call(null);(statearr_10439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___10440);
return statearr_10439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___10440,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_10618){var state_val_10619 = (state_10618[(1)]);if((state_val_10619 === (7)))
{var inst_10614 = (state_10618[(2)]);var state_10618__$1 = state_10618;var statearr_10620_10661 = state_10618__$1;(statearr_10620_10661[(2)] = inst_10614);
(statearr_10620_10661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (20)))
{var inst_10584 = (state_10618[(7)]);var inst_10595 = (state_10618[(2)]);var inst_10596 = cljs.core.next.call(null,inst_10584);var inst_10570 = inst_10596;var inst_10571 = null;var inst_10572 = (0);var inst_10573 = (0);var state_10618__$1 = (function (){var statearr_10621 = state_10618;(statearr_10621[(8)] = inst_10573);
(statearr_10621[(9)] = inst_10570);
(statearr_10621[(10)] = inst_10571);
(statearr_10621[(11)] = inst_10572);
(statearr_10621[(12)] = inst_10595);
return statearr_10621;
})();var statearr_10622_10662 = state_10618__$1;(statearr_10622_10662[(2)] = null);
(statearr_10622_10662[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (1)))
{var state_10618__$1 = state_10618;var statearr_10623_10663 = state_10618__$1;(statearr_10623_10663[(2)] = null);
(statearr_10623_10663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (4)))
{var inst_10559 = (state_10618[(13)]);var inst_10559__$1 = (state_10618[(2)]);var inst_10560 = (inst_10559__$1 == null);var state_10618__$1 = (function (){var statearr_10624 = state_10618;(statearr_10624[(13)] = inst_10559__$1);
return statearr_10624;
})();if(cljs.core.truth_(inst_10560))
{var statearr_10625_10664 = state_10618__$1;(statearr_10625_10664[(1)] = (5));
} else
{var statearr_10626_10665 = state_10618__$1;(statearr_10626_10665[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (15)))
{var state_10618__$1 = state_10618;var statearr_10630_10666 = state_10618__$1;(statearr_10630_10666[(2)] = null);
(statearr_10630_10666[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (21)))
{var state_10618__$1 = state_10618;var statearr_10631_10667 = state_10618__$1;(statearr_10631_10667[(2)] = null);
(statearr_10631_10667[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (13)))
{var inst_10573 = (state_10618[(8)]);var inst_10570 = (state_10618[(9)]);var inst_10571 = (state_10618[(10)]);var inst_10572 = (state_10618[(11)]);var inst_10580 = (state_10618[(2)]);var inst_10581 = (inst_10573 + (1));var tmp10627 = inst_10570;var tmp10628 = inst_10571;var tmp10629 = inst_10572;var inst_10570__$1 = tmp10627;var inst_10571__$1 = tmp10628;var inst_10572__$1 = tmp10629;var inst_10573__$1 = inst_10581;var state_10618__$1 = (function (){var statearr_10632 = state_10618;(statearr_10632[(8)] = inst_10573__$1);
(statearr_10632[(9)] = inst_10570__$1);
(statearr_10632[(10)] = inst_10571__$1);
(statearr_10632[(11)] = inst_10572__$1);
(statearr_10632[(14)] = inst_10580);
return statearr_10632;
})();var statearr_10633_10668 = state_10618__$1;(statearr_10633_10668[(2)] = null);
(statearr_10633_10668[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (22)))
{var state_10618__$1 = state_10618;var statearr_10634_10669 = state_10618__$1;(statearr_10634_10669[(2)] = null);
(statearr_10634_10669[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (6)))
{var inst_10559 = (state_10618[(13)]);var inst_10568 = f.call(null,inst_10559);var inst_10569 = cljs.core.seq.call(null,inst_10568);var inst_10570 = inst_10569;var inst_10571 = null;var inst_10572 = (0);var inst_10573 = (0);var state_10618__$1 = (function (){var statearr_10635 = state_10618;(statearr_10635[(8)] = inst_10573);
(statearr_10635[(9)] = inst_10570);
(statearr_10635[(10)] = inst_10571);
(statearr_10635[(11)] = inst_10572);
return statearr_10635;
})();var statearr_10636_10670 = state_10618__$1;(statearr_10636_10670[(2)] = null);
(statearr_10636_10670[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (17)))
{var inst_10584 = (state_10618[(7)]);var inst_10588 = cljs.core.chunk_first.call(null,inst_10584);var inst_10589 = cljs.core.chunk_rest.call(null,inst_10584);var inst_10590 = cljs.core.count.call(null,inst_10588);var inst_10570 = inst_10589;var inst_10571 = inst_10588;var inst_10572 = inst_10590;var inst_10573 = (0);var state_10618__$1 = (function (){var statearr_10637 = state_10618;(statearr_10637[(8)] = inst_10573);
(statearr_10637[(9)] = inst_10570);
(statearr_10637[(10)] = inst_10571);
(statearr_10637[(11)] = inst_10572);
return statearr_10637;
})();var statearr_10638_10671 = state_10618__$1;(statearr_10638_10671[(2)] = null);
(statearr_10638_10671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (3)))
{var inst_10616 = (state_10618[(2)]);var state_10618__$1 = state_10618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10618__$1,inst_10616);
} else
{if((state_val_10619 === (12)))
{var inst_10604 = (state_10618[(2)]);var state_10618__$1 = state_10618;var statearr_10639_10672 = state_10618__$1;(statearr_10639_10672[(2)] = inst_10604);
(statearr_10639_10672[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (2)))
{var state_10618__$1 = state_10618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10618__$1,(4),in$);
} else
{if((state_val_10619 === (23)))
{var inst_10612 = (state_10618[(2)]);var state_10618__$1 = state_10618;var statearr_10640_10673 = state_10618__$1;(statearr_10640_10673[(2)] = inst_10612);
(statearr_10640_10673[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (19)))
{var inst_10599 = (state_10618[(2)]);var state_10618__$1 = state_10618;var statearr_10641_10674 = state_10618__$1;(statearr_10641_10674[(2)] = inst_10599);
(statearr_10641_10674[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (11)))
{var inst_10570 = (state_10618[(9)]);var inst_10584 = (state_10618[(7)]);var inst_10584__$1 = cljs.core.seq.call(null,inst_10570);var state_10618__$1 = (function (){var statearr_10642 = state_10618;(statearr_10642[(7)] = inst_10584__$1);
return statearr_10642;
})();if(inst_10584__$1)
{var statearr_10643_10675 = state_10618__$1;(statearr_10643_10675[(1)] = (14));
} else
{var statearr_10644_10676 = state_10618__$1;(statearr_10644_10676[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (9)))
{var inst_10606 = (state_10618[(2)]);var inst_10607 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10618__$1 = (function (){var statearr_10645 = state_10618;(statearr_10645[(15)] = inst_10606);
return statearr_10645;
})();if(cljs.core.truth_(inst_10607))
{var statearr_10646_10677 = state_10618__$1;(statearr_10646_10677[(1)] = (21));
} else
{var statearr_10647_10678 = state_10618__$1;(statearr_10647_10678[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (5)))
{var inst_10562 = cljs.core.async.close_BANG_.call(null,out);var state_10618__$1 = state_10618;var statearr_10648_10679 = state_10618__$1;(statearr_10648_10679[(2)] = inst_10562);
(statearr_10648_10679[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (14)))
{var inst_10584 = (state_10618[(7)]);var inst_10586 = cljs.core.chunked_seq_QMARK_.call(null,inst_10584);var state_10618__$1 = state_10618;if(inst_10586)
{var statearr_10649_10680 = state_10618__$1;(statearr_10649_10680[(1)] = (17));
} else
{var statearr_10650_10681 = state_10618__$1;(statearr_10650_10681[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (16)))
{var inst_10602 = (state_10618[(2)]);var state_10618__$1 = state_10618;var statearr_10651_10682 = state_10618__$1;(statearr_10651_10682[(2)] = inst_10602);
(statearr_10651_10682[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (10)))
{var inst_10573 = (state_10618[(8)]);var inst_10571 = (state_10618[(10)]);var inst_10578 = cljs.core._nth.call(null,inst_10571,inst_10573);var state_10618__$1 = state_10618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10618__$1,(13),out,inst_10578);
} else
{if((state_val_10619 === (18)))
{var inst_10584 = (state_10618[(7)]);var inst_10593 = cljs.core.first.call(null,inst_10584);var state_10618__$1 = state_10618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10618__$1,(20),out,inst_10593);
} else
{if((state_val_10619 === (8)))
{var inst_10573 = (state_10618[(8)]);var inst_10572 = (state_10618[(11)]);var inst_10575 = (inst_10573 < inst_10572);var inst_10576 = inst_10575;var state_10618__$1 = state_10618;if(cljs.core.truth_(inst_10576))
{var statearr_10652_10683 = state_10618__$1;(statearr_10652_10683[(1)] = (10));
} else
{var statearr_10653_10684 = state_10618__$1;(statearr_10653_10684[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_10657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10657[(0)] = state_machine__5694__auto__);
(statearr_10657[(1)] = (1));
return statearr_10657;
});
var state_machine__5694__auto____1 = (function (state_10618){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_10618);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e10658){if((e10658 instanceof Object))
{var ex__5697__auto__ = e10658;var statearr_10659_10685 = state_10618;(statearr_10659_10685[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10618);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10686 = state_10618;
state_10618 = G__10686;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_10618){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_10618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_10660 = f__5709__auto__.call(null);(statearr_10660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_10660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___10781 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___10781){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___10781){
return (function (state_10757){var state_val_10758 = (state_10757[(1)]);if((state_val_10758 === (7)))
{var inst_10753 = (state_10757[(2)]);var state_10757__$1 = state_10757;var statearr_10759_10782 = state_10757__$1;(statearr_10759_10782[(2)] = inst_10753);
(statearr_10759_10782[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (1)))
{var state_10757__$1 = state_10757;var statearr_10760_10783 = state_10757__$1;(statearr_10760_10783[(2)] = null);
(statearr_10760_10783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (4)))
{var inst_10736 = (state_10757[(7)]);var inst_10736__$1 = (state_10757[(2)]);var inst_10737 = (inst_10736__$1 == null);var state_10757__$1 = (function (){var statearr_10761 = state_10757;(statearr_10761[(7)] = inst_10736__$1);
return statearr_10761;
})();if(cljs.core.truth_(inst_10737))
{var statearr_10762_10784 = state_10757__$1;(statearr_10762_10784[(1)] = (5));
} else
{var statearr_10763_10785 = state_10757__$1;(statearr_10763_10785[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (13)))
{var state_10757__$1 = state_10757;var statearr_10764_10786 = state_10757__$1;(statearr_10764_10786[(2)] = null);
(statearr_10764_10786[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (6)))
{var inst_10736 = (state_10757[(7)]);var state_10757__$1 = state_10757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10757__$1,(11),to,inst_10736);
} else
{if((state_val_10758 === (3)))
{var inst_10755 = (state_10757[(2)]);var state_10757__$1 = state_10757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10757__$1,inst_10755);
} else
{if((state_val_10758 === (12)))
{var state_10757__$1 = state_10757;var statearr_10765_10787 = state_10757__$1;(statearr_10765_10787[(2)] = null);
(statearr_10765_10787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (2)))
{var state_10757__$1 = state_10757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10757__$1,(4),from);
} else
{if((state_val_10758 === (11)))
{var inst_10746 = (state_10757[(2)]);var state_10757__$1 = state_10757;if(cljs.core.truth_(inst_10746))
{var statearr_10766_10788 = state_10757__$1;(statearr_10766_10788[(1)] = (12));
} else
{var statearr_10767_10789 = state_10757__$1;(statearr_10767_10789[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (9)))
{var state_10757__$1 = state_10757;var statearr_10768_10790 = state_10757__$1;(statearr_10768_10790[(2)] = null);
(statearr_10768_10790[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (5)))
{var state_10757__$1 = state_10757;if(cljs.core.truth_(close_QMARK_))
{var statearr_10769_10791 = state_10757__$1;(statearr_10769_10791[(1)] = (8));
} else
{var statearr_10770_10792 = state_10757__$1;(statearr_10770_10792[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (14)))
{var inst_10751 = (state_10757[(2)]);var state_10757__$1 = state_10757;var statearr_10771_10793 = state_10757__$1;(statearr_10771_10793[(2)] = inst_10751);
(statearr_10771_10793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (10)))
{var inst_10743 = (state_10757[(2)]);var state_10757__$1 = state_10757;var statearr_10772_10794 = state_10757__$1;(statearr_10772_10794[(2)] = inst_10743);
(statearr_10772_10794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10758 === (8)))
{var inst_10740 = cljs.core.async.close_BANG_.call(null,to);var state_10757__$1 = state_10757;var statearr_10773_10795 = state_10757__$1;(statearr_10773_10795[(2)] = inst_10740);
(statearr_10773_10795[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___10781))
;return ((function (switch__5693__auto__,c__5708__auto___10781){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_10777 = [null,null,null,null,null,null,null,null];(statearr_10777[(0)] = state_machine__5694__auto__);
(statearr_10777[(1)] = (1));
return statearr_10777;
});
var state_machine__5694__auto____1 = (function (state_10757){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_10757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e10778){if((e10778 instanceof Object))
{var ex__5697__auto__ = e10778;var statearr_10779_10796 = state_10757;(statearr_10779_10796[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10797 = state_10757;
state_10757 = G__10797;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_10757){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_10757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___10781))
})();var state__5710__auto__ = (function (){var statearr_10780 = f__5709__auto__.call(null);(statearr_10780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___10781);
return statearr_10780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___10781))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___10898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___10898,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___10898,tc,fc){
return (function (state_10873){var state_val_10874 = (state_10873[(1)]);if((state_val_10874 === (7)))
{var inst_10869 = (state_10873[(2)]);var state_10873__$1 = state_10873;var statearr_10875_10899 = state_10873__$1;(statearr_10875_10899[(2)] = inst_10869);
(statearr_10875_10899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (1)))
{var state_10873__$1 = state_10873;var statearr_10876_10900 = state_10873__$1;(statearr_10876_10900[(2)] = null);
(statearr_10876_10900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (4)))
{var inst_10850 = (state_10873[(7)]);var inst_10850__$1 = (state_10873[(2)]);var inst_10851 = (inst_10850__$1 == null);var state_10873__$1 = (function (){var statearr_10877 = state_10873;(statearr_10877[(7)] = inst_10850__$1);
return statearr_10877;
})();if(cljs.core.truth_(inst_10851))
{var statearr_10878_10901 = state_10873__$1;(statearr_10878_10901[(1)] = (5));
} else
{var statearr_10879_10902 = state_10873__$1;(statearr_10879_10902[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (13)))
{var state_10873__$1 = state_10873;var statearr_10880_10903 = state_10873__$1;(statearr_10880_10903[(2)] = null);
(statearr_10880_10903[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (6)))
{var inst_10850 = (state_10873[(7)]);var inst_10856 = p.call(null,inst_10850);var state_10873__$1 = state_10873;if(cljs.core.truth_(inst_10856))
{var statearr_10881_10904 = state_10873__$1;(statearr_10881_10904[(1)] = (9));
} else
{var statearr_10882_10905 = state_10873__$1;(statearr_10882_10905[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (3)))
{var inst_10871 = (state_10873[(2)]);var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10873__$1,inst_10871);
} else
{if((state_val_10874 === (12)))
{var state_10873__$1 = state_10873;var statearr_10883_10906 = state_10873__$1;(statearr_10883_10906[(2)] = null);
(statearr_10883_10906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (2)))
{var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10873__$1,(4),ch);
} else
{if((state_val_10874 === (11)))
{var inst_10850 = (state_10873[(7)]);var inst_10860 = (state_10873[(2)]);var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10873__$1,(8),inst_10860,inst_10850);
} else
{if((state_val_10874 === (9)))
{var state_10873__$1 = state_10873;var statearr_10884_10907 = state_10873__$1;(statearr_10884_10907[(2)] = tc);
(statearr_10884_10907[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (5)))
{var inst_10853 = cljs.core.async.close_BANG_.call(null,tc);var inst_10854 = cljs.core.async.close_BANG_.call(null,fc);var state_10873__$1 = (function (){var statearr_10885 = state_10873;(statearr_10885[(8)] = inst_10853);
return statearr_10885;
})();var statearr_10886_10908 = state_10873__$1;(statearr_10886_10908[(2)] = inst_10854);
(statearr_10886_10908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (14)))
{var inst_10867 = (state_10873[(2)]);var state_10873__$1 = state_10873;var statearr_10887_10909 = state_10873__$1;(statearr_10887_10909[(2)] = inst_10867);
(statearr_10887_10909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (10)))
{var state_10873__$1 = state_10873;var statearr_10888_10910 = state_10873__$1;(statearr_10888_10910[(2)] = fc);
(statearr_10888_10910[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10874 === (8)))
{var inst_10862 = (state_10873[(2)]);var state_10873__$1 = state_10873;if(cljs.core.truth_(inst_10862))
{var statearr_10889_10911 = state_10873__$1;(statearr_10889_10911[(1)] = (12));
} else
{var statearr_10890_10912 = state_10873__$1;(statearr_10890_10912[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___10898,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___10898,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_10894 = [null,null,null,null,null,null,null,null,null];(statearr_10894[(0)] = state_machine__5694__auto__);
(statearr_10894[(1)] = (1));
return statearr_10894;
});
var state_machine__5694__auto____1 = (function (state_10873){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_10873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e10895){if((e10895 instanceof Object))
{var ex__5697__auto__ = e10895;var statearr_10896_10913 = state_10873;(statearr_10896_10913[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10914 = state_10873;
state_10873 = G__10914;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_10873){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_10873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___10898,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_10897 = f__5709__auto__.call(null);(statearr_10897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___10898);
return statearr_10897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___10898,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_10961){var state_val_10962 = (state_10961[(1)]);if((state_val_10962 === (7)))
{var inst_10957 = (state_10961[(2)]);var state_10961__$1 = state_10961;var statearr_10963_10979 = state_10961__$1;(statearr_10963_10979[(2)] = inst_10957);
(statearr_10963_10979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10962 === (6)))
{var inst_10950 = (state_10961[(7)]);var inst_10947 = (state_10961[(8)]);var inst_10954 = f.call(null,inst_10947,inst_10950);var inst_10947__$1 = inst_10954;var state_10961__$1 = (function (){var statearr_10964 = state_10961;(statearr_10964[(8)] = inst_10947__$1);
return statearr_10964;
})();var statearr_10965_10980 = state_10961__$1;(statearr_10965_10980[(2)] = null);
(statearr_10965_10980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10962 === (5)))
{var inst_10947 = (state_10961[(8)]);var state_10961__$1 = state_10961;var statearr_10966_10981 = state_10961__$1;(statearr_10966_10981[(2)] = inst_10947);
(statearr_10966_10981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10962 === (4)))
{var inst_10950 = (state_10961[(7)]);var inst_10950__$1 = (state_10961[(2)]);var inst_10951 = (inst_10950__$1 == null);var state_10961__$1 = (function (){var statearr_10967 = state_10961;(statearr_10967[(7)] = inst_10950__$1);
return statearr_10967;
})();if(cljs.core.truth_(inst_10951))
{var statearr_10968_10982 = state_10961__$1;(statearr_10968_10982[(1)] = (5));
} else
{var statearr_10969_10983 = state_10961__$1;(statearr_10969_10983[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10962 === (3)))
{var inst_10959 = (state_10961[(2)]);var state_10961__$1 = state_10961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10961__$1,inst_10959);
} else
{if((state_val_10962 === (2)))
{var state_10961__$1 = state_10961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10961__$1,(4),ch);
} else
{if((state_val_10962 === (1)))
{var inst_10947 = init;var state_10961__$1 = (function (){var statearr_10970 = state_10961;(statearr_10970[(8)] = inst_10947);
return statearr_10970;
})();var statearr_10971_10984 = state_10961__$1;(statearr_10971_10984[(2)] = null);
(statearr_10971_10984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_10975 = [null,null,null,null,null,null,null,null,null];(statearr_10975[(0)] = state_machine__5694__auto__);
(statearr_10975[(1)] = (1));
return statearr_10975;
});
var state_machine__5694__auto____1 = (function (state_10961){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_10961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e10976){if((e10976 instanceof Object))
{var ex__5697__auto__ = e10976;var statearr_10977_10985 = state_10961;(statearr_10977_10985[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10986 = state_10961;
state_10961 = G__10986;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_10961){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_10961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_10978 = f__5709__auto__.call(null);(statearr_10978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_10978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_11060){var state_val_11061 = (state_11060[(1)]);if((state_val_11061 === (7)))
{var inst_11042 = (state_11060[(2)]);var state_11060__$1 = state_11060;var statearr_11062_11085 = state_11060__$1;(statearr_11062_11085[(2)] = inst_11042);
(statearr_11062_11085[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (1)))
{var inst_11036 = cljs.core.seq.call(null,coll);var inst_11037 = inst_11036;var state_11060__$1 = (function (){var statearr_11063 = state_11060;(statearr_11063[(7)] = inst_11037);
return statearr_11063;
})();var statearr_11064_11086 = state_11060__$1;(statearr_11064_11086[(2)] = null);
(statearr_11064_11086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (4)))
{var inst_11037 = (state_11060[(7)]);var inst_11040 = cljs.core.first.call(null,inst_11037);var state_11060__$1 = state_11060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11060__$1,(7),ch,inst_11040);
} else
{if((state_val_11061 === (13)))
{var inst_11054 = (state_11060[(2)]);var state_11060__$1 = state_11060;var statearr_11065_11087 = state_11060__$1;(statearr_11065_11087[(2)] = inst_11054);
(statearr_11065_11087[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (6)))
{var inst_11045 = (state_11060[(2)]);var state_11060__$1 = state_11060;if(cljs.core.truth_(inst_11045))
{var statearr_11066_11088 = state_11060__$1;(statearr_11066_11088[(1)] = (8));
} else
{var statearr_11067_11089 = state_11060__$1;(statearr_11067_11089[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (3)))
{var inst_11058 = (state_11060[(2)]);var state_11060__$1 = state_11060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11060__$1,inst_11058);
} else
{if((state_val_11061 === (12)))
{var state_11060__$1 = state_11060;var statearr_11068_11090 = state_11060__$1;(statearr_11068_11090[(2)] = null);
(statearr_11068_11090[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (2)))
{var inst_11037 = (state_11060[(7)]);var state_11060__$1 = state_11060;if(cljs.core.truth_(inst_11037))
{var statearr_11069_11091 = state_11060__$1;(statearr_11069_11091[(1)] = (4));
} else
{var statearr_11070_11092 = state_11060__$1;(statearr_11070_11092[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (11)))
{var inst_11051 = cljs.core.async.close_BANG_.call(null,ch);var state_11060__$1 = state_11060;var statearr_11071_11093 = state_11060__$1;(statearr_11071_11093[(2)] = inst_11051);
(statearr_11071_11093[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (9)))
{var state_11060__$1 = state_11060;if(cljs.core.truth_(close_QMARK_))
{var statearr_11072_11094 = state_11060__$1;(statearr_11072_11094[(1)] = (11));
} else
{var statearr_11073_11095 = state_11060__$1;(statearr_11073_11095[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (5)))
{var inst_11037 = (state_11060[(7)]);var state_11060__$1 = state_11060;var statearr_11074_11096 = state_11060__$1;(statearr_11074_11096[(2)] = inst_11037);
(statearr_11074_11096[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (10)))
{var inst_11056 = (state_11060[(2)]);var state_11060__$1 = state_11060;var statearr_11075_11097 = state_11060__$1;(statearr_11075_11097[(2)] = inst_11056);
(statearr_11075_11097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11061 === (8)))
{var inst_11037 = (state_11060[(7)]);var inst_11047 = cljs.core.next.call(null,inst_11037);var inst_11037__$1 = inst_11047;var state_11060__$1 = (function (){var statearr_11076 = state_11060;(statearr_11076[(7)] = inst_11037__$1);
return statearr_11076;
})();var statearr_11077_11098 = state_11060__$1;(statearr_11077_11098[(2)] = null);
(statearr_11077_11098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11081 = [null,null,null,null,null,null,null,null];(statearr_11081[(0)] = state_machine__5694__auto__);
(statearr_11081[(1)] = (1));
return statearr_11081;
});
var state_machine__5694__auto____1 = (function (state_11060){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11060);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11082){if((e11082 instanceof Object))
{var ex__5697__auto__ = e11082;var statearr_11083_11099 = state_11060;(statearr_11083_11099[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11060);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11100 = state_11060;
state_11060 = G__11100;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11060){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_11084 = f__5709__auto__.call(null);(statearr_11084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11102 = {};return obj11102;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11104 = {};return obj11104;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11326 = (function (cs,ch,mult,meta11327){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11327 = meta11327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11326.cljs$lang$type = true;
cljs.core.async.t11326.cljs$lang$ctorStr = "cljs.core.async/t11326";
cljs.core.async.t11326.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11326");
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11328){var self__ = this;
var _11328__$1 = this;return self__.meta11327;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11328,meta11327__$1){var self__ = this;
var _11328__$1 = this;return (new cljs.core.async.t11326(self__.cs,self__.ch,self__.mult,meta11327__$1));
});})(cs))
;
cljs.core.async.__GT_t11326 = ((function (cs){
return (function __GT_t11326(cs__$1,ch__$1,mult__$1,meta11327){return (new cljs.core.async.t11326(cs__$1,ch__$1,mult__$1,meta11327));
});})(cs))
;
}
return (new cljs.core.async.t11326(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___11547 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___11547,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___11547,cs,m,dchan,dctr,done){
return (function (state_11459){var state_val_11460 = (state_11459[(1)]);if((state_val_11460 === (7)))
{var inst_11455 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11461_11548 = state_11459__$1;(statearr_11461_11548[(2)] = inst_11455);
(statearr_11461_11548[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (20)))
{var inst_11360 = (state_11459[(7)]);var inst_11370 = cljs.core.first.call(null,inst_11360);var inst_11371 = cljs.core.nth.call(null,inst_11370,(0),null);var inst_11372 = cljs.core.nth.call(null,inst_11370,(1),null);var state_11459__$1 = (function (){var statearr_11462 = state_11459;(statearr_11462[(8)] = inst_11371);
return statearr_11462;
})();if(cljs.core.truth_(inst_11372))
{var statearr_11463_11549 = state_11459__$1;(statearr_11463_11549[(1)] = (22));
} else
{var statearr_11464_11550 = state_11459__$1;(statearr_11464_11550[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (27)))
{var inst_11331 = (state_11459[(9)]);var inst_11400 = (state_11459[(10)]);var inst_11402 = (state_11459[(11)]);var inst_11407 = (state_11459[(12)]);var inst_11407__$1 = cljs.core._nth.call(null,inst_11400,inst_11402);var inst_11408 = cljs.core.async.put_BANG_.call(null,inst_11407__$1,inst_11331,done);var state_11459__$1 = (function (){var statearr_11465 = state_11459;(statearr_11465[(12)] = inst_11407__$1);
return statearr_11465;
})();if(cljs.core.truth_(inst_11408))
{var statearr_11466_11551 = state_11459__$1;(statearr_11466_11551[(1)] = (30));
} else
{var statearr_11467_11552 = state_11459__$1;(statearr_11467_11552[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (1)))
{var state_11459__$1 = state_11459;var statearr_11468_11553 = state_11459__$1;(statearr_11468_11553[(2)] = null);
(statearr_11468_11553[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (24)))
{var inst_11360 = (state_11459[(7)]);var inst_11377 = (state_11459[(2)]);var inst_11378 = cljs.core.next.call(null,inst_11360);var inst_11340 = inst_11378;var inst_11341 = null;var inst_11342 = (0);var inst_11343 = (0);var state_11459__$1 = (function (){var statearr_11469 = state_11459;(statearr_11469[(13)] = inst_11377);
(statearr_11469[(14)] = inst_11342);
(statearr_11469[(15)] = inst_11343);
(statearr_11469[(16)] = inst_11340);
(statearr_11469[(17)] = inst_11341);
return statearr_11469;
})();var statearr_11470_11554 = state_11459__$1;(statearr_11470_11554[(2)] = null);
(statearr_11470_11554[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (39)))
{var state_11459__$1 = state_11459;var statearr_11474_11555 = state_11459__$1;(statearr_11474_11555[(2)] = null);
(statearr_11474_11555[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (4)))
{var inst_11331 = (state_11459[(9)]);var inst_11331__$1 = (state_11459[(2)]);var inst_11332 = (inst_11331__$1 == null);var state_11459__$1 = (function (){var statearr_11475 = state_11459;(statearr_11475[(9)] = inst_11331__$1);
return statearr_11475;
})();if(cljs.core.truth_(inst_11332))
{var statearr_11476_11556 = state_11459__$1;(statearr_11476_11556[(1)] = (5));
} else
{var statearr_11477_11557 = state_11459__$1;(statearr_11477_11557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (15)))
{var inst_11342 = (state_11459[(14)]);var inst_11343 = (state_11459[(15)]);var inst_11340 = (state_11459[(16)]);var inst_11341 = (state_11459[(17)]);var inst_11356 = (state_11459[(2)]);var inst_11357 = (inst_11343 + (1));var tmp11471 = inst_11342;var tmp11472 = inst_11340;var tmp11473 = inst_11341;var inst_11340__$1 = tmp11472;var inst_11341__$1 = tmp11473;var inst_11342__$1 = tmp11471;var inst_11343__$1 = inst_11357;var state_11459__$1 = (function (){var statearr_11478 = state_11459;(statearr_11478[(14)] = inst_11342__$1);
(statearr_11478[(15)] = inst_11343__$1);
(statearr_11478[(16)] = inst_11340__$1);
(statearr_11478[(18)] = inst_11356);
(statearr_11478[(17)] = inst_11341__$1);
return statearr_11478;
})();var statearr_11479_11558 = state_11459__$1;(statearr_11479_11558[(2)] = null);
(statearr_11479_11558[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (21)))
{var inst_11381 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11483_11559 = state_11459__$1;(statearr_11483_11559[(2)] = inst_11381);
(statearr_11483_11559[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (31)))
{var inst_11407 = (state_11459[(12)]);var inst_11411 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11412 = cljs.core.async.untap_STAR_.call(null,m,inst_11407);var state_11459__$1 = (function (){var statearr_11484 = state_11459;(statearr_11484[(19)] = inst_11411);
return statearr_11484;
})();var statearr_11485_11560 = state_11459__$1;(statearr_11485_11560[(2)] = inst_11412);
(statearr_11485_11560[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (32)))
{var inst_11400 = (state_11459[(10)]);var inst_11402 = (state_11459[(11)]);var inst_11401 = (state_11459[(20)]);var inst_11399 = (state_11459[(21)]);var inst_11414 = (state_11459[(2)]);var inst_11415 = (inst_11402 + (1));var tmp11480 = inst_11400;var tmp11481 = inst_11401;var tmp11482 = inst_11399;var inst_11399__$1 = tmp11482;var inst_11400__$1 = tmp11480;var inst_11401__$1 = tmp11481;var inst_11402__$1 = inst_11415;var state_11459__$1 = (function (){var statearr_11486 = state_11459;(statearr_11486[(10)] = inst_11400__$1);
(statearr_11486[(11)] = inst_11402__$1);
(statearr_11486[(20)] = inst_11401__$1);
(statearr_11486[(21)] = inst_11399__$1);
(statearr_11486[(22)] = inst_11414);
return statearr_11486;
})();var statearr_11487_11561 = state_11459__$1;(statearr_11487_11561[(2)] = null);
(statearr_11487_11561[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (40)))
{var inst_11427 = (state_11459[(23)]);var inst_11431 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11432 = cljs.core.async.untap_STAR_.call(null,m,inst_11427);var state_11459__$1 = (function (){var statearr_11488 = state_11459;(statearr_11488[(24)] = inst_11431);
return statearr_11488;
})();var statearr_11489_11562 = state_11459__$1;(statearr_11489_11562[(2)] = inst_11432);
(statearr_11489_11562[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (33)))
{var inst_11418 = (state_11459[(25)]);var inst_11420 = cljs.core.chunked_seq_QMARK_.call(null,inst_11418);var state_11459__$1 = state_11459;if(inst_11420)
{var statearr_11490_11563 = state_11459__$1;(statearr_11490_11563[(1)] = (36));
} else
{var statearr_11491_11564 = state_11459__$1;(statearr_11491_11564[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (13)))
{var inst_11350 = (state_11459[(26)]);var inst_11353 = cljs.core.async.close_BANG_.call(null,inst_11350);var state_11459__$1 = state_11459;var statearr_11492_11565 = state_11459__$1;(statearr_11492_11565[(2)] = inst_11353);
(statearr_11492_11565[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (22)))
{var inst_11371 = (state_11459[(8)]);var inst_11374 = cljs.core.async.close_BANG_.call(null,inst_11371);var state_11459__$1 = state_11459;var statearr_11493_11566 = state_11459__$1;(statearr_11493_11566[(2)] = inst_11374);
(statearr_11493_11566[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (36)))
{var inst_11418 = (state_11459[(25)]);var inst_11422 = cljs.core.chunk_first.call(null,inst_11418);var inst_11423 = cljs.core.chunk_rest.call(null,inst_11418);var inst_11424 = cljs.core.count.call(null,inst_11422);var inst_11399 = inst_11423;var inst_11400 = inst_11422;var inst_11401 = inst_11424;var inst_11402 = (0);var state_11459__$1 = (function (){var statearr_11494 = state_11459;(statearr_11494[(10)] = inst_11400);
(statearr_11494[(11)] = inst_11402);
(statearr_11494[(20)] = inst_11401);
(statearr_11494[(21)] = inst_11399);
return statearr_11494;
})();var statearr_11495_11567 = state_11459__$1;(statearr_11495_11567[(2)] = null);
(statearr_11495_11567[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (41)))
{var inst_11418 = (state_11459[(25)]);var inst_11434 = (state_11459[(2)]);var inst_11435 = cljs.core.next.call(null,inst_11418);var inst_11399 = inst_11435;var inst_11400 = null;var inst_11401 = (0);var inst_11402 = (0);var state_11459__$1 = (function (){var statearr_11496 = state_11459;(statearr_11496[(10)] = inst_11400);
(statearr_11496[(11)] = inst_11402);
(statearr_11496[(20)] = inst_11401);
(statearr_11496[(21)] = inst_11399);
(statearr_11496[(27)] = inst_11434);
return statearr_11496;
})();var statearr_11497_11568 = state_11459__$1;(statearr_11497_11568[(2)] = null);
(statearr_11497_11568[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (43)))
{var state_11459__$1 = state_11459;var statearr_11498_11569 = state_11459__$1;(statearr_11498_11569[(2)] = null);
(statearr_11498_11569[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (29)))
{var inst_11443 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11499_11570 = state_11459__$1;(statearr_11499_11570[(2)] = inst_11443);
(statearr_11499_11570[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (44)))
{var inst_11452 = (state_11459[(2)]);var state_11459__$1 = (function (){var statearr_11500 = state_11459;(statearr_11500[(28)] = inst_11452);
return statearr_11500;
})();var statearr_11501_11571 = state_11459__$1;(statearr_11501_11571[(2)] = null);
(statearr_11501_11571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (6)))
{var inst_11391 = (state_11459[(29)]);var inst_11390 = cljs.core.deref.call(null,cs);var inst_11391__$1 = cljs.core.keys.call(null,inst_11390);var inst_11392 = cljs.core.count.call(null,inst_11391__$1);var inst_11393 = cljs.core.reset_BANG_.call(null,dctr,inst_11392);var inst_11398 = cljs.core.seq.call(null,inst_11391__$1);var inst_11399 = inst_11398;var inst_11400 = null;var inst_11401 = (0);var inst_11402 = (0);var state_11459__$1 = (function (){var statearr_11502 = state_11459;(statearr_11502[(10)] = inst_11400);
(statearr_11502[(11)] = inst_11402);
(statearr_11502[(20)] = inst_11401);
(statearr_11502[(21)] = inst_11399);
(statearr_11502[(30)] = inst_11393);
(statearr_11502[(29)] = inst_11391__$1);
return statearr_11502;
})();var statearr_11503_11572 = state_11459__$1;(statearr_11503_11572[(2)] = null);
(statearr_11503_11572[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (28)))
{var inst_11418 = (state_11459[(25)]);var inst_11399 = (state_11459[(21)]);var inst_11418__$1 = cljs.core.seq.call(null,inst_11399);var state_11459__$1 = (function (){var statearr_11504 = state_11459;(statearr_11504[(25)] = inst_11418__$1);
return statearr_11504;
})();if(inst_11418__$1)
{var statearr_11505_11573 = state_11459__$1;(statearr_11505_11573[(1)] = (33));
} else
{var statearr_11506_11574 = state_11459__$1;(statearr_11506_11574[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (25)))
{var inst_11402 = (state_11459[(11)]);var inst_11401 = (state_11459[(20)]);var inst_11404 = (inst_11402 < inst_11401);var inst_11405 = inst_11404;var state_11459__$1 = state_11459;if(cljs.core.truth_(inst_11405))
{var statearr_11507_11575 = state_11459__$1;(statearr_11507_11575[(1)] = (27));
} else
{var statearr_11508_11576 = state_11459__$1;(statearr_11508_11576[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (34)))
{var state_11459__$1 = state_11459;var statearr_11509_11577 = state_11459__$1;(statearr_11509_11577[(2)] = null);
(statearr_11509_11577[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (17)))
{var state_11459__$1 = state_11459;var statearr_11510_11578 = state_11459__$1;(statearr_11510_11578[(2)] = null);
(statearr_11510_11578[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (3)))
{var inst_11457 = (state_11459[(2)]);var state_11459__$1 = state_11459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11459__$1,inst_11457);
} else
{if((state_val_11460 === (12)))
{var inst_11386 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11511_11579 = state_11459__$1;(statearr_11511_11579[(2)] = inst_11386);
(statearr_11511_11579[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (2)))
{var state_11459__$1 = state_11459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11459__$1,(4),ch);
} else
{if((state_val_11460 === (23)))
{var state_11459__$1 = state_11459;var statearr_11512_11580 = state_11459__$1;(statearr_11512_11580[(2)] = null);
(statearr_11512_11580[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (35)))
{var inst_11441 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11513_11581 = state_11459__$1;(statearr_11513_11581[(2)] = inst_11441);
(statearr_11513_11581[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (19)))
{var inst_11360 = (state_11459[(7)]);var inst_11364 = cljs.core.chunk_first.call(null,inst_11360);var inst_11365 = cljs.core.chunk_rest.call(null,inst_11360);var inst_11366 = cljs.core.count.call(null,inst_11364);var inst_11340 = inst_11365;var inst_11341 = inst_11364;var inst_11342 = inst_11366;var inst_11343 = (0);var state_11459__$1 = (function (){var statearr_11514 = state_11459;(statearr_11514[(14)] = inst_11342);
(statearr_11514[(15)] = inst_11343);
(statearr_11514[(16)] = inst_11340);
(statearr_11514[(17)] = inst_11341);
return statearr_11514;
})();var statearr_11515_11582 = state_11459__$1;(statearr_11515_11582[(2)] = null);
(statearr_11515_11582[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (11)))
{var inst_11340 = (state_11459[(16)]);var inst_11360 = (state_11459[(7)]);var inst_11360__$1 = cljs.core.seq.call(null,inst_11340);var state_11459__$1 = (function (){var statearr_11516 = state_11459;(statearr_11516[(7)] = inst_11360__$1);
return statearr_11516;
})();if(inst_11360__$1)
{var statearr_11517_11583 = state_11459__$1;(statearr_11517_11583[(1)] = (16));
} else
{var statearr_11518_11584 = state_11459__$1;(statearr_11518_11584[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (9)))
{var inst_11388 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11519_11585 = state_11459__$1;(statearr_11519_11585[(2)] = inst_11388);
(statearr_11519_11585[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (5)))
{var inst_11338 = cljs.core.deref.call(null,cs);var inst_11339 = cljs.core.seq.call(null,inst_11338);var inst_11340 = inst_11339;var inst_11341 = null;var inst_11342 = (0);var inst_11343 = (0);var state_11459__$1 = (function (){var statearr_11520 = state_11459;(statearr_11520[(14)] = inst_11342);
(statearr_11520[(15)] = inst_11343);
(statearr_11520[(16)] = inst_11340);
(statearr_11520[(17)] = inst_11341);
return statearr_11520;
})();var statearr_11521_11586 = state_11459__$1;(statearr_11521_11586[(2)] = null);
(statearr_11521_11586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (14)))
{var state_11459__$1 = state_11459;var statearr_11522_11587 = state_11459__$1;(statearr_11522_11587[(2)] = null);
(statearr_11522_11587[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (45)))
{var inst_11449 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11523_11588 = state_11459__$1;(statearr_11523_11588[(2)] = inst_11449);
(statearr_11523_11588[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (26)))
{var inst_11391 = (state_11459[(29)]);var inst_11445 = (state_11459[(2)]);var inst_11446 = cljs.core.seq.call(null,inst_11391);var state_11459__$1 = (function (){var statearr_11524 = state_11459;(statearr_11524[(31)] = inst_11445);
return statearr_11524;
})();if(inst_11446)
{var statearr_11525_11589 = state_11459__$1;(statearr_11525_11589[(1)] = (42));
} else
{var statearr_11526_11590 = state_11459__$1;(statearr_11526_11590[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (16)))
{var inst_11360 = (state_11459[(7)]);var inst_11362 = cljs.core.chunked_seq_QMARK_.call(null,inst_11360);var state_11459__$1 = state_11459;if(inst_11362)
{var statearr_11527_11591 = state_11459__$1;(statearr_11527_11591[(1)] = (19));
} else
{var statearr_11528_11592 = state_11459__$1;(statearr_11528_11592[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (38)))
{var inst_11438 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11529_11593 = state_11459__$1;(statearr_11529_11593[(2)] = inst_11438);
(statearr_11529_11593[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (30)))
{var state_11459__$1 = state_11459;var statearr_11530_11594 = state_11459__$1;(statearr_11530_11594[(2)] = null);
(statearr_11530_11594[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (10)))
{var inst_11343 = (state_11459[(15)]);var inst_11341 = (state_11459[(17)]);var inst_11349 = cljs.core._nth.call(null,inst_11341,inst_11343);var inst_11350 = cljs.core.nth.call(null,inst_11349,(0),null);var inst_11351 = cljs.core.nth.call(null,inst_11349,(1),null);var state_11459__$1 = (function (){var statearr_11531 = state_11459;(statearr_11531[(26)] = inst_11350);
return statearr_11531;
})();if(cljs.core.truth_(inst_11351))
{var statearr_11532_11595 = state_11459__$1;(statearr_11532_11595[(1)] = (13));
} else
{var statearr_11533_11596 = state_11459__$1;(statearr_11533_11596[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (18)))
{var inst_11384 = (state_11459[(2)]);var state_11459__$1 = state_11459;var statearr_11534_11597 = state_11459__$1;(statearr_11534_11597[(2)] = inst_11384);
(statearr_11534_11597[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (42)))
{var state_11459__$1 = state_11459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11459__$1,(45),dchan);
} else
{if((state_val_11460 === (37)))
{var inst_11418 = (state_11459[(25)]);var inst_11331 = (state_11459[(9)]);var inst_11427 = (state_11459[(23)]);var inst_11427__$1 = cljs.core.first.call(null,inst_11418);var inst_11428 = cljs.core.async.put_BANG_.call(null,inst_11427__$1,inst_11331,done);var state_11459__$1 = (function (){var statearr_11535 = state_11459;(statearr_11535[(23)] = inst_11427__$1);
return statearr_11535;
})();if(cljs.core.truth_(inst_11428))
{var statearr_11536_11598 = state_11459__$1;(statearr_11536_11598[(1)] = (39));
} else
{var statearr_11537_11599 = state_11459__$1;(statearr_11537_11599[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (8)))
{var inst_11342 = (state_11459[(14)]);var inst_11343 = (state_11459[(15)]);var inst_11345 = (inst_11343 < inst_11342);var inst_11346 = inst_11345;var state_11459__$1 = state_11459;if(cljs.core.truth_(inst_11346))
{var statearr_11538_11600 = state_11459__$1;(statearr_11538_11600[(1)] = (10));
} else
{var statearr_11539_11601 = state_11459__$1;(statearr_11539_11601[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___11547,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___11547,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11543[(0)] = state_machine__5694__auto__);
(statearr_11543[(1)] = (1));
return statearr_11543;
});
var state_machine__5694__auto____1 = (function (state_11459){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11459);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11544){if((e11544 instanceof Object))
{var ex__5697__auto__ = e11544;var statearr_11545_11602 = state_11459;(statearr_11545_11602[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11459);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11603 = state_11459;
state_11459 = G__11603;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11459){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___11547,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_11546 = f__5709__auto__.call(null);(statearr_11546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___11547);
return statearr_11546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___11547,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11605 = {};return obj11605;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11725 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11726){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11726 = meta11726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11725.cljs$lang$type = true;
cljs.core.async.t11725.cljs$lang$ctorStr = "cljs.core.async/t11725";
cljs.core.async.t11725.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11725");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11725.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11727){var self__ = this;
var _11727__$1 = this;return self__.meta11726;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11727,meta11726__$1){var self__ = this;
var _11727__$1 = this;return (new cljs.core.async.t11725(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11726__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11725 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11725(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11726){return (new cljs.core.async.t11725(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11726));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11725(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___11844 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___11844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___11844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11797){var state_val_11798 = (state_11797[(1)]);if((state_val_11798 === (7)))
{var inst_11741 = (state_11797[(7)]);var inst_11746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11741);var state_11797__$1 = state_11797;var statearr_11799_11845 = state_11797__$1;(statearr_11799_11845[(2)] = inst_11746);
(statearr_11799_11845[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (20)))
{var inst_11756 = (state_11797[(8)]);var state_11797__$1 = state_11797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11797__$1,(23),out,inst_11756);
} else
{if((state_val_11798 === (1)))
{var inst_11731 = (state_11797[(9)]);var inst_11731__$1 = calc_state.call(null);var inst_11732 = cljs.core.seq_QMARK_.call(null,inst_11731__$1);var state_11797__$1 = (function (){var statearr_11800 = state_11797;(statearr_11800[(9)] = inst_11731__$1);
return statearr_11800;
})();if(inst_11732)
{var statearr_11801_11846 = state_11797__$1;(statearr_11801_11846[(1)] = (2));
} else
{var statearr_11802_11847 = state_11797__$1;(statearr_11802_11847[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (24)))
{var inst_11749 = (state_11797[(10)]);var inst_11741 = inst_11749;var state_11797__$1 = (function (){var statearr_11803 = state_11797;(statearr_11803[(7)] = inst_11741);
return statearr_11803;
})();var statearr_11804_11848 = state_11797__$1;(statearr_11804_11848[(2)] = null);
(statearr_11804_11848[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (4)))
{var inst_11731 = (state_11797[(9)]);var inst_11737 = (state_11797[(2)]);var inst_11738 = cljs.core.get.call(null,inst_11737,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11739 = cljs.core.get.call(null,inst_11737,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11740 = cljs.core.get.call(null,inst_11737,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_11741 = inst_11731;var state_11797__$1 = (function (){var statearr_11805 = state_11797;(statearr_11805[(11)] = inst_11738);
(statearr_11805[(12)] = inst_11740);
(statearr_11805[(7)] = inst_11741);
(statearr_11805[(13)] = inst_11739);
return statearr_11805;
})();var statearr_11806_11849 = state_11797__$1;(statearr_11806_11849[(2)] = null);
(statearr_11806_11849[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (15)))
{var state_11797__$1 = state_11797;var statearr_11807_11850 = state_11797__$1;(statearr_11807_11850[(2)] = null);
(statearr_11807_11850[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (21)))
{var inst_11749 = (state_11797[(10)]);var inst_11741 = inst_11749;var state_11797__$1 = (function (){var statearr_11808 = state_11797;(statearr_11808[(7)] = inst_11741);
return statearr_11808;
})();var statearr_11809_11851 = state_11797__$1;(statearr_11809_11851[(2)] = null);
(statearr_11809_11851[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (13)))
{var inst_11793 = (state_11797[(2)]);var state_11797__$1 = state_11797;var statearr_11810_11852 = state_11797__$1;(statearr_11810_11852[(2)] = inst_11793);
(statearr_11810_11852[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (22)))
{var inst_11791 = (state_11797[(2)]);var state_11797__$1 = state_11797;var statearr_11811_11853 = state_11797__$1;(statearr_11811_11853[(2)] = inst_11791);
(statearr_11811_11853[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (6)))
{var inst_11795 = (state_11797[(2)]);var state_11797__$1 = state_11797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11797__$1,inst_11795);
} else
{if((state_val_11798 === (25)))
{var state_11797__$1 = state_11797;var statearr_11812_11854 = state_11797__$1;(statearr_11812_11854[(2)] = null);
(statearr_11812_11854[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (17)))
{var inst_11771 = (state_11797[(14)]);var state_11797__$1 = state_11797;var statearr_11813_11855 = state_11797__$1;(statearr_11813_11855[(2)] = inst_11771);
(statearr_11813_11855[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (3)))
{var inst_11731 = (state_11797[(9)]);var state_11797__$1 = state_11797;var statearr_11814_11856 = state_11797__$1;(statearr_11814_11856[(2)] = inst_11731);
(statearr_11814_11856[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (12)))
{var inst_11757 = (state_11797[(15)]);var inst_11752 = (state_11797[(16)]);var inst_11771 = (state_11797[(14)]);var inst_11771__$1 = inst_11752.call(null,inst_11757);var state_11797__$1 = (function (){var statearr_11815 = state_11797;(statearr_11815[(14)] = inst_11771__$1);
return statearr_11815;
})();if(cljs.core.truth_(inst_11771__$1))
{var statearr_11816_11857 = state_11797__$1;(statearr_11816_11857[(1)] = (17));
} else
{var statearr_11817_11858 = state_11797__$1;(statearr_11817_11858[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (2)))
{var inst_11731 = (state_11797[(9)]);var inst_11734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11731);var state_11797__$1 = state_11797;var statearr_11818_11859 = state_11797__$1;(statearr_11818_11859[(2)] = inst_11734);
(statearr_11818_11859[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (23)))
{var inst_11782 = (state_11797[(2)]);var state_11797__$1 = state_11797;if(cljs.core.truth_(inst_11782))
{var statearr_11819_11860 = state_11797__$1;(statearr_11819_11860[(1)] = (24));
} else
{var statearr_11820_11861 = state_11797__$1;(statearr_11820_11861[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (19)))
{var inst_11779 = (state_11797[(2)]);var state_11797__$1 = state_11797;if(cljs.core.truth_(inst_11779))
{var statearr_11821_11862 = state_11797__$1;(statearr_11821_11862[(1)] = (20));
} else
{var statearr_11822_11863 = state_11797__$1;(statearr_11822_11863[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (11)))
{var inst_11756 = (state_11797[(8)]);var inst_11762 = (inst_11756 == null);var state_11797__$1 = state_11797;if(cljs.core.truth_(inst_11762))
{var statearr_11823_11864 = state_11797__$1;(statearr_11823_11864[(1)] = (14));
} else
{var statearr_11824_11865 = state_11797__$1;(statearr_11824_11865[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (9)))
{var inst_11749 = (state_11797[(10)]);var inst_11749__$1 = (state_11797[(2)]);var inst_11750 = cljs.core.get.call(null,inst_11749__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11751 = cljs.core.get.call(null,inst_11749__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11752 = cljs.core.get.call(null,inst_11749__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_11797__$1 = (function (){var statearr_11825 = state_11797;(statearr_11825[(17)] = inst_11751);
(statearr_11825[(10)] = inst_11749__$1);
(statearr_11825[(16)] = inst_11752);
return statearr_11825;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11797__$1,(10),inst_11750);
} else
{if((state_val_11798 === (5)))
{var inst_11741 = (state_11797[(7)]);var inst_11744 = cljs.core.seq_QMARK_.call(null,inst_11741);var state_11797__$1 = state_11797;if(inst_11744)
{var statearr_11826_11866 = state_11797__$1;(statearr_11826_11866[(1)] = (7));
} else
{var statearr_11827_11867 = state_11797__$1;(statearr_11827_11867[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (14)))
{var inst_11757 = (state_11797[(15)]);var inst_11764 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11757);var state_11797__$1 = state_11797;var statearr_11828_11868 = state_11797__$1;(statearr_11828_11868[(2)] = inst_11764);
(statearr_11828_11868[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (26)))
{var inst_11787 = (state_11797[(2)]);var state_11797__$1 = state_11797;var statearr_11829_11869 = state_11797__$1;(statearr_11829_11869[(2)] = inst_11787);
(statearr_11829_11869[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (16)))
{var inst_11767 = (state_11797[(2)]);var inst_11768 = calc_state.call(null);var inst_11741 = inst_11768;var state_11797__$1 = (function (){var statearr_11830 = state_11797;(statearr_11830[(7)] = inst_11741);
(statearr_11830[(18)] = inst_11767);
return statearr_11830;
})();var statearr_11831_11870 = state_11797__$1;(statearr_11831_11870[(2)] = null);
(statearr_11831_11870[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (10)))
{var inst_11757 = (state_11797[(15)]);var inst_11756 = (state_11797[(8)]);var inst_11755 = (state_11797[(2)]);var inst_11756__$1 = cljs.core.nth.call(null,inst_11755,(0),null);var inst_11757__$1 = cljs.core.nth.call(null,inst_11755,(1),null);var inst_11758 = (inst_11756__$1 == null);var inst_11759 = cljs.core._EQ_.call(null,inst_11757__$1,change);var inst_11760 = (inst_11758) || (inst_11759);var state_11797__$1 = (function (){var statearr_11832 = state_11797;(statearr_11832[(15)] = inst_11757__$1);
(statearr_11832[(8)] = inst_11756__$1);
return statearr_11832;
})();if(cljs.core.truth_(inst_11760))
{var statearr_11833_11871 = state_11797__$1;(statearr_11833_11871[(1)] = (11));
} else
{var statearr_11834_11872 = state_11797__$1;(statearr_11834_11872[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (18)))
{var inst_11757 = (state_11797[(15)]);var inst_11751 = (state_11797[(17)]);var inst_11752 = (state_11797[(16)]);var inst_11774 = cljs.core.empty_QMARK_.call(null,inst_11752);var inst_11775 = inst_11751.call(null,inst_11757);var inst_11776 = cljs.core.not.call(null,inst_11775);var inst_11777 = (inst_11774) && (inst_11776);var state_11797__$1 = state_11797;var statearr_11835_11873 = state_11797__$1;(statearr_11835_11873[(2)] = inst_11777);
(statearr_11835_11873[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11798 === (8)))
{var inst_11741 = (state_11797[(7)]);var state_11797__$1 = state_11797;var statearr_11836_11874 = state_11797__$1;(statearr_11836_11874[(2)] = inst_11741);
(statearr_11836_11874[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___11844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___11844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11840[(0)] = state_machine__5694__auto__);
(statearr_11840[(1)] = (1));
return statearr_11840;
});
var state_machine__5694__auto____1 = (function (state_11797){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11797);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11841){if((e11841 instanceof Object))
{var ex__5697__auto__ = e11841;var statearr_11842_11875 = state_11797;(statearr_11842_11875[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11876 = state_11797;
state_11797 = G__11876;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11797){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___11844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_11843 = f__5709__auto__.call(null);(statearr_11843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___11844);
return statearr_11843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___11844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11878 = {};return obj11878;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__11879_SHARP_){if(cljs.core.truth_(p1__11879_SHARP_.call(null,topic)))
{return p1__11879_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11879_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12002 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12003){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12003 = meta12003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12002.cljs$lang$type = true;
cljs.core.async.t12002.cljs$lang$ctorStr = "cljs.core.async/t12002";
cljs.core.async.t12002.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12002");
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12002.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12004){var self__ = this;
var _12004__$1 = this;return self__.meta12003;
});})(mults,ensure_mult))
;
cljs.core.async.t12002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12004,meta12003__$1){var self__ = this;
var _12004__$1 = this;return (new cljs.core.async.t12002(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12003__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12002 = ((function (mults,ensure_mult){
return (function __GT_t12002(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12003){return (new cljs.core.async.t12002(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12003));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12002(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___12124 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12124,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12124,mults,ensure_mult,p){
return (function (state_12076){var state_val_12077 = (state_12076[(1)]);if((state_val_12077 === (7)))
{var inst_12072 = (state_12076[(2)]);var state_12076__$1 = state_12076;var statearr_12078_12125 = state_12076__$1;(statearr_12078_12125[(2)] = inst_12072);
(statearr_12078_12125[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (20)))
{var state_12076__$1 = state_12076;var statearr_12079_12126 = state_12076__$1;(statearr_12079_12126[(2)] = null);
(statearr_12079_12126[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (1)))
{var state_12076__$1 = state_12076;var statearr_12080_12127 = state_12076__$1;(statearr_12080_12127[(2)] = null);
(statearr_12080_12127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (24)))
{var inst_12055 = (state_12076[(7)]);var inst_12064 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12055);var state_12076__$1 = state_12076;var statearr_12081_12128 = state_12076__$1;(statearr_12081_12128[(2)] = inst_12064);
(statearr_12081_12128[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (4)))
{var inst_12007 = (state_12076[(8)]);var inst_12007__$1 = (state_12076[(2)]);var inst_12008 = (inst_12007__$1 == null);var state_12076__$1 = (function (){var statearr_12082 = state_12076;(statearr_12082[(8)] = inst_12007__$1);
return statearr_12082;
})();if(cljs.core.truth_(inst_12008))
{var statearr_12083_12129 = state_12076__$1;(statearr_12083_12129[(1)] = (5));
} else
{var statearr_12084_12130 = state_12076__$1;(statearr_12084_12130[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (15)))
{var inst_12049 = (state_12076[(2)]);var state_12076__$1 = state_12076;var statearr_12085_12131 = state_12076__$1;(statearr_12085_12131[(2)] = inst_12049);
(statearr_12085_12131[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (21)))
{var inst_12069 = (state_12076[(2)]);var state_12076__$1 = (function (){var statearr_12086 = state_12076;(statearr_12086[(9)] = inst_12069);
return statearr_12086;
})();var statearr_12087_12132 = state_12076__$1;(statearr_12087_12132[(2)] = null);
(statearr_12087_12132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (13)))
{var inst_12031 = (state_12076[(10)]);var inst_12033 = cljs.core.chunked_seq_QMARK_.call(null,inst_12031);var state_12076__$1 = state_12076;if(inst_12033)
{var statearr_12088_12133 = state_12076__$1;(statearr_12088_12133[(1)] = (16));
} else
{var statearr_12089_12134 = state_12076__$1;(statearr_12089_12134[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (22)))
{var inst_12061 = (state_12076[(2)]);var state_12076__$1 = state_12076;if(cljs.core.truth_(inst_12061))
{var statearr_12090_12135 = state_12076__$1;(statearr_12090_12135[(1)] = (23));
} else
{var statearr_12091_12136 = state_12076__$1;(statearr_12091_12136[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (6)))
{var inst_12057 = (state_12076[(11)]);var inst_12007 = (state_12076[(8)]);var inst_12055 = (state_12076[(7)]);var inst_12055__$1 = topic_fn.call(null,inst_12007);var inst_12056 = cljs.core.deref.call(null,mults);var inst_12057__$1 = cljs.core.get.call(null,inst_12056,inst_12055__$1);var state_12076__$1 = (function (){var statearr_12092 = state_12076;(statearr_12092[(11)] = inst_12057__$1);
(statearr_12092[(7)] = inst_12055__$1);
return statearr_12092;
})();if(cljs.core.truth_(inst_12057__$1))
{var statearr_12093_12137 = state_12076__$1;(statearr_12093_12137[(1)] = (19));
} else
{var statearr_12094_12138 = state_12076__$1;(statearr_12094_12138[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (25)))
{var inst_12066 = (state_12076[(2)]);var state_12076__$1 = state_12076;var statearr_12095_12139 = state_12076__$1;(statearr_12095_12139[(2)] = inst_12066);
(statearr_12095_12139[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (17)))
{var inst_12031 = (state_12076[(10)]);var inst_12040 = cljs.core.first.call(null,inst_12031);var inst_12041 = cljs.core.async.muxch_STAR_.call(null,inst_12040);var inst_12042 = cljs.core.async.close_BANG_.call(null,inst_12041);var inst_12043 = cljs.core.next.call(null,inst_12031);var inst_12017 = inst_12043;var inst_12018 = null;var inst_12019 = (0);var inst_12020 = (0);var state_12076__$1 = (function (){var statearr_12096 = state_12076;(statearr_12096[(12)] = inst_12018);
(statearr_12096[(13)] = inst_12042);
(statearr_12096[(14)] = inst_12020);
(statearr_12096[(15)] = inst_12017);
(statearr_12096[(16)] = inst_12019);
return statearr_12096;
})();var statearr_12097_12140 = state_12076__$1;(statearr_12097_12140[(2)] = null);
(statearr_12097_12140[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (3)))
{var inst_12074 = (state_12076[(2)]);var state_12076__$1 = state_12076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12076__$1,inst_12074);
} else
{if((state_val_12077 === (12)))
{var inst_12051 = (state_12076[(2)]);var state_12076__$1 = state_12076;var statearr_12098_12141 = state_12076__$1;(statearr_12098_12141[(2)] = inst_12051);
(statearr_12098_12141[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (2)))
{var state_12076__$1 = state_12076;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12076__$1,(4),ch);
} else
{if((state_val_12077 === (23)))
{var state_12076__$1 = state_12076;var statearr_12099_12142 = state_12076__$1;(statearr_12099_12142[(2)] = null);
(statearr_12099_12142[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (19)))
{var inst_12057 = (state_12076[(11)]);var inst_12007 = (state_12076[(8)]);var inst_12059 = cljs.core.async.muxch_STAR_.call(null,inst_12057);var state_12076__$1 = state_12076;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12076__$1,(22),inst_12059,inst_12007);
} else
{if((state_val_12077 === (11)))
{var inst_12031 = (state_12076[(10)]);var inst_12017 = (state_12076[(15)]);var inst_12031__$1 = cljs.core.seq.call(null,inst_12017);var state_12076__$1 = (function (){var statearr_12100 = state_12076;(statearr_12100[(10)] = inst_12031__$1);
return statearr_12100;
})();if(inst_12031__$1)
{var statearr_12101_12143 = state_12076__$1;(statearr_12101_12143[(1)] = (13));
} else
{var statearr_12102_12144 = state_12076__$1;(statearr_12102_12144[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (9)))
{var inst_12053 = (state_12076[(2)]);var state_12076__$1 = state_12076;var statearr_12103_12145 = state_12076__$1;(statearr_12103_12145[(2)] = inst_12053);
(statearr_12103_12145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (5)))
{var inst_12014 = cljs.core.deref.call(null,mults);var inst_12015 = cljs.core.vals.call(null,inst_12014);var inst_12016 = cljs.core.seq.call(null,inst_12015);var inst_12017 = inst_12016;var inst_12018 = null;var inst_12019 = (0);var inst_12020 = (0);var state_12076__$1 = (function (){var statearr_12104 = state_12076;(statearr_12104[(12)] = inst_12018);
(statearr_12104[(14)] = inst_12020);
(statearr_12104[(15)] = inst_12017);
(statearr_12104[(16)] = inst_12019);
return statearr_12104;
})();var statearr_12105_12146 = state_12076__$1;(statearr_12105_12146[(2)] = null);
(statearr_12105_12146[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (14)))
{var state_12076__$1 = state_12076;var statearr_12109_12147 = state_12076__$1;(statearr_12109_12147[(2)] = null);
(statearr_12109_12147[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (16)))
{var inst_12031 = (state_12076[(10)]);var inst_12035 = cljs.core.chunk_first.call(null,inst_12031);var inst_12036 = cljs.core.chunk_rest.call(null,inst_12031);var inst_12037 = cljs.core.count.call(null,inst_12035);var inst_12017 = inst_12036;var inst_12018 = inst_12035;var inst_12019 = inst_12037;var inst_12020 = (0);var state_12076__$1 = (function (){var statearr_12110 = state_12076;(statearr_12110[(12)] = inst_12018);
(statearr_12110[(14)] = inst_12020);
(statearr_12110[(15)] = inst_12017);
(statearr_12110[(16)] = inst_12019);
return statearr_12110;
})();var statearr_12111_12148 = state_12076__$1;(statearr_12111_12148[(2)] = null);
(statearr_12111_12148[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (10)))
{var inst_12018 = (state_12076[(12)]);var inst_12020 = (state_12076[(14)]);var inst_12017 = (state_12076[(15)]);var inst_12019 = (state_12076[(16)]);var inst_12025 = cljs.core._nth.call(null,inst_12018,inst_12020);var inst_12026 = cljs.core.async.muxch_STAR_.call(null,inst_12025);var inst_12027 = cljs.core.async.close_BANG_.call(null,inst_12026);var inst_12028 = (inst_12020 + (1));var tmp12106 = inst_12018;var tmp12107 = inst_12017;var tmp12108 = inst_12019;var inst_12017__$1 = tmp12107;var inst_12018__$1 = tmp12106;var inst_12019__$1 = tmp12108;var inst_12020__$1 = inst_12028;var state_12076__$1 = (function (){var statearr_12112 = state_12076;(statearr_12112[(12)] = inst_12018__$1);
(statearr_12112[(14)] = inst_12020__$1);
(statearr_12112[(15)] = inst_12017__$1);
(statearr_12112[(17)] = inst_12027);
(statearr_12112[(16)] = inst_12019__$1);
return statearr_12112;
})();var statearr_12113_12149 = state_12076__$1;(statearr_12113_12149[(2)] = null);
(statearr_12113_12149[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (18)))
{var inst_12046 = (state_12076[(2)]);var state_12076__$1 = state_12076;var statearr_12114_12150 = state_12076__$1;(statearr_12114_12150[(2)] = inst_12046);
(statearr_12114_12150[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12077 === (8)))
{var inst_12020 = (state_12076[(14)]);var inst_12019 = (state_12076[(16)]);var inst_12022 = (inst_12020 < inst_12019);var inst_12023 = inst_12022;var state_12076__$1 = state_12076;if(cljs.core.truth_(inst_12023))
{var statearr_12115_12151 = state_12076__$1;(statearr_12115_12151[(1)] = (10));
} else
{var statearr_12116_12152 = state_12076__$1;(statearr_12116_12152[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12124,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___12124,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12120[(0)] = state_machine__5694__auto__);
(statearr_12120[(1)] = (1));
return statearr_12120;
});
var state_machine__5694__auto____1 = (function (state_12076){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12121){if((e12121 instanceof Object))
{var ex__5697__auto__ = e12121;var statearr_12122_12153 = state_12076;(statearr_12122_12153[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12154 = state_12076;
state_12076 = G__12154;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12076){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12124,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_12123 = f__5709__auto__.call(null);(statearr_12123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12124);
return statearr_12123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12124,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5708__auto___12291 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12291,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12291,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12261){var state_val_12262 = (state_12261[(1)]);if((state_val_12262 === (7)))
{var state_12261__$1 = state_12261;var statearr_12263_12292 = state_12261__$1;(statearr_12263_12292[(2)] = null);
(statearr_12263_12292[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (1)))
{var state_12261__$1 = state_12261;var statearr_12264_12293 = state_12261__$1;(statearr_12264_12293[(2)] = null);
(statearr_12264_12293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (4)))
{var inst_12225 = (state_12261[(7)]);var inst_12227 = (inst_12225 < cnt);var state_12261__$1 = state_12261;if(cljs.core.truth_(inst_12227))
{var statearr_12265_12294 = state_12261__$1;(statearr_12265_12294[(1)] = (6));
} else
{var statearr_12266_12295 = state_12261__$1;(statearr_12266_12295[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (15)))
{var inst_12257 = (state_12261[(2)]);var state_12261__$1 = state_12261;var statearr_12267_12296 = state_12261__$1;(statearr_12267_12296[(2)] = inst_12257);
(statearr_12267_12296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (13)))
{var inst_12250 = cljs.core.async.close_BANG_.call(null,out);var state_12261__$1 = state_12261;var statearr_12268_12297 = state_12261__$1;(statearr_12268_12297[(2)] = inst_12250);
(statearr_12268_12297[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (6)))
{var state_12261__$1 = state_12261;var statearr_12269_12298 = state_12261__$1;(statearr_12269_12298[(2)] = null);
(statearr_12269_12298[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (3)))
{var inst_12259 = (state_12261[(2)]);var state_12261__$1 = state_12261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12261__$1,inst_12259);
} else
{if((state_val_12262 === (12)))
{var inst_12247 = (state_12261[(8)]);var inst_12247__$1 = (state_12261[(2)]);var inst_12248 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12247__$1);var state_12261__$1 = (function (){var statearr_12270 = state_12261;(statearr_12270[(8)] = inst_12247__$1);
return statearr_12270;
})();if(cljs.core.truth_(inst_12248))
{var statearr_12271_12299 = state_12261__$1;(statearr_12271_12299[(1)] = (13));
} else
{var statearr_12272_12300 = state_12261__$1;(statearr_12272_12300[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (2)))
{var inst_12224 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12225 = (0);var state_12261__$1 = (function (){var statearr_12273 = state_12261;(statearr_12273[(9)] = inst_12224);
(statearr_12273[(7)] = inst_12225);
return statearr_12273;
})();var statearr_12274_12301 = state_12261__$1;(statearr_12274_12301[(2)] = null);
(statearr_12274_12301[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (11)))
{var inst_12225 = (state_12261[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12261,(10),Object,null,(9));var inst_12234 = chs__$1.call(null,inst_12225);var inst_12235 = done.call(null,inst_12225);var inst_12236 = cljs.core.async.take_BANG_.call(null,inst_12234,inst_12235);var state_12261__$1 = state_12261;var statearr_12275_12302 = state_12261__$1;(statearr_12275_12302[(2)] = inst_12236);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12261__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (9)))
{var inst_12225 = (state_12261[(7)]);var inst_12238 = (state_12261[(2)]);var inst_12239 = (inst_12225 + (1));var inst_12225__$1 = inst_12239;var state_12261__$1 = (function (){var statearr_12276 = state_12261;(statearr_12276[(10)] = inst_12238);
(statearr_12276[(7)] = inst_12225__$1);
return statearr_12276;
})();var statearr_12277_12303 = state_12261__$1;(statearr_12277_12303[(2)] = null);
(statearr_12277_12303[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (5)))
{var inst_12245 = (state_12261[(2)]);var state_12261__$1 = (function (){var statearr_12278 = state_12261;(statearr_12278[(11)] = inst_12245);
return statearr_12278;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12261__$1,(12),dchan);
} else
{if((state_val_12262 === (14)))
{var inst_12247 = (state_12261[(8)]);var inst_12252 = cljs.core.apply.call(null,f,inst_12247);var state_12261__$1 = state_12261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12261__$1,(16),out,inst_12252);
} else
{if((state_val_12262 === (16)))
{var inst_12254 = (state_12261[(2)]);var state_12261__$1 = (function (){var statearr_12279 = state_12261;(statearr_12279[(12)] = inst_12254);
return statearr_12279;
})();var statearr_12280_12304 = state_12261__$1;(statearr_12280_12304[(2)] = null);
(statearr_12280_12304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (10)))
{var inst_12229 = (state_12261[(2)]);var inst_12230 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12261__$1 = (function (){var statearr_12281 = state_12261;(statearr_12281[(13)] = inst_12229);
return statearr_12281;
})();var statearr_12282_12305 = state_12261__$1;(statearr_12282_12305[(2)] = inst_12230);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12261__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (8)))
{var inst_12243 = (state_12261[(2)]);var state_12261__$1 = state_12261;var statearr_12283_12306 = state_12261__$1;(statearr_12283_12306[(2)] = inst_12243);
(statearr_12283_12306[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12291,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___12291,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12287[(0)] = state_machine__5694__auto__);
(statearr_12287[(1)] = (1));
return statearr_12287;
});
var state_machine__5694__auto____1 = (function (state_12261){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12288){if((e12288 instanceof Object))
{var ex__5697__auto__ = e12288;var statearr_12289_12307 = state_12261;(statearr_12289_12307[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12308 = state_12261;
state_12261 = G__12308;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12261){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12291,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_12290 = f__5709__auto__.call(null);(statearr_12290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12291);
return statearr_12290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12291,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___12416 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12416,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12416,out){
return (function (state_12392){var state_val_12393 = (state_12392[(1)]);if((state_val_12393 === (7)))
{var inst_12372 = (state_12392[(7)]);var inst_12371 = (state_12392[(8)]);var inst_12371__$1 = (state_12392[(2)]);var inst_12372__$1 = cljs.core.nth.call(null,inst_12371__$1,(0),null);var inst_12373 = cljs.core.nth.call(null,inst_12371__$1,(1),null);var inst_12374 = (inst_12372__$1 == null);var state_12392__$1 = (function (){var statearr_12394 = state_12392;(statearr_12394[(9)] = inst_12373);
(statearr_12394[(7)] = inst_12372__$1);
(statearr_12394[(8)] = inst_12371__$1);
return statearr_12394;
})();if(cljs.core.truth_(inst_12374))
{var statearr_12395_12417 = state_12392__$1;(statearr_12395_12417[(1)] = (8));
} else
{var statearr_12396_12418 = state_12392__$1;(statearr_12396_12418[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (1)))
{var inst_12363 = cljs.core.vec.call(null,chs);var inst_12364 = inst_12363;var state_12392__$1 = (function (){var statearr_12397 = state_12392;(statearr_12397[(10)] = inst_12364);
return statearr_12397;
})();var statearr_12398_12419 = state_12392__$1;(statearr_12398_12419[(2)] = null);
(statearr_12398_12419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (4)))
{var inst_12364 = (state_12392[(10)]);var state_12392__$1 = state_12392;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12392__$1,(7),inst_12364);
} else
{if((state_val_12393 === (6)))
{var inst_12388 = (state_12392[(2)]);var state_12392__$1 = state_12392;var statearr_12399_12420 = state_12392__$1;(statearr_12399_12420[(2)] = inst_12388);
(statearr_12399_12420[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (3)))
{var inst_12390 = (state_12392[(2)]);var state_12392__$1 = state_12392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12392__$1,inst_12390);
} else
{if((state_val_12393 === (2)))
{var inst_12364 = (state_12392[(10)]);var inst_12366 = cljs.core.count.call(null,inst_12364);var inst_12367 = (inst_12366 > (0));var state_12392__$1 = state_12392;if(cljs.core.truth_(inst_12367))
{var statearr_12401_12421 = state_12392__$1;(statearr_12401_12421[(1)] = (4));
} else
{var statearr_12402_12422 = state_12392__$1;(statearr_12402_12422[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (11)))
{var inst_12364 = (state_12392[(10)]);var inst_12381 = (state_12392[(2)]);var tmp12400 = inst_12364;var inst_12364__$1 = tmp12400;var state_12392__$1 = (function (){var statearr_12403 = state_12392;(statearr_12403[(11)] = inst_12381);
(statearr_12403[(10)] = inst_12364__$1);
return statearr_12403;
})();var statearr_12404_12423 = state_12392__$1;(statearr_12404_12423[(2)] = null);
(statearr_12404_12423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (9)))
{var inst_12372 = (state_12392[(7)]);var state_12392__$1 = state_12392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12392__$1,(11),out,inst_12372);
} else
{if((state_val_12393 === (5)))
{var inst_12386 = cljs.core.async.close_BANG_.call(null,out);var state_12392__$1 = state_12392;var statearr_12405_12424 = state_12392__$1;(statearr_12405_12424[(2)] = inst_12386);
(statearr_12405_12424[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (10)))
{var inst_12384 = (state_12392[(2)]);var state_12392__$1 = state_12392;var statearr_12406_12425 = state_12392__$1;(statearr_12406_12425[(2)] = inst_12384);
(statearr_12406_12425[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12393 === (8)))
{var inst_12373 = (state_12392[(9)]);var inst_12372 = (state_12392[(7)]);var inst_12364 = (state_12392[(10)]);var inst_12371 = (state_12392[(8)]);var inst_12376 = (function (){var c = inst_12373;var v = inst_12372;var vec__12369 = inst_12371;var cs = inst_12364;return ((function (c,v,vec__12369,cs,inst_12373,inst_12372,inst_12364,inst_12371,state_val_12393,c__5708__auto___12416,out){
return (function (p1__12309_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12309_SHARP_);
});
;})(c,v,vec__12369,cs,inst_12373,inst_12372,inst_12364,inst_12371,state_val_12393,c__5708__auto___12416,out))
})();var inst_12377 = cljs.core.filterv.call(null,inst_12376,inst_12364);var inst_12364__$1 = inst_12377;var state_12392__$1 = (function (){var statearr_12407 = state_12392;(statearr_12407[(10)] = inst_12364__$1);
return statearr_12407;
})();var statearr_12408_12426 = state_12392__$1;(statearr_12408_12426[(2)] = null);
(statearr_12408_12426[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12416,out))
;return ((function (switch__5693__auto__,c__5708__auto___12416,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12412 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12412[(0)] = state_machine__5694__auto__);
(statearr_12412[(1)] = (1));
return statearr_12412;
});
var state_machine__5694__auto____1 = (function (state_12392){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12392);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12413){if((e12413 instanceof Object))
{var ex__5697__auto__ = e12413;var statearr_12414_12427 = state_12392;(statearr_12414_12427[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12428 = state_12392;
state_12392 = G__12428;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12392){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12416,out))
})();var state__5710__auto__ = (function (){var statearr_12415 = f__5709__auto__.call(null);(statearr_12415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12416);
return statearr_12415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12416,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___12521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12521,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12521,out){
return (function (state_12498){var state_val_12499 = (state_12498[(1)]);if((state_val_12499 === (7)))
{var inst_12480 = (state_12498[(7)]);var inst_12480__$1 = (state_12498[(2)]);var inst_12481 = (inst_12480__$1 == null);var inst_12482 = cljs.core.not.call(null,inst_12481);var state_12498__$1 = (function (){var statearr_12500 = state_12498;(statearr_12500[(7)] = inst_12480__$1);
return statearr_12500;
})();if(inst_12482)
{var statearr_12501_12522 = state_12498__$1;(statearr_12501_12522[(1)] = (8));
} else
{var statearr_12502_12523 = state_12498__$1;(statearr_12502_12523[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (1)))
{var inst_12475 = (0);var state_12498__$1 = (function (){var statearr_12503 = state_12498;(statearr_12503[(8)] = inst_12475);
return statearr_12503;
})();var statearr_12504_12524 = state_12498__$1;(statearr_12504_12524[(2)] = null);
(statearr_12504_12524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (4)))
{var state_12498__$1 = state_12498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12498__$1,(7),ch);
} else
{if((state_val_12499 === (6)))
{var inst_12493 = (state_12498[(2)]);var state_12498__$1 = state_12498;var statearr_12505_12525 = state_12498__$1;(statearr_12505_12525[(2)] = inst_12493);
(statearr_12505_12525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (3)))
{var inst_12495 = (state_12498[(2)]);var inst_12496 = cljs.core.async.close_BANG_.call(null,out);var state_12498__$1 = (function (){var statearr_12506 = state_12498;(statearr_12506[(9)] = inst_12495);
return statearr_12506;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12498__$1,inst_12496);
} else
{if((state_val_12499 === (2)))
{var inst_12475 = (state_12498[(8)]);var inst_12477 = (inst_12475 < n);var state_12498__$1 = state_12498;if(cljs.core.truth_(inst_12477))
{var statearr_12507_12526 = state_12498__$1;(statearr_12507_12526[(1)] = (4));
} else
{var statearr_12508_12527 = state_12498__$1;(statearr_12508_12527[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (11)))
{var inst_12475 = (state_12498[(8)]);var inst_12485 = (state_12498[(2)]);var inst_12486 = (inst_12475 + (1));var inst_12475__$1 = inst_12486;var state_12498__$1 = (function (){var statearr_12509 = state_12498;(statearr_12509[(8)] = inst_12475__$1);
(statearr_12509[(10)] = inst_12485);
return statearr_12509;
})();var statearr_12510_12528 = state_12498__$1;(statearr_12510_12528[(2)] = null);
(statearr_12510_12528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (9)))
{var state_12498__$1 = state_12498;var statearr_12511_12529 = state_12498__$1;(statearr_12511_12529[(2)] = null);
(statearr_12511_12529[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (5)))
{var state_12498__$1 = state_12498;var statearr_12512_12530 = state_12498__$1;(statearr_12512_12530[(2)] = null);
(statearr_12512_12530[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (10)))
{var inst_12490 = (state_12498[(2)]);var state_12498__$1 = state_12498;var statearr_12513_12531 = state_12498__$1;(statearr_12513_12531[(2)] = inst_12490);
(statearr_12513_12531[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12499 === (8)))
{var inst_12480 = (state_12498[(7)]);var state_12498__$1 = state_12498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12498__$1,(11),out,inst_12480);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12521,out))
;return ((function (switch__5693__auto__,c__5708__auto___12521,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12517 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12517[(0)] = state_machine__5694__auto__);
(statearr_12517[(1)] = (1));
return statearr_12517;
});
var state_machine__5694__auto____1 = (function (state_12498){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12518){if((e12518 instanceof Object))
{var ex__5697__auto__ = e12518;var statearr_12519_12532 = state_12498;(statearr_12519_12532[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12533 = state_12498;
state_12498 = G__12533;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12498){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12521,out))
})();var state__5710__auto__ = (function (){var statearr_12520 = f__5709__auto__.call(null);(statearr_12520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12521);
return statearr_12520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12521,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___12630 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12630,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12630,out){
return (function (state_12605){var state_val_12606 = (state_12605[(1)]);if((state_val_12606 === (7)))
{var inst_12600 = (state_12605[(2)]);var state_12605__$1 = state_12605;var statearr_12607_12631 = state_12605__$1;(statearr_12607_12631[(2)] = inst_12600);
(statearr_12607_12631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (1)))
{var inst_12582 = null;var state_12605__$1 = (function (){var statearr_12608 = state_12605;(statearr_12608[(7)] = inst_12582);
return statearr_12608;
})();var statearr_12609_12632 = state_12605__$1;(statearr_12609_12632[(2)] = null);
(statearr_12609_12632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (4)))
{var inst_12585 = (state_12605[(8)]);var inst_12585__$1 = (state_12605[(2)]);var inst_12586 = (inst_12585__$1 == null);var inst_12587 = cljs.core.not.call(null,inst_12586);var state_12605__$1 = (function (){var statearr_12610 = state_12605;(statearr_12610[(8)] = inst_12585__$1);
return statearr_12610;
})();if(inst_12587)
{var statearr_12611_12633 = state_12605__$1;(statearr_12611_12633[(1)] = (5));
} else
{var statearr_12612_12634 = state_12605__$1;(statearr_12612_12634[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (6)))
{var state_12605__$1 = state_12605;var statearr_12613_12635 = state_12605__$1;(statearr_12613_12635[(2)] = null);
(statearr_12613_12635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (3)))
{var inst_12602 = (state_12605[(2)]);var inst_12603 = cljs.core.async.close_BANG_.call(null,out);var state_12605__$1 = (function (){var statearr_12614 = state_12605;(statearr_12614[(9)] = inst_12602);
return statearr_12614;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12605__$1,inst_12603);
} else
{if((state_val_12606 === (2)))
{var state_12605__$1 = state_12605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12605__$1,(4),ch);
} else
{if((state_val_12606 === (11)))
{var inst_12585 = (state_12605[(8)]);var inst_12594 = (state_12605[(2)]);var inst_12582 = inst_12585;var state_12605__$1 = (function (){var statearr_12615 = state_12605;(statearr_12615[(10)] = inst_12594);
(statearr_12615[(7)] = inst_12582);
return statearr_12615;
})();var statearr_12616_12636 = state_12605__$1;(statearr_12616_12636[(2)] = null);
(statearr_12616_12636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (9)))
{var inst_12585 = (state_12605[(8)]);var state_12605__$1 = state_12605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12605__$1,(11),out,inst_12585);
} else
{if((state_val_12606 === (5)))
{var inst_12582 = (state_12605[(7)]);var inst_12585 = (state_12605[(8)]);var inst_12589 = cljs.core._EQ_.call(null,inst_12585,inst_12582);var state_12605__$1 = state_12605;if(inst_12589)
{var statearr_12618_12637 = state_12605__$1;(statearr_12618_12637[(1)] = (8));
} else
{var statearr_12619_12638 = state_12605__$1;(statearr_12619_12638[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (10)))
{var inst_12597 = (state_12605[(2)]);var state_12605__$1 = state_12605;var statearr_12620_12639 = state_12605__$1;(statearr_12620_12639[(2)] = inst_12597);
(statearr_12620_12639[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (8)))
{var inst_12582 = (state_12605[(7)]);var tmp12617 = inst_12582;var inst_12582__$1 = tmp12617;var state_12605__$1 = (function (){var statearr_12621 = state_12605;(statearr_12621[(7)] = inst_12582__$1);
return statearr_12621;
})();var statearr_12622_12640 = state_12605__$1;(statearr_12622_12640[(2)] = null);
(statearr_12622_12640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12630,out))
;return ((function (switch__5693__auto__,c__5708__auto___12630,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12626 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12626[(0)] = state_machine__5694__auto__);
(statearr_12626[(1)] = (1));
return statearr_12626;
});
var state_machine__5694__auto____1 = (function (state_12605){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12605);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12627){if((e12627 instanceof Object))
{var ex__5697__auto__ = e12627;var statearr_12628_12641 = state_12605;(statearr_12628_12641[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12642 = state_12605;
state_12605 = G__12642;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12605){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12630,out))
})();var state__5710__auto__ = (function (){var statearr_12629 = f__5709__auto__.call(null);(statearr_12629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12630);
return statearr_12629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12630,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___12777 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12777,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12777,out){
return (function (state_12747){var state_val_12748 = (state_12747[(1)]);if((state_val_12748 === (7)))
{var inst_12743 = (state_12747[(2)]);var state_12747__$1 = state_12747;var statearr_12749_12778 = state_12747__$1;(statearr_12749_12778[(2)] = inst_12743);
(statearr_12749_12778[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (1)))
{var inst_12710 = (new Array(n));var inst_12711 = inst_12710;var inst_12712 = (0);var state_12747__$1 = (function (){var statearr_12750 = state_12747;(statearr_12750[(7)] = inst_12712);
(statearr_12750[(8)] = inst_12711);
return statearr_12750;
})();var statearr_12751_12779 = state_12747__$1;(statearr_12751_12779[(2)] = null);
(statearr_12751_12779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (4)))
{var inst_12715 = (state_12747[(9)]);var inst_12715__$1 = (state_12747[(2)]);var inst_12716 = (inst_12715__$1 == null);var inst_12717 = cljs.core.not.call(null,inst_12716);var state_12747__$1 = (function (){var statearr_12752 = state_12747;(statearr_12752[(9)] = inst_12715__$1);
return statearr_12752;
})();if(inst_12717)
{var statearr_12753_12780 = state_12747__$1;(statearr_12753_12780[(1)] = (5));
} else
{var statearr_12754_12781 = state_12747__$1;(statearr_12754_12781[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (15)))
{var inst_12737 = (state_12747[(2)]);var state_12747__$1 = state_12747;var statearr_12755_12782 = state_12747__$1;(statearr_12755_12782[(2)] = inst_12737);
(statearr_12755_12782[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (13)))
{var state_12747__$1 = state_12747;var statearr_12756_12783 = state_12747__$1;(statearr_12756_12783[(2)] = null);
(statearr_12756_12783[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (6)))
{var inst_12712 = (state_12747[(7)]);var inst_12733 = (inst_12712 > (0));var state_12747__$1 = state_12747;if(cljs.core.truth_(inst_12733))
{var statearr_12757_12784 = state_12747__$1;(statearr_12757_12784[(1)] = (12));
} else
{var statearr_12758_12785 = state_12747__$1;(statearr_12758_12785[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (3)))
{var inst_12745 = (state_12747[(2)]);var state_12747__$1 = state_12747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12747__$1,inst_12745);
} else
{if((state_val_12748 === (12)))
{var inst_12711 = (state_12747[(8)]);var inst_12735 = cljs.core.vec.call(null,inst_12711);var state_12747__$1 = state_12747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12747__$1,(15),out,inst_12735);
} else
{if((state_val_12748 === (2)))
{var state_12747__$1 = state_12747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12747__$1,(4),ch);
} else
{if((state_val_12748 === (11)))
{var inst_12727 = (state_12747[(2)]);var inst_12728 = (new Array(n));var inst_12711 = inst_12728;var inst_12712 = (0);var state_12747__$1 = (function (){var statearr_12759 = state_12747;(statearr_12759[(7)] = inst_12712);
(statearr_12759[(8)] = inst_12711);
(statearr_12759[(10)] = inst_12727);
return statearr_12759;
})();var statearr_12760_12786 = state_12747__$1;(statearr_12760_12786[(2)] = null);
(statearr_12760_12786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (9)))
{var inst_12711 = (state_12747[(8)]);var inst_12725 = cljs.core.vec.call(null,inst_12711);var state_12747__$1 = state_12747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12747__$1,(11),out,inst_12725);
} else
{if((state_val_12748 === (5)))
{var inst_12712 = (state_12747[(7)]);var inst_12711 = (state_12747[(8)]);var inst_12715 = (state_12747[(9)]);var inst_12720 = (state_12747[(11)]);var inst_12719 = (inst_12711[inst_12712] = inst_12715);var inst_12720__$1 = (inst_12712 + (1));var inst_12721 = (inst_12720__$1 < n);var state_12747__$1 = (function (){var statearr_12761 = state_12747;(statearr_12761[(12)] = inst_12719);
(statearr_12761[(11)] = inst_12720__$1);
return statearr_12761;
})();if(cljs.core.truth_(inst_12721))
{var statearr_12762_12787 = state_12747__$1;(statearr_12762_12787[(1)] = (8));
} else
{var statearr_12763_12788 = state_12747__$1;(statearr_12763_12788[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (14)))
{var inst_12740 = (state_12747[(2)]);var inst_12741 = cljs.core.async.close_BANG_.call(null,out);var state_12747__$1 = (function (){var statearr_12765 = state_12747;(statearr_12765[(13)] = inst_12740);
return statearr_12765;
})();var statearr_12766_12789 = state_12747__$1;(statearr_12766_12789[(2)] = inst_12741);
(statearr_12766_12789[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (10)))
{var inst_12731 = (state_12747[(2)]);var state_12747__$1 = state_12747;var statearr_12767_12790 = state_12747__$1;(statearr_12767_12790[(2)] = inst_12731);
(statearr_12767_12790[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (8)))
{var inst_12711 = (state_12747[(8)]);var inst_12720 = (state_12747[(11)]);var tmp12764 = inst_12711;var inst_12711__$1 = tmp12764;var inst_12712 = inst_12720;var state_12747__$1 = (function (){var statearr_12768 = state_12747;(statearr_12768[(7)] = inst_12712);
(statearr_12768[(8)] = inst_12711__$1);
return statearr_12768;
})();var statearr_12769_12791 = state_12747__$1;(statearr_12769_12791[(2)] = null);
(statearr_12769_12791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12777,out))
;return ((function (switch__5693__auto__,c__5708__auto___12777,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12773[(0)] = state_machine__5694__auto__);
(statearr_12773[(1)] = (1));
return statearr_12773;
});
var state_machine__5694__auto____1 = (function (state_12747){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12747);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12774){if((e12774 instanceof Object))
{var ex__5697__auto__ = e12774;var statearr_12775_12792 = state_12747;(statearr_12775_12792[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12793 = state_12747;
state_12747 = G__12793;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12747){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12777,out))
})();var state__5710__auto__ = (function (){var statearr_12776 = f__5709__auto__.call(null);(statearr_12776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12777);
return statearr_12776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12777,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___12936 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12936,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12936,out){
return (function (state_12906){var state_val_12907 = (state_12906[(1)]);if((state_val_12907 === (7)))
{var inst_12902 = (state_12906[(2)]);var state_12906__$1 = state_12906;var statearr_12908_12937 = state_12906__$1;(statearr_12908_12937[(2)] = inst_12902);
(statearr_12908_12937[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (1)))
{var inst_12865 = [];var inst_12866 = inst_12865;var inst_12867 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12906__$1 = (function (){var statearr_12909 = state_12906;(statearr_12909[(7)] = inst_12867);
(statearr_12909[(8)] = inst_12866);
return statearr_12909;
})();var statearr_12910_12938 = state_12906__$1;(statearr_12910_12938[(2)] = null);
(statearr_12910_12938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (4)))
{var inst_12870 = (state_12906[(9)]);var inst_12870__$1 = (state_12906[(2)]);var inst_12871 = (inst_12870__$1 == null);var inst_12872 = cljs.core.not.call(null,inst_12871);var state_12906__$1 = (function (){var statearr_12911 = state_12906;(statearr_12911[(9)] = inst_12870__$1);
return statearr_12911;
})();if(inst_12872)
{var statearr_12912_12939 = state_12906__$1;(statearr_12912_12939[(1)] = (5));
} else
{var statearr_12913_12940 = state_12906__$1;(statearr_12913_12940[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (15)))
{var inst_12896 = (state_12906[(2)]);var state_12906__$1 = state_12906;var statearr_12914_12941 = state_12906__$1;(statearr_12914_12941[(2)] = inst_12896);
(statearr_12914_12941[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (13)))
{var state_12906__$1 = state_12906;var statearr_12915_12942 = state_12906__$1;(statearr_12915_12942[(2)] = null);
(statearr_12915_12942[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (6)))
{var inst_12866 = (state_12906[(8)]);var inst_12891 = inst_12866.length;var inst_12892 = (inst_12891 > (0));var state_12906__$1 = state_12906;if(cljs.core.truth_(inst_12892))
{var statearr_12916_12943 = state_12906__$1;(statearr_12916_12943[(1)] = (12));
} else
{var statearr_12917_12944 = state_12906__$1;(statearr_12917_12944[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (3)))
{var inst_12904 = (state_12906[(2)]);var state_12906__$1 = state_12906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12906__$1,inst_12904);
} else
{if((state_val_12907 === (12)))
{var inst_12866 = (state_12906[(8)]);var inst_12894 = cljs.core.vec.call(null,inst_12866);var state_12906__$1 = state_12906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12906__$1,(15),out,inst_12894);
} else
{if((state_val_12907 === (2)))
{var state_12906__$1 = state_12906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12906__$1,(4),ch);
} else
{if((state_val_12907 === (11)))
{var inst_12870 = (state_12906[(9)]);var inst_12874 = (state_12906[(10)]);var inst_12884 = (state_12906[(2)]);var inst_12885 = [];var inst_12886 = inst_12885.push(inst_12870);var inst_12866 = inst_12885;var inst_12867 = inst_12874;var state_12906__$1 = (function (){var statearr_12918 = state_12906;(statearr_12918[(7)] = inst_12867);
(statearr_12918[(11)] = inst_12884);
(statearr_12918[(8)] = inst_12866);
(statearr_12918[(12)] = inst_12886);
return statearr_12918;
})();var statearr_12919_12945 = state_12906__$1;(statearr_12919_12945[(2)] = null);
(statearr_12919_12945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (9)))
{var inst_12866 = (state_12906[(8)]);var inst_12882 = cljs.core.vec.call(null,inst_12866);var state_12906__$1 = state_12906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12906__$1,(11),out,inst_12882);
} else
{if((state_val_12907 === (5)))
{var inst_12870 = (state_12906[(9)]);var inst_12874 = (state_12906[(10)]);var inst_12867 = (state_12906[(7)]);var inst_12874__$1 = f.call(null,inst_12870);var inst_12875 = cljs.core._EQ_.call(null,inst_12874__$1,inst_12867);var inst_12876 = cljs.core.keyword_identical_QMARK_.call(null,inst_12867,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12877 = (inst_12875) || (inst_12876);var state_12906__$1 = (function (){var statearr_12920 = state_12906;(statearr_12920[(10)] = inst_12874__$1);
return statearr_12920;
})();if(cljs.core.truth_(inst_12877))
{var statearr_12921_12946 = state_12906__$1;(statearr_12921_12946[(1)] = (8));
} else
{var statearr_12922_12947 = state_12906__$1;(statearr_12922_12947[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (14)))
{var inst_12899 = (state_12906[(2)]);var inst_12900 = cljs.core.async.close_BANG_.call(null,out);var state_12906__$1 = (function (){var statearr_12924 = state_12906;(statearr_12924[(13)] = inst_12899);
return statearr_12924;
})();var statearr_12925_12948 = state_12906__$1;(statearr_12925_12948[(2)] = inst_12900);
(statearr_12925_12948[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (10)))
{var inst_12889 = (state_12906[(2)]);var state_12906__$1 = state_12906;var statearr_12926_12949 = state_12906__$1;(statearr_12926_12949[(2)] = inst_12889);
(statearr_12926_12949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (8)))
{var inst_12870 = (state_12906[(9)]);var inst_12874 = (state_12906[(10)]);var inst_12866 = (state_12906[(8)]);var inst_12879 = inst_12866.push(inst_12870);var tmp12923 = inst_12866;var inst_12866__$1 = tmp12923;var inst_12867 = inst_12874;var state_12906__$1 = (function (){var statearr_12927 = state_12906;(statearr_12927[(14)] = inst_12879);
(statearr_12927[(7)] = inst_12867);
(statearr_12927[(8)] = inst_12866__$1);
return statearr_12927;
})();var statearr_12928_12950 = state_12906__$1;(statearr_12928_12950[(2)] = null);
(statearr_12928_12950[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12936,out))
;return ((function (switch__5693__auto__,c__5708__auto___12936,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12932[(0)] = state_machine__5694__auto__);
(statearr_12932[(1)] = (1));
return statearr_12932;
});
var state_machine__5694__auto____1 = (function (state_12906){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12933){if((e12933 instanceof Object))
{var ex__5697__auto__ = e12933;var statearr_12934_12951 = state_12906;(statearr_12934_12951[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12952 = state_12906;
state_12906 = G__12952;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12906){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12936,out))
})();var state__5710__auto__ = (function (){var statearr_12935 = f__5709__auto__.call(null);(statearr_12935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12936);
return statearr_12935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12936,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map