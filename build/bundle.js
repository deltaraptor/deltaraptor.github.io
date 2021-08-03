var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function m(t){p=t}function h(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],g=[],y=[],v=[],b=Promise.resolve();let _=!1;function x(t){y.push(t)}let w=!1;const k=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),j(n.$$)}for(m(null),$.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];k.has(n)||(k.add(n),n())}y.length=0}while($.length);for(;v.length;)v.pop()();_=!1,w=!1,k.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const C=new Set;function N(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(c,a,s,u,l,f,d,h=[-1]){const $=p;m(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:a.context||[]),callbacks:e(),dirty:h,skip_bound:!1,root:a.target||$.$$.root};d&&d(g.root);let y=!1;if(g.ctx=s?s(c,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&N(c,t)),n})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(i)}else g.fragment&&g.fragment.c();a.intro&&((v=c.$$.fragment)&&v.i&&(C.delete(v),v.i(b))),function(t,e,c,a){const{fragment:s,on_mount:i,on_destroy:u,after_update:l}=t.$$;s&&s.m(e,c),a||x((()=>{const e=i.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(x)}(c,a.target,a.anchor,a.customElement),E()}var v,b;m($)}function S(n){let e,o,r,c;return{c(){e=u("div"),o=u("div"),o.textContent="Esta apagado",r=f(),c=u("div"),c.textContent=`Informacion en QR: ${q}`,d(o,"class","mensaje svelte-1yt0ora"),d(c,"class","mensaje-qr svelte-1yt0ora"),d(e,"class","scanner-off svelte-1yt0ora")},m(t,n){s(t,e,n),a(e,o),a(e,r),a(e,c)},p:t,d(t){t&&i(e)}}}function A(t){let n,e,o,r,c,p,m,h,$,g,y,v,b,_,x=JSON.stringify(t[2])+"";let w=I(t);return{c(){n=u("div"),w.c(),e=f(),o=u("div"),r=l("Esta prendido\n\t\t\t"),c=u("br"),p=l("\n\t\t\tcameras: "),m=l(x),h=f(),$=u("br"),g=f(),y=u("br"),v=f(),b=u("div"),_=u("video"),_.innerHTML='<track kind="captions"/>',d(o,"class","mensaje svelte-1yt0ora"),d(_,"class","preview svelte-1yt0ora"),d(_,"id","preview"),_.playsInline=!0,d(b,"class","caja-media svelte-1yt0ora"),d(n,"class","scanner-on svelte-1yt0ora")},m(i,u){s(i,n,u),w.m(n,null),a(n,e),a(n,o),a(o,r),a(o,c),a(o,p),a(o,m),a(o,h),a(o,$),a(n,g),a(n,y),a(n,v),a(n,b),a(b,_),t[3](_)},p(t,n){4&n&&x!==(x=JSON.stringify(t[2])+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(m,x)},d(e){e&&i(n),w.d(),t[3](null)}}}function I(t){let n;return{c(){var t,e,o;n=u("p"),n.textContent="Esto no es un celular",t="color",e="#fff",n.style.setProperty(t,e,o?"important":"")},m(t,e){s(t,n,e)},d(t){t&&i(n)}}}function T(n){let e;function o(t,n){return t[1]?A:S}let r=o(n),c=r(n);return{c(){c.c(),e=l("")},m(t,n){c.m(t,n),s(t,e,n)},p(t,[n]){r===(r=o(t))&&c?c.p(t,n):(c.d(1),c=r(t),c&&(c.c(),c.m(e.parentNode,e)))},i:t,o:t,d(t){c.d(t),t&&i(e)}}}let q="";function J(t,n,e){let o,r;return h((()=>{let t=new Instascan.Scanner({video:o});t.addListener("scan",(function(t){console.log(t)})),Instascan.Camera.getCameras().then((function(n){e(2,r=n),1==n.length?t.start(n[0]):n.length>1?t.start(n[n.length-1]):console.error("No cameras found.")})).catch((function(t){console.error(t)}))})),[o,!0,r,function(t){g[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,J,T,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
