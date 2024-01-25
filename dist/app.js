(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/**
	@license @nocompile
	Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/

	(function(){/*

	 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at
	 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
	 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
	 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
	 Google as part of the polymer project is also subject to an additional IP
	 rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	var v;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
	function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof commonjsGlobal&&commonjsGlobal];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ea=da(this);function fa(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e];}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b});}}
	fa("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.g=e;ca(this,"description",{configurable:!0,writable:!0,value:f});}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b});
	fa("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ba(this))}});}return a});function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
	function ka(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}function w(a){if(!(a instanceof Array)){a=ka(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c;}return a}var la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else {var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1;}la=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}
	var qa=la;function ra(){this.u=!1;this.h=null;this.Oa=void 0;this.g=1;this.ea=0;this.i=null;}function ua(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0;}ra.prototype.O=function(a){this.Oa=a;};function wa(a,b){a.i={ab:b,fb:!0};a.g=a.ea;}ra.prototype.return=function(a){this.i={return:a};this.g=this.ea;};function ya(a,b){a.g=3;return {value:b}}function za(a){this.g=new ra;this.h=a;}
	function Aa(a,b){ua(a.g);var c=a.g.h;if(c)return Ba(a,"return"in c?c["return"]:function(d){return {value:d,done:!0}},b,a.g.return);a.g.return(b);return Ca(a)}function Ba(a,b,c,d){try{var e=b.call(a.g.h,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value;}catch(g){return a.g.h=null,wa(a.g,g),Ca(a)}a.g.h=null;d.call(a.g,f);return Ca(a)}
	function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.Oa=void 0,wa(a.g,c);}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.fb)throw b.ab;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
	function Da(a){this.next=function(b){ua(a.g);a.g.h?b=Ba(a,a.g.h.next,b,a.g.O):(a.g.O(b),b=Ca(a));return b};this.throw=function(b){ua(a.g);a.g.h?b=Ba(a,a.g.h["throw"],b,a.g.O):(wa(a.g,b),b=Ca(a));return b};this.return=function(b){return Aa(a,b)};this[Symbol.iterator]=function(){return this};}function Ea(a,b){b=new Da(new za(b));qa&&a.prototype&&qa(b,a.prototype);return b}Array.from||(Array.from=function(a){return [].slice.call(a)});
	Object.assign||(Object.assign=function(a){for(var b=[].slice.call(arguments,1),c=0,d;c<b.length;c++)if(d=b[c])for(var e=a,f=Object.keys(d),g=0;g<f.length;g++){var h=f[g];e[h]=d[h];}return a});var Fa=setTimeout;function Ga(){}function Ha(a,b){return function(){a.apply(b,arguments);}}function A(a){if(!(this instanceof A))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.N=0;this.Ha=!1;this.I=void 0;this.ba=[];Ia(a,this);}
	function Ja(a,b){for(;3===a.N;)a=a.I;0===a.N?a.ba.push(b):(a.Ha=!0,Ka(function(){var c=1===a.N?b.hb:b.ib;if(null===c)(1===a.N?La:Ma)(b.promise,a.I);else {try{var d=c(a.I);}catch(e){Ma(b.promise,e);return}La(b.promise,d);}}));}
	function La(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof A){a.N=3;a.I=b;Na(a);return}if("function"===typeof c){Ia(Ha(c,b),a);return}}a.N=1;a.I=b;Na(a);}catch(d){Ma(a,d);}}function Ma(a,b){a.N=2;a.I=b;Na(a);}
	function Na(a){2===a.N&&0===a.ba.length&&Ka(function(){a.Ha||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.I);});for(var b=0,c=a.ba.length;b<c;b++)Ja(a,a.ba[b]);a.ba=null;}function Oa(a,b,c){this.hb="function"===typeof a?a:null;this.ib="function"===typeof b?b:null;this.promise=c;}function Ia(a,b){var c=!1;try{a(function(d){c||(c=!0,La(b,d));},function(d){c||(c=!0,Ma(b,d));});}catch(d){c||(c=!0,Ma(b,d));}}
	A.prototype["catch"]=function(a){return this.then(null,a)};A.prototype.then=function(a,b){var c=new this.constructor(Ga);Ja(this,new Oa(a,b,c));return c};A.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
	function Pa(a){return new A(function(b,c){function d(h,k){try{if(k&&("object"===typeof k||"function"===typeof k)){var l=k.then;if("function"===typeof l){l.call(k,function(m){d(h,m);},c);return}}e[h]=k;0===--f&&b(e);}catch(m){c(m);}}if(!a||"undefined"===typeof a.length)return c(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g]);})}
	function Qa(a){return a&&"object"===typeof a&&a.constructor===A?a:new A(function(b){b(a);})}function Ra(a){return new A(function(b,c){c(a);})}function Sa(a){return new A(function(b,c){if(!a||"undefined"===typeof a.length)return c(new TypeError("Promise.race accepts an array"));for(var d=0,e=a.length;d<e;d++)Qa(a[d]).then(b,c);})}var Ka="function"===typeof setImmediate&&function(a){setImmediate(a);}||function(a){Fa(a,0);};/*

	Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at
	http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
	http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
	found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
	part of the polymer project is also subject to an additional IP rights grant
	found at http://polymer.github.io/PATENTS.txt
	*/
	if(!window.Promise){window.Promise=A;A.prototype.then=A.prototype.then;A.all=Pa;A.race=Sa;A.resolve=Qa;A.reject=Ra;var Ta=document.createTextNode(""),Ua=[];(new MutationObserver(function(){for(var a=Ua.length,b=0;b<a;b++)Ua[b]();Ua.splice(0,a);})).observe(Ta,{characterData:!0});Ka=function(a){Ua.push(a);Ta.textContent=0<Ta.textContent.length?"":"a";};}(function(a,b){if(!(b in a)){var c=typeof commonjsGlobal===typeof c?window:commonjsGlobal,d=0,e=String(Math.random()),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,m=a.freeze||a,q=a.defineProperty,H=a.defineProperties,C=h(a,"getOwnPropertyNames"),t=a.prototype,F=t.hasOwnProperty,E=t.propertyIsEnumerable,N=t.toString,y=function(I,u,G){F.call(I,f)||q(I,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});I[f]["@@"+u]=G;},X=function(I,u){var G=k(I);g(u).forEach(function(p){sa.call(u,
	p)&&Va(G,p,u[p]);});return G},x=function(){},ta=function(I){return I!=f&&!F.call(ha,I)},ia=function(I){return I!=f&&F.call(ha,I)},sa=function(I){var u=String(I);return ia(u)?F.call(this,u)&&!!this[f]&&this[f]["@@"+u]:E.call(this,I)},n=function(I){q(t,I,{enumerable:!1,configurable:!0,get:x,set:function(u){xa(this,I,{enumerable:!1,configurable:!0,writable:!0,value:u});y(this,I,!0);}});ha[I]=q(a(I),"constructor",kc);return m(ha[I])},J=function G(u){if(this instanceof G)throw new TypeError("Symbol is not a constructor");
	return n("__\u0001symbol:".concat(u||"",e,++d))},ha=k(null),kc={value:J},ib=function(u){return ha[u]},Va=function(u,G,p){var r=String(G);if(ia(r)){G=xa;if(p.enumerable){var B=k(p);B.enumerable=!1;}else B=p;G(u,r,B);y(u,r,!!p.enumerable);}else q(u,G,p);return u},jb=function(u){return g(u).filter(ia).map(ib)};C.value=Va;q(a,"defineProperty",C);C.value=jb;q(a,b,C);C.value=function(u){return g(u).filter(ta)};q(a,"getOwnPropertyNames",C);C.value=function(u,G){var p=jb(G);p.length?l(G).concat(p).forEach(function(r){sa.call(G,
	r)&&Va(u,r,G[r]);}):H(u,G);return u};q(a,"defineProperties",C);C.value=sa;q(t,"propertyIsEnumerable",C);C.value=J;q(c,"Symbol",C);C.value=function(u){u="__\u0001symbol:".concat("__\u0001symbol:",u,e);return u in t?ha[u]:n(u)};q(J,"for",C);C.value=function(u){if(ta(u))throw new TypeError(u+" is not a symbol");if(F.call(ha,u)&&(u=u.slice(10),"__\u0001symbol:"===u.slice(0,10)&&(u=u.slice(10),u!==e)))return u=u.slice(0,u.length-e.length),0<u.length?u:void 0};q(J,"keyFor",C);C.value=function(u,G){var p=
	h(u,G);p&&ia(G)&&(p.enumerable=sa.call(u,G));return p};q(a,"getOwnPropertyDescriptor",C);C.value=function(u,G){return 1===arguments.length||"undefined"===typeof G?k(u):X(u,G)};q(a,"create",C);C.value=function(){var u=N.call(this);return "[object String]"===u&&ia(this)?"[object Symbol]":u};q(t,"toString",C);try{if(!0===k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!0})["__\u0001symbol:"]}}))["__\u0001symbol:"])var xa=q;else throw "IE11";}catch(u){xa=function(G,p,r){var B=
	h(t,p);delete t[p];q(G,p,r);q(t,p,B);};}}})(Object,"getOwnPropertySymbols");
	(function(a,b){var c=a.defineProperty,d=a.prototype,e=d.toString,f;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(g){g in b||(c(b,g,{value:b(g)}),"toStringTag"===g&&(f=a.getOwnPropertyDescriptor(d,"toString"),f.value=function(){var h=e.call(this),k=null==this?this:this[b.toStringTag];return null==k?h:"[object "+k+"]"},c(d,"toString",f)));});})(Object,Symbol);
	(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var e=0,f=this,g={next:function(){var h=f.length<=e;return h?{done:h}:{done:h,value:f[e++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var e=String.fromCodePoint,f=this,g=0,h=f.length,k={next:function(){var l=h<=g,m=l?"":e(f.codePointAt(g));g+=m.length;return l?{done:l}:{done:l,value:m}}};k[a]=d;return k});})(Symbol.iterator,Array.prototype,String.prototype);/*

	Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at
	http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
	http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
	found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
	part of the polymer project is also subject to an additional IP rights grant
	found at http://polymer.github.io/PATENTS.txt
	*/
	var Wa=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Wa.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return (b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};
	String.prototype[Symbol.iterator]&&String.prototype.codePointAt||(String.prototype[Symbol.iterator]=function Xa(){var b,c=this;return Ea(Xa,function(d){1==d.g&&(b=0);if(3!=d.g)return b<c.length?d=ya(d,c[b]):(d.g=0,d=void 0),d;b++;d.g=2;})});Set.prototype[Symbol.iterator]||(Set.prototype[Symbol.iterator]=function Ya(){var b,c=this,d;return Ea(Ya,function(e){1==e.g&&(b=[],c.forEach(function(f){b.push(f);}),d=0);if(3!=e.g)return d<b.length?e=ya(e,b[d]):(e.g=0,e=void 0),e;d++;e.g=2;})});
	Map.prototype[Symbol.iterator]||(Map.prototype[Symbol.iterator]=function Za(){var b,c=this,d;return Ea(Za,function(e){1==e.g&&(b=[],c.forEach(function(f,g){b.push([g,f]);}),d=0);if(3!=e.g)return d<b.length?e=ya(e,b[d]):(e.g=0,e=void 0),e;d++;e.g=2;})});/*

	Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	var $a=document.createEvent("Event");$a.initEvent("foo",!0,!0);$a.preventDefault();if(!$a.defaultPrevented){var ab=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(ab.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var bb=/Trident/.test(navigator.userAgent);
	if(!window.Event||bb&&"function"!==typeof window.Event){var cb=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(cb){for(var db in cb)window.Event[db]=cb[db];window.Event.prototype=cb.prototype;}}
	if(!window.CustomEvent||bb&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;
	if(!window.MouseEvent||bb&&"function"!==typeof window.MouseEvent){var eb=window.MouseEvent;window.MouseEvent=function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(eb)for(var fb in eb)window.MouseEvent[fb]=eb[fb];window.MouseEvent.prototype=eb.prototype;}var gb,hb=function(){function a(){e++;}var b=!1,c=!1,d={get capture(){return b=!0},get once(){return c=!0}},e=0,f=document.createElement("div");f.addEventListener("click",a,d);var g=b&&c;g&&(f.dispatchEvent(new Event("click")),f.dispatchEvent(new Event("click")),g=1==e);f.removeEventListener("click",a,d);return g}(),kb=null!==(gb=window.EventTarget)&&void 0!==gb?gb:window.Node;
	if(!hb&&"addEventListener"in kb.prototype){var lb=function(a){if(!a||"object"!==typeof a&&"function"!==typeof a){var b=!!a;a=!1;}else b=!!a.capture,a=!!a.once;return {capture:b,once:a}},mb=kb.prototype.addEventListener,nb=kb.prototype.removeEventListener,qb=new WeakMap,rb=new WeakMap,sb=function(a,b,c){var d=c?qb:rb;c=d.get(a);void 0===c&&d.set(a,c=new Map);a=c.get(b);void 0===a&&c.set(b,a=new WeakMap);return a};kb.prototype.addEventListener=function(a,b,c){var d=this;if(null!=b){c=lb(c);var e=c.capture;
	c=c.once;var f=sb(this,a,e);if(!f.has(b)){var g=c?function(h){f.delete(b);nb.call(d,a,g,e);if("function"===typeof b)return b.call(d,h);if("function"===typeof(null===b||void 0===b?void 0:b.handleEvent))return b.handleEvent(h)}:null;f.set(b,g);mb.call(this,a,null!==g&&void 0!==g?g:b,e);}}};kb.prototype.removeEventListener=function(a,b,c){if(null!=b){c=lb(c).capture;var d=sb(this,a,c),e=d.get(b);void 0!==e&&(d.delete(b),nb.call(this,a,null!==e&&void 0!==e?e:b,c));}};}Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});/*

	Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at
	http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
	http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
	found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
	part of the polymer project is also subject to an additional IP rights grant
	found at http://polymer.github.io/PATENTS.txt
	*/
	var tb,ub,vb=Element.prototype,wb=null!==(tb=Object.getOwnPropertyDescriptor(vb,"attributes"))&&void 0!==tb?tb:Object.getOwnPropertyDescriptor(Node.prototype,"attributes"),xb=null!==(ub=null===wb||void 0===wb?void 0:wb.get)&&void 0!==ub?ub:function(){return this.attributes},yb=Array.prototype.map;vb.hasOwnProperty("getAttributeNames")||(vb.getAttributeNames=function(){return yb.call(xb.call(this),function(a){return a.name})});var zb,Ab=Element.prototype;Ab.hasOwnProperty("matches")||(Ab.matches=null!==(zb=Ab.webkitMatchesSelector)&&void 0!==zb?zb:Ab.msMatchesSelector);var Bb=Node.prototype.appendChild;function Cb(a){a=a.prototype;a.hasOwnProperty("append")||Object.defineProperty(a,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];c=ka(c);for(d=c.next();!d.done;d=c.next())d=d.value,Bb.call(this,"string"===typeof d?document.createTextNode(d):d);}});}Cb(Document);Cb(DocumentFragment);Cb(Element);var Db,Eb,Fb=Node.prototype.insertBefore,Gb=null!==(Eb=null===(Db=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))||void 0===Db?void 0:Db.get)&&void 0!==Eb?Eb:function(){return this.firstChild};
	function Hb(a){a=a.prototype;a.hasOwnProperty("prepend")||Object.defineProperty(a,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=Gb.call(this);c=ka(c);for(var e=c.next();!e.done;e=c.next())e=e.value,Fb.call(this,"string"===typeof e?document.createTextNode(e):e,d);}});}Hb(Document);Hb(DocumentFragment);Hb(Element);var Ib,Jb,Kb=Node.prototype.appendChild,Lb=Node.prototype.removeChild,Mb=null!==(Jb=null===(Ib=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))||void 0===Ib?void 0:Ib.get)&&void 0!==Jb?Jb:function(){return this.firstChild};
	function Nb(a){a=a.prototype;a.hasOwnProperty("replaceChildren")||Object.defineProperty(a,"replaceChildren",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];for(;null!==(d=Mb.call(this));)Lb.call(this,d);c=ka(c);for(d=c.next();!d.done;d=c.next())d=d.value,Kb.call(this,"string"===typeof d?document.createTextNode(d):d);}});}Nb(Document);Nb(DocumentFragment);Nb(Element);var Ob,Pb,Qb,Rb,Sb=Node.prototype.insertBefore,Tb=null!==(Pb=null===(Ob=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===Ob?void 0:Ob.get)&&void 0!==Pb?Pb:function(){return this.parentNode},Ub=null!==(Rb=null===(Qb=Object.getOwnPropertyDescriptor(Node.prototype,"nextSibling"))||void 0===Qb?void 0:Qb.get)&&void 0!==Rb?Rb:function(){return this.nextSibling};
	function Vb(a){a=a.prototype;a.hasOwnProperty("after")||Object.defineProperty(a,"after",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=Tb.call(this);if(null!==d){var e=Ub.call(this);c=ka(c);for(var f=c.next();!f.done;f=c.next())f=f.value,Sb.call(d,"string"===typeof f?document.createTextNode(f):f,e);}}});}Vb(CharacterData);Vb(Element);var Wb,Xb,Yb=Node.prototype.insertBefore,Zb=null!==(Xb=null===(Wb=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===Wb?void 0:Wb.get)&&void 0!==Xb?Xb:function(){return this.parentNode};
	function $b(a){a=a.prototype;a.hasOwnProperty("before")||Object.defineProperty(a,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=Zb.call(this);if(null!==d){c=ka(c);for(var e=c.next();!e.done;e=c.next())e=e.value,Yb.call(d,"string"===typeof e?document.createTextNode(e):e,this);}}});}$b(CharacterData);$b(Element);var ac,bc,cc=Node.prototype.removeChild,dc=null!==(bc=null===(ac=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===ac?void 0:ac.get)&&void 0!==bc?bc:function(){return this.parentNode};function ec(a){a=a.prototype;a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){var b=dc.call(this);b&&cc.call(b,this);}});}ec(CharacterData);ec(Element);var fc,gc,hc=Node.prototype.insertBefore,ic=Node.prototype.removeChild,jc=null!==(gc=null===(fc=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))||void 0===fc?void 0:fc.get)&&void 0!==gc?gc:function(){return this.parentNode};
	function lc(a){a=a.prototype;a.hasOwnProperty("replaceWith")||Object.defineProperty(a,"replaceWith",{configurable:!0,enumerable:!0,writable:!0,value:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=jc.call(this);if(null!==d){c=ka(c);for(var e=c.next();!e.done;e=c.next())e=e.value,hc.call(d,"string"===typeof e?document.createTextNode(e):e,this);ic.call(d,this);}}});}lc(CharacterData);lc(Element);var mc=window.Element.prototype,nc=window.HTMLElement.prototype,oc=window.SVGElement.prototype;!nc.hasOwnProperty("classList")||mc.hasOwnProperty("classList")||oc.hasOwnProperty("classList")||Object.defineProperty(mc,"classList",Object.getOwnPropertyDescriptor(nc,"classList"));var pc=Element.prototype,qc=Element.prototype.hasAttribute,rc=Element.prototype.setAttribute,sc=Element.prototype.removeAttribute;pc.hasOwnProperty("toggleAttribute")||(pc.toggleAttribute=function(a,b){if(void 0===b){if(qc.call(this,a))return sc.call(this,a),!1;rc.call(this,a,"");return !0}if(b)return qc.call(this,a)||rc.call(this,a,""),!0;sc.call(this,a);return !1});/*

	 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at
	 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
	 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
	 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
	 Google as part of the polymer project is also subject to an additional IP
	 rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	var tc=document.createElement("style");tc.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var uc=document.querySelector("head");uc.insertBefore(tc,uc.firstChild);var vc=window;vc.WebComponents=vc.WebComponents||{flags:{}};var wc=document.querySelector('script[src*="webcomponents-bundle"]'),xc=/wc-(.+)/,yc={};if(!yc.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(xc))&&(yc[b[1]]=a[1]||!0);});if(wc)for(var zc=0,Ac=void 0;Ac=wc.attributes[zc];zc++)"src"!==Ac.name&&(yc[Ac.name]=Ac.value||!0);var Bc={};yc.log&&yc.log.split&&yc.log.split(",").forEach(function(a){Bc[a]=!0;});yc.log=Bc;}
	vc.WebComponents.flags=yc;var Cc=yc.shadydom;if(Cc){vc.ShadyDOM=vc.ShadyDOM||{};vc.ShadyDOM.force=Cc;var Dc=yc.noPatch;vc.ShadyDOM.noPatch="true"===Dc?!0:Dc;}var Ec=yc.register||yc.ce;Ec&&window.customElements&&(vc.customElements.forcePolyfill=Ec);/*

	 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	(function(){function a(){}function b(p,r){if(!p.childNodes.length)return [];switch(p.nodeType){case Node.DOCUMENT_NODE:return F.call(p,r);case Node.DOCUMENT_FRAGMENT_NODE:return E.call(p,r);default:return t.call(p,r)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function p(z,R){if(z instanceof DocumentFragment)for(var ob;ob=z.firstChild;)B.call(this,ob,R);else B.call(this,
	z,R);return z}e=!0;var r=Node.prototype.cloneNode;Node.prototype.cloneNode=function(z){z=r.call(this,z);this instanceof DocumentFragment&&(z.__proto__=DocumentFragment.prototype);return z};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
	configurable:!0},nodeName:{get:function(){return "#document-fragment"},configurable:!0}});var B=Node.prototype.insertBefore;Node.prototype.insertBefore=p;var K=Node.prototype.appendChild;Node.prototype.appendChild=function(z){z instanceof DocumentFragment?p.call(this,z,null):K.call(this,z);return z};var aa=Node.prototype.removeChild,ma=Node.prototype.replaceChild;Node.prototype.replaceChild=function(z,R){z instanceof DocumentFragment?(p.call(this,z,R),aa.call(this,R)):ma.call(this,z,R);return R};Document.prototype.createDocumentFragment=
	function(){var z=this.createElement("df");z.__proto__=DocumentFragment.prototype;return z};var va=Document.prototype.importNode;Document.prototype.importNode=function(z,R){R=va.call(this,z,R||!1);z instanceof DocumentFragment&&(R.__proto__=DocumentFragment.prototype);return R};}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,m=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
	H=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(p){this.innerHTML=p;}},C=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},t=Element.prototype.querySelectorAll,F=Document.prototype.querySelectorAll,E=DocumentFragment.prototype.querySelectorAll,N=function(){if(!c){var p=document.createElement("template"),r=document.createElement("template");r.content.appendChild(document.createElement("div"));
	p.content.appendChild(r);p=p.cloneNode(!0);return 0===p.content.childNodes.length||0===p.content.firstChild.content.childNodes.length||d}}();if(c){var y=document.implementation.createHTMLDocument("template"),X=!0,x=document.createElement("style");x.textContent="template{display:none;}";var ta=document.head;ta.insertBefore(x,ta.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var ia=!document.createElement("div").hasOwnProperty("innerHTML");a.Z=function(p){if(!p.content&&p.namespaceURI===
	document.documentElement.namespaceURI){p.content=y.createDocumentFragment();for(var r;r=p.firstChild;)l.call(p.content,r);if(ia)p.__proto__=a.prototype;else if(p.cloneNode=function(B){return a.va(this,B)},X)try{n(p),J(p);}catch(B){X=!1;}a.bootstrap(p.content);}};var sa={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},n=function(p){Object.defineProperty(p,"innerHTML",{get:function(){return xa(this)},set:function(r){var B=
	sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r)||["",""])[1].toLowerCase()];if(B)for(var K=0;K<B.length;K++)r="<"+B[K]+">"+r+"</"+B[K]+">";y.body.innerHTML=r;for(a.bootstrap(y);this.content.firstChild;)k.call(this.content,this.content.firstChild);r=y.body;if(B)for(K=0;K<B.length;K++)r=r.lastChild;for(;r.firstChild;)l.call(this.content,r.firstChild);},configurable:!0});},J=function(p){Object.defineProperty(p,"outerHTML",{get:function(){return "<template>"+this.innerHTML+"</template>"},set:function(r){if(this.parentNode){y.body.innerHTML=
	r;for(r=this.ownerDocument.createDocumentFragment();y.body.firstChild;)l.call(r,y.body.firstChild);m.call(this.parentNode,r,this);}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0});};n(a.prototype);J(a.prototype);a.bootstrap=function(p){p=b(p,"template");for(var r=0,B=p.length,K;r<B&&(K=p[r]);r++)a.Z(K);};document.addEventListener("DOMContentLoaded",function(){a.bootstrap(document);});Document.prototype.createElement=function(){var p=
	g.apply(this,arguments);"template"===p.localName&&a.Z(p);return p};DOMParser.prototype.parseFromString=function(){var p=q.apply(this,arguments);a.bootstrap(p);return p};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return xa(this)},set:function(p){H.set.call(this,p);a.bootstrap(this);},configurable:!0,enumerable:!0});var ha=/[&\u00A0"]/g,kc=/[&\u00A0<>]/g,ib=function(p){switch(p){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}};
	x=function(p){for(var r={},B=0;B<p.length;B++)r[p[B]]=!0;return r};var Va=x("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),jb=x("style script xmp iframe noembed noframes plaintext noscript".split(" ")),xa=function(p,r){"template"===p.localName&&(p=p.content);for(var B="",K=r?r(p):C.get.call(p),aa=0,ma=K.length,va;aa<ma&&(va=K[aa]);aa++){a:{var z=va;var R=p;var ob=r;switch(z.nodeType){case Node.ELEMENT_NODE:for(var Kc=z.localName,pb="<"+Kc,Zh=z.attributes,
	He=0;R=Zh[He];He++)pb+=" "+R.name+'="'+R.value.replace(ha,ib)+'"';pb+=">";z=Va[Kc]?pb:pb+xa(z,ob)+"</"+Kc+">";break a;case Node.TEXT_NODE:z=z.data;z=R&&jb[R.localName]?z:z.replace(kc,ib);break a;case Node.COMMENT_NODE:z="\x3c!--"+z.data+"--\x3e";break a;default:throw window.console.error(z),Error("not implemented");}}B+=z;}return B};}if(c||N){a.va=function(p,r){var B=f.call(p,!1);this.Z&&this.Z(B);r&&(l.call(B.content,f.call(p.content,!0)),I(B.content,p.content));return B};var I=function(p,r){if(r.querySelectorAll&&
	(r=b(r,"template"),0!==r.length)){p=b(p,"template");for(var B=0,K=p.length,aa,ma;B<K;B++)ma=r[B],aa=p[B],a&&a.Z&&a.Z(ma),m.call(aa.parentNode,u.call(ma,!0),aa);}},u=Node.prototype.cloneNode=function(p){if(!e&&d&&this instanceof DocumentFragment)if(p)var r=G.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?r=a.va(this,p):r=f.call(this,
	p);p&&I(r,this);return r},G=Document.prototype.importNode=function(p,r){r=r||!1;if("template"===p.localName)return a.va(p,r);var B=h.call(this,p,r);if(r){I(B,p);p=b(B,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var K,aa=0;aa<p.length;aa++){K=p[aa];r=g.call(document,"script");r.textContent=K.textContent;for(var ma=K.attributes,va=0,z;va<ma.length;va++)z=ma[va],r.setAttribute(z.name,z.value);m.call(K.parentNode,r,K);}}return B};}c&&(window.HTMLTemplateElement=
	a);})();/*

	Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	function Fc(){}Fc.prototype.toJSON=function(){return {}};function D(a){a.__shady||(a.__shady=new Fc);return a.__shady}function L(a){return a&&a.__shady}var M=window.ShadyDOM||{};M.cb=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var Gc=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");M.D=!!(Gc&&Gc.configurable&&Gc.get);M.Ba=M.force||!M.cb;M.J=M.noPatch||!1;M.ha=M.preferPerformance;M.Da="on-demand"===M.J;var Hc;var Ic=M.querySelectorImplementation;Hc=-1<["native","selectorEngine"].indexOf(Ic)?Ic:void 0;M.wb=Hc;M.Ra=navigator.userAgent.match("Trident");
	function Jc(){return Document.prototype.msElementsFromPoint?"msElementsFromPoint":"elementsFromPoint"}function Lc(a){return (a=L(a))&&void 0!==a.firstChild}function O(a){return a instanceof ShadowRoot}function Mc(a){return (a=(a=L(a))&&a.root)&&Nc(a)}var Oc=Element.prototype,Pc=Oc.matches||Oc.matchesSelector||Oc.mozMatchesSelector||Oc.msMatchesSelector||Oc.oMatchesSelector||Oc.webkitMatchesSelector,Qc=document.createTextNode(""),Rc=0,Sc=[];
	(new MutationObserver(function(){for(;Sc.length;)try{Sc.shift()();}catch(a){throw Qc.textContent=Rc++,a;}})).observe(Qc,{characterData:!0});function Tc(a){Sc.push(a);Qc.textContent=Rc++;}var Uc=document.contains?function(a,b){return a.__shady_native_contains(b)}:function(a,b){return a===b||a.documentElement&&a.documentElement.__shady_native_contains(b)};function Vc(a,b){for(;b;){if(b==a)return !0;b=b.__shady_parentNode;}return !1}
	function Wc(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c);}a.item=function(e){return a[e]};a.namedItem=function(e){if("length"!==e&&isNaN(e)&&a[e])return a[e];for(var f=ka(a),g=f.next();!g.done;g=f.next())if(g=g.value,(g.getAttribute("id")||g.getAttribute("name"))==e)return g;return null};return a}function Xc(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
	function Yc(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function Zc(a,b,c){c.configurable=!0;if(c.value)a[b]=c.value;else try{Object.defineProperty(a,b,c);}catch(d){}}function P(a,b,c,d){c=void 0===c?"":c;for(var e in b)d&&0<=d.indexOf(e)||Zc(a,c+e,b[e]);}function $c(a,b){for(var c in b)c in a&&Zc(a,c,b[c]);}function Q(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c);});return b}
	function ad(a,b){for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length;d++)e=c[d],a[e]=b[e];}function bd(a){return a instanceof Node?a:document.createTextNode(""+a)}function cd(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];if(1===b.length)return bd(b[0]);c=document.createDocumentFragment();b=ka(b);for(var d=b.next();!d.done;d=b.next())c.appendChild(bd(d.value));return c}
	function dd(a){var b;for(b=void 0===b?1:b;0<b;b--)a=a.reduce(function(c,d){Array.isArray(d)?c.push.apply(c,w(d)):c.push(d);return c},[]);return a}function ed(a){var b=[],c=new Set;a=ka(a);for(var d=a.next();!d.done;d=a.next())d=d.value,c.has(d)||(b.push(d),c.add(d));return b}var fd=[],gd;function hd(a){gd||(gd=!0,Tc(id));fd.push(a);}function id(){gd=!1;for(var a=!!fd.length;fd.length;)fd.shift()();return a}id.list=fd;function jd(){this.g=!1;this.addedNodes=[];this.removedNodes=[];this.qa=new Set;}function kd(a){a.g||(a.g=!0,Tc(function(){a.flush();}));}jd.prototype.flush=function(){if(this.g){this.g=!1;var a=this.takeRecords();a.length&&this.qa.forEach(function(b){b(a);});}};jd.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return []};
	function ld(a,b){var c=D(a);c.ga||(c.ga=new jd);c.ga.qa.add(b);var d=c.ga;return {Va:b,X:d,Wa:a,takeRecords:function(){return d.takeRecords()}}}function md(a){var b=a&&a.X;b&&(b.qa.delete(a.Va),b.qa.size||(D(a.Wa).ga=null));}
	function nd(a,b){var c=b.getRootNode();return a.map(function(d){var e=c===d.target.getRootNode();if(e&&d.addedNodes){if(e=[].slice.call(d.addedNodes).filter(function(f){return c===f.getRootNode()}),e.length)return d=Object.create(d),Object.defineProperty(d,"addedNodes",{value:e,configurable:!0}),d}else if(e)return d}).filter(function(d){return d})}var od=/[&\u00A0"]/g,pd=/[&\u00A0<>]/g;function qd(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}}function rd(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var sd=rd("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),td=rd("style script xmp iframe noembed noframes plaintext noscript".split(" "));
	function ud(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var m="<"+k,q=h.attributes,H=0,C;C=q[H];H++)m+=" "+C.name+'="'+C.value.replace(od,qd)+'"';m+=">";h=sd[k]?m:m+ud(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&td[k.localName]?h:h.replace(pd,qd);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
	Error("not implemented");}}c+=h;}return c}var vd=M.D,wd={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},xd={};function yd(a){xd[a]=function(b){return b["__shady_native_"+a]};}function zd(a,b){P(a,b,"__shady_native_");for(var c in b)yd(c);}function S(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?wd[d]||(wd[d]=e.value):yd(d));}}
	var Ad=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),Bd=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Cd=document.implementation.createHTMLDocument("inert");function Dd(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b);}var Ed=["firstElementChild","lastElementChild","children","childElementCount"],Fd=["querySelector","querySelectorAll","append","prepend","replaceChildren"];
	function Gd(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?(S(window.EventTarget.prototype,a),void 0===window.__shady_native_addEventListener&&S(Window.prototype,a)):(S(Node.prototype,a),S(Window.prototype,a),S(XMLHttpRequest.prototype,a));vd?S(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):zd(Node.prototype,{parentNode:{get:function(){Ad.currentNode=this;return Ad.parentNode()}},
	firstChild:{get:function(){Ad.currentNode=this;return Ad.firstChild()}},lastChild:{get:function(){Ad.currentNode=this;return Ad.lastChild()}},previousSibling:{get:function(){Ad.currentNode=this;return Ad.previousSibling()}},nextSibling:{get:function(){Ad.currentNode=this;return Ad.nextSibling()}},childNodes:{get:function(){var b=[];Ad.currentNode=this;for(var c=Ad.firstChild();c;)b.push(c),c=Ad.nextSibling();return b}},parentElement:{get:function(){Bd.currentNode=this;return Bd.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var b=
	document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),c="",d;d=b.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(b){if("undefined"===typeof b||null===b)b="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Dd(this);(0<b.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(b),void 0);break;default:this.nodeValue=b;}}}});S(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
	S(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){Bd.currentNode=this;return Bd.firstChild()}},lastElementChild:{get:function(){Bd.currentNode=this;return Bd.lastChild()}},children:{get:function(){var b=[];Bd.currentNode=this;for(var c=Bd.firstChild();c;)b.push(c),c=Bd.nextSibling();return Wc(b)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};vd?(S(Element.prototype,Ed),S(Element.prototype,["previousElementSibling","nextElementSibling",
	"innerHTML","className"]),S(HTMLElement.prototype,["children","innerHTML","className"])):(zd(Element.prototype,a),zd(Element.prototype,{previousElementSibling:{get:function(){Bd.currentNode=this;return Bd.previousSibling()}},nextElementSibling:{get:function(){Bd.currentNode=this;return Bd.nextSibling()}},innerHTML:{get:function(){return ud(this,Xc)},set:function(b){var c="template"===this.localName?this.content:this;Dd(c);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Cd.namespaceURI?
	Cd.createElementNS(this.namespaceURI,d):Cd.createElement(d);d.innerHTML=b;for(b="template"===this.localName?d.content:d;d=b.__shady_native_firstChild;)c.__shady_native_insertBefore(d,void 0);}},className:{get:function(){return this.getAttribute("class")||""},set:function(b){this.setAttribute("class",b);}}}));S(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute toggleAttribute focus blur".split(" "));S(Element.prototype,Fd);S(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
	S(window.HTMLTemplateElement.prototype,["innerHTML"]);vd?S(DocumentFragment.prototype,Ed):zd(DocumentFragment.prototype,a);S(DocumentFragment.prototype,Fd);vd?(S(Document.prototype,Ed),S(Document.prototype,["activeElement"])):zd(Document.prototype,a);S(Document.prototype,["importNode","getElementById","elementFromPoint",Jc()]);S(Document.prototype,Fd);}var Hd=Q({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),Id=Q({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
	a;},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){this.__shady_innerHTML=a;}}),Jd=Q({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},set className(a){this.__shady_className=
	a;}});function Kd(a){for(var b in a){var c=a[b];c&&(c.enumerable=!1);}}Kd(Hd);Kd(Id);Kd(Jd);var Ld=M.D||!0===M.J,Md=Ld?function(){}:function(a){var b=D(a);b.Ta||(b.Ta=!0,$c(a,Jd));},Nd=Ld?function(){}:function(a){var b=D(a);b.Sa||(b.Sa=!0,$c(a,Hd),window.customElements&&window.customElements.polyfillWrapFlushCallback&&!M.J||$c(a,Id));};var Od="__eventWrappers"+Date.now(),Pd=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),Qd=function(){function a(){}var b=!1,c={get capture(){b=!0;return !1}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function Rd(a){if(null===a||"object"!==typeof a&&"function"!==typeof a){var b=!!a;var c=!1;}else {b=!!a.capture;c=!!a.once;var d=a.U;}return {Pa:d,capture:b,once:c,Na:Qd?a:b}}
	var Sd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
	drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},Td={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function Ud(a){return a instanceof Node?a.__shady_getRootNode():a}
	function Vd(a,b){var c=[],d=a;for(a=Ud(a);d;)c.push(d),d=d.__shady_assignedSlot?d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function Wd(a){a.__composedPath||(a.__composedPath=Vd(a.target,!0));return a.__composedPath}function Xd(a,b){if(!O)return a;a=Vd(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=Ud(d),f!==e&&(g=a.indexOf(f),e=f),!O(f)||-1<g)return d}
	var Yd={get composed(){void 0===this.__composed&&(Pd?this.__composed="focusin"===this.type||"focusout"===this.type||Pd(this):!1!==this.isTrusted&&(this.__composed=Sd[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=Vd(this.__target,this.composed));return this.__composedPath},get target(){return Xd(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
	(this.__relatedTargetComposedPath=Vd(this.__relatedTarget,!0));return Xd(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ua=!0;},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ua=this.__immediatePropagationStopped=!0;}},Zd=M.D&&Object.getOwnPropertyDescriptor(Event.prototype,"eventPhase");
	Zd&&(Object.defineProperty(Yd,"eventPhase",{get:function(){return this.currentTarget===this.target?Event.AT_TARGET:this.__shady_native_eventPhase},enumerable:!0,configurable:!0}),Object.defineProperty(Yd,"__shady_native_eventPhase",Zd));function $d(a){function b(c,d){c=new a(c,d);c.__composed=d&&!!d.composed;return c}b.__proto__=a;b.prototype=a.prototype;return b}var ae={focus:!0,blur:!0};function be(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}
	function ce(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!be(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}var de=(new Event("e")).hasOwnProperty("currentTarget");
	function ee(a){a=de?Object.create(a):a;var b=a.composedPath(),c=b.map(function(m){return Xd(m,b)}),d=a.bubbles,e=Object.getOwnPropertyDescriptor(a,"currentTarget");Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:function(){return k}});var f=Event.CAPTURING_PHASE,g=Object.getOwnPropertyDescriptor(a,"eventPhase");Object.defineProperty(a,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return f}});try{for(var h=b.length-1;0<=h;h--){var k=b[h];f=k===c[h]?Event.AT_TARGET:
	Event.CAPTURING_PHASE;ce(a,k,"capture");if(a.ua)return}for(h=0;h<b.length;h++){k=b[h];var l=k===c[h];if(l||d)if(f=l?Event.AT_TARGET:Event.BUBBLING_PHASE,ce(a,k,"bubble"),a.ua)break}}finally{de||(e?Object.defineProperty(a,"currentTarget",e):delete a.currentTarget,g?Object.defineProperty(a,"eventPhase",g):delete a.eventPhase);}}function fe(a,b,c,d){for(var e=0;e<a.length;e++){var f=a[e],g=f.type,h=f.capture;if(b===f.node&&c===g&&d===h)return e}return -1}
	function ge(a){id();return !M.ha&&this instanceof Node&&!Uc(document,this)?(a.__target||he(a,this),ee(a)):this.__shady_native_dispatchEvent(a)}
	function ie(a,b,c){var d=this,e=Rd(c),f=e.capture,g=e.once,h=e.Pa;e=e.Na;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(Td[a])return this.__shady_native_addEventListener(a,b,e);var l=h||this;if(h=b[Od]){if(-1<fe(h,l,a,f))return}else b[Od]=[];h=function(m){g&&d.__shady_removeEventListener(a,b,c);m.__target||he(m);if(l!==d){var q=Object.getOwnPropertyDescriptor(m,"currentTarget");Object.defineProperty(m,"currentTarget",{get:function(){return l},
	configurable:!0});var H=Object.getOwnPropertyDescriptor(m,"eventPhase");Object.defineProperty(m,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return f?Event.CAPTURING_PHASE:Event.BUBBLING_PHASE}});}m.__previousCurrentTarget=m.currentTarget;if(!O(l)&&"slot"!==l.localName||-1!=m.composedPath().indexOf(l))if(m.composed||-1<m.composedPath().indexOf(l))if(be(m)&&m.target===m.relatedTarget)m.eventPhase===Event.BUBBLING_PHASE&&m.stopImmediatePropagation();else if(m.eventPhase===Event.CAPTURING_PHASE||
	m.bubbles||m.target===l||l instanceof Window){var C="function"===k?b.call(l,m):b.handleEvent&&b.handleEvent(m);l!==d&&(q?(Object.defineProperty(m,"currentTarget",q),q=null):delete m.currentTarget,H?(Object.defineProperty(m,"eventPhase",H),H=null):delete m.eventPhase);return C}};b[Od].push({node:l,type:a,capture:f,ub:h});this.__handlers=this.__handlers||{};this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]};this.__handlers[a][f?"capture":"bubble"].push(h);ae[a]||this.__shady_native_addEventListener(a,
	h,e);}}}function je(a,b,c){if(b){var d=Rd(c);c=d.capture;var e=d.Pa;d=d.Na;if(Td[a])return this.__shady_native_removeEventListener(a,b,d);var f=e||this;e=void 0;var g=null;try{g=b[Od];}catch(h){}g&&(f=fe(g,f,a,c),-1<f&&(e=g.splice(f,1)[0].ub,g.length||(b[Od]=void 0)));this.__shady_native_removeEventListener(a,e||b,d);e&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(e),-1<b&&a.splice(b,1));}}
	function ke(){for(var a in ae)window.__shady_native_addEventListener(a,function(b){b.__target||(he(b),ee(b));},!0);}var le=Q(Yd);function he(a,b){b=void 0===b?a.target:b;a.__target=b;a.__relatedTarget=a.relatedTarget;if(M.D){b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;P(c,le);b.__shady_patchedProto=c;}a.__proto__=b.__shady_patchedProto;}else P(a,le);}var me=$d(Event),ne=$d(CustomEvent),oe=$d(MouseEvent);
	function pe(){if(!Pd&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var b=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(b);};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a);}}
	var qe=Object.getOwnPropertyNames(Element.prototype).filter(function(a){return "on"===a.substring(0,2)}),re=Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a){return "on"===a.substring(0,2)});function se(a){return {set:function(b){var c=D(this),d=a.substring(2);c.T||(c.T={});c.T[a]&&this.removeEventListener(d,c.T[a]);this.__shady_addEventListener(d,b);c.T[a]=b;},get:function(){var b=L(this);return b&&b.T&&b.T[a]},configurable:!0}}function te(a,b){return {index:a,ia:[],pa:b}}
	function ue(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k;}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,m=0;m<k-g&&ve(a[--h],c[--l]);)m++;h=m;}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return [];if(e==b){for(b=te(e,0);f<d;)b.ia.push(c[f++]);return [b]}if(f==d)return [te(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<h;m++)if(a[k+m-1]===c[g+l-1])b[l][m]=
	b[l-1][m-1];else {var q=b[l-1][m]+1,H=b[l][m-1]+1;b[l][m]=q<H?q:H;}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],m=b[k][g-1],q=l<m?l<h?l:h:m<h?m:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=m));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=te(e,0));b.pa++;e++;b.ia.push(c[f]);f++;break;case 2:b||(b=te(e,
	0));b.pa++;e++;break;case 3:b||(b=te(e,0)),b.ia.push(c[f]),f++;}b&&k.push(b);return k}function ve(a,b){return a===b}var we=Q({dispatchEvent:ge,addEventListener:ie,removeEventListener:je});var xe=null;function ye(){xe||(xe=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return xe||null}function ze(a,b,c){var d=ye();return d&&"class"===b?(d.setElementClass(a,c),!0):!1}function Ae(a,b){var c=ye();c&&c.unscopeNode(a,b);}function Be(a,b){var c=ye();if(!c)return !0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&Be(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}
	function Ce(a){if(a.nodeType!==Node.ELEMENT_NODE)return "";var b=ye();return b?b.currentScopeForNode(a):""}function De(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&De(a,b);}var Ee=window.document,Fe=M.ha,Ge=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Ie=Ge&&Ge.get;function Je(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b);}function Ke(a){var b=L(a);if(b&&void 0!==b.ta)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)Ke(b);if(a=L(a))a.ta=void 0;}function Le(a){var b=a;if(a&&"slot"===a.localName){var c=L(a);(c=c&&c.aa)&&(b=c.length?c[0]:Le(a.__shady_nextSibling));}return b}
	function Me(a,b,c){if(a=(a=L(a))&&a.ga){if(b)if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var d=0,e=b.childNodes.length;d<e;d++)a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c&&a.removedNodes.push(c);kd(a);}}
	var Te=Q({get parentNode(){var a=L(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=L(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=L(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=L(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=L(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
	get childNodes(){if(Lc(this)){var a=L(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b);}var c=a.childNodes;}else c=this.__shady_native_childNodes;c.item=function(d){return c[d]};return c},get parentElement(){var a=L(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Ie&&Ie.call(this))return !0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return !1;
	var a=this.ownerDocument;if(null===a||Uc(a,this))return !0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(O(a)?a.host:void 0);return !!(a&&a instanceof Document)},get textContent(){if(Lc(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!Lc(this)&&
	M.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&Je(this);this.__shady_native_textContent=a;}else Je(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a;}},insertBefore:function(a,b){if(this.ownerDocument!==Ee&&a.ownerDocument!==Ee)return this.__shady_native_insertBefore(a,b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
	if(b){var c=L(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;Me(this,a);var d=[],e=(c=Ne(this))?c.host.localName:Ce(this),f=a.__shady_parentNode;if(f){var g=Ce(a);var h=!!c||!Ne(a)||Fe&&void 0!==this.__noInsertionPoint;f.__shady_removeChild(a,h);}f=!0;var k=(!Fe||void 0===a.__noInsertionPoint&&void 0===
	this.__noInsertionPoint)&&!Be(a,e),l=c&&!a.__noInsertionPoint&&(!Fe||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||Ce(a)),De(a,function(m){l&&"slot"===m.localName&&d.push(m);if(k){var q=g;ye()&&(q&&Ae(m,q),(q=ye())&&q.scopeNode(m,e));}});d.length&&(Oe(c),c.i.push.apply(c.i,w(d)),Pe(c));Lc(this)&&(Qe(a,this,b),h=L(this),h.root?(f=!1,Mc(this)&&Pe(h.root)):c&&"slot"===this.localName&&(f=!1,Pe(c)));f?(c=O(this)?this.host:this,b?(b=Le(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):
	a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);return a},appendChild:function(a){if(this!=a||!O(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Ee)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);Me(this,null,a);var c=Ne(a),d=c&&Re(c,a),e=L(this);if(Lc(this)&&(Se(a,this),Mc(this))){Pe(e.root);var f=!0;}if(ye()&&!b&&c&&a.nodeType!==
	Node.TEXT_NODE){var g=Ce(a);De(a,function(h){Ae(h,g);});}Ke(a);c&&((b="slot"===this.localName)&&(f=!0),(d||b)&&Pe(c));f||(f=O(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==
	Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c);}return b},getRootNode:function(a){if(this&&this.nodeType){var b=D(this),c=b.ta;void 0===c&&(O(this)?(c=this,b.ta=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ta=c)));return c}},contains:function(a){return Vc(this,a)}});var Ve=Q({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&Ue(a);return (a=L(this))&&a.assignedSlot||null}});/*

	 Copyright (c) 2022 The Polymer Project Authors
	 SPDX-License-Identifier: BSD-3-Clause
	*/
	var We=new Map;[["(",{end:")",sa:!0}],["[",{end:"]",sa:!0}],['"',{end:'"',sa:!1}],["'",{end:"'",sa:!1}]].forEach(function(a){var b=ka(a);a=b.next().value;b=b.next().value;We.set(a,b);});function Xe(a,b,c,d){for(d=void 0===d?!0:d;b<a.length;b++)if("\\"===a[b]&&b<a.length-1&&"\n"!==a[b+1])b++;else {if(-1!==c.indexOf(a[b]))return b;if(d&&We.has(a[b])){var e=We.get(a[b]);b=Xe(a,b+1,[e.end],e.sa);}}return a.length}
	function Ye(a){function b(){if(0<d.length){for(;" "===d[d.length-1];)d.pop();c.push({La:d.filter(function(k,l){return 0===l%2}),Za:d.filter(function(k,l){return 1===l%2})});d.length=0;}}for(var c=[],d=[],e=0;e<a.length;){var f=d[d.length-1],g=Xe(a,e,[","," ",">","+","~"]),h=g===e?a[e]:a.substring(e,g);if(","===h)b();else if(-1===[void 0," ",">","+","~"].indexOf(f)||" "!==h)" "===f&&-1!==[">","+","~"].indexOf(h)?d[d.length-1]=h:d.push(h);e=g+(g===e?1:0);}b();return c}function Ze(a,b,c){var d=[];$e(a,b,c,d);return d}function $e(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:($e(e,f,g,h),e=void 0);}if(e)break}}
	var af={get firstElementChild(){var a=L(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=L(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return Lc(this)?Wc(Array.prototype.filter.call(Yc(this),
	function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}},bf=Q((af.append=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];this.__shady_insertBefore(cd.apply(null,w(b)),null);},af.prepend=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];this.__shady_insertBefore(cd.apply(null,w(b)),this.__shady_firstChild);},af.replaceChildren=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=
	arguments[c];for(;null!==(c=this.__shady_firstChild);)this.__shady_removeChild(c);this.__shady_insertBefore(cd.apply(null,w(b)),null);},af));
	function cf(a,b){function c(e,f){return (e===a||-1===f.indexOf(":scope"))&&Pc.call(e,f)}var d=Ye(b);if(1>d.length)return [];for(b=dd(Ze(a,function(){return !0}).map(function(e){return dd(d.map(function(f){var g=f.La,h=g.length-1;return c(e,g[h])?{target:e,da:f,fa:e,index:h}:[]}))}));b.some(function(e){return 0<e.index});)b=dd(b.map(function(e){if(0>=e.index)return e;var f=e.target,g=e.fa,h=e.da;e=e.index-1;var k=h.Za[e],l=h.La[e];if(" "===k){k=[];for(g=g.__shady_parentElement;g;g=g.__shady_parentElement)c(g,
	l)&&k.push({target:f,da:h,fa:g,index:e});return k}if(">"===k)return g=g.__shady_parentElement,c(g,l)?{target:f,da:h,fa:g,index:e}:[];if("+"===k)return (g=g.__shady_previousElementSibling)&&c(g,l)?{target:f,da:h,fa:g,index:e}:[];if("~"===k){k=[];for(g=g.__shady_previousElementSibling;g;g=g.__shady_previousElementSibling)c(g,l)&&k.push({target:f,da:h,fa:g,index:e});return k}throw Error("Unrecognized combinator: '"+k+"'.");}));return ed(b.map(function(e){return e.target}))}
	var df=M.querySelectorImplementation,ef=Q({querySelector:function(a){if("native"===df){var b=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(a)),c=this.__shady_getRootNode();b=ka(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,d.__shady_getRootNode()==c)return d;return null}if("selectorEngine"===df)return cf(this,a)[0]||null;if(void 0===df)return Ze(this,function(e){return Pc.call(e,a)},function(e){return !!e})[0]||null;throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+
	(df+"'"));},querySelectorAll:function(a,b){if(b||"native"===df){b=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return Wc(b.filter(function(d){return d.__shady_getRootNode()==c}))}if("selectorEngine"===df)return Wc(cf(this,a));if(void 0===df)return Wc(Ze(this,function(d){return Pc.call(d,a)}));throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+(df+"'"));}}),ff=M.ha&&!M.J?ad({},bf):
	bf;ad(bf,ef);var gf=Q({after:function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=this.__shady_parentNode;if(null!==c){var d=this.__shady_nextSibling;c.__shady_insertBefore(cd.apply(null,w(b)),d);}},before:function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=this.__shady_parentNode;null!==c&&c.__shady_insertBefore(cd.apply(null,w(b)),this);},remove:function(){var a=this.__shady_parentNode;null!==a&&a.__shady_removeChild(this);},replaceWith:function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=
	arguments[c];c=this.__shady_parentNode;if(null!==c){var d=this.__shady_nextSibling;c.__shady_removeChild(this);c.__shady_insertBefore(cd.apply(null,w(b)),d);}}});var hf=window.document;function jf(a,b){if("slot"===b)a=a.__shady_parentNode,Mc(a)&&Pe(L(a).root);else if("slot"===a.localName&&"name"===b&&(b=Ne(a))){if(b.g){kf(b);var c=a.Ua,d=lf(a);if(d!==c){c=b.h[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.h[d]||(b.h[d]=[]);c.push(a);1<c.length&&(b.h[d]=mf(c));}}Pe(b);}}
	var nf=Q({get previousElementSibling(){var a=L(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=L(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
	set slot(a){this.__shady_setAttribute("slot",a);},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a);},setAttribute:function(a,b){this.ownerDocument!==hf?this.__shady_native_setAttribute(a,b):ze(this,a,b)||(this.__shady_native_setAttribute(a,b),jf(this,a));},removeAttribute:function(a){this.ownerDocument!==hf?this.__shady_native_removeAttribute(a):ze(this,a,"")?""===this.getAttribute(a)&&this.__shady_native_removeAttribute(a):(this.__shady_native_removeAttribute(a),
	jf(this,a));},toggleAttribute:function(a,b){if(this.ownerDocument!==hf)return this.__shady_native_toggleAttribute(a,b);if(!ze(this,a,""))return b=this.__shady_native_toggleAttribute(a,b),jf(this,a),b;if(""===this.getAttribute(a)&&!b)return this.__shady_native_toggleAttribute(a,b)}});M.ha||qe.forEach(function(a){nf[a]=se(a);});
	var sf=Q({attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!M.Ra){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;of(b,this,a);pf(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;Oe(c);c.i.push.apply(c.i,w(a));Pe(b);}b.host.__shady_native_appendChild(b);}else b=new qf(rf,this,a);return this.__CE_shadowRoot=b},get shadowRoot(){var a=L(this);
	return a&&a.lb||null}});ad(nf,sf);var tf=document.implementation.createHTMLDocument("inert"),uf=Q({get innerHTML(){return Lc(this)?ud("template"===this.localName?this.content:this,Yc):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else {Je(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==tf.namespaceURI?tf.createElementNS(this.namespaceURI,b):tf.createElement(b);for(M.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a);}}});var vf=Q({blur:function(){var a=L(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur();}});M.ha||re.forEach(function(a){vf[a]=se(a);});var wf=Q({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&O(b)&&Ue(b);return (b=L(this))?(a&&a.flatten?b.aa:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)ie.call(this,a,b,c);else {"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.U=this;d.__shady_addEventListener(a,b,c);}},removeEventListener:function(a,
	b,c){if("slot"!==this.localName||"slotchange"===a)je.call(this,a,b,c);else {"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.U=this;d.__shady_removeEventListener(a,b,c);}}});var xf=Q({getElementById:function(a){return ""===a?null:Ze(this,function(b){return b.id==a},function(b){return !!b})[0]||null}});function yf(a,b){for(var c;b&&!a.has(c=b.__shady_getRootNode());)b=c.host;return b}function zf(a){var b=new Set;for(b.add(a);O(a)&&a.host;)a=a.host.__shady_getRootNode(),b.add(a);return b}
	var Af="__shady_native_"+Jc(),Bf=Q({get activeElement(){var a=M.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!O(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=Ne(a);b&&b!==this;)a=b.host,b=Ne(a);return this===document?b?null:a:b===this?a:null},elementsFromPoint:function(a,b){a=document[Af](a,b);if(this===document&&M.useNativeDocumentEFP)return a;a=[].slice.call(a);b=zf(this);for(var c=new Set,
	d=0;d<a.length;d++)c.add(yf(b,a[d]));var e=[];c.forEach(function(f){return e.push(f)});return e},elementFromPoint:function(a,b){return this===document&&M.useNativeDocumentEFP?this.__shady_native_elementFromPoint(a,b):this.__shady_elementsFromPoint(a,b)[0]||null}});var Cf=window.document,Df=Q({importNode:function(a,b){if(a.ownerDocument!==Cf||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Ef=Q({dispatchEvent:ge,addEventListener:ie.bind(window),removeEventListener:je.bind(window)});var Ff={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Ff.parentElement=Te.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Ff.contains=Te.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Ff.children=bf.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Ff.innerHTML=uf.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Ff.className=nf.className);
	var Gf={EventTarget:[we],Node:[Te,window.EventTarget?null:we],Text:[Ve],Comment:[Ve],CDATASection:[Ve],ProcessingInstruction:[Ve],Element:[nf,bf,gf,Ve,!M.D||"innerHTML"in Element.prototype?uf:null,window.HTMLSlotElement?null:wf],HTMLElement:[vf,Ff],HTMLSlotElement:[wf],DocumentFragment:[ff,xf],Document:[Df,ff,xf,Bf],Window:[Ef],CharacterData:[gf],XMLHttpRequest:[window.EventTarget?null:we]},Hf=M.D?null:["innerHTML","textContent"];
	function If(a,b,c,d){b.forEach(function(e){return a&&e&&P(a,e,c,d)});}function Jf(a){var b=a?null:Hf,c;for(c in Gf)If(window[c]&&window[c].prototype,Gf[c],a,b);}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(a){var b=window[a],c=Object.create(b.prototype);c.__shady_protoIsPatched=!0;If(c,Gf.EventTarget);If(c,Gf.Node);Gf[a]&&If(c,Gf[a]);b.prototype.__shady_patchedProto=c;});
	function Kf(a){a.__shady_protoIsPatched=!0;If(a,Gf.EventTarget);If(a,Gf.Node);If(a,Gf.Element);If(a,Gf.HTMLElement);If(a,Gf.HTMLSlotElement);return a}var Lf=M.Da,Mf=M.D;function Nf(a,b){if(Lf&&!a.__shady_protoIsPatched&&!O(a)){var c=Object.getPrototypeOf(a),d=c.hasOwnProperty("__shady_patchedProto")&&c.__shady_patchedProto;d||(d=Object.create(c),Kf(d),c.__shady_patchedProto=d);Object.setPrototypeOf(a,d);}Mf||(1===b?Md(a):2===b&&Nd(a));}
	function Of(a,b,c,d){Nf(a,1);d=d||null;var e=D(a),f=d?D(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=L(e.previousSibling))f.nextSibling=a;if(f=L(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null;}
	function Qe(a,b,c){Nf(b,2);var d=D(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)Of(a,b,d,c);else Of(a,b,d,c);}
	function Se(a,b){var c=D(a);b=D(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(D(a).nextSibling=d);d&&(D(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null);}
	function pf(a,b){var c=D(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;Nf(a,2);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=D(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;Nf(c,1);}}}var Pf=Q({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=c.U||this;this.host.__shady_addEventListener(a,b,c);},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=c.U||this;this.host.__shady_removeEventListener(a,b,c);}});function Qf(a,b){P(a,Pf,b);P(a,Bf,b);P(a,uf,b);P(a,bf,b);M.J&&!b?(P(a,Te,b),P(a,xf,b)):M.D||(P(a,Jd),P(a,Hd),P(a,Id));}var rf={},Rf=M.deferConnectionCallbacks&&"loading"===document.readyState,Sf;function Tf(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function qf(a,b,c){if(a!==rf)throw new TypeError("Illegal constructor");this.g=null;of(this,b,c);}
	function of(a,b,c){a.host=b;a.mode=c&&c.mode;pf(a.host);b=D(a.host);b.root=a;b.lb="closed"!==a.mode?a:null;b=D(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(M.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else Pe(a);}function Pe(a){a.Y||(a.Y=!0,hd(function(){return Ue(a)}));}
	function Ue(a){var b;if(b=a.Y){for(var c;a;)a:{a.Y&&(c=a),b=a;a=b.host.__shady_getRootNode();if(O(a)&&(b=L(b.host))&&0<b.ka)break a;a=void 0;}b=c;}(c=b)&&c._renderSelf();}
	qf.prototype._renderSelf=function(){var a=Rf;Rf=!0;this.Y=!1;if(this.g){kf(this);for(var b=0,c;b<this.g.length;b++){c=this.g[b];var d=L(c),e=d.assignedNodes;d.assignedNodes=[];d.aa=[];if(d.Ja=e)for(d=0;d<e.length;d++){var f=L(e[d]);f.xa=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null);}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)Uf(this,b);for(b=0;b<this.g.length;b++){c=this.g[b];e=L(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)Uf(this,
	d,c);(d=(d=L(c.__shady_parentNode))&&d.root)&&(Nc(d)||d.Y)&&d._renderSelf();Vf(this,e.aa,e.assignedNodes);if(d=e.Ja){for(f=0;f<d.length;f++)L(d[f]).xa=null;e.Ja=null;d.length>e.assignedNodes.length&&(e.Aa=!0);}e.Aa&&(e.Aa=!1,Wf(this,c));}c=this.g;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=L(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=L(f).aa,h=
	0;h<g.length;h++)d.push(g[h]);else d.push(f);f=Xc(e);g=ue(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var m=0,q=void 0;m<l.ia.length&&(q=l.ia[m]);m++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.pa;}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],m=l.index;m<l.index+l.pa;m++)q=d[m],e.__shady_native_insertBefore(q,h),f.splice(m,0,q);}}if(!M.preferPerformance&&!this.Ia)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
	L(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.Ia=!0;Rf=a;Sf&&Sf();};function Uf(a,b,c){var d=D(b),e=d.xa;d.xa=null;c||(c=(a=a.h[b.__shady_slot||"__catchall"])&&a[0]);c?(D(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(D(d.assignedSlot).Aa=!0);}
	function Vf(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=L(e).assignedNodes;f&&f.length&&Vf(a,b,f);}else b.push(c[d]);}function Wf(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=L(b);b.assignedSlot&&Wf(a,b.assignedSlot);}function Oe(a){a.i=a.i||[];a.g=a.g||[];a.h=a.h||{};}
	function kf(a){if(a.i&&a.i.length){for(var b=a.i,c,d=0;d<b.length;d++){var e=b[d];pf(e);var f=e.__shady_parentNode;pf(f);f=L(f);f.ka=(f.ka||0)+1;f=lf(e);a.h[f]?(c=c||{},c[f]=!0,a.h[f].push(e)):a.h[f]=[e];a.g.push(e);}if(c)for(var g in c)a.h[g]=mf(a.h[g]);a.i=[];}}function lf(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ua=b}
	function mf(a){return a.sort(function(b,c){b=Tf(b);for(var d=Tf(c),e=0;e<b.length;e++){c=b[e];var f=d[e];if(c!==f)return b=Yc(c.__shady_parentNode),b.indexOf(c)-b.indexOf(f)}})}
	function Re(a,b){if(a.g){kf(a);var c=a.h,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Vc(b,g)){e.splice(f,1);var h=a.g.indexOf(g);0<=h&&(a.g.splice(h,1),(h=L(g.__shady_parentNode))&&h.ka&&h.ka--);f--;g=L(g);if(h=g.aa)for(var k=0;k<h.length;k++){var l=h[k],m=l.__shady_native_parentNode;m&&m.__shady_native_removeChild(l);}g.aa=[];g.assignedNodes=[];h=!0;}}return h}}function Nc(a){kf(a);return !(!a.g||!a.g.length)}
	(function(a){a.__proto__=DocumentFragment.prototype;Qf(a,"__shady_");Qf(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0});});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
	configurable:!0});});})(qf.prototype);
	if(window.customElements&&window.customElements.define&&M.Ba&&!M.preferPerformance){var Xf=new Map;Sf=function(){var a=[];Xf.forEach(function(d,e){a.push([e,d]);});Xf.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback();}};Rf&&document.addEventListener("readystatechange",function(){Rf=!1;Sf();},{once:!0});var Yf=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=
	function(){Rf?Xf.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this));},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){Rf?this.isConnected||Xf.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this));};return a},Zf=window.customElements.define,$f=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;Zf.call(window.customElements,a,Yf(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d;};window.customElements.define=
	$f;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:$f,configurable:!0});}function Ne(a){a=a.__shady_getRootNode();if(O(a))return a}function ag(a){this.node=a;}v=ag.prototype;v.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};v.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};v.appendChild=function(a){return this.node.__shady_appendChild(a)};v.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};v.removeChild=function(a){return this.node.__shady_removeChild(a)};v.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
	v.cloneNode=function(a){return this.node.__shady_cloneNode(a)};v.getRootNode=function(a){return this.node.__shady_getRootNode(a)};v.contains=function(a){return this.node.__shady_contains(a)};v.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};v.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b);};v.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};v.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};v.removeAttribute=function(a){this.node.__shady_removeAttribute(a);};
	v.toggleAttribute=function(a,b){return this.node.__shady_toggleAttribute(a,b)};v.attachShadow=function(a){return this.node.__shady_attachShadow(a)};v.focus=function(){this.node.__shady_native_focus();};v.blur=function(){this.node.__shady_blur();};v.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};v.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};
	v.elementsFromPoint=function(a,b){return this.node.__shady_elementsFromPoint(a,b)};v.elementFromPoint=function(a,b){return this.node.__shady_elementFromPoint(a,b)};v.querySelector=function(a){return this.node.__shady_querySelector(a)};v.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};v.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
	v.append=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_append.apply(this.node,w(b))};v.prepend=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_prepend.apply(this.node,w(b))};v.after=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_after.apply(this.node,w(b))};
	v.before=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_before.apply(this.node,w(b))};v.remove=function(){return this.node.__shady_remove()};v.replaceWith=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return this.node.__shady_replaceWith.apply(this.node,w(b))};
	ea.Object.defineProperties(ag.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(O(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(O(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
	enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
	get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
	children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
	enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a;}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a;}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a;}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){this.node.__shady_className=
	a;}}});function bg(a){Object.defineProperty(ag.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b;},configurable:!0});}qe.forEach(function(a){return bg(a)});re.forEach(function(a){return bg(a)});var cg=new WeakMap;function dg(a){if(O(a)||a instanceof ag)return a;var b=cg.get(a);b||(b=new ag(a),cg.set(a,b));return b}if(M.Ba){var eg=M.D?function(a){return a}:function(a){Nd(a);Md(a);return a},ShadyDOM={inUse:M.Ba,patch:eg,isShadyRoot:O,enqueue:hd,flush:id,flushInitial:function(a){!a.Ia&&a.Y&&Ue(a);},settings:M,filterMutations:nd,observeChildren:ld,unobserveChildren:md,deferConnectionCallbacks:M.deferConnectionCallbacks,preferPerformance:M.preferPerformance,handlesDynamicScoping:!0,wrap:M.J?dg:eg,wrapIfNeeded:!0===M.J?dg:function(a){return a},Wrapper:ag,composedPath:Wd,noPatch:M.J,patchOnDemand:M.Da,nativeMethods:wd,
	nativeTree:xd,patchElementProto:Kf,querySelectorImplementation:M.querySelectorImplementation};window.ShadyDOM=ShadyDOM;Gd();Jf("__shady_");Object.defineProperty(document,"_activeElement",Bf.activeElement);P(Window.prototype,Ef,"__shady_");M.J?M.Da&&P(Element.prototype,sf):(Jf(),pe());ke();window.Event=me;window.CustomEvent=ne;window.MouseEvent=oe;window.ShadowRoot=qf;}var fg=window.Document.prototype.createElement,gg=window.Document.prototype.createElementNS,hg=window.Document.prototype.importNode,ig=window.Document.prototype.prepend,jg=window.Document.prototype.append,kg=window.DocumentFragment.prototype.prepend,lg=window.DocumentFragment.prototype.append,mg=window.Node.prototype.cloneNode,ng=window.Node.prototype.appendChild,og=window.Node.prototype.insertBefore,pg=window.Node.prototype.removeChild,qg=window.Node.prototype.replaceChild,rg=Object.getOwnPropertyDescriptor(window.Node.prototype,
	"textContent"),sg=window.Element.prototype.attachShadow,tg=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),ug=window.Element.prototype.getAttribute,vg=window.Element.prototype.setAttribute,wg=window.Element.prototype.removeAttribute,xg=window.Element.prototype.toggleAttribute,yg=window.Element.prototype.getAttributeNS,zg=window.Element.prototype.setAttributeNS,Ag=window.Element.prototype.removeAttributeNS,Bg=window.Element.prototype.insertAdjacentElement,Cg=window.Element.prototype.insertAdjacentHTML,
	Dg=window.Element.prototype.prepend,Eg=window.Element.prototype.append,Fg=window.Element.prototype.before,Gg=window.Element.prototype.after,Hg=window.Element.prototype.replaceWith,Ig=window.Element.prototype.remove,Jg=window.HTMLElement,Kg=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Lg=window.HTMLElement.prototype.insertAdjacentElement,Mg=window.HTMLElement.prototype.insertAdjacentHTML;var Ng=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return Ng.add(a)});function Og(a){var b=Ng.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return !b&&a}var Pg=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
	function T(a){var b=a.isConnected;if(void 0!==b)return b;if(Pg(a))return !0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return !(!a||!(a.__CE_isImportDocument||a instanceof Document))}function Qg(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
	function Rg(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
	function Sg(a,b,c){for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;void 0===c&&(c=new Set);if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)Sg(d,b,c);d=Rg(a,e);continue}else if("template"===f){d=Rg(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)Sg(e,b,c);}d=d.firstChild?d.firstChild:Rg(a,d);}}function Tg(){var a=!(null===Ug||void 0===Ug||!Ug.noDocumentConstructionObserver),b=!(null===Ug||void 0===Ug||!Ug.shadyDomFastWalk);this.ca=[];this.g=[];this.W=!1;this.shadyDomFastWalk=b;this.sb=!a;}function Vg(a,b,c,d){var e=window.ShadyDOM;if(a.shadyDomFastWalk&&e&&e.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=e.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b]);}else Sg(b,c,d);}function Wg(a,b){a.W=!0;a.ca.push(b);}
	function Xg(a,b){a.W=!0;a.g.push(b);}function Yg(a,b){a.W&&Vg(a,b,function(c){return Zg(a,c)});}function Zg(a,b){if(a.W&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.ca.length;c++)a.ca[c](b);for(c=0;c<a.g.length;c++)a.g[c](b);}}function $g(a,b){var c=[];Vg(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ah(a,d);}}
	function bh(a,b){var c=[];Vg(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d);}}
	function ch(a,b,c){c=void 0===c?{}:c;var d=c.tb,e=c.upgrade||function(g){return ah(a,g)},f=[];Vg(a,b,function(g){a.W&&Zg(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;d&&(d.forEach(function(m){return l.add(m)}),
	l.delete(k));ch(a,k,{tb:l,upgrade:e});}});}else f.push(g);},d);for(b=0;b<f.length;b++)e(f[b]);}
	function ah(a,b){try{var c=b.ownerDocument,d=c.__CE_registry;var e=d&&(c.defaultView||c.__CE_isImportDocument)?dh(d,b.localName):void 0;if(e&&void 0===b.__CE_state){e.constructionStack.push(b);try{try{if(new e.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop();}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=e;if(e.attributeChangedCallback&&b.hasAttributes()){var f=e.observedAttributes;
	for(e=0;e<f.length;e++){var g=f[e],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null);}}T(b)&&a.connectedCallback(b);}}catch(k){eh(k);}}Tg.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a);}catch(c){eh(c);}};Tg.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a);}catch(c){eh(c);}};
	Tg.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;if(f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b))try{f.attributeChangedCallback.call(a,b,c,d,e);}catch(g){eh(g);}};
	function fh(a,b,c,d){var e=b.__CE_registry;if(e&&(null===d||"http://www.w3.org/1999/xhtml"===d)&&(e=dh(e,c)))try{var f=new e.constructorFunction;if(void 0===f.__CE_state||void 0===f.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==f.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(f.hasAttributes())throw Error("Failed to construct '"+
	c+"': The constructed element must not have any attributes.");if(null!==f.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==f.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(f.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(f.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
	return f}catch(g){return eh(g),b=null===d?fg.call(b,c):gg.call(b,d,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,Zg(a,b),b}b=null===d?fg.call(b,c):gg.call(b,d,c);Zg(a,b);return b}
	function eh(a){var b="",c="",d=0,e=0;a instanceof Error?(b=a.message,c=a.sourceURL||a.fileName||"",d=a.line||a.lineNumber||0,e=a.column||a.columnNumber||0):b="Uncaught "+String(a);var f=void 0;void 0===ErrorEvent.prototype.initErrorEvent?f=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:d,colno:e,error:a}):(f=document.createEvent("ErrorEvent"),f.initErrorEvent("error",!1,!0,b,c,d),f.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return !0}});});
	void 0===f.error&&Object.defineProperty(f,"error",{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(f);f.defaultPrevented||console.error(a);}function gh(){var a=this;this.I=void 0;this.Ka=new Promise(function(b){a.g=b;});}gh.prototype.resolve=function(a){if(this.I)throw Error("Already resolved.");this.I=a;this.g(a);};function hh(a){var b=document;this.X=void 0;this.S=a;this.g=b;ch(this.S,this.g);"loading"===this.g.readyState&&(this.X=new MutationObserver(this.h.bind(this)),this.X.observe(this.g,{childList:!0,subtree:!0}));}function ih(a){a.X&&a.X.disconnect();}hh.prototype.h=function(a){var b=this.g.readyState;"interactive"!==b&&"complete"!==b||ih(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)ch(this.S,c[d]);};function U(a){this.ma=new Map;this.na=new Map;this.Fa=new Map;this.wa=!1;this.za=new Map;this.la=function(b){return b()};this.V=!1;this.oa=[];this.S=a;this.Ga=a.sb?new hh(a):void 0;}v=U.prototype;v.jb=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");jh(this,a);this.ma.set(a,b);this.oa.push(a);this.V||(this.V=!0,this.la(function(){return kh(c)}));};
	v.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");jh(this,a);lh(this,a,b);this.oa.push(a);this.V||(this.V=!0,this.la(function(){return kh(c)}));};function jh(a,b){if(!Og(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(dh(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.wa)throw Error("A custom element is already being defined.");}
	function lh(a,b,c){a.wa=!0;var d;try{var e=c.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=function(m){var q=e[m];if(void 0!==q&&!(q instanceof Function))throw Error("The '"+m+"' callback must be a function.");return q};var g=f("connectedCallback");var h=f("disconnectedCallback");var k=f("adoptedCallback");var l=(d=f("attributeChangedCallback"))&&c.observedAttributes||[];}catch(m){throw m;}finally{a.wa=!1;}c={localName:b,
	constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:d,observedAttributes:l,constructionStack:[]};a.na.set(b,c);a.Fa.set(c.constructorFunction,c);return c}v.upgrade=function(a){ch(this.S,a);};
	function kh(a){if(!1!==a.V){a.V=!1;for(var b=[],c=a.oa,d=new Map,e=0;e<c.length;e++)d.set(c[e],[]);ch(a.S,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=d.get(l);m?m.push(k):a.na.has(l)&&b.push(k);}}});for(e=0;e<b.length;e++)ah(a.S,b[e]);for(e=0;e<c.length;e++){for(var f=c[e],g=d.get(f),h=0;h<g.length;h++)ah(a.S,g[h]);(f=a.za.get(f))&&f.resolve(void 0);}c.length=0;}}v.get=function(a){if(a=dh(this,a))return a.constructorFunction};
	v.whenDefined=function(a){if(!Og(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.za.get(a);if(b)return b.Ka;b=new gh;this.za.set(a,b);var c=this.na.has(a)||this.ma.has(a);a=-1===this.oa.indexOf(a);c&&a&&b.resolve(void 0);return b.Ka};v.polyfillWrapFlushCallback=function(a){this.Ga&&ih(this.Ga);var b=this.la;this.la=function(c){return a(function(){return b(c)})};};
	function dh(a,b){var c=a.na.get(b);if(c)return c;if(c=a.ma.get(b)){a.ma.delete(b);try{return lh(a,b,c())}catch(d){eh(d);}}}U.prototype.define=U.prototype.define;U.prototype.upgrade=U.prototype.upgrade;U.prototype.get=U.prototype.get;U.prototype.whenDefined=U.prototype.whenDefined;U.prototype.polyfillDefineLazy=U.prototype.jb;U.prototype.polyfillWrapFlushCallback=U.prototype.polyfillWrapFlushCallback;function mh(a,b,c){function d(e){return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&T(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m);}e.apply(this,g);for(g=0;g<k.length;g++)bh(a,k[g]);if(T(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&$g(a,k);}}void 0!==c.prepend&&(b.prepend=d(c.prepend));void 0!==c.append&&(b.append=d(c.append));}
	function nh(a){Document.prototype.createElement=function(b){return fh(a,this,b,null)};Document.prototype.importNode=function(b,c){b=hg.call(this,b,!!c);this.__CE_registry?ch(a,b):Yg(a,b);return b};Document.prototype.createElementNS=function(b,c){return fh(a,this,c,b)};mh(a,Document.prototype,{prepend:ig,append:jg});}function oh(a){function b(d){return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];g=[];for(var h=[],k=0;k<f.length;k++){var l=f[k];l instanceof Element&&T(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l);}d.apply(this,f);for(f=0;f<h.length;f++)bh(a,h[f]);if(T(this))for(f=0;f<g.length;f++)h=g[f],h instanceof Element&&$g(a,h);}}var c=Element.prototype;void 0!==Fg&&(c.before=b(Fg));void 0!==Gg&&(c.after=b(Gg));void 0!==
	Hg&&(c.replaceWith=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];f=[];for(var g=[],h=0;h<e.length;h++){var k=e[h];k instanceof Element&&T(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)f.push(k);else f.push(k);}h=T(this);Hg.apply(this,e);for(e=0;e<g.length;e++)bh(a,g[e]);if(h)for(bh(a,this),e=0;e<f.length;e++)g=f[e],g instanceof Element&&$g(a,g);});void 0!==Ig&&(c.remove=function(){var d=T(this);Ig.call(this);d&&bh(a,this);});}function ph(a){function b(e,f){Object.defineProperty(e,"innerHTML",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(g){var h=this,k=void 0;T(this)&&(k=[],Vg(a,this,function(q){q!==h&&k.push(q);}));f.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m);}this.ownerDocument.__CE_registry?ch(a,this):Yg(a,this);return g}});}function c(e,f){e.insertAdjacentElement=function(g,h){var k=T(h);g=f.call(this,g,h);k&&bh(a,h);T(g)&&$g(a,h);return g};}
	function d(e,f){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)ch(a,l[k]);}e.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;f.call(this,h,k);g(l||this.parentNode.firstChild,this);}else if("afterbegin"===h)l=this.firstChild,f.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,f.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,f.call(this,h,k),g(this.nextSibling,
	l);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");};}sg&&(Element.prototype.attachShadow=function(e){e=sg.call(this,e);if(a.W&&!e.__CE_patched){e.__CE_patched=!0;for(var f=0;f<a.ca.length;f++)a.ca[f](e);}return this.__CE_shadowRoot=e});tg&&tg.get?b(Element.prototype,tg):Kg&&Kg.get?b(HTMLElement.prototype,Kg):Xg(a,function(e){b(e,{enumerable:!0,configurable:!0,get:function(){return mg.call(this,!0).innerHTML},set:function(f){var g=
	"template"===this.localName,h=g?this.content:this,k=gg.call(document,this.namespaceURI,this.localName);for(k.innerHTML=f;0<h.childNodes.length;)pg.call(h,h.childNodes[0]);for(f=g?k.content:k;0<f.childNodes.length;)ng.call(h,f.childNodes[0]);}});});Element.prototype.setAttribute=function(e,f){if(1!==this.__CE_state)return vg.call(this,e,f);var g=ug.call(this,e);vg.call(this,e,f);f=ug.call(this,e);a.attributeChangedCallback(this,e,g,f,null);};Element.prototype.setAttributeNS=function(e,f,g){if(1!==this.__CE_state)return zg.call(this,
	e,f,g);var h=yg.call(this,e,f);zg.call(this,e,f,g);g=yg.call(this,e,f);a.attributeChangedCallback(this,f,h,g,e);};Element.prototype.removeAttribute=function(e){if(1!==this.__CE_state)return wg.call(this,e);var f=ug.call(this,e);wg.call(this,e);null!==f&&a.attributeChangedCallback(this,e,f,null,null);};xg&&(Element.prototype.toggleAttribute=function(e,f){if(1!==this.__CE_state)return xg.call(this,e,f);var g=ug.call(this,e),h=null!==g;f=xg.call(this,e,f);h!==f&&a.attributeChangedCallback(this,e,g,f?"":
	null,null);return f});Element.prototype.removeAttributeNS=function(e,f){if(1!==this.__CE_state)return Ag.call(this,e,f);var g=yg.call(this,e,f);Ag.call(this,e,f);var h=yg.call(this,e,f);g!==h&&a.attributeChangedCallback(this,f,g,h,e);};Lg?c(HTMLElement.prototype,Lg):Bg&&c(Element.prototype,Bg);Mg?d(HTMLElement.prototype,Mg):Cg&&d(Element.prototype,Cg);mh(a,Element.prototype,{prepend:Dg,append:Eg});oh(a);}var qh={};function rh(a){function b(){var c=this.constructor;var d=document.__CE_registry.Fa.get(c);if(!d)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=fg.call(document,d.localName),Object.setPrototypeOf(e,c.prototype),e.__CE_state=1,e.__CE_definition=d,Zg(a,e),e;var f=e.length-1,g=e[f];if(g===qh)throw Error("Failed to construct '"+d.localName+"': This element was already constructed.");e[f]=
	qh;Object.setPrototypeOf(g,c.prototype);Zg(a,g);return g}b.prototype=Jg.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b;}function sh(a){function b(c,d){Object.defineProperty(c,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,e);else {var f=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&T(this)){f=Array(h);for(var k=0;k<h;k++)f[k]=g[k];}}d.set.call(this,e);if(f)for(e=0;e<f.length;e++)bh(a,f[e]);}}});}Node.prototype.insertBefore=function(c,d){if(c instanceof DocumentFragment){var e=Qg(c);c=og.call(this,c,d);if(T(this))for(d=
	0;d<e.length;d++)$g(a,e[d]);return c}e=c instanceof Element&&T(c);d=og.call(this,c,d);e&&bh(a,c);T(this)&&$g(a,c);return d};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var d=Qg(c);c=ng.call(this,c);if(T(this))for(var e=0;e<d.length;e++)$g(a,d[e]);return c}d=c instanceof Element&&T(c);e=ng.call(this,c);d&&bh(a,c);T(this)&&$g(a,c);return e};Node.prototype.cloneNode=function(c){c=mg.call(this,!!c);this.ownerDocument.__CE_registry?ch(a,c):Yg(a,c);return c};Node.prototype.removeChild=
	function(c){var d=c instanceof Element&&T(c),e=pg.call(this,c);d&&bh(a,c);return e};Node.prototype.replaceChild=function(c,d){if(c instanceof DocumentFragment){var e=Qg(c);c=qg.call(this,c,d);if(T(this))for(bh(a,d),d=0;d<e.length;d++)$g(a,e[d]);return c}e=c instanceof Element&&T(c);var f=qg.call(this,c,d),g=T(this);g&&bh(a,d);e&&bh(a,c);g&&$g(a,c);return f};rg&&rg.get?b(Node.prototype,rg):Wg(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var d=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==
	Node.COMMENT_NODE&&d.push(e.textContent);return d.join("")},set:function(d){for(;this.firstChild;)pg.call(this,this.firstChild);null!=d&&""!==d&&ng.call(this,document.createTextNode(d));}});});}var Ug=window.customElements;function th(){var a=new Tg;rh(a);nh(a);mh(a,DocumentFragment.prototype,{prepend:kg,append:lg});sh(a);ph(a);window.CustomElementRegistry=U;a=new U(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a});}Ug&&!Ug.forcePolyfill&&"function"==typeof Ug.define&&"function"==typeof Ug.get||th();window.__CE_installPolyfill=th;/*

	Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	function uh(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName="";}
	function vh(a){var b=a=a.replace(wh,"").replace(xh,""),c=new uh;c.start=0;c.end=b.length;for(var d=c,e=0,f=b.length;e<f;e++)if("{"===b[e]){d.rules||(d.rules=[]);var g=d,h=g.rules[g.rules.length-1]||null;d=new uh;d.start=e+1;d.parent=g;d.previous=h;g.rules.push(d);}else "}"===b[e]&&(d.end=e+1,d=d.parent||c);return yh(c,a)}
	function yh(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=zh(c),c=c.replace(Ah," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=Bh:c.match(Ch)&&(a.type=Dh,a.keyframesName=a.selector.split(Ah).pop()):a.type=0===c.indexOf("--")?Eh:Fh);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)yh(f,
	b);return a}function zh(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(b,c){b=c;for(c=6-b.length;c--;)b="0"+b;return "\\"+b})}
	function Gh(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Gh(h,b,d);}else b?b=a.cssText:(b=a.cssText,b=b.replace(Hh,"").replace(Ih,""),b=b.replace(Jh,"").replace(Kh,"")),(d=b.trim())&&(d="  "+d+"\n");}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
	var Fh=1,Dh=7,Bh=4,Eh=1E3,wh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,xh=/@import[^;]*;/gim,Hh=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ih=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Jh=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Kh=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Ch=/^@[^\s]*keyframes/,Ah=/\s+/g;var V=!(window.ShadyDOM&&window.ShadyDOM.inUse),Lh;function Mh(a){Lh=a&&a.shimcssproperties?!1:V||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"));}var Nh;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Nh=window.ShadyCSS.cssBuild);var Oh=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
	window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Lh=window.ShadyCSS.nativeCss:window.ShadyCSS?(Mh(window.ShadyCSS),window.ShadyCSS=void 0):Mh(window.WebComponents&&window.WebComponents.flags);var W=Lh;var Ph=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Qh=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Rh=/(--[\w-]+)\s*([:,;)]|$)/gi,Sh=/(animation\s*:)|(animation-name\s*:)/,Th=/@media\s(.*)/,Uh=/\{[^}]*\}/g;var Vh=new Set;function Wh(a,b){if(!a)return "";"string"===typeof a&&(a=vh(a));b&&Xh(a,b);return Gh(a,W)}function Yh(a){!a.__cssRules&&a.textContent&&(a.__cssRules=vh(a.textContent));return a.__cssRules||null}function $h(a){return !!a.parent&&a.parent.type===Dh}function Xh(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===Bh){var g=a.selector.match(Th);g&&(window.matchMedia(g[1]).matches||(e=!0));}f===Fh?b(a):c&&f===Dh?c(a):f===Eh&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Xh(g,b,c,d);}}
	function ai(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;bi(e,c,d);return e}var ci=null;function di(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(ci?ci.nextSibling:null)||b.firstChild);return ci=a}function bi(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);ci?a.compareDocumentPosition(ci)===Node.DOCUMENT_POSITION_PRECEDING&&(ci=a):ci=a;}
	function ei(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return -1}function fi(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=ei(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=fi(a.substring(d+1),b);d=e.indexOf(",");return -1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function gi(a,b){V?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b);}
	var hi=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function ii(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return {is:b,ja:c}}function ji(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=ei(a,d);c+=a.slice(d,e+1);d=e;}else ","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
	function ki(a){if(void 0!==Nh)return Nh;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else {a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b="";}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c);}a.__cssBuild=b;}}return a.__cssBuild||""}
	function li(a){a=void 0===a?"":a;return ""!==a&&W?V?"shadow"===a:"shady"===a:!1}function mi(){}function ni(a,b){oi(pi,a,function(c){qi(c,b||"");});}function oi(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)oi(a,d[b],c);}
	function qi(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),gi(a,b)):gi(a,(d?d+" ":"")+"style-scope "+b);}}function ri(a,b,c){oi(pi,a,function(d){qi(d,b,!0);qi(d,c);});}function si(a,b){oi(pi,a,function(c){qi(c,b||"",!0);});}
	function ti(a,b,c,d,e){var f=pi;e=void 0===e?"":e;""===e&&(V||"shady"===(void 0===d?"":d)?e=Wh(b,c):(a=ii(a),e=ui(f,b,a.is,a.ja,c)+"\n\n"));return e.trim()}function ui(a,b,c,d,e){var f=vi(c,d);c=c?"."+c:"";return Wh(b,function(g){g.i||(g.selector=g.G=wi(a,g,a.h,c,f),g.i=!0);e&&e(g,c,f);})}function vi(a,b){return b?"[is="+a+"]":a}
	function wi(a,b,c,d,e){var f=ji(b.selector);if(!$h(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e);}return f.filter(function(k){return !!k}).join(",")}function xi(a){return a.replace(yi,function(b,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return ":"+c+"("+d+")"})}
	function zi(a){for(var b=[],c;c=a.match(Ai);){var d=c.index,e=ei(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c);}return {Ea:a,matches:b}}function Bi(a,b){var c=a.split("\ue000");return b.reduce(function(d,e,f){return d+e+c[f+1]},c[0])}
	mi.prototype.h=function(a,b,c){var d=!1;a=a.trim();var e=yi.test(a);e&&(a=a.replace(yi,function(h,k,l){return ":"+k+"("+l.replace(/\s/g,"")+")"}),a=xi(a));var f=Ai.test(a);if(f){var g=zi(a);a=g.Ea;g=g.matches;}a=a.replace(Ci,":host $1");a=a.replace(Di,function(h,k,l){d||(h=Ei(l,k,b,c),d=d||h.stop,k=h.Ya,l=h.value);return k+l});f&&(a=Bi(a,g));e&&(a=xi(a));return a=a.replace(Fi,function(h,k,l,m){return '[dir="'+l+'"] '+k+m+", "+k+'[dir="'+l+'"]'+m})};
	function Ei(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=Gi(a,d):0!==e&&(a=c?Hi(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Ii,function(g,h){return " > "+h}));}return {value:a,Ya:b,stop:f}}function Hi(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else {var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"));}return c.join("")}
	function Gi(a,b){var c=a.match(Ji);return (c=c&&c[2].trim()||"")?c[0].match(Ki)?a.replace(Ji,function(d,e,f){return b+f}):c.split(Ki)[0]===b?c:"should_not_match":a.replace(":host",b)}function Li(a){":root"===a.selector&&(a.selector="html");}mi.prototype.i=function(a){return a.match(":host")?"":a.match("::slotted")?this.h(a,":not(.style-scope)"):Hi(a.trim(),":not(.style-scope)")};ea.Object.defineProperties(mi.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return "style-scope"}}});
	var yi=/:(nth[-\w]+)\(([^)]+)\)/,Di=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Ki=/[[.:#*]/,Ci=/^(::slotted)/,Ji=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Ii=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Fi=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Ai=/:(?:matches|any|-(?:webkit|moz)-any)/,pi=new mi;function Mi(a,b,c,d,e){this.M=a||null;this.h=b||null;this.Ca=c||[];this.K=null;this.cssBuild=e||"";this.ja=d||"";this.g=this.L=this.R=null;}function Ni(a){return a?a.__styleInfo:null}function Oi(a,b){return a.__styleInfo=b}Mi.prototype.i=function(){return this.M};Mi.prototype._getStyleRules=Mi.prototype.i;function Pi(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var Qi=/:host\s*>\s*/,Ri=navigator.userAgent.match("Trident");function Si(){}function Ti(a){var b={},c=[],d=0;Xh(a,function(f){Ui(f);f.index=d++;f=f.F.cssText;for(var g;g=Rh.exec(f);){var h=g[1];":"!==g[2]&&(b[h]=!0);}},function(f){c.push(f);});a.h=c;a=[];for(var e in b)a.push(e);return a}
	function Ui(a){if(!a.F){var b={},c={};Vi(a,c)&&(b.P=c,a.rules=null);b.cssText=a.parsedCssText.replace(Uh,"").replace(Ph,"");a.F=b;}}function Vi(a,b){var c=a.F;if(c){if(c.P)return Object.assign(b,c.P),!0}else {c=a.parsedCssText;for(var d;a=Ph.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0;}return d}}
	function Wi(a,b,c){b&&(b=0<=b.indexOf(";")?Xi(a,b,c):fi(b,function(d,e,f,g){if(!e)return d+g;(e=Wi(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Wi(a,c[f]||f,c)||f;return d+(e||"")+g}));return b&&b.trim()||""}
	function Xi(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Qh.lastIndex=0;if(f=Qh.exec(e))e=Wi(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Wi(a,g,c)||g;e=e.substring(0,f)+g;}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||"";}return b.join(";")}
	function Yi(a,b){var c={},d=[];Xh(a,function(e){e.F||Ui(e);var f=e.G||e.parsedSelector;b&&e.F.P&&f&&Pi.call(b,f)&&(Vi(e,c),e=e.index,f=parseInt(e/32,10),d[f]=(d[f]||0)|1<<e%32);},null,!0);return {P:c,key:d}}
	function Zi(a,b,c,d){b.F||Ui(b);if(b.F.P){var e=ii(a);a=e.is;e=e.ja;e=a?vi(a,e):"html";var f=b.parsedSelector;var g=!!f.match(Qi)||"html"===e&&-1<f.indexOf("html");var h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.G||(b.G=wi(pi,b,pi.h,a?"."+a:"",e)),c=b.G||e),g&&"html"===e&&(c=b.G||b.O),d({Ea:c,gb:h,vb:g});}}
	function $i(a,b,c){var d={},e={};Xh(b,function(f){Zi(a,f,c,function(g){Pi.call(a._element||a,g.Ea)&&(g.gb?Vi(f,d):Vi(f,e));});},null,!0);return {mb:e,eb:d}}
	function aj(a,b,c,d){var e=ii(b),f=vi(e.is,e.ja),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=Ni(b);e=h.M;h=h.cssBuild;var k=bj(e,d);return ti(b,e,function(l){var m="";l.F||Ui(l);l.F.cssText&&(m=Xi(a,l.F.cssText,c));l.cssText=m;if(!V&&!$h(l)&&l.cssText){var q=m=l.cssText;null==l.Ma&&(l.Ma=Sh.test(m));if(l.Ma)if(null==l.ra){l.ra=[];for(var H in k)q=k[H],q=q(m),m!==q&&(m=q,l.ra.push(H));}else {for(H=0;H<l.ra.length;++H)q=k[l.ra[H]],m=q(m);q=m;}l.cssText=q;l.G=
	l.G||l.selector;m="."+d;H=ji(l.G);q=0;for(var C=H.length,t=void 0;q<C&&(t=H[q]);q++)H[q]=t.match(g)?t.replace(f,m):m+" "+t;l.selector=H.join(",");}},h)}function bj(a,b){a=a.h;var c={};if(!V&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.u=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.g=f.keyframesName+"-"+g;f.G=f.G||f.selector;f.selector=f.G.replace(f.keyframesName,f.g);c[e.keyframesName]=cj(e);}return c}function cj(a){return function(b){return b.replace(a.u,a.g)}}
	function dj(a,b){var c=ej,d=Yh(a);a.textContent=Wh(d,function(e){var f=e.cssText=e.parsedCssText;e.F&&e.F.cssText&&(f=f.replace(Hh,"").replace(Ih,""),e.cssText=Xi(c,f,b));});}ea.Object.defineProperties(Si.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return "x-scope"}}});var ej=new Si;var fj={},gj=window.customElements;if(gj&&!V&&!Oh){var hj=gj.define;gj.define=function(a,b,c){fj[a]||(fj[a]=di(a));hj.call(gj,a,b,c);};}function ij(){this.cache={};}ij.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({P:b,styleElement:c,L:d});100<e.length&&e.shift();this.cache[a]=e;};function jj(){}var kj=new RegExp(pi.g+"\\s*([^\\s]*)");function lj(a){return (a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(kj))?a[1]:""}function mj(a){var b=hi(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?ii(a).is:""}
	function nj(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=lj(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===ki(e)))si(e,g);else if(f instanceof ShadowRoot)for(f=mj(e),f!==g&&ri(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+pi.g+")"),g=0;g<e.length;g++){f=e[g];
	var h=mj(f);h&&qi(f,h);}}}}}
	if(!(V||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var oj=new MutationObserver(nj),pj=function(a){oj.observe(a,{childList:!0,subtree:!0});};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)pj(document);else {var qj=function(){pj(document.body);};window.HTMLImports?window.HTMLImports.whenReady(qj):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){qj();document.removeEventListener("readystatechange",a);};document.addEventListener("readystatechange",
	a);}else qj();});}jj=function(){nj(oj.takeRecords());};}var rj={};var sj=Promise.resolve();function tj(a){if(a=rj[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1;}function uj(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function vj(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,sj.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1;}));}var wj={},xj=new ij;function Y(){this.ea={};this.i=document.documentElement;var a=new uh;a.rules=[];this.u=Oi(this.i,new Mi(a));this.O=!1;this.g=this.h=null;}v=Y.prototype;v.flush=function(){jj();};v.bb=function(a){return Yh(a)};v.qb=function(a){return Wh(a)};v.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c);};
	v.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!Oh){V||fj[b]||(fj[b]=di(b));a._prepared=!0;a.name=b;a.extends=c;rj[b]=a;var d=ki(a),e=li(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!V){var l=k.textContent;if(!Vh.has(l)){Vh.add(l);var m=document.createElement("style");m.setAttribute("shady-unscoped","");m.textContent=l;document.head.appendChild(m);}k.parentNode.removeChild(k);}}else f.push(k.textContent),
	k.parentNode.removeChild(k);}f=f.join("").trim()+(wj[b]||"");yj(this);if(!e){if(g=!d)g=Qh.test(f)||Ph.test(f),Qh.lastIndex=0,Ph.lastIndex=0;h=vh(f);g&&W&&this.h&&this.h.transformRules(h,b);a._styleAst=h;}g=[];W||(g=Ti(a._styleAst));if(!g.length||W)h=V?a.content:null,b=fj[b]||null,d=ti(c,a._styleAst,null,d,e?f:""),d=d.length?ai(d,c.is,h,b):null,a._style=d;a.g=g;}};v.kb=function(a,b){wj[b]=a.join(" ");};
	v.prepareTemplateDom=function(a,b){if(!Oh){var c=ki(a);V||"shady"===c||a._domPrepared||(a._domPrepared=!0,ni(a.content,b));}};function zj(a){var b=ii(a),c=b.is;b=b.ja;var d=fj[c]||null,e=rj[c];if(e){c=e._styleAst;var f=e.g;e=ki(e);b=new Mi(c,d,f,b,e);Oi(a,b);return b}}
	function Aj(a){!a.g&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.g=window.ShadyCSS.CustomStyleInterface,a.g.transformCallback=function(b){a.Qa(b);},a.g.validateCallback=function(){requestAnimationFrame(function(){(a.g.enqueued||a.O)&&a.flushCustomStyles();});});}function yj(a){if(!a.h&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){a.h=window.ShadyCSS.ApplyShim;a.h.invalidCallback=tj;var b=!0;}else b=!1;Aj(a);return b}
	v.flushCustomStyles=function(){if(!Oh){var a=yj(this);if(this.g){var b=this.g.processStyles();if((a||this.g.enqueued)&&!li(this.u.cssBuild)){if(W){if(!this.u.cssBuild)for(a=0;a<b.length;a++){var c=this.g.getStyleForCustomStyle(b[a]);if(c&&W&&this.h){var d=Yh(c);yj(this);this.h.transformRules(d);c.textContent=Wh(d);}}}else {Bj(this,b);Cj(this,this.i,this.u);for(a=0;a<b.length;a++)(c=this.g.getStyleForCustomStyle(b[a]))&&dj(c,this.u.R);this.O&&this.styleDocument();}this.g.enqueued=!1;}}}};
	function Bj(a,b){b=b.map(function(c){return a.g.getStyleForCustomStyle(c)}).filter(function(c){return !!c});b.sort(function(c,d){c=d.compareDocumentPosition(c);return c&Node.DOCUMENT_POSITION_FOLLOWING?1:c&Node.DOCUMENT_POSITION_PRECEDING?-1:0});a.u.M.rules=b.map(function(c){return Yh(c)});}
	v.styleElement=function(a,b){if(Oh){if(b){Ni(a)||Oi(a,new Mi(null));var c=Ni(a);c.K=c.K||{};Object.assign(c.K,b);Dj(this,a,c);}}else if(c=Ni(a)||zj(a))if(a!==this.i&&(this.O=!0),b&&(c.K=c.K||{},Object.assign(c.K,b)),W)Dj(this,a,c);else if(this.flush(),Cj(this,a,c),c.Ca&&c.Ca.length){b=ii(a).is;var d;a:{if(d=xj.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.Ca;for(var h=0;h<g.length;h++){var k=g[h];if(f.P[k]!==c.R[k]){g=!1;break b}}g=!0;}if(g){d=f;break a}}d=void 0;}g=d?d.styleElement:
	null;e=c.L;(f=d&&d.L)||(f=this.ea[b]=(this.ea[b]||0)+1,f=b+"-"+f);c.L=f;f=c.L;h=ej;h=g?g.textContent||"":aj(h,a,c.R,f);k=Ni(a);var l=k.g;l&&!V&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));V?k.g?(k.g.textContent=h,g=k.g):h&&(g=ai(h,f,a.shadowRoot,k.h)):g?g.parentNode||(Ri&&-1<h.indexOf("@media")&&(g.textContent=h),bi(g,null,k.h)):h&&(g=ai(h,f,null,k.h));g&&(g._useCount=g._useCount||0,k.g!=g&&g._useCount++,k.g=g);f=g;V||(g=c.L,k=h=a.getAttribute("class")||"",e&&
	(k=h.replace(new RegExp("\\s*x-scope\\s*"+e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&gi(a,k));d||xj.store(b,c.R,f,c.L);}};
	function Dj(a,b,c){var d=ii(b).is;if(c.K){var e=c.K,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f]);}e=rj[d];if(!(!e&&b!==a.i||e&&""!==ki(e))&&e&&e._style&&!uj(e)){if(uj(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)yj(a),a.h&&a.h.transformRules(e._styleAst,d),e._style.textContent=ti(b,c.M),vj(e);V&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=ti(b,c.M));c.M=e._styleAst;}}
	function Ej(a,b){return (b=hi(b).getRootNode().host)?Ni(b)||zj(b)?b:Ej(a,b):a.i}function Cj(a,b,c){var d=Ej(a,b),e=Ni(d),f=e.R;d===a.i||f||(Cj(a,d,e),f=e.R);a=Object.create(f||null);d=$i(b,c.M,c.cssBuild);b=Yi(e.M,b).P;Object.assign(a,d.eb,b,d.mb);b=c.K;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=ej;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Wi(g,a[d],a);c.R=a;}v.styleDocument=function(a){this.styleSubtree(this.i,a);};
	v.styleSubtree=function(a,b){var c=hi(a),d=c.shadowRoot,e=a===this.i;(d||e)&&this.styleElement(a,b);if(a=e?c:d)for(a=Array.from(a.querySelectorAll("*")).filter(function(f){return hi(f).shadowRoot}),b=0;b<a.length;b++)this.styleSubtree(a[b]);};
	v.Qa=function(a){var b=this,c=ki(a);c!==this.u.cssBuild&&(this.u.cssBuild=c);if(!li(c)){var d=Yh(a);Xh(d,function(e){if(V)Li(e);else {var f=pi;e.selector=e.parsedSelector;Li(e);e.selector=e.G=wi(f,e,f.i,void 0,void 0);}W&&""===c&&(yj(b),b.h&&b.h.transformRule(e));});W?a.textContent=Wh(d):this.u.M.rules.push(d);}};v.getComputedStyleValue=function(a,b){var c;W||(c=(Ni(a)||Ni(Ej(this,a))).R[b]);return (c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
	v.pb=function(a,b){var c=hi(a).getRootNode();b=b?("string"===typeof b?b:String(b)).split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===pi.g){c=d[e+1];break}}}c&&b.push(pi.g,c);W||(c=Ni(a))&&c.L&&b.push(ej.g,c.L);gi(a,b.join(" "));};v.Xa=function(a){return Ni(a)};v.ob=function(a,b){qi(a,b);};v.rb=function(a,b){qi(a,b,!0);};v.nb=function(a){return mj(a)};v.$a=function(a){return lj(a)};Y.prototype.flush=Y.prototype.flush;
	Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.pb;Y.prototype._styleInfoForNode=Y.prototype.Xa;Y.prototype.transformCustomStyleForDocument=Y.prototype.Qa;Y.prototype.getStyleAst=Y.prototype.bb;Y.prototype.styleAstToString=Y.prototype.qb;
	Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;Y.prototype.scopeNode=Y.prototype.ob;Y.prototype.unscopeNode=Y.prototype.rb;Y.prototype.scopeForNode=Y.prototype.nb;Y.prototype.currentScopeForNode=Y.prototype.$a;Y.prototype.prepareAdoptedCssText=Y.prototype.kb;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return V}},nativeCss:{get:function(){return W}}});var Z=new Y,Fj,Gj;window.ShadyCSS&&(Fj=window.ShadyCSS.ApplyShim,Gj=window.ShadyCSS.CustomStyleInterface);
	window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c);},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b);},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c);},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b);},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a);},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a);},flushCustomStyles:function(){Z.flushCustomStyles();},
	getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:W,nativeShadow:V,cssBuild:Nh,disableRuntime:Oh};Fj&&(window.ShadyCSS.ApplyShim=Fj);Gj&&(window.ShadyCSS.CustomStyleInterface=Gj);(function(a){function b(t){""==t&&(f.call(this),this.m=!0);return t.toLowerCase()}function c(t){var F=t.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,63,96].indexOf(F)?t:encodeURIComponent(t)}function d(t){var F=t.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,96].indexOf(F)?t:encodeURIComponent(t)}function e(t,F,E){function N(ha){}var y=F||"scheme start",X=0,x="",ta=!1,ia=!1;a:for(;(void 0!=t[X-1]||0==X)&&!this.m;){var n=t[X];switch(y){case "scheme start":if(n&&q.test(n))x+=
	n.toLowerCase(),y="scheme";else if(F){break a}else {x="";y="no scheme";continue}break;case "scheme":if(n&&H.test(n))x+=n.toLowerCase();else if(":"==n){this.l=x;x="";if(F)break a;void 0!==l[this.l]&&(this.H=!0);y="file"==this.l?"relative":this.H&&E&&E.l==this.l?"relative or authority":this.H?"authority first slash":"scheme data";}else if(F){break a}else {x="";X=0;y="no scheme";continue}break;case "scheme data":"?"==n?(this.A="?",
	y="query"):"#"==n?(this.C="#",y="fragment"):void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.ya+=c(n));break;case "no scheme":if(E&&void 0!==l[E.l]){y="relative";continue}else f.call(this),this.m=!0;break;case "relative or authority":if("/"==n&&"/"==t[X+1])y="authority ignore slashes";else {y="relative";continue}break;case "relative":this.H=!0;"file"!=this.l&&(this.l=E.l);if(void 0==n){this.o=E.o;this.v=E.v;this.s=E.s.slice();this.A=E.A;this.B=E.B;this.j=E.j;
	break a}else if("/"==n||"\\"==n)y="relative slash";else if("?"==n)this.o=E.o,this.v=E.v,this.s=E.s.slice(),this.A="?",this.B=E.B,this.j=E.j,y="query";else if("#"==n)this.o=E.o,this.v=E.v,this.s=E.s.slice(),this.A=E.A,this.C="#",this.B=E.B,this.j=E.j,y="fragment";else {y=t[X+1];var J=t[X+2];if("file"!=this.l||!q.test(n)||":"!=y&&"|"!=y||void 0!=J&&"/"!=J&&"\\"!=J&&"?"!=J&&"#"!=J)this.o=E.o,this.v=E.v,this.B=E.B,this.j=E.j,this.s=E.s.slice(),this.s.pop();y=
	"relative path";continue}break;case "relative slash":if("/"==n||"\\"==n)y="file"==this.l?"file host":"authority ignore slashes";else {"file"!=this.l&&(this.o=E.o,this.v=E.v,this.B=E.B,this.j=E.j);y="relative path";continue}break;case "authority first slash":if("/"==n)y="authority second slash";else {y="authority ignore slashes";continue}break;case "authority second slash":y="authority ignore slashes";if("/"!=n){continue}break;case "authority ignore slashes":if("/"!=n&&"\\"!=n){y="authority";continue}break;case "authority":if("@"==n){ta&&(x+="%40");ta=!0;for(n=0;n<x.length;n++)J=x[n],"\t"==J||"\n"==J||"\r"==J?N():":"==J&&null===this.j?this.j="":(J=c(J),null!==this.j?this.j+=J:this.B+=J);x="";}else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){X-=x.length;x="";y="host";continue}else x+=n;break;case "file host":if(void 0==
	n||"/"==n||"\\"==n||"?"==n||"#"==n){2!=x.length||!q.test(x[0])||":"!=x[1]&&"|"!=x[1]?(0!=x.length&&(this.o=b.call(this,x),x=""),y="relative path start"):y="relative path";continue}else "\t"==n||"\n"==n||"\r"==n?N():x+=n;break;case "host":case "hostname":if(":"!=n||ia)if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){this.o=b.call(this,x);x="";y="relative path start";if(F)break a;continue}else "\t"!=n&&"\n"!=n&&"\r"!=n?("["==n?ia=!0:"]"==n&&(ia=!1),x+=n):N();else if(this.o=b.call(this,x),x="",y="port","hostname"==F)break a;break;case "port":if(/[0-9]/.test(n))x+=n;else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n||F){""!=x&&(x=parseInt(x,10),x!=l[this.l]&&(this.v=x+""),x="");if(F)break a;y="relative path start";continue}else "\t"==n||"\n"==n||"\r"==n?N():(f.call(this),this.m=!0);break;case "relative path start":y="relative path";if("/"!=n&&"\\"!=n)continue;break;case "relative path":if(void 0!=
	n&&"/"!=n&&"\\"!=n&&(F||"?"!=n&&"#"!=n))"\t"!=n&&"\n"!=n&&"\r"!=n&&(x+=c(n));else {if(J=m[x.toLowerCase()])x=J;".."==x?(this.s.pop(),"/"!=n&&"\\"!=n&&this.s.push("")):"."==x&&"/"!=n&&"\\"!=n?this.s.push(""):"."!=x&&("file"==this.l&&0==this.s.length&&2==x.length&&q.test(x[0])&&"|"==x[1]&&(x=x[0]+":"),this.s.push(x));x="";"?"==n?(this.A="?",y="query"):"#"==n&&(this.C="#",y="fragment");}break;case "query":F||"#"!=n?void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.A+=
	d(n)):(this.C="#",y="fragment");break;case "fragment":void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.C+=n);}X++;}}function f(){this.B=this.ya=this.l="";this.j=null;this.v=this.o="";this.s=[];this.C=this.A="";this.H=this.m=!1;}function g(t,F){void 0===F||F instanceof g||(F=new g(String(F)));this.g=t;f.call(this);e.call(this,this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,F);}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href;}catch(t){}if(!h){var l=Object.create(null);
	l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var m=Object.create(null);m["%2e"]=".";m[".%2e"]="..";m["%2e."]="..";m["%2e%2e"]="..";var q=/[a-zA-Z]/,H=/[a-zA-Z0-9+\-.]/;g.prototype={toString:function(){return this.href},get href(){if(this.m)return this.g;var t="";if(""!=this.B||null!=this.j)t=this.B+(null!=this.j?":"+this.j:"")+"@";return this.protocol+(this.H?"//"+t+this.host:"")+this.pathname+this.A+this.C},set href(t){f.call(this);e.call(this,t);},get protocol(){return this.l+
	":"},set protocol(t){this.m||e.call(this,t+":","scheme start");},get host(){return this.m?"":this.v?this.o+":"+this.v:this.o},set host(t){!this.m&&this.H&&e.call(this,t,"host");},get hostname(){return this.o},set hostname(t){!this.m&&this.H&&e.call(this,t,"hostname");},get port(){return this.v},set port(t){!this.m&&this.H&&e.call(this,t,"port");},get pathname(){return this.m?"":this.H?"/"+this.s.join("/"):this.ya},set pathname(t){!this.m&&this.H&&(this.s=[],e.call(this,t,"relative path start"));},get search(){return this.m||
	!this.A||"?"==this.A?"":this.A},set search(t){!this.m&&this.H&&(this.A="?","?"==t[0]&&(t=t.slice(1)),e.call(this,t,"query"));},get hash(){return this.m||!this.C||"#"==this.C?"":this.C},set hash(t){this.m||(t?(this.C="#","#"==t[0]&&(t=t.slice(1)),e.call(this,t,"fragment")):this.C="");},get origin(){var t;if(this.m||!this.l)return "";switch(this.l){case "data":case "file":case "javascript":case "mailto":return "null"}return (t=this.host)?this.l+"://"+t:""}};var C=a.URL;C&&(g.createObjectURL=function(t){return C.createObjectURL.apply(C,
	arguments)},g.revokeObjectURL=function(t){C.revokeObjectURL(t);});a.URL=g;}})(window);/*

	Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	var Hj=window.customElements,Ij=!1,Jj=null;Hj.polyfillWrapFlushCallback&&Hj.polyfillWrapFlushCallback(function(a){Jj=a;Ij&&a();});function Kj(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Jj&&Jj();Ij=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));}
	"complete"!==document.readyState?(window.addEventListener("load",Kj),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Kj);Kj();})):Kj();}).call(commonjsGlobal);

	var check = function (it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$m =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$t = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$s = fails$t;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$s(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	var fails$r = fails$t;

	var functionBindNative = !fails$r(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$4 = functionBindNative;

	var call$f = Function.prototype.call;

	var functionCall = NATIVE_BIND$4 ? call$f.bind(call$f) : function () {
	  return call$f.apply(call$f, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$3(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$5 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$3 = functionBindNative;

	var FunctionPrototype$3 = Function.prototype;
	var call$e = FunctionPrototype$3.call;
	var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$e, call$e);

	var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$e.apply(fn, arguments);
	  };
	};

	var uncurryThis$r = functionUncurryThis;

	var toString$a = uncurryThis$r({}.toString);
	var stringSlice$5 = uncurryThis$r(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$5(toString$a(it), 8, -1);
	};

	var uncurryThis$q = functionUncurryThis;
	var fails$q = fails$t;
	var classof$9 = classofRaw$2;

	var $Object$4 = Object;
	var split = uncurryThis$q(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$q(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$9(it) === 'String' ? split(it, '') : $Object$4(it);
	} : $Object$4;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$3 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$2 = isNullOrUndefined$3;

	var $TypeError$c = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$4 = function (it) {
	  if (isNullOrUndefined$2(it)) throw new $TypeError$c("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$2 = indexedObject;
	var requireObjectCoercible$3 = requireObjectCoercible$4;

	var toIndexedObject$8 = function (it) {
	  return IndexedObject$2(requireObjectCoercible$3(it));
	};

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var isCallable$j = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$i = isCallable$j;

	var isObject$g = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$i(it);
	};

	var global$l = global$m;
	var isCallable$h = isCallable$j;

	var aFunction = function (argument) {
	  return isCallable$h(argument) ? argument : undefined;
	};

	var getBuiltIn$9 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$l[namespace]) : global$l[namespace] && global$l[namespace][method];
	};

	var uncurryThis$p = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$p({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$k = global$m;
	var userAgent = engineUserAgent;

	var process = global$k.process;
	var Deno = global$k.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$2 = engineV8Version;
	var fails$p = fails$t;
	var global$j = global$m;

	var $String$6 = global$j.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$p(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$6 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$6
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$8 = getBuiltIn$9;
	var isCallable$g = isCallable$j;
	var isPrototypeOf$4 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$3 = Object;

	var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$8('Symbol');
	  return isCallable$g($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$3(it));
	};

	var $String$5 = String;

	var tryToString$5 = function (argument) {
	  try {
	    return $String$5(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$f = isCallable$j;
	var tryToString$4 = tryToString$5;

	var $TypeError$b = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$5 = function (argument) {
	  if (isCallable$f(argument)) return argument;
	  throw new $TypeError$b(tryToString$4(argument) + ' is not a function');
	};

	var aCallable$4 = aCallable$5;
	var isNullOrUndefined$1 = isNullOrUndefined$3;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$1(func) ? undefined : aCallable$4(func);
	};

	var call$d = functionCall;
	var isCallable$e = isCallable$j;
	var isObject$f = isObject$g;

	var $TypeError$a = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$2 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$f(val = call$d(fn, input))) return val;
	  if (isCallable$e(fn = input.valueOf) && !isObject$f(val = call$d(fn, input))) return val;
	  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$f(val = call$d(fn, input))) return val;
	  throw new $TypeError$a("Can't convert object to primitive value");
	};

	var shared$7 = {exports: {}};

	var isPure = false;

	var global$i = global$m;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$9 = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$9(global$i, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$i[key] = value;
	  } return value;
	};

	var global$h = global$m;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$h[SHARED] || defineGlobalProperty$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$7.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.35.1',
	  mode: 'global',
	  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var sharedExports = shared$7.exports;

	var requireObjectCoercible$2 = requireObjectCoercible$4;

	var $Object$2 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$9 = function (argument) {
	  return $Object$2(requireObjectCoercible$2(argument));
	};

	var uncurryThis$o = functionUncurryThis;
	var toObject$8 = toObject$9;

	var hasOwnProperty = uncurryThis$o({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$8(it), key);
	};

	var uncurryThis$n = functionUncurryThis;

	var id$1 = 0;
	var postfix = Math.random();
	var toString$9 = uncurryThis$n(1.0.toString);

	var uid$4 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id$1 + postfix, 36);
	};

	var global$g = global$m;
	var shared$6 = sharedExports;
	var hasOwn$i = hasOwnProperty_1;
	var uid$3 = uid$4;
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$1 = global$g.Symbol;
	var WellKnownSymbolsStore$1 = shared$6('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;

	var wellKnownSymbol$j = function (name) {
	  if (!hasOwn$i(WellKnownSymbolsStore$1, name)) {
	    WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$5 && hasOwn$i(Symbol$1, name)
	      ? Symbol$1[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore$1[name];
	};

	var call$c = functionCall;
	var isObject$e = isObject$g;
	var isSymbol$4 = isSymbol$5;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
	var wellKnownSymbol$i = wellKnownSymbol$j;

	var $TypeError$9 = TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$i('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$2 = function (input, pref) {
	  if (!isObject$e(input) || isSymbol$4(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$c(exoticToPrim, input, pref);
	    if (!isObject$e(result) || isSymbol$4(result)) return result;
	    throw new $TypeError$9("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$1(input, pref);
	};

	var toPrimitive$1 = toPrimitive$2;
	var isSymbol$3 = isSymbol$5;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive$1(argument, 'string');
	  return isSymbol$3(key) ? key : key + '';
	};

	var global$f = global$m;
	var isObject$d = isObject$g;

	var document$1 = global$f.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$d(document$1) && isObject$d(document$1.createElement);

	var documentCreateElement$2 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$e = descriptors;
	var fails$o = fails$t;
	var createElement = documentCreateElement$2;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$e && !fails$o(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$d = descriptors;
	var call$b = functionCall;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$4 = createPropertyDescriptor$5;
	var toIndexedObject$7 = toIndexedObject$8;
	var toPropertyKey$3 = toPropertyKey$4;
	var hasOwn$h = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$d ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$7(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$h(O, P)) return createPropertyDescriptor$4(!call$b(propertyIsEnumerableModule$2.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$c = descriptors;
	var fails$n = fails$t;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$c && fails$n(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$c = isObject$g;

	var $String$4 = String;
	var $TypeError$8 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$d = function (argument) {
	  if (isObject$c(argument)) return argument;
	  throw new $TypeError$8($String$4(argument) + ' is not an object');
	};

	var DESCRIPTORS$b = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$c = anObject$d;
	var toPropertyKey$2 = toPropertyKey$4;

	var $TypeError$7 = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$b ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$c(O);
	  P = toPropertyKey$2(P);
	  anObject$c(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$1(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty$1(O, P, Attributes);
	} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$c(O);
	  P = toPropertyKey$2(P);
	  anObject$c(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$7('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$a = descriptors;
	var definePropertyModule$5 = objectDefineProperty;
	var createPropertyDescriptor$3 = createPropertyDescriptor$5;

	var createNonEnumerableProperty$5 = DESCRIPTORS$a ? function (object, key, value) {
	  return definePropertyModule$5.f(object, key, createPropertyDescriptor$3(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltIn$3 = {exports: {}};

	var DESCRIPTORS$9 = descriptors;
	var hasOwn$g = hasOwnProperty_1;

	var FunctionPrototype$2 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$9 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$g(FunctionPrototype$2, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$9 || (DESCRIPTORS$9 && getDescriptor(FunctionPrototype$2, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$m = functionUncurryThis;
	var isCallable$d = isCallable$j;
	var store$1 = sharedStore;

	var functionToString$1 = uncurryThis$m(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$d(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString$1(it);
	  };
	}

	var inspectSource$2 = store$1.inspectSource;

	var global$e = global$m;
	var isCallable$c = isCallable$j;

	var WeakMap$2 = global$e.WeakMap;

	var weakMapBasicDetection = isCallable$c(WeakMap$2) && /native code/.test(String(WeakMap$2));

	var shared$5 = sharedExports;
	var uid$2 = uid$4;

	var keys = shared$5('keys');

	var sharedKey$4 = function (key) {
	  return keys[key] || (keys[key] = uid$2(key));
	};

	var hiddenKeys$6 = {};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$d = global$m;
	var isObject$b = isObject$g;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
	var hasOwn$f = hasOwnProperty_1;
	var shared$4 = sharedStore;
	var sharedKey$3 = sharedKey$4;
	var hiddenKeys$5 = hiddenKeys$6;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$3 = global$d.TypeError;
	var WeakMap$1 = global$d.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$b(it) || (state = get(it)).type !== TYPE) {
	      throw new TypeError$3('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$4.state) {
	  var store = shared$4.state || (shared$4.state = new WeakMap$1());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store.get = store.get;
	  store.has = store.has;
	  store.set = store.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set = function (it, metadata) {
	    if (store.has(it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store.set(it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return store.get(it) || {};
	  };
	  has = function (it) {
	    return store.has(it);
	  };
	} else {
	  var STATE = sharedKey$3('state');
	  hiddenKeys$5[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$f(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$4(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$f(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$f(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var uncurryThis$l = functionUncurryThis;
	var fails$m = fails$t;
	var isCallable$b = isCallable$j;
	var hasOwn$e = hasOwnProperty_1;
	var DESCRIPTORS$8 = descriptors;
	var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
	var inspectSource$1 = inspectSource$2;
	var InternalStateModule$3 = internalState;

	var enforceInternalState = InternalStateModule$3.enforce;
	var getInternalState$4 = InternalStateModule$3.get;
	var $String$3 = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$8 = Object.defineProperty;
	var stringSlice$4 = uncurryThis$l(''.slice);
	var replace$4 = uncurryThis$l(''.replace);
	var join$1 = uncurryThis$l([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS$8 && !fails$m(function () {
	  return defineProperty$8(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
	  if (stringSlice$4($String$3(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$4($String$3(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$e(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
	    if (DESCRIPTORS$8) defineProperty$8(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$e(options, 'arity') && value.length !== options.arity) {
	    defineProperty$8(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$e(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$8) defineProperty$8(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState(value);
	  if (!hasOwn$e(state, 'source')) {
	    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$2(function toString() {
	  return isCallable$b(this) && getInternalState$4(this).source || inspectSource$1(this);
	}, 'toString');

	var makeBuiltInExports = makeBuiltIn$3.exports;

	var isCallable$a = isCallable$j;
	var definePropertyModule$4 = objectDefineProperty;
	var makeBuiltIn$1 = makeBuiltInExports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$8 = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$a(value)) makeBuiltIn$1(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule$4.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$4 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

	var max$2 = Math.max;
	var min$2 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$3 = function (index, length) {
	  var integer = toIntegerOrInfinity$3(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  var len = toIntegerOrInfinity$2(argument);
	  return len > 0 ? min$1(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$6 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$6 = toIndexedObject$8;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;
	var lengthOfArrayLike$5 = lengthOfArrayLike$6;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$3 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$6($this);
	    var length = lengthOfArrayLike$5(O);
	    var index = toAbsoluteIndex$2(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value !== value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$3(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$3(false)
	};

	var uncurryThis$k = functionUncurryThis;
	var hasOwn$d = hasOwnProperty_1;
	var toIndexedObject$5 = toIndexedObject$8;
	var indexOf$1 = arrayIncludes.indexOf;
	var hiddenKeys$4 = hiddenKeys$6;

	var push$4 = uncurryThis$k([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$5(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$d(hiddenKeys$4, key) && hasOwn$d(O, key) && push$4(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$d(O, key = names[i++])) {
	    ~indexOf$1(result, key) || push$4(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$3);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$7 = getBuiltIn$9;
	var uncurryThis$j = functionUncurryThis;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
	var anObject$b = anObject$d;

	var concat$2 = uncurryThis$j([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$7('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$2.f(anObject$b(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
	  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$c = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$3 = objectDefineProperty;

	var copyConstructorProperties$3 = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$3.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$c(target, key) && !(exceptions && hasOwn$c(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$l = fails$t;
	var isCallable$9 = isCallable$j;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable$9(detection) ? fails$l(detection)
	    : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';

	var isForced_1 = isForced$2;

	var global$c = global$m;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
	var defineBuiltIn$7 = defineBuiltIn$8;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties$2 = copyConstructorProperties$3;
	var isForced$1 = isForced_1;

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$c;
	  } else if (STATIC) {
	    target = global$c[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = global$c[TARGET] && global$c[TARGET].prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$2(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties$2(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$7(target, key, sourceProperty, options);
	  }
	};

	var $$l = _export;
	var global$b = global$m;

	// `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis
	$$l({ global: true, forced: global$b.globalThis !== global$b }, {
	  globalThis: global$b
	});

	/* eslint-disable no-prototype-builtins */
	var g$1 =
	  (typeof globalThis !== 'undefined' && globalThis) ||
	  (typeof self !== 'undefined' && self) ||
	  // eslint-disable-next-line no-undef
	  (typeof global !== 'undefined' && global) ||
	  {};

	var support = {
	  searchParams: 'URLSearchParams' in g$1,
	  iterable: 'Symbol' in g$1 && 'iterator' in Symbol,
	  blob:
	    'FileReader' in g$1 &&
	    'Blob' in g$1 &&
	    (function() {
	      try {
	        new Blob();
	        return true
	      } catch (e) {
	        return false
	      }
	    })(),
	  formData: 'FormData' in g$1,
	  arrayBuffer: 'ArrayBuffer' in g$1
	};

	function isDataView(obj) {
	  return obj && DataView.prototype.isPrototypeOf(obj)
	}

	if (support.arrayBuffer) {
	  var viewClasses = [
	    '[object Int8Array]',
	    '[object Uint8Array]',
	    '[object Uint8ClampedArray]',
	    '[object Int16Array]',
	    '[object Uint16Array]',
	    '[object Int32Array]',
	    '[object Uint32Array]',
	    '[object Float32Array]',
	    '[object Float64Array]'
	  ];

	  var isArrayBufferView =
	    ArrayBuffer.isView ||
	    function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    };
	}

	function normalizeName(name) {
	  if (typeof name !== 'string') {
	    name = String(name);
	  }
	  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
	    throw new TypeError('Invalid character in header field name: "' + name + '"')
	  }
	  return name.toLowerCase()
	}

	function normalizeValue(value) {
	  if (typeof value !== 'string') {
	    value = String(value);
	  }
	  return value
	}

	// Build a destructive iterator for the value list
	function iteratorFor(items) {
	  var iterator = {
	    next: function() {
	      var value = items.shift();
	      return {done: value === undefined, value: value}
	    }
	  };

	  if (support.iterable) {
	    iterator[Symbol.iterator] = function() {
	      return iterator
	    };
	  }

	  return iterator
	}

	function Headers(headers) {
	  this.map = {};

	  if (headers instanceof Headers) {
	    headers.forEach(function(value, name) {
	      this.append(name, value);
	    }, this);
	  } else if (Array.isArray(headers)) {
	    headers.forEach(function(header) {
	      if (header.length != 2) {
	        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
	      }
	      this.append(header[0], header[1]);
	    }, this);
	  } else if (headers) {
	    Object.getOwnPropertyNames(headers).forEach(function(name) {
	      this.append(name, headers[name]);
	    }, this);
	  }
	}

	Headers.prototype.append = function(name, value) {
	  name = normalizeName(name);
	  value = normalizeValue(value);
	  var oldValue = this.map[name];
	  this.map[name] = oldValue ? oldValue + ', ' + value : value;
	};

	Headers.prototype['delete'] = function(name) {
	  delete this.map[normalizeName(name)];
	};

	Headers.prototype.get = function(name) {
	  name = normalizeName(name);
	  return this.has(name) ? this.map[name] : null
	};

	Headers.prototype.has = function(name) {
	  return this.map.hasOwnProperty(normalizeName(name))
	};

	Headers.prototype.set = function(name, value) {
	  this.map[normalizeName(name)] = normalizeValue(value);
	};

	Headers.prototype.forEach = function(callback, thisArg) {
	  for (var name in this.map) {
	    if (this.map.hasOwnProperty(name)) {
	      callback.call(thisArg, this.map[name], name, this);
	    }
	  }
	};

	Headers.prototype.keys = function() {
	  var items = [];
	  this.forEach(function(value, name) {
	    items.push(name);
	  });
	  return iteratorFor(items)
	};

	Headers.prototype.values = function() {
	  var items = [];
	  this.forEach(function(value) {
	    items.push(value);
	  });
	  return iteratorFor(items)
	};

	Headers.prototype.entries = function() {
	  var items = [];
	  this.forEach(function(value, name) {
	    items.push([name, value]);
	  });
	  return iteratorFor(items)
	};

	if (support.iterable) {
	  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	}

	function consumed(body) {
	  if (body._noBody) return
	  if (body.bodyUsed) {
	    return Promise.reject(new TypeError('Already read'))
	  }
	  body.bodyUsed = true;
	}

	function fileReaderReady(reader) {
	  return new Promise(function(resolve, reject) {
	    reader.onload = function() {
	      resolve(reader.result);
	    };
	    reader.onerror = function() {
	      reject(reader.error);
	    };
	  })
	}

	function readBlobAsArrayBuffer(blob) {
	  var reader = new FileReader();
	  var promise = fileReaderReady(reader);
	  reader.readAsArrayBuffer(blob);
	  return promise
	}

	function readBlobAsText(blob) {
	  var reader = new FileReader();
	  var promise = fileReaderReady(reader);
	  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
	  var encoding = match ? match[1] : 'utf-8';
	  reader.readAsText(blob, encoding);
	  return promise
	}

	function readArrayBufferAsText(buf) {
	  var view = new Uint8Array(buf);
	  var chars = new Array(view.length);

	  for (var i = 0; i < view.length; i++) {
	    chars[i] = String.fromCharCode(view[i]);
	  }
	  return chars.join('')
	}

	function bufferClone(buf) {
	  if (buf.slice) {
	    return buf.slice(0)
	  } else {
	    var view = new Uint8Array(buf.byteLength);
	    view.set(new Uint8Array(buf));
	    return view.buffer
	  }
	}

	function Body() {
	  this.bodyUsed = false;

	  this._initBody = function(body) {
	    /*
	      fetch-mock wraps the Response object in an ES6 Proxy to
	      provide useful test harness features such as flush. However, on
	      ES5 browsers without fetch or Proxy support pollyfills must be used;
	      the proxy-pollyfill is unable to proxy an attribute unless it exists
	      on the object before the Proxy is created. This change ensures
	      Response.bodyUsed exists on the instance, while maintaining the
	      semantic of setting Request.bodyUsed in the constructor before
	      _initBody is called.
	    */
	    // eslint-disable-next-line no-self-assign
	    this.bodyUsed = this.bodyUsed;
	    this._bodyInit = body;
	    if (!body) {
	      this._noBody = true;
	      this._bodyText = '';
	    } else if (typeof body === 'string') {
	      this._bodyText = body;
	    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	      this._bodyBlob = body;
	    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	      this._bodyFormData = body;
	    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	      this._bodyText = body.toString();
	    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	      this._bodyArrayBuffer = bufferClone(body.buffer);
	      // IE 10-11 can't handle a DataView body.
	      this._bodyInit = new Blob([this._bodyArrayBuffer]);
	    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	      this._bodyArrayBuffer = bufferClone(body);
	    } else {
	      this._bodyText = body = Object.prototype.toString.call(body);
	    }

	    if (!this.headers.get('content-type')) {
	      if (typeof body === 'string') {
	        this.headers.set('content-type', 'text/plain;charset=UTF-8');
	      } else if (this._bodyBlob && this._bodyBlob.type) {
	        this.headers.set('content-type', this._bodyBlob.type);
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	      }
	    }
	  };

	  if (support.blob) {
	    this.blob = function() {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return Promise.resolve(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as blob')
	      } else {
	        return Promise.resolve(new Blob([this._bodyText]))
	      }
	    };
	  }

	  this.arrayBuffer = function() {
	    if (this._bodyArrayBuffer) {
	      var isConsumed = consumed(this);
	      if (isConsumed) {
	        return isConsumed
	      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
	        return Promise.resolve(
	          this._bodyArrayBuffer.buffer.slice(
	            this._bodyArrayBuffer.byteOffset,
	            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
	          )
	        )
	      } else {
	        return Promise.resolve(this._bodyArrayBuffer)
	      }
	    } else if (support.blob) {
	      return this.blob().then(readBlobAsArrayBuffer)
	    } else {
	      throw new Error('could not read as ArrayBuffer')
	    }
	  };

	  this.text = function() {
	    var rejected = consumed(this);
	    if (rejected) {
	      return rejected
	    }

	    if (this._bodyBlob) {
	      return readBlobAsText(this._bodyBlob)
	    } else if (this._bodyArrayBuffer) {
	      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	    } else if (this._bodyFormData) {
	      throw new Error('could not read FormData body as text')
	    } else {
	      return Promise.resolve(this._bodyText)
	    }
	  };

	  if (support.formData) {
	    this.formData = function() {
	      return this.text().then(decode)
	    };
	  }

	  this.json = function() {
	    return this.text().then(JSON.parse)
	  };

	  return this
	}

	// HTTP methods whose capitalization should be normalized
	var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];

	function normalizeMethod(method) {
	  var upcased = method.toUpperCase();
	  return methods.indexOf(upcased) > -1 ? upcased : method
	}

	function Request(input, options) {
	  if (!(this instanceof Request)) {
	    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
	  }

	  options = options || {};
	  var body = options.body;

	  if (input instanceof Request) {
	    if (input.bodyUsed) {
	      throw new TypeError('Already read')
	    }
	    this.url = input.url;
	    this.credentials = input.credentials;
	    if (!options.headers) {
	      this.headers = new Headers(input.headers);
	    }
	    this.method = input.method;
	    this.mode = input.mode;
	    this.signal = input.signal;
	    if (!body && input._bodyInit != null) {
	      body = input._bodyInit;
	      input.bodyUsed = true;
	    }
	  } else {
	    this.url = String(input);
	  }

	  this.credentials = options.credentials || this.credentials || 'same-origin';
	  if (options.headers || !this.headers) {
	    this.headers = new Headers(options.headers);
	  }
	  this.method = normalizeMethod(options.method || this.method || 'GET');
	  this.mode = options.mode || this.mode || null;
	  this.signal = options.signal || this.signal || (function () {
	    if ('AbortController' in g$1) {
	      var ctrl = new AbortController();
	      return ctrl.signal;
	    }
	  }());
	  this.referrer = null;

	  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	    throw new TypeError('Body not allowed for GET or HEAD requests')
	  }
	  this._initBody(body);

	  if (this.method === 'GET' || this.method === 'HEAD') {
	    if (options.cache === 'no-store' || options.cache === 'no-cache') {
	      // Search for a '_' parameter in the query string
	      var reParamSearch = /([?&])_=[^&]*/;
	      if (reParamSearch.test(this.url)) {
	        // If it already exists then set the value with the current time
	        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
	      } else {
	        // Otherwise add a new '_' parameter to the end with the current time
	        var reQueryString = /\?/;
	        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
	      }
	    }
	  }
	}

	Request.prototype.clone = function() {
	  return new Request(this, {body: this._bodyInit})
	};

	function decode(body) {
	  var form = new FormData();
	  body
	    .trim()
	    .split('&')
	    .forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	  return form
	}

	function parseHeaders(rawHeaders) {
	  var headers = new Headers();
	  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	  // https://tools.ietf.org/html/rfc7230#section-3.2
	  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
	  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
	  // https://github.com/github/fetch/issues/748
	  // https://github.com/zloirock/core-js/issues/751
	  preProcessedHeaders
	    .split('\r')
	    .map(function(header) {
	      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
	    })
	    .forEach(function(line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        try {
	          headers.append(key, value);
	        } catch (error) {
	          console.warn('Response ' + error.message);
	        }
	      }
	    });
	  return headers
	}

	Body.call(Request.prototype);

	function Response(bodyInit, options) {
	  if (!(this instanceof Response)) {
	    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
	  }
	  if (!options) {
	    options = {};
	  }

	  this.type = 'default';
	  this.status = options.status === undefined ? 200 : options.status;
	  if (this.status < 200 || this.status > 599) {
	    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
	  }
	  this.ok = this.status >= 200 && this.status < 300;
	  this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
	  this.headers = new Headers(options.headers);
	  this.url = options.url || '';
	  this._initBody(bodyInit);
	}

	Body.call(Response.prototype);

	Response.prototype.clone = function() {
	  return new Response(this._bodyInit, {
	    status: this.status,
	    statusText: this.statusText,
	    headers: new Headers(this.headers),
	    url: this.url
	  })
	};

	Response.error = function() {
	  var response = new Response(null, {status: 200, statusText: ''});
	  response.ok = false;
	  response.status = 0;
	  response.type = 'error';
	  return response
	};

	var redirectStatuses = [301, 302, 303, 307, 308];

	Response.redirect = function(url, status) {
	  if (redirectStatuses.indexOf(status) === -1) {
	    throw new RangeError('Invalid status code')
	  }

	  return new Response(null, {status: status, headers: {location: url}})
	};

	var DOMException = g$1.DOMException;
	try {
	  new DOMException();
	} catch (err) {
	  DOMException = function(message, name) {
	    this.message = message;
	    this.name = name;
	    var error = Error(message);
	    this.stack = error.stack;
	  };
	  DOMException.prototype = Object.create(Error.prototype);
	  DOMException.prototype.constructor = DOMException;
	}

	function fetch(input, init) {
	  return new Promise(function(resolve, reject) {
	    var request = new Request(input, init);

	    if (request.signal && request.signal.aborted) {
	      return reject(new DOMException('Aborted', 'AbortError'))
	    }

	    var xhr = new XMLHttpRequest();

	    function abortXhr() {
	      xhr.abort();
	    }

	    xhr.onload = function() {
	      var options = {
	        statusText: xhr.statusText,
	        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	      };
	      // This check if specifically for when a user fetches a file locally from the file system
	      // Only if the status is out of a normal range
	      if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
	        options.status = 200;
	      } else {
	        options.status = xhr.status;
	      }
	      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	      var body = 'response' in xhr ? xhr.response : xhr.responseText;
	      setTimeout(function() {
	        resolve(new Response(body, options));
	      }, 0);
	    };

	    xhr.onerror = function() {
	      setTimeout(function() {
	        reject(new TypeError('Network request failed'));
	      }, 0);
	    };

	    xhr.ontimeout = function() {
	      setTimeout(function() {
	        reject(new TypeError('Network request timed out'));
	      }, 0);
	    };

	    xhr.onabort = function() {
	      setTimeout(function() {
	        reject(new DOMException('Aborted', 'AbortError'));
	      }, 0);
	    };

	    function fixUrl(url) {
	      try {
	        return url === '' && g$1.location.href ? g$1.location.href : url
	      } catch (e) {
	        return url
	      }
	    }

	    xhr.open(request.method, fixUrl(request.url), true);

	    if (request.credentials === 'include') {
	      xhr.withCredentials = true;
	    } else if (request.credentials === 'omit') {
	      xhr.withCredentials = false;
	    }

	    if ('responseType' in xhr) {
	      if (support.blob) {
	        xhr.responseType = 'blob';
	      } else if (
	        support.arrayBuffer
	      ) {
	        xhr.responseType = 'arraybuffer';
	      }
	    }

	    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g$1.Headers && init.headers instanceof g$1.Headers))) {
	      var names = [];
	      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
	        names.push(normalizeName(name));
	        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
	      });
	      request.headers.forEach(function(value, name) {
	        if (names.indexOf(name) === -1) {
	          xhr.setRequestHeader(name, value);
	        }
	      });
	    } else {
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value);
	      });
	    }

	    if (request.signal) {
	      request.signal.addEventListener('abort', abortXhr);

	      xhr.onreadystatechange = function() {
	        // DONE (success or failure)
	        if (xhr.readyState === 4) {
	          request.signal.removeEventListener('abort', abortXhr);
	        }
	      };
	    }

	    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	  })
	}

	fetch.polyfill = true;

	if (!g$1.fetch) {
	  g$1.fetch = fetch;
	  g$1.Headers = Headers;
	  g$1.Request = Request;
	  g$1.Response = Response;
	}

	var wellKnownSymbol$h = wellKnownSymbol$j;

	var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$8 = isCallable$j;
	var classofRaw$1 = classofRaw$2;
	var wellKnownSymbol$g = wellKnownSymbol$j;

	var TO_STRING_TAG$1 = wellKnownSymbol$g('toStringTag');
	var $Object$1 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw$1(O)
	    // ES3 arguments fallback
	    : (result = classofRaw$1(O)) === 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
	};

	var classof$7 = classof$8;

	var $String$2 = String;

	var toString$8 = function (argument) {
	  if (classof$7(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String$2(argument);
	};

	var objectDefineProperties = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$3 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$7 = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$2 = objectDefineProperty;
	var anObject$a = anObject$d;
	var toIndexedObject$4 = toIndexedObject$8;
	var objectKeys$2 = objectKeys$3;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$7 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$a(O);
	  var props = toIndexedObject$4(Properties);
	  var keys = objectKeys$2(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$6 = getBuiltIn$9;

	var html$1 = getBuiltIn$6('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */
	var anObject$9 = anObject$d;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$6;
	var html = html$1;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$2 = sharedKey$4;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$2('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$2[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$9(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var objectGetOwnPropertyNamesExternal = {};

	var uncurryThis$i = functionUncurryThis;

	var arraySlice$3 = uncurryThis$i([].slice);

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof$6 = classofRaw$2;
	var toIndexedObject$3 = toIndexedObject$8;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$2 = arraySlice$3;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$2(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$6(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$3(it));
	};

	var makeBuiltIn = makeBuiltInExports;
	var defineProperty$7 = objectDefineProperty;

	var defineBuiltInAccessor$3 = function (target, name, descriptor) {
	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
	  return defineProperty$7.f(target, name, descriptor);
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$f = wellKnownSymbol$j;

	wellKnownSymbolWrapped.f = wellKnownSymbol$f;

	var global$a = global$m;

	var path$2 = global$a;

	var path$1 = path$2;
	var hasOwn$b = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$6 = objectDefineProperty.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$1.Symbol || (path$1.Symbol = {});
	  if (!hasOwn$b(Symbol, NAME)) defineProperty$6(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$a = functionCall;
	var getBuiltIn$5 = getBuiltIn$9;
	var wellKnownSymbol$e = wellKnownSymbol$j;
	var defineBuiltIn$6 = defineBuiltIn$8;

	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$5('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$e('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$6(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$a(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	var defineProperty$5 = objectDefineProperty.f;
	var hasOwn$a = hasOwnProperty_1;
	var wellKnownSymbol$d = wellKnownSymbol$j;

	var TO_STRING_TAG = wellKnownSymbol$d('toStringTag');

	var setToStringTag$7 = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn$a(target, TO_STRING_TAG)) {
	    defineProperty$5(target, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var classofRaw = classofRaw$2;
	var uncurryThis$h = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw(fn) === 'Function') return uncurryThis$h(fn);
	};

	var uncurryThis$g = functionUncurryThisClause;
	var aCallable$3 = aCallable$5;
	var NATIVE_BIND$2 = functionBindNative;

	var bind$3 = uncurryThis$g(uncurryThis$g.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$3(fn);
	  return that === undefined ? fn : NATIVE_BIND$2 ? bind$3(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var classof$5 = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$5 = Array.isArray || function isArray(argument) {
	  return classof$5(argument) === 'Array';
	};

	var uncurryThis$f = functionUncurryThis;
	var fails$k = fails$t;
	var isCallable$7 = isCallable$j;
	var classof$4 = classof$8;
	var getBuiltIn$4 = getBuiltIn$9;
	var inspectSource = inspectSource$2;

	var noop = function () { /* empty */ };
	var construct$1 = getBuiltIn$4('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = uncurryThis$f(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$7(argument)) return false;
	  try {
	    construct$1(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$7(argument)) return false;
	  switch (classof$4(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$4 = !construct$1 || fails$k(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$4 = isArray$5;
	var isConstructor$3 = isConstructor$4;
	var isObject$a = isObject$g;
	var wellKnownSymbol$c = wellKnownSymbol$j;

	var SPECIES$2 = wellKnownSymbol$c('species');
	var $Array$2 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$4(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$3(C) && (C === $Array$2 || isArray$4(C.prototype))) C = undefined;
	    else if (isObject$a(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$2 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$3 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind$2 = functionBindContext;
	var uncurryThis$e = functionUncurryThis;
	var IndexedObject$1 = indexedObject;
	var toObject$7 = toObject$9;
	var lengthOfArrayLike$4 = lengthOfArrayLike$6;
	var arraySpeciesCreate$2 = arraySpeciesCreate$3;

	var push$3 = uncurryThis$e([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$2 = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$7($this);
	    var self = IndexedObject$1(O);
	    var length = lengthOfArrayLike$4(self);
	    var boundFunction = bind$2(callbackfn, that);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$2;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$3(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$3(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$2(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$2(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$2(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$2(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$2(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$2(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$2(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$2(7)
	};

	var $$k = _export;
	var global$9 = global$m;
	var call$9 = functionCall;
	var uncurryThis$d = functionUncurryThis;
	var DESCRIPTORS$6 = descriptors;
	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var fails$j = fails$t;
	var hasOwn$9 = hasOwnProperty_1;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var anObject$8 = anObject$d;
	var toIndexedObject$2 = toIndexedObject$8;
	var toPropertyKey$1 = toPropertyKey$4;
	var $toString$1 = toString$8;
	var createPropertyDescriptor$2 = createPropertyDescriptor$5;
	var nativeObjectCreate = objectCreate;
	var objectKeys$1 = objectKeys$3;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$1 = objectDefineProperty;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var defineBuiltIn$5 = defineBuiltIn$8;
	var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
	var shared$3 = sharedExports;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$6;
	var uid$1 = uid$4;
	var wellKnownSymbol$b = wellKnownSymbol$j;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$6 = setToStringTag$7;
	var InternalStateModule$2 = internalState;
	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';

	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState$3 = InternalStateModule$2.getterFor(SYMBOL);

	var ObjectPrototype$2 = Object[PROTOTYPE];
	var $Symbol = global$9.Symbol;
	var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
	var RangeError$1 = global$9.RangeError;
	var TypeError$2 = global$9.TypeError;
	var QObject = global$9.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule$1.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$2 = uncurryThis$d([].push);

	var AllSymbols = shared$3('symbols');
	var ObjectPrototypeSymbols = shared$3('op-symbols');
	var WellKnownSymbolsStore = shared$3('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var fallbackDefineProperty = function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$2, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$2[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
	    nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
	  }
	};

	var setSymbolDescriptor = DESCRIPTORS$6 && fails$j(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a !== 7;
	}) ? fallbackDefineProperty : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$6) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$2) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$8(O);
	  var key = toPropertyKey$1(P);
	  anObject$8(Attributes);
	  if (hasOwn$9(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$9(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$2(1, nativeObjectCreate(null)));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$9(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$2(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$8(O);
	  var properties = toIndexedObject$2(Properties);
	  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$6 || call$9($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$1(V);
	  var enumerable = call$9(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$2 && hasOwn$9(AllSymbols, P) && !hasOwn$9(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$9(this, P) || !hasOwn$9(AllSymbols, P) || hasOwn$9(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$2(O);
	  var key = toPropertyKey$1(P);
	  if (it === ObjectPrototype$2 && hasOwn$9(AllSymbols, key) && !hasOwn$9(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwn$9(AllSymbols, key) && !(hasOwn$9(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$9(AllSymbols, key) && !hasOwn$9(hiddenKeys$1, key)) push$2(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$9(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$9(ObjectPrototype$2, key))) {
	      push$2(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$4) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$3(SymbolPrototype$1, this)) throw new TypeError$2('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$1(arguments[0]);
	    var tag = uid$1(description);
	    var setter = function (value) {
	      var $this = this === undefined ? global$9 : this;
	      if ($this === ObjectPrototype$2) call$9(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$9($this, HIDDEN) && hasOwn$9($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor$2(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError$1)) throw error;
	        fallbackDefineProperty($this, tag, descriptor);
	      }
	    };
	    if (DESCRIPTORS$6 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  SymbolPrototype$1 = $Symbol[PROTOTYPE];

	  defineBuiltIn$5(SymbolPrototype$1, 'toString', function toString() {
	    return getInternalState$3(this).tag;
	  });

	  defineBuiltIn$5($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$1(description), description);
	  });

	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$1.f = $defineProperty;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$b(name), name);
	  };

	  if (DESCRIPTORS$6) {
	    // https://github.com/tc39/proposal-Symbol-description
	    defineBuiltInAccessor$2(SymbolPrototype$1, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$3(this).description;
	      }
	    });
	    {
	      defineBuiltIn$5(ObjectPrototype$2, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }
	}

	$$k({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$4, sham: !NATIVE_SYMBOL$4 }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys$1(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol$3(name);
	});

	$$k({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$4 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$k({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$4, sham: !DESCRIPTORS$6 }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$$k({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$4 }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive$1();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$6($Symbol, SYMBOL);

	hiddenKeys$1[HIDDEN] = true;

	var NATIVE_SYMBOL$3 = symbolConstructorDetection;

	/* eslint-disable es/no-symbol -- safe */
	var symbolRegistryDetection = NATIVE_SYMBOL$3 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$j = _export;
	var getBuiltIn$3 = getBuiltIn$9;
	var hasOwn$8 = hasOwnProperty_1;
	var toString$7 = toString$8;
	var shared$2 = sharedExports;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

	var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	$$j({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$7(key);
	    if (hasOwn$8(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$3('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$i = _export;
	var hasOwn$7 = hasOwnProperty_1;
	var isSymbol$2 = isSymbol$5;
	var tryToString$3 = tryToString$5;
	var shared$1 = sharedExports;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

	var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	$$i({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$2(sym)) throw new TypeError(tryToString$3(sym) + ' is not a symbol');
	    if (hasOwn$7(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var NATIVE_BIND$1 = functionBindNative;

	var FunctionPrototype$1 = Function.prototype;
	var apply$2 = FunctionPrototype$1.apply;
	var call$8 = FunctionPrototype$1.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$8.bind(apply$2) : function () {
	  return call$8.apply(apply$2, arguments);
	});

	var uncurryThis$c = functionUncurryThis;
	var isArray$3 = isArray$5;
	var isCallable$6 = isCallable$j;
	var classof$3 = classofRaw$2;
	var toString$6 = toString$8;

	var push$1 = uncurryThis$c([].push);

	var getJsonReplacerFunction = function (replacer) {
	  if (isCallable$6(replacer)) return replacer;
	  if (!isArray$3(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$1(keys, element);
	    else if (typeof element == 'number' || classof$3(element) === 'Number' || classof$3(element) === 'String') push$1(keys, toString$6(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$3(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	var $$h = _export;
	var getBuiltIn$2 = getBuiltIn$9;
	var apply$1 = functionApply;
	var call$7 = functionCall;
	var uncurryThis$b = functionUncurryThis;
	var fails$i = fails$t;
	var isCallable$5 = isCallable$j;
	var isSymbol$1 = isSymbol$5;
	var arraySlice$1 = arraySlice$3;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$2 = symbolConstructorDetection;

	var $String$1 = String;
	var $stringify = getBuiltIn$2('JSON', 'stringify');
	var exec$1 = uncurryThis$b(/./.exec);
	var charAt$3 = uncurryThis$b(''.charAt);
	var charCodeAt$2 = uncurryThis$b(''.charCodeAt);
	var replace$3 = uncurryThis$b(''.replace);
	var numberToString = uncurryThis$b(1.0.toString);

	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$i(function () {
	  var symbol = getBuiltIn$2('Symbol')('stringify detection');
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) !== '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) !== '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) !== '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$i(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice$1(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$5($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$5($replacer)) value = call$7($replacer, this, $String$1(key), value);
	    if (!isSymbol$1(value)) return value;
	  };
	  return apply$1($stringify, null, args);
	};

	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt$3(string, offset - 1);
	  var next = charAt$3(string, offset + 1);
	  if ((exec$1(low, match) && !exec$1(hi, next)) || (exec$1(hi, match) && !exec$1(low, prev))) {
	    return '\\u' + numberToString(charCodeAt$2(match, 0), 16);
	  } return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$h({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$1(arguments);
	      var result = apply$1(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$3(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$g = _export;
	var NATIVE_SYMBOL$1 = symbolConstructorDetection;
	var fails$h = fails$t;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var toObject$6 = toObject$9;

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$3 = !NATIVE_SYMBOL$1 || fails$h(function () { getOwnPropertySymbolsModule$1.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	$$g({ target: 'Object', stat: true, forced: FORCED$3 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$6(it)) : [];
	  }
	});

	var $$f = _export;
	var DESCRIPTORS$5 = descriptors;
	var global$8 = global$m;
	var uncurryThis$a = functionUncurryThis;
	var hasOwn$6 = hasOwnProperty_1;
	var isCallable$4 = isCallable$j;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var toString$5 = toString$8;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
	var copyConstructorProperties$1 = copyConstructorProperties$3;

	var NativeSymbol = global$8.Symbol;
	var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

	if (DESCRIPTORS$5 && isCallable$4(NativeSymbol) && (!('description' in SymbolPrototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$5(arguments[0]);
	    var result = isPrototypeOf$2(SymbolPrototype, this)
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };

	  copyConstructorProperties$1(SymbolWrapper, NativeSymbol);
	  SymbolWrapper.prototype = SymbolPrototype;
	  SymbolPrototype.constructor = SymbolWrapper;

	  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$a(SymbolPrototype.valueOf);
	  var symbolDescriptiveString = uncurryThis$a(SymbolPrototype.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$2 = uncurryThis$a(''.replace);
	  var stringSlice$3 = uncurryThis$a(''.slice);

	  defineBuiltInAccessor$1(SymbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$6(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL ? stringSlice$3(string, 7, -1) : replace$2(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $$f({ global: true, constructor: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$2 = classof$8;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$2(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineBuiltIn$4 = defineBuiltIn$8;
	var toString$4 = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  defineBuiltIn$4(Object.prototype, 'toString', toString$4, { unsafe: true });
	}

	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$2('iterator');

	var wellKnownSymbol$a = wellKnownSymbol$j;
	var create$3 = objectCreate;
	var defineProperty$4 = objectDefineProperty.f;

	var UNSCOPABLES = wellKnownSymbol$a('unscopables');
	var ArrayPrototype$1 = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
	  defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
	    configurable: true,
	    value: create$3(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$2 = function (key) {
	  ArrayPrototype$1[UNSCOPABLES][key] = true;
	};

	var iterators = {};

	var fails$g = fails$t;

	var correctPrototypeGetter = !fails$g(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$5 = hasOwnProperty_1;
	var isCallable$3 = isCallable$j;
	var toObject$5 = toObject$9;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object = Object;
	var ObjectPrototype$1 = $Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
	  var object = toObject$5(O);
	  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$3(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object ? ObjectPrototype$1 : null;
	};

	var fails$f = fails$t;
	var isCallable$2 = isCallable$j;
	var isObject$9 = isObject$g;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var defineBuiltIn$3 = defineBuiltIn$8;
	var wellKnownSymbol$9 = wellKnownSymbol$j;

	var ITERATOR$5 = wellKnownSymbol$9('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$2) || fails$f(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$2(IteratorPrototype$2[ITERATOR$5])) {
	  defineBuiltIn$3(IteratorPrototype$2, ITERATOR$5, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create$2 = objectCreate;
	var createPropertyDescriptor$1 = createPropertyDescriptor$5;
	var setToStringTag$5 = setToStringTag$7;
	var Iterators$4 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$4[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var uncurryThis$9 = functionUncurryThis;
	var aCallable$2 = aCallable$5;

	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$9(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};

	var isObject$8 = isObject$g;

	var isPossiblePrototype$1 = function (argument) {
	  return isObject$8(argument) || argument === null;
	};

	var isPossiblePrototype = isPossiblePrototype$1;

	var $String = String;
	var $TypeError$6 = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (isPossiblePrototype(argument)) return argument;
	  throw new $TypeError$6("Can't set " + $String(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */
	var uncurryThisAccessor = functionUncurryThisAccessor;
	var anObject$7 = anObject$d;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$7(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$e = _export;
	var call$6 = functionCall;
	var FunctionName = functionName;
	var isCallable$1 = isCallable$j;
	var createIteratorConstructor = iteratorCreateConstructor;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf$1 = objectSetPrototypeOf;
	var setToStringTag$4 = setToStringTag$7;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
	var defineBuiltIn$2 = defineBuiltIn$8;
	var wellKnownSymbol$8 = wellKnownSymbol$j;
	var Iterators$3 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$4 = wellKnownSymbol$8('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    }

	    return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$4]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf$1) {
	          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable$1(CurrentIteratorPrototype[ITERATOR$4])) {
	          defineBuiltIn$2(CurrentIteratorPrototype, ITERATOR$4, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME) {
	      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$6(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$e({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
	    defineBuiltIn$2(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$3[NAME] = defaultIterator;

	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$2 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$1 = toIndexedObject$8;
	var addToUnscopables$1 = addToUnscopables$2;
	var Iterators$2 = iterators;
	var InternalStateModule$1 = internalState;
	var defineProperty$3 = objectDefineProperty.f;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$1 = createIterResultObject$2;
	var DESCRIPTORS$4 = descriptors;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState$2 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$1(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$2(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$1(undefined, true);
	  }
	  switch (state.kind) {
	    case 'keys': return createIterResultObject$1(index, false);
	    case 'values': return createIterResultObject$1(target[index], false);
	  } return createIterResultObject$1([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	var values = Iterators$2.Arguments = Iterators$2.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$1('keys');
	addToUnscopables$1('values');
	addToUnscopables$1('entries');

	// V8 ~ Chrome 45- bug
	if (DESCRIPTORS$4 && values.name !== 'values') try {
	  defineProperty$3(values, 'name', { value: 'values' });
	} catch (error) { /* empty */ }

	var uncurryThis$8 = functionUncurryThis;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
	var toString$3 = toString$8;
	var requireObjectCoercible$1 = requireObjectCoercible$4;

	var charAt$2 = uncurryThis$8(''.charAt);
	var charCodeAt$1 = uncurryThis$8(''.charCodeAt);
	var stringSlice$2 = uncurryThis$8(''.slice);

	var createMethod$1 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$3(requireObjectCoercible$1($this));
	    var position = toIntegerOrInfinity$1(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$2(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$2(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$1(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$1(true)
	};

	var charAt$1 = stringMultibyte.charAt;
	var toString$2 = toString$8;
	var InternalStateModule = internalState;
	var defineIterator = iteratorDefine;
	var createIterResultObject = createIterResultObject$2;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState$1 = InternalStateModule.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString$2(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject(undefined, true);
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return createIterResultObject(point, false);
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
	var documentCreateElement = documentCreateElement$2;

	var classList = documentCreateElement('span').classList;
	var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

	var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

	var global$7 = global$m;
	var DOMIterables$1 = domIterables;
	var DOMTokenListPrototype$1 = domTokenListPrototype;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
	var setToStringTag$3 = setToStringTag$7;
	var wellKnownSymbol$7 = wellKnownSymbol$j;

	var ITERATOR$3 = wellKnownSymbol$7('iterator');
	var ArrayValues = ArrayIteratorMethods.values;

	var handlePrototype$1 = function (CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
	      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$3, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$3] = ArrayValues;
	    }
	    setToStringTag$3(CollectionPrototype, COLLECTION_NAME, true);
	    if (DOMIterables$1[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	};

	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  handlePrototype$1(global$7[COLLECTION_NAME$1] && global$7[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
	}

	handlePrototype$1(DOMTokenListPrototype$1, 'DOMTokenList');

	var call$5 = functionCall;
	var anObject$6 = anObject$d;
	var getMethod$1 = getMethod$3;

	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$6(iterator);
	  try {
	    innerResult = getMethod$1(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$5(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$6(innerResult);
	  return value;
	};

	var anObject$5 = anObject$d;
	var iteratorClose = iteratorClose$1;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$5(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var wellKnownSymbol$6 = wellKnownSymbol$j;
	var Iterators$1 = iterators;

	var ITERATOR$2 = wellKnownSymbol$6('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
	};

	var toPropertyKey = toPropertyKey$4;
	var definePropertyModule = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$5;

	var createProperty$4 = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var classof$1 = classof$8;
	var getMethod = getMethod$3;
	var isNullOrUndefined = isNullOrUndefined$3;
	var Iterators = iterators;
	var wellKnownSymbol$5 = wellKnownSymbol$j;

	var ITERATOR$1 = wellKnownSymbol$5('iterator');

	var getIteratorMethod$2 = function (it) {
	  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$1)
	    || getMethod(it, '@@iterator')
	    || Iterators[classof$1(it)];
	};

	var call$4 = functionCall;
	var aCallable$1 = aCallable$5;
	var anObject$4 = anObject$d;
	var tryToString$2 = tryToString$5;
	var getIteratorMethod$1 = getIteratorMethod$2;

	var $TypeError$5 = TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$1(iteratorMethod)) return anObject$4(call$4(iteratorMethod, argument));
	  throw new $TypeError$5(tryToString$2(argument) + ' is not iterable');
	};

	var bind$1 = functionBindContext;
	var call$3 = functionCall;
	var toObject$4 = toObject$9;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var isConstructor$2 = isConstructor$4;
	var lengthOfArrayLike$3 = lengthOfArrayLike$6;
	var createProperty$3 = createProperty$4;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;

	var $Array$1 = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$4(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor$2(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = call$3(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$3(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike$3(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$3(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$4 = wellKnownSymbol$j;

	var ITERATOR = wellKnownSymbol$4('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var $$d = _export;
	var from = arrayFrom;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$d({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});

	var fails$e = fails$t;
	var wellKnownSymbol$3 = wellKnownSymbol$j;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES$1 = wellKnownSymbol$3('species');

	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$e(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$c = _export;
	var isArray$2 = isArray$5;
	var isConstructor$1 = isConstructor$4;
	var isObject$7 = isObject$g;
	var toAbsoluteIndex$1 = toAbsoluteIndex$3;
	var lengthOfArrayLike$2 = lengthOfArrayLike$6;
	var toIndexedObject = toIndexedObject$8;
	var createProperty$2 = createProperty$4;
	var wellKnownSymbol$2 = wellKnownSymbol$j;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
	var nativeSlice = arraySlice$3;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('slice');

	var SPECIES = wellKnownSymbol$2('species');
	var $Array = Array;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$c({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = lengthOfArrayLike$2(O);
	    var k = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$2(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$1(Constructor) && (Constructor === $Array || isArray$2(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$7(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var anObject$3 = anObject$d;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$3(this);
	  var result = '';
	  if (that.hasIndices) result += 'd';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.unicodeSets) result += 'v';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var call$2 = functionCall;
	var hasOwn$4 = hasOwnProperty_1;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var regExpFlags = regexpFlags$1;

	var RegExpPrototype$1 = RegExp.prototype;

	var regexpGetFlags = function (R) {
	  var flags = R.flags;
	  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$4(R, 'flags') && isPrototypeOf$1(RegExpPrototype$1, R)
	    ? call$2(regExpFlags, R) : flags;
	};

	var PROPER_FUNCTION_NAME = functionName.PROPER;
	var defineBuiltIn$1 = defineBuiltIn$8;
	var anObject$2 = anObject$d;
	var $toString = toString$8;
	var fails$d = fails$t;
	var getRegExpFlags = regexpGetFlags;

	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];

	var NOT_GENERIC = fails$d(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  defineBuiltIn$1(RegExpPrototype, TO_STRING, function toString() {
	    var R = anObject$2(this);
	    var pattern = $toString(R.source);
	    var flags = $toString(getRegExpFlags(R));
	    return '/' + pattern + '/' + flags;
	  }, { unsafe: true });
	}

	var DESCRIPTORS$3 = descriptors;
	var FUNCTION_NAME_EXISTS = functionName.EXISTS;
	var uncurryThis$7 = functionUncurryThis;
	var defineBuiltInAccessor = defineBuiltInAccessor$3;

	var FunctionPrototype = Function.prototype;
	var functionToString = uncurryThis$7(FunctionPrototype.toString);
	var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
	var regExpExec = uncurryThis$7(nameRE.exec);
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.es/ecma262/#sec-function-instances-name
	if (DESCRIPTORS$3 && !FUNCTION_NAME_EXISTS) {
	  defineBuiltInAccessor(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return regExpExec(nameRE, functionToString(this))[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	var fails$c = fails$t;
	var global$6 = global$m;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global$6.RegExp;

	var UNSUPPORTED_Y$1 = fails$c(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') !== null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$c(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$c(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') !== null;
	});

	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$1
	};

	var fails$b = fails$t;
	var global$5 = global$m;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global$5.RegExp;

	var regexpUnsupportedDotAll = fails$b(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.test('\n') && re.flags === 's');
	});

	var fails$a = fails$t;
	var global$4 = global$m;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global$4.RegExp;

	var regexpUnsupportedNcg = fails$a(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$1 = functionCall;
	var uncurryThis$6 = functionUncurryThis;
	var toString$1 = toString$8;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers = regexpStickyHelpers;
	var shared = sharedExports;
	var create$1 = objectCreate;
	var getInternalState = internalState.get;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;

	var nativeReplace = shared('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt = uncurryThis$6(''.charAt);
	var indexOf = uncurryThis$6(''.indexOf);
	var replace$1 = uncurryThis$6(''.replace);
	var stringSlice$1 = uncurryThis$6(''.slice);

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$1(nativeExec, re1, 'a');
	  call$1(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

	if (PATCH) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState(re);
	    var str = toString$1(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$1(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y && re.sticky;
	    var flags = call$1(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = replace$1(flags, 'y', '');
	      if (indexOf(flags, 'g') === -1) {
	        flags += 'g';
	      }

	      strCopy = stringSlice$1(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = call$1(nativeExec, sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = stringSlice$1(match.input, charsAdded);
	        match[0] = stringSlice$1(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
	      call$1(nativeReplace, match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    if (match && groups) {
	      match.groups = object = create$1(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	var $$b = _export;
	var exec = regexpExec;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$b({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
	  exec: exec
	});

	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$1('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive();

	var anObject$1 = anObject$d;
	var ordinaryToPrimitive = ordinaryToPrimitive$2;

	var $TypeError$4 = TypeError;

	// `Date.prototype[@@toPrimitive](hint)` method implementation
	// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
	var dateToPrimitive$1 = function (hint) {
	  anObject$1(this);
	  if (hint === 'string' || hint === 'default') hint = 'string';
	  else if (hint !== 'number') throw new $TypeError$4('Incorrect hint');
	  return ordinaryToPrimitive(this, hint);
	};

	var hasOwn$3 = hasOwnProperty_1;
	var defineBuiltIn = defineBuiltIn$8;
	var dateToPrimitive = dateToPrimitive$1;
	var wellKnownSymbol$1 = wellKnownSymbol$j;

	var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');
	var DatePrototype = Date.prototype;

	// `Date.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
	if (!hasOwn$3(DatePrototype, TO_PRIMITIVE)) {
	  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
	}

	var isCallable = isCallable$j;
	var isObject$6 = isObject$g;
	var setPrototypeOf = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject$6(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	var uncurryThis$5 = functionUncurryThis;

	// `thisNumberValue` abstract operation
	// https://tc39.es/ecma262/#sec-thisnumbervalue
	var thisNumberValue$1 = uncurryThis$5(1.0.valueOf);

	// a string of all valid unicode whitespaces
	var whitespaces$1 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$4 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$4;
	var toString = toString$8;
	var whitespaces = whitespaces$1;

	var replace = uncurryThis$4(''.replace);
	var ltrim = RegExp('^[' + whitespaces + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod = function (TYPE) {
	  return function ($this) {
	    var string = toString(requireObjectCoercible($this));
	    if (TYPE & 1) string = replace(string, ltrim, '');
	    if (TYPE & 2) string = replace(string, rtrim, '$1');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod(3)
	};

	var $$a = _export;
	var IS_PURE = isPure;
	var DESCRIPTORS$2 = descriptors;
	var global$3 = global$m;
	var path = path$2;
	var uncurryThis$3 = functionUncurryThis;
	var isForced = isForced_1;
	var hasOwn$2 = hasOwnProperty_1;
	var inheritIfRequired = inheritIfRequired$1;
	var isPrototypeOf = objectIsPrototypeOf;
	var isSymbol = isSymbol$5;
	var toPrimitive = toPrimitive$2;
	var fails$9 = fails$t;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$2 = objectDefineProperty.f;
	var thisNumberValue = thisNumberValue$1;
	var trim = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global$3[NUMBER];
	path[NUMBER];
	var NumberPrototype = NativeNumber.prototype;
	var TypeError$1 = global$3.TypeError;
	var stringSlice = uncurryThis$3(''.slice);
	var charCodeAt = uncurryThis$3(''.charCodeAt);

	// `ToNumeric` abstract operation
	// https://tc39.es/ecma262/#sec-tonumeric
	var toNumeric = function (value) {
	  var primValue = toPrimitive(value, 'number');
	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
	};

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, 'number');
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (isSymbol(it)) throw new TypeError$1('Cannot convert a Symbol value to a number');
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = charCodeAt(it, 0);
	    if (first === 43 || first === 45) {
	      third = charCodeAt(it, 2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (charCodeAt(it, 1)) {
	        // fast equal of /^0b[01]+$/i
	        case 66:
	        case 98:
	          radix = 2;
	          maxCode = 49;
	          break;
	        // fast equal of /^0o[0-7]+$/i
	        case 79:
	        case 111:
	          radix = 8;
	          maxCode = 55;
	          break;
	        default:
	          return +it;
	      }
	      digits = stringSlice(it, 2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = charCodeAt(digits, index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	var FORCED$2 = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

	var calledWithNew = function (dummy) {
	  // includes check on 1..constructor(foo) case
	  return isPrototypeOf(NumberPrototype, dummy) && fails$9(function () { thisNumberValue(dummy); });
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	var NumberWrapper = function Number(value) {
	  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
	  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
	};

	NumberWrapper.prototype = NumberPrototype;
	if (FORCED$2 && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

	$$a({ global: true, constructor: true, wrap: true, forced: FORCED$2 }, {
	  Number: NumberWrapper
	});

	// Use `internal/copy-constructor-properties` helper in `core-js@4`
	var copyConstructorProperties = function (target, source) {
	  for (var keys = DESCRIPTORS$2 ? getOwnPropertyNames(source) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
	    // ESNext
	    'fromString,range'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (hasOwn$2(source, key = keys[j]) && !hasOwn$2(target, key)) {
	      defineProperty$2(target, key, getOwnPropertyDescriptor$1(source, key));
	    }
	  }
	};
	if (FORCED$2 || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);

	var $$9 = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$9({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var fails$8 = fails$t;

	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$8(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;

	var STRICT_METHOD = arrayMethodIsStrict('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var global$2 = global$m;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var forEach = arrayForEach;
	var createNonEnumerableProperty = createNonEnumerableProperty$5;

	var handlePrototype = function (CollectionPrototype) {
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
	    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach;
	  }
	};

	for (var COLLECTION_NAME in DOMIterables) {
	  if (DOMIterables[COLLECTION_NAME]) {
	    handlePrototype(global$2[COLLECTION_NAME] && global$2[COLLECTION_NAME].prototype);
	  }
	}

	handlePrototype(DOMTokenListPrototype);

	var DESCRIPTORS$1 = descriptors;
	var isArray$1 = isArray$5;

	var $TypeError$3 = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$1 && !function () {
	  // makes no sense without proper strict mode support
	  if (this !== undefined) return true;
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).length = 1;
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	}();

	var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
	  if (isArray$1(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
	    throw new $TypeError$3('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var $TypeError$2 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$2 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
	  return it;
	};

	var tryToString$1 = tryToString$5;

	var $TypeError$1 = TypeError;

	var deletePropertyOrThrow$1 = function (O, P) {
	  if (!delete O[P]) throw new $TypeError$1('Cannot delete property ' + tryToString$1(P) + ' of ' + tryToString$1(O));
	};

	var $$8 = _export;
	var toObject$3 = toObject$9;
	var toAbsoluteIndex = toAbsoluteIndex$3;
	var toIntegerOrInfinity = toIntegerOrInfinity$4;
	var lengthOfArrayLike$1 = lengthOfArrayLike$6;
	var setArrayLength = arraySetLength;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
	var arraySpeciesCreate$1 = arraySpeciesCreate$3;
	var createProperty$1 = createProperty$4;
	var deletePropertyOrThrow = deletePropertyOrThrow$1;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('splice');

	var max = Math.max;
	var min = Math.min;

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$8({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$3(this);
	    var len = lengthOfArrayLike$1(O);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
	    }
	    doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
	    A = arraySpeciesCreate$1(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty$1(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else deletePropertyOrThrow(O, to);
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else deletePropertyOrThrow(O, to);
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    setArrayLength(O, len - actualDeleteCount + insertCount);
	    return A;
	  }
	});

	var getBuiltIn$1 = getBuiltIn$9;
	var defineWellKnownSymbol = wellKnownSymbolDefine;
	var setToStringTag$2 = setToStringTag$7;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$2(getBuiltIn$1('Symbol'), 'Symbol');

	var global$1 = global$m;
	var setToStringTag$1 = setToStringTag$7;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag$1(global$1.JSON, 'JSON', true);

	var setToStringTag = setToStringTag$7;

	// Math[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-math-@@tostringtag
	setToStringTag(Math, 'Math', true);

	var DESCRIPTORS = descriptors;
	var uncurryThis$2 = functionUncurryThis;
	var call = functionCall;
	var fails$7 = fails$t;
	var objectKeys = objectKeys$3;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$2 = toObject$9;
	var IndexedObject = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$1 = Object.defineProperty;
	var concat$1 = uncurryThis$2([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$7(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$1(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol('assign detection');
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$2(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$7 = _export;
	var assign = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$7({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
	  assign: assign
	});

	var $$6 = _export;
	var $find = arrayIteration.find;
	var addToUnscopables = addToUnscopables$2;

	var FIND = 'find';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-find -- testing
	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$$6({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND);

	var $$5 = _export;
	var fails$6 = fails$t;
	var toObject$1 = toObject$9;
	var nativeGetPrototypeOf = objectGetPrototypeOf;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var FAILS_ON_PRIMITIVES$2 = fails$6(function () { nativeGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	$$5({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$1(it));
	  }
	});

	var uncurryThis$1 = functionUncurryThis;
	var aCallable = aCallable$5;
	var isObject$5 = isObject$g;
	var hasOwn$1 = hasOwnProperty_1;
	var arraySlice = arraySlice$3;
	var NATIVE_BIND = functionBindNative;

	var $Function = Function;
	var concat = uncurryThis$1([].concat);
	var join = uncurryThis$1([].join);
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!hasOwn$1(factories, argsLength)) {
	    var list = [];
	    var i = 0;
	    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	// eslint-disable-next-line es/no-function-prototype-bind -- detection
	var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
	  var F = aCallable(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = concat(partArgs, arraySlice(arguments));
	    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject$5(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	var isConstructor = isConstructor$4;
	var tryToString = tryToString$5;

	var $TypeError = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$1 = function (argument) {
	  if (isConstructor(argument)) return argument;
	  throw new $TypeError(tryToString(argument) + ' is not a constructor');
	};

	var $$4 = _export;
	var getBuiltIn = getBuiltIn$9;
	var apply = functionApply;
	var bind = functionBind;
	var aConstructor = aConstructor$1;
	var anObject = anObject$d;
	var isObject$4 = isObject$g;
	var create = objectCreate;
	var fails$5 = fails$t;

	var nativeConstruct = getBuiltIn('Reflect', 'construct');
	var ObjectPrototype = Object.prototype;
	var push = [].push;

	// `Reflect.construct` method
	// https://tc39.es/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails$5(function () {
	  function F() { /* empty */ }
	  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
	});

	var ARGS_BUG = !fails$5(function () {
	  nativeConstruct(function () { /* empty */ });
	});

	var FORCED$1 = NEW_TARGET_BUG || ARGS_BUG;

	$$4({ target: 'Reflect', stat: true, forced: FORCED$1, sham: FORCED$1 }, {
	  construct: function construct(Target, args /* , newTarget */) {
	    aConstructor(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
	    if (Target === newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      apply(push, $args, args);
	      return new (apply(bind, Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject$4(proto) ? proto : ObjectPrototype);
	    var result = apply(Target, instance, args);
	    return isObject$4(result) ? result : instance;
	  }
	});

	var fails$4 = fails$t;

	var freezing = !fails$4(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = {exports: {}};

	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
	var fails$3 = fails$t;

	var arrayBufferNonExtensible = fails$3(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$2 = fails$t;
	var isObject$3 = isObject$g;
	var classof = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$1 = fails$2(function () { $isExtensible(1); });

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$3(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var $$3 = _export;
	var uncurryThis = functionUncurryThis;
	var hiddenKeys = hiddenKeys$6;
	var isObject$2 = isObject$g;
	var hasOwn = hasOwnProperty_1;
	var defineProperty = objectDefineProperty.f;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible = objectIsExtensible;
	var uid = uid$4;
	var FREEZING$1 = freezing;

	var REQUIRED = false;
	var METADATA = uid('meta');
	var id = 0;

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + id++, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject$2(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!hasOwn(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze$1 = function (it) {
	  if (FREEZING$1 && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
	  return it;
	};

	var enable = function () {
	  meta.enable = function () { /* empty */ };
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = uncurryThis([].splice);
	  var test = {};
	  test[METADATA] = 1;

	  // prevent exposing of metadata key
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };

	    $$3({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};

	var meta = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze$1
	};

	hiddenKeys[METADATA] = true;

	var internalMetadataExports = internalMetadata.exports;

	var $$2 = _export;
	var FREEZING = freezing;
	var fails$1 = fails$t;
	var isObject$1 = isObject$g;
	var onFreeze = internalMetadataExports.onFreeze;

	// eslint-disable-next-line es/no-object-freeze -- safe
	var $freeze = Object.freeze;
	var FAILS_ON_PRIMITIVES = fails$1(function () { $freeze(1); });

	// `Object.freeze` method
	// https://tc39.es/ecma262/#sec-object.freeze
	$$2({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
	  freeze: function freeze(it) {
	    return $freeze && isObject$1(it) ? $freeze(onFreeze(it)) : it;
	  }
	});

	var $$1 = _export;
	var fails = fails$t;
	var isArray = isArray$5;
	var isObject = isObject$g;
	var toObject = toObject$9;
	var lengthOfArrayLike = lengthOfArrayLike$6;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
	var createProperty = createProperty$4;
	var arraySpeciesCreate = arraySpeciesCreate$3;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol = wellKnownSymbol$j;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$1({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike(E);
	        doesNotExceedSafeInteger(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */const{is:i$1,defineProperty:e$1,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$1(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$Ej();}catch(s){throw t=!1,this._$Ej(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.3");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t$1=globalThis,i=t$1.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+h,n$1=`<${o$1}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$2.createTreeWalker(r$2,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$2.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.1");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$1=globalThis.litElementPolyfillSupport;r$1?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.3");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

	function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
	var _templateObject;
	function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
	function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }
	function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }
	function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }
	function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }
	function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }
	function _hasDecorators(element) { return element.decorators && element.decorators.length; }
	function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }
	function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }
	function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
	function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
	function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
	var SimpleElement = _decorate([t("simple-element")], function (_initialize, _LitElement) {
	  var SimpleElement = /*#__PURE__*/function (_LitElement2) {
	    _inherits(SimpleElement, _LitElement2);
	    function SimpleElement() {
	      var _this;
	      _classCallCheck(this, SimpleElement);
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      _this = _callSuper(this, SimpleElement, [].concat(args));
	      _initialize(_assertThisInitialized(_this));
	      return _this;
	    }
	    return _createClass(SimpleElement);
	  }(_LitElement);
	  return {
	    F: SimpleElement,
	    d: [{
	      kind: "field",
	      key: "_runMode",
	      value: function value() {
	        return '';
	      }
	    }, {
	      kind: "get",
	      decorators: [n({
	        type: String
	      })],
	      key: "runMode",
	      value: function runMode() {
	        return this._runMode;
	      }
	    }, {
	      kind: "set",
	      key: "runMode",
	      value: function runMode(rMode) {
	        var oldValue = this._runMode;
	        this._runMode = rMode;
	        this.requestUpdate("disabled", oldValue);
	      }
	    }, {
	      kind: "method",
	      key: "render",
	      value: function render() {
	        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div>\n        This is from a simple element with param \n          <h2>", "<h2>\n      </div>\n    "])), this.runMode);
	      }
	    }]
	  };
	}, s);

	customElements.define("simple-element", SimpleElement);
	var simpleElement;
	window["simpleElement"] = function () {
	  return simpleElement ? simpleElement : simpleElement = document.getElementById("simple-element");
	};

})();
//# sourceMappingURL=app.js.map
