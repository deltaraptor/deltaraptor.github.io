var app=function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t);function o(){}function r(t){return t()}function c(){return Object.create(null)}function s(t){t.forEach(r)}function u(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let g;function y(t){g=t}function b(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const v=[],_=[],x=[],k=[],w=Promise.resolve();let E=!1;function j(t){x.push(t)}let C=!1;const A=new Set;function N(){if(!C){C=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];y(n),L(n.$$)}for(y(null),v.length=0;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];A.has(n)||(A.add(n),n())}x.length=0}while(v.length);for(;k.length;)k.pop()();E=!1,C=!1,A.clear()}}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const O=new Set;function S(t,n){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(t,n,e,i,a,l,d,p=[-1]){const h=g;y(t);const $=t.$$={fragment:null,ctx:null,props:l,update:o,not_equal:a,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:c(),dirty:p,skip_bound:!1,root:n.target||h.$$.root};d&&d($.root);let m=!1;if($.ctx=e?e(t,n.props||{},((n,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&a($.ctx[n],$.ctx[n]=r)&&(!$.skip_bound&&$.bound[n]&&$.bound[n](r),m&&S(t,n)),e})):[],$.update(),m=!0,s($.before_update),$.fragment=!!i&&i($.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();n.intro&&((b=t.$$.fragment)&&b.i&&(O.delete(b),b.i(v))),function(t,n,e,o){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(n,e),o||j((()=>{const n=i.map(r).filter(u);a?a.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(j)}(t,n.target,n.anchor,n.customElement),N()}var b,v;y(h)}function M(t){let n,e,r,c,i,g,y,b,v,_,x,k,w,E;return{c(){n=d("div"),e=p("Resultado: "),r=p(t[3]),c=h(),i=d("div"),g=d("button"),g.textContent="Escanear!",y=h(),b=d("button"),b.textContent="Detener",v=h(),_=d("div"),x=d("div"),k=d("video"),k.innerHTML='<track kind="captions"/>',m(n,"class","result"),m(i,"class","buttons"),m(k,"class","video svelte-82ry7"),m(k,"id","scanner"),m(x,"class","vid svelte-82ry7"),m(_,"class","cont-video svelte-82ry7")},m(o,s){l(o,n,s),a(n,e),a(n,r),l(o,c,s),l(o,i,s),a(i,g),a(i,y),a(i,b),l(o,v,s),l(o,_,s),a(_,x),a(x,k),t[4](k),w||(E=[$(g,"click",(function(){u(t[1])&&t[1].apply(this,arguments)})),$(b,"click",(function(){u(t[2])&&t[2].apply(this,arguments)}))],w=!0)},p(n,[e]){t=n,8&e&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(r,t[3])},i:o,o:o,d(e){e&&f(n),e&&f(c),e&&f(i),e&&f(v),e&&f(_),t[4](null),w=!1,s(E)}}}function q(t,n,o){let r,c,s,u="";return b((()=>{e.default.hasCamera().then((t=>{t?console.log(t):window.alert("Necesitas tener una camara para usar esta herramienta")}));const t=new e.default(r,(async n=>{o(3,u=n),console.log("asdfjasdhf"),await fetch("https://jsonplaceholder.typicode.com/todos/1").then((t=>t.json())).then((t=>console.log(t))),t.destroy()}));o(1,c=()=>{t.start()}),o(2,s=()=>{t.stop()})})),[r,c,s,u,function(t){_[t?"unshift":"push"]((()=>{r=t,o(0,r)}))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=o}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,q,M,i,{})}}({target:document.body})}(QrScanner);
//# sourceMappingURL=bundle.js.map
