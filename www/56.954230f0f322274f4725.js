(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{L3sA:function(t,e,a){"use strict";a.r(e),a.d(e,"ion_toast",(function(){return v}));var o=a("rePB"),r=a("o0o1"),n=a.n(r),i=a("HaE+"),s=a("1OyB"),d=a("vuIU"),c=a("A36C"),l=a("Zgba"),p=(a("6Kqc"),a("bP7C")),u=a("39oe"),b=(a("8RMS"),a("psc6")),h=a("74mu"),g=function(t,e){var a=Object(p.a)(),o=Object(p.a)(),r=t.host||t,n=t.querySelector(".toast-wrapper");switch(o.addElement(n),e){case"top":o.fromTo("transform","translateY(-100%)","translateY(".concat("calc(10px + var(--ion-safe-area-top, 0px))",")"));break;case"middle":var i=Math.floor(r.clientHeight/2-n.clientHeight/2);n.style.top="".concat(i,"px"),o.fromTo("opacity",.01,1);break;default:o.fromTo("transform","translateY(100%)","translateY(".concat("calc(-10px - var(--ion-safe-area-bottom, 0px))",")"))}return a.addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(o)},m=function(t,e){var a=Object(p.a)(),o=Object(p.a)(),r=t.host||t,n=t.querySelector(".toast-wrapper");switch(o.addElement(n),e){case"top":o.fromTo("transform","translateY(".concat("calc(10px + var(--ion-safe-area-top, 0px))",")"),"translateY(-100%)");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("transform","translateY(".concat("calc(-10px - var(--ion-safe-area-bottom, 0px))",")"),"translateY(100%)")}return a.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},x=function(t,e){var a=Object(p.a)(),o=Object(p.a)(),r=t.host||t,n=t.querySelector(".toast-wrapper");switch(o.addElement(n),e){case"top":n.style.top="calc(8px + var(--ion-safe-area-top, 0px))",o.fromTo("opacity",.01,1);break;case"middle":var i=Math.floor(r.clientHeight/2-n.clientHeight/2);n.style.top="".concat(i,"px"),o.fromTo("opacity",.01,1);break;default:n.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",o.fromTo("opacity",.01,1)}return a.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(o)},f=function(t){var e=Object(p.a)(),a=Object(p.a)(),o=t.host||t,r=t.querySelector(".toast-wrapper");return a.addElement(r).fromTo("opacity",.99,0),e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a)},v=function(){function t(e){var a=this;Object(s.a)(this,t),Object(c.o)(this,e),this.didPresent=Object(c.g)(this,"ionToastDidPresent",7),this.willPresent=Object(c.g)(this,"ionToastWillPresent",7),this.willDismiss=Object(c.g)(this,"ionToastWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){var e=t.detail.role;if(Object(b.j)(e)){var o=a.getButtons().find((function(t){return"cancel"===t.role}));a.callButtonHandler(o)}}}var e,a,r;return Object(d.a)(t,[{key:"connectedCallback",value:function(){Object(b.f)(this.el)}},{key:"present",value:(r=Object(i.a)(n.a.mark((function t(){var e=this;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.e)(this,"toastEnter",g,x,this.position);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return e.dismiss(void 0,"timeout")}),this.duration));case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"dismiss",value:function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(b.g)(this,t,e,"toastLeave",m,f,this.position)}},{key:"onDidDismiss",value:function(){return Object(b.h)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(b.h)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function(){return this.buttons?this.buttons.map((function(t){return"string"==typeof t?{text:t}:t})):[]}},{key:"buttonClick",value:(a=Object(i.a)(n.a.mark((function t(e){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.role,!Object(b.j)(a)){t.next=3;break}return t.abrupt("return",this.dismiss(void 0,a));case 3:return t.next=5,this.callButtonHandler(e);case 5:if(!t.sent){t.next=8;break}return t.abrupt("return",this.dismiss(void 0,a));case 8:return t.abrupt("return",Promise.resolve());case 9:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"callButtonHandler",value:(e=Object(i.a)(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.handler){t.next=12;break}return t.prev=1,t.next=4,Object(b.n)(e.handler);case 4:if(!1!==t.sent){t.next=7;break}return t.abrupt("return",!1);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),function(t){return e.apply(this,arguments)})},{key:"renderButtons",value:function(t,e){var a=this;if(0!==t.length){var r=Object(l.b)(this),n=Object(o.a)({"toast-button-group":!0},"toast-button-group-".concat(e),!0);return Object(c.j)("div",{class:n},t.map((function(t){return Object(c.j)("button",{type:"button",class:w(t),tabIndex:0,onClick:function(){return a.buttonClick(t)},part:"button"},Object(c.j)("div",{class:"toast-button-inner"},t.icon&&Object(c.j)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===r&&Object(c.j)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}}},{key:"render",value:function(){var t=this.getButtons(),e=t.filter((function(t){return"start"===t.side})),a=t.filter((function(t){return"start"!==t.side})),r=Object(l.b)(this),n=Object(o.a)({"toast-wrapper":!0},"toast-".concat(this.position),!0);return Object(c.j)(c.c,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:Object(h.a)(this.color,Object.assign(Object.assign(Object(o.a)({},r,!0),Object(h.b)(this.cssClass)),{"toast-translucent":this.translucent})),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},Object(c.j)("div",{class:n},Object(c.j)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),Object(c.j)("div",{class:"toast-content"},void 0!==this.header&&Object(c.j)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(c.j)("div",{class:"toast-message",part:"message",innerHTML:Object(u.a)(this.message)})),this.renderButtons(a,"end"))))}},{key:"el",get:function(){return Object(c.k)(this)}}]),t}(),w=function(t){var e;return Object.assign((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text},Object(o.a)(e,"toast-button-".concat(t.role),void 0!==t.role),Object(o.a)(e,"ion-focusable",!0),Object(o.a)(e,"ion-activatable",!0),e),Object(h.b)(t.cssClass))};v.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}}}]);