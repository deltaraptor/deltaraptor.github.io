var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function l(){return a(" ")}function d(){return a("")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function h(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],g=[],b=[],v=[],x=Promise.resolve();let y=!1;function _(t){b.push(t)}let w=!1;const k=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];h(n),C(n.$$)}for(h(null),$.length=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];k.has(n)||(k.add(n),n())}b.length=0}while($.length);for(;v.length;)v.pop()();y=!1,w=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const H=new Set;let M;function N(t,n){t&&t.i&&(H.delete(t),t.i(n))}function j(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),M.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function A(t,e,c,i){const{fragment:u,on_mount:s,on_destroy:a,after_update:l}=t.$$;u&&u.m(e,c),i||_((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(_)}function L(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&($.push(t),y||(y=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,r,c,i,s,a,l,d=[-1]){const f=p;h(n);const m=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};l&&l(m.root);let $=!1;if(m.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),$&&T(n,t)),e})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();r.intro&&N(n.$$.fragment),A(n,r.target,r.anchor,r.customElement),E()}h(f)}class O{$destroy(){L(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(t){let n,e,o,r;return{c(){n=s("div"),n.textContent="esta apagado",e=l(),o=s("div"),r=a(t[0]),f(n,"class","scanner-off")},m(t,c){i(t,n,c),i(t,e,c),i(t,o,c),function(t,n){t.appendChild(n)}(o,r)},p(t,n){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(r,t[0])},d(t){t&&u(n),t&&u(e),t&&u(o)}}}function q(n){let e;return{c(){e=s("div"),e.innerHTML='esta prendido\n        <div class="cont-video svelte-11zdd7m"><div class="videito svelte-11zdd7m" id="reader" width="200px" height="200px"></div></div>',f(e,"class","scanner-on")},m(t,n){i(t,e,n)},p:t,d(t){t&&u(e)}}}function Q(n){let e;function o(t,n){return t[1]?q:S}let r=o(n),c=r(n);return{c(){c.c(),e=d()},m(t,n){c.m(t,n),i(t,e,n)},p(t,[n]){r===(r=o(t))&&c?c.p(t,n):(c.d(1),c=r(t),c&&(c.c(),c.m(e.parentNode,e)))},i:t,o:t,d(t){c.d(t),t&&u(e)}}}function B(t,n,e){let o,r={fps:20,qrbox:90,aspectRatio:4},c=[],i=!0;return m((()=>{const t=new Html5Qrcode("reader");Html5Qrcode.getCameras().then((n=>{console.log(n),n&&n.length&&n[0].id,t.start({facingMode:"environment"},r,(n=>{console.log(n),t.stop().then((t=>{e(1,i=!i),c=n.split("/",5),e(0,o=c[1].split(" ").join(""))}))}),(t=>{})).catch((t=>{console.log("Ha ocurrido un error al iniciar el escaner")}))})).catch((t=>{}))})),[o,i]}class D extends O{constructor(t){super(),z(this,t,B,Q,c,{})}}function F(t){let n,e;return n=new D({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,o){A(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function P(t){let n,e,r,c,a,f,p,h,m=1==t[0]&&F();return{c(){n=s("body"),n.innerHTML="<h1>Sere un sitio bien locote</h1>",e=l(),r=s("button"),r.textContent="Mostrar",c=l(),m&&m.c(),a=d()},m(o,u){var s,l,d,$,g;i(o,n,u),i(o,e,u),i(o,r,u),i(o,c,u),m&&m.m(o,u),i(o,a,u),f=!0,p||(s=r,l="click",g=t[1],d=function(t){return t.preventDefault(),g.call(this,t)},$={once:!0},s.addEventListener(l,d,$),h=()=>s.removeEventListener(l,d,$),p=!0)},p(t,[n]){1==t[0]?m?1&n&&N(m,1):(m=F(),m.c(),N(m,1),m.m(a.parentNode,a)):m&&(M={r:0,c:[],p:M},j(m,1,1,(()=>{m=null})),M.r||o(M.c),M=M.p)},i(t){f||(N(m),f=!0)},o(t){j(m),f=!1},d(t){t&&u(n),t&&u(e),t&&u(r),t&&u(c),m&&m.d(t),t&&u(a),p=!1,h()}}}function R(t,n,e){let o=!1;return t.$$.update=()=>{1&t.$$.dirty&&console.log(o)},[o,()=>{console.log("fui accionado"),e(0,o=!o)}]}return new class extends O{constructor(t){super(),z(this,t,R,P,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
