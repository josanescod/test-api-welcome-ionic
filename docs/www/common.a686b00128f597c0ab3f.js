(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("A36C"),i=e("iWo5"),o=e("qULd"),c=function(n,t){var e,c,a=function(n,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(n,r);o&&t(o)?o!==e&&(s(),u(o,i)):s()}},u=function(n,t){e=n,c||(c=e);var i=e;Object(r.f)((function(){return i.classList.add("ion-activated")})),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(r.f)((function(){return t.classList.remove("ion-activated")})),n&&c!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return a(n.currentX,n.currentY,o.a)},onMove:function(n){return a(n.currentX,n.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),c=void 0}})}},"74mu":function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return l}));var r=e("o0o1"),i=e.n(r),o=e("HaE+"),c=e("rePB"),a=function(n,t){return null!==t.closest(n)},u=function(n,t){return"string"==typeof n&&n.length>0?Object.assign(Object(c.a)({"ion-color":!0},"ion-color-".concat(n),!0),t):t},s=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},f=/^[a-z][a-z0-9+\-.]*:/,l=function(){var n=Object(o.a)(i.a.mark((function n(t,e,r,o){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||f.test(t)){n.next=5;break}if(!(c=document.querySelector("ion-router"))){n.next=5;break}return null!=e&&e.preventDefault(),n.abrupt("return",c.push(t,r,o));case 5:return n.abrupt("return",!1);case 6:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()},QQAA:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("fXoL"),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Bb({type:n,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(n,t){1&n&&(r.Kb(0,"div",0),r.Kb(1,"strong"),r.ac(2),r.Jb(),r.Kb(3,"p"),r.ac(4,"Explore "),r.Kb(5,"a",1),r.ac(6,"UI Components"),r.Jb(),r.Jb(),r.Jb()),2&n&&(r.xb(2),r.bc(t.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n}()},ZaV5:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return a}));var r=e("o0o1"),i=e.n(r),o=e("HaE+"),c=function(){var n=Object(o.a)(i.a.mark((function n(t,e,r,o,c){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,c,o));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,o&&o.forEach((function(n){return a.classList.add(n)})),c&&Object.assign(a,c),e.appendChild(a),!a.componentOnReady){n.next=11;break}return n.next=11,a.componentOnReady();case 11:return n.abrupt("return",a);case 12:case"end":return n.stop()}}),n)})));return function(t,e,r,i,o){return n.apply(this,arguments)}}(),a=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r="".concat(n*t/e-n,"ms"),i=2*Math.PI*t/e;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,i="".concat(n*r-n,"ms"),o=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){var e=-110*t+"ms";return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":e}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}}}}}},qULd:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return a}));var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},u=function(n){r.impact(n)}},qtYk:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("ofXK"),i=e("3Pt+"),o=e("TEn/"),c=e("fXoL"),a=function(){function n(){}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(t){return new(t||n)},imports:[[r.b,i.a,o.q]]}),n}()}}]);