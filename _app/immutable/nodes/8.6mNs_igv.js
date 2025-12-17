var wl=Object.defineProperty;var $l=(i,e,r)=>e in i?wl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r;var Je=(i,e,r)=>$l(i,typeof e!="symbol"?e+"":e,r);import{p as wi,a8 as Zn,s as _t,d as p,i as g,f as je,T as It,l as Rt,U as ot,V as vr,v as Et,w as Tt,x as At,y as Ct,a9 as kr,F as $i,e as L,r as se,k as F,H as $r,n as Qe,E as Kn,z as pr,D as it,b as Y,R as te,a as K,t as Ge,c as R,u as We,j as S,G as Rl,B as Sl,ab as Xn,ac as Ri,q as na,m as lt,g as yt,o as el,ad as tl,ae as rl,O as El,h as Tl}from"../chunks/scheduler.DqPYVuDL.js";import{S as ct,i as pt,t as b,a as c,g as oe,c as ue,d as E,m as T,b as A,e as C,k as al}from"../chunks/index.D77-yQEy.js";import{c as Al,A as Cl,a as Il}from"../chunks/AccordionItem.CEKotQXK.js";import{t as Dl,A as Ol,F as ql,w as Jr,B as Nl,r as Ni,H as _i,G as Ll,M as ci,Z as Li,_ as Fi,K as Fl,m as pi,N as dt,O as hi,k as Ml,J as zl,$ as Zr,R as Pl,Q as Hl,S as Vl,v as Yr,U as Bl,g as xl,a0 as Mi,Y as il,x as zi,z as nl,e as wr,a1 as Ul,W as $t,a2 as Gl,X as Wl,a3 as gr,a4 as Yl,a5 as jl,a6 as Ql,D as bi,a7 as tt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Csru7Z3f.js";import{g as Jl,Q as He,n as Zl,e as Kl,s as Xl,p as es,a as Pi,r as Hi,C as ts}from"../chunks/inferColumnTypes.CIOh3LMy.js";import{h as Z}from"../chunks/button.CxDdElTY.js";import{w as yr,d as rs}from"../chunks/entry.CqEPNLw0.js";import{H as as,g as is,Q as Ye,B as ns,D as gt,a as Ze}from"../chunks/BarChart.NKa7SeT1.js";import{p as ls}from"../chunks/stores.CC-tK7Zl.js";import{p as ss}from"../chunks/profile.BW8tN6E9.js";function gi(i,e,r,t){const a=(i-(isNaN(e)?0:e))%t;let n=Math.abs(a)*2>=t?i+Math.sign(a)*(t-Math.abs(a)):i-a;isNaN(e)?!isNaN(r)&&n>r&&(n=Math.floor(r/t)*t):n<e?n=e:!isNaN(r)&&n>r&&(n=e+Math.floor((r-e)/t)*t);const l=t.toString(),s=l.indexOf("."),u=s>=0?l.length-s:0;if(u>0){const f=Math.pow(10,u);n=Math.round(n*f)/f}return n}const os={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:Kr}=Ll("slider"),us=i=>{const e={...os,...i},r=Dl(Ol(e,"value","onValueChange","defaultValue")),{min:t,max:a,step:n,orientation:l,dir:s,disabled:u}=r,f=e.value??yr(e.defaultValue),o=ql(f,e==null?void 0:e.onValueChange),m=Jr(yr(!1)),h=Jr(yr(0)),d=Jr(yr(null)),$=Nl(["root"]),y=(I,z)=>{o.update(H=>{if(!H)return[I];if(H[z]===I)return H;const Q=[...H],ne=Q[z]>I?-1:1;function W(){Q[z]=Q[z+ne],Q[z+ne]=I;const ye=M();ye&&(ye[z+ne].focus(),d.set({thumb:ye[z+ne],index:z+ne}))}if(ne===-1&&I<Q[z-1])return W(),Q;if(ne===1&&I>Q[z+1])return W(),Q;const q=t.get(),X=a.get(),me=n.get();return Q[z]=gi(I,q,X,me),Q})},M=()=>{const I=hi($.root);return I?Array.from(I.querySelectorAll('[data-melt-part="thumb"]')).filter(z=>pi(z)):null},U=rs([t,a],([I,z])=>H=>(H-I)/(z-I)*100),P=Jr.derived([l,s],([I,z])=>I==="horizontal"?z==="rtl"?"rl":"lr":z==="rtl"?"tb":"bt"),k=Ni(Kr(),{stores:[u,l,s],returned:([I,z,H])=>({dir:H,disabled:_i(I),"data-disabled":_i(I),"data-orientation":z,style:I?void 0:`touch-action: ${z==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":$.root})}),j=Ni(Kr("range"),{stores:[o,P,U],returned:([I,z,H])=>{const Q=I.length>1?H(Math.min(...I)??0):0,ne=100-H(Math.max(...I)??0),W={position:"absolute"};switch(z){case"lr":{W.left=`${Q}%`,W.right=`${ne}%`;break}case"rl":{W.right=`${Q}%`,W.left=`${ne}%`;break}case"bt":{W.bottom=`${Q}%`,W.top=`${ne}%`;break}case"tb":{W.top=`${Q}%`,W.bottom=`${ne}%`;break}}return{style:ci(W)}}}),ie=Li(Kr("thumb"),{stores:[o,U,t,a,u,l,P],returned:([I,z,H,Q,ne,W,q])=>Array.from({length:I.length||1},(me,ye)=>{h.get()<I.length&&h.update(ae=>ae+1);const le=I[ye],ee=`${z(le)}%`,V={position:"absolute"};switch(q){case"lr":{V.left=ee,V.translate="-50% 0";break}case"rl":{V.right=ee,V.translate="50% 0";break}case"bt":{V.bottom=ee,V.translate="0 50%";break}case"tb":{V.top=ee,V.translate="0 -50%";break}}return{role:"slider","aria-valuemin":H,"aria-valuemax":Q,"aria-valuenow":le,"aria-disabled":_i(ne),"aria-orientation":W,"data-melt-part":"thumb","data-value":le,style:ci(V),tabindex:ne?-1:0}}),action:I=>({destroy:Fl(I,"keydown",H=>{if(u.get())return;const Q=H.currentTarget;if(!pi(Q))return;const ne=M();if(!(ne!=null&&ne.length))return;const W=ne.indexOf(Q);if(h.set(W),![dt.ARROW_LEFT,dt.ARROW_RIGHT,dt.ARROW_UP,dt.ARROW_DOWN,dt.HOME,dt.END].includes(H.key))return;H.preventDefault();const q=t.get(),X=a.get(),me=n.get(),ye=o.get(),Oe=l.get(),le=P.get(),ee=ye[W];switch(H.key){case dt.HOME:{y(q,W);break}case dt.END:{y(X,W);break}case dt.ARROW_LEFT:{if(Oe!=="horizontal")break;H.metaKey?y(le==="rl"?X:q,W):le==="rl"&&ee<X?y(ee+me,W):le==="lr"&&ee>q&&y(ee-me,W);break}case dt.ARROW_RIGHT:{if(Oe!=="horizontal")break;H.metaKey?y(le==="rl"?q:X,W):le==="rl"&&ee>q?y(ee-me,W):le==="lr"&&ee<X&&y(ee+me,W);break}case dt.ARROW_UP:{H.metaKey?y(le==="tb"?q:X,W):le==="tb"&&ee>q?y(ee-me,W):le!=="tb"&&ee<X&&y(ee+me,W);break}case dt.ARROW_DOWN:{H.metaKey?y(le==="tb"?X:q,W):le==="tb"&&ee<X?y(ee+me,W):le!=="tb"&&ee>q&&y(ee-me,W);break}}})})}),G=Li(Kr("tick"),{stores:[o,t,a,n,P],returned:([I,z,H,Q,ne])=>{const W=H-z;let q=Math.ceil(W/Q);return W%Q==0&&q++,Array.from({length:q},(X,me)=>{const ye=`${me*(Q/(H-z))*100}%`,Oe=me===0,le=me===q-1,ee=Oe?0:le?-100:-50,V={position:"absolute"};switch(ne){case"lr":{V.left=ye,V.translate=`${ee}% 0`;break}case"rl":{V.right=ye,V.translate=`${-ee}% 0`;break}case"bt":{V.bottom=ye,V.translate=`0 ${-ee}%`;break}case"tb":{V.top=ye,V.translate=`0 ${ee}%`;break}}const ae=z+me*Q;return{"data-bounded":(I.length===1?ae<=I[0]:I[0]<=ae&&ae<=I[I.length-1])?!0:void 0,"data-value":ae,style:ci(V)}})}});return Fi([k,t,a,u,l,P,n],([I,z,H,Q,ne,W,q])=>{if(!Ml||Q)return;const X=(V,ae,ve,Se)=>{const ke=(V-ve)/(Se-ve)*(H-z)+z;if(ke<z)y(z,ae);else if(ke>H)y(H,ae);else{const be=q,O=z,re=Math.floor((ke-O)/be),fe=O+re*be+be/2,de=O+(re+1)*be+be/2,Te=ke>=fe&&ke<de?(re+1)*be+O:re*be+O;Te<=H&&y(Te,ae)}},me=V=>{const ae=M();if(!ae)return;ae.forEach(ke=>ke.blur());const ve=ae.map(ke=>{if(ne==="horizontal"){const{left:be,right:O}=ke.getBoundingClientRect();return Math.abs(V.clientX-(be+O)/2)}else{const{top:be,bottom:O}=ke.getBoundingClientRect();return Math.abs(V.clientY-(be+O)/2)}}),Se=ae[ve.indexOf(Math.min(...ve))],Xe=ae.indexOf(Se);return{thumb:Se,index:Xe}},ye=V=>{if(!m.get())return;V.preventDefault(),V.stopPropagation();const ae=hi(I["data-melt-id"]),ve=d.get();if(!ae||!ve)return;ve.thumb.focus();const{left:Se,right:Xe,top:ke,bottom:be}=ae.getBoundingClientRect();switch(W){case"lr":{X(V.clientX,ve.index,Se,Xe);break}case"rl":{X(V.clientX,ve.index,Xe,Se);break}case"bt":{X(V.clientY,ve.index,be,ke);break}case"tb":{X(V.clientY,ve.index,ke,be);break}}},Oe=V=>{if(V.button!==0)return;const ae=hi(I["data-melt-id"]),ve=me(V);if(!ve||!ae)return;const Se=V.target;!pi(Se)||!ae.contains(Se)||(V.preventDefault(),d.set(ve),ve.thumb.focus(),m.set(!0),ye(V))},le=()=>{m.set(!1)},ee=zl(Zr(document,"pointerdown",Oe),Zr(document,"pointerup",le),Zr(document,"pointerleave",le),Zr(document,"pointermove",ye));return()=>{ee()}}),Fi([n,t,a,o],function([z,H,Q,ne]){const W=X=>gi(X,H,Q,z)===X,q=X=>gi(X,H,Q,z);ne.some(X=>!W(X))&&o.update(X=>X.map(q))}),{elements:{root:k,thumbs:ie,range:j,ticks:G},states:{value:o},options:r}};function ll(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function fs(i){const{NAME:e,PARTS:r}=ll(),t=Pl(e,r),a={...us(Hl(i)),getAttrs:t};return wi(e,a),{...a,updateOption:Vl(a.options)}}function sl(){const{NAME:i}=ll();return Zn(i)}const ms=i=>({builder:i&4,ticks:i&8,thumbs:i&16}),Vi=i=>({builder:i[2],ticks:i[3],thumbs:i[4]}),ds=i=>({builder:i&4,ticks:i&8,thumbs:i&16}),Bi=i=>({builder:i[2],ticks:i[3],thumbs:i[4]});function _s(i){let e,r,t,a;const n=i[19].default,l=Et(n,i,i[18],Vi);let s=[i[2],i[8]],u={};for(let f=0;f<s.length;f+=1)u=ot(u,s[f]);return{c(){e=F("span"),l&&l.c(),this.h()},l(f){e=L(f,"SPAN",{});var o=se(e);l&&l.l(o),o.forEach(p),this.h()},h(){kr(e,u)},m(f,o){g(f,e,o),l&&l.m(e,null),i[20](e),r=!0,t||(a=$i(i[2].action(e)),t=!0)},p(f,o){l&&l.p&&(!r||o&262172)&&Tt(l,n,f,f[18],r?Ct(n,f[18],o,ms):At(f[18]),Vi),kr(e,u=Yr(s,[o&4&&f[2],o&256&&f[8]]))},i(f){r||(c(l,f),r=!0)},o(f){b(l,f),r=!1},d(f){f&&p(e),l&&l.d(f),i[20](null),t=!1,a()}}}function cs(i){let e;const r=i[19].default,t=Et(r,i,i[18],Bi);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&262172)&&Tt(t,r,a,a[18],e?Ct(r,a[18],n,ds):At(a[18]),Bi)},i(a){e||(c(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function ps(i){let e,r,t,a;const n=[cs,_s],l=[];function s(u,f){return u[1]?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=je()},l(u){r.l(u),t=je()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(oe(),b(l[o],1,1,()=>{l[o]=null}),ue(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function hs(i,e,r){let t;const a=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let n=It(e,a),l,s,u,{$$slots:f={},$$scope:o}=e,{disabled:m=void 0}=e,{min:h=void 0}=e,{max:d=void 0}=e,{step:$=void 0}=e,{orientation:y=void 0}=e,{dir:M=void 0}=e,{value:U=void 0}=e,{onValueChange:P=void 0}=e,{asChild:k=!1}=e,{el:j=void 0}=e;const{elements:{root:ie,ticks:G,thumbs:I},states:{value:z},updateOption:H,getAttrs:Q}=fs({disabled:m,dir:M,min:h,max:d,step:$,orientation:y,defaultValue:U,onValueChange:({next:q})=>(U!==q&&(P==null||P(q),r(9,U=q)),q)});Rt(i,ie,q=>r(17,l=q)),Rt(i,G,q=>r(3,s=q)),Rt(i,I,q=>r(4,u=q));const ne=Q("root");function W(q){$r[q?"unshift":"push"](()=>{j=q,r(0,j)})}return i.$$set=q=>{e=ot(ot({},e),vr(q)),r(8,n=It(e,a)),"disabled"in q&&r(10,m=q.disabled),"min"in q&&r(11,h=q.min),"max"in q&&r(12,d=q.max),"step"in q&&r(13,$=q.step),"orientation"in q&&r(14,y=q.orientation),"dir"in q&&r(15,M=q.dir),"value"in q&&r(9,U=q.value),"onValueChange"in q&&r(16,P=q.onValueChange),"asChild"in q&&r(1,k=q.asChild),"el"in q&&r(0,j=q.el),"$$scope"in q&&r(18,o=q.$$scope)},i.$$.update=()=>{i.$$.dirty&512&&U!==void 0&&z.set(U),i.$$.dirty&1024&&H("disabled",m),i.$$.dirty&2048&&H("min",h),i.$$.dirty&4096&&H("max",d),i.$$.dirty&8192&&H("step",$),i.$$.dirty&16384&&H("orientation",y),i.$$.dirty&32768&&H("dir",M),i.$$.dirty&131072&&r(2,t=l),i.$$.dirty&4&&Object.assign(t,ne)},[j,k,t,s,u,ie,G,I,n,U,m,h,d,$,y,M,P,l,o,f,W]}let bs=class extends ct{constructor(e){super(),pt(this,e,hs,ps,_t,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const gs=i=>({builder:i&4}),xi=i=>({builder:i[2]});function ys(i){let e,r,t,a=[i[2],i[4]],n={};for(let l=0;l<a.length;l+=1)n=ot(n,a[l]);return{c(){e=F("span"),this.h()},l(l){e=L(l,"SPAN",{}),se(e).forEach(p),this.h()},h(){kr(e,n)},m(l,s){g(l,e,s),i[8](e),r||(t=$i(i[2].action(e)),r=!0)},p(l,s){kr(e,n=Yr(a,[s&4&&l[2],s&16&&l[4]]))},i:Qe,o:Qe,d(l){l&&p(e),i[8](null),r=!1,t()}}}function vs(i){let e;const r=i[7].default,t=Et(r,i,i[6],xi);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&68)&&Tt(t,r,a,a[6],e?Ct(r,a[6],n,gs):At(a[6]),xi)},i(a){e||(c(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function ks(i){let e,r,t,a;const n=[vs,ys],l=[];function s(u,f){return u[1]?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=je()},l(u){r.l(u),t=je()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(oe(),b(l[o],1,1,()=>{l[o]=null}),ue(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function ws(i,e,r){let t;const a=["asChild","el"];let n=It(e,a),l,{$$slots:s={},$$scope:u}=e,{asChild:f=!1}=e,{el:o=void 0}=e;const{elements:{range:m},getAttrs:h}=sl();Rt(i,m,y=>r(5,l=y));const d=h("range");function $(y){$r[y?"unshift":"push"](()=>{o=y,r(0,o)})}return i.$$set=y=>{e=ot(ot({},e),vr(y)),r(4,n=It(e,a)),"asChild"in y&&r(1,f=y.asChild),"el"in y&&r(0,o=y.el),"$$scope"in y&&r(6,u=y.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&r(2,t=l),i.$$.dirty&4&&Object.assign(t,d)},[o,f,t,m,n,l,u,s,$]}class $s extends ct{constructor(e){super(),pt(this,e,ws,ks,_t,{asChild:1,el:0})}}const Rs=i=>({builder:i&4}),Ui=i=>({builder:i[2]});function Ss(i){let e,r,t,a=[i[2],i[4]],n={};for(let l=0;l<a.length;l+=1)n=ot(n,a[l]);return{c(){e=F("span"),this.h()},l(l){e=L(l,"SPAN",{}),se(e).forEach(p),this.h()},h(){kr(e,n)},m(l,s){g(l,e,s),i[8](e),r||(t=[$i(i[2].action(e)),pr(e,"m-keydown",i[3])],r=!0)},p(l,s){kr(e,n=Yr(a,[s&4&&l[2],s&16&&l[4]]))},i:Qe,o:Qe,d(l){l&&p(e),i[8](null),r=!1,Kn(t)}}}function Es(i){let e;const r=i[7].default,t=Et(r,i,i[6],Ui);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&68)&&Tt(t,r,a,a[6],e?Ct(r,a[6],n,Rs):At(a[6]),Ui)},i(a){e||(c(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function Ts(i){let e,r,t,a;const n=[Es,Ss],l=[];function s(u,f){return u[1]?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=je()},l(u){r.l(u),t=je()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(oe(),b(l[o],1,1,()=>{l[o]=null}),ue(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function As(i,e,r){let t;const a=["asChild","el","thumb"];let n=It(e,a),{$$slots:l={},$$scope:s}=e,{asChild:u=!1}=e,{el:f=void 0}=e,{thumb:o}=e;const{getAttrs:m}=sl(),h=Bl(),d=m("thumb");function $(y){$r[y?"unshift":"push"](()=>{f=y,r(0,f)})}return i.$$set=y=>{e=ot(ot({},e),vr(y)),r(4,n=It(e,a)),"asChild"in y&&r(1,u=y.asChild),"el"in y&&r(0,f=y.el),"thumb"in y&&r(5,o=y.thumb),"$$scope"in y&&r(6,s=y.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&r(2,t=o),i.$$.dirty&4&&Object.assign(t,d)},[f,u,t,h,n,o,s,l,$]}class ol extends ct{constructor(e){super(),pt(this,e,As,Ts,_t,{asChild:1,el:0,thumb:5})}}function Gi(i){let e,r;return e=new il({props:{description:i[3]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&8&&(n.description=t[3]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Cs(i){let e,r,t,a,n,l,s,u=i[3]&&Gi(i);return{c(){e=F("button"),r=We(i[1]),t=S(),u&&u.c(),this.h()},l(f){e=L(f,"BUTTON",{class:!0});var o=se(e);r=Ge(o,i[1]),t=R(o),u&&u.l(o),o.forEach(p),this.h()},h(){Y(e,"class",a="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(i[2]===i[0]?`transition ease-in ${i[8].active}`:i[8].notActive)+" "+(i[4]?"flex-1":"")),te(e,"--bgColor",i[6]),te(e,"--activeColor",i[5])},m(f,o){g(f,e,o),K(e,r),K(e,t),u&&u.m(e,null),n=!0,l||(s=pr(e,"click",i[12]),l=!0)},p(f,[o]){(!n||o&2)&&it(r,f[1]),f[3]?u?(u.p(f,o),o&8&&c(u,1)):(u=Gi(f),u.c(),c(u,1),u.m(e,null)):u&&(oe(),b(u,1,1,()=>{u=null}),ue()),(!n||o&21&&a!==(a="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(f[2]===f[0]?`transition ease-in ${f[8].active}`:f[8].notActive)+" "+(f[4]?"flex-1":"")))&&Y(e,"class",a),o&64&&te(e,"--bgColor",f[6]),o&32&&te(e,"--activeColor",f[5])},i(f){n||(c(u),n=!0)},o(f){b(u),n=!1},d(f){f&&p(e),u&&u.d(),l=!1,s()}}}function Is(i,e,r){let t,a,n,l,s=Qe,u=()=>(s(),s=Rl(t,k=>r(11,l=k)),t);i.$$.on_destroy.push(()=>s());const{resolveColor:f}=xl();let{color:o="base-content"}=e,{id:m}=e,{label:h}=e,{activeId:d}=e,{description:$=void 0}=e,{fullWidth:y}=e,{background:M}=e;const U={notActive:"border-b border-base-100 text-base-content-muted hover:text-base-content hover:border-base-300",active:`border-b-2 border-[--activeColor] -mb-px text-[--activeColor] ${M?"bg-[--bgColor]":""}`};function P(k){Sl.call(this,i,k)}return i.$$set=k=>{"color"in k&&r(9,o=k.color),"id"in k&&r(0,m=k.id),"label"in k&&r(1,h=k.label),"activeId"in k&&r(2,d=k.activeId),"description"in k&&r(3,$=k.description),"fullWidth"in k&&r(4,y=k.fullWidth),"background"in k&&r(10,M=k.background)},i.$$.update=()=>{i.$$.dirty&512&&u(r(7,t=f(o))),i.$$.dirty&2048&&r(6,a=Mi(l).alpha(.05).css()),i.$$.dirty&2048&&r(5,n=Mi(l).css())},[m,h,d,$,y,n,a,t,U,o,M,l,P]}class ul extends ct{constructor(e){super(),pt(this,e,Is,Cs,_t,{color:9,id:0,label:1,activeId:2,description:3,fullWidth:4,background:10})}}function Wi(i,e,r){const t=i.slice();return t[5]=e[r],t}function Yi(i){let e,r;return e=new ol({props:{class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p:Qe,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function ji(i){let e,r;return e=new ol({props:{thumb:i[5],class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&16&&(n.thumb=t[5]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Ds(i){let e,r,t,a,n;r=new $s({props:{class:"absolute h-full bg-base-content before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-base-content after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-base-content/20 after:-z-10 after:rounded-r-full"}});let l=wr(i[4]??[]),s=[];for(let o=0;o<l.length;o+=1)s[o]=ji(Wi(i,l,o));const u=o=>b(s[o],1,1,()=>{s[o]=null});let f=null;return l.length||(f=Yi()),{c(){e=F("span"),C(r.$$.fragment),t=S();for(let o=0;o<s.length;o+=1)s[o].c();a=je(),f&&f.c(),this.h()},l(o){e=L(o,"SPAN",{class:!0});var m=se(e);A(r.$$.fragment,m),m.forEach(p),t=R(o);for(let h=0;h<s.length;h+=1)s[h].l(o);a=je(),f&&f.l(o),this.h()},h(){Y(e,"class","relative h-1 w-full grow rounded-l-full bg-base-300 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(o,m){g(o,e,m),T(r,e,null),g(o,t,m);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(o,m);g(o,a,m),f&&f.m(o,m),n=!0},p(o,m){if(m&16){l=wr(o[4]??[]);let h;for(h=0;h<l.length;h+=1){const d=Wi(o,l,h);s[h]?(s[h].p(d,m),c(s[h],1)):(s[h]=ji(d),s[h].c(),c(s[h],1),s[h].m(a.parentNode,a))}for(oe(),h=l.length;h<s.length;h+=1)u(h);ue(),!l.length&&f?f.p(o,m):l.length?f&&(oe(),b(f,1,1,()=>{f=null}),ue()):(f=Yi(),f.c(),c(f,1),f.m(a.parentNode,a))}},i(o){if(!n){c(r.$$.fragment,o);for(let m=0;m<l.length;m+=1)c(s[m]);n=!0}},o(o){b(r.$$.fragment,o),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)b(s[m]);n=!1},d(o){o&&(p(e),p(t),p(a)),E(r),Ri(s,o),f&&f.d(o)}}}function Os(i){let e,r,t;const a=[{class:zi("relative left-1.5 flex w-full touch-none select-none items-center",i[1])},i[2]];function n(s){i[3](s)}let l={$$slots:{default:[Ds,({thumbs:s})=>({4:s}),({thumbs:s})=>s?16:0]},$$scope:{ctx:i}};for(let s=0;s<a.length;s+=1)l=ot(l,a[s]);return i[0]!==void 0&&(l.value=i[0]),e=new bs({props:l}),$r.push(()=>al(e,"value",n)),{c(){C(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,u){T(e,s,u),t=!0},p(s,[u]){const f=u&6?Yr(a,[u&2&&{class:zi("relative left-1.5 flex w-full touch-none select-none items-center",s[1])},u&4&&nl(s[2])]):{};u&272&&(f.$$scope={dirty:u,ctx:s}),!r&&u&1&&(r=!0,f.value=s[0],Xn(()=>r=!1)),e.$set(f)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function qs(i,e,r){const t=["class","value"];let a=It(e,t),{class:n=void 0}=e,{value:l=[0]}=e;function s(u){l=u,r(0,l)}return i.$$set=u=>{e=ot(ot({},e),vr(u)),r(2,a=It(e,t)),"class"in u&&r(1,n=u.class),"value"in u&&r(0,l=u.value)},[l,n,a,s]}class Ns extends ct{constructor(e){super(),pt(this,e,qs,Os,_t,{class:1,value:0})}}function Ls(i){let e,r,t,a,n,l,s,u,f,o,m,h;const d=[zs,Ms],$=[];function y(G,I){return G[9]?0:1}a=y(i),n=$[a]=d[a](i);function M(G,I){return G[4]?Hs:Ps}let U=M(i),P=U(i);function k(G){i[29](G)}let j={min:i[0],max:i[1],step:i[5],sizeClass:i[14]};i[10]!==void 0&&(j.value=i[10]),u=new Ns({props:j}),$r.push(()=>al(u,"value",k));let ie=i[2]&&Qi(i);return{c(){e=F("div"),r=F("p"),t=F("span"),n.c(),l=S(),P.c(),s=S(),C(u.$$.fragment),o=S(),ie&&ie.c(),this.h()},l(G){e=L(G,"DIV",{class:!0});var I=se(e);r=L(I,"P",{class:!0});var z=se(r);t=L(z,"SPAN",{class:!0});var H=se(t);n.l(H),H.forEach(p),l=R(z),P.l(z),z.forEach(p),s=R(I),A(u.$$.fragment,I),o=R(I),ie&&ie.l(I),I.forEach(p),this.h()},h(){Y(t,"class","font-medium"),Y(r,"class","pb-2 pt-0.5 truncate text-xs"),Y(e,"class",m=`relative ${i[14]} mt-2 mb-10 select-none`)},m(G,I){g(G,e,I),K(e,r),K(r,t),$[a].m(t,null),K(r,l),P.m(r,null),K(e,s),T(u,e,null),K(e,o),ie&&ie.m(e,null),h=!0},p(G,I){let z=a;a=y(G),a===z?$[a].p(G,I):(oe(),b($[z],1,1,()=>{$[z]=null}),ue(),n=$[a],n?n.p(G,I):(n=$[a]=d[a](G),n.c()),c(n,1),n.m(t,null)),U===(U=M(G))&&P?P.p(G,I):(P.d(1),P=U(G),P&&(P.c(),P.m(r,null)));const H={};I[0]&1&&(H.min=G[0]),I[0]&2&&(H.max=G[1]),I[0]&32&&(H.step=G[5]),I[0]&16384&&(H.sizeClass=G[14]),!f&&I[0]&1024&&(f=!0,H.value=G[10],Xn(()=>f=!1)),u.$set(H),G[2]?ie?ie.p(G,I):(ie=Qi(G),ie.c(),ie.m(e,null)):ie&&(ie.d(1),ie=null),(!h||I[0]&16384&&m!==(m=`relative ${G[14]} mt-2 mb-10 select-none`))&&Y(e,"class",m)},i(G){h||(c(n),c(u.$$.fragment,G),h=!0)},o(G){b(n),b(u.$$.fragment,G),h=!1},d(G){G&&p(e),$[a].d(),P.d(),E(u),ie&&ie.d()}}}function Fs(i){let e,r;return e=new Wl({props:{inputType:"Slider",error:i[11],width:"170",height:"36"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2048&&(n.error=t[11]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Ms(i){let e,r;return{c(){e=We(i[6]),r=We(":")},l(t){e=Ge(t,i[6]),r=Ge(t,":")},m(t,a){g(t,e,a),g(t,r,a)},p(t,a){a[0]&64&&it(e,t[6])},i:Qe,o:Qe,d(t){t&&(p(e),p(r))}}}function zs(i){let e,r,t;return r=new il({props:{description:i[9],className:"mr-2"}}),{c(){e=We(i[6]),C(r.$$.fragment)},l(a){e=Ge(a,i[6]),A(r.$$.fragment,a)},m(a,n){g(a,e,n),T(r,a,n),t=!0},p(a,n){(!t||n[0]&64)&&it(e,a[6]);const l={};n[0]&512&&(l.description=a[9]),r.$set(l)},i(a){t||(c(r.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),t=!1},d(a){a&&p(e),E(r,a)}}}function Ps(i){let e,r=(i[8]?gr(i[15][i[7]],i[12]):i[15][i[7]])+"",t;return{c(){e=F("span"),t=We(r),this.h()},l(a){e=L(a,"SPAN",{class:!0});var n=se(e);t=Ge(n,r),n.forEach(p),this.h()},h(){Y(e,"class","text-xs")},m(a,n){g(a,e,n),K(e,t)},p(a,n){n[0]&37248&&r!==(r=(a[8]?gr(a[15][a[7]],a[12]):a[15][a[7]])+"")&&it(t,r)},d(a){a&&p(e)}}}function Hs(i){let e,r,t;return{c(){e=F("input"),this.h()},l(a){e=L(a,"INPUT",{type:!0,min:!0,max:!0,class:!0}),this.h()},h(){Y(e,"type","number"),Y(e,"min",i[0]),Y(e,"max",i[1]),e.value=i[13],Y(e,"class","w-auto h-8 px-2 mb-2 text-sm border border-base-300 rounded bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary/50")},m(a,n){g(a,e,n),r||(t=pr(e,"input",i[28]),r=!0)},p(a,n){n[0]&1&&Y(e,"min",a[0]),n[0]&2&&Y(e,"max",a[1]),n[0]&8192&&e.value!==a[13]&&(e.value=a[13])},d(a){a&&p(e),r=!1,t()}}}function Qi(i){let e,r=(i[8]?gr(i[0],i[12]):i[0])+"",t,a,n,l=(i[8]?gr(i[1],i[12]):i[1])+"",s;return{c(){e=F("span"),t=We(r),a=S(),n=F("span"),s=We(l),this.h()},l(u){e=L(u,"SPAN",{class:!0});var f=se(e);t=Ge(f,r),f.forEach(p),a=R(u),n=L(u,"SPAN",{class:!0});var o=se(n);s=Ge(o,l),o.forEach(p),this.h()},h(){Y(e,"class","absolute left-0 text-xs pt-1 -z-10"),Y(n,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(u,f){g(u,e,f),K(e,t),g(u,a,f),g(u,n,f),K(n,s)},p(u,f){f[0]&4353&&r!==(r=(u[8]?gr(u[0],u[12]):u[0])+"")&&it(t,r),f[0]&4354&&l!==(l=(u[8]?gr(u[1],u[12]):u[1])+"")&&it(s,l)},d(u){u&&(p(e),p(a),p(n))}}}function Vs(i){let e,r,t,a;const n=[Fs,Ls],l=[];function s(u,f){return u[11].length>0?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=je()},l(u){r.l(u),t=je()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,f){let o=e;e=s(u),e===o?l[e].p(u,f):(oe(),b(l[o],1,1,()=>{l[o]=null}),ue(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function Bs(i){let e,r;return e=new as({props:{enabled:i[3],$$slots:{default:[Vs]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8&&(n.enabled=t[3]),a[0]&65527|a[1]&64&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function xs(i,e,r){var Xe,ke,be;let t,a,n,l,s;const u=Jl();Rt(i,u,O=>r(15,s=O));let{title:f}=e,{name:o}=e,{min:m=0}=e,{max:h=100}=e,{step:d=1}=e,{showMaxMin:$=!0}=e,{hideDuringPrint:y=!0}=e,{defaultValue:M}=e,{range:U=void 0}=e,P=[0],{fmt:k="num0"}=e,{size:j=""}=e,ie,{description:G=void 0}=e,{data:I}=e,{maxColumn:z=void 0}=e,{minColumn:H=void 0}=e,{debounceDelay:Q=0}=e,{showInput:ne=!1}=e,W=[],q,X=!0;function me(O){clearTimeout(q),q=setTimeout(()=>{lt(u,s[o]=O,s)},Q)}na(()=>()=>{q&&clearTimeout(q)});function ye(O,re){if(O=Yl(O),isNaN(O)){W.push(`${re} must be a number`);return}return O}function Oe(O,re){O>re&&W.push("min cannot be greater than max")}let le=!1;const ee=O=>({small:"w-40",medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[O.toLowerCase()]||"w-40";if(I){try{Ul(I,[],[U,M,H,z])}catch(O){W=[...W,O.message]}typeof M=="string"&&((Xe=I[0])!=null&&Xe[M])&&(P=[I[0][M]]),U&&(m=I.map(O=>O[U]).reduce((O,re)=>Math.min(O,re)),h=I.map(O=>O[U]).reduce((O,re)=>Math.max(O,re))),z&&((ke=I[0])!=null&&ke[z])&&(h=I[0][z]),H&&((be=I[0])!=null&&be[H])&&(m=I[0][H])}try{Al({name:o})}catch(O){W.push(O.message)}const V=()=>{a>1e3&&d<n&&r(5,d=n)};function ae(O,re=null){const fe=Math.round(O),de=Math.max(m,Math.min(h,isNaN(fe)?m:fe));re&&(re.value=de),r(10,P=[de]),me(P)}const ve=O=>ae(O.target.value,O.target);function Se(O){P=O,r(10,P),r(18,M),r(21,I),r(26,le),r(0,m),r(11,W),r(1,h)}return i.$$set=O=>{"title"in O&&r(6,f=O.title),"name"in O&&r(7,o=O.name),"min"in O&&r(0,m=O.min),"max"in O&&r(1,h=O.max),"step"in O&&r(5,d=O.step),"showMaxMin"in O&&r(2,$=O.showMaxMin),"hideDuringPrint"in O&&r(3,y=O.hideDuringPrint),"defaultValue"in O&&r(18,M=O.defaultValue),"range"in O&&r(19,U=O.range),"fmt"in O&&r(8,k=O.fmt),"size"in O&&r(20,j=O.size),"description"in O&&r(9,G=O.description),"data"in O&&r(21,I=O.data),"maxColumn"in O&&r(22,z=O.maxColumn),"minColumn"in O&&r(23,H=O.minColumn),"debounceDelay"in O&&r(24,Q=O.debounceDelay),"showInput"in O&&r(4,ne=O.showInput)},i.$$.update=()=>{i.$$.dirty[0]&4&&r(2,$=$t($)),i.$$.dirty[0]&8&&r(3,y=$t(y)),i.$$.dirty[0]&16&&r(4,ne=$t(ne)),i.$$.dirty[0]&1&&m!==void 0&&r(0,m=ye(m,"min")),i.$$.dirty[0]&2&&h!==void 0&&r(1,h=ye(h,"max")),i.$$.dirty[0]&3&&h!==void 0&&m!==void 0&&Oe(m,h),i.$$.dirty[0]&69470211&&M!==void 0&&!I&&!le&&(r(18,M=ye(M,"defaultValue")),M<m?W.push("defaultValue cannot be less than min"):M>h&&W.push("defaultValue cannot be greater than max"),r(10,P=[M]),r(26,le=!0)),i.$$.dirty[0]&33555584&&P&&P.length>0&&(X?(lt(u,s[o]=P,s),r(25,X=!1)):me(P)),i.$$.dirty[0]&1048576&&r(14,t=ee(j)),i.$$.dirty[0]&256&&(k?r(12,ie=Gl(k,"number")):r(12,ie=void 0)),i.$$.dirty[0]&3&&r(27,a=h-m),i.$$.dirty[0]&134217728&&(n=a/1e3),i.$$.dirty[0]&134217728&&a>1e3&&V(),i.$$.dirty[0]&1025&&r(13,l=P&&P.length>0?Math.round(P[0]):m)},[m,h,$,y,ne,d,f,o,k,G,P,W,ie,l,t,s,u,ae,M,U,j,I,z,H,Q,X,le,a,ve,Se]}class Us extends ct{constructor(e){super(),pt(this,e,xs,Bs,_t,{title:6,name:7,min:0,max:1,step:5,showMaxMin:2,hideDuringPrint:3,defaultValue:18,range:19,fmt:8,size:20,description:9,data:21,maxColumn:22,minColumn:23,debounceDelay:24,showInput:4},null,[-1,-1])}}function Gs(i){let e,r;const t=[i[4],{data:He.isQuery(i[7])?Array.from(i[7]):i[7]}];let a={};for(let n=0;n<t.length;n+=1)a=ot(a,t[n]);return e=new Us({props:a}),{c(){C(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,l){T(e,n,l),r=!0},p(n,l){const s=l&144?Yr(t,[l&16&&nl(n[4]),l&128&&{data:He.isQuery(n[7])?Array.from(n[7]):n[7]}]):{};e.$set(s)},i(n){r||(c(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function Ji(i){let e,r;return e=new Ql({props:{emptyMessage:i[2],emptySet:i[1],chartType:Qs,isInitial:i[3]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&4&&(n.emptyMessage=t[2]),a&2&&(n.emptySet=t[1]),a&8&&(n.isInitial=t[3]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Ws(i){let e,r,t=!i[4].placeholder&&Ji(i);return{c(){e=F("span"),t&&t.c(),this.h()},l(a){e=L(a,"SPAN",{slot:!0});var n=se(e);t&&t.l(n),n.forEach(p),this.h()},h(){Y(e,"slot","empty")},m(a,n){g(a,e,n),t&&t.m(e,null),r=!0},p(a,n){a[4].placeholder?t&&(oe(),b(t,1,1,()=>{t=null}),ue()):t?(t.p(a,n),n&16&&c(t,1)):(t=Ji(a),t.c(),c(t,1),t.m(e,null))},i(a){r||(c(t),r=!0)},o(a){b(t),r=!1},d(a){a&&p(e),t&&t.d()}}}function Ys(i){let e,r="Loading...";return{c(){e=F("span"),e.textContent=r,this.h()},l(t){e=L(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),yt(e)!=="svelte-exu0be"&&(e.textContent=r),this.h()},h(){Y(e,"slot","skeleton"),Y(e,"class","text-gray-500")},m(t,a){g(t,e,a)},p:Qe,d(t){t&&p(e)}}}function js(i){let e,r;return e=new jl({props:{data:i[0],$$slots:{skeleton:[Ys],empty:[Ws],default:[Gs,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.data=t[0]),a&414&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}let Qs="Slider";function Js(i,e,r){let t,{data:a}=e;const n=He.isQuery(a)?a.hash:void 0;let l=(a==null?void 0:a.hash)===n,{emptySet:s=void 0}=e,{emptyMessage:u=void 0}=e;return i.$$set=f=>{r(6,e=ot(ot({},e),vr(f))),"data"in f&&r(0,a=f.data),"emptySet"in f&&r(1,s=f.emptySet),"emptyMessage"in f&&r(2,u=f.emptyMessage)},i.$$.update=()=>{i.$$.dirty&1&&r(3,l=(a==null?void 0:a.hash)===n),r(4,t=Object.fromEntries(Object.entries(e).filter(([,f])=>f!==void 0)))},e=vr(e),[a,s,u,l,t]}class Zs extends ct{constructor(e){super(),pt(this,e,Js,js,_t,{data:0,emptySet:1,emptyMessage:2})}}const{window:Xr}=is;function Zi(i,e,r){const t=i.slice();return t[16]=e[r],t}function Ki(i){let e,r,t=wr(i[5].tabs),a=[];for(let l=0;l<t.length;l+=1)a[l]=Xi(Zi(i,t,l));const n=l=>b(a[l],1,1,()=>{a[l]=null});return{c(){e=F("nav");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=L(l,"NAV",{class:!0});var s=se(e);for(let u=0;u<a.length;u+=1)a[u].l(s);s.forEach(p),this.h()},h(){Y(e,"class","my-5 flex flex-wrap gap-x-0 gap-y-1 border-b")},m(l,s){g(l,e,s);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null);r=!0},p(l,s){if(s&32942){t=wr(l[5].tabs);let u;for(u=0;u<t.length;u+=1){const f=Zi(l,t,u);a[u]?(a[u].p(f,s),c(a[u],1)):(a[u]=Xi(f),a[u].c(),c(a[u],1),a[u].m(e,null))}for(oe(),u=t.length;u<a.length;u+=1)n(u);ue()}},i(l){if(!r){for(let s=0;s<t.length;s+=1)c(a[s]);r=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)b(a[s]);r=!1},d(l){l&&p(e),Ri(a,l)}}}function Ks(i){let e,r;const t=i[9].default,a=Et(t,i,i[15],null);return{c(){a&&a.c(),e=S()},l(n){a&&a.l(n),e=R(n)},m(n,l){a&&a.m(n,l),g(n,e,l),r=!0},p(n,l){a&&a.p&&(!r||l&32768)&&Tt(a,t,n,n[15],r?Ct(t,n[15],l,null):At(n[15]),null)},i(n){r||(c(a,n),r=!0)},o(n){b(a,n),r=!1},d(n){n&&p(e),a&&a.d(n)}}}function Xi(i){let e,r;function t(){return i[14](i[16])}return e=new ul({props:{id:i[16].id,label:i[16].label,description:i[16].description,fullWidth:$t(i[2]),background:$t(i[3]),color:i[1],activeId:i[5].activeId,$$slots:{default:[Ks]},$$scope:{ctx:i}}}),e.$on("click",t),{c(){C(e.$$.fragment)},l(a){A(e.$$.fragment,a)},m(a,n){T(e,a,n),r=!0},p(a,n){i=a;const l={};n&32&&(l.id=i[16].id),n&32&&(l.label=i[16].label),n&32&&(l.description=i[16].description),n&4&&(l.fullWidth=$t(i[2])),n&8&&(l.background=$t(i[3])),n&2&&(l.color=i[1]),n&32&&(l.activeId=i[5].activeId),n&32768&&(l.$$scope={dirty:n,ctx:i}),e.$set(l)},i(a){r||(c(e.$$.fragment,a),r=!0)},o(a){b(e.$$.fragment,a),r=!1},d(a){E(e,a)}}}function Xs(i){let e,r,t,a,n,l,s=(!i[4]||!i[0])&&Ki(i);const u=i[9].default,f=Et(u,i,i[15],null);return{c(){e=F("section"),s&&s.c(),r=S(),t=F("div"),f&&f.c(),this.h()},l(o){e=L(o,"SECTION",{});var m=se(e);s&&s.l(m),r=R(m),t=L(m,"DIV",{class:!0});var h=se(t);f&&f.l(h),h.forEach(p),m.forEach(p),this.h()},h(){Y(t,"class","text-base")},m(o,m){g(o,e,m),s&&s.m(e,null),K(e,r),K(e,t),f&&f.m(t,null),a=!0,n||(l=[pr(Xr,"beforeprint",i[10]),pr(Xr,"afterprint",i[11]),pr(Xr,"export-beforeprint",i[12]),pr(Xr,"export-afterprint",i[13])],n=!0)},p(o,[m]){!o[4]||!o[0]?s?(s.p(o,m),m&17&&c(s,1)):(s=Ki(o),s.c(),c(s,1),s.m(e,r)):s&&(oe(),b(s,1,1,()=>{s=null}),ue()),f&&f.p&&(!a||m&32768)&&Tt(f,u,o,o[15],a?Ct(u,o[15],m,null):At(o[15]),null)},i(o){a||(c(s),c(f,o),a=!0)},o(o){b(s),b(f,o),a=!1},d(o){o&&p(e),s&&s.d(),f&&f.d(o),n=!1,Kn(l)}}}function eo(i,e,r){let t,{$$slots:a={},$$scope:n}=e,{id:l}=e,{color:s=void 0}=e,{printShowAll:u=!0}=e,f=!1,{fullWidth:o=!1}=e,{background:m=!1}=e;const h=yr({tabs:[],activeId:null});Rt(i,h,k=>r(5,t=k)),na(()=>{var ie,G;const j=new URL(window.location.href).searchParams.get(l);j?t.tabs.find(I=>I.id===j)?lt(h,t.activeId=j,t):lt(h,t.activeId=(ie=t.tabs[0])==null?void 0:ie.id,t):lt(h,t.activeId=(G=t.tabs[0])==null?void 0:G.id,t)}),wi("TABS_STORE",h);const d=k=>{lt(h,t.activeId=k,t)},$=()=>r(4,f=!0),y=()=>r(4,f=!1),M=()=>r(4,f=!0),U=()=>r(4,f=!1),P=k=>d(k.id);return i.$$set=k=>{"id"in k&&r(8,l=k.id),"color"in k&&r(1,s=k.color),"printShowAll"in k&&r(0,u=k.printShowAll),"fullWidth"in k&&r(2,o=k.fullWidth),"background"in k&&r(3,m=k.background),"$$scope"in k&&r(15,n=k.$$scope)},i.$$.update=()=>{var k;if(i.$$.dirty&1&&r(0,u=$t(u)),i.$$.dirty&288&&!t.activeId&&t.tabs.length&&!l&&lt(h,t.activeId=t.tabs[0].id,t),i.$$.dirty&288&&!t.tabs.find(j=>j.id===t.activeId)&&!l&&lt(h,t.activeId=(k=t.tabs[0])==null?void 0:k.id,t),i.$$.dirty&2&&lt(h,t.color=s,t),i.$$.dirty&16&&lt(h,t.printing=f,t),i.$$.dirty&1&&lt(h,t.printShowAll=u,t),i.$$.dirty&288&&t.activeId&&l){const j=new URL(window.location.href);j.searchParams.set(l,t.activeId),history.replaceState({},"",j)}},[u,s,o,m,f,t,h,d,l,a,$,y,M,U,P,n]}class to extends ct{constructor(e){super(),pt(this,e,eo,Xs,_t,{id:8,color:1,printShowAll:0,fullWidth:2,background:3})}}function en(i,e,r){const t=i.slice();return t[11]=e[r],t}function ro(i){let e,r,t,a,n=wr(i[2].tabs),l=[];for(let o=0;o<n.length;o+=1)l[o]=tn(en(i,n,o));const s=o=>b(l[o],1,1,()=>{l[o]=null}),u=i[7].default,f=Et(u,i,i[8],null);return{c(){e=F("nav");for(let o=0;o<l.length;o+=1)l[o].c();r=S(),t=F("div"),f&&f.c(),this.h()},l(o){e=L(o,"NAV",{class:!0});var m=se(e);for(let d=0;d<l.length;d+=1)l[d].l(m);m.forEach(p),r=R(o),t=L(o,"DIV",{class:!0});var h=se(t);f&&f.l(h),h.forEach(p),this.h()},h(){Y(e,"class","my-6 flex flex-wrap gap-x-1 gap-y-1 border-b"),Y(t,"class","text-base")},m(o,m){g(o,e,m);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(e,null);g(o,r,m),g(o,t,m),f&&f.m(t,null),a=!0},p(o,m){if(m&277){n=wr(o[2].tabs);let h;for(h=0;h<n.length;h+=1){const d=en(o,n,h);l[h]?(l[h].p(d,m),c(l[h],1)):(l[h]=tn(d),l[h].c(),c(l[h],1),l[h].m(e,null))}for(oe(),h=n.length;h<l.length;h+=1)s(h);ue()}f&&f.p&&(!a||m&256)&&Tt(f,u,o,o[8],a?Ct(u,o[8],m,null):At(o[8]),null)},i(o){if(!a){for(let m=0;m<n.length;m+=1)c(l[m]);c(f,o),a=!0}},o(o){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)b(l[m]);b(f,o),a=!1},d(o){o&&(p(e),p(r),p(t)),Ri(l,o),f&&f.d(o)}}}function ao(i){let e,r,t=i[1]&&rn(i);return{c(){t&&t.c(),e=je()},l(a){t&&t.l(a),e=je()},m(a,n){t&&t.m(a,n),g(a,e,n),r=!0},p(a,n){a[1]?t?(t.p(a,n),n&2&&c(t,1)):(t=rn(a),t.c(),c(t,1),t.m(e.parentNode,e)):t&&(oe(),b(t,1,1,()=>{t=null}),ue())},i(a){r||(c(t),r=!0)},o(a){b(t),r=!1},d(a){a&&p(e),t&&t.d(a)}}}function io(i){let e,r;const t=i[7].default,a=Et(t,i,i[8],null);return{c(){a&&a.c(),e=S()},l(n){a&&a.l(n),e=R(n)},m(n,l){a&&a.m(n,l),g(n,e,l),r=!0},p(n,l){a&&a.p&&(!r||l&256)&&Tt(a,t,n,n[8],r?Ct(t,n[8],l,null):At(n[8]),null)},i(n){r||(c(a,n),r=!0)},o(n){b(a,n),r=!1},d(n){n&&p(e),a&&a.d(n)}}}function tn(i){let e,r;return e=new ul({props:{id:i[11].id,label:i[11].label,activeId:i[0],color:i[4],$$slots:{default:[io]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&4&&(n.id=t[11].id),a&4&&(n.label=t[11].label),a&1&&(n.activeId=t[0]),a&256&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function rn(i){let e,r;const t=i[7].default,a=Et(t,i,i[8],null);return{c(){e=F("div"),a&&a.c(),this.h()},l(n){e=L(n,"DIV",{class:!0});var l=se(e);a&&a.l(l),l.forEach(p),this.h()},h(){Y(e,"class","mb-5")},m(n,l){g(n,e,l),a&&a.m(e,null),r=!0},p(n,l){a&&a.p&&(!r||l&256)&&Tt(a,t,n,n[8],r?Ct(t,n[8],l,null):At(n[8]),null)},i(n){r||(c(a,n),r=!0)},o(n){b(a,n),r=!1},d(n){n&&p(e),a&&a.d(n)}}}function no(i){let e,r,t,a;const n=[ao,ro],l=[];function s(u,f){return!u[2].printing||!u[2].printShowAll?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=je()},l(u){r.l(u),t=je()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(oe(),b(l[o],1,1,()=>{l[o]=null}),ue(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function lo(i,e,r){let t,{$$slots:a={},$$scope:n}=e,{label:l}=e,{id:s}=e,{selected:u}=e,{description:f=void 0}=e;const o=Zl(),m=Zn("TABS_STORE");Rt(i,m,$=>r(2,t=$));const h=()=>{lt(m,t.tabs=[...t.tabs.filter($=>$.internalId!==o),{internalId:o,id:s,label:l,description:f}],t),u&&lt(m,t.activeId=s,t)};na(()=>m.subscribe(({activeId:$})=>{r(1,u=$===s)})),el(()=>{lt(m,t.tabs=t.tabs.filter($=>$.internalId!==o),t)});const d=t.color;return i.$$set=$=>{"label"in $&&r(5,l=$.label),"id"in $&&r(0,s=$.id),"selected"in $&&r(1,u=$.selected),"description"in $&&r(6,f=$.description),"$$scope"in $&&r(8,n=$.$$scope)},i.$$.update=()=>{i.$$.dirty&33&&r(0,s=s??l),i.$$.dirty&2&&r(1,u=$t(u)),i.$$.dirty&33&&s&&l&&h()},[s,u,t,m,d,l,f,a,n]}class an extends ct{constructor(e){super(),pt(this,e,lo,no,_t,{label:5,id:0,selected:1,description:6})}}function Si(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var br=Si();function fl(i){br=i}var Wr={exec:()=>null};function Be(i,e=""){let r=typeof i=="string"?i:i.source,t={replace:(a,n)=>{let l=typeof n=="string"?n:n.source;return l=l.replace(st.caret,"$1"),r=r.replace(a,l),t},getRegex:()=>new RegExp(r,e)};return t}var so=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),st={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},oo=/^(?:[ \t]*(?:\n|$))+/,uo=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,fo=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,jr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mo=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ei=/(?:[*+-]|\d{1,9}[.)])/,ml=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,dl=Be(ml).replace(/bull/g,Ei).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),_o=Be(ml).replace(/bull/g,Ei).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ti=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,co=/^[^\n]+/,Ai=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,po=Be(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ai).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ho=Be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ei).getRegex(),la="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ci=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,bo=Be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ci).replace("tag",la).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_l=Be(Ti).replace("hr",jr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",la).getRegex(),go=Be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",_l).getRegex(),Ii={blockquote:go,code:uo,def:po,fences:fo,heading:mo,hr:jr,html:bo,lheading:dl,list:ho,newline:oo,paragraph:_l,table:Wr,text:co},nn=Be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",jr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",la).getRegex(),yo={...Ii,lheading:_o,table:nn,paragraph:Be(Ti).replace("hr",jr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",la).getRegex()},vo={...Ii,html:Be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ci).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Wr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Be(Ti).replace("hr",jr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",dl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ko=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,wo=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,cl=/^( {2,}|\\)\n(?!\s*$)/,$o=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,sa=/[\p{P}\p{S}]/u,Di=/[\s\p{P}\p{S}]/u,pl=/[^\s\p{P}\p{S}]/u,Ro=Be(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Di).getRegex(),hl=/(?!~)[\p{P}\p{S}]/u,So=/(?!~)[\s\p{P}\p{S}]/u,Eo=/(?:[^\s\p{P}\p{S}]|~)/u,To=Be(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",so?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),bl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ao=Be(bl,"u").replace(/punct/g,sa).getRegex(),Co=Be(bl,"u").replace(/punct/g,hl).getRegex(),gl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Io=Be(gl,"gu").replace(/notPunctSpace/g,pl).replace(/punctSpace/g,Di).replace(/punct/g,sa).getRegex(),Do=Be(gl,"gu").replace(/notPunctSpace/g,Eo).replace(/punctSpace/g,So).replace(/punct/g,hl).getRegex(),Oo=Be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,pl).replace(/punctSpace/g,Di).replace(/punct/g,sa).getRegex(),qo=Be(/\\(punct)/,"gu").replace(/punct/g,sa).getRegex(),No=Be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Lo=Be(Ci).replace("(?:-->|$)","-->").getRegex(),Fo=Be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Lo).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ra=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Mo=Be(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ra).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),yl=Be(/^!?\[(label)\]\[(ref)\]/).replace("label",ra).replace("ref",Ai).getRegex(),vl=Be(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ai).getRegex(),zo=Be("reflink|nolink(?!\\()","g").replace("reflink",yl).replace("nolink",vl).getRegex(),ln=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Oi={_backpedal:Wr,anyPunctuation:qo,autolink:No,blockSkip:To,br:cl,code:wo,del:Wr,emStrongLDelim:Ao,emStrongRDelimAst:Io,emStrongRDelimUnd:Oo,escape:ko,link:Mo,nolink:vl,punctuation:Ro,reflink:yl,reflinkSearch:zo,tag:Fo,text:$o,url:Wr},Po={...Oi,link:Be(/^!?\[(label)\]\((.*?)\)/).replace("label",ra).getRegex(),reflink:Be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ra).getRegex()},yi={...Oi,emStrongRDelimAst:Do,emStrongLDelim:Co,url:Be(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ln).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Be(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ln).getRegex()},Ho={...yi,br:Be(cl).replace("{2,}","*").getRegex(),text:Be(yi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ea={normal:Ii,gfm:yo,pedantic:vo},xr={normal:Oi,gfm:yi,breaks:Ho,pedantic:Po},Vo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sn=i=>Vo[i];function vt(i,e){if(e){if(st.escapeTest.test(i))return i.replace(st.escapeReplace,sn)}else if(st.escapeTestNoEncode.test(i))return i.replace(st.escapeReplaceNoEncode,sn);return i}function on(i){try{i=encodeURI(i).replace(st.percentDecode,"%")}catch{return null}return i}function un(i,e){var n;let r=i.replace(st.findPipe,(l,s,u)=>{let f=!1,o=s;for(;--o>=0&&u[o]==="\\";)f=!f;return f?"|":" |"}),t=r.split(st.splitPipe),a=0;if(t[0].trim()||t.shift(),t.length>0&&!((n=t.at(-1))!=null&&n.trim())&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;a<t.length;a++)t[a]=t[a].trim().replace(st.slashPipe,"|");return t}function Ur(i,e,r){let t=i.length;if(t===0)return"";let a=0;for(;a<t&&i.charAt(t-a-1)===e;)a++;return i.slice(0,t-a)}function Bo(i,e){if(i.indexOf(e[1])===-1)return-1;let r=0;for(let t=0;t<i.length;t++)if(i[t]==="\\")t++;else if(i[t]===e[0])r++;else if(i[t]===e[1]&&(r--,r<0))return t;return r>0?-2:-1}function fn(i,e,r,t,a){let n=e.href,l=e.title||null,s=i[1].replace(a.other.outputLinkReplace,"$1");t.state.inLink=!0;let u={type:i[0].charAt(0)==="!"?"image":"link",raw:r,href:n,title:l,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,u}function xo(i,e,r){let t=i.match(r.other.indentCodeCompensation);if(t===null)return e;let a=t[1];return e.split(`
`).map(n=>{let l=n.match(r.other.beginningSpace);if(l===null)return n;let[s]=l;return s.length>=a.length?n.slice(a.length):n}).join(`
`)}var aa=class{constructor(i){Je(this,"options");Je(this,"rules");Je(this,"lexer");this.options=i||br}space(i){let e=this.rules.block.newline.exec(i);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(i){let e=this.rules.block.code.exec(i);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ur(r,`
`)}}}fences(i){let e=this.rules.block.fences.exec(i);if(e){let r=e[0],t=xo(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:t}}}heading(i){let e=this.rules.block.heading.exec(i);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let t=Ur(r,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(r=t.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(i){let e=this.rules.block.hr.exec(i);if(e)return{type:"hr",raw:Ur(e[0],`
`)}}blockquote(i){let e=this.rules.block.blockquote.exec(i);if(e){let r=Ur(e[0],`
`).split(`
`),t="",a="",n=[];for(;r.length>0;){let l=!1,s=[],u;for(u=0;u<r.length;u++)if(this.rules.other.blockquoteStart.test(r[u]))s.push(r[u]),l=!0;else if(!l)s.push(r[u]);else break;r=r.slice(u);let f=s.join(`
`),o=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${f}`:f,a=a?`${a}
${o}`:o;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(o,n,!0),this.lexer.state.top=m,r.length===0)break;let h=n.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){let d=h,$=d.raw+`
`+r.join(`
`),y=this.blockquote($);n[n.length-1]=y,t=t.substring(0,t.length-d.raw.length)+y.raw,a=a.substring(0,a.length-d.text.length)+y.text;break}else if((h==null?void 0:h.type)==="list"){let d=h,$=d.raw+`
`+r.join(`
`),y=this.list($);n[n.length-1]=y,t=t.substring(0,t.length-h.raw.length)+y.raw,a=a.substring(0,a.length-d.raw.length)+y.raw,r=$.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:n,text:a}}}list(i){let e=this.rules.block.list.exec(i);if(e){let r=e[1].trim(),t=r.length>1,a={type:"list",raw:"",ordered:t,start:t?+r.slice(0,-1):"",loose:!1,items:[]};r=t?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=t?r:"[*+-]");let n=this.rules.other.listItemRegex(r),l=!1;for(;i;){let u=!1,f="",o="";if(!(e=n.exec(i))||this.rules.block.hr.test(i))break;f=e[0],i=i.substring(f.length);let m=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,U=>" ".repeat(3*U.length)),h=i.split(`
`,1)[0],d=!m.trim(),$=0;if(this.options.pedantic?($=2,o=m.trimStart()):d?$=e[1].length+1:($=e[2].search(this.rules.other.nonSpaceChar),$=$>4?1:$,o=m.slice($),$+=e[1].length),d&&this.rules.other.blankLine.test(h)&&(f+=h+`
`,i=i.substring(h.length+1),u=!0),!u){let U=this.rules.other.nextBulletRegex($),P=this.rules.other.hrRegex($),k=this.rules.other.fencesBeginRegex($),j=this.rules.other.headingBeginRegex($),ie=this.rules.other.htmlBeginRegex($);for(;i;){let G=i.split(`
`,1)[0],I;if(h=G,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),I=h):I=h.replace(this.rules.other.tabCharGlobal,"    "),k.test(h)||j.test(h)||ie.test(h)||U.test(h)||P.test(h))break;if(I.search(this.rules.other.nonSpaceChar)>=$||!h.trim())o+=`
`+I.slice($);else{if(d||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||k.test(m)||j.test(m)||P.test(m))break;o+=`
`+h}!d&&!h.trim()&&(d=!0),f+=G+`
`,i=i.substring(G.length+1),m=I.slice($)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(l=!0));let y=null,M;this.options.gfm&&(y=this.rules.other.listIsTask.exec(o),y&&(M=y[0]!=="[ ] ",o=o.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:f,task:!!y,checked:M,loose:!1,text:o,tokens:[]}),a.raw+=f}let s=a.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){let f=a.items[u].tokens.filter(m=>m.type==="space"),o=f.length>0&&f.some(m=>this.rules.other.anyLine.test(m.raw));a.loose=o}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(i){let e=this.rules.block.html.exec(i);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(i){let e=this.rules.block.def.exec(i);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:t,title:a}}}table(i){var l;let e=this.rules.block.table.exec(i);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=un(e[1]),t=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===t.length){for(let s of t)this.rules.other.tableAlignRight.test(s)?n.align.push("right"):this.rules.other.tableAlignCenter.test(s)?n.align.push("center"):this.rules.other.tableAlignLeft.test(s)?n.align.push("left"):n.align.push(null);for(let s=0;s<r.length;s++)n.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:n.align[s]});for(let s of a)n.rows.push(un(s,n.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:n.align[f]})));return n}}lheading(i){let e=this.rules.block.lheading.exec(i);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(i){let e=this.rules.block.paragraph.exec(i);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(i){let e=this.rules.block.text.exec(i);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(i){let e=this.rules.inline.escape.exec(i);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(i){let e=this.rules.inline.tag.exec(i);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(i){let e=this.rules.inline.link.exec(i);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let n=Ur(r.slice(0,-1),"\\");if((r.length-n.length)%2===0)return}else{let n=Bo(e[2],"()");if(n===-2)return;if(n>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+n;e[2]=e[2].substring(0,n),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let t=e[2],a="";if(this.options.pedantic){let n=this.rules.other.pedanticHrefTitle.exec(t);n&&(t=n[1],a=n[3])}else a=e[3]?e[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?t=t.slice(1):t=t.slice(1,-1)),fn(e,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(i,e){let r;if((r=this.rules.inline.reflink.exec(i))||(r=this.rules.inline.nolink.exec(i))){let t=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=e[t.toLowerCase()];if(!a){let n=r[0].charAt(0);return{type:"text",raw:n,text:n}}return fn(r,a,r[0],this.lexer,this.rules)}}emStrong(i,e,r=""){let t=this.rules.inline.emStrongLDelim.exec(i);if(!(!t||t[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[2])||!r||this.rules.inline.punctuation.exec(r))){let a=[...t[0]].length-1,n,l,s=a,u=0,f=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*i.length+a);(t=f.exec(e))!=null;){if(n=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!n)continue;if(l=[...n].length,t[3]||t[4]){s+=l;continue}else if((t[5]||t[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(s-=l,s>0)continue;l=Math.min(l,l+s+u);let o=[...t[0]][0].length,m=i.slice(0,a+t.index+o+l);if(Math.min(a,l)%2){let d=m.slice(1,-1);return{type:"em",raw:m,text:d,tokens:this.lexer.inlineTokens(d)}}let h=m.slice(2,-2);return{type:"strong",raw:m,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(i){let e=this.rules.inline.code.exec(i);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(r),a=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return t&&a&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(i){let e=this.rules.inline.br.exec(i);if(e)return{type:"br",raw:e[0]}}del(i){let e=this.rules.inline.del.exec(i);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(i){let e=this.rules.inline.autolink.exec(i);if(e){let r,t;return e[2]==="@"?(r=e[1],t="mailto:"+r):(r=e[1],t=r),{type:"link",raw:e[0],text:r,href:t,tokens:[{type:"text",raw:r,text:r}]}}}url(i){var r;let e;if(e=this.rules.inline.url.exec(i)){let t,a;if(e[2]==="@")t=e[0],a="mailto:"+t;else{let n;do n=e[0],e[0]=((r=this.rules.inline._backpedal.exec(e[0]))==null?void 0:r[0])??"";while(n!==e[0]);t=e[0],e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:t,href:a,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(i){let e=this.rules.inline.text.exec(i);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},ht=class vi{constructor(e){Je(this,"tokens");Je(this,"options");Je(this,"state");Je(this,"tokenizer");Je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||br,this.options.tokenizer=this.options.tokenizer||new aa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:st,block:ea.normal,inline:xr.normal};this.options.pedantic?(r.block=ea.pedantic,r.inline=xr.pedantic):this.options.gfm&&(r.block=ea.gfm,this.options.breaks?r.inline=xr.breaks:r.inline=xr.gfm),this.tokenizer.rules=r}static get rules(){return{block:ea,inline:xr}}static lex(e,r){return new vi(r).lex(e)}static lexInline(e,r){return new vi(r).inlineTokens(e)}lex(e){e=e.replace(st.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let t=this.inlineQueue[r];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],t=!1){var a,n,l;for(this.options.pedantic&&(e=e.replace(st.tabCharGlobal,"    ").replace(st.spaceLine,""));e;){let s;if((n=(a=this.options.extensions)==null?void 0:a.block)!=null&&n.some(f=>(s=f.call({lexer:this},e,r))?(e=e.substring(s.raw.length),r.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let f=r.at(-1);s.raw.length===1&&f!==void 0?f.raw+=`
`:r.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let f=r.at(-1);(f==null?void 0:f.type)==="paragraph"||(f==null?void 0:f.type)==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+s.raw,f.text+=`
`+s.text,this.inlineQueue.at(-1).src=f.text):r.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let f=r.at(-1);(f==null?void 0:f.type)==="paragraph"||(f==null?void 0:f.type)==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+s.raw,f.text+=`
`+s.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},r.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),r.push(s);continue}let u=e;if((l=this.options.extensions)!=null&&l.startBlock){let f=1/0,o=e.slice(1),m;this.options.extensions.startBlock.forEach(h=>{m=h.call({lexer:this},o),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(u=e.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){let f=r.at(-1);t&&(f==null?void 0:f.type)==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+s.raw,f.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):r.push(s),t=u.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let f=r.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+s.raw,f.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):r.push(s);continue}if(e){let f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){var u,f,o,m,h;let t=e,a=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,a.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let n;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)n=a[2]?a[2].length:0,t=t.slice(0,a.index+n)+"["+"a".repeat(a[0].length-n-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=((f=(u=this.options.hooks)==null?void 0:u.emStrongMask)==null?void 0:f.call({lexer:this},t))??t;let l=!1,s="";for(;e;){l||(s=""),l=!1;let d;if((m=(o=this.options.extensions)==null?void 0:o.inline)!=null&&m.some(y=>(d=y.call({lexer:this},e,r))?(e=e.substring(d.raw.length),r.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let y=r.at(-1);d.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=d.raw,y.text+=d.text):r.push(d);continue}if(d=this.tokenizer.emStrong(e,t,s)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.del(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),r.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),r.push(d);continue}let $=e;if((h=this.options.extensions)!=null&&h.startInline){let y=1/0,M=e.slice(1),U;this.options.extensions.startInline.forEach(P=>{U=P.call({lexer:this},M),typeof U=="number"&&U>=0&&(y=Math.min(y,U))}),y<1/0&&y>=0&&($=e.substring(0,y+1))}if(d=this.tokenizer.inlineText($)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(s=d.raw.slice(-1)),l=!0;let y=r.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=d.raw,y.text+=d.text):r.push(d);continue}if(e){let y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return r}},ia=class{constructor(i){Je(this,"options");Je(this,"parser");this.options=i||br}space(i){return""}code({text:i,lang:e,escaped:r}){var n;let t=(n=(e||"").match(st.notSpaceStart))==null?void 0:n[0],a=i.replace(st.endingNewline,"")+`
`;return t?'<pre><code class="language-'+vt(t)+'">'+(r?a:vt(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:vt(a,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:e}){return`<h${e}>${this.parser.parseInline(i)}</h${e}>
`}hr(i){return`<hr>
`}list(i){let e=i.ordered,r=i.start,t="";for(let l=0;l<i.items.length;l++){let s=i.items[l];t+=this.listitem(s)}let a=e?"ol":"ul",n=e&&r!==1?' start="'+r+'"':"";return"<"+a+n+`>
`+t+"</"+a+`>
`}listitem(i){var r;let e="";if(i.task){let t=this.checkbox({checked:!!i.checked});i.loose?((r=i.tokens[0])==null?void 0:r.type)==="paragraph"?(i.tokens[0].text=t+" "+i.tokens[0].text,i.tokens[0].tokens&&i.tokens[0].tokens.length>0&&i.tokens[0].tokens[0].type==="text"&&(i.tokens[0].tokens[0].text=t+" "+vt(i.tokens[0].tokens[0].text),i.tokens[0].tokens[0].escaped=!0)):i.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(i.tokens,!!i.loose),`<li>${e}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let e="",r="";for(let a=0;a<i.header.length;a++)r+=this.tablecell(i.header[a]);e+=this.tablerow({text:r});let t="";for(let a=0;a<i.rows.length;a++){let n=i.rows[a];r="";for(let l=0;l<n.length;l++)r+=this.tablecell(n[l]);t+=this.tablerow({text:r})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let e=this.parser.parseInline(i.tokens),r=i.header?"th":"td";return(i.align?`<${r} align="${i.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${vt(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:e,tokens:r}){let t=this.parser.parseInline(r),a=on(i);if(a===null)return t;i=a;let n='<a href="'+i+'"';return e&&(n+=' title="'+vt(e)+'"'),n+=">"+t+"</a>",n}image({href:i,title:e,text:r,tokens:t}){t&&(r=this.parser.parseInline(t,this.parser.textRenderer));let a=on(i);if(a===null)return vt(r);i=a;let n=`<img src="${i}" alt="${r}"`;return e&&(n+=` title="${vt(e)}"`),n+=">",n}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:vt(i.text)}},qi=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}},bt=class ki{constructor(e){Je(this,"options");Je(this,"renderer");Je(this,"textRenderer");this.options=e||br,this.options.renderer=this.options.renderer||new ia,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new qi}static parse(e,r){return new ki(r).parse(e)}static parseInline(e,r){return new ki(r).parseInline(e)}parse(e,r=!0){var a,n;let t="";for(let l=0;l<e.length;l++){let s=e[l];if((n=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&n[s.type]){let f=s,o=this.options.extensions.renderers[f.type].call({parser:this},f);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(f.type)){t+=o||"";continue}}let u=s;switch(u.type){case"space":{t+=this.renderer.space(u);continue}case"hr":{t+=this.renderer.hr(u);continue}case"heading":{t+=this.renderer.heading(u);continue}case"code":{t+=this.renderer.code(u);continue}case"table":{t+=this.renderer.table(u);continue}case"blockquote":{t+=this.renderer.blockquote(u);continue}case"list":{t+=this.renderer.list(u);continue}case"html":{t+=this.renderer.html(u);continue}case"def":{t+=this.renderer.def(u);continue}case"paragraph":{t+=this.renderer.paragraph(u);continue}case"text":{let f=u,o=this.renderer.text(f);for(;l+1<e.length&&e[l+1].type==="text";)f=e[++l],o+=`
`+this.renderer.text(f);r?t+=this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o,escaped:!0}]}):t+=o;continue}default:{let f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return t}parseInline(e,r=this.renderer){var a,n;let t="";for(let l=0;l<e.length;l++){let s=e[l];if((n=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&n[s.type]){let f=this.options.extensions.renderers[s.type].call({parser:this},s);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=f||"";continue}}let u=s;switch(u.type){case"escape":{t+=r.text(u);break}case"html":{t+=r.html(u);break}case"link":{t+=r.link(u);break}case"image":{t+=r.image(u);break}case"strong":{t+=r.strong(u);break}case"em":{t+=r.em(u);break}case"codespan":{t+=r.codespan(u);break}case"br":{t+=r.br(u);break}case"del":{t+=r.del(u);break}case"text":{t+=r.text(u);break}default:{let f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return t}},ta,Gr=(ta=class{constructor(i){Je(this,"options");Je(this,"block");this.options=i||br}preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(){return this.block?ht.lex:ht.lexInline}provideParser(){return this.block?bt.parse:bt.parseInline}},Je(ta,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Je(ta,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ta),Uo=class{constructor(...i){Je(this,"defaults",Si());Je(this,"options",this.setOptions);Je(this,"parse",this.parseMarkdown(!0));Je(this,"parseInline",this.parseMarkdown(!1));Je(this,"Parser",bt);Je(this,"Renderer",ia);Je(this,"TextRenderer",qi);Je(this,"Lexer",ht);Je(this,"Tokenizer",aa);Je(this,"Hooks",Gr);this.use(...i)}walkTokens(i,e){var t,a;let r=[];for(let n of i)switch(r=r.concat(e.call(this,n)),n.type){case"table":{let l=n;for(let s of l.header)r=r.concat(this.walkTokens(s.tokens,e));for(let s of l.rows)for(let u of s)r=r.concat(this.walkTokens(u.tokens,e));break}case"list":{let l=n;r=r.concat(this.walkTokens(l.items,e));break}default:{let l=n;(a=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&a[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{let u=l[s].flat(1/0);r=r.concat(this.walkTokens(u,e))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,e)))}}return r}use(...i){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(r=>{let t={...r};if(t.async=this.defaults.async||t.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let n=e.renderers[a.name];n?e.renderers[a.name]=function(...l){let s=a.renderer.apply(this,l);return s===!1&&(s=n.apply(this,l)),s}:e.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let n=e[a.level];n?n.unshift(a.tokenizer):e[a.level]=[a.tokenizer],a.start&&(a.level==="block"?e.startBlock?e.startBlock.push(a.start):e.startBlock=[a.start]:a.level==="inline"&&(e.startInline?e.startInline.push(a.start):e.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(e.childTokens[a.name]=a.childTokens)}),t.extensions=e),r.renderer){let a=this.defaults.renderer||new ia(this.defaults);for(let n in r.renderer){if(!(n in a))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;let l=n,s=r.renderer[l],u=a[l];a[l]=(...f)=>{let o=s.apply(a,f);return o===!1&&(o=u.apply(a,f)),o||""}}t.renderer=a}if(r.tokenizer){let a=this.defaults.tokenizer||new aa(this.defaults);for(let n in r.tokenizer){if(!(n in a))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let l=n,s=r.tokenizer[l],u=a[l];a[l]=(...f)=>{let o=s.apply(a,f);return o===!1&&(o=u.apply(a,f)),o}}t.tokenizer=a}if(r.hooks){let a=this.defaults.hooks||new Gr;for(let n in r.hooks){if(!(n in a))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;let l=n,s=r.hooks[l],u=a[l];Gr.passThroughHooks.has(n)?a[l]=f=>{if(this.defaults.async&&Gr.passThroughHooksRespectAsync.has(n))return(async()=>{let m=await s.call(a,f);return u.call(a,m)})();let o=s.call(a,f);return u.call(a,o)}:a[l]=(...f)=>{if(this.defaults.async)return(async()=>{let m=await s.apply(a,f);return m===!1&&(m=await u.apply(a,f)),m})();let o=s.apply(a,f);return o===!1&&(o=u.apply(a,f)),o}}t.hooks=a}if(r.walkTokens){let a=this.defaults.walkTokens,n=r.walkTokens;t.walkTokens=function(l){let s=[];return s.push(n.call(this,l)),a&&(s=s.concat(a.call(this,l))),s}}this.defaults={...this.defaults,...t}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,e){return ht.lex(i,e??this.defaults)}parser(i,e){return bt.parse(i,e??this.defaults)}parseMarkdown(i){return(e,r)=>{let t={...r},a={...this.defaults,...t},n=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&t.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=i),a.async)return(async()=>{let l=a.hooks?await a.hooks.preprocess(e):e,s=await(a.hooks?await a.hooks.provideLexer():i?ht.lex:ht.lexInline)(l,a),u=a.hooks?await a.hooks.processAllTokens(s):s;a.walkTokens&&await Promise.all(this.walkTokens(u,a.walkTokens));let f=await(a.hooks?await a.hooks.provideParser():i?bt.parse:bt.parseInline)(u,a);return a.hooks?await a.hooks.postprocess(f):f})().catch(n);try{a.hooks&&(e=a.hooks.preprocess(e));let l=(a.hooks?a.hooks.provideLexer():i?ht.lex:ht.lexInline)(e,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let s=(a.hooks?a.hooks.provideParser():i?bt.parse:bt.parseInline)(l,a);return a.hooks&&(s=a.hooks.postprocess(s)),s}catch(l){return n(l)}}}onError(i,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let t="<p>An error occurred:</p><pre>"+vt(r.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(r);throw r}}},hr=new Uo;function Ue(i,e){return hr.parse(i,e)}Ue.options=Ue.setOptions=function(i){return hr.setOptions(i),Ue.defaults=hr.defaults,fl(Ue.defaults),Ue};Ue.getDefaults=Si;Ue.defaults=br;Ue.use=function(...i){return hr.use(...i),Ue.defaults=hr.defaults,fl(Ue.defaults),Ue};Ue.walkTokens=function(i,e){return hr.walkTokens(i,e)};Ue.parseInline=hr.parseInline;Ue.Parser=bt;Ue.parser=bt.parse;Ue.Renderer=ia;Ue.TextRenderer=qi;Ue.Lexer=ht;Ue.lexer=ht.lex;Ue.Tokenizer=aa;Ue.Hooks=Gr;Ue.parse=Ue;Ue.options;Ue.setOptions;Ue.use;Ue.walkTokens;Ue.parseInline;bt.parse;ht.lex;function Go(i){let e;function r(n,l){return n[2]==="markdown"?Qo:jo}let t=r(i),a=t(i);return{c(){e=F("div"),a.c(),this.h()},l(n){e=L(n,"DIV",{style:!0,class:!0});var l=se(e);a.l(l),l.forEach(p),this.h()},h(){te(e,"white-space","pre-wrap"),Y(e,"class","svelte-hemi17")},m(n,l){g(n,e,l),a.m(e,null)},p(n,l){t===(t=r(n))&&a?a.p(n,l):(a.d(1),a=t(n),a&&(a.c(),a.m(e,null)))},d(n){n&&p(e),a.d()}}}function Wo(i){let e,r="Error: Error loading.";return{c(){e=F("div"),e.textContent=r,this.h()},l(t){e=L(t,"DIV",{class:!0,"data-svelte-h":!0}),yt(e)!=="svelte-qkoata"&&(e.textContent=r),this.h()},h(){Y(e,"class","svelte-hemi17")},m(t,a){g(t,e,a)},p:Qe,d(t){t&&p(e)}}}function Yo(i){let e,r,t='<div class="inner svelte-hemi17"></div>',a,n;return{c(){e=F("div"),r=F("div"),r.innerHTML=t,a=We(`
        crafting `),n=We(i[0]),this.h()},l(l){e=L(l,"DIV",{class:!0});var s=se(e);r=L(s,"DIV",{class:!0,"data-svelte-h":!0}),yt(r)!=="svelte-1uu8czx"&&(r.innerHTML=t),a=Ge(s,`
        crafting `),n=Ge(s,i[0]),s.forEach(p),this.h()},h(){Y(r,"class","intel-glow svelte-hemi17"),Y(e,"class","loading-box svelte-hemi17")},m(l,s){g(l,e,s),K(e,r),K(e,a),K(e,n)},p(l,s){s&1&&it(n,l[0])},d(l){l&&p(e)}}}function jo(i){let e;return{c(){e=We(i[3])},l(r){e=Ge(r,i[3])},m(r,t){g(r,e,t)},p(r,t){t&8&&it(e,r[3])},d(r){r&&p(e)}}}function Qo(i){let e,r=Ue.parse(i[3])+"",t;return{c(){e=new rl(!1),t=je(),this.h()},l(a){e=tl(a,!1),t=je(),this.h()},h(){e.a=t},m(a,n){e.m(r,a,n),g(a,t,n)},p(a,n){n&8&&r!==(r=Ue.parse(a[3])+"")&&e.p(r)},d(a){a&&(p(t),e.d())}}}function Jo(i){let e;function r(n,l){return n[1]?Yo:n[3]?Go:Wo}let t=r(i),a=t(i);return{c(){a.c(),e=je()},l(n){a.l(n),e=je()},m(n,l){a.m(n,l),g(n,e,l)},p(n,[l]){t===(t=r(n))&&a?a.p(n,l):(a.d(1),a=t(n),a&&(a.c(),a.m(e.parentNode,e)))},i:Qe,o:Qe,d(n){n&&p(e),a.d(n)}}}const Zo="https://askmaa.mosaicfm.dev";function Ko(i,e,r){let t,a,n,l,s,{id:u=null}=e,{params:f={}}=e,{content_desc:o="text"}=e;return i.$$set=m=>{"id"in m&&r(4,u=m.id),"params"in m&&r(5,f=m.params),"content_desc"in m&&r(0,o=m.content_desc)},i.$$.update=()=>{i.$$.dirty&16&&r(7,t=`${Zo}/${u}`),i.$$.dirty&32&&r(6,a=JSON.stringify(f)),i.$$.dirty&208&&(async()=>{if(u){r(1,s=!0);try{const h=await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:a})).json();r(3,n=h.response??null),r(2,l=h.response_format??"text")}catch(m){console.error(m)}finally{r(1,s=!1)}}})()},r(3,n=null),r(2,l=null),r(1,s=!0),[o,s,l,n,u,f,a,t]}class Xo extends ct{constructor(e){super(),pt(this,e,Ko,Jo,_t,{id:4,params:5,content_desc:0})}}function eu(i){let e,r;return{c(){e=F("div"),r=new rl(!1),this.h()},l(t){e=L(t,"DIV",{class:!0});var a=se(e);r=tl(a,!1),a.forEach(p),this.h()},h(){r.a=null,Y(e,"class","dynamic-markdown markdown")},m(t,a){g(t,e,a),r.m(i[1],e),i[3](e)},p(t,[a]){a&2&&r.p(t[1])},i:Qe,o:Qe,d(t){t&&p(e),i[3](null)}}}function tu(i,e,r){let t,{content:a=""}=e,n;El(()=>{n&&n.querySelectorAll("*").forEach(s=>s.classList.add("markdown"))});function l(s){$r[s?"unshift":"push"](()=>{n=s,r(0,n)})}return i.$$set=s=>{"content"in s&&r(2,a=s.content)},i.$$.update=()=>{i.$$.dirty&4&&r(1,t=a?Ue(a):"")},[n,t,a,l]}class St extends ct{constructor(e){super(),pt(this,e,tu,eu,_t,{content:2})}}function ru(i){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:Qe,p:Qe,d:Qe}}function au(i){let e,r,t,a,n;return document.title=e=Ke.title,{c(){r=S(),t=F("meta"),a=S(),n=F("meta"),this.h()},l(l){r=R(l),t=L(l,"META",{property:!0,content:!0}),a=R(l),n=L(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s;Y(t,"property","og:title"),Y(t,"content",((l=Ke.og)==null?void 0:l.title)??Ke.title),Y(n,"name","twitter:title"),Y(n,"content",((s=Ke.og)==null?void 0:s.title)??Ke.title)},m(l,s){g(l,r,s),g(l,t,s),g(l,a,s),g(l,n,s)},p(l,s){s&0&&e!==(e=Ke.title)&&(document.title=e)},d(l){l&&(p(r),p(t),p(a),p(n))}}}function iu(i){var n,l;let e,r,t=(Ke.description||((n=Ke.og)==null?void 0:n.description))&&nu(),a=((l=Ke.og)==null?void 0:l.image)&&lu();return{c(){t&&t.c(),e=S(),a&&a.c(),r=je()},l(s){t&&t.l(s),e=R(s),a&&a.l(s),r=je()},m(s,u){t&&t.m(s,u),g(s,e,u),a&&a.m(s,u),g(s,r,u)},p(s,u){var f,o;(Ke.description||(f=Ke.og)!=null&&f.description)&&t.p(s,u),(o=Ke.og)!=null&&o.image&&a.p(s,u)},d(s){s&&(p(e),p(r)),t&&t.d(s),a&&a.d(s)}}}function nu(i){let e,r,t,a,n;return{c(){e=F("meta"),r=S(),t=F("meta"),a=S(),n=F("meta"),this.h()},l(l){e=L(l,"META",{name:!0,content:!0}),r=R(l),t=L(l,"META",{property:!0,content:!0}),a=R(l),n=L(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s,u;Y(e,"name","description"),Y(e,"content",Ke.description??((l=Ke.og)==null?void 0:l.description)),Y(t,"property","og:description"),Y(t,"content",((s=Ke.og)==null?void 0:s.description)??Ke.description),Y(n,"name","twitter:description"),Y(n,"content",((u=Ke.og)==null?void 0:u.description)??Ke.description)},m(l,s){g(l,e,s),g(l,r,s),g(l,t,s),g(l,a,s),g(l,n,s)},p:Qe,d(l){l&&(p(e),p(r),p(t),p(a),p(n))}}}function lu(i){let e,r,t;return{c(){e=F("meta"),r=S(),t=F("meta"),this.h()},l(a){e=L(a,"META",{property:!0,content:!0}),r=R(a),t=L(a,"META",{name:!0,content:!0}),this.h()},h(){var a,n;Y(e,"property","og:image"),Y(e,"content",Pi((a=Ke.og)==null?void 0:a.image)),Y(t,"name","twitter:image"),Y(t,"content",Pi((n=Ke.og)==null?void 0:n.image))},m(a,n){g(a,e,n),g(a,r,n),g(a,t,n)},p:Qe,d(a){a&&(p(e),p(r),p(t))}}}function su(i){let e,r,t,a,n,l,s,u,f,o,m,h;return e=new tt({props:{id:"year",title:"Roadmap",fmt:"id"}}),t=new tt({props:{id:"demand_outstanding",title:"Demand ToDo",fmt:"pct0"}}),n=new tt({props:{id:"total_demand_work_items",title:"Demand WKItems",fmt:"num0"}}),s=new tt({props:{id:"resoureced_outstanding",title:"Staffed ToDo",fmt:"pct0"}}),f=new tt({props:{id:"total_actioned_milestone_items",title:"Staffed WKItems",fmt:"num0"}}),m=new tt({props:{id:"ratio",title:"Demand/Resourced",fmt:"pct0"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment),o=S(),C(m.$$.fragment)},l(d){A(e.$$.fragment,d),r=R(d),A(t.$$.fragment,d),a=R(d),A(n.$$.fragment,d),l=R(d),A(s.$$.fragment,d),u=R(d),A(f.$$.fragment,d),o=R(d),A(m.$$.fragment,d)},m(d,$){T(e,d,$),g(d,r,$),T(t,d,$),g(d,a,$),T(n,d,$),g(d,l,$),T(s,d,$),g(d,u,$),T(f,d,$),g(d,o,$),T(m,d,$),h=!0},p:Qe,i(d){h||(c(e.$$.fragment,d),c(t.$$.fragment,d),c(n.$$.fragment,d),c(s.$$.fragment,d),c(f.$$.fragment,d),c(m.$$.fragment,d),h=!0)},o(d){b(e.$$.fragment,d),b(t.$$.fragment,d),b(n.$$.fragment,d),b(s.$$.fragment,d),b(f.$$.fragment,d),b(m.$$.fragment,d),h=!1},d(d){d&&(p(r),p(a),p(l),p(u),p(o)),E(e,d),E(t,d),E(n,d),E(s,d),E(f,d),E(m,d)}}}function ou(i){let e,r,t,a,n,l,s,u,f,o;return e=new tt({props:{id:"year",title:"Roadmap",fmt:"id"}}),t=new tt({props:{id:"requirements",title:"Requirements"}}),n=new tt({props:{id:"workitems",title:"Work Items"}}),s=new tt({props:{id:"prs",title:"PRs"}}),f=new tt({props:{id:"developers",title:"Devs"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment)},l(m){A(e.$$.fragment,m),r=R(m),A(t.$$.fragment,m),a=R(m),A(n.$$.fragment,m),l=R(m),A(s.$$.fragment,m),u=R(m),A(f.$$.fragment,m)},m(m,h){T(e,m,h),g(m,r,h),T(t,m,h),g(m,a,h),T(n,m,h),g(m,l,h),T(s,m,h),g(m,u,h),T(f,m,h),o=!0},p:Qe,i(m){o||(c(e.$$.fragment,m),c(t.$$.fragment,m),c(n.$$.fragment,m),c(s.$$.fragment,m),c(f.$$.fragment,m),o=!0)},o(m){b(e.$$.fragment,m),b(t.$$.fragment,m),b(n.$$.fragment,m),b(s.$$.fragment,m),b(f.$$.fragment,m),o=!1},d(m){m&&(p(r),p(a),p(l),p(u)),E(e,m),E(t,m),E(n,m),E(s,m),E(f,m)}}}function uu(i){let e,r,t,a,n,l,s,u;return e=new Ze({props:{valueLabel:"2021",value:"2021"}}),t=new Ze({props:{valueLabel:"2022",value:"2022"}}),n=new Ze({props:{valueLabel:"2023",value:"2023"}}),s=new Ze({props:{valueLabel:"2024",value:"2024"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment)},l(f){A(e.$$.fragment,f),r=R(f),A(t.$$.fragment,f),a=R(f),A(n.$$.fragment,f),l=R(f),A(s.$$.fragment,f)},m(f,o){T(e,f,o),g(f,r,o),T(t,f,o),g(f,a,o),T(n,f,o),g(f,l,o),T(s,f,o),u=!0},p:Qe,i(f){u||(c(e.$$.fragment,f),c(t.$$.fragment,f),c(n.$$.fragment,f),c(s.$$.fragment,f),u=!0)},o(f){b(e.$$.fragment,f),b(t.$$.fragment,f),b(n.$$.fragment,f),b(s.$$.fragment,f),u=!1},d(f){f&&(p(r),p(a),p(l)),E(e,f),E(t,f),E(n,f),E(s,f)}}}function fu(i){let e,r,t,a,n,l,s,u,f,o,m,h,d,$,y,M,U,P;return e=new tt({props:{id:"year",title:"Roadmap",fmt:"id"}}),t=new tt({props:{id:"milestone_id",title:"MileStone"}}),n=new tt({props:{id:"milestone_date",title:"MS Date",fmt:"dmy"}}),s=new tt({props:{id:"demanded_milestone_items",title:"Demand WKitms"}}),f=new tt({props:{id:"demanded_outstanding_pct",title:"Demand ToDo",fmt:"pct0"}}),m=new tt({props:{id:"actioned_milestone_items",title:"Staffed WKitms"}}),d=new tt({props:{id:"actioned_outstanding_pct",title:"Staffed ToDo",fmt:"pct0"}}),y=new tt({props:{id:"last_merge_date",title:"Latest Work",fmt:"dmy"}}),U=new tt({props:{id:"milestone_description",title:"Description",wrap:"false"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment),o=S(),C(m.$$.fragment),h=S(),C(d.$$.fragment),$=S(),C(y.$$.fragment),M=S(),C(U.$$.fragment)},l(k){A(e.$$.fragment,k),r=R(k),A(t.$$.fragment,k),a=R(k),A(n.$$.fragment,k),l=R(k),A(s.$$.fragment,k),u=R(k),A(f.$$.fragment,k),o=R(k),A(m.$$.fragment,k),h=R(k),A(d.$$.fragment,k),$=R(k),A(y.$$.fragment,k),M=R(k),A(U.$$.fragment,k)},m(k,j){T(e,k,j),g(k,r,j),T(t,k,j),g(k,a,j),T(n,k,j),g(k,l,j),T(s,k,j),g(k,u,j),T(f,k,j),g(k,o,j),T(m,k,j),g(k,h,j),T(d,k,j),g(k,$,j),T(y,k,j),g(k,M,j),T(U,k,j),P=!0},p:Qe,i(k){P||(c(e.$$.fragment,k),c(t.$$.fragment,k),c(n.$$.fragment,k),c(s.$$.fragment,k),c(f.$$.fragment,k),c(m.$$.fragment,k),c(d.$$.fragment,k),c(y.$$.fragment,k),c(U.$$.fragment,k),P=!0)},o(k){b(e.$$.fragment,k),b(t.$$.fragment,k),b(n.$$.fragment,k),b(s.$$.fragment,k),b(f.$$.fragment,k),b(m.$$.fragment,k),b(d.$$.fragment,k),b(y.$$.fragment,k),b(U.$$.fragment,k),P=!1},d(k){k&&(p(r),p(a),p(l),p(u),p(o),p(h),p($),p(M)),E(e,k),E(t,k),E(n,k),E(s,k),E(f,k),E(m,k),E(d,k),E(y,k),E(U,k)}}}function mu(i){let e,r,t,a,n;return e=new Ze({props:{valueLabel:"Executive",value:"exec"}}),r=new Ze({props:{valueLabel:"Project Management",value:"pm"}}),t=new Ze({props:{valueLabel:"Team Lead",value:"team_lead"}}),a=new Ze({props:{valueLabel:"Dev",value:"developer"}}),{c(){C(e.$$.fragment),C(r.$$.fragment),C(t.$$.fragment),C(a.$$.fragment)},l(l){A(e.$$.fragment,l),A(r.$$.fragment,l),A(t.$$.fragment,l),A(a.$$.fragment,l)},m(l,s){T(e,l,s),T(r,l,s),T(t,l,s),T(a,l,s),n=!0},p:Qe,i(l){n||(c(e.$$.fragment,l),c(r.$$.fragment,l),c(t.$$.fragment,l),c(a.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),b(r.$$.fragment,l),b(t.$$.fragment,l),b(a.$$.fragment,l),n=!1},d(l){E(e,l),E(r,l),E(t,l),E(a,l)}}}function du(i){let e,r,t;return e=new Ze({props:{valueLabel:"Weekly",value:"week"}}),r=new Ze({props:{valueLabel:"Quarterly",value:"quarter"}}),{c(){C(e.$$.fragment),C(r.$$.fragment)},l(a){A(e.$$.fragment,a),A(r.$$.fragment,a)},m(a,n){T(e,a,n),T(r,a,n),t=!0},p:Qe,i(a){t||(c(e.$$.fragment,a),c(r.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),b(r.$$.fragment,a),t=!1},d(a){E(e,a),E(r,a)}}}function mn(i){let e,r;return e=new gt({props:{name:"quarter_p",$$slots:{default:[_u]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function _u(i){let e,r,t,a,n;return e=new Ze({props:{valueLabel:"Q1",value:"1"}}),r=new Ze({props:{valueLabel:"Q2",value:"2"}}),t=new Ze({props:{valueLabel:"Q3",value:"3"}}),a=new Ze({props:{valueLabel:"Q4",value:"4"}}),{c(){C(e.$$.fragment),C(r.$$.fragment),C(t.$$.fragment),C(a.$$.fragment)},l(l){A(e.$$.fragment,l),A(r.$$.fragment,l),A(t.$$.fragment,l),A(a.$$.fragment,l)},m(l,s){T(e,l,s),T(r,l,s),T(t,l,s),T(a,l,s),n=!0},p:Qe,i(l){n||(c(e.$$.fragment,l),c(r.$$.fragment,l),c(t.$$.fragment,l),c(a.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),b(r.$$.fragment,l),b(t.$$.fragment,l),b(a.$$.fragment,l),n=!1},d(l){E(e,l),E(r,l),E(t,l),E(a,l)}}}function dn(i){let e,r;return e=new Zs({props:{title:"Week",name:"week_p",min:"1",max:"52",step:"1"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function _n(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Executive Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Executive Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function cn(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Project Manager Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Project Manager Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function pn(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Team Lead Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Team Lead Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function hn(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Developer Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Developer Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function cu(i){let e,r,t,a,n,l;return e=new St({props:{content:i[22][0].heading_markdown}}),t=new St({props:{content:i[22][0].content_markdown}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),n=F("hr"),this.h()},l(s){A(e.$$.fragment,s),r=R(s),A(t.$$.fragment,s),a=R(s),n=L(s,"HR",{style:!0}),this.h()},h(){te(n,"border","1px solid black")},m(s,u){T(e,s,u),g(s,r,u),T(t,s,u),g(s,a,u),g(s,n,u),l=!0},p(s,u){const f={};u[0]&4194304&&(f.content=s[22][0].heading_markdown),e.$set(f);const o={};u[0]&4194304&&(o.content=s[22][0].content_markdown),t.$set(o)},i(s){l||(c(e.$$.fragment,s),c(t.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),l=!1},d(s){s&&(p(r),p(a),p(n)),E(e,s),E(t,s)}}}function pu(i){let e,r='<a href="#overview-of-changes-to-the-previous-roadmap-version">Overview of changes to the previous roadmap version</a>',t,a,n,l,s,u,f,o,m;l=new St({props:{content:i[5][0].single_sentence_summary}}),u=new gt({props:{name:"showroadmap",title:"Display Roadmap "+i[0].years.value+" verson",defaultValue:"no",$$slots:{default:[hu]},$$scope:{ctx:i}}});let h=i[0].showroadmap.value!=="no"&&bn(i);return{c(){e=F("h2"),e.innerHTML=r,t=S(),a=F("hr"),n=S(),C(l.$$.fragment),s=S(),C(u.$$.fragment),f=S(),h&&h.c(),o=je(),this.h()},l(d){e=L(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(e)!=="svelte-159e7zg"&&(e.innerHTML=r),t=R(d),a=L(d,"HR",{style:!0}),n=R(d),A(l.$$.fragment,d),s=R(d),A(u.$$.fragment,d),f=R(d),h&&h.l(d),o=je(),this.h()},h(){Y(e,"class","markdown"),Y(e,"id","overview-of-changes-to-the-previous-roadmap-version"),te(a,"border","1px solid black")},m(d,$){g(d,e,$),g(d,t,$),g(d,a,$),g(d,n,$),T(l,d,$),g(d,s,$),T(u,d,$),g(d,f,$),h&&h.m(d,$),g(d,o,$),m=!0},p(d,$){const y={};$[0]&32&&(y.content=d[5][0].single_sentence_summary),l.$set(y);const M={};$[0]&1&&(M.title="Display Roadmap "+d[0].years.value+" verson"),$[6]&131072&&(M.$$scope={dirty:$,ctx:d}),u.$set(M),d[0].showroadmap.value!=="no"?h?(h.p(d,$),$[0]&1&&c(h,1)):(h=bn(d),h.c(),c(h,1),h.m(o.parentNode,o)):h&&(oe(),b(h,1,1,()=>{h=null}),ue())},i(d){m||(c(l.$$.fragment,d),c(u.$$.fragment,d),c(h),m=!0)},o(d){b(l.$$.fragment,d),b(u.$$.fragment,d),b(h),m=!1},d(d){d&&(p(e),p(t),p(a),p(n),p(s),p(f),p(o)),E(l,d),E(u,d),h&&h.d(d)}}}function hu(i){let e,r,t,a;return e=new Ze({props:{valueLabel:"No",value:"no"}}),t=new Ze({props:{valueLabel:"Yes",value:"yes"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment)},l(n){A(e.$$.fragment,n),r=R(n),A(t.$$.fragment,n)},m(n,l){T(e,n,l),g(n,r,l),T(t,n,l),a=!0},p:Qe,i(n){a||(c(e.$$.fragment,n),c(t.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),a=!1},d(n){n&&p(r),E(e,n),E(t,n)}}}function bn(i){let e,r,t=i[0].years.value+"",a,n,l,s,u,f,o,m,h,d,$;return f=new St({props:{content:i[22][0].heading_markdown}}),m=new St({props:{content:i[22][0].content_markdown}}),{c(){e=F("h2"),r=F("a"),a=We(t),n=We(" Roadmap Details"),l=S(),s=F("hr"),u=S(),C(f.$$.fragment),o=S(),C(m.$$.fragment),h=S(),d=F("hr"),this.h()},l(y){e=L(y,"H2",{class:!0,id:!0});var M=se(e);r=L(M,"A",{href:!0});var U=se(r);a=Ge(U,t),n=Ge(U," Roadmap Details"),U.forEach(p),M.forEach(p),l=R(y),s=L(y,"HR",{style:!0}),u=R(y),A(f.$$.fragment,y),o=R(y),A(m.$$.fragment,y),h=R(y),d=L(y,"HR",{style:!0}),this.h()},h(){Y(r,"href","#inputsyearsvalue-roadmap-details"),Y(e,"class","markdown"),Y(e,"id","inputsyearsvalue-roadmap-details"),te(s,"border","1px solid black"),te(d,"border","1px solid black")},m(y,M){g(y,e,M),K(e,r),K(r,a),K(r,n),g(y,l,M),g(y,s,M),g(y,u,M),T(f,y,M),g(y,o,M),T(m,y,M),g(y,h,M),g(y,d,M),$=!0},p(y,M){(!$||M[0]&1)&&t!==(t=y[0].years.value+"")&&it(a,t);const U={};M[0]&4194304&&(U.content=y[22][0].heading_markdown),f.$set(U);const P={};M[0]&4194304&&(P.content=y[22][0].content_markdown),m.$set(P)},i(y){$||(c(f.$$.fragment,y),c(m.$$.fragment,y),$=!0)},o(y){b(f.$$.fragment,y),b(m.$$.fragment,y),$=!1},d(y){y&&(p(e),p(l),p(s),p(u),p(o),p(h),p(d)),E(f,y),E(m,y)}}}function bu(i){let e,r,t,a;const n=[pu,cu],l=[];function s(u,f){return u[0].years.value!=="2021"?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=je()},l(u){r.l(u),t=je()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,f){let o=e;e=s(u),e===o?l[e].p(u,f):(oe(),b(l[o],1,1,()=>{l[o]=null}),ue(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function gu(i){let e,r;return e=new Il({props:{title:"Roadmap details: "+i[0].years.value+" version",$$slots:{default:[bu]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1&&(n.title="Roadmap details: "+t[0].years.value+" version"),a[0]&4194337|a[6]&131072&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function yu(i){let e,r='<a href="#program-progress-to-date">Program Progress to date</a>',t,a,n,l,s,u,f,o,m,h,d,$,y,M,U='<a href="#roadmap-detail">Roadmap Detail</a>',P,k,j,ie,G,I,z,H,Q,ne='<a href="#platform-quaterly-delivery-summaries-by-audience">Platform Quaterly Delivery Summaries by Audience</a>',W,q,X,me,ye,Oe,le,ee,V,ae,ve,Se,Xe,ke,be,O,re,fe,de,Te,Ae,Ce,Me,J,D,B,Ee,De,_e,we,ze,Ie,Fe,Pe,xe,qe,Ve,Ne,Le;l=new bi({props:{data:i[24],title:"Programme Overview:",rowSelection:"single",name:"deliveryOverview1",$$slots:{default:[su]},$$scope:{ctx:i}}}),o=new bi({props:{data:i[6],title:"Delivery Overview: Key Stats",rowSelection:"single",name:"deliveryOverview2",$$slots:{default:[ou]},$$scope:{ctx:i}}}),$=new ns({props:{data:i[16],x:"year",y:"activity_prs",series:"activity",title:"Programme Overview: Development Activity"}}),G=new gt({props:{name:"years",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[uu]},$$scope:{ctx:i}}}),z=new bi({props:{data:i[8],title:i[0].years.value+" Roadmap",$$slots:{default:[fu]},$$scope:{ctx:i}}}),ae=new gt({props:{data:i[28],title:"Programme",name:"owner",value:"owner",defaultValue:"eclipse-zenoh"}}),Se=new gt({props:{data:i[29],title:"Repo",name:"repo",value:"value",label:"label",defaultValue:"zenoh"}}),ke=new gt({props:{name:"audience_p",title:"Perspective",$$slots:{default:[mu]},$$scope:{ctx:i}}}),de=new gt({props:{name:"kind",defaultValue:"quarter",title:"Period",$$slots:{default:[du]},$$scope:{ctx:i}}});let ce=i[0].kind.value=="quarter"&&mn(i),ge=i[0].kind.value=="week"&&dn(),$e=i[0].audience_p.value=="exec"&&_n(i),Re=i[0].audience_p.value=="pm"&&cn(i),pe=i[0].audience_p.value=="team_lead"&&pn(i),he=i[0].audience_p.value=="developer"&&hn(i);return we=new Xo({props:{id:i[33],params:i[2],content_desc:"summary"}}),qe=new Cl({props:{$$slots:{default:[gu]},$$scope:{ctx:i}}}),{c(){e=F("h2"),e.innerHTML=r,t=S(),a=F("hr"),n=S(),C(l.$$.fragment),s=S(),u=F("hr"),f=S(),C(o.$$.fragment),m=S(),h=F("hr"),d=S(),C($.$$.fragment),y=S(),M=F("h2"),M.innerHTML=U,P=S(),k=F("hr"),j=S(),ie=F("div"),C(G.$$.fragment),I=S(),C(z.$$.fragment),H=S(),Q=F("h4"),Q.innerHTML=ne,W=S(),q=F("hr"),X=S(),me=F("table"),ye=F("tbody"),Oe=F("tr"),le=F("td"),ee=F("div"),V=F("span"),C(ae.$$.fragment),ve=S(),C(Se.$$.fragment),Xe=S(),C(ke.$$.fragment),be=S(),O=F("tr"),re=F("td"),fe=F("div"),C(de.$$.fragment),Te=S(),ce&&ce.c(),Ae=S(),ge&&ge.c(),Ce=We(`
             `),Me=S(),J=F("div"),$e&&$e.c(),D=S(),Re&&Re.c(),B=S(),pe&&pe.c(),Ee=S(),he&&he.c(),De=S(),_e=F("div"),C(we.$$.fragment),ze=S(),Ie=F("br"),Fe=S(),Pe=F("hr"),xe=S(),C(qe.$$.fragment),Ve=S(),Ne=F("hr"),this.h()},l(w){e=L(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(e)!=="svelte-18qc3es"&&(e.innerHTML=r),t=R(w),a=L(w,"HR",{style:!0}),n=R(w),A(l.$$.fragment,w),s=R(w),u=L(w,"HR",{style:!0}),f=R(w),A(o.$$.fragment,w),m=R(w),h=L(w,"HR",{style:!0}),d=R(w),A($.$$.fragment,w),y=R(w),M=L(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(M)!=="svelte-1usc0nn"&&(M.innerHTML=U),P=R(w),k=L(w,"HR",{style:!0}),j=R(w),ie=L(w,"DIV",{style:!0});var N=se(ie);A(G.$$.fragment,N),N.forEach(p),I=R(w),A(z.$$.fragment,w),H=R(w),Q=L(w,"H4",{class:!0,id:!0,"data-svelte-h":!0}),yt(Q)!=="svelte-sj40yn"&&(Q.innerHTML=ne),W=R(w),q=L(w,"HR",{style:!0}),X=R(w),me=L(w,"TABLE",{style:!0});var _=se(me);ye=L(_,"TBODY",{});var v=se(ye);Oe=L(v,"TR",{});var nt=se(Oe);le=L(nt,"TD",{style:!0});var ut=se(le);ee=L(ut,"DIV",{style:!0});var ft=se(ee);V=L(ft,"SPAN",{style:!0});var mt=se(V);A(ae.$$.fragment,mt),ve=R(mt),A(Se.$$.fragment,mt),Xe=R(mt),A(ke.$$.fragment,mt),mt.forEach(p),ft.forEach(p),ut.forEach(p),nt.forEach(p),be=R(v),O=L(v,"TR",{});var kt=se(O);re=L(kt,"TD",{style:!0});var wt=se(re);fe=L(wt,"DIV",{style:!0});var at=se(fe);A(de.$$.fragment,at),Te=R(at),ce&&ce.l(at),Ae=R(at),ge&&ge.l(at),Ce=Ge(at,`
             `),at.forEach(p),wt.forEach(p),kt.forEach(p),v.forEach(p),_.forEach(p),Me=R(w),J=L(w,"DIV",{style:!0});var et=se(J);$e&&$e.l(et),D=R(et),Re&&Re.l(et),B=R(et),pe&&pe.l(et),Ee=R(et),he&&he.l(et),et.forEach(p),De=R(w),_e=L(w,"DIV",{style:!0});var rt=se(_e);A(we.$$.fragment,rt),ze=R(rt),Ie=L(rt,"BR",{}),Fe=R(rt),Pe=L(rt,"HR",{style:!0}),xe=R(rt),A(qe.$$.fragment,rt),Ve=R(rt),Ne=L(rt,"HR",{style:!0}),rt.forEach(p),this.h()},h(){Y(e,"class","markdown"),Y(e,"id","program-progress-to-date"),te(a,"border","3px solid black"),te(u,"border","1px solid black"),te(h,"border","1px solid black"),Y(M,"class","markdown"),Y(M,"id","roadmap-detail"),te(k,"border","2px solid black"),te(ie,"display","flex"),te(ie,"justify-content","center"),Y(Q,"class","markdown"),Y(Q,"id","platform-quaterly-delivery-summaries-by-audience"),te(q,"border","1px solid black"),te(V,"display","inline-block"),te(V,"margin","0 0px 0 0"),te(ee,"display","inline-block"),te(ee,"text-align","left"),te(le,"padding","6px 10px"),te(le,"text-align","center"),te(fe,"display","inline-block"),te(fe,"text-align","left"),te(re,"padding","1px 10px"),te(re,"text-align","center"),te(me,"width","100%"),te(me,"border-collapse","collapse"),te(me,"table-layout","fixed"),te(J,"font-size","18px"),te(J,"font-weight","bold"),te(Pe,"border","2px solid black"),te(Ne,"border","1px solid black"),te(_e,"font-size","14px")},m(w,N){g(w,e,N),g(w,t,N),g(w,a,N),g(w,n,N),T(l,w,N),g(w,s,N),g(w,u,N),g(w,f,N),T(o,w,N),g(w,m,N),g(w,h,N),g(w,d,N),T($,w,N),g(w,y,N),g(w,M,N),g(w,P,N),g(w,k,N),g(w,j,N),g(w,ie,N),T(G,ie,null),g(w,I,N),T(z,w,N),g(w,H,N),g(w,Q,N),g(w,W,N),g(w,q,N),g(w,X,N),g(w,me,N),K(me,ye),K(ye,Oe),K(Oe,le),K(le,ee),K(ee,V),T(ae,V,null),K(V,ve),T(Se,V,null),K(V,Xe),T(ke,V,null),K(ye,be),K(ye,O),K(O,re),K(re,fe),T(de,fe,null),K(fe,Te),ce&&ce.m(fe,null),K(fe,Ae),ge&&ge.m(fe,null),K(fe,Ce),g(w,Me,N),g(w,J,N),$e&&$e.m(J,null),K(J,D),Re&&Re.m(J,null),K(J,B),pe&&pe.m(J,null),K(J,Ee),he&&he.m(J,null),g(w,De,N),g(w,_e,N),T(we,_e,null),K(_e,ze),K(_e,Ie),K(_e,Fe),K(_e,Pe),K(_e,xe),T(qe,_e,null),K(_e,Ve),K(_e,Ne),Le=!0},p(w,N){const _={};N[0]&16777216&&(_.data=w[24]),N[6]&131072&&(_.$$scope={dirty:N,ctx:w}),l.$set(_);const v={};N[0]&64&&(v.data=w[6]),N[6]&131072&&(v.$$scope={dirty:N,ctx:w}),o.$set(v);const nt={};N[0]&65536&&(nt.data=w[16]),$.$set(nt);const ut={};N[6]&131072&&(ut.$$scope={dirty:N,ctx:w}),G.$set(ut);const ft={};N[0]&256&&(ft.data=w[8]),N[0]&1&&(ft.title=w[0].years.value+" Roadmap"),N[6]&131072&&(ft.$$scope={dirty:N,ctx:w}),z.$set(ft);const mt={};N[0]&268435456&&(mt.data=w[28]),ae.$set(mt);const kt={};N[0]&536870912&&(kt.data=w[29]),Se.$set(kt);const wt={};N[6]&131072&&(wt.$$scope={dirty:N,ctx:w}),ke.$set(wt);const at={};N[6]&131072&&(at.$$scope={dirty:N,ctx:w}),de.$set(at),w[0].kind.value=="quarter"?ce?N[0]&1&&c(ce,1):(ce=mn(w),ce.c(),c(ce,1),ce.m(fe,Ae)):ce&&(oe(),b(ce,1,1,()=>{ce=null}),ue()),w[0].kind.value=="week"?ge?N[0]&1&&c(ge,1):(ge=dn(),ge.c(),c(ge,1),ge.m(fe,Ce)):ge&&(oe(),b(ge,1,1,()=>{ge=null}),ue()),w[0].audience_p.value=="exec"?$e?$e.p(w,N):($e=_n(w),$e.c(),$e.m(J,D)):$e&&($e.d(1),$e=null),w[0].audience_p.value=="pm"?Re?Re.p(w,N):(Re=cn(w),Re.c(),Re.m(J,B)):Re&&(Re.d(1),Re=null),w[0].audience_p.value=="team_lead"?pe?pe.p(w,N):(pe=pn(w),pe.c(),pe.m(J,Ee)):pe&&(pe.d(1),pe=null),w[0].audience_p.value=="developer"?he?he.p(w,N):(he=hn(w),he.c(),he.m(J,null)):he&&(he.d(1),he=null);const et={};N[1]&4&&(et.id=w[33]),N[0]&4&&(et.params=w[2]),we.$set(et);const rt={};N[0]&4194337|N[6]&131072&&(rt.$$scope={dirty:N,ctx:w}),qe.$set(rt)},i(w){Le||(c(l.$$.fragment,w),c(o.$$.fragment,w),c($.$$.fragment,w),c(G.$$.fragment,w),c(z.$$.fragment,w),c(ae.$$.fragment,w),c(Se.$$.fragment,w),c(ke.$$.fragment,w),c(de.$$.fragment,w),c(ce),c(ge),c(we.$$.fragment,w),c(qe.$$.fragment,w),Le=!0)},o(w){b(l.$$.fragment,w),b(o.$$.fragment,w),b($.$$.fragment,w),b(G.$$.fragment,w),b(z.$$.fragment,w),b(ae.$$.fragment,w),b(Se.$$.fragment,w),b(ke.$$.fragment,w),b(de.$$.fragment,w),b(ce),b(ge),b(we.$$.fragment,w),b(qe.$$.fragment,w),Le=!1},d(w){w&&(p(e),p(t),p(a),p(n),p(s),p(u),p(f),p(m),p(h),p(d),p(y),p(M),p(P),p(k),p(j),p(ie),p(I),p(H),p(Q),p(W),p(q),p(X),p(me),p(Me),p(J),p(De),p(_e)),E(l,w),E(o,w),E($,w),E(G),E(z,w),E(ae),E(Se),E(ke),E(de),ce&&ce.d(),ge&&ge.d(),$e&&$e.d(),Re&&Re.d(),pe&&pe.d(),he&&he.d(),E(we),E(qe)}}}function vu(i){let e,r,t,a,n,l,s,u;return e=new Ze({props:{valueLabel:"2021",value:"2021"}}),t=new Ze({props:{valueLabel:"2022",value:"2022"}}),n=new Ze({props:{valueLabel:"2023",value:"2023"}}),s=new Ze({props:{valueLabel:"2024",value:"2024"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment)},l(f){A(e.$$.fragment,f),r=R(f),A(t.$$.fragment,f),a=R(f),A(n.$$.fragment,f),l=R(f),A(s.$$.fragment,f)},m(f,o){T(e,f,o),g(f,r,o),T(t,f,o),g(f,a,o),T(n,f,o),g(f,l,o),T(s,f,o),u=!0},p:Qe,i(f){u||(c(e.$$.fragment,f),c(t.$$.fragment,f),c(n.$$.fragment,f),c(s.$$.fragment,f),u=!0)},o(f){b(e.$$.fragment,f),b(t.$$.fragment,f),b(n.$$.fragment,f),b(s.$$.fragment,f),u=!1},d(f){f&&(p(r),p(a),p(l)),E(e,f),E(t,f),E(n,f),E(s,f)}}}function ku(i){let e,r,t,a,n,l;return e=new Ze({props:{valueLabel:"2022",value:"2022"}}),t=new Ze({props:{valueLabel:"2023",value:"2023"}}),n=new Ze({props:{valueLabel:"2024",value:"2024"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment)},l(s){A(e.$$.fragment,s),r=R(s),A(t.$$.fragment,s),a=R(s),A(n.$$.fragment,s)},m(s,u){T(e,s,u),g(s,r,u),T(t,s,u),g(s,a,u),T(n,s,u),l=!0},p:Qe,i(s){l||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(n.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),b(n.$$.fragment,s),l=!1},d(s){s&&(p(r),p(a)),E(e,s),E(t,s),E(n,s)}}}function wu(i){let e,r,t,a,n,l,s,u,f,o;return e=new Ze({props:{valueLabel:"Product Manager",value:"Product Manager"}}),t=new Ze({props:{valueLabel:"Programme Manager",value:"Programme Manager"}}),n=new Ze({props:{valueLabel:"Project Manager",value:"Project Manager"}}),s=new Ze({props:{valueLabel:"Dev Lead",value:"Dev Lead"}}),f=new Ze({props:{valueLabel:"Developer",value:"Developer"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment)},l(m){A(e.$$.fragment,m),r=R(m),A(t.$$.fragment,m),a=R(m),A(n.$$.fragment,m),l=R(m),A(s.$$.fragment,m),u=R(m),A(f.$$.fragment,m)},m(m,h){T(e,m,h),g(m,r,h),T(t,m,h),g(m,a,h),T(n,m,h),g(m,l,h),T(s,m,h),g(m,u,h),T(f,m,h),o=!0},p:Qe,i(m){o||(c(e.$$.fragment,m),c(t.$$.fragment,m),c(n.$$.fragment,m),c(s.$$.fragment,m),c(f.$$.fragment,m),o=!0)},o(m){b(e.$$.fragment,m),b(t.$$.fragment,m),b(n.$$.fragment,m),b(s.$$.fragment,m),b(f.$$.fragment,m),o=!1},d(m){m&&(p(r),p(a),p(l),p(u)),E(e,m),E(t,m),E(n,m),E(s,m),E(f,m)}}}function gn(i){let e,r,t=i[0].years.value+"",a,n,l,s,u,f,o;return s=new St({props:{content:i[22][0].heading_markdown}}),f=new St({props:{content:i[22][0].content_markdown}}),{c(){e=F("h1"),r=F("a"),a=We(t),n=We(" Roadmap Details"),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment),this.h()},l(m){e=L(m,"H1",{class:!0,id:!0});var h=se(e);r=L(h,"A",{href:!0});var d=se(r);a=Ge(d,t),n=Ge(d," Roadmap Details"),d.forEach(p),h.forEach(p),l=R(m),A(s.$$.fragment,m),u=R(m),A(f.$$.fragment,m),this.h()},h(){Y(r,"href","#inputsyearsvalue-roadmap-details-1"),Y(e,"class","markdown"),Y(e,"id","inputsyearsvalue-roadmap-details-1")},m(m,h){g(m,e,h),K(e,r),K(r,a),K(r,n),g(m,l,h),T(s,m,h),g(m,u,h),T(f,m,h),o=!0},p(m,h){(!o||h[0]&1)&&t!==(t=m[0].years.value+"")&&it(a,t);const d={};h[0]&4194304&&(d.content=m[22][0].heading_markdown),s.$set(d);const $={};h[0]&4194304&&($.content=m[22][0].content_markdown),f.$set($)},i(m){o||(c(s.$$.fragment,m),c(f.$$.fragment,m),o=!0)},o(m){b(s.$$.fragment,m),b(f.$$.fragment,m),o=!1},d(m){m&&(p(e),p(l),p(u)),E(s,m),E(f,m)}}}function $u(i){let e,r='<a href="#roadmap-explorer">Roadmap Explorer</a>',t,a,n,l,s,u,f,o,m,h,d,$,y,M,U,P,k,j,ie,G,I,z='<a href="#roadmap-version-data">Roadmap Version Data</a>',H,Q,ne,W,q,X,me='<a href="#roadmap-version-overview">Roadmap Version Overview</a>',ye,Oe,le,ee,V,ae,ve,Se,Xe,ke,be,O,re,fe,de,Te='<a href="#show">Show</a>',Ae,Ce,Me;h=new gt({props:{name:"roadmap_versions",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[vu]},$$scope:{ctx:i}}}),y=new gt({props:{data:i[32],name:"section",value:"heading_text",title:"Select Roadmap Section",multiple:"true"}}),k=new St({props:{content:i[1].map(Jn).join(`

`)}}),Se=new gt({props:{name:"roadmap_years",title:"Roadmap Revision:",defaultValue:"2022",$$slots:{default:[ku]},$$scope:{ctx:i}}}),be=new gt({props:{name:"readers",title:"Audience",defaultValue:"Product Manager",$$slots:{default:[wu]},$$scope:{ctx:i}}}),re=new St({props:{content:i[4][0].four_sentence_summary}});let J=i[0].showroadmap.value!=="no"&&gn(i);return{c(){e=F("h2"),e.innerHTML=r,t=S(),a=F("hr"),n=S(),l=F("table"),s=F("tbody"),u=F("tr"),f=F("td"),o=F("div"),m=F("span"),C(h.$$.fragment),d=S(),$=F("span"),C(y.$$.fragment),M=S(),U=F("br"),P=S(),C(k.$$.fragment),j=S(),ie=F("br"),G=S(),I=F("h2"),I.innerHTML=z,H=S(),Q=F("hr"),ne=S(),W=F("hr"),q=S(),X=F("h3"),X.innerHTML=me,ye=S(),Oe=F("table"),le=F("tbody"),ee=F("tr"),V=F("td"),ae=F("div"),ve=F("span"),C(Se.$$.fragment),Xe=S(),ke=F("span"),C(be.$$.fragment),O=S(),C(re.$$.fragment),fe=S(),de=F("h2"),de.innerHTML=Te,Ae=S(),J&&J.c(),Ce=je(),this.h()},l(D){e=L(D,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(e)!=="svelte-5rsgt5"&&(e.innerHTML=r),t=R(D),a=L(D,"HR",{style:!0}),n=R(D),l=L(D,"TABLE",{style:!0});var B=se(l);s=L(B,"TBODY",{});var Ee=se(s);u=L(Ee,"TR",{});var De=se(u);f=L(De,"TD",{style:!0});var _e=se(f);o=L(_e,"DIV",{style:!0});var we=se(o);m=L(we,"SPAN",{style:!0});var ze=se(m);A(h.$$.fragment,ze),ze.forEach(p),d=R(we),$=L(we,"SPAN",{style:!0});var Ie=se($);A(y.$$.fragment,Ie),Ie.forEach(p),we.forEach(p),_e.forEach(p),De.forEach(p),Ee.forEach(p),B.forEach(p),M=R(D),U=L(D,"BR",{}),P=R(D),A(k.$$.fragment,D),j=R(D),ie=L(D,"BR",{}),G=R(D),I=L(D,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(I)!=="svelte-1ycxcbc"&&(I.innerHTML=z),H=R(D),Q=L(D,"HR",{style:!0}),ne=R(D),W=L(D,"HR",{style:!0}),q=R(D),X=L(D,"H3",{class:!0,id:!0,"data-svelte-h":!0}),yt(X)!=="svelte-1iqdgtt"&&(X.innerHTML=me),ye=R(D),Oe=L(D,"TABLE",{style:!0});var Fe=se(Oe);le=L(Fe,"TBODY",{});var Pe=se(le);ee=L(Pe,"TR",{});var xe=se(ee);V=L(xe,"TD",{style:!0});var qe=se(V);ae=L(qe,"DIV",{style:!0});var Ve=se(ae);ve=L(Ve,"SPAN",{style:!0});var Ne=se(ve);A(Se.$$.fragment,Ne),Ne.forEach(p),Xe=R(Ve),ke=L(Ve,"SPAN",{style:!0});var Le=se(ke);A(be.$$.fragment,Le),Le.forEach(p),Ve.forEach(p),qe.forEach(p),xe.forEach(p),Pe.forEach(p),Fe.forEach(p),O=R(D),A(re.$$.fragment,D),fe=R(D),de=L(D,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(de)!=="svelte-1w5ky1z"&&(de.innerHTML=Te),Ae=R(D),J&&J.l(D),Ce=je(),this.h()},h(){Y(e,"class","markdown"),Y(e,"id","roadmap-explorer"),te(a,"border","1px solid black"),te(m,"display","inline-block"),te(m,"margin","0 8px 8px 0"),te($,"display","inline-block"),te($,"margin","0 0 8px 0"),te(o,"display","inline-block"),te(o,"text-align","left"),te(f,"padding","12px"),te(f,"text-align","center"),te(l,"width","100%"),te(l,"border-collapse","collapse"),te(l,"table-layout","fixed"),Y(I,"class","markdown"),Y(I,"id","roadmap-version-data"),te(Q,"border","3px solid black"),te(W,"border","1px solid black"),Y(X,"class","markdown"),Y(X,"id","roadmap-version-overview"),te(ve,"display","inline-block"),te(ve,"margin","0 8px 8px 0"),te(ke,"display","inline-block"),te(ke,"margin","0 0 8px 0"),te(ae,"display","inline-block"),te(ae,"text-align","left"),te(V,"padding","12px"),te(V,"text-align","center"),te(Oe,"width","100%"),te(Oe,"border-collapse","collapse"),te(Oe,"table-layout","fixed"),Y(de,"class","markdown"),Y(de,"id","show")},m(D,B){g(D,e,B),g(D,t,B),g(D,a,B),g(D,n,B),g(D,l,B),K(l,s),K(s,u),K(u,f),K(f,o),K(o,m),T(h,m,null),K(o,d),K(o,$),T(y,$,null),g(D,M,B),g(D,U,B),g(D,P,B),T(k,D,B),g(D,j,B),g(D,ie,B),g(D,G,B),g(D,I,B),g(D,H,B),g(D,Q,B),g(D,ne,B),g(D,W,B),g(D,q,B),g(D,X,B),g(D,ye,B),g(D,Oe,B),K(Oe,le),K(le,ee),K(ee,V),K(V,ae),K(ae,ve),T(Se,ve,null),K(ae,Xe),K(ae,ke),T(be,ke,null),g(D,O,B),T(re,D,B),g(D,fe,B),g(D,de,B),g(D,Ae,B),J&&J.m(D,B),g(D,Ce,B),Me=!0},p(D,B){const Ee={};B[6]&131072&&(Ee.$$scope={dirty:B,ctx:D}),h.$set(Ee);const De={};B[1]&2&&(De.data=D[32]),y.$set(De);const _e={};B[0]&2&&(_e.content=D[1].map(Jn).join(`

`)),k.$set(_e);const we={};B[6]&131072&&(we.$$scope={dirty:B,ctx:D}),Se.$set(we);const ze={};B[6]&131072&&(ze.$$scope={dirty:B,ctx:D}),be.$set(ze);const Ie={};B[0]&16&&(Ie.content=D[4][0].four_sentence_summary),re.$set(Ie),D[0].showroadmap.value!=="no"?J?(J.p(D,B),B[0]&1&&c(J,1)):(J=gn(D),J.c(),c(J,1),J.m(Ce.parentNode,Ce)):J&&(oe(),b(J,1,1,()=>{J=null}),ue())},i(D){Me||(c(h.$$.fragment,D),c(y.$$.fragment,D),c(k.$$.fragment,D),c(Se.$$.fragment,D),c(be.$$.fragment,D),c(re.$$.fragment,D),c(J),Me=!0)},o(D){b(h.$$.fragment,D),b(y.$$.fragment,D),b(k.$$.fragment,D),b(Se.$$.fragment,D),b(be.$$.fragment,D),b(re.$$.fragment,D),b(J),Me=!1},d(D){D&&(p(e),p(t),p(a),p(n),p(l),p(M),p(U),p(P),p(j),p(ie),p(G),p(I),p(H),p(Q),p(ne),p(W),p(q),p(X),p(ye),p(Oe),p(O),p(fe),p(de),p(Ae),p(Ce)),E(h),E(y),E(k,D),E(Se),E(be),E(re,D),J&&J.d(D)}}}function Ru(i){let e,r,t,a;return e=new an({props:{label:"Platform: Delivery Overview & Analysis",$$slots:{default:[yu]},$$scope:{ctx:i}}}),t=new an({props:{label:"Programme Documentation 2021-2024",$$slots:{default:[$u]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment)},l(n){A(e.$$.fragment,n),r=R(n),A(t.$$.fragment,n)},m(n,l){T(e,n,l),g(n,r,l),T(t,n,l),a=!0},p(n,l){const s={};l[0]&826343781|l[1]&4|l[6]&131072&&(s.$$scope={dirty:l,ctx:n}),e.$set(s);const u={};l[0]&4194323|l[1]&2|l[6]&131072&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){a||(c(e.$$.fragment,n),c(t.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),a=!1},d(n){n&&p(r),E(e,n),E(t,n)}}}function yn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_revision_summaries_all",queryResult:i[3]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8&&(n.queryResult=t[3]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function vn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_revision_summaries_filtered",queryResult:i[4]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&16&&(n.queryResult=t[4]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function kn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_revision_summaries_filtered_delivery",queryResult:i[5]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&32&&(n.queryResult=t[5]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function wn(i){let e,r;return e=new Ye({props:{queryID:"test",queryResult:i[6]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&64&&(n.queryResult=t[6]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function $n(i){let e,r;return e=new Ye({props:{queryID:"roadmap_versions",queryResult:i[7]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&128&&(n.queryResult=t[7]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Rn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_versions_filtered",queryResult:i[8]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&256&&(n.queryResult=t[8]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Sn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_key_dates",queryResult:i[9]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&512&&(n.queryResult=t[9]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function En(i){let e,r;return e=new Ye({props:{queryID:"bob2",queryResult:i[10]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1024&&(n.queryResult=t[10]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Tn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_summary_data",queryResult:i[11]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2048&&(n.queryResult=t[11]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function An(i){let e,r;return e=new Ye({props:{queryID:"roadmap_summary_data_filtered",queryResult:i[12]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&4096&&(n.queryResult=t[12]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Cn(i){let e,r;return e=new Ye({props:{queryID:"dimgraph_data_input",queryResult:i[13]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8192&&(n.queryResult=t[13]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function In(i){let e,r;return e=new Ye({props:{queryID:"dimgraph_data",queryResult:i[14]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&16384&&(n.queryResult=t[14]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Dn(i){let e,r;return e=new Ye({props:{queryID:"testing",queryResult:i[15]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&32768&&(n.queryResult=t[15]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function On(i){let e,r;return e=new Ye({props:{queryID:"actvity_barchart_by_year2",queryResult:i[16]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&65536&&(n.queryResult=t[16]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function qn(i){let e,r;return e=new Ye({props:{queryID:"milestone_last_merge_date",queryResult:i[17]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&131072&&(n.queryResult=t[17]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Nn(i){let e,r;return e=new Ye({props:{queryID:"new_roadmap",queryResult:i[18]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&262144&&(n.queryResult=t[18]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Ln(i){let e,r;return e=new Ye({props:{queryID:"new_roadmap_filtered",queryResult:i[19]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&524288&&(n.queryResult=t[19]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Fn(i){let e,r;return e=new Ye({props:{queryID:"new_roadmap2",queryResult:i[20]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1048576&&(n.queryResult=t[20]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Mn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_details",queryResult:i[21]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2097152&&(n.queryResult=t[21]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function zn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_details_filtered",queryResult:i[22]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&4194304&&(n.queryResult=t[22]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Pn(i){let e,r;return e=new Ye({props:{queryID:"milestone_details",queryResult:i[23]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8388608&&(n.queryResult=t[23]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Hn(i){let e,r;return e=new Ye({props:{queryID:"milestone_rolllup_by_year",queryResult:i[24]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&16777216&&(n.queryResult=t[24]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Vn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_catagories",queryResult:i[25]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&33554432&&(n.queryResult=t[25]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Bn(i){let e,r;return e=new Ye({props:{queryID:"new_dim_data",queryResult:i[26]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&67108864&&(n.queryResult=t[26]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function xn(i){let e,r;return e=new Ye({props:{queryID:"new_dim_data_filtered",queryResult:i[27]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&134217728&&(n.queryResult=t[27]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Un(i){let e,r;return e=new Ye({props:{queryID:"owners",queryResult:i[28]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&268435456&&(n.queryResult=t[28]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Gn(i){let e,r;return e=new Ye({props:{queryID:"repos",queryResult:i[29]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&536870912&&(n.queryResult=t[29]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Wn(i){let e,r;return e=new Ye({props:{queryID:"roadmap2025",queryResult:i[30]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1073741824&&(n.queryResult=t[30]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Yn(i){let e,r;return e=new Ye({props:{queryID:"get_plan_revisions_by_version",queryResult:i[31]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[1]&1&&(n.queryResult=t[31]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function jn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_sections_payload",queryResult:i[1]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2&&(n.queryResult=t[1]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Qn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_sections",queryResult:i[32]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[1]&2&&(n.queryResult=t[32]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Su(i){let e,r,t,a,n,l,s,u,f,o,m,h,d,$,y,M,U,P,k,j,ie,G,I,z,H,Q,ne,W,q,X,me,ye,Oe,le,ee,V,ae,ve,Se;function Xe(_,v){return typeof Ke<"u"&&Ke.title?au:ru}let be=Xe()(i),O=typeof Ke=="object"&&iu();l=new to({props:{fullWidth:"true",$$slots:{default:[Ru]},$$scope:{ctx:i}}});let re=i[3]&&yn(i),fe=i[4]&&vn(i),de=i[5]&&kn(i),Te=i[6]&&wn(i),Ae=i[7]&&$n(i),Ce=i[8]&&Rn(i),Me=i[9]&&Sn(i),J=i[10]&&En(i),D=i[11]&&Tn(i),B=i[12]&&An(i),Ee=i[13]&&Cn(i),De=i[14]&&In(i),_e=i[15]&&Dn(i),we=i[16]&&On(i),ze=i[17]&&qn(i),Ie=i[18]&&Nn(i),Fe=i[19]&&Ln(i),Pe=i[20]&&Fn(i),xe=i[21]&&Mn(i),qe=i[22]&&zn(i),Ve=i[23]&&Pn(i),Ne=i[24]&&Hn(i),Le=i[25]&&Vn(i),ce=i[26]&&Bn(i),ge=i[27]&&xn(i),$e=i[28]&&Un(i),Re=i[29]&&Gn(i),pe=i[30]&&Wn(i),he=i[31]&&Yn(i),w=i[1]&&jn(i),N=i[32]&&Qn(i);return{c(){e=S(),be.c(),r=F("meta"),t=F("meta"),O&&O.c(),a=je(),n=S(),C(l.$$.fragment),s=S(),re&&re.c(),u=S(),fe&&fe.c(),f=S(),de&&de.c(),o=S(),Te&&Te.c(),m=S(),Ae&&Ae.c(),h=S(),Ce&&Ce.c(),d=S(),Me&&Me.c(),$=S(),J&&J.c(),y=S(),D&&D.c(),M=S(),B&&B.c(),U=S(),Ee&&Ee.c(),P=S(),De&&De.c(),k=S(),_e&&_e.c(),j=S(),we&&we.c(),ie=S(),ze&&ze.c(),G=S(),Ie&&Ie.c(),I=S(),Fe&&Fe.c(),z=S(),Pe&&Pe.c(),H=S(),xe&&xe.c(),Q=S(),qe&&qe.c(),ne=S(),Ve&&Ve.c(),W=S(),Ne&&Ne.c(),q=S(),Le&&Le.c(),X=S(),ce&&ce.c(),me=S(),ge&&ge.c(),ye=S(),$e&&$e.c(),Oe=S(),Re&&Re.c(),le=S(),pe&&pe.c(),ee=S(),he&&he.c(),V=S(),w&&w.c(),ae=S(),N&&N.c(),ve=je(),this.h()},l(_){e=R(_);const v=Tl("svelte-2igo1p",document.head);be.l(v),r=L(v,"META",{name:!0,content:!0}),t=L(v,"META",{name:!0,content:!0}),O&&O.l(v),a=je(),v.forEach(p),n=R(_),A(l.$$.fragment,_),s=R(_),re&&re.l(_),u=R(_),fe&&fe.l(_),f=R(_),de&&de.l(_),o=R(_),Te&&Te.l(_),m=R(_),Ae&&Ae.l(_),h=R(_),Ce&&Ce.l(_),d=R(_),Me&&Me.l(_),$=R(_),J&&J.l(_),y=R(_),D&&D.l(_),M=R(_),B&&B.l(_),U=R(_),Ee&&Ee.l(_),P=R(_),De&&De.l(_),k=R(_),_e&&_e.l(_),j=R(_),we&&we.l(_),ie=R(_),ze&&ze.l(_),G=R(_),Ie&&Ie.l(_),I=R(_),Fe&&Fe.l(_),z=R(_),Pe&&Pe.l(_),H=R(_),xe&&xe.l(_),Q=R(_),qe&&qe.l(_),ne=R(_),Ve&&Ve.l(_),W=R(_),Ne&&Ne.l(_),q=R(_),Le&&Le.l(_),X=R(_),ce&&ce.l(_),me=R(_),ge&&ge.l(_),ye=R(_),$e&&$e.l(_),Oe=R(_),Re&&Re.l(_),le=R(_),pe&&pe.l(_),ee=R(_),he&&he.l(_),V=R(_),w&&w.l(_),ae=R(_),N&&N.l(_),ve=je(),this.h()},h(){Y(r,"name","twitter:card"),Y(r,"content","summary_large_image"),Y(t,"name","twitter:site"),Y(t,"content","@evidence_dev")},m(_,v){g(_,e,v),be.m(document.head,null),K(document.head,r),K(document.head,t),O&&O.m(document.head,null),K(document.head,a),g(_,n,v),T(l,_,v),g(_,s,v),re&&re.m(_,v),g(_,u,v),fe&&fe.m(_,v),g(_,f,v),de&&de.m(_,v),g(_,o,v),Te&&Te.m(_,v),g(_,m,v),Ae&&Ae.m(_,v),g(_,h,v),Ce&&Ce.m(_,v),g(_,d,v),Me&&Me.m(_,v),g(_,$,v),J&&J.m(_,v),g(_,y,v),D&&D.m(_,v),g(_,M,v),B&&B.m(_,v),g(_,U,v),Ee&&Ee.m(_,v),g(_,P,v),De&&De.m(_,v),g(_,k,v),_e&&_e.m(_,v),g(_,j,v),we&&we.m(_,v),g(_,ie,v),ze&&ze.m(_,v),g(_,G,v),Ie&&Ie.m(_,v),g(_,I,v),Fe&&Fe.m(_,v),g(_,z,v),Pe&&Pe.m(_,v),g(_,H,v),xe&&xe.m(_,v),g(_,Q,v),qe&&qe.m(_,v),g(_,ne,v),Ve&&Ve.m(_,v),g(_,W,v),Ne&&Ne.m(_,v),g(_,q,v),Le&&Le.m(_,v),g(_,X,v),ce&&ce.m(_,v),g(_,me,v),ge&&ge.m(_,v),g(_,ye,v),$e&&$e.m(_,v),g(_,Oe,v),Re&&Re.m(_,v),g(_,le,v),pe&&pe.m(_,v),g(_,ee,v),he&&he.m(_,v),g(_,V,v),w&&w.m(_,v),g(_,ae,v),N&&N.m(_,v),g(_,ve,v),Se=!0},p(_,v){be.p(_,v),typeof Ke=="object"&&O.p(_,v);const nt={};v[0]&826343799|v[1]&6|v[6]&131072&&(nt.$$scope={dirty:v,ctx:_}),l.$set(nt),_[3]?re?(re.p(_,v),v[0]&8&&c(re,1)):(re=yn(_),re.c(),c(re,1),re.m(u.parentNode,u)):re&&(oe(),b(re,1,1,()=>{re=null}),ue()),_[4]?fe?(fe.p(_,v),v[0]&16&&c(fe,1)):(fe=vn(_),fe.c(),c(fe,1),fe.m(f.parentNode,f)):fe&&(oe(),b(fe,1,1,()=>{fe=null}),ue()),_[5]?de?(de.p(_,v),v[0]&32&&c(de,1)):(de=kn(_),de.c(),c(de,1),de.m(o.parentNode,o)):de&&(oe(),b(de,1,1,()=>{de=null}),ue()),_[6]?Te?(Te.p(_,v),v[0]&64&&c(Te,1)):(Te=wn(_),Te.c(),c(Te,1),Te.m(m.parentNode,m)):Te&&(oe(),b(Te,1,1,()=>{Te=null}),ue()),_[7]?Ae?(Ae.p(_,v),v[0]&128&&c(Ae,1)):(Ae=$n(_),Ae.c(),c(Ae,1),Ae.m(h.parentNode,h)):Ae&&(oe(),b(Ae,1,1,()=>{Ae=null}),ue()),_[8]?Ce?(Ce.p(_,v),v[0]&256&&c(Ce,1)):(Ce=Rn(_),Ce.c(),c(Ce,1),Ce.m(d.parentNode,d)):Ce&&(oe(),b(Ce,1,1,()=>{Ce=null}),ue()),_[9]?Me?(Me.p(_,v),v[0]&512&&c(Me,1)):(Me=Sn(_),Me.c(),c(Me,1),Me.m($.parentNode,$)):Me&&(oe(),b(Me,1,1,()=>{Me=null}),ue()),_[10]?J?(J.p(_,v),v[0]&1024&&c(J,1)):(J=En(_),J.c(),c(J,1),J.m(y.parentNode,y)):J&&(oe(),b(J,1,1,()=>{J=null}),ue()),_[11]?D?(D.p(_,v),v[0]&2048&&c(D,1)):(D=Tn(_),D.c(),c(D,1),D.m(M.parentNode,M)):D&&(oe(),b(D,1,1,()=>{D=null}),ue()),_[12]?B?(B.p(_,v),v[0]&4096&&c(B,1)):(B=An(_),B.c(),c(B,1),B.m(U.parentNode,U)):B&&(oe(),b(B,1,1,()=>{B=null}),ue()),_[13]?Ee?(Ee.p(_,v),v[0]&8192&&c(Ee,1)):(Ee=Cn(_),Ee.c(),c(Ee,1),Ee.m(P.parentNode,P)):Ee&&(oe(),b(Ee,1,1,()=>{Ee=null}),ue()),_[14]?De?(De.p(_,v),v[0]&16384&&c(De,1)):(De=In(_),De.c(),c(De,1),De.m(k.parentNode,k)):De&&(oe(),b(De,1,1,()=>{De=null}),ue()),_[15]?_e?(_e.p(_,v),v[0]&32768&&c(_e,1)):(_e=Dn(_),_e.c(),c(_e,1),_e.m(j.parentNode,j)):_e&&(oe(),b(_e,1,1,()=>{_e=null}),ue()),_[16]?we?(we.p(_,v),v[0]&65536&&c(we,1)):(we=On(_),we.c(),c(we,1),we.m(ie.parentNode,ie)):we&&(oe(),b(we,1,1,()=>{we=null}),ue()),_[17]?ze?(ze.p(_,v),v[0]&131072&&c(ze,1)):(ze=qn(_),ze.c(),c(ze,1),ze.m(G.parentNode,G)):ze&&(oe(),b(ze,1,1,()=>{ze=null}),ue()),_[18]?Ie?(Ie.p(_,v),v[0]&262144&&c(Ie,1)):(Ie=Nn(_),Ie.c(),c(Ie,1),Ie.m(I.parentNode,I)):Ie&&(oe(),b(Ie,1,1,()=>{Ie=null}),ue()),_[19]?Fe?(Fe.p(_,v),v[0]&524288&&c(Fe,1)):(Fe=Ln(_),Fe.c(),c(Fe,1),Fe.m(z.parentNode,z)):Fe&&(oe(),b(Fe,1,1,()=>{Fe=null}),ue()),_[20]?Pe?(Pe.p(_,v),v[0]&1048576&&c(Pe,1)):(Pe=Fn(_),Pe.c(),c(Pe,1),Pe.m(H.parentNode,H)):Pe&&(oe(),b(Pe,1,1,()=>{Pe=null}),ue()),_[21]?xe?(xe.p(_,v),v[0]&2097152&&c(xe,1)):(xe=Mn(_),xe.c(),c(xe,1),xe.m(Q.parentNode,Q)):xe&&(oe(),b(xe,1,1,()=>{xe=null}),ue()),_[22]?qe?(qe.p(_,v),v[0]&4194304&&c(qe,1)):(qe=zn(_),qe.c(),c(qe,1),qe.m(ne.parentNode,ne)):qe&&(oe(),b(qe,1,1,()=>{qe=null}),ue()),_[23]?Ve?(Ve.p(_,v),v[0]&8388608&&c(Ve,1)):(Ve=Pn(_),Ve.c(),c(Ve,1),Ve.m(W.parentNode,W)):Ve&&(oe(),b(Ve,1,1,()=>{Ve=null}),ue()),_[24]?Ne?(Ne.p(_,v),v[0]&16777216&&c(Ne,1)):(Ne=Hn(_),Ne.c(),c(Ne,1),Ne.m(q.parentNode,q)):Ne&&(oe(),b(Ne,1,1,()=>{Ne=null}),ue()),_[25]?Le?(Le.p(_,v),v[0]&33554432&&c(Le,1)):(Le=Vn(_),Le.c(),c(Le,1),Le.m(X.parentNode,X)):Le&&(oe(),b(Le,1,1,()=>{Le=null}),ue()),_[26]?ce?(ce.p(_,v),v[0]&67108864&&c(ce,1)):(ce=Bn(_),ce.c(),c(ce,1),ce.m(me.parentNode,me)):ce&&(oe(),b(ce,1,1,()=>{ce=null}),ue()),_[27]?ge?(ge.p(_,v),v[0]&134217728&&c(ge,1)):(ge=xn(_),ge.c(),c(ge,1),ge.m(ye.parentNode,ye)):ge&&(oe(),b(ge,1,1,()=>{ge=null}),ue()),_[28]?$e?($e.p(_,v),v[0]&268435456&&c($e,1)):($e=Un(_),$e.c(),c($e,1),$e.m(Oe.parentNode,Oe)):$e&&(oe(),b($e,1,1,()=>{$e=null}),ue()),_[29]?Re?(Re.p(_,v),v[0]&536870912&&c(Re,1)):(Re=Gn(_),Re.c(),c(Re,1),Re.m(le.parentNode,le)):Re&&(oe(),b(Re,1,1,()=>{Re=null}),ue()),_[30]?pe?(pe.p(_,v),v[0]&1073741824&&c(pe,1)):(pe=Wn(_),pe.c(),c(pe,1),pe.m(ee.parentNode,ee)):pe&&(oe(),b(pe,1,1,()=>{pe=null}),ue()),_[31]?he?(he.p(_,v),v[1]&1&&c(he,1)):(he=Yn(_),he.c(),c(he,1),he.m(V.parentNode,V)):he&&(oe(),b(he,1,1,()=>{he=null}),ue()),_[1]?w?(w.p(_,v),v[0]&2&&c(w,1)):(w=jn(_),w.c(),c(w,1),w.m(ae.parentNode,ae)):w&&(oe(),b(w,1,1,()=>{w=null}),ue()),_[32]?N?(N.p(_,v),v[1]&2&&c(N,1)):(N=Qn(_),N.c(),c(N,1),N.m(ve.parentNode,ve)):N&&(oe(),b(N,1,1,()=>{N=null}),ue())},i(_){Se||(c(l.$$.fragment,_),c(re),c(fe),c(de),c(Te),c(Ae),c(Ce),c(Me),c(J),c(D),c(B),c(Ee),c(De),c(_e),c(we),c(ze),c(Ie),c(Fe),c(Pe),c(xe),c(qe),c(Ve),c(Ne),c(Le),c(ce),c(ge),c($e),c(Re),c(pe),c(he),c(w),c(N),Se=!0)},o(_){b(l.$$.fragment,_),b(re),b(fe),b(de),b(Te),b(Ae),b(Ce),b(Me),b(J),b(D),b(B),b(Ee),b(De),b(_e),b(we),b(ze),b(Ie),b(Fe),b(Pe),b(xe),b(qe),b(Ve),b(Ne),b(Le),b(ce),b(ge),b($e),b(Re),b(pe),b(he),b(w),b(N),Se=!1},d(_){_&&(p(e),p(n),p(s),p(u),p(f),p(o),p(m),p(h),p(d),p($),p(y),p(M),p(U),p(P),p(k),p(j),p(ie),p(G),p(I),p(z),p(H),p(Q),p(ne),p(W),p(q),p(X),p(me),p(ye),p(Oe),p(le),p(ee),p(V),p(ae),p(ve)),be.d(_),p(r),p(t),O&&O.d(_),p(a),E(l,_),re&&re.d(_),fe&&fe.d(_),de&&de.d(_),Te&&Te.d(_),Ae&&Ae.d(_),Ce&&Ce.d(_),Me&&Me.d(_),J&&J.d(_),D&&D.d(_),B&&B.d(_),Ee&&Ee.d(_),De&&De.d(_),_e&&_e.d(_),we&&we.d(_),ze&&ze.d(_),Ie&&Ie.d(_),Fe&&Fe.d(_),Pe&&Pe.d(_),xe&&xe.d(_),qe&&qe.d(_),Ve&&Ve.d(_),Ne&&Ne.d(_),Le&&Le.d(_),ce&&ce.d(_),ge&&ge.d(_),$e&&$e.d(_),Re&&Re.d(_),pe&&pe.d(_),he&&he.d(_),w&&w.d(_),N&&N.d(_)}}}const Ke={title:"Exclipse Zenoh Roadmap Progress and Versions"},Jn=i=>`${i.heading||""}

${i.content||""}`;function Eu(i,e,r){let t,a,n,l,s,u;Rt(i,ls,x=>r(163,s=x)),Rt(i,Hi,x=>r(168,u=x));let{data:f}=e,{data:o={},customFormattingSettings:m,__db:h,inputs:d}=f;lt(Hi,u="f939c3a1d667647bd0f79ce76e2fcdc8",u);let $=Kl(yr(d));el($.subscribe(x=>r(0,d=x))),wi(ts,{getCustomFormats:()=>m.customFormats||[]});const y=(x,kl)=>ss(h.query,x,{query_name:kl});Xl(y);let M=s.params;na(()=>!0);let U={initialData:void 0,initialError:void 0},P=Z`select *
from eind.roadmap_revision_summaries`,k=`select *
from eind.roadmap_revision_summaries`;o.roadmap_revision_summaries_all_data&&(o.roadmap_revision_summaries_all_data instanceof Error?U.initialError=o.roadmap_revision_summaries_all_data:U.initialData=o.roadmap_revision_summaries_all_data,o.roadmap_revision_summaries_all_columns&&(U.knownColumns=o.roadmap_revision_summaries_all_columns));let j,ie=!1;const G=He.createReactive({callback:x=>{r(3,j=x)},execFn:y},{id:"roadmap_revision_summaries_all",...U});G(k,{noResolve:P,...U}),globalThis[Symbol.for("roadmap_revision_summaries_all")]={get value(){return j}};let I={initialData:void 0,initialError:void 0},z=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`,H=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`;o.roadmap_revision_summaries_filtered_data&&(o.roadmap_revision_summaries_filtered_data instanceof Error?I.initialError=o.roadmap_revision_summaries_filtered_data:I.initialData=o.roadmap_revision_summaries_filtered_data,o.roadmap_revision_summaries_filtered_columns&&(I.knownColumns=o.roadmap_revision_summaries_filtered_columns));let Q,ne=!1;const W=He.createReactive({callback:x=>{r(4,Q=x)},execFn:y},{id:"roadmap_revision_summaries_filtered",...I});W(H,{noResolve:z,...I}),globalThis[Symbol.for("roadmap_revision_summaries_filtered")]={get value(){return Q}};let q={initialData:void 0,initialError:void 0},X=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`,me=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`;o.roadmap_revision_summaries_filtered_delivery_data&&(o.roadmap_revision_summaries_filtered_delivery_data instanceof Error?q.initialError=o.roadmap_revision_summaries_filtered_delivery_data:q.initialData=o.roadmap_revision_summaries_filtered_delivery_data,o.roadmap_revision_summaries_filtered_delivery_columns&&(q.knownColumns=o.roadmap_revision_summaries_filtered_delivery_columns));let ye,Oe=!1;const le=He.createReactive({callback:x=>{r(5,ye=x)},execFn:y},{id:"roadmap_revision_summaries_filtered_delivery",...q});le(me,{noResolve:X,...q}),globalThis[Symbol.for("roadmap_revision_summaries_filtered_delivery")]={get value(){return ye}};let ee={initialData:void 0,initialError:void 0},V=Z`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`,ae=`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`;o.test_data&&(o.test_data instanceof Error?ee.initialError=o.test_data:ee.initialData=o.test_data,o.test_columns&&(ee.knownColumns=o.test_columns));let ve,Se=!1;const Xe=He.createReactive({callback:x=>{r(6,ve=x)},execFn:y},{id:"test",...ee});Xe(ae,{noResolve:V,...ee}),globalThis[Symbol.for("test")]={get value(){return ve}};let ke={initialData:void 0,initialError:void 0},be=Z`select * 
from eind.zenoh_roadmap_versions`,O=`select * 
from eind.zenoh_roadmap_versions`;o.roadmap_versions_data&&(o.roadmap_versions_data instanceof Error?ke.initialError=o.roadmap_versions_data:ke.initialData=o.roadmap_versions_data,o.roadmap_versions_columns&&(ke.knownColumns=o.roadmap_versions_columns));let re,fe=!1;const de=He.createReactive({callback:x=>{r(7,re=x)},execFn:y},{id:"roadmap_versions",...ke});de(O,{noResolve:be,...ke}),globalThis[Symbol.for("roadmap_versions")]={get value(){return re}};let Te={initialData:void 0,initialError:void 0},Ae=Z`select rv.year,
       rv.milestone_id,
       rv.demanded_milestone_items,
       rv.demanded_outstanding_pct,
       rv.actioned_milestone_items,
       rv.actioned_outstanding_pct,
       rv.milestone_description,
       rv.milestone_date,
       rv.last_merge_date
from (select * 
from eind.zenoh_roadmap_versions) as rv

where year = ${d.years.value}`,Ce=`select rv.year,
       rv.milestone_id,
       rv.demanded_milestone_items,
       rv.demanded_outstanding_pct,
       rv.actioned_milestone_items,
       rv.actioned_outstanding_pct,
       rv.milestone_description,
       rv.milestone_date,
       rv.last_merge_date
from (select * 
from eind.zenoh_roadmap_versions) as rv

where year = ${d.years.value}`;o.roadmap_versions_filtered_data&&(o.roadmap_versions_filtered_data instanceof Error?Te.initialError=o.roadmap_versions_filtered_data:Te.initialData=o.roadmap_versions_filtered_data,o.roadmap_versions_filtered_columns&&(Te.knownColumns=o.roadmap_versions_filtered_columns));let Me,J=!1;const D=He.createReactive({callback:x=>{r(8,Me=x)},execFn:y},{id:"roadmap_versions_filtered",...Te});D(Ce,{noResolve:Ae,...Te}),globalThis[Symbol.for("roadmap_versions_filtered")]={get value(){return Me}};let B={initialData:void 0,initialError:void 0},Ee=Z`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`,De=`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`;o.roadmap_key_dates_data&&(o.roadmap_key_dates_data instanceof Error?B.initialError=o.roadmap_key_dates_data:B.initialData=o.roadmap_key_dates_data,o.roadmap_key_dates_columns&&(B.knownColumns=o.roadmap_key_dates_columns));let _e,we=!1;const ze=He.createReactive({callback:x=>{r(9,_e=x)},execFn:y},{id:"roadmap_key_dates",...B});ze(De,{noResolve:Ee,...B}),globalThis[Symbol.for("roadmap_key_dates")]={get value(){return _e}};let Ie={initialData:void 0,initialError:void 0},Fe=Z`select * 
FROM eind.zenoh_milestone_last_merge_date`,Pe=`select * 
FROM eind.zenoh_milestone_last_merge_date`;o.bob2_data&&(o.bob2_data instanceof Error?Ie.initialError=o.bob2_data:Ie.initialData=o.bob2_data,o.bob2_columns&&(Ie.knownColumns=o.bob2_columns));let xe,qe=!1;const Ve=He.createReactive({callback:x=>{r(10,xe=x)},execFn:y},{id:"bob2",...Ie});Ve(Pe,{noResolve:Fe,...Ie}),globalThis[Symbol.for("bob2")]={get value(){return xe}};let Ne={initialData:void 0,initialError:void 0},Le=Z`WITH fred AS (
 SELECT
   rv.year AS milestone_year,
   rd.milestone_date AS ms_date,
   lmd.last_merge_date as final_merge,
   rv.milestone_id AS rvmilestone_id,
   COALESCE(AVG(bd.remaining_effort)/100, 0) AS remaining,
   rv.milestone_description AS description,
   rv.milestone_number
 FROM
   eind.zenoh_roadmap_versions AS rv
   LEFT Join eind.roadmap_dates rd
       on rv.milestone_number = rd.milestone_number
       and rv.year = rd.year
   LEFT JOIN eind.milestone_activity_delivery_data AS bd
     ON rv.milestone_number = bd.milestone_number
    AND rv.year = bd.year
   LEFT JOIN eind.zenoh_milestone_last_merge_date as lmd
   on rv.milestone_id =lmd.milestone_id
   and rv.year = lmd.year
 GROUP BY
   rv.year,
   rv.milestone_id,
   rd.milestone_date,
   rv.milestone_description,
   rv.milestone_number,
   lmd.last_merge_date
)

SELECT *
FROM fred`,ce=`WITH fred AS (
 SELECT
   rv.year AS milestone_year,
   rd.milestone_date AS ms_date,
   lmd.last_merge_date as final_merge,
   rv.milestone_id AS rvmilestone_id,
   COALESCE(AVG(bd.remaining_effort)/100, 0) AS remaining,
   rv.milestone_description AS description,
   rv.milestone_number
 FROM
   eind.zenoh_roadmap_versions AS rv
   LEFT Join eind.roadmap_dates rd
       on rv.milestone_number = rd.milestone_number
       and rv.year = rd.year
   LEFT JOIN eind.milestone_activity_delivery_data AS bd
     ON rv.milestone_number = bd.milestone_number
    AND rv.year = bd.year
   LEFT JOIN eind.zenoh_milestone_last_merge_date as lmd
   on rv.milestone_id =lmd.milestone_id
   and rv.year = lmd.year
 GROUP BY
   rv.year,
   rv.milestone_id,
   rd.milestone_date,
   rv.milestone_description,
   rv.milestone_number,
   lmd.last_merge_date
)

SELECT *
FROM fred`;o.roadmap_summary_data_data&&(o.roadmap_summary_data_data instanceof Error?Ne.initialError=o.roadmap_summary_data_data:Ne.initialData=o.roadmap_summary_data_data,o.roadmap_summary_data_columns&&(Ne.knownColumns=o.roadmap_summary_data_columns));let ge,$e=!1;const Re=He.createReactive({callback:x=>{r(11,ge=x)},execFn:y},{id:"roadmap_summary_data",...Ne});Re(ce,{noResolve:Le,...Ne}),globalThis[Symbol.for("roadmap_summary_data")]={get value(){return ge}};let pe={initialData:void 0,initialError:void 0},he=Z`WITH fred AS (
  SELECT
    rv.year AS milestone_year,
    rv.milestone_date AS ms_date,
    lmd.last_merge_date AS final_merge,
    rv.milestone_id AS rvmilestone_id,
    COALESCE(AVG(bd.remaining_effort) / 100.0, 0) AS remaining,
    rv.milestone_description AS description,
    rv.milestone_number
  FROM
    eind.zenoh_roadmap_versions AS rv
    LEFT JOIN eind.milestone_activity_delivery_data AS bd
      ON rv.milestone_number = bd.milestone_number
     AND rv.year = bd.year
    LEFT JOIN eind.zenoh_milestone_last_merge_date AS lmd
      ON rv.milestone_id = lmd.milestone_id
     AND rv.year = lmd.year
  GROUP BY
    rv.year,
    rv.milestone_id,
    rv.milestone_date,
    rv.milestone_description,
    rv.milestone_number,
    lmd.last_merge_date
)

SELECT
  rvmilestone_id,
  ms_date,
  final_merge,
  CASE
    WHEN final_merge <  ms_date THEN 'Early'
    WHEN final_merge =  ms_date THEN 'On Time'
    WHEN final_merge >  ms_date THEN 'Late'
    ELSE 'Not matched'
  END AS mls_status,
  remaining,
  description
FROM fred
WHERE milestone_year = ${d.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`,w=`WITH fred AS (
  SELECT
    rv.year AS milestone_year,
    rv.milestone_date AS ms_date,
    lmd.last_merge_date AS final_merge,
    rv.milestone_id AS rvmilestone_id,
    COALESCE(AVG(bd.remaining_effort) / 100.0, 0) AS remaining,
    rv.milestone_description AS description,
    rv.milestone_number
  FROM
    eind.zenoh_roadmap_versions AS rv
    LEFT JOIN eind.milestone_activity_delivery_data AS bd
      ON rv.milestone_number = bd.milestone_number
     AND rv.year = bd.year
    LEFT JOIN eind.zenoh_milestone_last_merge_date AS lmd
      ON rv.milestone_id = lmd.milestone_id
     AND rv.year = lmd.year
  GROUP BY
    rv.year,
    rv.milestone_id,
    rv.milestone_date,
    rv.milestone_description,
    rv.milestone_number,
    lmd.last_merge_date
)

SELECT
  rvmilestone_id,
  ms_date,
  final_merge,
  CASE
    WHEN final_merge <  ms_date THEN 'Early'
    WHEN final_merge =  ms_date THEN 'On Time'
    WHEN final_merge >  ms_date THEN 'Late'
    ELSE 'Not matched'
  END AS mls_status,
  remaining,
  description
FROM fred
WHERE milestone_year = ${d.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`;o.roadmap_summary_data_filtered_data&&(o.roadmap_summary_data_filtered_data instanceof Error?pe.initialError=o.roadmap_summary_data_filtered_data:pe.initialData=o.roadmap_summary_data_filtered_data,o.roadmap_summary_data_filtered_columns&&(pe.knownColumns=o.roadmap_summary_data_filtered_columns));let N,_=!1;const v=He.createReactive({callback:x=>{r(12,N=x)},execFn:y},{id:"roadmap_summary_data_filtered",...pe});v(w,{noResolve:he,...pe}),globalThis[Symbol.for("roadmap_summary_data_filtered")]={get value(){return N}};let nt={initialData:void 0,initialError:void 0},ut=Z`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value}`,ft=`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value}`;o.dimgraph_data_input_data&&(o.dimgraph_data_input_data instanceof Error?nt.initialError=o.dimgraph_data_input_data:nt.initialData=o.dimgraph_data_input_data,o.dimgraph_data_input_columns&&(nt.knownColumns=o.dimgraph_data_input_columns));let mt,kt=!1;const wt=He.createReactive({callback:x=>{r(13,mt=x)},execFn:y},{id:"dimgraph_data_input",...nt});wt(ft,{noResolve:ut,...nt}),globalThis[Symbol.for("dimgraph_data_input")]={get value(){return mt}};let at={initialData:void 0,initialError:void 0},et=Z`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value})`,rt=`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value})`;o.dimgraph_data_data&&(o.dimgraph_data_data instanceof Error?at.initialError=o.dimgraph_data_data:at.initialData=o.dimgraph_data_data,o.dimgraph_data_columns&&(at.knownColumns=o.dimgraph_data_columns));let oa,ua=!1;const fa=He.createReactive({callback:x=>{r(14,oa=x)},execFn:y},{id:"dimgraph_data",...at});fa(rt,{noResolve:et,...at}),globalThis[Symbol.for("dimgraph_data")]={get value(){return oa}};let Dt={initialData:void 0,initialError:void 0},Ot=Z`select *
FROM eind."zenoh_milestone_last_merge_date"`,Rr=`select *
FROM eind."zenoh_milestone_last_merge_date"`;o.testing_data&&(o.testing_data instanceof Error?Dt.initialError=o.testing_data:Dt.initialData=o.testing_data,o.testing_columns&&(Dt.knownColumns=o.testing_columns));let ma,da=!1;const _a=He.createReactive({callback:x=>{r(15,ma=x)},execFn:y},{id:"testing",...Dt});_a(Rr,{noResolve:Ot,...Dt}),globalThis[Symbol.for("testing")]={get value(){return ma}};let qt={initialData:void 0,initialError:void 0},Nt=Z`WITH bob AS (
  -- one row per (year, pr, activity)
  SELECT DISTINCT
    year,
    pr_id,
    activity
  FROM eind.milestone_activity_delivery_data
  where activity is not null
),

years AS (
  -- total PRs per year
  SELECT 
    year,
    COUNT(DISTINCT pr_id) AS prs_total
  FROM bob 
  GROUP BY year
),

alice AS (
  -- PRs per year *per activity*
  SELECT 
    year,
    activity,
    COUNT(DISTINCT pr_id) AS pr_count
  FROM bob 
  
  GROUP BY 
    year,
    activity
)

SELECT 
  a.year,
  a.activity,
  a.pr_count              AS activity_prs,
  y.prs_total             AS year_prs,
  a.pr_count::decimal / y.prs_total::decimal AS activity_share_of_year
FROM alice a
LEFT JOIN years y
  ON a.year = y.year

ORDER BY
  a.year,
  a.activity;`,Sr=`WITH bob AS (
  -- one row per (year, pr, activity)
  SELECT DISTINCT
    year,
    pr_id,
    activity
  FROM eind.milestone_activity_delivery_data
  where activity is not null
),

years AS (
  -- total PRs per year
  SELECT 
    year,
    COUNT(DISTINCT pr_id) AS prs_total
  FROM bob 
  GROUP BY year
),

alice AS (
  -- PRs per year *per activity*
  SELECT 
    year,
    activity,
    COUNT(DISTINCT pr_id) AS pr_count
  FROM bob 
  
  GROUP BY 
    year,
    activity
)

SELECT 
  a.year,
  a.activity,
  a.pr_count              AS activity_prs,
  y.prs_total             AS year_prs,
  a.pr_count::decimal / y.prs_total::decimal AS activity_share_of_year
FROM alice a
LEFT JOIN years y
  ON a.year = y.year

ORDER BY
  a.year,
  a.activity;`;o.actvity_barchart_by_year2_data&&(o.actvity_barchart_by_year2_data instanceof Error?qt.initialError=o.actvity_barchart_by_year2_data:qt.initialData=o.actvity_barchart_by_year2_data,o.actvity_barchart_by_year2_columns&&(qt.knownColumns=o.actvity_barchart_by_year2_columns));let ca,pa=!1;const ha=He.createReactive({callback:x=>{r(16,ca=x)},execFn:y},{id:"actvity_barchart_by_year2",...qt});ha(Sr,{noResolve:Nt,...qt}),globalThis[Symbol.for("actvity_barchart_by_year2")]={get value(){return ca}};let Lt={initialData:void 0,initialError:void 0},Ft=Z`SELECT 
  b.year,
  b.milestone_id,
  COALESCE(MAX(b.merge_date)::date, '2029-12-12'::date) AS last_merge_date
FROM eind.milestone_activity_delivery_data AS b
-- where b.year =2021
GROUP BY
  b.year,
  b.milestone_id
ORDER BY
  b.year,
  b.milestone_id`,Er=`SELECT 
  b.year,
  b.milestone_id,
  COALESCE(MAX(b.merge_date)::date, '2029-12-12'::date) AS last_merge_date
FROM eind.milestone_activity_delivery_data AS b
-- where b.year =2021
GROUP BY
  b.year,
  b.milestone_id
ORDER BY
  b.year,
  b.milestone_id`;o.milestone_last_merge_date_data&&(o.milestone_last_merge_date_data instanceof Error?Lt.initialError=o.milestone_last_merge_date_data:Lt.initialData=o.milestone_last_merge_date_data,o.milestone_last_merge_date_columns&&(Lt.knownColumns=o.milestone_last_merge_date_columns));let ba,ga=!1;const ya=He.createReactive({callback:x=>{r(17,ba=x)},execFn:y},{id:"milestone_last_merge_date",...Lt});ya(Er,{noResolve:Ft,...Lt}),globalThis[Symbol.for("milestone_last_merge_date")]={get value(){return ba}};let Mt={initialData:void 0,initialError:void 0},zt=Z`select *  
from csv.RoadmapMultiYearStatus`,Tr=`select *  
from csv.RoadmapMultiYearStatus`;o.new_roadmap_data&&(o.new_roadmap_data instanceof Error?Mt.initialError=o.new_roadmap_data:Mt.initialData=o.new_roadmap_data,o.new_roadmap_columns&&(Mt.knownColumns=o.new_roadmap_columns));let va,ka=!1;const wa=He.createReactive({callback:x=>{r(18,va=x)},execFn:y},{id:"new_roadmap",...Mt});wa(Tr,{noResolve:zt,...Mt}),globalThis[Symbol.for("new_roadmap")]={get value(){return va}};let Pt={initialData:void 0,initialError:void 0},Ht=Z`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${d.years.value}`,Ar=`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${d.years.value}`;o.new_roadmap_filtered_data&&(o.new_roadmap_filtered_data instanceof Error?Pt.initialError=o.new_roadmap_filtered_data:Pt.initialData=o.new_roadmap_filtered_data,o.new_roadmap_filtered_columns&&(Pt.knownColumns=o.new_roadmap_filtered_columns));let $a,Ra=!1;const Sa=He.createReactive({callback:x=>{r(19,$a=x)},execFn:y},{id:"new_roadmap_filtered",...Pt});Sa(Ar,{noResolve:Ht,...Pt}),globalThis[Symbol.for("new_roadmap_filtered")]={get value(){return $a}};let Vt={initialData:void 0,initialError:void 0},Bt=Z`select *
      
from eind.roadmap_summaries_detail`,Cr=`select *
      
from eind.roadmap_summaries_detail`;o.new_roadmap2_data&&(o.new_roadmap2_data instanceof Error?Vt.initialError=o.new_roadmap2_data:Vt.initialData=o.new_roadmap2_data,o.new_roadmap2_columns&&(Vt.knownColumns=o.new_roadmap2_columns));let Ea,Ta=!1;const Aa=He.createReactive({callback:x=>{r(20,Ea=x)},execFn:y},{id:"new_roadmap2",...Vt});Aa(Cr,{noResolve:Bt,...Vt}),globalThis[Symbol.for("new_roadmap2")]={get value(){return Ea}};let xt={initialData:void 0,initialError:void 0},Ut=Z`SELECT *
  
FROM eind.roadmap_version_markdown`,Ir=`SELECT *
  
FROM eind.roadmap_version_markdown`;o.roadmap_details_data&&(o.roadmap_details_data instanceof Error?xt.initialError=o.roadmap_details_data:xt.initialData=o.roadmap_details_data,o.roadmap_details_columns&&(xt.knownColumns=o.roadmap_details_columns));let Ca,Ia=!1;const Da=He.createReactive({callback:x=>{r(21,Ca=x)},execFn:y},{id:"roadmap_details",...xt});Da(Ir,{noResolve:Ut,...xt}),globalThis[Symbol.for("roadmap_details")]={get value(){return Ca}};let Gt={initialData:void 0,initialError:void 0},Wt=Z`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${d.years.value}`,Dr=`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${d.years.value}`;o.roadmap_details_filtered_data&&(o.roadmap_details_filtered_data instanceof Error?Gt.initialError=o.roadmap_details_filtered_data:Gt.initialData=o.roadmap_details_filtered_data,o.roadmap_details_filtered_columns&&(Gt.knownColumns=o.roadmap_details_filtered_columns));let Oa,qa=!1;const Na=He.createReactive({callback:x=>{r(22,Oa=x)},execFn:y},{id:"roadmap_details_filtered",...Gt});Na(Dr,{noResolve:Wt,...Gt}),globalThis[Symbol.for("roadmap_details_filtered")]={get value(){return Oa}};let Yt={initialData:void 0,initialError:void 0},jt=Z`select * from eind.zenoh_roadmap_details`,Or="select * from eind.zenoh_roadmap_details";o.milestone_details_data&&(o.milestone_details_data instanceof Error?Yt.initialError=o.milestone_details_data:Yt.initialData=o.milestone_details_data,o.milestone_details_columns&&(Yt.knownColumns=o.milestone_details_columns));let La,Fa=!1;const Ma=He.createReactive({callback:x=>{r(23,La=x)},execFn:y},{id:"milestone_details",...Yt});Ma(Or,{noResolve:jt,...Yt}),globalThis[Symbol.for("milestone_details")]={get value(){return La}};let Qt={initialData:void 0,initialError:void 0},Jt=Z`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`,qr=`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`;o.milestone_rolllup_by_year_data&&(o.milestone_rolllup_by_year_data instanceof Error?Qt.initialError=o.milestone_rolllup_by_year_data:Qt.initialData=o.milestone_rolllup_by_year_data,o.milestone_rolllup_by_year_columns&&(Qt.knownColumns=o.milestone_rolllup_by_year_columns));let za,Pa=!1;const Ha=He.createReactive({callback:x=>{r(24,za=x)},execFn:y},{id:"milestone_rolllup_by_year",...Qt});Ha(qr,{noResolve:Jt,...Qt}),globalThis[Symbol.for("milestone_rolllup_by_year")]={get value(){return za}};let Zt={initialData:void 0,initialError:void 0},Kt=Z`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`,Nr=`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`;o.roadmap_catagories_data&&(o.roadmap_catagories_data instanceof Error?Zt.initialError=o.roadmap_catagories_data:Zt.initialData=o.roadmap_catagories_data,o.roadmap_catagories_columns&&(Zt.knownColumns=o.roadmap_catagories_columns));let Va,Ba=!1;const xa=He.createReactive({callback:x=>{r(25,Va=x)},execFn:y},{id:"roadmap_catagories",...Zt});xa(Nr,{noResolve:Kt,...Zt}),globalThis[Symbol.for("roadmap_catagories")]={get value(){return Va}};let Xt={initialData:void 0,initialError:void 0},er=Z`select * from eind.dimension_data`,Lr="select * from eind.dimension_data";o.new_dim_data_data&&(o.new_dim_data_data instanceof Error?Xt.initialError=o.new_dim_data_data:Xt.initialData=o.new_dim_data_data,o.new_dim_data_columns&&(Xt.knownColumns=o.new_dim_data_columns));let Ua,Ga=!1;const Wa=He.createReactive({callback:x=>{r(26,Ua=x)},execFn:y},{id:"new_dim_data",...Xt});Wa(Lr,{noResolve:er,...Xt}),globalThis[Symbol.for("new_dim_data")]={get value(){return Ua}};let tr={initialData:void 0,initialError:void 0},rr=Z`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${d.years.value}`,Fr=`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${d.years.value}`;o.new_dim_data_filtered_data&&(o.new_dim_data_filtered_data instanceof Error?tr.initialError=o.new_dim_data_filtered_data:tr.initialData=o.new_dim_data_filtered_data,o.new_dim_data_filtered_columns&&(tr.knownColumns=o.new_dim_data_filtered_columns));let Ya,ja=!1;const Qa=He.createReactive({callback:x=>{r(27,Ya=x)},execFn:y},{id:"new_dim_data_filtered",...tr});Qa(Fr,{noResolve:rr,...tr}),globalThis[Symbol.for("new_dim_data_filtered")]={get value(){return Ya}};let ar={initialData:void 0,initialError:void 0},ir=Z`select distinct owner from eind.repos`,Mr="select distinct owner from eind.repos";o.owners_data&&(o.owners_data instanceof Error?ar.initialError=o.owners_data:ar.initialData=o.owners_data,o.owners_columns&&(ar.knownColumns=o.owners_columns));let Ja,Za=!1;const Ka=He.createReactive({callback:x=>{r(28,Ja=x)},execFn:y},{id:"owners",...ar});Ka(Mr,{noResolve:ir,...ar}),globalThis[Symbol.for("owners")]={get value(){return Ja}};let nr={initialData:void 0,initialError:void 0},lr=Z`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${d.owner.value}'`,zr=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${d.owner.value}'`;o.repos_data&&(o.repos_data instanceof Error?nr.initialError=o.repos_data:nr.initialData=o.repos_data,o.repos_columns&&(nr.knownColumns=o.repos_columns));let Xa,ei=!1;const ti=He.createReactive({callback:x=>{r(29,Xa=x)},execFn:y},{id:"repos",...nr});ti(zr,{noResolve:lr,...nr}),globalThis[Symbol.for("repos")]={get value(){return Xa}};let sr={initialData:void 0,initialError:void 0},or=Z`select * from
eind.roadmap_versions_sections`,Pr=`select * from
eind.roadmap_versions_sections`;o.roadmap2025_data&&(o.roadmap2025_data instanceof Error?sr.initialError=o.roadmap2025_data:sr.initialData=o.roadmap2025_data,o.roadmap2025_columns&&(sr.knownColumns=o.roadmap2025_columns));let ri,ai=!1;const ii=He.createReactive({callback:x=>{r(30,ri=x)},execFn:y},{id:"roadmap2025",...sr});ii(Pr,{noResolve:or,...sr}),globalThis[Symbol.for("roadmap2025")]={get value(){return ri}};let ur={initialData:void 0,initialError:void 0},fr=Z`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC`,Hr=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC`;o.get_plan_revisions_by_version_data&&(o.get_plan_revisions_by_version_data instanceof Error?ur.initialError=o.get_plan_revisions_by_version_data:ur.initialData=o.get_plan_revisions_by_version_data,o.get_plan_revisions_by_version_columns&&(ur.knownColumns=o.get_plan_revisions_by_version_columns));let ni,li=!1;const si=He.createReactive({callback:x=>{r(31,ni=x)},execFn:y},{id:"get_plan_revisions_by_version",...ur});si(Hr,{noResolve:fr,...ur}),globalThis[Symbol.for("get_plan_revisions_by_version")]={get value(){return ni}};let mr={initialData:void 0,initialError:void 0},dr=Z`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${d.section.value}`,Vr=`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${d.section.value}`;o.roadmap_sections_payload_data&&(o.roadmap_sections_payload_data instanceof Error?mr.initialError=o.roadmap_sections_payload_data:mr.initialData=o.roadmap_sections_payload_data,o.roadmap_sections_payload_columns&&(mr.knownColumns=o.roadmap_sections_payload_columns));let Qr,oi=!1;const ui=He.createReactive({callback:x=>{r(1,Qr=x)},execFn:y},{id:"roadmap_sections_payload",...mr});ui(Vr,{noResolve:dr,...mr}),globalThis[Symbol.for("roadmap_sections_payload")]={get value(){return Qr}};let _r={initialData:void 0,initialError:void 0},cr=Z`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)`,Br=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)`;o.roadmap_sections_data&&(o.roadmap_sections_data instanceof Error?_r.initialError=o.roadmap_sections_data:_r.initialData=o.roadmap_sections_data,o.roadmap_sections_columns&&(_r.knownColumns=o.roadmap_sections_columns));let fi,mi=!1;const di=He.createReactive({callback:x=>{r(32,fi=x)},execFn:y},{id:"roadmap_sections",..._r});return di(Br,{noResolve:cr,..._r}),globalThis[Symbol.for("roadmap_sections")]={get value(){return fi}},i.$$set=x=>{"data"in x&&r(34,f=x.data)},i.$$.update=()=>{i.$$.dirty[1]&8&&r(35,{data:o={},customFormattingSettings:m,__db:h}=f,o),i.$$.dirty[1]&16&&es.set(Object.keys(o).length>0),i.$$.dirty[5]&256&&r(2,M=s.params),i.$$.dirty[1]&480&&(P||!ie?P||(G(k,{noResolve:P,...U}),r(39,ie=!0)):G(k,{noResolve:P})),i.$$.dirty[0]&1&&r(41,z=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`),i.$$.dirty[0]&1&&r(42,H=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`),i.$$.dirty[1]&7680&&(z||!ne?z||(W(H,{noResolve:z,...I}),r(43,ne=!0)):W(H,{noResolve:z})),i.$$.dirty[0]&1&&r(45,X=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`),i.$$.dirty[0]&1&&r(46,me=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`),i.$$.dirty[1]&122880&&(X||!Oe?X||(le(me,{noResolve:X,...q}),r(47,Oe=!0)):le(me,{noResolve:X})),i.$$.dirty[1]&1966080&&(V||!Se?V||(Xe(ae,{noResolve:V,...ee}),r(51,Se=!0)):Xe(ae,{noResolve:V})),i.$$.dirty[1]&31457280&&(be||!fe?be||(de(O,{noResolve:be,...ke}),r(55,fe=!0)):de(O,{noResolve:be})),i.$$.dirty[0]&1&&r(57,Ae=Z`select rv.year,
       rv.milestone_id,
       rv.demanded_milestone_items,
       rv.demanded_outstanding_pct,
       rv.actioned_milestone_items,
       rv.actioned_outstanding_pct,
       rv.milestone_description,
       rv.milestone_date,
       rv.last_merge_date
from (select * 
from eind.zenoh_roadmap_versions) as rv

where year = ${d.years.value}`),i.$$.dirty[0]&1&&r(58,Ce=`select rv.year,
       rv.milestone_id,
       rv.demanded_milestone_items,
       rv.demanded_outstanding_pct,
       rv.actioned_milestone_items,
       rv.actioned_outstanding_pct,
       rv.milestone_description,
       rv.milestone_date,
       rv.last_merge_date
from (select * 
from eind.zenoh_roadmap_versions) as rv

where year = ${d.years.value}`),i.$$.dirty[1]&503316480&&(Ae||!J?Ae||(D(Ce,{noResolve:Ae,...Te}),r(59,J=!0)):D(Ce,{noResolve:Ae})),i.$$.dirty[1]&1610612736|i.$$.dirty[2]&3&&(Ee||!we?Ee||(ze(De,{noResolve:Ee,...B}),r(63,we=!0)):ze(De,{noResolve:Ee})),i.$$.dirty[2]&60&&(Fe||!qe?Fe||(Ve(Pe,{noResolve:Fe,...Ie}),r(67,qe=!0)):Ve(Pe,{noResolve:Fe})),i.$$.dirty[2]&960&&(Le||!$e?Le||(Re(ce,{noResolve:Le,...Ne}),r(71,$e=!0)):Re(ce,{noResolve:Le})),i.$$.dirty[0]&1&&r(73,he=Z`WITH fred AS (
  SELECT
    rv.year AS milestone_year,
    rv.milestone_date AS ms_date,
    lmd.last_merge_date AS final_merge,
    rv.milestone_id AS rvmilestone_id,
    COALESCE(AVG(bd.remaining_effort) / 100.0, 0) AS remaining,
    rv.milestone_description AS description,
    rv.milestone_number
  FROM
    eind.zenoh_roadmap_versions AS rv
    LEFT JOIN eind.milestone_activity_delivery_data AS bd
      ON rv.milestone_number = bd.milestone_number
     AND rv.year = bd.year
    LEFT JOIN eind.zenoh_milestone_last_merge_date AS lmd
      ON rv.milestone_id = lmd.milestone_id
     AND rv.year = lmd.year
  GROUP BY
    rv.year,
    rv.milestone_id,
    rv.milestone_date,
    rv.milestone_description,
    rv.milestone_number,
    lmd.last_merge_date
)

SELECT
  rvmilestone_id,
  ms_date,
  final_merge,
  CASE
    WHEN final_merge <  ms_date THEN 'Early'
    WHEN final_merge =  ms_date THEN 'On Time'
    WHEN final_merge >  ms_date THEN 'Late'
    ELSE 'Not matched'
  END AS mls_status,
  remaining,
  description
FROM fred
WHERE milestone_year = ${d.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`),i.$$.dirty[0]&1&&r(74,w=`WITH fred AS (
  SELECT
    rv.year AS milestone_year,
    rv.milestone_date AS ms_date,
    lmd.last_merge_date AS final_merge,
    rv.milestone_id AS rvmilestone_id,
    COALESCE(AVG(bd.remaining_effort) / 100.0, 0) AS remaining,
    rv.milestone_description AS description,
    rv.milestone_number
  FROM
    eind.zenoh_roadmap_versions AS rv
    LEFT JOIN eind.milestone_activity_delivery_data AS bd
      ON rv.milestone_number = bd.milestone_number
     AND rv.year = bd.year
    LEFT JOIN eind.zenoh_milestone_last_merge_date AS lmd
      ON rv.milestone_id = lmd.milestone_id
     AND rv.year = lmd.year
  GROUP BY
    rv.year,
    rv.milestone_id,
    rv.milestone_date,
    rv.milestone_description,
    rv.milestone_number,
    lmd.last_merge_date
)

SELECT
  rvmilestone_id,
  ms_date,
  final_merge,
  CASE
    WHEN final_merge <  ms_date THEN 'Early'
    WHEN final_merge =  ms_date THEN 'On Time'
    WHEN final_merge >  ms_date THEN 'Late'
    ELSE 'Not matched'
  END AS mls_status,
  remaining,
  description
FROM fred
WHERE milestone_year = ${d.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`),i.$$.dirty[2]&15360&&(he||!_?he||(v(w,{noResolve:he,...pe}),r(75,_=!0)):v(w,{noResolve:he})),i.$$.dirty[0]&1&&r(77,ut=Z`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value}`),i.$$.dirty[0]&1&&r(78,ft=`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value}`),i.$$.dirty[2]&245760&&(ut||!kt?ut||(wt(ft,{noResolve:ut,...nt}),r(79,kt=!0)):wt(ft,{noResolve:ut})),i.$$.dirty[0]&1&&r(81,et=Z`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value})`),i.$$.dirty[0]&1&&r(82,rt=`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${d.years.value})`),i.$$.dirty[2]&3932160&&(et||!ua?et||(fa(rt,{noResolve:et,...at}),r(83,ua=!0)):fa(rt,{noResolve:et})),i.$$.dirty[2]&62914560&&(Ot||!da?Ot||(_a(Rr,{noResolve:Ot,...Dt}),r(87,da=!0)):_a(Rr,{noResolve:Ot})),i.$$.dirty[2]&1006632960&&(Nt||!pa?Nt||(ha(Sr,{noResolve:Nt,...qt}),r(91,pa=!0)):ha(Sr,{noResolve:Nt})),i.$$.dirty[2]&1073741824|i.$$.dirty[3]&7&&(Ft||!ga?Ft||(ya(Er,{noResolve:Ft,...Lt}),r(95,ga=!0)):ya(Er,{noResolve:Ft})),i.$$.dirty[3]&120&&(zt||!ka?zt||(wa(Tr,{noResolve:zt,...Mt}),r(99,ka=!0)):wa(Tr,{noResolve:zt})),i.$$.dirty[0]&1&&r(101,Ht=Z`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${d.years.value}`),i.$$.dirty[0]&1&&r(102,Ar=`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${d.years.value}`),i.$$.dirty[3]&1920&&(Ht||!Ra?Ht||(Sa(Ar,{noResolve:Ht,...Pt}),r(103,Ra=!0)):Sa(Ar,{noResolve:Ht})),i.$$.dirty[3]&30720&&(Bt||!Ta?Bt||(Aa(Cr,{noResolve:Bt,...Vt}),r(107,Ta=!0)):Aa(Cr,{noResolve:Bt})),i.$$.dirty[3]&491520&&(Ut||!Ia?Ut||(Da(Ir,{noResolve:Ut,...xt}),r(111,Ia=!0)):Da(Ir,{noResolve:Ut})),i.$$.dirty[0]&1&&r(113,Wt=Z`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${d.years.value}`),i.$$.dirty[0]&1&&r(114,Dr=`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${d.years.value}`),i.$$.dirty[3]&7864320&&(Wt||!qa?Wt||(Na(Dr,{noResolve:Wt,...Gt}),r(115,qa=!0)):Na(Dr,{noResolve:Wt})),i.$$.dirty[3]&125829120&&(jt||!Fa?jt||(Ma(Or,{noResolve:jt,...Yt}),r(119,Fa=!0)):Ma(Or,{noResolve:jt})),i.$$.dirty[3]&2013265920&&(Jt||!Pa?Jt||(Ha(qr,{noResolve:Jt,...Qt}),r(123,Pa=!0)):Ha(qr,{noResolve:Jt})),i.$$.dirty[4]&15&&(Kt||!Ba?Kt||(xa(Nr,{noResolve:Kt,...Zt}),r(127,Ba=!0)):xa(Nr,{noResolve:Kt})),i.$$.dirty[4]&240&&(er||!Ga?er||(Wa(Lr,{noResolve:er,...Xt}),r(131,Ga=!0)):Wa(Lr,{noResolve:er})),i.$$.dirty[0]&1&&r(133,rr=Z`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${d.years.value}`),i.$$.dirty[0]&1&&r(134,Fr=`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${d.years.value}`),i.$$.dirty[4]&3840&&(rr||!ja?rr||(Qa(Fr,{noResolve:rr,...tr}),r(135,ja=!0)):Qa(Fr,{noResolve:rr})),i.$$.dirty[4]&61440&&(ir||!Za?ir||(Ka(Mr,{noResolve:ir,...ar}),r(139,Za=!0)):Ka(Mr,{noResolve:ir})),i.$$.dirty[0]&1&&r(141,lr=Z`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${d.owner.value}'`),i.$$.dirty[0]&1&&r(142,zr=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${d.owner.value}'`),i.$$.dirty[4]&983040&&(lr||!ei?lr||(ti(zr,{noResolve:lr,...nr}),r(143,ei=!0)):ti(zr,{noResolve:lr})),i.$$.dirty[4]&15728640&&(or||!ai?or||(ii(Pr,{noResolve:or,...sr}),r(147,ai=!0)):ii(Pr,{noResolve:or})),i.$$.dirty[0]&1&&r(149,fr=Z`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC`),i.$$.dirty[0]&1&&r(150,Hr=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC`),i.$$.dirty[4]&251658240&&(fr||!li?fr||(si(Hr,{noResolve:fr,...ur}),r(151,li=!0)):si(Hr,{noResolve:fr})),i.$$.dirty[0]&1&&r(153,dr=Z`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${d.section.value}`),i.$$.dirty[0]&1&&r(154,Vr=`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${d.section.value}`),i.$$.dirty[4]&1879048192|i.$$.dirty[5]&1&&(dr||!oi?dr||(ui(Vr,{noResolve:dr,...mr}),r(155,oi=!0)):ui(Vr,{noResolve:dr})),i.$$.dirty[0]&1&&r(157,cr=Z`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)`),i.$$.dirty[0]&1&&r(158,Br=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)`),i.$$.dirty[5]&30&&(cr||!mi?cr||(di(Br,{noResolve:cr,..._r}),r(159,mi=!0)):di(Br,{noResolve:cr})),i.$$.dirty[0]&1&&r(33,t=d.kind.value=="week"?"01K2HAFAD1JM47FD6JP3E4K69Q":"01K2MD0XJBGMKCE7KXN9F25T3X"),i.$$.dirty[0]&1&&r(161,a=d.kind.value),i.$$.dirty[0]&1&&r(162,n=d.week_p[0]),i.$$.dirty[0]&1|i.$$.dirty[5]&128&&r(160,l=d.kind.value=="week"?n:d.quarter_p.value),i.$$.dirty[0]&1|i.$$.dirty[5]&96&&r(2,M={year:parseInt(d.years.value,10),audience:d.audience_p.value,owner:d.owner.value,repo:d.repo.value=="null"?null:d.repo.value,[a]:parseInt(l,10),output_format:"markdown"}),i.$$.dirty[0]&2&&Qr.map(x=>`${x.heading||""}

${x.content||""}`).join(`

`)},r(37,P=Z`select *
from eind.roadmap_revision_summaries`),r(38,k=`select *
from eind.roadmap_revision_summaries`),r(49,V=Z`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`),r(50,ae=`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`),r(53,be=Z`select * 
from eind.zenoh_roadmap_versions`),r(54,O=`select * 
from eind.zenoh_roadmap_versions`),r(61,Ee=Z`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`),r(62,De=`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`),r(65,Fe=Z`select * 
FROM eind.zenoh_milestone_last_merge_date`),r(66,Pe=`select * 
FROM eind.zenoh_milestone_last_merge_date`),r(69,Le=Z`WITH fred AS (
 SELECT
   rv.year AS milestone_year,
   rd.milestone_date AS ms_date,
   lmd.last_merge_date as final_merge,
   rv.milestone_id AS rvmilestone_id,
   COALESCE(AVG(bd.remaining_effort)/100, 0) AS remaining,
   rv.milestone_description AS description,
   rv.milestone_number
 FROM
   eind.zenoh_roadmap_versions AS rv
   LEFT Join eind.roadmap_dates rd
       on rv.milestone_number = rd.milestone_number
       and rv.year = rd.year
   LEFT JOIN eind.milestone_activity_delivery_data AS bd
     ON rv.milestone_number = bd.milestone_number
    AND rv.year = bd.year
   LEFT JOIN eind.zenoh_milestone_last_merge_date as lmd
   on rv.milestone_id =lmd.milestone_id
   and rv.year = lmd.year
 GROUP BY
   rv.year,
   rv.milestone_id,
   rd.milestone_date,
   rv.milestone_description,
   rv.milestone_number,
   lmd.last_merge_date
)

SELECT *
FROM fred`),r(70,ce=`WITH fred AS (
 SELECT
   rv.year AS milestone_year,
   rd.milestone_date AS ms_date,
   lmd.last_merge_date as final_merge,
   rv.milestone_id AS rvmilestone_id,
   COALESCE(AVG(bd.remaining_effort)/100, 0) AS remaining,
   rv.milestone_description AS description,
   rv.milestone_number
 FROM
   eind.zenoh_roadmap_versions AS rv
   LEFT Join eind.roadmap_dates rd
       on rv.milestone_number = rd.milestone_number
       and rv.year = rd.year
   LEFT JOIN eind.milestone_activity_delivery_data AS bd
     ON rv.milestone_number = bd.milestone_number
    AND rv.year = bd.year
   LEFT JOIN eind.zenoh_milestone_last_merge_date as lmd
   on rv.milestone_id =lmd.milestone_id
   and rv.year = lmd.year
 GROUP BY
   rv.year,
   rv.milestone_id,
   rd.milestone_date,
   rv.milestone_description,
   rv.milestone_number,
   lmd.last_merge_date
)

SELECT *
FROM fred`),r(85,Ot=Z`select *
FROM eind."zenoh_milestone_last_merge_date"`),r(86,Rr=`select *
FROM eind."zenoh_milestone_last_merge_date"`),r(89,Nt=Z`WITH bob AS (
  -- one row per (year, pr, activity)
  SELECT DISTINCT
    year,
    pr_id,
    activity
  FROM eind.milestone_activity_delivery_data
  where activity is not null
),

years AS (
  -- total PRs per year
  SELECT 
    year,
    COUNT(DISTINCT pr_id) AS prs_total
  FROM bob 
  GROUP BY year
),

alice AS (
  -- PRs per year *per activity*
  SELECT 
    year,
    activity,
    COUNT(DISTINCT pr_id) AS pr_count
  FROM bob 
  
  GROUP BY 
    year,
    activity
)

SELECT 
  a.year,
  a.activity,
  a.pr_count              AS activity_prs,
  y.prs_total             AS year_prs,
  a.pr_count::decimal / y.prs_total::decimal AS activity_share_of_year
FROM alice a
LEFT JOIN years y
  ON a.year = y.year

ORDER BY
  a.year,
  a.activity;`),r(90,Sr=`WITH bob AS (
  -- one row per (year, pr, activity)
  SELECT DISTINCT
    year,
    pr_id,
    activity
  FROM eind.milestone_activity_delivery_data
  where activity is not null
),

years AS (
  -- total PRs per year
  SELECT 
    year,
    COUNT(DISTINCT pr_id) AS prs_total
  FROM bob 
  GROUP BY year
),

alice AS (
  -- PRs per year *per activity*
  SELECT 
    year,
    activity,
    COUNT(DISTINCT pr_id) AS pr_count
  FROM bob 
  
  GROUP BY 
    year,
    activity
)

SELECT 
  a.year,
  a.activity,
  a.pr_count              AS activity_prs,
  y.prs_total             AS year_prs,
  a.pr_count::decimal / y.prs_total::decimal AS activity_share_of_year
FROM alice a
LEFT JOIN years y
  ON a.year = y.year

ORDER BY
  a.year,
  a.activity;`),r(93,Ft=Z`SELECT 
  b.year,
  b.milestone_id,
  COALESCE(MAX(b.merge_date)::date, '2029-12-12'::date) AS last_merge_date
FROM eind.milestone_activity_delivery_data AS b
-- where b.year =2021
GROUP BY
  b.year,
  b.milestone_id
ORDER BY
  b.year,
  b.milestone_id`),r(94,Er=`SELECT 
  b.year,
  b.milestone_id,
  COALESCE(MAX(b.merge_date)::date, '2029-12-12'::date) AS last_merge_date
FROM eind.milestone_activity_delivery_data AS b
-- where b.year =2021
GROUP BY
  b.year,
  b.milestone_id
ORDER BY
  b.year,
  b.milestone_id`),r(97,zt=Z`select *  
from csv.RoadmapMultiYearStatus`),r(98,Tr=`select *  
from csv.RoadmapMultiYearStatus`),r(105,Bt=Z`select *
      
from eind.roadmap_summaries_detail`),r(106,Cr=`select *
      
from eind.roadmap_summaries_detail`),r(109,Ut=Z`SELECT *
  
FROM eind.roadmap_version_markdown`),r(110,Ir=`SELECT *
  
FROM eind.roadmap_version_markdown`),r(117,jt=Z`select * from eind.zenoh_roadmap_details`),r(118,Or="select * from eind.zenoh_roadmap_details"),r(121,Jt=Z`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`),r(122,qr=`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`),r(125,Kt=Z`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`),r(126,Nr=`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`),r(129,er=Z`select * from eind.dimension_data`),r(130,Lr="select * from eind.dimension_data"),r(137,ir=Z`select distinct owner from eind.repos`),r(138,Mr="select distinct owner from eind.repos"),r(145,or=Z`select * from
eind.roadmap_versions_sections`),r(146,Pr=`select * from
eind.roadmap_versions_sections`),[d,Qr,M,j,Q,ye,ve,re,Me,_e,xe,ge,N,mt,oa,ma,ca,ba,va,$a,Ea,Ca,Oa,La,za,Va,Ua,Ya,Ja,Xa,ri,ni,fi,t,f,o,U,P,k,ie,I,z,H,ne,q,X,me,Oe,ee,V,ae,Se,ke,be,O,fe,Te,Ae,Ce,J,B,Ee,De,we,Ie,Fe,Pe,qe,Ne,Le,ce,$e,pe,he,w,_,nt,ut,ft,kt,at,et,rt,ua,Dt,Ot,Rr,da,qt,Nt,Sr,pa,Lt,Ft,Er,ga,Mt,zt,Tr,ka,Pt,Ht,Ar,Ra,Vt,Bt,Cr,Ta,xt,Ut,Ir,Ia,Gt,Wt,Dr,qa,Yt,jt,Or,Fa,Qt,Jt,qr,Pa,Zt,Kt,Nr,Ba,Xt,er,Lr,Ga,tr,rr,Fr,ja,ar,ir,Mr,Za,nr,lr,zr,ei,sr,or,Pr,ai,ur,fr,Hr,li,mr,dr,Vr,oi,_r,cr,Br,mi,l,a,n,s]}class Pu extends ct{constructor(e){super(),pt(this,e,Eu,Su,_t,{data:34},null,[-1,-1,-1,-1,-1,-1,-1])}}export{Pu as component};
