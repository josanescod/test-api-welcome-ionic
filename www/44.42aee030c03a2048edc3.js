(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{STjf:function(t,n,a){"use strict";a.r(n),a.d(n,"ion_ripple_effect",(function(){return u}));var i=a("rePB"),e=a("o0o1"),o=a.n(e),r=a("HaE+"),s=a("1OyB"),c=a("vuIU"),f=a("A36C"),l=a("Zgba"),u=function(){function t(n){Object(s.a)(this,t),Object(f.o)(this,n),this.type="bounded"}var n;return Object(c.a)(t,[{key:"addRipple",value:(n=Object(r.a)(o.a.mark((function t(n,a){var i=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){Object(f.h)((function(){var e=i.el.getBoundingClientRect(),o=e.width,r=e.height,s=Math.sqrt(o*o+r*r),c=Math.max(r,o),l=i.unbounded?c:s+d,u=Math.floor(c*p),b=l/u,w=n-e.left,k=a-e.top;i.unbounded&&(w=.5*o,k=.5*r);var y=w-.5*u,h=k-.5*u,v=.5*o-w,g=.5*r-k;Object(f.f)((function(){var n=document.createElement("div");n.classList.add("ripple-effect");var a=n.style;a.top=h+"px",a.left=y+"px",a.width=a.height=u+"px",a.setProperty("--final-scale","".concat(b)),a.setProperty("--translate-end","".concat(v,"px, ").concat(g,"px")),(i.el.shadowRoot||i.el).appendChild(n),setTimeout((function(){t((function(){m(n)}))}),325)}))}))})));case 1:case"end":return t.stop()}}),t)}))),function(t,a){return n.apply(this,arguments)})},{key:"render",value:function(){var t,n=Object(l.b)(this);return Object(f.j)(f.c,{role:"presentation",class:(t={},Object(i.a)(t,n,!0),Object(i.a)(t,"unbounded",this.unbounded),t)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(f.k)(this)}}]),t}(),m=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},d=10,p=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);