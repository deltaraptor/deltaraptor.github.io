var app=function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t);function o(){}function r(t){return t()}function c(){return Object.create(null)}function u(t){t.forEach(r)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let g;function b(t){g=t}function y(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const _=[],x=[],v=[],w=[],k=Promise.resolve();let E=!1;function S(t){v.push(t)}let j=!1;const A=new Set;function C(){if(!j){j=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];b(n),N(n.$$)}for(b(null),_.length=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];A.has(n)||(A.add(n),n())}v.length=0}while(_.length);for(;w.length;)w.pop()();E=!1,j=!1,A.clear()}}function N(t){if(null!==t.fragment){t.update(),u(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const O=new Set;function L(t,n){-1===t.$$.dirty[0]&&(_.push(t),E||(E=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(t,n,e,s,a,f,d,p=[-1]){const h=g;b(t);const $=t.$$={fragment:null,ctx:null,props:f,update:o,not_equal:a,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:c(),dirty:p,skip_bound:!1,root:n.target||h.$$.root};d&&d($.root);let m=!1;if($.ctx=e?e(t,n.props||{},((n,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&a($.ctx[n],$.ctx[n]=r)&&(!$.skip_bound&&$.bound[n]&&$.bound[n](r),m&&L(t,n)),e})):[],$.update(),m=!0,u($.before_update),$.fragment=!!s&&s($.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();n.intro&&((y=t.$$.fragment)&&y.i&&(O.delete(y),y.i(_))),function(t,n,e,o){const{fragment:c,on_mount:s,on_destroy:a,after_update:f}=t.$$;c&&c.m(n,e),o||S((()=>{const n=s.map(r).filter(i);a?a.push(...n):u(n),t.$$.on_mount=[]})),f.forEach(S)}(t,n.target,n.anchor,n.customElement),C()}var y,_;b(h)}function q(t){let n,e,r,c,s,g,b,y,_,x,v,w;return{c(){n=d("video"),e=h(),r=d("div"),c=p("scanResult: "),s=p(t[3]),g=h(),b=d("div"),y=d("button"),y.textContent="Scan!",_=h(),x=d("button"),x.textContent="Stop scan",m(n,"class","svelte-1n5rwl2"),m(r,"class","result"),m(b,"class","buttons")},m(o,u){f(o,n,u),t[4](n),f(o,e,u),f(o,r,u),a(r,c),a(r,s),f(o,g,u),f(o,b,u),a(b,y),a(b,_),a(b,x),v||(w=[$(y,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),$(x,"click",(function(){i(t[2])&&t[2].apply(this,arguments)}))],v=!0)},p(n,[e]){t=n,8&e&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(s,t[3])},i:o,o:o,d(o){o&&l(n),t[4](null),o&&l(e),o&&l(r),o&&l(g),o&&l(b),v=!1,u(w)}}}function z(t,n,o){let r,c,u,i="";return y((()=>{const t=new e.default(r,(t=>o(3,i=t)));o(1,c=()=>{t.start()}),o(2,u=()=>{t.stop()})})),[r,c,u,i,function(t){x[t?"unshift":"push"]((()=>{r=t,o(0,r)}))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(u(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=o}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,z,q,s,{})}}({target:document.body,props:{name:"world"}})}(QrScanner);
//# sourceMappingURL=bundle.js.map
