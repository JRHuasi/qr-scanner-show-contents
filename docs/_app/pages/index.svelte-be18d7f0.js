import{S as z,i as H,s as P,e as g,t as R,k as $,c as b,a as w,h as U,d as u,m as N,b as v,g as y,J as _,K as A,D as te,L as _e,M as se,N as pe,j as re,O as W,P as L,Q as ee,R as ue,F as ve,w as F,x as Z,y as G,q as B,o as O,B as J,T as le,U as fe,G as me,H as he,I as ge,v as be,V as Se,l as oe}from"../chunks/vendor-688359be.js";function we(n){let e,s,t,r,a,c,i;return{c(){e=g("header"),s=g("div"),t=g("div"),r=R("QR Scan Browser"),a=$(),c=g("div"),i=R("QR Code Scanner in the Browser"),this.h()},l(d){e=b(d,"HEADER",{class:!0});var f=w(e);s=b(f,"DIV",{class:!0});var l=w(s);t=b(l,"DIV",{class:!0});var o=w(t);r=U(o,"QR Scan Browser"),o.forEach(u),a=N(l),c=b(l,"DIV",{class:!0});var m=w(c);i=U(m,"QR Code Scanner in the Browser"),m.forEach(u),l.forEach(u),f.forEach(u),this.h()},h(){v(t,"class","header__title svelte-11a89w0"),v(c,"class","header__description svelte-11a89w0"),v(s,"class","header__text-container svelte-11a89w0"),v(e,"class","svelte-11a89w0")},m(d,f){y(d,e,f),_(e,s),_(s,t),_(t,r),_(s,a),_(s,c),_(c,i)},p:A,i:A,o:A,d(d){d&&u(e)}}}class Ee extends z{constructor(e){super();H(this,e,null,we,P,{})}}function ke(n){let e,s,t,r,a,c;return{c(){e=g("footer"),s=g("span"),t=R("Source-code available at"),r=$(),a=g("a"),c=R("peerpiper/qrcode-scanner-svelte"),this.h()},l(i){e=b(i,"FOOTER",{class:!0});var d=w(e);s=b(d,"SPAN",{class:!0});var f=w(s);t=U(f,"Source-code available at"),f.forEach(u),r=N(d),a=b(d,"A",{href:!0,class:!0,target:!0,rel:!0});var l=w(a);c=U(l,"peerpiper/qrcode-scanner-svelte"),l.forEach(u),d.forEach(u),this.h()},h(){v(s,"class","footer__text svelte-16ecrcd"),v(a,"href","http://github.com/peerpiper/qrcode-scanner-svelte"),v(a,"class","footer__project-link svelte-16ecrcd"),v(a,"target","_blank"),v(a,"rel","noopener noreferrer"),v(e,"class","svelte-16ecrcd")},m(i,d){y(i,e,d),_(e,s),_(s,t),_(e,r),_(e,a),_(a,c)},p:A,i:A,o:A,d(i){i&&u(e)}}}class De extends z{constructor(e){super();H(this,e,null,ke,P,{})}}const X=te(null),Y=te(null),x=te(null);function ye(n){let e,s,t,r,a,c,i,d;return{c(){e=g("div"),s=g("div"),t=$(),r=g("div"),a=$(),c=g("div"),i=$(),d=g("div"),this.h()},l(f){e=b(f,"DIV",{});var l=w(e);s=b(l,"DIV",{class:!0}),w(s).forEach(u),t=N(l),r=b(l,"DIV",{class:!0}),w(r).forEach(u),a=N(l),c=b(l,"DIV",{class:!0}),w(c).forEach(u),i=N(l),d=b(l,"DIV",{class:!0}),w(d).forEach(u),l.forEach(u),this.h()},h(){v(s,"class","scanner-border scanner-border--top-left svelte-5ppqz9"),v(r,"class","scanner-border scanner-border--top-right svelte-5ppqz9"),v(c,"class","scanner-border scanner-border--bottom-left svelte-5ppqz9"),v(d,"class","scanner-border scanner-border--bottom-right svelte-5ppqz9")},m(f,l){y(f,e,l),_(e,s),_(e,t),_(e,r),_(e,a),_(e,c),_(e,i),_(e,d)},p:A,i:A,o:A,d(f){f&&u(e)}}}class Ie extends z{constructor(e){super();H(this,e,null,ye,P,{})}}var Me="/qrcode-scanner-svelte/_app/assets/scan-edb9a96e.svg";function Ve(n){let e,s;return{c(){e=R(n[0]),s=R(";")},l(t){e=U(t,n[0]),s=U(t,";")},m(t,r){y(t,e,r),y(t,s,r)},p(t,r){r&1&&re(e,t[0])},d(t){t&&u(e),t&&u(s)}}}function $e(n){let e,s;return{c(){e=g("a"),s=R(n[0]),this.h()},l(t){e=b(t,"A",{class:!0,href:!0,target:!0,rel:!0});var r=w(e);s=U(r,n[0]),r.forEach(u),this.h()},h(){v(e,"class","results__link svelte-2uoird"),v(e,"href",n[0]),v(e,"target","_blank"),v(e,"rel","noopener noreferrer")},m(t,r){y(t,e,r),_(e,s)},p(t,r){r&1&&re(s,t[0]),r&1&&v(e,"href",t[0])},d(t){t&&u(e)}}}function Ne(n){let e,s;return{c(){e=g("span"),s=R("Scan a QR Code to send data here."),this.h()},l(t){e=b(t,"SPAN",{class:!0});var r=w(e);s=U(r,"Scan a QR Code to send data here."),r.forEach(u),this.h()},h(){v(e,"class","results__empty svelte-2uoird")},m(t,r){y(t,e,r),_(e,s)},p:A,d(t){t&&u(e)}}}function Re(n){let e,s,t,r,a,c,i,d,f,l,o,m,h;function q(E,I){var T;if(I&5&&(t=null),!E[0]||E[0]==="")return Ne;if(t==null&&(t=!!((T=E[0])==null?void 0:T.match(E[2]))),t)return $e;if(E[0])return Ve}let V=q(n,-1),k=V&&V(n);return{c(){e=g("div"),s=g("div"),k&&k.c(),r=$(),a=g("div"),c=g("button"),i=g("img"),f=$(),l=g("span"),o=R("New Scan"),this.h()},l(E){e=b(E,"DIV",{class:!0});var I=w(e);s=b(I,"DIV",{class:!0});var T=w(s);k&&k.l(T),T.forEach(u),r=N(I),a=b(I,"DIV",{class:!0});var K=w(a);c=b(K,"BUTTON",{type:!0,class:!0});var C=w(c);i=b(C,"IMG",{class:!0,src:!0,alt:!0}),f=N(C),l=b(C,"SPAN",{});var Q=w(l);o=U(Q,"New Scan"),Q.forEach(u),C.forEach(u),K.forEach(u),I.forEach(u),this.h()},h(){v(s,"class","results__data svelte-2uoird"),v(i,"class","results__scan-icon svelte-2uoird"),_e(i.src,d=Me)||v(i,"src",d),v(i,"alt","New Scan"),v(c,"type","button"),v(c,"class","results__button svelte-2uoird"),v(a,"class","results__button-container svelte-2uoird"),v(e,"class","results svelte-2uoird")},m(E,I){y(E,e,I),_(e,s),k&&k.m(s,null),_(e,r),_(e,a),_(a,c),_(c,i),_(c,f),_(c,l),_(l,o),m||(h=se(c,"click",function(){pe(n[1])&&n[1].apply(this,arguments)}),m=!0)},p(E,[I]){n=E,V===(V=q(n,I))&&k?k.p(n,I):(k&&k.d(1),k=V&&V(n),k&&(k.c(),k.m(s,null)))},i:A,o:A,d(E){E&&u(e),k&&k.d(),m=!1,h()}}}function Ue(n,e,s){let{active:t}=e,{decodedData:r}=e,{onNewScan:a}=e,c;return n.$$set=i=>{"active"in i&&s(3,t=i.active),"decodedData"in i&&s(0,r=i.decodedData),"onNewScan"in i&&s(1,a=i.onNewScan)},n.$$.update=()=>{if(n.$$.dirty&8&&t){const i=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;s(2,c=new RegExp(i))}},[r,a,c,t]}class Ae extends z{constructor(e){super();H(this,e,Ue,Re,P,{active:3,decodedData:0,onNewScan:1})}}function je(n,e,s){let t,r,a;W(n,X,f=>s(1,t=f)),W(n,Y,f=>s(2,r=f)),W(n,x,f=>s(3,a=f));const c=f=>f!==null&&"getTracks"in f;function i(f){console.log(`Setting status ${f}`),L(x,a=f,a)}return[()=>{L(X,t=null,t),L(Y,r=null,r),L(x,a="stopped",a);function f(h){console.log("Setting erro"),L(Y,r=h,r)}function l(h){console.log("Setting stream",{params:h}),L(X,t=h,t)}return{stopMediaStream:()=>{console.log("stopping media stream"),c(t)&&(t.getTracks().forEach(h=>{h.stop(),t.removeTrack(h)}),i("stopped"))},startMediaStream:()=>{i("pending"),navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(h=>{l(h),i("resolved")}).catch(h=>{f(h),i("rejected")})}}}]}class qe extends z{constructor(e){super();H(this,e,je,null,P,{useUserMedia:0})}get useUserMedia(){return this.$$.ctx[0]}}const Te=n=>({result:n&1}),ce=n=>({result:n[0]});function Ce(n){let e,s;return e=new Ae({props:{active:n[0]!==null,decodedData:n[0],onNewScan:n[15]}}),{c(){F(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){G(e,t,r),s=!0},p(t,r){const a={};r&1&&(a.active=t[0]!==null),r&1&&(a.decodedData=t[0]),r&1&&(a.onNewScan=t[15]),e.$set(a)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function Qe(n){let e,s,t,r,a,c,i,d,f,l,o,m,h,q,V,k,E,I,T;function K(p){n[12](p)}let C={};n[2]!==void 0&&(C.useUserMedia=n[2]),e=new qe({props:C}),ee.push(()=>ue(e,"useUserMedia",K)),l=new Ie({});const Q=n[11].default,S=ve(Q,n,n[10],ce),M=S||Ce(n);return{c(){F(e.$$.fragment),t=$(),r=g("div"),a=g("div"),c=g("canvas"),i=$(),d=g("video"),f=$(),F(l.$$.fragment),o=$(),m=g("div"),h=g("div"),q=R("Scan a QR code with your camera to see what it says."),k=$(),M&&M.c(),this.h()},l(p){Z(e.$$.fragment,p),t=N(p),r=b(p,"DIV",{class:!0});var D=w(r);a=b(D,"DIV",{class:!0});var j=w(a);c=b(j,"CANVAS",{class:!0}),w(c).forEach(u),i=N(j),d=b(j,"VIDEO",{class:!0});var de=w(d);de.forEach(u),f=N(j),Z(l.$$.fragment,j),j.forEach(u),o=N(D),m=b(D,"DIV",{class:!0});var ne=w(m);h=b(ne,"DIV",{});var ae=w(h);q=U(ae,"Scan a QR code with your camera to see what it says."),ae.forEach(u),ne.forEach(u),D.forEach(u),k=N(p),M&&M.l(p),this.h()},h(){v(c,"class","scanner__canvas svelte-1jvnekp"),v(d,"class","scanner__video svelte-1jvnekp"),v(a,"class","scanner__aspect-ratio-container svelte-1jvnekp"),v(m,"class","scanner-tip svelte-1jvnekp"),v(r,"class",V=le(`scanner ${n[3]?"":"scanner--hidden"}`)+" svelte-1jvnekp")},m(p,D){G(e,p,D),y(p,t,D),y(p,r,D),_(r,a),_(a,c),n[13](c),_(a,i),_(a,d),n[14](d),_(a,f),G(l,a,null),_(r,o),_(r,m),_(m,h),_(h,q),y(p,k,D),M&&M.m(p,D),E=!0,I||(T=se(d,"canplay",n[5]),I=!0)},p(p,[D]){const j={};!s&&D&4&&(s=!0,j.useUserMedia=p[2],fe(()=>s=!1)),e.$set(j),(!E||D&8&&V!==(V=le(`scanner ${p[3]?"":"scanner--hidden"}`)+" svelte-1jvnekp"))&&v(r,"class",V),S?S.p&&(!E||D&1025)&&me(S,Q,p,p[10],E?ge(Q,p[10],D,Te):he(p[10]),ce):M&&M.p&&(!E||D&1)&&M.p(p,E?D:-1)},i(p){E||(B(e.$$.fragment,p),B(l.$$.fragment,p),B(M,p),E=!0)},o(p){O(e.$$.fragment,p),O(l.$$.fragment,p),O(M,p),E=!1},d(p){J(e,p),p&&u(t),p&&u(r),n[13](null),n[14](null),J(l),p&&u(k),M&&M.d(p),I=!1,T()}}}function Be(n,e,s){let t,r,a,c;W(n,x,S=>s(8,r=S)),W(n,X,S=>s(9,a=S)),W(n,Y,S=>s(17,c=S));let{$$slots:i={},$$scope:d}=e,{result:f=null}=e,l=null,o=null,m,h,q,V;be(async()=>{s(7,V=!0)});const k=S=>{s(0,f=S)},E=()=>{if(console.log("Starting capture"),o===null||o===null||l===null||l===null){console.log("problem");return}const S=o.getContext("2d");if(S===null){console.log("problem");return}const{width:M,height:p}=o;S.drawImage(l,0,0,M,p);const D=S.getImageData(0,0,M,p),j=Se(D.data,M,p);j===null?(console.log("problem"),setTimeout(E,750)):(k(j.data),m(),s(1,l.srcObject=null,l))},I=()=>{console.log("canplay"),!(o===null||o===null||l===null||l===null)&&(s(4,o.width=l.videoWidth,o),s(4,o.height=l.videoHeight,o),c!==null||E())};function T(S){q=S,s(2,q)}function K(S){ee[S?"unshift":"push"](()=>{o=S,s(4,o)})}function C(S){ee[S?"unshift":"push"](()=>{l=S,s(1,l),s(8,r),s(9,a)})}const Q=()=>s(0,f=null);return n.$$set=S=>{"result"in S&&s(0,f=S.result),"$$scope"in S&&s(10,d=S.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&s(3,t=!f),n.$$.dirty&132&&V&&s(6,{stopMediaStream:m,startMediaStream:h}=q(),h),n.$$.dirty&770&&r==="resolved"&&l!==null&&a&&(console.log("Resolve, stream"),s(1,l.srcObject=a,l),l.play().catch(console.error)),n.$$.dirty&328&&t&&r==="stopped"&&h()},[f,l,q,t,o,I,h,V,r,a,d,i,T,K,C,Q]}class Oe extends z{constructor(e){super();H(this,e,Be,Qe,P,{result:0})}}function ie(n){let e,s,t,r,a,c,i,d,f;return{c(){e=g("div"),s=R("The result is: "),t=R(n[0]),r=$(),a=g("div"),c=g("button"),i=R("Scan again")},l(l){e=b(l,"DIV",{});var o=w(e);s=U(o,"The result is: "),t=U(o,n[0]),o.forEach(u),r=N(l),a=b(l,"DIV",{});var m=w(a);c=b(m,"BUTTON",{});var h=w(c);i=U(h,"Scan again"),h.forEach(u),m.forEach(u)},m(l,o){y(l,e,o),_(e,s),_(e,t),y(l,r,o),y(l,a,o),_(a,c),_(c,i),d||(f=se(c,"click",n[1]),d=!0)},p(l,o){o&1&&re(t,l[0])},d(l){l&&u(e),l&&u(r),l&&u(a),d=!1,f()}}}function ze(n){let e,s=n[0]&&ie(n);return{c(){s&&s.c(),e=oe()},l(t){s&&s.l(t),e=oe()},m(t,r){s&&s.m(t,r),y(t,e,r)},p(t,r){t[0]?s?s.p(t,r):(s=ie(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&u(e)}}}function He(n){let e,s,t,r,a,c,i,d;e=new Ee({});function f(o){n[2](o)}let l={$$slots:{default:[ze]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.result=n[0]),r=new Oe({props:l}),ee.push(()=>ue(r,"result",f)),i=new De({}),{c(){F(e.$$.fragment),s=$(),t=g("main"),F(r.$$.fragment),c=$(),F(i.$$.fragment)},l(o){Z(e.$$.fragment,o),s=N(o),t=b(o,"MAIN",{});var m=w(t);Z(r.$$.fragment,m),m.forEach(u),c=N(o),Z(i.$$.fragment,o)},m(o,m){G(e,o,m),y(o,s,m),y(o,t,m),G(r,t,null),y(o,c,m),G(i,o,m),d=!0},p(o,[m]){const h={};m&9&&(h.$$scope={dirty:m,ctx:o}),!a&&m&1&&(a=!0,h.result=o[0],fe(()=>a=!1)),r.$set(h)},i(o){d||(B(e.$$.fragment,o),B(r.$$.fragment,o),B(i.$$.fragment,o),d=!0)},o(o){O(e.$$.fragment,o),O(r.$$.fragment,o),O(i.$$.fragment,o),d=!1},d(o){J(e,o),o&&u(s),o&&u(t),J(r),o&&u(c),J(i,o)}}}function Pe(n,e,s){let t;const r=()=>s(0,t=null);function a(c){t=c,s(0,t)}return[t,r,a]}class Fe extends z{constructor(e){super();H(this,e,Pe,He,P,{})}}function Ze(n){let e,s;return e=new Fe({}),{c(){F(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){G(e,t,r),s=!0},p:A,i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}class Je extends z{constructor(e){super();H(this,e,null,Ze,P,{})}}export{Je as default};