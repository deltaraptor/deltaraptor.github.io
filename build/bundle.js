var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function h(t){m=t}function g(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const $=[],j=[],v=[],b=[],y=Promise.resolve();let _=!1;function x(t){v.push(t)}let w=!1;const k=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];h(n),N(n.$$)}for(h(null),$.length=0;j.length;)j.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];k.has(n)||(k.add(n),n())}v.length=0}while($.length);for(;b.length;)b.pop()();_=!1,w=!1,k.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const S=new Set;function C(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(s,c,a,l,u,f,d,p=[-1]){const g=m;h(s);const $=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:c.context||[]),callbacks:e(),dirty:p,skip_bound:!1,root:c.target||g.$$.root};d&&d($.root);let j=!1;if($.ctx=a?a(s,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),j&&C(s,t)),n})):[],$.update(),j=!0,o($.before_update),$.fragment=!!l&&l($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();c.intro&&((v=s.$$.fragment)&&v.i&&(S.delete(v),v.i(b))),function(t,e,s,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),c||x((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(x)}(s,c.target,c.anchor,c.customElement),E()}var v,b;h(g)}function A(t){let n,e,o,r,s,m;return{c(){n=l("div"),e=l("div"),e.textContent="Esta apagado",o=f(),r=l("div"),s=u("Informacion en QR: "),m=u(t[1]),d(e,"class","mensaje svelte-103jj91"),d(r,"class","mensaje svelte-103jj91"),d(n,"class","scanner-off svelte-103jj91")},m(t,i){a(t,n,i),c(n,e),c(n,o),c(n,r),c(r,s),c(r,m)},p(t,n){2&n&&p(m,t[1])},d(t){t&&i(n)}}}function I(t){let n,e,o,r,s,m,h,g,$,j,v,b,y,_,x,w,k,E=JSON.stringify(t[3])+"";return{c(){n=l("div"),e=l("div"),o=u("Esta prendido\n\t\t\t"),r=l("br"),s=f(),m=l("br"),h=u("\n\t\t\tcameras: "),g=u(E),$=f(),j=l("br"),v=f(),b=l("br"),y=f(),_=l("br"),x=f(),w=l("div"),k=l("video"),k.innerHTML='<track kind="captions" class="svelte-103jj91"/>',d(r,"class","svelte-103jj91"),d(m,"class","svelte-103jj91"),d(j,"class","svelte-103jj91"),d(b,"class","svelte-103jj91"),d(e,"class","mensaje svelte-103jj91"),d(_,"class","svelte-103jj91"),d(k,"class","preview svelte-103jj91"),d(k,"id","preview"),d(w,"class","caja-media svelte-103jj91"),d(n,"class","scanner-on svelte-103jj91")},m(i,l){a(i,n,l),c(n,e),c(e,o),c(e,r),c(e,s),c(e,m),c(e,h),c(e,g),c(e,$),c(e,j),c(e,v),c(e,b),c(n,y),c(n,_),c(n,x),c(n,w),c(w,k),t[4](k)},p(t,n){8&n&&E!==(E=JSON.stringify(t[3])+"")&&p(g,E)},d(e){e&&i(n),t[4](null)}}}function T(n){let e;function o(t,n){return t[2]?I:A}let r=o(n),s=r(n);return{c(){s.c(),e=u("")},m(t,n){s.m(t,n),a(t,e,n)},p(t,[n]){r===(r=o(t))&&s?s.p(t,n):(s.d(1),s=r(t),s&&(s.c(),s.m(e.parentNode,e)))},i:t,o:t,d(t){s.d(t),t&&i(e)}}}function q(t,n,e){let o,r="",s=!0;let c;return g((()=>{let t=new Instascan.Scanner({video:o,mirror:!0});(async()=>{Instascan.Camera.getCameras().then((function(n){console.log(n),e(3,c=n),1==n.length?t.start(n[0]):n.length>1?t.start(n[1]):console.error("No cameras found.")})).catch((function(t){console.error(t)}))})(),t.addListener("scan",(async function(n){e(2,s=!s),e(1,r=String(n)),t.stop().then((async()=>{console.log("El scanner se supone que se ha detenido");try{console.log(r)}catch(t){console.log(t)}}))}))})),[o,r,s,c,function(t){j[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,q,T,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
