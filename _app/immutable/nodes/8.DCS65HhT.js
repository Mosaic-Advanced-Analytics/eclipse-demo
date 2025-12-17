var kl=Object.defineProperty;var wl=(i,e,r)=>e in i?kl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r;var Je=(i,e,r)=>wl(i,typeof e!="symbol"?e+"":e,r);import{p as wi,a8 as Jn,s as _t,d as p,i as g,f as Qe,T as Ct,l as Rt,U as ot,V as vr,v as St,w as Et,x as Tt,y as At,a9 as kr,F as $i,e as N,r as oe,k as L,H as $r,n as je,E as Zn,z as pr,D as it,b as Y,R as te,a as K,t as Ge,c as R,u as We,j as S,G as $l,B as Rl,ab as Kn,ac as Ri,q as na,m as lt,g as yt,o as Xn,ad as el,ae as tl,O as Sl,h as El}from"../chunks/scheduler.DqPYVuDL.js";import{S as ct,i as pt,t as b,a as c,g as ue,c as fe,d as E,m as T,b as A,e as C,k as rl}from"../chunks/index.D77-yQEy.js";import{c as Tl,A as Al,a as Cl}from"../chunks/AccordionItem.M-AuP8js.js";import{t as Il,A as Dl,F as Ol,w as Jr,B as ql,r as Ni,H as _i,G as Nl,M as ci,Z as Li,_ as Fi,K as Ll,m as pi,N as dt,O as hi,k as Fl,J as Ml,$ as Zr,R as zl,Q as Pl,S as Hl,v as Yr,U as Vl,g as Bl,a0 as Mi,Y as al,x as zi,z as il,e as wr,a1 as xl,W as $t,a2 as Ul,X as Gl,a3 as gr,a4 as Wl,a5 as Yl,a6 as Ql,D as bi,a7 as tt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.8Y1101dp.js";import{g as jl,Q as Fe,n as Jl,e as Zl,s as Kl,p as Xl,a as Pi,r as Hi,C as es}from"../chunks/inferColumnTypes.RkT92-tF.js";import{h as Z}from"../chunks/button.CWKr2TFK.js";import{w as yr,d as ts}from"../chunks/entry.jOPsAiKH.js";import{H as rs,g as as,Q as Ye,B as is,D as gt,a as Ze}from"../chunks/BarChart.BiN8rr6H.js";import{p as ns}from"../chunks/stores.CHJlH_4c.js";import{p as ls}from"../chunks/profile.BW8tN6E9.js";function gi(i,e,r,t){const a=(i-(isNaN(e)?0:e))%t;let n=Math.abs(a)*2>=t?i+Math.sign(a)*(t-Math.abs(a)):i-a;isNaN(e)?!isNaN(r)&&n>r&&(n=Math.floor(r/t)*t):n<e?n=e:!isNaN(r)&&n>r&&(n=e+Math.floor((r-e)/t)*t);const l=t.toString(),s=l.indexOf("."),u=s>=0?l.length-s:0;if(u>0){const f=Math.pow(10,u);n=Math.round(n*f)/f}return n}const ss={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:Kr}=Nl("slider"),os=i=>{const e={...ss,...i},r=Il(Dl(e,"value","onValueChange","defaultValue")),{min:t,max:a,step:n,orientation:l,dir:s,disabled:u}=r,f=e.value??yr(e.defaultValue),o=Ol(f,e==null?void 0:e.onValueChange),m=Jr(yr(!1)),h=Jr(yr(0)),d=Jr(yr(null)),$=ql(["root"]),y=(I,z)=>{o.update(V=>{if(!V)return[I];if(V[z]===I)return V;const j=[...V],le=j[z]>I?-1:1;function x(){j[z]=j[z+le],j[z+le]=I;const he=F();he&&(he[z+le].focus(),d.set({thumb:he[z+le],index:z+le}))}if(le===-1&&I<j[z-1])return x(),j;if(le===1&&I>j[z+1])return x(),j;const M=t.get(),re=a.get(),ie=n.get();return j[z]=gi(I,M,re,ie),j})},F=()=>{const I=hi($.root);return I?Array.from(I.querySelectorAll('[data-melt-part="thumb"]')).filter(z=>pi(z)):null},G=ts([t,a],([I,z])=>V=>(V-I)/(z-I)*100),H=Jr.derived([l,s],([I,z])=>I==="horizontal"?z==="rtl"?"rl":"lr":z==="rtl"?"tb":"bt"),w=Ni(Kr(),{stores:[u,l,s],returned:([I,z,V])=>({dir:V,disabled:_i(I),"data-disabled":_i(I),"data-orientation":z,style:I?void 0:`touch-action: ${z==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":$.root})}),Q=Ni(Kr("range"),{stores:[o,H,G],returned:([I,z,V])=>{const j=I.length>1?V(Math.min(...I)??0):0,le=100-V(Math.max(...I)??0),x={position:"absolute"};switch(z){case"lr":{x.left=`${j}%`,x.right=`${le}%`;break}case"rl":{x.right=`${j}%`,x.left=`${le}%`;break}case"bt":{x.bottom=`${j}%`,x.top=`${le}%`;break}case"tb":{x.top=`${j}%`,x.bottom=`${le}%`;break}}return{style:ci(x)}}}),X=Li(Kr("thumb"),{stores:[o,G,t,a,u,l,H],returned:([I,z,V,j,le,x,M])=>Array.from({length:I.length||1},(ie,he)=>{h.get()<I.length&&h.update(ae=>ae+1);const ne=I[he],J=`${z(ne)}%`,B={position:"absolute"};switch(M){case"lr":{B.left=J,B.translate="-50% 0";break}case"rl":{B.right=J,B.translate="50% 0";break}case"bt":{B.bottom=J,B.translate="0 50%";break}case"tb":{B.top=J,B.translate="0 -50%";break}}return{role:"slider","aria-valuemin":V,"aria-valuemax":j,"aria-valuenow":ne,"aria-disabled":_i(le),"aria-orientation":x,"data-melt-part":"thumb","data-value":ne,style:ci(B),tabindex:le?-1:0}}),action:I=>({destroy:Ll(I,"keydown",V=>{if(u.get())return;const j=V.currentTarget;if(!pi(j))return;const le=F();if(!(le!=null&&le.length))return;const x=le.indexOf(j);if(h.set(x),![dt.ARROW_LEFT,dt.ARROW_RIGHT,dt.ARROW_UP,dt.ARROW_DOWN,dt.HOME,dt.END].includes(V.key))return;V.preventDefault();const M=t.get(),re=a.get(),ie=n.get(),he=o.get(),He=l.get(),ne=H.get(),J=he[x];switch(V.key){case dt.HOME:{y(M,x);break}case dt.END:{y(re,x);break}case dt.ARROW_LEFT:{if(He!=="horizontal")break;V.metaKey?y(ne==="rl"?re:M,x):ne==="rl"&&J<re?y(J+ie,x):ne==="lr"&&J>M&&y(J-ie,x);break}case dt.ARROW_RIGHT:{if(He!=="horizontal")break;V.metaKey?y(ne==="rl"?M:re,x):ne==="rl"&&J>M?y(J-ie,x):ne==="lr"&&J<re&&y(J+ie,x);break}case dt.ARROW_UP:{V.metaKey?y(ne==="tb"?M:re,x):ne==="tb"&&J>M?y(J-ie,x):ne!=="tb"&&J<re&&y(J+ie,x);break}case dt.ARROW_DOWN:{V.metaKey?y(ne==="tb"?re:M,x):ne==="tb"&&J<re?y(J+ie,x):ne!=="tb"&&J>M&&y(J-ie,x);break}}})})}),W=Li(Kr("tick"),{stores:[o,t,a,n,H],returned:([I,z,V,j,le])=>{const x=V-z;let M=Math.ceil(x/j);return x%j==0&&M++,Array.from({length:M},(re,ie)=>{const he=`${ie*(j/(V-z))*100}%`,He=ie===0,ne=ie===M-1,J=He?0:ne?-100:-50,B={position:"absolute"};switch(le){case"lr":{B.left=he,B.translate=`${J}% 0`;break}case"rl":{B.right=he,B.translate=`${-J}% 0`;break}case"bt":{B.bottom=he,B.translate=`0 ${-J}%`;break}case"tb":{B.top=he,B.translate=`0 ${J}%`;break}}const ae=z+ie*j;return{"data-bounded":(I.length===1?ae<=I[0]:I[0]<=ae&&ae<=I[I.length-1])?!0:void 0,"data-value":ae,style:ci(B)}})}});return Fi([w,t,a,u,l,H,n],([I,z,V,j,le,x,M])=>{if(!Fl||j)return;const re=(B,ae,Te,Ae)=>{const $e=(B-Te)/(Ae-Te)*(V-z)+z;if($e<z)y(z,ae);else if($e>V)y(V,ae);else{const be=M,O=z,ee=Math.floor(($e-O)/be),me=O+ee*be+be/2,ye=O+(ee+1)*be+be/2,ve=$e>=me&&$e<ye?(ee+1)*be+O:ee*be+O;ve<=V&&y(ve,ae)}},ie=B=>{const ae=F();if(!ae)return;ae.forEach($e=>$e.blur());const Te=ae.map($e=>{if(le==="horizontal"){const{left:be,right:O}=$e.getBoundingClientRect();return Math.abs(B.clientX-(be+O)/2)}else{const{top:be,bottom:O}=$e.getBoundingClientRect();return Math.abs(B.clientY-(be+O)/2)}}),Ae=ae[Te.indexOf(Math.min(...Te))],Ke=ae.indexOf(Ae);return{thumb:Ae,index:Ke}},he=B=>{if(!m.get())return;B.preventDefault(),B.stopPropagation();const ae=hi(I["data-melt-id"]),Te=d.get();if(!ae||!Te)return;Te.thumb.focus();const{left:Ae,right:Ke,top:$e,bottom:be}=ae.getBoundingClientRect();switch(x){case"lr":{re(B.clientX,Te.index,Ae,Ke);break}case"rl":{re(B.clientX,Te.index,Ke,Ae);break}case"bt":{re(B.clientY,Te.index,be,$e);break}case"tb":{re(B.clientY,Te.index,$e,be);break}}},He=B=>{if(B.button!==0)return;const ae=hi(I["data-melt-id"]),Te=ie(B);if(!Te||!ae)return;const Ae=B.target;!pi(Ae)||!ae.contains(Ae)||(B.preventDefault(),d.set(Te),Te.thumb.focus(),m.set(!0),he(B))},ne=()=>{m.set(!1)},J=Ml(Zr(document,"pointerdown",He),Zr(document,"pointerup",ne),Zr(document,"pointerleave",ne),Zr(document,"pointermove",he));return()=>{J()}}),Fi([n,t,a,o],function([z,V,j,le]){const x=re=>gi(re,V,j,z)===re,M=re=>gi(re,V,j,z);le.some(re=>!x(re))&&o.update(re=>re.map(M))}),{elements:{root:w,thumbs:X,range:Q,ticks:W},states:{value:o},options:r}};function nl(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function us(i){const{NAME:e,PARTS:r}=nl(),t=zl(e,r),a={...os(Pl(i)),getAttrs:t};return wi(e,a),{...a,updateOption:Hl(a.options)}}function ll(){const{NAME:i}=nl();return Jn(i)}const fs=i=>({builder:i&4,ticks:i&8,thumbs:i&16}),Vi=i=>({builder:i[2],ticks:i[3],thumbs:i[4]}),ms=i=>({builder:i&4,ticks:i&8,thumbs:i&16}),Bi=i=>({builder:i[2],ticks:i[3],thumbs:i[4]});function ds(i){let e,r,t,a;const n=i[19].default,l=St(n,i,i[18],Vi);let s=[i[2],i[8]],u={};for(let f=0;f<s.length;f+=1)u=ot(u,s[f]);return{c(){e=L("span"),l&&l.c(),this.h()},l(f){e=N(f,"SPAN",{});var o=oe(e);l&&l.l(o),o.forEach(p),this.h()},h(){kr(e,u)},m(f,o){g(f,e,o),l&&l.m(e,null),i[20](e),r=!0,t||(a=$i(i[2].action(e)),t=!0)},p(f,o){l&&l.p&&(!r||o&262172)&&Et(l,n,f,f[18],r?At(n,f[18],o,fs):Tt(f[18]),Vi),kr(e,u=Yr(s,[o&4&&f[2],o&256&&f[8]]))},i(f){r||(c(l,f),r=!0)},o(f){b(l,f),r=!1},d(f){f&&p(e),l&&l.d(f),i[20](null),t=!1,a()}}}function _s(i){let e;const r=i[19].default,t=St(r,i,i[18],Bi);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&262172)&&Et(t,r,a,a[18],e?At(r,a[18],n,ms):Tt(a[18]),Bi)},i(a){e||(c(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function cs(i){let e,r,t,a;const n=[_s,ds],l=[];function s(u,f){return u[1]?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=Qe()},l(u){r.l(u),t=Qe()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(ue(),b(l[o],1,1,()=>{l[o]=null}),fe(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function ps(i,e,r){let t;const a=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let n=Ct(e,a),l,s,u,{$$slots:f={},$$scope:o}=e,{disabled:m=void 0}=e,{min:h=void 0}=e,{max:d=void 0}=e,{step:$=void 0}=e,{orientation:y=void 0}=e,{dir:F=void 0}=e,{value:G=void 0}=e,{onValueChange:H=void 0}=e,{asChild:w=!1}=e,{el:Q=void 0}=e;const{elements:{root:X,ticks:W,thumbs:I},states:{value:z},updateOption:V,getAttrs:j}=us({disabled:m,dir:F,min:h,max:d,step:$,orientation:y,defaultValue:G,onValueChange:({next:M})=>(G!==M&&(H==null||H(M),r(9,G=M)),M)});Rt(i,X,M=>r(17,l=M)),Rt(i,W,M=>r(3,s=M)),Rt(i,I,M=>r(4,u=M));const le=j("root");function x(M){$r[M?"unshift":"push"](()=>{Q=M,r(0,Q)})}return i.$$set=M=>{e=ot(ot({},e),vr(M)),r(8,n=Ct(e,a)),"disabled"in M&&r(10,m=M.disabled),"min"in M&&r(11,h=M.min),"max"in M&&r(12,d=M.max),"step"in M&&r(13,$=M.step),"orientation"in M&&r(14,y=M.orientation),"dir"in M&&r(15,F=M.dir),"value"in M&&r(9,G=M.value),"onValueChange"in M&&r(16,H=M.onValueChange),"asChild"in M&&r(1,w=M.asChild),"el"in M&&r(0,Q=M.el),"$$scope"in M&&r(18,o=M.$$scope)},i.$$.update=()=>{i.$$.dirty&512&&G!==void 0&&z.set(G),i.$$.dirty&1024&&V("disabled",m),i.$$.dirty&2048&&V("min",h),i.$$.dirty&4096&&V("max",d),i.$$.dirty&8192&&V("step",$),i.$$.dirty&16384&&V("orientation",y),i.$$.dirty&32768&&V("dir",F),i.$$.dirty&131072&&r(2,t=l),i.$$.dirty&4&&Object.assign(t,le)},[Q,w,t,s,u,X,W,I,n,G,m,h,d,$,y,F,H,l,o,f,x]}let hs=class extends ct{constructor(e){super(),pt(this,e,ps,cs,_t,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const bs=i=>({builder:i&4}),xi=i=>({builder:i[2]});function gs(i){let e,r,t,a=[i[2],i[4]],n={};for(let l=0;l<a.length;l+=1)n=ot(n,a[l]);return{c(){e=L("span"),this.h()},l(l){e=N(l,"SPAN",{}),oe(e).forEach(p),this.h()},h(){kr(e,n)},m(l,s){g(l,e,s),i[8](e),r||(t=$i(i[2].action(e)),r=!0)},p(l,s){kr(e,n=Yr(a,[s&4&&l[2],s&16&&l[4]]))},i:je,o:je,d(l){l&&p(e),i[8](null),r=!1,t()}}}function ys(i){let e;const r=i[7].default,t=St(r,i,i[6],xi);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&68)&&Et(t,r,a,a[6],e?At(r,a[6],n,bs):Tt(a[6]),xi)},i(a){e||(c(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function vs(i){let e,r,t,a;const n=[ys,gs],l=[];function s(u,f){return u[1]?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=Qe()},l(u){r.l(u),t=Qe()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(ue(),b(l[o],1,1,()=>{l[o]=null}),fe(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function ks(i,e,r){let t;const a=["asChild","el"];let n=Ct(e,a),l,{$$slots:s={},$$scope:u}=e,{asChild:f=!1}=e,{el:o=void 0}=e;const{elements:{range:m},getAttrs:h}=ll();Rt(i,m,y=>r(5,l=y));const d=h("range");function $(y){$r[y?"unshift":"push"](()=>{o=y,r(0,o)})}return i.$$set=y=>{e=ot(ot({},e),vr(y)),r(4,n=Ct(e,a)),"asChild"in y&&r(1,f=y.asChild),"el"in y&&r(0,o=y.el),"$$scope"in y&&r(6,u=y.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&r(2,t=l),i.$$.dirty&4&&Object.assign(t,d)},[o,f,t,m,n,l,u,s,$]}class ws extends ct{constructor(e){super(),pt(this,e,ks,vs,_t,{asChild:1,el:0})}}const $s=i=>({builder:i&4}),Ui=i=>({builder:i[2]});function Rs(i){let e,r,t,a=[i[2],i[4]],n={};for(let l=0;l<a.length;l+=1)n=ot(n,a[l]);return{c(){e=L("span"),this.h()},l(l){e=N(l,"SPAN",{}),oe(e).forEach(p),this.h()},h(){kr(e,n)},m(l,s){g(l,e,s),i[8](e),r||(t=[$i(i[2].action(e)),pr(e,"m-keydown",i[3])],r=!0)},p(l,s){kr(e,n=Yr(a,[s&4&&l[2],s&16&&l[4]]))},i:je,o:je,d(l){l&&p(e),i[8](null),r=!1,Zn(t)}}}function Ss(i){let e;const r=i[7].default,t=St(r,i,i[6],Ui);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&68)&&Et(t,r,a,a[6],e?At(r,a[6],n,$s):Tt(a[6]),Ui)},i(a){e||(c(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function Es(i){let e,r,t,a;const n=[Ss,Rs],l=[];function s(u,f){return u[1]?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=Qe()},l(u){r.l(u),t=Qe()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(ue(),b(l[o],1,1,()=>{l[o]=null}),fe(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function Ts(i,e,r){let t;const a=["asChild","el","thumb"];let n=Ct(e,a),{$$slots:l={},$$scope:s}=e,{asChild:u=!1}=e,{el:f=void 0}=e,{thumb:o}=e;const{getAttrs:m}=ll(),h=Vl(),d=m("thumb");function $(y){$r[y?"unshift":"push"](()=>{f=y,r(0,f)})}return i.$$set=y=>{e=ot(ot({},e),vr(y)),r(4,n=Ct(e,a)),"asChild"in y&&r(1,u=y.asChild),"el"in y&&r(0,f=y.el),"thumb"in y&&r(5,o=y.thumb),"$$scope"in y&&r(6,s=y.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&r(2,t=o),i.$$.dirty&4&&Object.assign(t,d)},[f,u,t,h,n,o,s,l,$]}class sl extends ct{constructor(e){super(),pt(this,e,Ts,Es,_t,{asChild:1,el:0,thumb:5})}}function Gi(i){let e,r;return e=new al({props:{description:i[3]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&8&&(n.description=t[3]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function As(i){let e,r,t,a,n,l,s,u=i[3]&&Gi(i);return{c(){e=L("button"),r=We(i[1]),t=S(),u&&u.c(),this.h()},l(f){e=N(f,"BUTTON",{class:!0});var o=oe(e);r=Ge(o,i[1]),t=R(o),u&&u.l(o),o.forEach(p),this.h()},h(){Y(e,"class",a="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(i[2]===i[0]?`transition ease-in ${i[8].active}`:i[8].notActive)+" "+(i[4]?"flex-1":"")),te(e,"--bgColor",i[6]),te(e,"--activeColor",i[5])},m(f,o){g(f,e,o),K(e,r),K(e,t),u&&u.m(e,null),n=!0,l||(s=pr(e,"click",i[12]),l=!0)},p(f,[o]){(!n||o&2)&&it(r,f[1]),f[3]?u?(u.p(f,o),o&8&&c(u,1)):(u=Gi(f),u.c(),c(u,1),u.m(e,null)):u&&(ue(),b(u,1,1,()=>{u=null}),fe()),(!n||o&21&&a!==(a="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(f[2]===f[0]?`transition ease-in ${f[8].active}`:f[8].notActive)+" "+(f[4]?"flex-1":"")))&&Y(e,"class",a),o&64&&te(e,"--bgColor",f[6]),o&32&&te(e,"--activeColor",f[5])},i(f){n||(c(u),n=!0)},o(f){b(u),n=!1},d(f){f&&p(e),u&&u.d(),l=!1,s()}}}function Cs(i,e,r){let t,a,n,l,s=je,u=()=>(s(),s=$l(t,w=>r(11,l=w)),t);i.$$.on_destroy.push(()=>s());const{resolveColor:f}=Bl();let{color:o="base-content"}=e,{id:m}=e,{label:h}=e,{activeId:d}=e,{description:$=void 0}=e,{fullWidth:y}=e,{background:F}=e;const G={notActive:"border-b border-base-100 text-base-content-muted hover:text-base-content hover:border-base-300",active:`border-b-2 border-[--activeColor] -mb-px text-[--activeColor] ${F?"bg-[--bgColor]":""}`};function H(w){Rl.call(this,i,w)}return i.$$set=w=>{"color"in w&&r(9,o=w.color),"id"in w&&r(0,m=w.id),"label"in w&&r(1,h=w.label),"activeId"in w&&r(2,d=w.activeId),"description"in w&&r(3,$=w.description),"fullWidth"in w&&r(4,y=w.fullWidth),"background"in w&&r(10,F=w.background)},i.$$.update=()=>{i.$$.dirty&512&&u(r(7,t=f(o))),i.$$.dirty&2048&&r(6,a=Mi(l).alpha(.05).css()),i.$$.dirty&2048&&r(5,n=Mi(l).css())},[m,h,d,$,y,n,a,t,G,o,F,l,H]}class ol extends ct{constructor(e){super(),pt(this,e,Cs,As,_t,{color:9,id:0,label:1,activeId:2,description:3,fullWidth:4,background:10})}}function Wi(i,e,r){const t=i.slice();return t[5]=e[r],t}function Yi(i){let e,r;return e=new sl({props:{class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p:je,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Qi(i){let e,r;return e=new sl({props:{thumb:i[5],class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&16&&(n.thumb=t[5]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Is(i){let e,r,t,a,n;r=new ws({props:{class:"absolute h-full bg-base-content before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-base-content after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-base-content/20 after:-z-10 after:rounded-r-full"}});let l=wr(i[4]??[]),s=[];for(let o=0;o<l.length;o+=1)s[o]=Qi(Wi(i,l,o));const u=o=>b(s[o],1,1,()=>{s[o]=null});let f=null;return l.length||(f=Yi()),{c(){e=L("span"),C(r.$$.fragment),t=S();for(let o=0;o<s.length;o+=1)s[o].c();a=Qe(),f&&f.c(),this.h()},l(o){e=N(o,"SPAN",{class:!0});var m=oe(e);A(r.$$.fragment,m),m.forEach(p),t=R(o);for(let h=0;h<s.length;h+=1)s[h].l(o);a=Qe(),f&&f.l(o),this.h()},h(){Y(e,"class","relative h-1 w-full grow rounded-l-full bg-base-300 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(o,m){g(o,e,m),T(r,e,null),g(o,t,m);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(o,m);g(o,a,m),f&&f.m(o,m),n=!0},p(o,m){if(m&16){l=wr(o[4]??[]);let h;for(h=0;h<l.length;h+=1){const d=Wi(o,l,h);s[h]?(s[h].p(d,m),c(s[h],1)):(s[h]=Qi(d),s[h].c(),c(s[h],1),s[h].m(a.parentNode,a))}for(ue(),h=l.length;h<s.length;h+=1)u(h);fe(),!l.length&&f?f.p(o,m):l.length?f&&(ue(),b(f,1,1,()=>{f=null}),fe()):(f=Yi(),f.c(),c(f,1),f.m(a.parentNode,a))}},i(o){if(!n){c(r.$$.fragment,o);for(let m=0;m<l.length;m+=1)c(s[m]);n=!0}},o(o){b(r.$$.fragment,o),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)b(s[m]);n=!1},d(o){o&&(p(e),p(t),p(a)),E(r),Ri(s,o),f&&f.d(o)}}}function Ds(i){let e,r,t;const a=[{class:zi("relative left-1.5 flex w-full touch-none select-none items-center",i[1])},i[2]];function n(s){i[3](s)}let l={$$slots:{default:[Is,({thumbs:s})=>({4:s}),({thumbs:s})=>s?16:0]},$$scope:{ctx:i}};for(let s=0;s<a.length;s+=1)l=ot(l,a[s]);return i[0]!==void 0&&(l.value=i[0]),e=new hs({props:l}),$r.push(()=>rl(e,"value",n)),{c(){C(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,u){T(e,s,u),t=!0},p(s,[u]){const f=u&6?Yr(a,[u&2&&{class:zi("relative left-1.5 flex w-full touch-none select-none items-center",s[1])},u&4&&il(s[2])]):{};u&272&&(f.$$scope={dirty:u,ctx:s}),!r&&u&1&&(r=!0,f.value=s[0],Kn(()=>r=!1)),e.$set(f)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function Os(i,e,r){const t=["class","value"];let a=Ct(e,t),{class:n=void 0}=e,{value:l=[0]}=e;function s(u){l=u,r(0,l)}return i.$$set=u=>{e=ot(ot({},e),vr(u)),r(2,a=Ct(e,t)),"class"in u&&r(1,n=u.class),"value"in u&&r(0,l=u.value)},[l,n,a,s]}class qs extends ct{constructor(e){super(),pt(this,e,Os,Ds,_t,{class:1,value:0})}}function Ns(i){let e,r,t,a,n,l,s,u,f,o,m,h;const d=[Ms,Fs],$=[];function y(W,I){return W[9]?0:1}a=y(i),n=$[a]=d[a](i);function F(W,I){return W[4]?Ps:zs}let G=F(i),H=G(i);function w(W){i[29](W)}let Q={min:i[0],max:i[1],step:i[5],sizeClass:i[14]};i[10]!==void 0&&(Q.value=i[10]),u=new qs({props:Q}),$r.push(()=>rl(u,"value",w));let X=i[2]&&ji(i);return{c(){e=L("div"),r=L("p"),t=L("span"),n.c(),l=S(),H.c(),s=S(),C(u.$$.fragment),o=S(),X&&X.c(),this.h()},l(W){e=N(W,"DIV",{class:!0});var I=oe(e);r=N(I,"P",{class:!0});var z=oe(r);t=N(z,"SPAN",{class:!0});var V=oe(t);n.l(V),V.forEach(p),l=R(z),H.l(z),z.forEach(p),s=R(I),A(u.$$.fragment,I),o=R(I),X&&X.l(I),I.forEach(p),this.h()},h(){Y(t,"class","font-medium"),Y(r,"class","pb-2 pt-0.5 truncate text-xs"),Y(e,"class",m=`relative ${i[14]} mt-2 mb-10 select-none`)},m(W,I){g(W,e,I),K(e,r),K(r,t),$[a].m(t,null),K(r,l),H.m(r,null),K(e,s),T(u,e,null),K(e,o),X&&X.m(e,null),h=!0},p(W,I){let z=a;a=y(W),a===z?$[a].p(W,I):(ue(),b($[z],1,1,()=>{$[z]=null}),fe(),n=$[a],n?n.p(W,I):(n=$[a]=d[a](W),n.c()),c(n,1),n.m(t,null)),G===(G=F(W))&&H?H.p(W,I):(H.d(1),H=G(W),H&&(H.c(),H.m(r,null)));const V={};I[0]&1&&(V.min=W[0]),I[0]&2&&(V.max=W[1]),I[0]&32&&(V.step=W[5]),I[0]&16384&&(V.sizeClass=W[14]),!f&&I[0]&1024&&(f=!0,V.value=W[10],Kn(()=>f=!1)),u.$set(V),W[2]?X?X.p(W,I):(X=ji(W),X.c(),X.m(e,null)):X&&(X.d(1),X=null),(!h||I[0]&16384&&m!==(m=`relative ${W[14]} mt-2 mb-10 select-none`))&&Y(e,"class",m)},i(W){h||(c(n),c(u.$$.fragment,W),h=!0)},o(W){b(n),b(u.$$.fragment,W),h=!1},d(W){W&&p(e),$[a].d(),H.d(),E(u),X&&X.d()}}}function Ls(i){let e,r;return e=new Gl({props:{inputType:"Slider",error:i[11],width:"170",height:"36"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2048&&(n.error=t[11]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Fs(i){let e,r;return{c(){e=We(i[6]),r=We(":")},l(t){e=Ge(t,i[6]),r=Ge(t,":")},m(t,a){g(t,e,a),g(t,r,a)},p(t,a){a[0]&64&&it(e,t[6])},i:je,o:je,d(t){t&&(p(e),p(r))}}}function Ms(i){let e,r,t;return r=new al({props:{description:i[9],className:"mr-2"}}),{c(){e=We(i[6]),C(r.$$.fragment)},l(a){e=Ge(a,i[6]),A(r.$$.fragment,a)},m(a,n){g(a,e,n),T(r,a,n),t=!0},p(a,n){(!t||n[0]&64)&&it(e,a[6]);const l={};n[0]&512&&(l.description=a[9]),r.$set(l)},i(a){t||(c(r.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),t=!1},d(a){a&&p(e),E(r,a)}}}function zs(i){let e,r=(i[8]?gr(i[15][i[7]],i[12]):i[15][i[7]])+"",t;return{c(){e=L("span"),t=We(r),this.h()},l(a){e=N(a,"SPAN",{class:!0});var n=oe(e);t=Ge(n,r),n.forEach(p),this.h()},h(){Y(e,"class","text-xs")},m(a,n){g(a,e,n),K(e,t)},p(a,n){n[0]&37248&&r!==(r=(a[8]?gr(a[15][a[7]],a[12]):a[15][a[7]])+"")&&it(t,r)},d(a){a&&p(e)}}}function Ps(i){let e,r,t;return{c(){e=L("input"),this.h()},l(a){e=N(a,"INPUT",{type:!0,min:!0,max:!0,class:!0}),this.h()},h(){Y(e,"type","number"),Y(e,"min",i[0]),Y(e,"max",i[1]),e.value=i[13],Y(e,"class","w-auto h-8 px-2 mb-2 text-sm border border-base-300 rounded bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary/50")},m(a,n){g(a,e,n),r||(t=pr(e,"input",i[28]),r=!0)},p(a,n){n[0]&1&&Y(e,"min",a[0]),n[0]&2&&Y(e,"max",a[1]),n[0]&8192&&e.value!==a[13]&&(e.value=a[13])},d(a){a&&p(e),r=!1,t()}}}function ji(i){let e,r=(i[8]?gr(i[0],i[12]):i[0])+"",t,a,n,l=(i[8]?gr(i[1],i[12]):i[1])+"",s;return{c(){e=L("span"),t=We(r),a=S(),n=L("span"),s=We(l),this.h()},l(u){e=N(u,"SPAN",{class:!0});var f=oe(e);t=Ge(f,r),f.forEach(p),a=R(u),n=N(u,"SPAN",{class:!0});var o=oe(n);s=Ge(o,l),o.forEach(p),this.h()},h(){Y(e,"class","absolute left-0 text-xs pt-1 -z-10"),Y(n,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(u,f){g(u,e,f),K(e,t),g(u,a,f),g(u,n,f),K(n,s)},p(u,f){f[0]&4353&&r!==(r=(u[8]?gr(u[0],u[12]):u[0])+"")&&it(t,r),f[0]&4354&&l!==(l=(u[8]?gr(u[1],u[12]):u[1])+"")&&it(s,l)},d(u){u&&(p(e),p(a),p(n))}}}function Hs(i){let e,r,t,a;const n=[Ls,Ns],l=[];function s(u,f){return u[11].length>0?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=Qe()},l(u){r.l(u),t=Qe()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,f){let o=e;e=s(u),e===o?l[e].p(u,f):(ue(),b(l[o],1,1,()=>{l[o]=null}),fe(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function Vs(i){let e,r;return e=new rs({props:{enabled:i[3],$$slots:{default:[Hs]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8&&(n.enabled=t[3]),a[0]&65527|a[1]&64&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Bs(i,e,r){var Ke,$e,be;let t,a,n,l,s;const u=jl();Rt(i,u,O=>r(15,s=O));let{title:f}=e,{name:o}=e,{min:m=0}=e,{max:h=100}=e,{step:d=1}=e,{showMaxMin:$=!0}=e,{hideDuringPrint:y=!0}=e,{defaultValue:F}=e,{range:G=void 0}=e,H=[0],{fmt:w="num0"}=e,{size:Q=""}=e,X,{description:W=void 0}=e,{data:I}=e,{maxColumn:z=void 0}=e,{minColumn:V=void 0}=e,{debounceDelay:j=0}=e,{showInput:le=!1}=e,x=[],M,re=!0;function ie(O){clearTimeout(M),M=setTimeout(()=>{lt(u,s[o]=O,s)},j)}na(()=>()=>{M&&clearTimeout(M)});function he(O,ee){if(O=Wl(O),isNaN(O)){x.push(`${ee} must be a number`);return}return O}function He(O,ee){O>ee&&x.push("min cannot be greater than max")}let ne=!1;const J=O=>({small:"w-40",medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[O.toLowerCase()]||"w-40";if(I){try{xl(I,[],[G,F,V,z])}catch(O){x=[...x,O.message]}typeof F=="string"&&((Ke=I[0])!=null&&Ke[F])&&(H=[I[0][F]]),G&&(m=I.map(O=>O[G]).reduce((O,ee)=>Math.min(O,ee)),h=I.map(O=>O[G]).reduce((O,ee)=>Math.max(O,ee))),z&&(($e=I[0])!=null&&$e[z])&&(h=I[0][z]),V&&((be=I[0])!=null&&be[V])&&(m=I[0][V])}try{Tl({name:o})}catch(O){x.push(O.message)}const B=()=>{a>1e3&&d<n&&r(5,d=n)};function ae(O,ee=null){const me=Math.round(O),ye=Math.max(m,Math.min(h,isNaN(me)?m:me));ee&&(ee.value=ye),r(10,H=[ye]),ie(H)}const Te=O=>ae(O.target.value,O.target);function Ae(O){H=O,r(10,H),r(18,F),r(21,I),r(26,ne),r(0,m),r(11,x),r(1,h)}return i.$$set=O=>{"title"in O&&r(6,f=O.title),"name"in O&&r(7,o=O.name),"min"in O&&r(0,m=O.min),"max"in O&&r(1,h=O.max),"step"in O&&r(5,d=O.step),"showMaxMin"in O&&r(2,$=O.showMaxMin),"hideDuringPrint"in O&&r(3,y=O.hideDuringPrint),"defaultValue"in O&&r(18,F=O.defaultValue),"range"in O&&r(19,G=O.range),"fmt"in O&&r(8,w=O.fmt),"size"in O&&r(20,Q=O.size),"description"in O&&r(9,W=O.description),"data"in O&&r(21,I=O.data),"maxColumn"in O&&r(22,z=O.maxColumn),"minColumn"in O&&r(23,V=O.minColumn),"debounceDelay"in O&&r(24,j=O.debounceDelay),"showInput"in O&&r(4,le=O.showInput)},i.$$.update=()=>{i.$$.dirty[0]&4&&r(2,$=$t($)),i.$$.dirty[0]&8&&r(3,y=$t(y)),i.$$.dirty[0]&16&&r(4,le=$t(le)),i.$$.dirty[0]&1&&m!==void 0&&r(0,m=he(m,"min")),i.$$.dirty[0]&2&&h!==void 0&&r(1,h=he(h,"max")),i.$$.dirty[0]&3&&h!==void 0&&m!==void 0&&He(m,h),i.$$.dirty[0]&69470211&&F!==void 0&&!I&&!ne&&(r(18,F=he(F,"defaultValue")),F<m?x.push("defaultValue cannot be less than min"):F>h&&x.push("defaultValue cannot be greater than max"),r(10,H=[F]),r(26,ne=!0)),i.$$.dirty[0]&33555584&&H&&H.length>0&&(re?(lt(u,s[o]=H,s),r(25,re=!1)):ie(H)),i.$$.dirty[0]&1048576&&r(14,t=J(Q)),i.$$.dirty[0]&256&&(w?r(12,X=Ul(w,"number")):r(12,X=void 0)),i.$$.dirty[0]&3&&r(27,a=h-m),i.$$.dirty[0]&134217728&&(n=a/1e3),i.$$.dirty[0]&134217728&&a>1e3&&B(),i.$$.dirty[0]&1025&&r(13,l=H&&H.length>0?Math.round(H[0]):m)},[m,h,$,y,le,d,f,o,w,W,H,x,X,l,t,s,u,ae,F,G,Q,I,z,V,j,re,ne,a,Te,Ae]}class xs extends ct{constructor(e){super(),pt(this,e,Bs,Vs,_t,{title:6,name:7,min:0,max:1,step:5,showMaxMin:2,hideDuringPrint:3,defaultValue:18,range:19,fmt:8,size:20,description:9,data:21,maxColumn:22,minColumn:23,debounceDelay:24,showInput:4},null,[-1,-1])}}function Us(i){let e,r;const t=[i[4],{data:Fe.isQuery(i[7])?Array.from(i[7]):i[7]}];let a={};for(let n=0;n<t.length;n+=1)a=ot(a,t[n]);return e=new xs({props:a}),{c(){C(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,l){T(e,n,l),r=!0},p(n,l){const s=l&144?Yr(t,[l&16&&il(n[4]),l&128&&{data:Fe.isQuery(n[7])?Array.from(n[7]):n[7]}]):{};e.$set(s)},i(n){r||(c(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){E(e,n)}}}function Ji(i){let e,r;return e=new Ql({props:{emptyMessage:i[2],emptySet:i[1],chartType:Qs,isInitial:i[3]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&4&&(n.emptyMessage=t[2]),a&2&&(n.emptySet=t[1]),a&8&&(n.isInitial=t[3]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Gs(i){let e,r,t=!i[4].placeholder&&Ji(i);return{c(){e=L("span"),t&&t.c(),this.h()},l(a){e=N(a,"SPAN",{slot:!0});var n=oe(e);t&&t.l(n),n.forEach(p),this.h()},h(){Y(e,"slot","empty")},m(a,n){g(a,e,n),t&&t.m(e,null),r=!0},p(a,n){a[4].placeholder?t&&(ue(),b(t,1,1,()=>{t=null}),fe()):t?(t.p(a,n),n&16&&c(t,1)):(t=Ji(a),t.c(),c(t,1),t.m(e,null))},i(a){r||(c(t),r=!0)},o(a){b(t),r=!1},d(a){a&&p(e),t&&t.d()}}}function Ws(i){let e,r="Loading...";return{c(){e=L("span"),e.textContent=r,this.h()},l(t){e=N(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),yt(e)!=="svelte-exu0be"&&(e.textContent=r),this.h()},h(){Y(e,"slot","skeleton"),Y(e,"class","text-gray-500")},m(t,a){g(t,e,a)},p:je,d(t){t&&p(e)}}}function Ys(i){let e,r;return e=new Yl({props:{data:i[0],$$slots:{skeleton:[Ws],empty:[Gs],default:[Us,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.data=t[0]),a&414&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}let Qs="Slider";function js(i,e,r){let t,{data:a}=e;const n=Fe.isQuery(a)?a.hash:void 0;let l=(a==null?void 0:a.hash)===n,{emptySet:s=void 0}=e,{emptyMessage:u=void 0}=e;return i.$$set=f=>{r(6,e=ot(ot({},e),vr(f))),"data"in f&&r(0,a=f.data),"emptySet"in f&&r(1,s=f.emptySet),"emptyMessage"in f&&r(2,u=f.emptyMessage)},i.$$.update=()=>{i.$$.dirty&1&&r(3,l=(a==null?void 0:a.hash)===n),r(4,t=Object.fromEntries(Object.entries(e).filter(([,f])=>f!==void 0)))},e=vr(e),[a,s,u,l,t]}class Js extends ct{constructor(e){super(),pt(this,e,js,Ys,_t,{data:0,emptySet:1,emptyMessage:2})}}const{window:Xr}=as;function Zi(i,e,r){const t=i.slice();return t[16]=e[r],t}function Ki(i){let e,r,t=wr(i[5].tabs),a=[];for(let l=0;l<t.length;l+=1)a[l]=Xi(Zi(i,t,l));const n=l=>b(a[l],1,1,()=>{a[l]=null});return{c(){e=L("nav");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=N(l,"NAV",{class:!0});var s=oe(e);for(let u=0;u<a.length;u+=1)a[u].l(s);s.forEach(p),this.h()},h(){Y(e,"class","my-5 flex flex-wrap gap-x-0 gap-y-1 border-b")},m(l,s){g(l,e,s);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null);r=!0},p(l,s){if(s&32942){t=wr(l[5].tabs);let u;for(u=0;u<t.length;u+=1){const f=Zi(l,t,u);a[u]?(a[u].p(f,s),c(a[u],1)):(a[u]=Xi(f),a[u].c(),c(a[u],1),a[u].m(e,null))}for(ue(),u=t.length;u<a.length;u+=1)n(u);fe()}},i(l){if(!r){for(let s=0;s<t.length;s+=1)c(a[s]);r=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)b(a[s]);r=!1},d(l){l&&p(e),Ri(a,l)}}}function Zs(i){let e,r;const t=i[9].default,a=St(t,i,i[15],null);return{c(){a&&a.c(),e=S()},l(n){a&&a.l(n),e=R(n)},m(n,l){a&&a.m(n,l),g(n,e,l),r=!0},p(n,l){a&&a.p&&(!r||l&32768)&&Et(a,t,n,n[15],r?At(t,n[15],l,null):Tt(n[15]),null)},i(n){r||(c(a,n),r=!0)},o(n){b(a,n),r=!1},d(n){n&&p(e),a&&a.d(n)}}}function Xi(i){let e,r;function t(){return i[14](i[16])}return e=new ol({props:{id:i[16].id,label:i[16].label,description:i[16].description,fullWidth:$t(i[2]),background:$t(i[3]),color:i[1],activeId:i[5].activeId,$$slots:{default:[Zs]},$$scope:{ctx:i}}}),e.$on("click",t),{c(){C(e.$$.fragment)},l(a){A(e.$$.fragment,a)},m(a,n){T(e,a,n),r=!0},p(a,n){i=a;const l={};n&32&&(l.id=i[16].id),n&32&&(l.label=i[16].label),n&32&&(l.description=i[16].description),n&4&&(l.fullWidth=$t(i[2])),n&8&&(l.background=$t(i[3])),n&2&&(l.color=i[1]),n&32&&(l.activeId=i[5].activeId),n&32768&&(l.$$scope={dirty:n,ctx:i}),e.$set(l)},i(a){r||(c(e.$$.fragment,a),r=!0)},o(a){b(e.$$.fragment,a),r=!1},d(a){E(e,a)}}}function Ks(i){let e,r,t,a,n,l,s=(!i[4]||!i[0])&&Ki(i);const u=i[9].default,f=St(u,i,i[15],null);return{c(){e=L("section"),s&&s.c(),r=S(),t=L("div"),f&&f.c(),this.h()},l(o){e=N(o,"SECTION",{});var m=oe(e);s&&s.l(m),r=R(m),t=N(m,"DIV",{class:!0});var h=oe(t);f&&f.l(h),h.forEach(p),m.forEach(p),this.h()},h(){Y(t,"class","text-base")},m(o,m){g(o,e,m),s&&s.m(e,null),K(e,r),K(e,t),f&&f.m(t,null),a=!0,n||(l=[pr(Xr,"beforeprint",i[10]),pr(Xr,"afterprint",i[11]),pr(Xr,"export-beforeprint",i[12]),pr(Xr,"export-afterprint",i[13])],n=!0)},p(o,[m]){!o[4]||!o[0]?s?(s.p(o,m),m&17&&c(s,1)):(s=Ki(o),s.c(),c(s,1),s.m(e,r)):s&&(ue(),b(s,1,1,()=>{s=null}),fe()),f&&f.p&&(!a||m&32768)&&Et(f,u,o,o[15],a?At(u,o[15],m,null):Tt(o[15]),null)},i(o){a||(c(s),c(f,o),a=!0)},o(o){b(s),b(f,o),a=!1},d(o){o&&p(e),s&&s.d(),f&&f.d(o),n=!1,Zn(l)}}}function Xs(i,e,r){let t,{$$slots:a={},$$scope:n}=e,{id:l}=e,{color:s=void 0}=e,{printShowAll:u=!0}=e,f=!1,{fullWidth:o=!1}=e,{background:m=!1}=e;const h=yr({tabs:[],activeId:null});Rt(i,h,w=>r(5,t=w)),na(()=>{var X,W;const Q=new URL(window.location.href).searchParams.get(l);Q?t.tabs.find(I=>I.id===Q)?lt(h,t.activeId=Q,t):lt(h,t.activeId=(X=t.tabs[0])==null?void 0:X.id,t):lt(h,t.activeId=(W=t.tabs[0])==null?void 0:W.id,t)}),wi("TABS_STORE",h);const d=w=>{lt(h,t.activeId=w,t)},$=()=>r(4,f=!0),y=()=>r(4,f=!1),F=()=>r(4,f=!0),G=()=>r(4,f=!1),H=w=>d(w.id);return i.$$set=w=>{"id"in w&&r(8,l=w.id),"color"in w&&r(1,s=w.color),"printShowAll"in w&&r(0,u=w.printShowAll),"fullWidth"in w&&r(2,o=w.fullWidth),"background"in w&&r(3,m=w.background),"$$scope"in w&&r(15,n=w.$$scope)},i.$$.update=()=>{var w;if(i.$$.dirty&1&&r(0,u=$t(u)),i.$$.dirty&288&&!t.activeId&&t.tabs.length&&!l&&lt(h,t.activeId=t.tabs[0].id,t),i.$$.dirty&288&&!t.tabs.find(Q=>Q.id===t.activeId)&&!l&&lt(h,t.activeId=(w=t.tabs[0])==null?void 0:w.id,t),i.$$.dirty&2&&lt(h,t.color=s,t),i.$$.dirty&16&&lt(h,t.printing=f,t),i.$$.dirty&1&&lt(h,t.printShowAll=u,t),i.$$.dirty&288&&t.activeId&&l){const Q=new URL(window.location.href);Q.searchParams.set(l,t.activeId),history.replaceState({},"",Q)}},[u,s,o,m,f,t,h,d,l,a,$,y,F,G,H,n]}class eo extends ct{constructor(e){super(),pt(this,e,Xs,Ks,_t,{id:8,color:1,printShowAll:0,fullWidth:2,background:3})}}function en(i,e,r){const t=i.slice();return t[11]=e[r],t}function to(i){let e,r,t,a,n=wr(i[2].tabs),l=[];for(let o=0;o<n.length;o+=1)l[o]=tn(en(i,n,o));const s=o=>b(l[o],1,1,()=>{l[o]=null}),u=i[7].default,f=St(u,i,i[8],null);return{c(){e=L("nav");for(let o=0;o<l.length;o+=1)l[o].c();r=S(),t=L("div"),f&&f.c(),this.h()},l(o){e=N(o,"NAV",{class:!0});var m=oe(e);for(let d=0;d<l.length;d+=1)l[d].l(m);m.forEach(p),r=R(o),t=N(o,"DIV",{class:!0});var h=oe(t);f&&f.l(h),h.forEach(p),this.h()},h(){Y(e,"class","my-6 flex flex-wrap gap-x-1 gap-y-1 border-b"),Y(t,"class","text-base")},m(o,m){g(o,e,m);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(e,null);g(o,r,m),g(o,t,m),f&&f.m(t,null),a=!0},p(o,m){if(m&277){n=wr(o[2].tabs);let h;for(h=0;h<n.length;h+=1){const d=en(o,n,h);l[h]?(l[h].p(d,m),c(l[h],1)):(l[h]=tn(d),l[h].c(),c(l[h],1),l[h].m(e,null))}for(ue(),h=n.length;h<l.length;h+=1)s(h);fe()}f&&f.p&&(!a||m&256)&&Et(f,u,o,o[8],a?At(u,o[8],m,null):Tt(o[8]),null)},i(o){if(!a){for(let m=0;m<n.length;m+=1)c(l[m]);c(f,o),a=!0}},o(o){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)b(l[m]);b(f,o),a=!1},d(o){o&&(p(e),p(r),p(t)),Ri(l,o),f&&f.d(o)}}}function ro(i){let e,r,t=i[1]&&rn(i);return{c(){t&&t.c(),e=Qe()},l(a){t&&t.l(a),e=Qe()},m(a,n){t&&t.m(a,n),g(a,e,n),r=!0},p(a,n){a[1]?t?(t.p(a,n),n&2&&c(t,1)):(t=rn(a),t.c(),c(t,1),t.m(e.parentNode,e)):t&&(ue(),b(t,1,1,()=>{t=null}),fe())},i(a){r||(c(t),r=!0)},o(a){b(t),r=!1},d(a){a&&p(e),t&&t.d(a)}}}function ao(i){let e,r;const t=i[7].default,a=St(t,i,i[8],null);return{c(){a&&a.c(),e=S()},l(n){a&&a.l(n),e=R(n)},m(n,l){a&&a.m(n,l),g(n,e,l),r=!0},p(n,l){a&&a.p&&(!r||l&256)&&Et(a,t,n,n[8],r?At(t,n[8],l,null):Tt(n[8]),null)},i(n){r||(c(a,n),r=!0)},o(n){b(a,n),r=!1},d(n){n&&p(e),a&&a.d(n)}}}function tn(i){let e,r;return e=new ol({props:{id:i[11].id,label:i[11].label,activeId:i[0],color:i[4],$$slots:{default:[ao]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&4&&(n.id=t[11].id),a&4&&(n.label=t[11].label),a&1&&(n.activeId=t[0]),a&256&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function rn(i){let e,r;const t=i[7].default,a=St(t,i,i[8],null);return{c(){e=L("div"),a&&a.c(),this.h()},l(n){e=N(n,"DIV",{class:!0});var l=oe(e);a&&a.l(l),l.forEach(p),this.h()},h(){Y(e,"class","mb-5")},m(n,l){g(n,e,l),a&&a.m(e,null),r=!0},p(n,l){a&&a.p&&(!r||l&256)&&Et(a,t,n,n[8],r?At(t,n[8],l,null):Tt(n[8]),null)},i(n){r||(c(a,n),r=!0)},o(n){b(a,n),r=!1},d(n){n&&p(e),a&&a.d(n)}}}function io(i){let e,r,t,a;const n=[ro,to],l=[];function s(u,f){return!u[2].printing||!u[2].printShowAll?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=Qe()},l(u){r.l(u),t=Qe()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,[f]){let o=e;e=s(u),e===o?l[e].p(u,f):(ue(),b(l[o],1,1,()=>{l[o]=null}),fe(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function no(i,e,r){let t,{$$slots:a={},$$scope:n}=e,{label:l}=e,{id:s}=e,{selected:u}=e,{description:f=void 0}=e;const o=Jl(),m=Jn("TABS_STORE");Rt(i,m,$=>r(2,t=$));const h=()=>{lt(m,t.tabs=[...t.tabs.filter($=>$.internalId!==o),{internalId:o,id:s,label:l,description:f}],t),u&&lt(m,t.activeId=s,t)};na(()=>m.subscribe(({activeId:$})=>{r(1,u=$===s)})),Xn(()=>{lt(m,t.tabs=t.tabs.filter($=>$.internalId!==o),t)});const d=t.color;return i.$$set=$=>{"label"in $&&r(5,l=$.label),"id"in $&&r(0,s=$.id),"selected"in $&&r(1,u=$.selected),"description"in $&&r(6,f=$.description),"$$scope"in $&&r(8,n=$.$$scope)},i.$$.update=()=>{i.$$.dirty&33&&r(0,s=s??l),i.$$.dirty&2&&r(1,u=$t(u)),i.$$.dirty&33&&s&&l&&h()},[s,u,t,m,d,l,f,a,n]}class an extends ct{constructor(e){super(),pt(this,e,no,io,_t,{label:5,id:0,selected:1,description:6})}}function Si(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var br=Si();function ul(i){br=i}var Wr={exec:()=>null};function Ve(i,e=""){let r=typeof i=="string"?i:i.source,t={replace:(a,n)=>{let l=typeof n=="string"?n:n.source;return l=l.replace(st.caret,"$1"),r=r.replace(a,l),t},getRegex:()=>new RegExp(r,e)};return t}var lo=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),st={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},so=/^(?:[ \t]*(?:\n|$))+/,oo=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,uo=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,fo=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ei=/(?:[*+-]|\d{1,9}[.)])/,fl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ml=Ve(fl).replace(/bull/g,Ei).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),mo=Ve(fl).replace(/bull/g,Ei).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ti=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_o=/^[^\n]+/,Ai=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,co=Ve(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ai).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),po=Ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ei).getRegex(),la="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ci=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ho=Ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ci).replace("tag",la).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),dl=Ve(Ti).replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",la).getRegex(),bo=Ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",dl).getRegex(),Ii={blockquote:bo,code:oo,def:co,fences:uo,heading:fo,hr:Qr,html:ho,lheading:ml,list:po,newline:so,paragraph:dl,table:Wr,text:_o},nn=Ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",la).getRegex(),go={...Ii,lheading:mo,table:nn,paragraph:Ve(Ti).replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",la).getRegex()},yo={...Ii,html:Ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ci).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Wr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ve(Ti).replace("hr",Qr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ml).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vo=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ko=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_l=/^( {2,}|\\)\n(?!\s*$)/,wo=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,sa=/[\p{P}\p{S}]/u,Di=/[\s\p{P}\p{S}]/u,cl=/[^\s\p{P}\p{S}]/u,$o=Ve(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Di).getRegex(),pl=/(?!~)[\p{P}\p{S}]/u,Ro=/(?!~)[\s\p{P}\p{S}]/u,So=/(?:[^\s\p{P}\p{S}]|~)/u,Eo=Ve(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",lo?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),hl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,To=Ve(hl,"u").replace(/punct/g,sa).getRegex(),Ao=Ve(hl,"u").replace(/punct/g,pl).getRegex(),bl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Co=Ve(bl,"gu").replace(/notPunctSpace/g,cl).replace(/punctSpace/g,Di).replace(/punct/g,sa).getRegex(),Io=Ve(bl,"gu").replace(/notPunctSpace/g,So).replace(/punctSpace/g,Ro).replace(/punct/g,pl).getRegex(),Do=Ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cl).replace(/punctSpace/g,Di).replace(/punct/g,sa).getRegex(),Oo=Ve(/\\(punct)/,"gu").replace(/punct/g,sa).getRegex(),qo=Ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),No=Ve(Ci).replace("(?:-->|$)","-->").getRegex(),Lo=Ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",No).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ra=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Fo=Ve(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ra).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),gl=Ve(/^!?\[(label)\]\[(ref)\]/).replace("label",ra).replace("ref",Ai).getRegex(),yl=Ve(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ai).getRegex(),Mo=Ve("reflink|nolink(?!\\()","g").replace("reflink",gl).replace("nolink",yl).getRegex(),ln=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Oi={_backpedal:Wr,anyPunctuation:Oo,autolink:qo,blockSkip:Eo,br:_l,code:ko,del:Wr,emStrongLDelim:To,emStrongRDelimAst:Co,emStrongRDelimUnd:Do,escape:vo,link:Fo,nolink:yl,punctuation:$o,reflink:gl,reflinkSearch:Mo,tag:Lo,text:wo,url:Wr},zo={...Oi,link:Ve(/^!?\[(label)\]\((.*?)\)/).replace("label",ra).getRegex(),reflink:Ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ra).getRegex()},yi={...Oi,emStrongRDelimAst:Io,emStrongLDelim:Ao,url:Ve(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ln).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Ve(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ln).getRegex()},Po={...yi,br:Ve(_l).replace("{2,}","*").getRegex(),text:Ve(yi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ea={normal:Ii,gfm:go,pedantic:yo},xr={normal:Oi,gfm:yi,breaks:Po,pedantic:zo},Ho={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sn=i=>Ho[i];function vt(i,e){if(e){if(st.escapeTest.test(i))return i.replace(st.escapeReplace,sn)}else if(st.escapeTestNoEncode.test(i))return i.replace(st.escapeReplaceNoEncode,sn);return i}function on(i){try{i=encodeURI(i).replace(st.percentDecode,"%")}catch{return null}return i}function un(i,e){var n;let r=i.replace(st.findPipe,(l,s,u)=>{let f=!1,o=s;for(;--o>=0&&u[o]==="\\";)f=!f;return f?"|":" |"}),t=r.split(st.splitPipe),a=0;if(t[0].trim()||t.shift(),t.length>0&&!((n=t.at(-1))!=null&&n.trim())&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;a<t.length;a++)t[a]=t[a].trim().replace(st.slashPipe,"|");return t}function Ur(i,e,r){let t=i.length;if(t===0)return"";let a=0;for(;a<t&&i.charAt(t-a-1)===e;)a++;return i.slice(0,t-a)}function Vo(i,e){if(i.indexOf(e[1])===-1)return-1;let r=0;for(let t=0;t<i.length;t++)if(i[t]==="\\")t++;else if(i[t]===e[0])r++;else if(i[t]===e[1]&&(r--,r<0))return t;return r>0?-2:-1}function fn(i,e,r,t,a){let n=e.href,l=e.title||null,s=i[1].replace(a.other.outputLinkReplace,"$1");t.state.inLink=!0;let u={type:i[0].charAt(0)==="!"?"image":"link",raw:r,href:n,title:l,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,u}function Bo(i,e,r){let t=i.match(r.other.indentCodeCompensation);if(t===null)return e;let a=t[1];return e.split(`
`).map(n=>{let l=n.match(r.other.beginningSpace);if(l===null)return n;let[s]=l;return s.length>=a.length?n.slice(a.length):n}).join(`
`)}var aa=class{constructor(i){Je(this,"options");Je(this,"rules");Je(this,"lexer");this.options=i||br}space(i){let e=this.rules.block.newline.exec(i);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(i){let e=this.rules.block.code.exec(i);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ur(r,`
`)}}}fences(i){let e=this.rules.block.fences.exec(i);if(e){let r=e[0],t=Bo(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:t}}}heading(i){let e=this.rules.block.heading.exec(i);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let t=Ur(r,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(r=t.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(i){let e=this.rules.block.hr.exec(i);if(e)return{type:"hr",raw:Ur(e[0],`
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
`,1)[0].replace(this.rules.other.listReplaceTabs,G=>" ".repeat(3*G.length)),h=i.split(`
`,1)[0],d=!m.trim(),$=0;if(this.options.pedantic?($=2,o=m.trimStart()):d?$=e[1].length+1:($=e[2].search(this.rules.other.nonSpaceChar),$=$>4?1:$,o=m.slice($),$+=e[1].length),d&&this.rules.other.blankLine.test(h)&&(f+=h+`
`,i=i.substring(h.length+1),u=!0),!u){let G=this.rules.other.nextBulletRegex($),H=this.rules.other.hrRegex($),w=this.rules.other.fencesBeginRegex($),Q=this.rules.other.headingBeginRegex($),X=this.rules.other.htmlBeginRegex($);for(;i;){let W=i.split(`
`,1)[0],I;if(h=W,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),I=h):I=h.replace(this.rules.other.tabCharGlobal,"    "),w.test(h)||Q.test(h)||X.test(h)||G.test(h)||H.test(h))break;if(I.search(this.rules.other.nonSpaceChar)>=$||!h.trim())o+=`
`+I.slice($);else{if(d||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||w.test(m)||Q.test(m)||H.test(m))break;o+=`
`+h}!d&&!h.trim()&&(d=!0),f+=W+`
`,i=i.substring(W.length+1),m=I.slice($)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(l=!0));let y=null,F;this.options.gfm&&(y=this.rules.other.listIsTask.exec(o),y&&(F=y[0]!=="[ ] ",o=o.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:f,task:!!y,checked:F,loose:!1,text:o,tokens:[]}),a.raw+=f}let s=a.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){let f=a.items[u].tokens.filter(m=>m.type==="space"),o=f.length>0&&f.some(m=>this.rules.other.anyLine.test(m.raw));a.loose=o}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(i){let e=this.rules.block.html.exec(i);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(i){let e=this.rules.block.def.exec(i);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:t,title:a}}}table(i){var l;let e=this.rules.block.table.exec(i);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=un(e[1]),t=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===t.length){for(let s of t)this.rules.other.tableAlignRight.test(s)?n.align.push("right"):this.rules.other.tableAlignCenter.test(s)?n.align.push("center"):this.rules.other.tableAlignLeft.test(s)?n.align.push("left"):n.align.push(null);for(let s=0;s<r.length;s++)n.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:n.align[s]});for(let s of a)n.rows.push(un(s,n.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:n.align[f]})));return n}}lheading(i){let e=this.rules.block.lheading.exec(i);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(i){let e=this.rules.block.paragraph.exec(i);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(i){let e=this.rules.block.text.exec(i);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(i){let e=this.rules.inline.escape.exec(i);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(i){let e=this.rules.inline.tag.exec(i);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(i){let e=this.rules.inline.link.exec(i);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let n=Ur(r.slice(0,-1),"\\");if((r.length-n.length)%2===0)return}else{let n=Vo(e[2],"()");if(n===-2)return;if(n>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+n;e[2]=e[2].substring(0,n),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let t=e[2],a="";if(this.options.pedantic){let n=this.rules.other.pedanticHrefTitle.exec(t);n&&(t=n[1],a=n[3])}else a=e[3]?e[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?t=t.slice(1):t=t.slice(1,-1)),fn(e,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(i,e){let r;if((r=this.rules.inline.reflink.exec(i))||(r=this.rules.inline.nolink.exec(i))){let t=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=e[t.toLowerCase()];if(!a){let n=r[0].charAt(0);return{type:"text",raw:n,text:n}}return fn(r,a,r[0],this.lexer,this.rules)}}emStrong(i,e,r=""){let t=this.rules.inline.emStrongLDelim.exec(i);if(!(!t||t[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[2])||!r||this.rules.inline.punctuation.exec(r))){let a=[...t[0]].length-1,n,l,s=a,u=0,f=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*i.length+a);(t=f.exec(e))!=null;){if(n=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!n)continue;if(l=[...n].length,t[3]||t[4]){s+=l;continue}else if((t[5]||t[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(s-=l,s>0)continue;l=Math.min(l,l+s+u);let o=[...t[0]][0].length,m=i.slice(0,a+t.index+o+l);if(Math.min(a,l)%2){let d=m.slice(1,-1);return{type:"em",raw:m,text:d,tokens:this.lexer.inlineTokens(d)}}let h=m.slice(2,-2);return{type:"strong",raw:m,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(i){let e=this.rules.inline.code.exec(i);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(r),a=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return t&&a&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(i){let e=this.rules.inline.br.exec(i);if(e)return{type:"br",raw:e[0]}}del(i){let e=this.rules.inline.del.exec(i);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(i){let e=this.rules.inline.autolink.exec(i);if(e){let r,t;return e[2]==="@"?(r=e[1],t="mailto:"+r):(r=e[1],t=r),{type:"link",raw:e[0],text:r,href:t,tokens:[{type:"text",raw:r,text:r}]}}}url(i){var r;let e;if(e=this.rules.inline.url.exec(i)){let t,a;if(e[2]==="@")t=e[0],a="mailto:"+t;else{let n;do n=e[0],e[0]=((r=this.rules.inline._backpedal.exec(e[0]))==null?void 0:r[0])??"";while(n!==e[0]);t=e[0],e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:t,href:a,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(i){let e=this.rules.inline.text.exec(i);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},ht=class vi{constructor(e){Je(this,"tokens");Je(this,"options");Je(this,"state");Je(this,"tokenizer");Je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||br,this.options.tokenizer=this.options.tokenizer||new aa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:st,block:ea.normal,inline:xr.normal};this.options.pedantic?(r.block=ea.pedantic,r.inline=xr.pedantic):this.options.gfm&&(r.block=ea.gfm,this.options.breaks?r.inline=xr.breaks:r.inline=xr.gfm),this.tokenizer.rules=r}static get rules(){return{block:ea,inline:xr}}static lex(e,r){return new vi(r).lex(e)}static lexInline(e,r){return new vi(r).inlineTokens(e)}lex(e){e=e.replace(st.carriageReturn,`
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
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):r.push(s);continue}if(e){let f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){var u,f,o,m,h;let t=e,a=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,a.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let n;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)n=a[2]?a[2].length:0,t=t.slice(0,a.index+n)+"["+"a".repeat(a[0].length-n-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=((f=(u=this.options.hooks)==null?void 0:u.emStrongMask)==null?void 0:f.call({lexer:this},t))??t;let l=!1,s="";for(;e;){l||(s=""),l=!1;let d;if((m=(o=this.options.extensions)==null?void 0:o.inline)!=null&&m.some(y=>(d=y.call({lexer:this},e,r))?(e=e.substring(d.raw.length),r.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let y=r.at(-1);d.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=d.raw,y.text+=d.text):r.push(d);continue}if(d=this.tokenizer.emStrong(e,t,s)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.del(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),r.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),r.push(d);continue}let $=e;if((h=this.options.extensions)!=null&&h.startInline){let y=1/0,F=e.slice(1),G;this.options.extensions.startInline.forEach(H=>{G=H.call({lexer:this},F),typeof G=="number"&&G>=0&&(y=Math.min(y,G))}),y<1/0&&y>=0&&($=e.substring(0,y+1))}if(d=this.tokenizer.inlineText($)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(s=d.raw.slice(-1)),l=!0;let y=r.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=d.raw,y.text+=d.text):r.push(d);continue}if(e){let y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return r}},ia=class{constructor(i){Je(this,"options");Je(this,"parser");this.options=i||br}space(i){return""}code({text:i,lang:e,escaped:r}){var n;let t=(n=(e||"").match(st.notSpaceStart))==null?void 0:n[0],a=i.replace(st.endingNewline,"")+`
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
`+this.renderer.text(f);r?t+=this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o,escaped:!0}]}):t+=o;continue}default:{let f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return t}parseInline(e,r=this.renderer){var a,n;let t="";for(let l=0;l<e.length;l++){let s=e[l];if((n=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&n[s.type]){let f=this.options.extensions.renderers[s.type].call({parser:this},s);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=f||"";continue}}let u=s;switch(u.type){case"escape":{t+=r.text(u);break}case"html":{t+=r.html(u);break}case"link":{t+=r.link(u);break}case"image":{t+=r.image(u);break}case"strong":{t+=r.strong(u);break}case"em":{t+=r.em(u);break}case"codespan":{t+=r.codespan(u);break}case"br":{t+=r.br(u);break}case"del":{t+=r.del(u);break}case"text":{t+=r.text(u);break}default:{let f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return t}},ta,Gr=(ta=class{constructor(i){Je(this,"options");Je(this,"block");this.options=i||br}preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(){return this.block?ht.lex:ht.lexInline}provideParser(){return this.block?bt.parse:bt.parseInline}},Je(ta,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Je(ta,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ta),xo=class{constructor(...i){Je(this,"defaults",Si());Je(this,"options",this.setOptions);Je(this,"parse",this.parseMarkdown(!0));Je(this,"parseInline",this.parseMarkdown(!1));Je(this,"Parser",bt);Je(this,"Renderer",ia);Je(this,"TextRenderer",qi);Je(this,"Lexer",ht);Je(this,"Tokenizer",aa);Je(this,"Hooks",Gr);this.use(...i)}walkTokens(i,e){var t,a;let r=[];for(let n of i)switch(r=r.concat(e.call(this,n)),n.type){case"table":{let l=n;for(let s of l.header)r=r.concat(this.walkTokens(s.tokens,e));for(let s of l.rows)for(let u of s)r=r.concat(this.walkTokens(u.tokens,e));break}case"list":{let l=n;r=r.concat(this.walkTokens(l.items,e));break}default:{let l=n;(a=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&a[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{let u=l[s].flat(1/0);r=r.concat(this.walkTokens(u,e))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,e)))}}return r}use(...i){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(r=>{let t={...r};if(t.async=this.defaults.async||t.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let n=e.renderers[a.name];n?e.renderers[a.name]=function(...l){let s=a.renderer.apply(this,l);return s===!1&&(s=n.apply(this,l)),s}:e.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let n=e[a.level];n?n.unshift(a.tokenizer):e[a.level]=[a.tokenizer],a.start&&(a.level==="block"?e.startBlock?e.startBlock.push(a.start):e.startBlock=[a.start]:a.level==="inline"&&(e.startInline?e.startInline.push(a.start):e.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(e.childTokens[a.name]=a.childTokens)}),t.extensions=e),r.renderer){let a=this.defaults.renderer||new ia(this.defaults);for(let n in r.renderer){if(!(n in a))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;let l=n,s=r.renderer[l],u=a[l];a[l]=(...f)=>{let o=s.apply(a,f);return o===!1&&(o=u.apply(a,f)),o||""}}t.renderer=a}if(r.tokenizer){let a=this.defaults.tokenizer||new aa(this.defaults);for(let n in r.tokenizer){if(!(n in a))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let l=n,s=r.tokenizer[l],u=a[l];a[l]=(...f)=>{let o=s.apply(a,f);return o===!1&&(o=u.apply(a,f)),o}}t.tokenizer=a}if(r.hooks){let a=this.defaults.hooks||new Gr;for(let n in r.hooks){if(!(n in a))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;let l=n,s=r.hooks[l],u=a[l];Gr.passThroughHooks.has(n)?a[l]=f=>{if(this.defaults.async&&Gr.passThroughHooksRespectAsync.has(n))return(async()=>{let m=await s.call(a,f);return u.call(a,m)})();let o=s.call(a,f);return u.call(a,o)}:a[l]=(...f)=>{if(this.defaults.async)return(async()=>{let m=await s.apply(a,f);return m===!1&&(m=await u.apply(a,f)),m})();let o=s.apply(a,f);return o===!1&&(o=u.apply(a,f)),o}}t.hooks=a}if(r.walkTokens){let a=this.defaults.walkTokens,n=r.walkTokens;t.walkTokens=function(l){let s=[];return s.push(n.call(this,l)),a&&(s=s.concat(a.call(this,l))),s}}this.defaults={...this.defaults,...t}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,e){return ht.lex(i,e??this.defaults)}parser(i,e){return bt.parse(i,e??this.defaults)}parseMarkdown(i){return(e,r)=>{let t={...r},a={...this.defaults,...t},n=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&t.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=i),a.async)return(async()=>{let l=a.hooks?await a.hooks.preprocess(e):e,s=await(a.hooks?await a.hooks.provideLexer():i?ht.lex:ht.lexInline)(l,a),u=a.hooks?await a.hooks.processAllTokens(s):s;a.walkTokens&&await Promise.all(this.walkTokens(u,a.walkTokens));let f=await(a.hooks?await a.hooks.provideParser():i?bt.parse:bt.parseInline)(u,a);return a.hooks?await a.hooks.postprocess(f):f})().catch(n);try{a.hooks&&(e=a.hooks.preprocess(e));let l=(a.hooks?a.hooks.provideLexer():i?ht.lex:ht.lexInline)(e,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let s=(a.hooks?a.hooks.provideParser():i?bt.parse:bt.parseInline)(l,a);return a.hooks&&(s=a.hooks.postprocess(s)),s}catch(l){return n(l)}}}onError(i,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let t="<p>An error occurred:</p><pre>"+vt(r.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(r);throw r}}},hr=new xo;function Ue(i,e){return hr.parse(i,e)}Ue.options=Ue.setOptions=function(i){return hr.setOptions(i),Ue.defaults=hr.defaults,ul(Ue.defaults),Ue};Ue.getDefaults=Si;Ue.defaults=br;Ue.use=function(...i){return hr.use(...i),Ue.defaults=hr.defaults,ul(Ue.defaults),Ue};Ue.walkTokens=function(i,e){return hr.walkTokens(i,e)};Ue.parseInline=hr.parseInline;Ue.Parser=bt;Ue.parser=bt.parse;Ue.Renderer=ia;Ue.TextRenderer=qi;Ue.Lexer=ht;Ue.lexer=ht.lex;Ue.Tokenizer=aa;Ue.Hooks=Gr;Ue.parse=Ue;Ue.options;Ue.setOptions;Ue.use;Ue.walkTokens;Ue.parseInline;bt.parse;ht.lex;function Uo(i){let e;function r(n,l){return n[2]==="markdown"?Qo:Yo}let t=r(i),a=t(i);return{c(){e=L("div"),a.c(),this.h()},l(n){e=N(n,"DIV",{style:!0,class:!0});var l=oe(e);a.l(l),l.forEach(p),this.h()},h(){te(e,"white-space","pre-wrap"),Y(e,"class","svelte-hemi17")},m(n,l){g(n,e,l),a.m(e,null)},p(n,l){t===(t=r(n))&&a?a.p(n,l):(a.d(1),a=t(n),a&&(a.c(),a.m(e,null)))},d(n){n&&p(e),a.d()}}}function Go(i){let e,r="Error: Error loading.";return{c(){e=L("div"),e.textContent=r,this.h()},l(t){e=N(t,"DIV",{class:!0,"data-svelte-h":!0}),yt(e)!=="svelte-qkoata"&&(e.textContent=r),this.h()},h(){Y(e,"class","svelte-hemi17")},m(t,a){g(t,e,a)},p:je,d(t){t&&p(e)}}}function Wo(i){let e,r,t='<div class="inner svelte-hemi17"></div>',a,n;return{c(){e=L("div"),r=L("div"),r.innerHTML=t,a=We(`
        crafting `),n=We(i[0]),this.h()},l(l){e=N(l,"DIV",{class:!0});var s=oe(e);r=N(s,"DIV",{class:!0,"data-svelte-h":!0}),yt(r)!=="svelte-1uu8czx"&&(r.innerHTML=t),a=Ge(s,`
        crafting `),n=Ge(s,i[0]),s.forEach(p),this.h()},h(){Y(r,"class","intel-glow svelte-hemi17"),Y(e,"class","loading-box svelte-hemi17")},m(l,s){g(l,e,s),K(e,r),K(e,a),K(e,n)},p(l,s){s&1&&it(n,l[0])},d(l){l&&p(e)}}}function Yo(i){let e;return{c(){e=We(i[3])},l(r){e=Ge(r,i[3])},m(r,t){g(r,e,t)},p(r,t){t&8&&it(e,r[3])},d(r){r&&p(e)}}}function Qo(i){let e,r=Ue.parse(i[3])+"",t;return{c(){e=new tl(!1),t=Qe(),this.h()},l(a){e=el(a,!1),t=Qe(),this.h()},h(){e.a=t},m(a,n){e.m(r,a,n),g(a,t,n)},p(a,n){n&8&&r!==(r=Ue.parse(a[3])+"")&&e.p(r)},d(a){a&&(p(t),e.d())}}}function jo(i){let e;function r(n,l){return n[1]?Wo:n[3]?Uo:Go}let t=r(i),a=t(i);return{c(){a.c(),e=Qe()},l(n){a.l(n),e=Qe()},m(n,l){a.m(n,l),g(n,e,l)},p(n,[l]){t===(t=r(n))&&a?a.p(n,l):(a.d(1),a=t(n),a&&(a.c(),a.m(e.parentNode,e)))},i:je,o:je,d(n){n&&p(e),a.d(n)}}}const Jo="https://askmaa.mosaicfm.dev";function Zo(i,e,r){let t,a,n,l,s,{id:u=null}=e,{params:f={}}=e,{content_desc:o="text"}=e;return i.$$set=m=>{"id"in m&&r(4,u=m.id),"params"in m&&r(5,f=m.params),"content_desc"in m&&r(0,o=m.content_desc)},i.$$.update=()=>{i.$$.dirty&16&&r(7,t=`${Jo}/${u}`),i.$$.dirty&32&&r(6,a=JSON.stringify(f)),i.$$.dirty&208&&(async()=>{if(u){r(1,s=!0);try{const h=await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:a})).json();r(3,n=h.response??null),r(2,l=h.response_format??"text")}catch(m){console.error(m)}finally{r(1,s=!1)}}})()},r(3,n=null),r(2,l=null),r(1,s=!0),[o,s,l,n,u,f,a,t]}class Ko extends ct{constructor(e){super(),pt(this,e,Zo,jo,_t,{id:4,params:5,content_desc:0})}}function Xo(i){let e,r;return{c(){e=L("div"),r=new tl(!1),this.h()},l(t){e=N(t,"DIV",{class:!0});var a=oe(e);r=el(a,!1),a.forEach(p),this.h()},h(){r.a=null,Y(e,"class","dynamic-markdown markdown")},m(t,a){g(t,e,a),r.m(i[1],e),i[3](e)},p(t,[a]){a&2&&r.p(t[1])},i:je,o:je,d(t){t&&p(e),i[3](null)}}}function eu(i,e,r){let t,{content:a=""}=e,n;Sl(()=>{n&&n.querySelectorAll("*").forEach(s=>s.classList.add("markdown"))});function l(s){$r[s?"unshift":"push"](()=>{n=s,r(0,n)})}return i.$$set=s=>{"content"in s&&r(2,a=s.content)},i.$$.update=()=>{i.$$.dirty&4&&r(1,t=a?Ue(a):"")},[n,t,a,l]}class It extends ct{constructor(e){super(),pt(this,e,eu,Xo,_t,{content:2})}}function tu(i){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:je,p:je,d:je}}function ru(i){let e,r,t,a,n;return document.title=e=Xe.title,{c(){r=S(),t=L("meta"),a=S(),n=L("meta"),this.h()},l(l){r=R(l),t=N(l,"META",{property:!0,content:!0}),a=R(l),n=N(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s;Y(t,"property","og:title"),Y(t,"content",((l=Xe.og)==null?void 0:l.title)??Xe.title),Y(n,"name","twitter:title"),Y(n,"content",((s=Xe.og)==null?void 0:s.title)??Xe.title)},m(l,s){g(l,r,s),g(l,t,s),g(l,a,s),g(l,n,s)},p(l,s){s&0&&e!==(e=Xe.title)&&(document.title=e)},d(l){l&&(p(r),p(t),p(a),p(n))}}}function au(i){var n,l;let e,r,t=(Xe.description||((n=Xe.og)==null?void 0:n.description))&&iu(),a=((l=Xe.og)==null?void 0:l.image)&&nu();return{c(){t&&t.c(),e=S(),a&&a.c(),r=Qe()},l(s){t&&t.l(s),e=R(s),a&&a.l(s),r=Qe()},m(s,u){t&&t.m(s,u),g(s,e,u),a&&a.m(s,u),g(s,r,u)},p(s,u){var f,o;(Xe.description||(f=Xe.og)!=null&&f.description)&&t.p(s,u),(o=Xe.og)!=null&&o.image&&a.p(s,u)},d(s){s&&(p(e),p(r)),t&&t.d(s),a&&a.d(s)}}}function iu(i){let e,r,t,a,n;return{c(){e=L("meta"),r=S(),t=L("meta"),a=S(),n=L("meta"),this.h()},l(l){e=N(l,"META",{name:!0,content:!0}),r=R(l),t=N(l,"META",{property:!0,content:!0}),a=R(l),n=N(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s,u;Y(e,"name","description"),Y(e,"content",Xe.description??((l=Xe.og)==null?void 0:l.description)),Y(t,"property","og:description"),Y(t,"content",((s=Xe.og)==null?void 0:s.description)??Xe.description),Y(n,"name","twitter:description"),Y(n,"content",((u=Xe.og)==null?void 0:u.description)??Xe.description)},m(l,s){g(l,e,s),g(l,r,s),g(l,t,s),g(l,a,s),g(l,n,s)},p:je,d(l){l&&(p(e),p(r),p(t),p(a),p(n))}}}function nu(i){let e,r,t;return{c(){e=L("meta"),r=S(),t=L("meta"),this.h()},l(a){e=N(a,"META",{property:!0,content:!0}),r=R(a),t=N(a,"META",{name:!0,content:!0}),this.h()},h(){var a,n;Y(e,"property","og:image"),Y(e,"content",Pi((a=Xe.og)==null?void 0:a.image)),Y(t,"name","twitter:image"),Y(t,"content",Pi((n=Xe.og)==null?void 0:n.image))},m(a,n){g(a,e,n),g(a,r,n),g(a,t,n)},p:je,d(a){a&&(p(e),p(r),p(t))}}}function lu(i){let e,r,t,a,n,l,s,u,f,o,m,h;return e=new tt({props:{id:"year",title:"Roadmap",fmt:"id"}}),t=new tt({props:{id:"demand_outstanding",title:"Demand ToDo",fmt:"pct0"}}),n=new tt({props:{id:"total_demand_work_items",title:"Demand WKItems",fmt:"num0"}}),s=new tt({props:{id:"resoureced_outstanding",title:"Staffed ToDo",fmt:"pct0"}}),f=new tt({props:{id:"total_actioned_milestone_items",title:"Staffed WKItems",fmt:"num0"}}),m=new tt({props:{id:"ratio",title:"Demand/Resourced",fmt:"pct0"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment),o=S(),C(m.$$.fragment)},l(d){A(e.$$.fragment,d),r=R(d),A(t.$$.fragment,d),a=R(d),A(n.$$.fragment,d),l=R(d),A(s.$$.fragment,d),u=R(d),A(f.$$.fragment,d),o=R(d),A(m.$$.fragment,d)},m(d,$){T(e,d,$),g(d,r,$),T(t,d,$),g(d,a,$),T(n,d,$),g(d,l,$),T(s,d,$),g(d,u,$),T(f,d,$),g(d,o,$),T(m,d,$),h=!0},p:je,i(d){h||(c(e.$$.fragment,d),c(t.$$.fragment,d),c(n.$$.fragment,d),c(s.$$.fragment,d),c(f.$$.fragment,d),c(m.$$.fragment,d),h=!0)},o(d){b(e.$$.fragment,d),b(t.$$.fragment,d),b(n.$$.fragment,d),b(s.$$.fragment,d),b(f.$$.fragment,d),b(m.$$.fragment,d),h=!1},d(d){d&&(p(r),p(a),p(l),p(u),p(o)),E(e,d),E(t,d),E(n,d),E(s,d),E(f,d),E(m,d)}}}function su(i){let e,r,t,a,n,l,s,u,f,o;return e=new tt({props:{id:"year",title:"Roadmap",fmt:"id"}}),t=new tt({props:{id:"requirements",title:"Requirements"}}),n=new tt({props:{id:"workitems",title:"Work Items"}}),s=new tt({props:{id:"prs",title:"PRs"}}),f=new tt({props:{id:"developers",title:"Devs"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment)},l(m){A(e.$$.fragment,m),r=R(m),A(t.$$.fragment,m),a=R(m),A(n.$$.fragment,m),l=R(m),A(s.$$.fragment,m),u=R(m),A(f.$$.fragment,m)},m(m,h){T(e,m,h),g(m,r,h),T(t,m,h),g(m,a,h),T(n,m,h),g(m,l,h),T(s,m,h),g(m,u,h),T(f,m,h),o=!0},p:je,i(m){o||(c(e.$$.fragment,m),c(t.$$.fragment,m),c(n.$$.fragment,m),c(s.$$.fragment,m),c(f.$$.fragment,m),o=!0)},o(m){b(e.$$.fragment,m),b(t.$$.fragment,m),b(n.$$.fragment,m),b(s.$$.fragment,m),b(f.$$.fragment,m),o=!1},d(m){m&&(p(r),p(a),p(l),p(u)),E(e,m),E(t,m),E(n,m),E(s,m),E(f,m)}}}function ou(i){let e,r,t,a,n,l,s,u;return e=new Ze({props:{valueLabel:"2021",value:"2021"}}),t=new Ze({props:{valueLabel:"2022",value:"2022"}}),n=new Ze({props:{valueLabel:"2023",value:"2023"}}),s=new Ze({props:{valueLabel:"2024",value:"2024"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment)},l(f){A(e.$$.fragment,f),r=R(f),A(t.$$.fragment,f),a=R(f),A(n.$$.fragment,f),l=R(f),A(s.$$.fragment,f)},m(f,o){T(e,f,o),g(f,r,o),T(t,f,o),g(f,a,o),T(n,f,o),g(f,l,o),T(s,f,o),u=!0},p:je,i(f){u||(c(e.$$.fragment,f),c(t.$$.fragment,f),c(n.$$.fragment,f),c(s.$$.fragment,f),u=!0)},o(f){b(e.$$.fragment,f),b(t.$$.fragment,f),b(n.$$.fragment,f),b(s.$$.fragment,f),u=!1},d(f){f&&(p(r),p(a),p(l)),E(e,f),E(t,f),E(n,f),E(s,f)}}}function uu(i){let e,r,t,a,n,l,s,u,f,o,m,h,d,$,y,F,G,H;return e=new tt({props:{id:"year",title:"Roadmap",fmt:"id"}}),t=new tt({props:{id:"milestone_id",title:"MileStone"}}),n=new tt({props:{id:"milestone_date",title:"MS Date",fmt:"dmy"}}),s=new tt({props:{id:"demanded_milestone_items",title:"Demand WKitms"}}),f=new tt({props:{id:"demanded_outstanding_pct",title:"Demand ToDo",fmt:"pct0"}}),m=new tt({props:{id:"actioned_milestone_items",title:"Staffed WKitms"}}),d=new tt({props:{id:"actioned_outstanding_pct",title:"Staffed ToDo",fmt:"pct0"}}),y=new tt({props:{id:"last_merge_date",title:"Latest Work",fmt:"dmy"}}),G=new tt({props:{id:"milestone_description",title:"Description",wrap:"false"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment),o=S(),C(m.$$.fragment),h=S(),C(d.$$.fragment),$=S(),C(y.$$.fragment),F=S(),C(G.$$.fragment)},l(w){A(e.$$.fragment,w),r=R(w),A(t.$$.fragment,w),a=R(w),A(n.$$.fragment,w),l=R(w),A(s.$$.fragment,w),u=R(w),A(f.$$.fragment,w),o=R(w),A(m.$$.fragment,w),h=R(w),A(d.$$.fragment,w),$=R(w),A(y.$$.fragment,w),F=R(w),A(G.$$.fragment,w)},m(w,Q){T(e,w,Q),g(w,r,Q),T(t,w,Q),g(w,a,Q),T(n,w,Q),g(w,l,Q),T(s,w,Q),g(w,u,Q),T(f,w,Q),g(w,o,Q),T(m,w,Q),g(w,h,Q),T(d,w,Q),g(w,$,Q),T(y,w,Q),g(w,F,Q),T(G,w,Q),H=!0},p:je,i(w){H||(c(e.$$.fragment,w),c(t.$$.fragment,w),c(n.$$.fragment,w),c(s.$$.fragment,w),c(f.$$.fragment,w),c(m.$$.fragment,w),c(d.$$.fragment,w),c(y.$$.fragment,w),c(G.$$.fragment,w),H=!0)},o(w){b(e.$$.fragment,w),b(t.$$.fragment,w),b(n.$$.fragment,w),b(s.$$.fragment,w),b(f.$$.fragment,w),b(m.$$.fragment,w),b(d.$$.fragment,w),b(y.$$.fragment,w),b(G.$$.fragment,w),H=!1},d(w){w&&(p(r),p(a),p(l),p(u),p(o),p(h),p($),p(F)),E(e,w),E(t,w),E(n,w),E(s,w),E(f,w),E(m,w),E(d,w),E(y,w),E(G,w)}}}function fu(i){let e,r,t,a,n;return e=new Ze({props:{valueLabel:"Executive",value:"exec"}}),r=new Ze({props:{valueLabel:"Project Management",value:"pm"}}),t=new Ze({props:{valueLabel:"Team Lead",value:"team_lead"}}),a=new Ze({props:{valueLabel:"Dev",value:"developer"}}),{c(){C(e.$$.fragment),C(r.$$.fragment),C(t.$$.fragment),C(a.$$.fragment)},l(l){A(e.$$.fragment,l),A(r.$$.fragment,l),A(t.$$.fragment,l),A(a.$$.fragment,l)},m(l,s){T(e,l,s),T(r,l,s),T(t,l,s),T(a,l,s),n=!0},p:je,i(l){n||(c(e.$$.fragment,l),c(r.$$.fragment,l),c(t.$$.fragment,l),c(a.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),b(r.$$.fragment,l),b(t.$$.fragment,l),b(a.$$.fragment,l),n=!1},d(l){E(e,l),E(r,l),E(t,l),E(a,l)}}}function mu(i){let e,r,t;return e=new Ze({props:{valueLabel:"Weekly",value:"week"}}),r=new Ze({props:{valueLabel:"Quarterly",value:"quarter"}}),{c(){C(e.$$.fragment),C(r.$$.fragment)},l(a){A(e.$$.fragment,a),A(r.$$.fragment,a)},m(a,n){T(e,a,n),T(r,a,n),t=!0},p:je,i(a){t||(c(e.$$.fragment,a),c(r.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),b(r.$$.fragment,a),t=!1},d(a){E(e,a),E(r,a)}}}function mn(i){let e,r;return e=new gt({props:{name:"quarter_p",$$slots:{default:[du]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function du(i){let e,r,t,a,n;return e=new Ze({props:{valueLabel:"Q1",value:"1"}}),r=new Ze({props:{valueLabel:"Q2",value:"2"}}),t=new Ze({props:{valueLabel:"Q3",value:"3"}}),a=new Ze({props:{valueLabel:"Q4",value:"4"}}),{c(){C(e.$$.fragment),C(r.$$.fragment),C(t.$$.fragment),C(a.$$.fragment)},l(l){A(e.$$.fragment,l),A(r.$$.fragment,l),A(t.$$.fragment,l),A(a.$$.fragment,l)},m(l,s){T(e,l,s),T(r,l,s),T(t,l,s),T(a,l,s),n=!0},p:je,i(l){n||(c(e.$$.fragment,l),c(r.$$.fragment,l),c(t.$$.fragment,l),c(a.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),b(r.$$.fragment,l),b(t.$$.fragment,l),b(a.$$.fragment,l),n=!1},d(l){E(e,l),E(r,l),E(t,l),E(a,l)}}}function dn(i){let e,r;return e=new Js({props:{title:"Week",name:"week_p",min:"1",max:"52",step:"1"}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function _n(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Executive Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Executive Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function cn(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Project Manager Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Project Manager Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function pn(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Team Lead Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Team Lead Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function hn(i){let e,r=i[0].quarter_p.value+"",t,a,n=i[0].years.value+"",l,s;return{c(){e=We("Developer Q"),t=We(r),a=S(),l=We(n),s=We(" Summary")},l(u){e=Ge(u,"Developer Q"),t=Ge(u,r),a=R(u),l=Ge(u,n),s=Ge(u," Summary")},m(u,f){g(u,e,f),g(u,t,f),g(u,a,f),g(u,l,f),g(u,s,f)},p(u,f){f[0]&1&&r!==(r=u[0].quarter_p.value+"")&&it(t,r),f[0]&1&&n!==(n=u[0].years.value+"")&&it(l,n)},d(u){u&&(p(e),p(t),p(a),p(l),p(s))}}}function _u(i){let e,r,t,a,n,l;return e=new It({props:{content:i[22][0].heading_markdown}}),t=new It({props:{content:i[22][0].content_markdown}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),n=L("hr"),this.h()},l(s){A(e.$$.fragment,s),r=R(s),A(t.$$.fragment,s),a=R(s),n=N(s,"HR",{style:!0}),this.h()},h(){te(n,"border","1px solid black")},m(s,u){T(e,s,u),g(s,r,u),T(t,s,u),g(s,a,u),g(s,n,u),l=!0},p(s,u){const f={};u[0]&4194304&&(f.content=s[22][0].heading_markdown),e.$set(f);const o={};u[0]&4194304&&(o.content=s[22][0].content_markdown),t.$set(o)},i(s){l||(c(e.$$.fragment,s),c(t.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),l=!1},d(s){s&&(p(r),p(a),p(n)),E(e,s),E(t,s)}}}function cu(i){let e,r='<a href="#overview-of-changes-to-the-previous-roadmap-version">Overview of changes to the previous roadmap version</a>',t,a,n,l,s,u,f,o,m;l=new It({props:{content:i[5][0].single_sentence_summary}}),u=new gt({props:{name:"showroadmap",title:"Display Roadmap "+i[0].years.value+" verson",defaultValue:"no",$$slots:{default:[pu]},$$scope:{ctx:i}}});let h=i[0].showroadmap.value!=="no"&&bn(i);return{c(){e=L("h2"),e.innerHTML=r,t=S(),a=L("hr"),n=S(),C(l.$$.fragment),s=S(),C(u.$$.fragment),f=S(),h&&h.c(),o=Qe(),this.h()},l(d){e=N(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(e)!=="svelte-159e7zg"&&(e.innerHTML=r),t=R(d),a=N(d,"HR",{style:!0}),n=R(d),A(l.$$.fragment,d),s=R(d),A(u.$$.fragment,d),f=R(d),h&&h.l(d),o=Qe(),this.h()},h(){Y(e,"class","markdown"),Y(e,"id","overview-of-changes-to-the-previous-roadmap-version"),te(a,"border","1px solid black")},m(d,$){g(d,e,$),g(d,t,$),g(d,a,$),g(d,n,$),T(l,d,$),g(d,s,$),T(u,d,$),g(d,f,$),h&&h.m(d,$),g(d,o,$),m=!0},p(d,$){const y={};$[0]&32&&(y.content=d[5][0].single_sentence_summary),l.$set(y);const F={};$[0]&1&&(F.title="Display Roadmap "+d[0].years.value+" verson"),$[6]&131072&&(F.$$scope={dirty:$,ctx:d}),u.$set(F),d[0].showroadmap.value!=="no"?h?(h.p(d,$),$[0]&1&&c(h,1)):(h=bn(d),h.c(),c(h,1),h.m(o.parentNode,o)):h&&(ue(),b(h,1,1,()=>{h=null}),fe())},i(d){m||(c(l.$$.fragment,d),c(u.$$.fragment,d),c(h),m=!0)},o(d){b(l.$$.fragment,d),b(u.$$.fragment,d),b(h),m=!1},d(d){d&&(p(e),p(t),p(a),p(n),p(s),p(f),p(o)),E(l,d),E(u,d),h&&h.d(d)}}}function pu(i){let e,r,t,a;return e=new Ze({props:{valueLabel:"No",value:"no"}}),t=new Ze({props:{valueLabel:"Yes",value:"yes"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment)},l(n){A(e.$$.fragment,n),r=R(n),A(t.$$.fragment,n)},m(n,l){T(e,n,l),g(n,r,l),T(t,n,l),a=!0},p:je,i(n){a||(c(e.$$.fragment,n),c(t.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),a=!1},d(n){n&&p(r),E(e,n),E(t,n)}}}function bn(i){let e,r,t=i[0].years.value+"",a,n,l,s,u,f,o,m,h,d,$;return f=new It({props:{content:i[22][0].heading_markdown}}),m=new It({props:{content:i[22][0].content_markdown}}),{c(){e=L("h2"),r=L("a"),a=We(t),n=We(" Roadmap Details"),l=S(),s=L("hr"),u=S(),C(f.$$.fragment),o=S(),C(m.$$.fragment),h=S(),d=L("hr"),this.h()},l(y){e=N(y,"H2",{class:!0,id:!0});var F=oe(e);r=N(F,"A",{href:!0});var G=oe(r);a=Ge(G,t),n=Ge(G," Roadmap Details"),G.forEach(p),F.forEach(p),l=R(y),s=N(y,"HR",{style:!0}),u=R(y),A(f.$$.fragment,y),o=R(y),A(m.$$.fragment,y),h=R(y),d=N(y,"HR",{style:!0}),this.h()},h(){Y(r,"href","#inputsyearsvalue-roadmap-details"),Y(e,"class","markdown"),Y(e,"id","inputsyearsvalue-roadmap-details"),te(s,"border","1px solid black"),te(d,"border","1px solid black")},m(y,F){g(y,e,F),K(e,r),K(r,a),K(r,n),g(y,l,F),g(y,s,F),g(y,u,F),T(f,y,F),g(y,o,F),T(m,y,F),g(y,h,F),g(y,d,F),$=!0},p(y,F){(!$||F[0]&1)&&t!==(t=y[0].years.value+"")&&it(a,t);const G={};F[0]&4194304&&(G.content=y[22][0].heading_markdown),f.$set(G);const H={};F[0]&4194304&&(H.content=y[22][0].content_markdown),m.$set(H)},i(y){$||(c(f.$$.fragment,y),c(m.$$.fragment,y),$=!0)},o(y){b(f.$$.fragment,y),b(m.$$.fragment,y),$=!1},d(y){y&&(p(e),p(l),p(s),p(u),p(o),p(h),p(d)),E(f,y),E(m,y)}}}function hu(i){let e,r,t,a;const n=[cu,_u],l=[];function s(u,f){return u[0].years.value!=="2021"?0:1}return e=s(i),r=l[e]=n[e](i),{c(){r.c(),t=Qe()},l(u){r.l(u),t=Qe()},m(u,f){l[e].m(u,f),g(u,t,f),a=!0},p(u,f){let o=e;e=s(u),e===o?l[e].p(u,f):(ue(),b(l[o],1,1,()=>{l[o]=null}),fe(),r=l[e],r?r.p(u,f):(r=l[e]=n[e](u),r.c()),c(r,1),r.m(t.parentNode,t))},i(u){a||(c(r),a=!0)},o(u){b(r),a=!1},d(u){u&&p(t),l[e].d(u)}}}function bu(i){let e,r;return e=new Cl({props:{title:"Roadmap details: "+i[0].years.value+" version",$$slots:{default:[hu]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1&&(n.title="Roadmap details: "+t[0].years.value+" version"),a[0]&4194337|a[6]&131072&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function gu(i){let e,r='<a href="#program-progress-to-date">Program Progress to date</a>',t,a,n,l,s,u,f,o,m,h,d,$,y,F,G='<a href="#roadmap-detail">Roadmap Detail</a>',H,w,Q,X,W,I,z,V,j,le='<a href="#platform-quaterly-delivery-summaries-by-audience">Platform Quaterly Delivery Summaries by Audience</a>',x,M,re,ie,he,He,ne,J,B,ae,Te,Ae,Ke,$e,be,O,ee,me,ye,ve,Ce,se,D,P,Oe,Re,Se,Ee,de,Ie,Be,qe,Ne,Le,Me,De,xe,ze,Pe;l=new bi({props:{data:i[24],title:"Programme Overview:",rowSelection:"single",name:"deliveryOverview1",$$slots:{default:[lu]},$$scope:{ctx:i}}}),o=new bi({props:{data:i[6],title:"Delivery Overview: Key Stats",rowSelection:"single",name:"deliveryOverview2",$$slots:{default:[su]},$$scope:{ctx:i}}}),$=new is({props:{data:i[16],x:"year",y:"activity_prs",series:"activity",title:"Programme Overview: Development Activity"}}),W=new gt({props:{name:"years",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[ou]},$$scope:{ctx:i}}}),z=new bi({props:{data:i[8],title:i[0].years.value+" Roadmap",$$slots:{default:[uu]},$$scope:{ctx:i}}}),ae=new gt({props:{data:i[28],title:"Programme",name:"owner",value:"owner",defaultValue:"eclipse-zenoh"}}),Ae=new gt({props:{data:i[29],title:"Repo",name:"repo",value:"value",label:"label",defaultValue:"zenoh"}}),$e=new gt({props:{name:"audience_p",title:"Perspective",$$slots:{default:[fu]},$$scope:{ctx:i}}}),ye=new gt({props:{name:"kind",defaultValue:"quarter",title:"Period",$$slots:{default:[mu]},$$scope:{ctx:i}}});let _e=i[0].kind.value=="quarter"&&mn(i),ge=i[0].kind.value=="week"&&dn(),ke=i[0].audience_p.value=="exec"&&_n(i),we=i[0].audience_p.value=="pm"&&cn(i),ce=i[0].audience_p.value=="team_lead"&&pn(i),pe=i[0].audience_p.value=="developer"&&hn(i);return Ie=new Ko({props:{id:i[33],params:i[2],content_desc:"summary"}}),De=new Al({props:{$$slots:{default:[bu]},$$scope:{ctx:i}}}),{c(){e=L("h2"),e.innerHTML=r,t=S(),a=L("hr"),n=S(),C(l.$$.fragment),s=S(),u=L("hr"),f=S(),C(o.$$.fragment),m=S(),h=L("hr"),d=S(),C($.$$.fragment),y=S(),F=L("h2"),F.innerHTML=G,H=S(),w=L("hr"),Q=S(),X=L("div"),C(W.$$.fragment),I=S(),C(z.$$.fragment),V=S(),j=L("h4"),j.innerHTML=le,x=S(),M=L("hr"),re=S(),ie=L("table"),he=L("tbody"),He=L("tr"),ne=L("td"),J=L("div"),B=L("span"),C(ae.$$.fragment),Te=S(),C(Ae.$$.fragment),Ke=S(),C($e.$$.fragment),be=S(),O=L("tr"),ee=L("td"),me=L("div"),C(ye.$$.fragment),ve=S(),_e&&_e.c(),Ce=S(),ge&&ge.c(),se=We(`
             `),D=S(),P=L("div"),ke&&ke.c(),Oe=S(),we&&we.c(),Re=S(),ce&&ce.c(),Se=S(),pe&&pe.c(),Ee=S(),de=L("div"),C(Ie.$$.fragment),Be=S(),qe=L("br"),Ne=S(),Le=L("hr"),Me=S(),C(De.$$.fragment),xe=S(),ze=L("hr"),this.h()},l(k){e=N(k,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(e)!=="svelte-18qc3es"&&(e.innerHTML=r),t=R(k),a=N(k,"HR",{style:!0}),n=R(k),A(l.$$.fragment,k),s=R(k),u=N(k,"HR",{style:!0}),f=R(k),A(o.$$.fragment,k),m=R(k),h=N(k,"HR",{style:!0}),d=R(k),A($.$$.fragment,k),y=R(k),F=N(k,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(F)!=="svelte-1usc0nn"&&(F.innerHTML=G),H=R(k),w=N(k,"HR",{style:!0}),Q=R(k),X=N(k,"DIV",{style:!0});var q=oe(X);A(W.$$.fragment,q),q.forEach(p),I=R(k),A(z.$$.fragment,k),V=R(k),j=N(k,"H4",{class:!0,id:!0,"data-svelte-h":!0}),yt(j)!=="svelte-sj40yn"&&(j.innerHTML=le),x=R(k),M=N(k,"HR",{style:!0}),re=R(k),ie=N(k,"TABLE",{style:!0});var _=oe(ie);he=N(_,"TBODY",{});var v=oe(he);He=N(v,"TR",{});var nt=oe(He);ne=N(nt,"TD",{style:!0});var ut=oe(ne);J=N(ut,"DIV",{style:!0});var ft=oe(J);B=N(ft,"SPAN",{style:!0});var mt=oe(B);A(ae.$$.fragment,mt),Te=R(mt),A(Ae.$$.fragment,mt),Ke=R(mt),A($e.$$.fragment,mt),mt.forEach(p),ft.forEach(p),ut.forEach(p),nt.forEach(p),be=R(v),O=N(v,"TR",{});var kt=oe(O);ee=N(kt,"TD",{style:!0});var wt=oe(ee);me=N(wt,"DIV",{style:!0});var at=oe(me);A(ye.$$.fragment,at),ve=R(at),_e&&_e.l(at),Ce=R(at),ge&&ge.l(at),se=Ge(at,`
             `),at.forEach(p),wt.forEach(p),kt.forEach(p),v.forEach(p),_.forEach(p),D=R(k),P=N(k,"DIV",{style:!0});var et=oe(P);ke&&ke.l(et),Oe=R(et),we&&we.l(et),Re=R(et),ce&&ce.l(et),Se=R(et),pe&&pe.l(et),et.forEach(p),Ee=R(k),de=N(k,"DIV",{style:!0});var rt=oe(de);A(Ie.$$.fragment,rt),Be=R(rt),qe=N(rt,"BR",{}),Ne=R(rt),Le=N(rt,"HR",{style:!0}),Me=R(rt),A(De.$$.fragment,rt),xe=R(rt),ze=N(rt,"HR",{style:!0}),rt.forEach(p),this.h()},h(){Y(e,"class","markdown"),Y(e,"id","program-progress-to-date"),te(a,"border","3px solid black"),te(u,"border","1px solid black"),te(h,"border","1px solid black"),Y(F,"class","markdown"),Y(F,"id","roadmap-detail"),te(w,"border","2px solid black"),te(X,"display","flex"),te(X,"justify-content","center"),Y(j,"class","markdown"),Y(j,"id","platform-quaterly-delivery-summaries-by-audience"),te(M,"border","1px solid black"),te(B,"display","inline-block"),te(B,"margin","0 0px 0 0"),te(J,"display","inline-block"),te(J,"text-align","left"),te(ne,"padding","6px 10px"),te(ne,"text-align","center"),te(me,"display","inline-block"),te(me,"text-align","left"),te(ee,"padding","1px 10px"),te(ee,"text-align","center"),te(ie,"width","100%"),te(ie,"border-collapse","collapse"),te(ie,"table-layout","fixed"),te(P,"font-size","18px"),te(P,"font-weight","bold"),te(Le,"border","2px solid black"),te(ze,"border","1px solid black"),te(de,"font-size","14px")},m(k,q){g(k,e,q),g(k,t,q),g(k,a,q),g(k,n,q),T(l,k,q),g(k,s,q),g(k,u,q),g(k,f,q),T(o,k,q),g(k,m,q),g(k,h,q),g(k,d,q),T($,k,q),g(k,y,q),g(k,F,q),g(k,H,q),g(k,w,q),g(k,Q,q),g(k,X,q),T(W,X,null),g(k,I,q),T(z,k,q),g(k,V,q),g(k,j,q),g(k,x,q),g(k,M,q),g(k,re,q),g(k,ie,q),K(ie,he),K(he,He),K(He,ne),K(ne,J),K(J,B),T(ae,B,null),K(B,Te),T(Ae,B,null),K(B,Ke),T($e,B,null),K(he,be),K(he,O),K(O,ee),K(ee,me),T(ye,me,null),K(me,ve),_e&&_e.m(me,null),K(me,Ce),ge&&ge.m(me,null),K(me,se),g(k,D,q),g(k,P,q),ke&&ke.m(P,null),K(P,Oe),we&&we.m(P,null),K(P,Re),ce&&ce.m(P,null),K(P,Se),pe&&pe.m(P,null),g(k,Ee,q),g(k,de,q),T(Ie,de,null),K(de,Be),K(de,qe),K(de,Ne),K(de,Le),K(de,Me),T(De,de,null),K(de,xe),K(de,ze),Pe=!0},p(k,q){const _={};q[0]&16777216&&(_.data=k[24]),q[6]&131072&&(_.$$scope={dirty:q,ctx:k}),l.$set(_);const v={};q[0]&64&&(v.data=k[6]),q[6]&131072&&(v.$$scope={dirty:q,ctx:k}),o.$set(v);const nt={};q[0]&65536&&(nt.data=k[16]),$.$set(nt);const ut={};q[6]&131072&&(ut.$$scope={dirty:q,ctx:k}),W.$set(ut);const ft={};q[0]&256&&(ft.data=k[8]),q[0]&1&&(ft.title=k[0].years.value+" Roadmap"),q[6]&131072&&(ft.$$scope={dirty:q,ctx:k}),z.$set(ft);const mt={};q[0]&268435456&&(mt.data=k[28]),ae.$set(mt);const kt={};q[0]&536870912&&(kt.data=k[29]),Ae.$set(kt);const wt={};q[6]&131072&&(wt.$$scope={dirty:q,ctx:k}),$e.$set(wt);const at={};q[6]&131072&&(at.$$scope={dirty:q,ctx:k}),ye.$set(at),k[0].kind.value=="quarter"?_e?q[0]&1&&c(_e,1):(_e=mn(k),_e.c(),c(_e,1),_e.m(me,Ce)):_e&&(ue(),b(_e,1,1,()=>{_e=null}),fe()),k[0].kind.value=="week"?ge?q[0]&1&&c(ge,1):(ge=dn(),ge.c(),c(ge,1),ge.m(me,se)):ge&&(ue(),b(ge,1,1,()=>{ge=null}),fe()),k[0].audience_p.value=="exec"?ke?ke.p(k,q):(ke=_n(k),ke.c(),ke.m(P,Oe)):ke&&(ke.d(1),ke=null),k[0].audience_p.value=="pm"?we?we.p(k,q):(we=cn(k),we.c(),we.m(P,Re)):we&&(we.d(1),we=null),k[0].audience_p.value=="team_lead"?ce?ce.p(k,q):(ce=pn(k),ce.c(),ce.m(P,Se)):ce&&(ce.d(1),ce=null),k[0].audience_p.value=="developer"?pe?pe.p(k,q):(pe=hn(k),pe.c(),pe.m(P,null)):pe&&(pe.d(1),pe=null);const et={};q[1]&4&&(et.id=k[33]),q[0]&4&&(et.params=k[2]),Ie.$set(et);const rt={};q[0]&4194337|q[6]&131072&&(rt.$$scope={dirty:q,ctx:k}),De.$set(rt)},i(k){Pe||(c(l.$$.fragment,k),c(o.$$.fragment,k),c($.$$.fragment,k),c(W.$$.fragment,k),c(z.$$.fragment,k),c(ae.$$.fragment,k),c(Ae.$$.fragment,k),c($e.$$.fragment,k),c(ye.$$.fragment,k),c(_e),c(ge),c(Ie.$$.fragment,k),c(De.$$.fragment,k),Pe=!0)},o(k){b(l.$$.fragment,k),b(o.$$.fragment,k),b($.$$.fragment,k),b(W.$$.fragment,k),b(z.$$.fragment,k),b(ae.$$.fragment,k),b(Ae.$$.fragment,k),b($e.$$.fragment,k),b(ye.$$.fragment,k),b(_e),b(ge),b(Ie.$$.fragment,k),b(De.$$.fragment,k),Pe=!1},d(k){k&&(p(e),p(t),p(a),p(n),p(s),p(u),p(f),p(m),p(h),p(d),p(y),p(F),p(H),p(w),p(Q),p(X),p(I),p(V),p(j),p(x),p(M),p(re),p(ie),p(D),p(P),p(Ee),p(de)),E(l,k),E(o,k),E($,k),E(W),E(z,k),E(ae),E(Ae),E($e),E(ye),_e&&_e.d(),ge&&ge.d(),ke&&ke.d(),we&&we.d(),ce&&ce.d(),pe&&pe.d(),E(Ie),E(De)}}}function yu(i){let e,r,t,a,n,l,s,u;return e=new Ze({props:{valueLabel:"2021",value:"2021"}}),t=new Ze({props:{valueLabel:"2022",value:"2022"}}),n=new Ze({props:{valueLabel:"2023",value:"2023"}}),s=new Ze({props:{valueLabel:"2024",value:"2024"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment)},l(f){A(e.$$.fragment,f),r=R(f),A(t.$$.fragment,f),a=R(f),A(n.$$.fragment,f),l=R(f),A(s.$$.fragment,f)},m(f,o){T(e,f,o),g(f,r,o),T(t,f,o),g(f,a,o),T(n,f,o),g(f,l,o),T(s,f,o),u=!0},p:je,i(f){u||(c(e.$$.fragment,f),c(t.$$.fragment,f),c(n.$$.fragment,f),c(s.$$.fragment,f),u=!0)},o(f){b(e.$$.fragment,f),b(t.$$.fragment,f),b(n.$$.fragment,f),b(s.$$.fragment,f),u=!1},d(f){f&&(p(r),p(a),p(l)),E(e,f),E(t,f),E(n,f),E(s,f)}}}function vu(i){let e,r,t,a,n,l;return e=new Ze({props:{valueLabel:"2022",value:"2022"}}),t=new Ze({props:{valueLabel:"2023",value:"2023"}}),n=new Ze({props:{valueLabel:"2024",value:"2024"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment)},l(s){A(e.$$.fragment,s),r=R(s),A(t.$$.fragment,s),a=R(s),A(n.$$.fragment,s)},m(s,u){T(e,s,u),g(s,r,u),T(t,s,u),g(s,a,u),T(n,s,u),l=!0},p:je,i(s){l||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(n.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),b(n.$$.fragment,s),l=!1},d(s){s&&(p(r),p(a)),E(e,s),E(t,s),E(n,s)}}}function ku(i){let e,r,t,a,n,l,s,u,f,o;return e=new Ze({props:{valueLabel:"Product Manager",value:"Product Manager"}}),t=new Ze({props:{valueLabel:"Programme Manager",value:"Programme Manager"}}),n=new Ze({props:{valueLabel:"Project Manager",value:"Project Manager"}}),s=new Ze({props:{valueLabel:"Dev Lead",value:"Dev Lead"}}),f=new Ze({props:{valueLabel:"Developer",value:"Developer"}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment),a=S(),C(n.$$.fragment),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment)},l(m){A(e.$$.fragment,m),r=R(m),A(t.$$.fragment,m),a=R(m),A(n.$$.fragment,m),l=R(m),A(s.$$.fragment,m),u=R(m),A(f.$$.fragment,m)},m(m,h){T(e,m,h),g(m,r,h),T(t,m,h),g(m,a,h),T(n,m,h),g(m,l,h),T(s,m,h),g(m,u,h),T(f,m,h),o=!0},p:je,i(m){o||(c(e.$$.fragment,m),c(t.$$.fragment,m),c(n.$$.fragment,m),c(s.$$.fragment,m),c(f.$$.fragment,m),o=!0)},o(m){b(e.$$.fragment,m),b(t.$$.fragment,m),b(n.$$.fragment,m),b(s.$$.fragment,m),b(f.$$.fragment,m),o=!1},d(m){m&&(p(r),p(a),p(l),p(u)),E(e,m),E(t,m),E(n,m),E(s,m),E(f,m)}}}function gn(i){let e,r,t=i[0].years.value+"",a,n,l,s,u,f,o;return s=new It({props:{content:i[22][0].heading_markdown}}),f=new It({props:{content:i[22][0].content_markdown}}),{c(){e=L("h1"),r=L("a"),a=We(t),n=We(" Roadmap Details"),l=S(),C(s.$$.fragment),u=S(),C(f.$$.fragment),this.h()},l(m){e=N(m,"H1",{class:!0,id:!0});var h=oe(e);r=N(h,"A",{href:!0});var d=oe(r);a=Ge(d,t),n=Ge(d," Roadmap Details"),d.forEach(p),h.forEach(p),l=R(m),A(s.$$.fragment,m),u=R(m),A(f.$$.fragment,m),this.h()},h(){Y(r,"href","#inputsyearsvalue-roadmap-details-1"),Y(e,"class","markdown"),Y(e,"id","inputsyearsvalue-roadmap-details-1")},m(m,h){g(m,e,h),K(e,r),K(r,a),K(r,n),g(m,l,h),T(s,m,h),g(m,u,h),T(f,m,h),o=!0},p(m,h){(!o||h[0]&1)&&t!==(t=m[0].years.value+"")&&it(a,t);const d={};h[0]&4194304&&(d.content=m[22][0].heading_markdown),s.$set(d);const $={};h[0]&4194304&&($.content=m[22][0].content_markdown),f.$set($)},i(m){o||(c(s.$$.fragment,m),c(f.$$.fragment,m),o=!0)},o(m){b(s.$$.fragment,m),b(f.$$.fragment,m),o=!1},d(m){m&&(p(e),p(l),p(u)),E(s,m),E(f,m)}}}function wu(i){let e,r='<a href="#roadmap-explorer">Roadmap Explorer</a>',t,a,n,l,s,u,f,o,m,h,d,$,y,F,G,H,w,Q,X,W='<a href="#roadmap-version-data">Roadmap Version Data</a>',I,z,V,j,le,x,M='<a href="#roadmap-version-overview">Roadmap Version Overview</a>',re,ie,he,He,ne,J,B,ae,Te,Ae,Ke,$e,be,O,ee,me='<a href="#show">Show</a>',ye,ve,Ce;h=new gt({props:{name:"roadmap_versions",multiple:"false",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[yu]},$$scope:{ctx:i}}}),y=new gt({props:{data:i[32],name:"section",value:"heading_text",title:"Select Roadmap Section",multiple:"true"}}),ae=new gt({props:{name:"roadmap_years",title:"Roadmap Revision:",defaultValue:"2022",$$slots:{default:[vu]},$$scope:{ctx:i}}}),Ke=new gt({props:{name:"readers",title:"Audience",defaultValue:"Product Manager",$$slots:{default:[ku]},$$scope:{ctx:i}}}),be=new It({props:{content:i[4][0].four_sentence_summary}});let se=i[0].showroadmap.value!=="no"&&gn(i);return{c(){e=L("h2"),e.innerHTML=r,t=S(),a=L("hr"),n=S(),l=L("table"),s=L("tbody"),u=L("tr"),f=L("td"),o=L("div"),m=L("span"),C(h.$$.fragment),d=S(),$=L("span"),C(y.$$.fragment),F=S(),G=L("br"),H=S(),w=L("br"),Q=S(),X=L("h2"),X.innerHTML=W,I=S(),z=L("hr"),V=S(),j=L("hr"),le=S(),x=L("h3"),x.innerHTML=M,re=S(),ie=L("table"),he=L("tbody"),He=L("tr"),ne=L("td"),J=L("div"),B=L("span"),C(ae.$$.fragment),Te=S(),Ae=L("span"),C(Ke.$$.fragment),$e=S(),C(be.$$.fragment),O=S(),ee=L("h2"),ee.innerHTML=me,ye=S(),se&&se.c(),ve=Qe(),this.h()},l(D){e=N(D,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(e)!=="svelte-5rsgt5"&&(e.innerHTML=r),t=R(D),a=N(D,"HR",{style:!0}),n=R(D),l=N(D,"TABLE",{style:!0});var P=oe(l);s=N(P,"TBODY",{});var Oe=oe(s);u=N(Oe,"TR",{});var Re=oe(u);f=N(Re,"TD",{style:!0});var Se=oe(f);o=N(Se,"DIV",{style:!0});var Ee=oe(o);m=N(Ee,"SPAN",{style:!0});var de=oe(m);A(h.$$.fragment,de),de.forEach(p),d=R(Ee),$=N(Ee,"SPAN",{style:!0});var Ie=oe($);A(y.$$.fragment,Ie),Ie.forEach(p),Ee.forEach(p),Se.forEach(p),Re.forEach(p),Oe.forEach(p),P.forEach(p),F=R(D),G=N(D,"BR",{}),H=R(D),w=N(D,"BR",{}),Q=R(D),X=N(D,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(X)!=="svelte-1ycxcbc"&&(X.innerHTML=W),I=R(D),z=N(D,"HR",{style:!0}),V=R(D),j=N(D,"HR",{style:!0}),le=R(D),x=N(D,"H3",{class:!0,id:!0,"data-svelte-h":!0}),yt(x)!=="svelte-1iqdgtt"&&(x.innerHTML=M),re=R(D),ie=N(D,"TABLE",{style:!0});var Be=oe(ie);he=N(Be,"TBODY",{});var qe=oe(he);He=N(qe,"TR",{});var Ne=oe(He);ne=N(Ne,"TD",{style:!0});var Le=oe(ne);J=N(Le,"DIV",{style:!0});var Me=oe(J);B=N(Me,"SPAN",{style:!0});var De=oe(B);A(ae.$$.fragment,De),De.forEach(p),Te=R(Me),Ae=N(Me,"SPAN",{style:!0});var xe=oe(Ae);A(Ke.$$.fragment,xe),xe.forEach(p),Me.forEach(p),Le.forEach(p),Ne.forEach(p),qe.forEach(p),Be.forEach(p),$e=R(D),A(be.$$.fragment,D),O=R(D),ee=N(D,"H2",{class:!0,id:!0,"data-svelte-h":!0}),yt(ee)!=="svelte-1w5ky1z"&&(ee.innerHTML=me),ye=R(D),se&&se.l(D),ve=Qe(),this.h()},h(){Y(e,"class","markdown"),Y(e,"id","roadmap-explorer"),te(a,"border","1px solid black"),te(m,"display","inline-block"),te(m,"margin","0 8px 8px 0"),te($,"display","inline-block"),te($,"margin","0 0 8px 0"),te(o,"display","inline-block"),te(o,"text-align","left"),te(f,"padding","12px"),te(f,"text-align","center"),te(l,"width","100%"),te(l,"border-collapse","collapse"),te(l,"table-layout","fixed"),Y(X,"class","markdown"),Y(X,"id","roadmap-version-data"),te(z,"border","3px solid black"),te(j,"border","1px solid black"),Y(x,"class","markdown"),Y(x,"id","roadmap-version-overview"),te(B,"display","inline-block"),te(B,"margin","0 8px 8px 0"),te(Ae,"display","inline-block"),te(Ae,"margin","0 0 8px 0"),te(J,"display","inline-block"),te(J,"text-align","left"),te(ne,"padding","12px"),te(ne,"text-align","center"),te(ie,"width","100%"),te(ie,"border-collapse","collapse"),te(ie,"table-layout","fixed"),Y(ee,"class","markdown"),Y(ee,"id","show")},m(D,P){g(D,e,P),g(D,t,P),g(D,a,P),g(D,n,P),g(D,l,P),K(l,s),K(s,u),K(u,f),K(f,o),K(o,m),T(h,m,null),K(o,d),K(o,$),T(y,$,null),g(D,F,P),g(D,G,P),g(D,H,P),g(D,w,P),g(D,Q,P),g(D,X,P),g(D,I,P),g(D,z,P),g(D,V,P),g(D,j,P),g(D,le,P),g(D,x,P),g(D,re,P),g(D,ie,P),K(ie,he),K(he,He),K(He,ne),K(ne,J),K(J,B),T(ae,B,null),K(J,Te),K(J,Ae),T(Ke,Ae,null),g(D,$e,P),T(be,D,P),g(D,O,P),g(D,ee,P),g(D,ye,P),se&&se.m(D,P),g(D,ve,P),Ce=!0},p(D,P){const Oe={};P[6]&131072&&(Oe.$$scope={dirty:P,ctx:D}),h.$set(Oe);const Re={};P[1]&2&&(Re.data=D[32]),y.$set(Re);const Se={};P[6]&131072&&(Se.$$scope={dirty:P,ctx:D}),ae.$set(Se);const Ee={};P[6]&131072&&(Ee.$$scope={dirty:P,ctx:D}),Ke.$set(Ee);const de={};P[0]&16&&(de.content=D[4][0].four_sentence_summary),be.$set(de),D[0].showroadmap.value!=="no"?se?(se.p(D,P),P[0]&1&&c(se,1)):(se=gn(D),se.c(),c(se,1),se.m(ve.parentNode,ve)):se&&(ue(),b(se,1,1,()=>{se=null}),fe())},i(D){Ce||(c(h.$$.fragment,D),c(y.$$.fragment,D),c(ae.$$.fragment,D),c(Ke.$$.fragment,D),c(be.$$.fragment,D),c(se),Ce=!0)},o(D){b(h.$$.fragment,D),b(y.$$.fragment,D),b(ae.$$.fragment,D),b(Ke.$$.fragment,D),b(be.$$.fragment,D),b(se),Ce=!1},d(D){D&&(p(e),p(t),p(a),p(n),p(l),p(F),p(G),p(H),p(w),p(Q),p(X),p(I),p(z),p(V),p(j),p(le),p(x),p(re),p(ie),p($e),p(O),p(ee),p(ye),p(ve)),E(h),E(y),E(ae),E(Ke),E(be,D),se&&se.d(D)}}}function $u(i){let e,r,t,a;return e=new an({props:{label:"Platform: Delivery Overview & Analysis",$$slots:{default:[gu]},$$scope:{ctx:i}}}),t=new an({props:{label:"Programme Documentation 2021-2024",$$slots:{default:[wu]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment),r=S(),C(t.$$.fragment)},l(n){A(e.$$.fragment,n),r=R(n),A(t.$$.fragment,n)},m(n,l){T(e,n,l),g(n,r,l),T(t,n,l),a=!0},p(n,l){const s={};l[0]&826343781|l[1]&4|l[6]&131072&&(s.$$scope={dirty:l,ctx:n}),e.$set(s);const u={};l[0]&4194321|l[1]&2|l[6]&131072&&(u.$$scope={dirty:l,ctx:n}),t.$set(u)},i(n){a||(c(e.$$.fragment,n),c(t.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),a=!1},d(n){n&&p(r),E(e,n),E(t,n)}}}function yn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_revision_summaries_all",queryResult:i[3]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8&&(n.queryResult=t[3]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function vn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_revision_summaries_filtered",queryResult:i[4]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&16&&(n.queryResult=t[4]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function kn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_revision_summaries_filtered_delivery",queryResult:i[5]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&32&&(n.queryResult=t[5]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function wn(i){let e,r;return e=new Ye({props:{queryID:"test",queryResult:i[6]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&64&&(n.queryResult=t[6]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function $n(i){let e,r;return e=new Ye({props:{queryID:"roadmap_versions",queryResult:i[7]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&128&&(n.queryResult=t[7]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Rn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_versions_filtered",queryResult:i[8]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&256&&(n.queryResult=t[8]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Sn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_key_dates",queryResult:i[9]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&512&&(n.queryResult=t[9]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function En(i){let e,r;return e=new Ye({props:{queryID:"bob2",queryResult:i[10]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1024&&(n.queryResult=t[10]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Tn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_summary_data",queryResult:i[11]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2048&&(n.queryResult=t[11]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function An(i){let e,r;return e=new Ye({props:{queryID:"roadmap_summary_data_filtered",queryResult:i[12]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&4096&&(n.queryResult=t[12]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Cn(i){let e,r;return e=new Ye({props:{queryID:"dimgraph_data_input",queryResult:i[13]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8192&&(n.queryResult=t[13]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function In(i){let e,r;return e=new Ye({props:{queryID:"dimgraph_data",queryResult:i[14]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&16384&&(n.queryResult=t[14]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Dn(i){let e,r;return e=new Ye({props:{queryID:"testing",queryResult:i[15]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&32768&&(n.queryResult=t[15]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function On(i){let e,r;return e=new Ye({props:{queryID:"actvity_barchart_by_year2",queryResult:i[16]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&65536&&(n.queryResult=t[16]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function qn(i){let e,r;return e=new Ye({props:{queryID:"milestone_last_merge_date",queryResult:i[17]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&131072&&(n.queryResult=t[17]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Nn(i){let e,r;return e=new Ye({props:{queryID:"new_roadmap",queryResult:i[18]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&262144&&(n.queryResult=t[18]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Ln(i){let e,r;return e=new Ye({props:{queryID:"new_roadmap_filtered",queryResult:i[19]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&524288&&(n.queryResult=t[19]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Fn(i){let e,r;return e=new Ye({props:{queryID:"new_roadmap2",queryResult:i[20]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1048576&&(n.queryResult=t[20]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Mn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_details",queryResult:i[21]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2097152&&(n.queryResult=t[21]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function zn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_details_filtered",queryResult:i[22]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&4194304&&(n.queryResult=t[22]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Pn(i){let e,r;return e=new Ye({props:{queryID:"milestone_details",queryResult:i[23]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&8388608&&(n.queryResult=t[23]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Hn(i){let e,r;return e=new Ye({props:{queryID:"milestone_rolllup_by_year",queryResult:i[24]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&16777216&&(n.queryResult=t[24]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Vn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_catagories",queryResult:i[25]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&33554432&&(n.queryResult=t[25]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Bn(i){let e,r;return e=new Ye({props:{queryID:"new_dim_data",queryResult:i[26]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&67108864&&(n.queryResult=t[26]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function xn(i){let e,r;return e=new Ye({props:{queryID:"new_dim_data_filtered",queryResult:i[27]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&134217728&&(n.queryResult=t[27]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Un(i){let e,r;return e=new Ye({props:{queryID:"owners",queryResult:i[28]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&268435456&&(n.queryResult=t[28]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Gn(i){let e,r;return e=new Ye({props:{queryID:"repos",queryResult:i[29]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&536870912&&(n.queryResult=t[29]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Wn(i){let e,r;return e=new Ye({props:{queryID:"roadmap2025",queryResult:i[30]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&1073741824&&(n.queryResult=t[30]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Yn(i){let e,r;return e=new Ye({props:{queryID:"get_plan_revisions_by_version",queryResult:i[31]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[1]&1&&(n.queryResult=t[31]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Qn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_sections_payload",queryResult:i[1]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[0]&2&&(n.queryResult=t[1]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function jn(i){let e,r;return e=new Ye({props:{queryID:"roadmap_sections",queryResult:i[32]}}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a[1]&2&&(n.queryResult=t[32]),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Ru(i){let e,r,t,a,n,l,s,u,f,o,m,h,d,$,y,F,G,H,w,Q,X,W,I,z,V,j,le,x,M,re,ie,he,He,ne,J,B,ae,Te,Ae;function Ke(_,v){return typeof Xe<"u"&&Xe.title?ru:tu}let be=Ke()(i),O=typeof Xe=="object"&&au();l=new eo({props:{fullWidth:"true",$$slots:{default:[$u]},$$scope:{ctx:i}}});let ee=i[3]&&yn(i),me=i[4]&&vn(i),ye=i[5]&&kn(i),ve=i[6]&&wn(i),Ce=i[7]&&$n(i),se=i[8]&&Rn(i),D=i[9]&&Sn(i),P=i[10]&&En(i),Oe=i[11]&&Tn(i),Re=i[12]&&An(i),Se=i[13]&&Cn(i),Ee=i[14]&&In(i),de=i[15]&&Dn(i),Ie=i[16]&&On(i),Be=i[17]&&qn(i),qe=i[18]&&Nn(i),Ne=i[19]&&Ln(i),Le=i[20]&&Fn(i),Me=i[21]&&Mn(i),De=i[22]&&zn(i),xe=i[23]&&Pn(i),ze=i[24]&&Hn(i),Pe=i[25]&&Vn(i),_e=i[26]&&Bn(i),ge=i[27]&&xn(i),ke=i[28]&&Un(i),we=i[29]&&Gn(i),ce=i[30]&&Wn(i),pe=i[31]&&Yn(i),k=i[1]&&Qn(i),q=i[32]&&jn(i);return{c(){e=S(),be.c(),r=L("meta"),t=L("meta"),O&&O.c(),a=Qe(),n=S(),C(l.$$.fragment),s=S(),ee&&ee.c(),u=S(),me&&me.c(),f=S(),ye&&ye.c(),o=S(),ve&&ve.c(),m=S(),Ce&&Ce.c(),h=S(),se&&se.c(),d=S(),D&&D.c(),$=S(),P&&P.c(),y=S(),Oe&&Oe.c(),F=S(),Re&&Re.c(),G=S(),Se&&Se.c(),H=S(),Ee&&Ee.c(),w=S(),de&&de.c(),Q=S(),Ie&&Ie.c(),X=S(),Be&&Be.c(),W=S(),qe&&qe.c(),I=S(),Ne&&Ne.c(),z=S(),Le&&Le.c(),V=S(),Me&&Me.c(),j=S(),De&&De.c(),le=S(),xe&&xe.c(),x=S(),ze&&ze.c(),M=S(),Pe&&Pe.c(),re=S(),_e&&_e.c(),ie=S(),ge&&ge.c(),he=S(),ke&&ke.c(),He=S(),we&&we.c(),ne=S(),ce&&ce.c(),J=S(),pe&&pe.c(),B=S(),k&&k.c(),ae=S(),q&&q.c(),Te=Qe(),this.h()},l(_){e=R(_);const v=El("svelte-2igo1p",document.head);be.l(v),r=N(v,"META",{name:!0,content:!0}),t=N(v,"META",{name:!0,content:!0}),O&&O.l(v),a=Qe(),v.forEach(p),n=R(_),A(l.$$.fragment,_),s=R(_),ee&&ee.l(_),u=R(_),me&&me.l(_),f=R(_),ye&&ye.l(_),o=R(_),ve&&ve.l(_),m=R(_),Ce&&Ce.l(_),h=R(_),se&&se.l(_),d=R(_),D&&D.l(_),$=R(_),P&&P.l(_),y=R(_),Oe&&Oe.l(_),F=R(_),Re&&Re.l(_),G=R(_),Se&&Se.l(_),H=R(_),Ee&&Ee.l(_),w=R(_),de&&de.l(_),Q=R(_),Ie&&Ie.l(_),X=R(_),Be&&Be.l(_),W=R(_),qe&&qe.l(_),I=R(_),Ne&&Ne.l(_),z=R(_),Le&&Le.l(_),V=R(_),Me&&Me.l(_),j=R(_),De&&De.l(_),le=R(_),xe&&xe.l(_),x=R(_),ze&&ze.l(_),M=R(_),Pe&&Pe.l(_),re=R(_),_e&&_e.l(_),ie=R(_),ge&&ge.l(_),he=R(_),ke&&ke.l(_),He=R(_),we&&we.l(_),ne=R(_),ce&&ce.l(_),J=R(_),pe&&pe.l(_),B=R(_),k&&k.l(_),ae=R(_),q&&q.l(_),Te=Qe(),this.h()},h(){Y(r,"name","twitter:card"),Y(r,"content","summary_large_image"),Y(t,"name","twitter:site"),Y(t,"content","@evidence_dev")},m(_,v){g(_,e,v),be.m(document.head,null),K(document.head,r),K(document.head,t),O&&O.m(document.head,null),K(document.head,a),g(_,n,v),T(l,_,v),g(_,s,v),ee&&ee.m(_,v),g(_,u,v),me&&me.m(_,v),g(_,f,v),ye&&ye.m(_,v),g(_,o,v),ve&&ve.m(_,v),g(_,m,v),Ce&&Ce.m(_,v),g(_,h,v),se&&se.m(_,v),g(_,d,v),D&&D.m(_,v),g(_,$,v),P&&P.m(_,v),g(_,y,v),Oe&&Oe.m(_,v),g(_,F,v),Re&&Re.m(_,v),g(_,G,v),Se&&Se.m(_,v),g(_,H,v),Ee&&Ee.m(_,v),g(_,w,v),de&&de.m(_,v),g(_,Q,v),Ie&&Ie.m(_,v),g(_,X,v),Be&&Be.m(_,v),g(_,W,v),qe&&qe.m(_,v),g(_,I,v),Ne&&Ne.m(_,v),g(_,z,v),Le&&Le.m(_,v),g(_,V,v),Me&&Me.m(_,v),g(_,j,v),De&&De.m(_,v),g(_,le,v),xe&&xe.m(_,v),g(_,x,v),ze&&ze.m(_,v),g(_,M,v),Pe&&Pe.m(_,v),g(_,re,v),_e&&_e.m(_,v),g(_,ie,v),ge&&ge.m(_,v),g(_,he,v),ke&&ke.m(_,v),g(_,He,v),we&&we.m(_,v),g(_,ne,v),ce&&ce.m(_,v),g(_,J,v),pe&&pe.m(_,v),g(_,B,v),k&&k.m(_,v),g(_,ae,v),q&&q.m(_,v),g(_,Te,v),Ae=!0},p(_,v){be.p(_,v),typeof Xe=="object"&&O.p(_,v);const nt={};v[0]&826343797|v[1]&6|v[6]&131072&&(nt.$$scope={dirty:v,ctx:_}),l.$set(nt),_[3]?ee?(ee.p(_,v),v[0]&8&&c(ee,1)):(ee=yn(_),ee.c(),c(ee,1),ee.m(u.parentNode,u)):ee&&(ue(),b(ee,1,1,()=>{ee=null}),fe()),_[4]?me?(me.p(_,v),v[0]&16&&c(me,1)):(me=vn(_),me.c(),c(me,1),me.m(f.parentNode,f)):me&&(ue(),b(me,1,1,()=>{me=null}),fe()),_[5]?ye?(ye.p(_,v),v[0]&32&&c(ye,1)):(ye=kn(_),ye.c(),c(ye,1),ye.m(o.parentNode,o)):ye&&(ue(),b(ye,1,1,()=>{ye=null}),fe()),_[6]?ve?(ve.p(_,v),v[0]&64&&c(ve,1)):(ve=wn(_),ve.c(),c(ve,1),ve.m(m.parentNode,m)):ve&&(ue(),b(ve,1,1,()=>{ve=null}),fe()),_[7]?Ce?(Ce.p(_,v),v[0]&128&&c(Ce,1)):(Ce=$n(_),Ce.c(),c(Ce,1),Ce.m(h.parentNode,h)):Ce&&(ue(),b(Ce,1,1,()=>{Ce=null}),fe()),_[8]?se?(se.p(_,v),v[0]&256&&c(se,1)):(se=Rn(_),se.c(),c(se,1),se.m(d.parentNode,d)):se&&(ue(),b(se,1,1,()=>{se=null}),fe()),_[9]?D?(D.p(_,v),v[0]&512&&c(D,1)):(D=Sn(_),D.c(),c(D,1),D.m($.parentNode,$)):D&&(ue(),b(D,1,1,()=>{D=null}),fe()),_[10]?P?(P.p(_,v),v[0]&1024&&c(P,1)):(P=En(_),P.c(),c(P,1),P.m(y.parentNode,y)):P&&(ue(),b(P,1,1,()=>{P=null}),fe()),_[11]?Oe?(Oe.p(_,v),v[0]&2048&&c(Oe,1)):(Oe=Tn(_),Oe.c(),c(Oe,1),Oe.m(F.parentNode,F)):Oe&&(ue(),b(Oe,1,1,()=>{Oe=null}),fe()),_[12]?Re?(Re.p(_,v),v[0]&4096&&c(Re,1)):(Re=An(_),Re.c(),c(Re,1),Re.m(G.parentNode,G)):Re&&(ue(),b(Re,1,1,()=>{Re=null}),fe()),_[13]?Se?(Se.p(_,v),v[0]&8192&&c(Se,1)):(Se=Cn(_),Se.c(),c(Se,1),Se.m(H.parentNode,H)):Se&&(ue(),b(Se,1,1,()=>{Se=null}),fe()),_[14]?Ee?(Ee.p(_,v),v[0]&16384&&c(Ee,1)):(Ee=In(_),Ee.c(),c(Ee,1),Ee.m(w.parentNode,w)):Ee&&(ue(),b(Ee,1,1,()=>{Ee=null}),fe()),_[15]?de?(de.p(_,v),v[0]&32768&&c(de,1)):(de=Dn(_),de.c(),c(de,1),de.m(Q.parentNode,Q)):de&&(ue(),b(de,1,1,()=>{de=null}),fe()),_[16]?Ie?(Ie.p(_,v),v[0]&65536&&c(Ie,1)):(Ie=On(_),Ie.c(),c(Ie,1),Ie.m(X.parentNode,X)):Ie&&(ue(),b(Ie,1,1,()=>{Ie=null}),fe()),_[17]?Be?(Be.p(_,v),v[0]&131072&&c(Be,1)):(Be=qn(_),Be.c(),c(Be,1),Be.m(W.parentNode,W)):Be&&(ue(),b(Be,1,1,()=>{Be=null}),fe()),_[18]?qe?(qe.p(_,v),v[0]&262144&&c(qe,1)):(qe=Nn(_),qe.c(),c(qe,1),qe.m(I.parentNode,I)):qe&&(ue(),b(qe,1,1,()=>{qe=null}),fe()),_[19]?Ne?(Ne.p(_,v),v[0]&524288&&c(Ne,1)):(Ne=Ln(_),Ne.c(),c(Ne,1),Ne.m(z.parentNode,z)):Ne&&(ue(),b(Ne,1,1,()=>{Ne=null}),fe()),_[20]?Le?(Le.p(_,v),v[0]&1048576&&c(Le,1)):(Le=Fn(_),Le.c(),c(Le,1),Le.m(V.parentNode,V)):Le&&(ue(),b(Le,1,1,()=>{Le=null}),fe()),_[21]?Me?(Me.p(_,v),v[0]&2097152&&c(Me,1)):(Me=Mn(_),Me.c(),c(Me,1),Me.m(j.parentNode,j)):Me&&(ue(),b(Me,1,1,()=>{Me=null}),fe()),_[22]?De?(De.p(_,v),v[0]&4194304&&c(De,1)):(De=zn(_),De.c(),c(De,1),De.m(le.parentNode,le)):De&&(ue(),b(De,1,1,()=>{De=null}),fe()),_[23]?xe?(xe.p(_,v),v[0]&8388608&&c(xe,1)):(xe=Pn(_),xe.c(),c(xe,1),xe.m(x.parentNode,x)):xe&&(ue(),b(xe,1,1,()=>{xe=null}),fe()),_[24]?ze?(ze.p(_,v),v[0]&16777216&&c(ze,1)):(ze=Hn(_),ze.c(),c(ze,1),ze.m(M.parentNode,M)):ze&&(ue(),b(ze,1,1,()=>{ze=null}),fe()),_[25]?Pe?(Pe.p(_,v),v[0]&33554432&&c(Pe,1)):(Pe=Vn(_),Pe.c(),c(Pe,1),Pe.m(re.parentNode,re)):Pe&&(ue(),b(Pe,1,1,()=>{Pe=null}),fe()),_[26]?_e?(_e.p(_,v),v[0]&67108864&&c(_e,1)):(_e=Bn(_),_e.c(),c(_e,1),_e.m(ie.parentNode,ie)):_e&&(ue(),b(_e,1,1,()=>{_e=null}),fe()),_[27]?ge?(ge.p(_,v),v[0]&134217728&&c(ge,1)):(ge=xn(_),ge.c(),c(ge,1),ge.m(he.parentNode,he)):ge&&(ue(),b(ge,1,1,()=>{ge=null}),fe()),_[28]?ke?(ke.p(_,v),v[0]&268435456&&c(ke,1)):(ke=Un(_),ke.c(),c(ke,1),ke.m(He.parentNode,He)):ke&&(ue(),b(ke,1,1,()=>{ke=null}),fe()),_[29]?we?(we.p(_,v),v[0]&536870912&&c(we,1)):(we=Gn(_),we.c(),c(we,1),we.m(ne.parentNode,ne)):we&&(ue(),b(we,1,1,()=>{we=null}),fe()),_[30]?ce?(ce.p(_,v),v[0]&1073741824&&c(ce,1)):(ce=Wn(_),ce.c(),c(ce,1),ce.m(J.parentNode,J)):ce&&(ue(),b(ce,1,1,()=>{ce=null}),fe()),_[31]?pe?(pe.p(_,v),v[1]&1&&c(pe,1)):(pe=Yn(_),pe.c(),c(pe,1),pe.m(B.parentNode,B)):pe&&(ue(),b(pe,1,1,()=>{pe=null}),fe()),_[1]?k?(k.p(_,v),v[0]&2&&c(k,1)):(k=Qn(_),k.c(),c(k,1),k.m(ae.parentNode,ae)):k&&(ue(),b(k,1,1,()=>{k=null}),fe()),_[32]?q?(q.p(_,v),v[1]&2&&c(q,1)):(q=jn(_),q.c(),c(q,1),q.m(Te.parentNode,Te)):q&&(ue(),b(q,1,1,()=>{q=null}),fe())},i(_){Ae||(c(l.$$.fragment,_),c(ee),c(me),c(ye),c(ve),c(Ce),c(se),c(D),c(P),c(Oe),c(Re),c(Se),c(Ee),c(de),c(Ie),c(Be),c(qe),c(Ne),c(Le),c(Me),c(De),c(xe),c(ze),c(Pe),c(_e),c(ge),c(ke),c(we),c(ce),c(pe),c(k),c(q),Ae=!0)},o(_){b(l.$$.fragment,_),b(ee),b(me),b(ye),b(ve),b(Ce),b(se),b(D),b(P),b(Oe),b(Re),b(Se),b(Ee),b(de),b(Ie),b(Be),b(qe),b(Ne),b(Le),b(Me),b(De),b(xe),b(ze),b(Pe),b(_e),b(ge),b(ke),b(we),b(ce),b(pe),b(k),b(q),Ae=!1},d(_){_&&(p(e),p(n),p(s),p(u),p(f),p(o),p(m),p(h),p(d),p($),p(y),p(F),p(G),p(H),p(w),p(Q),p(X),p(W),p(I),p(z),p(V),p(j),p(le),p(x),p(M),p(re),p(ie),p(he),p(He),p(ne),p(J),p(B),p(ae),p(Te)),be.d(_),p(r),p(t),O&&O.d(_),p(a),E(l,_),ee&&ee.d(_),me&&me.d(_),ye&&ye.d(_),ve&&ve.d(_),Ce&&Ce.d(_),se&&se.d(_),D&&D.d(_),P&&P.d(_),Oe&&Oe.d(_),Re&&Re.d(_),Se&&Se.d(_),Ee&&Ee.d(_),de&&de.d(_),Ie&&Ie.d(_),Be&&Be.d(_),qe&&qe.d(_),Ne&&Ne.d(_),Le&&Le.d(_),Me&&Me.d(_),De&&De.d(_),xe&&xe.d(_),ze&&ze.d(_),Pe&&Pe.d(_),_e&&_e.d(_),ge&&ge.d(_),ke&&ke.d(_),we&&we.d(_),ce&&ce.d(_),pe&&pe.d(_),k&&k.d(_),q&&q.d(_)}}}const Xe={title:"Exclipse Zenoh Roadmap Progress and Versions"};function Su(i,e,r){let t,a,n,l,s,u;Rt(i,ns,U=>r(163,s=U)),Rt(i,Hi,U=>r(168,u=U));let{data:f}=e,{data:o={},customFormattingSettings:m,__db:h,inputs:d}=f;lt(Hi,u="f939c3a1d667647bd0f79ce76e2fcdc8",u);let $=Zl(yr(d));Xn($.subscribe(U=>r(0,d=U))),wi(es,{getCustomFormats:()=>m.customFormats||[]});const y=(U,vl)=>ls(h.query,U,{query_name:vl});Kl(y);let F=s.params;na(()=>!0);let G={initialData:void 0,initialError:void 0},H=Z`select *
from eind.roadmap_revision_summaries`,w=`select *
from eind.roadmap_revision_summaries`;o.roadmap_revision_summaries_all_data&&(o.roadmap_revision_summaries_all_data instanceof Error?G.initialError=o.roadmap_revision_summaries_all_data:G.initialData=o.roadmap_revision_summaries_all_data,o.roadmap_revision_summaries_all_columns&&(G.knownColumns=o.roadmap_revision_summaries_all_columns));let Q,X=!1;const W=Fe.createReactive({callback:U=>{r(3,Q=U)},execFn:y},{id:"roadmap_revision_summaries_all",...G});W(w,{noResolve:H,...G}),globalThis[Symbol.for("roadmap_revision_summaries_all")]={get value(){return Q}};let I={initialData:void 0,initialError:void 0},z=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`,V=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`;o.roadmap_revision_summaries_filtered_data&&(o.roadmap_revision_summaries_filtered_data instanceof Error?I.initialError=o.roadmap_revision_summaries_filtered_data:I.initialData=o.roadmap_revision_summaries_filtered_data,o.roadmap_revision_summaries_filtered_columns&&(I.knownColumns=o.roadmap_revision_summaries_filtered_columns));let j,le=!1;const x=Fe.createReactive({callback:U=>{r(4,j=U)},execFn:y},{id:"roadmap_revision_summaries_filtered",...I});x(V,{noResolve:z,...I}),globalThis[Symbol.for("roadmap_revision_summaries_filtered")]={get value(){return j}};let M={initialData:void 0,initialError:void 0},re=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`,ie=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`;o.roadmap_revision_summaries_filtered_delivery_data&&(o.roadmap_revision_summaries_filtered_delivery_data instanceof Error?M.initialError=o.roadmap_revision_summaries_filtered_delivery_data:M.initialData=o.roadmap_revision_summaries_filtered_delivery_data,o.roadmap_revision_summaries_filtered_delivery_columns&&(M.knownColumns=o.roadmap_revision_summaries_filtered_delivery_columns));let he,He=!1;const ne=Fe.createReactive({callback:U=>{r(5,he=U)},execFn:y},{id:"roadmap_revision_summaries_filtered_delivery",...M});ne(ie,{noResolve:re,...M}),globalThis[Symbol.for("roadmap_revision_summaries_filtered_delivery")]={get value(){return he}};let J={initialData:void 0,initialError:void 0},B=Z`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`,ae=`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`;o.test_data&&(o.test_data instanceof Error?J.initialError=o.test_data:J.initialData=o.test_data,o.test_columns&&(J.knownColumns=o.test_columns));let Te,Ae=!1;const Ke=Fe.createReactive({callback:U=>{r(6,Te=U)},execFn:y},{id:"test",...J});Ke(ae,{noResolve:B,...J}),globalThis[Symbol.for("test")]={get value(){return Te}};let $e={initialData:void 0,initialError:void 0},be=Z`select * 
from eind.zenoh_roadmap_versions`,O=`select * 
from eind.zenoh_roadmap_versions`;o.roadmap_versions_data&&(o.roadmap_versions_data instanceof Error?$e.initialError=o.roadmap_versions_data:$e.initialData=o.roadmap_versions_data,o.roadmap_versions_columns&&($e.knownColumns=o.roadmap_versions_columns));let ee,me=!1;const ye=Fe.createReactive({callback:U=>{r(7,ee=U)},execFn:y},{id:"roadmap_versions",...$e});ye(O,{noResolve:be,...$e}),globalThis[Symbol.for("roadmap_versions")]={get value(){return ee}};let ve={initialData:void 0,initialError:void 0},Ce=Z`select rv.year,
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

where year = ${d.years.value}`,se=`select rv.year,
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

where year = ${d.years.value}`;o.roadmap_versions_filtered_data&&(o.roadmap_versions_filtered_data instanceof Error?ve.initialError=o.roadmap_versions_filtered_data:ve.initialData=o.roadmap_versions_filtered_data,o.roadmap_versions_filtered_columns&&(ve.knownColumns=o.roadmap_versions_filtered_columns));let D,P=!1;const Oe=Fe.createReactive({callback:U=>{r(8,D=U)},execFn:y},{id:"roadmap_versions_filtered",...ve});Oe(se,{noResolve:Ce,...ve}),globalThis[Symbol.for("roadmap_versions_filtered")]={get value(){return D}};let Re={initialData:void 0,initialError:void 0},Se=Z`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`,Ee=`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`;o.roadmap_key_dates_data&&(o.roadmap_key_dates_data instanceof Error?Re.initialError=o.roadmap_key_dates_data:Re.initialData=o.roadmap_key_dates_data,o.roadmap_key_dates_columns&&(Re.knownColumns=o.roadmap_key_dates_columns));let de,Ie=!1;const Be=Fe.createReactive({callback:U=>{r(9,de=U)},execFn:y},{id:"roadmap_key_dates",...Re});Be(Ee,{noResolve:Se,...Re}),globalThis[Symbol.for("roadmap_key_dates")]={get value(){return de}};let qe={initialData:void 0,initialError:void 0},Ne=Z`select * 
FROM eind.zenoh_milestone_last_merge_date`,Le=`select * 
FROM eind.zenoh_milestone_last_merge_date`;o.bob2_data&&(o.bob2_data instanceof Error?qe.initialError=o.bob2_data:qe.initialData=o.bob2_data,o.bob2_columns&&(qe.knownColumns=o.bob2_columns));let Me,De=!1;const xe=Fe.createReactive({callback:U=>{r(10,Me=U)},execFn:y},{id:"bob2",...qe});xe(Le,{noResolve:Ne,...qe}),globalThis[Symbol.for("bob2")]={get value(){return Me}};let ze={initialData:void 0,initialError:void 0},Pe=Z`WITH fred AS (
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
FROM fred`,_e=`WITH fred AS (
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
FROM fred`;o.roadmap_summary_data_data&&(o.roadmap_summary_data_data instanceof Error?ze.initialError=o.roadmap_summary_data_data:ze.initialData=o.roadmap_summary_data_data,o.roadmap_summary_data_columns&&(ze.knownColumns=o.roadmap_summary_data_columns));let ge,ke=!1;const we=Fe.createReactive({callback:U=>{r(11,ge=U)},execFn:y},{id:"roadmap_summary_data",...ze});we(_e,{noResolve:Pe,...ze}),globalThis[Symbol.for("roadmap_summary_data")]={get value(){return ge}};let ce={initialData:void 0,initialError:void 0},pe=Z`WITH fred AS (
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
  milestone_number ASC;`,k=`WITH fred AS (
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
  milestone_number ASC;`;o.roadmap_summary_data_filtered_data&&(o.roadmap_summary_data_filtered_data instanceof Error?ce.initialError=o.roadmap_summary_data_filtered_data:ce.initialData=o.roadmap_summary_data_filtered_data,o.roadmap_summary_data_filtered_columns&&(ce.knownColumns=o.roadmap_summary_data_filtered_columns));let q,_=!1;const v=Fe.createReactive({callback:U=>{r(12,q=U)},execFn:y},{id:"roadmap_summary_data_filtered",...ce});v(k,{noResolve:pe,...ce}),globalThis[Symbol.for("roadmap_summary_data_filtered")]={get value(){return q}};let nt={initialData:void 0,initialError:void 0},ut=Z`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
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
where year = ${d.years.value}`;o.dimgraph_data_input_data&&(o.dimgraph_data_input_data instanceof Error?nt.initialError=o.dimgraph_data_input_data:nt.initialData=o.dimgraph_data_input_data,o.dimgraph_data_input_columns&&(nt.knownColumns=o.dimgraph_data_input_columns));let mt,kt=!1;const wt=Fe.createReactive({callback:U=>{r(13,mt=U)},execFn:y},{id:"dimgraph_data_input",...nt});wt(ft,{noResolve:ut,...nt}),globalThis[Symbol.for("dimgraph_data_input")]={get value(){return mt}};let at={initialData:void 0,initialError:void 0},et=Z`SELECT 
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
where year = ${d.years.value})`;o.dimgraph_data_data&&(o.dimgraph_data_data instanceof Error?at.initialError=o.dimgraph_data_data:at.initialData=o.dimgraph_data_data,o.dimgraph_data_columns&&(at.knownColumns=o.dimgraph_data_columns));let oa,ua=!1;const fa=Fe.createReactive({callback:U=>{r(14,oa=U)},execFn:y},{id:"dimgraph_data",...at});fa(rt,{noResolve:et,...at}),globalThis[Symbol.for("dimgraph_data")]={get value(){return oa}};let Dt={initialData:void 0,initialError:void 0},Ot=Z`select *
FROM eind."zenoh_milestone_last merge_date"`,Rr=`select *
FROM eind."zenoh_milestone_last merge_date"`;o.testing_data&&(o.testing_data instanceof Error?Dt.initialError=o.testing_data:Dt.initialData=o.testing_data,o.testing_columns&&(Dt.knownColumns=o.testing_columns));let ma,da=!1;const _a=Fe.createReactive({callback:U=>{r(15,ma=U)},execFn:y},{id:"testing",...Dt});_a(Rr,{noResolve:Ot,...Dt}),globalThis[Symbol.for("testing")]={get value(){return ma}};let qt={initialData:void 0,initialError:void 0},Nt=Z`WITH bob AS (
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
  a.activity;`;o.actvity_barchart_by_year2_data&&(o.actvity_barchart_by_year2_data instanceof Error?qt.initialError=o.actvity_barchart_by_year2_data:qt.initialData=o.actvity_barchart_by_year2_data,o.actvity_barchart_by_year2_columns&&(qt.knownColumns=o.actvity_barchart_by_year2_columns));let ca,pa=!1;const ha=Fe.createReactive({callback:U=>{r(16,ca=U)},execFn:y},{id:"actvity_barchart_by_year2",...qt});ha(Sr,{noResolve:Nt,...qt}),globalThis[Symbol.for("actvity_barchart_by_year2")]={get value(){return ca}};let Lt={initialData:void 0,initialError:void 0},Ft=Z`SELECT 
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
  b.milestone_id`;o.milestone_last_merge_date_data&&(o.milestone_last_merge_date_data instanceof Error?Lt.initialError=o.milestone_last_merge_date_data:Lt.initialData=o.milestone_last_merge_date_data,o.milestone_last_merge_date_columns&&(Lt.knownColumns=o.milestone_last_merge_date_columns));let ba,ga=!1;const ya=Fe.createReactive({callback:U=>{r(17,ba=U)},execFn:y},{id:"milestone_last_merge_date",...Lt});ya(Er,{noResolve:Ft,...Lt}),globalThis[Symbol.for("milestone_last_merge_date")]={get value(){return ba}};let Mt={initialData:void 0,initialError:void 0},zt=Z`select *  
from csv.RoadmapMultiYearStatus`,Tr=`select *  
from csv.RoadmapMultiYearStatus`;o.new_roadmap_data&&(o.new_roadmap_data instanceof Error?Mt.initialError=o.new_roadmap_data:Mt.initialData=o.new_roadmap_data,o.new_roadmap_columns&&(Mt.knownColumns=o.new_roadmap_columns));let va,ka=!1;const wa=Fe.createReactive({callback:U=>{r(18,va=U)},execFn:y},{id:"new_roadmap",...Mt});wa(Tr,{noResolve:zt,...Mt}),globalThis[Symbol.for("new_roadmap")]={get value(){return va}};let Pt={initialData:void 0,initialError:void 0},Ht=Z`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${d.years.value}`,Ar=`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${d.years.value}`;o.new_roadmap_filtered_data&&(o.new_roadmap_filtered_data instanceof Error?Pt.initialError=o.new_roadmap_filtered_data:Pt.initialData=o.new_roadmap_filtered_data,o.new_roadmap_filtered_columns&&(Pt.knownColumns=o.new_roadmap_filtered_columns));let $a,Ra=!1;const Sa=Fe.createReactive({callback:U=>{r(19,$a=U)},execFn:y},{id:"new_roadmap_filtered",...Pt});Sa(Ar,{noResolve:Ht,...Pt}),globalThis[Symbol.for("new_roadmap_filtered")]={get value(){return $a}};let Vt={initialData:void 0,initialError:void 0},Bt=Z`select *
      
from eind.roadmap_summaries_detail`,Cr=`select *
      
from eind.roadmap_summaries_detail`;o.new_roadmap2_data&&(o.new_roadmap2_data instanceof Error?Vt.initialError=o.new_roadmap2_data:Vt.initialData=o.new_roadmap2_data,o.new_roadmap2_columns&&(Vt.knownColumns=o.new_roadmap2_columns));let Ea,Ta=!1;const Aa=Fe.createReactive({callback:U=>{r(20,Ea=U)},execFn:y},{id:"new_roadmap2",...Vt});Aa(Cr,{noResolve:Bt,...Vt}),globalThis[Symbol.for("new_roadmap2")]={get value(){return Ea}};let xt={initialData:void 0,initialError:void 0},Ut=Z`SELECT *
  
FROM eind.roadmap_version_markdown`,Ir=`SELECT *
  
FROM eind.roadmap_version_markdown`;o.roadmap_details_data&&(o.roadmap_details_data instanceof Error?xt.initialError=o.roadmap_details_data:xt.initialData=o.roadmap_details_data,o.roadmap_details_columns&&(xt.knownColumns=o.roadmap_details_columns));let Ca,Ia=!1;const Da=Fe.createReactive({callback:U=>{r(21,Ca=U)},execFn:y},{id:"roadmap_details",...xt});Da(Ir,{noResolve:Ut,...xt}),globalThis[Symbol.for("roadmap_details")]={get value(){return Ca}};let Gt={initialData:void 0,initialError:void 0},Wt=Z`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${d.years.value}`,Dr=`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${d.years.value}`;o.roadmap_details_filtered_data&&(o.roadmap_details_filtered_data instanceof Error?Gt.initialError=o.roadmap_details_filtered_data:Gt.initialData=o.roadmap_details_filtered_data,o.roadmap_details_filtered_columns&&(Gt.knownColumns=o.roadmap_details_filtered_columns));let Oa,qa=!1;const Na=Fe.createReactive({callback:U=>{r(22,Oa=U)},execFn:y},{id:"roadmap_details_filtered",...Gt});Na(Dr,{noResolve:Wt,...Gt}),globalThis[Symbol.for("roadmap_details_filtered")]={get value(){return Oa}};let Yt={initialData:void 0,initialError:void 0},Qt=Z`select * from eind.zenoh_roadmap_details`,Or="select * from eind.zenoh_roadmap_details";o.milestone_details_data&&(o.milestone_details_data instanceof Error?Yt.initialError=o.milestone_details_data:Yt.initialData=o.milestone_details_data,o.milestone_details_columns&&(Yt.knownColumns=o.milestone_details_columns));let La,Fa=!1;const Ma=Fe.createReactive({callback:U=>{r(23,La=U)},execFn:y},{id:"milestone_details",...Yt});Ma(Or,{noResolve:Qt,...Yt}),globalThis[Symbol.for("milestone_details")]={get value(){return La}};let jt={initialData:void 0,initialError:void 0},Jt=Z`SELECT
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
ORDER BY year`;o.milestone_rolllup_by_year_data&&(o.milestone_rolllup_by_year_data instanceof Error?jt.initialError=o.milestone_rolllup_by_year_data:jt.initialData=o.milestone_rolllup_by_year_data,o.milestone_rolllup_by_year_columns&&(jt.knownColumns=o.milestone_rolllup_by_year_columns));let za,Pa=!1;const Ha=Fe.createReactive({callback:U=>{r(24,za=U)},execFn:y},{id:"milestone_rolllup_by_year",...jt});Ha(qr,{noResolve:Jt,...jt}),globalThis[Symbol.for("milestone_rolllup_by_year")]={get value(){return za}};let Zt={initialData:void 0,initialError:void 0},Kt=Z`select 
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
group by year`;o.roadmap_catagories_data&&(o.roadmap_catagories_data instanceof Error?Zt.initialError=o.roadmap_catagories_data:Zt.initialData=o.roadmap_catagories_data,o.roadmap_catagories_columns&&(Zt.knownColumns=o.roadmap_catagories_columns));let Va,Ba=!1;const xa=Fe.createReactive({callback:U=>{r(25,Va=U)},execFn:y},{id:"roadmap_catagories",...Zt});xa(Nr,{noResolve:Kt,...Zt}),globalThis[Symbol.for("roadmap_catagories")]={get value(){return Va}};let Xt={initialData:void 0,initialError:void 0},er=Z`select * from eind.dimension_data`,Lr="select * from eind.dimension_data";o.new_dim_data_data&&(o.new_dim_data_data instanceof Error?Xt.initialError=o.new_dim_data_data:Xt.initialData=o.new_dim_data_data,o.new_dim_data_columns&&(Xt.knownColumns=o.new_dim_data_columns));let Ua,Ga=!1;const Wa=Fe.createReactive({callback:U=>{r(26,Ua=U)},execFn:y},{id:"new_dim_data",...Xt});Wa(Lr,{noResolve:er,...Xt}),globalThis[Symbol.for("new_dim_data")]={get value(){return Ua}};let tr={initialData:void 0,initialError:void 0},rr=Z`select
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
where year = ${d.years.value}`;o.new_dim_data_filtered_data&&(o.new_dim_data_filtered_data instanceof Error?tr.initialError=o.new_dim_data_filtered_data:tr.initialData=o.new_dim_data_filtered_data,o.new_dim_data_filtered_columns&&(tr.knownColumns=o.new_dim_data_filtered_columns));let Ya,Qa=!1;const ja=Fe.createReactive({callback:U=>{r(27,Ya=U)},execFn:y},{id:"new_dim_data_filtered",...tr});ja(Fr,{noResolve:rr,...tr}),globalThis[Symbol.for("new_dim_data_filtered")]={get value(){return Ya}};let ar={initialData:void 0,initialError:void 0},ir=Z`select distinct owner from eind.repos`,Mr="select distinct owner from eind.repos";o.owners_data&&(o.owners_data instanceof Error?ar.initialError=o.owners_data:ar.initialData=o.owners_data,o.owners_columns&&(ar.knownColumns=o.owners_columns));let Ja,Za=!1;const Ka=Fe.createReactive({callback:U=>{r(28,Ja=U)},execFn:y},{id:"owners",...ar});Ka(Mr,{noResolve:ir,...ar}),globalThis[Symbol.for("owners")]={get value(){return Ja}};let nr={initialData:void 0,initialError:void 0},lr=Z`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${d.owner.value}'`,zr=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${d.owner.value}'`;o.repos_data&&(o.repos_data instanceof Error?nr.initialError=o.repos_data:nr.initialData=o.repos_data,o.repos_columns&&(nr.knownColumns=o.repos_columns));let Xa,ei=!1;const ti=Fe.createReactive({callback:U=>{r(29,Xa=U)},execFn:y},{id:"repos",...nr});ti(zr,{noResolve:lr,...nr}),globalThis[Symbol.for("repos")]={get value(){return Xa}};let sr={initialData:void 0,initialError:void 0},or=Z`select * from
eind.roadmap_versions_sections`,Pr=`select * from
eind.roadmap_versions_sections`;o.roadmap2025_data&&(o.roadmap2025_data instanceof Error?sr.initialError=o.roadmap2025_data:sr.initialData=o.roadmap2025_data,o.roadmap2025_columns&&(sr.knownColumns=o.roadmap2025_columns));let ri,ai=!1;const ii=Fe.createReactive({callback:U=>{r(30,ri=U)},execFn:y},{id:"roadmap2025",...sr});ii(Pr,{noResolve:or,...sr}),globalThis[Symbol.for("roadmap2025")]={get value(){return ri}};let ur={initialData:void 0,initialError:void 0},fr=Z`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC`,Hr=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC`;o.get_plan_revisions_by_version_data&&(o.get_plan_revisions_by_version_data instanceof Error?ur.initialError=o.get_plan_revisions_by_version_data:ur.initialData=o.get_plan_revisions_by_version_data,o.get_plan_revisions_by_version_columns&&(ur.knownColumns=o.get_plan_revisions_by_version_columns));let ni,li=!1;const si=Fe.createReactive({callback:U=>{r(31,ni=U)},execFn:y},{id:"get_plan_revisions_by_version",...ur});si(Hr,{noResolve:fr,...ur}),globalThis[Symbol.for("get_plan_revisions_by_version")]={get value(){return ni}};let mr={initialData:void 0,initialError:void 0},dr=Z`select heading_markdown as heading,
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
    where heading_text in ${d.section.value}`;o.roadmap_sections_payload_data&&(o.roadmap_sections_payload_data instanceof Error?mr.initialError=o.roadmap_sections_payload_data:mr.initialData=o.roadmap_sections_payload_data,o.roadmap_sections_payload_columns&&(mr.knownColumns=o.roadmap_sections_payload_columns));let jr,oi=!1;const ui=Fe.createReactive({callback:U=>{r(1,jr=U)},execFn:y},{id:"roadmap_sections_payload",...mr});ui(Vr,{noResolve:dr,...mr}),globalThis[Symbol.for("roadmap_sections_payload")]={get value(){return jr}};let _r={initialData:void 0,initialError:void 0},cr=Z`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)`,Br=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${d.roadmap_versions.value}
    order by "order" ASC)`;o.roadmap_sections_data&&(o.roadmap_sections_data instanceof Error?_r.initialError=o.roadmap_sections_data:_r.initialData=o.roadmap_sections_data,o.roadmap_sections_columns&&(_r.knownColumns=o.roadmap_sections_columns));let fi,mi=!1;const di=Fe.createReactive({callback:U=>{r(32,fi=U)},execFn:y},{id:"roadmap_sections",..._r});return di(Br,{noResolve:cr,..._r}),globalThis[Symbol.for("roadmap_sections")]={get value(){return fi}},i.$$set=U=>{"data"in U&&r(34,f=U.data)},i.$$.update=()=>{i.$$.dirty[1]&8&&r(35,{data:o={},customFormattingSettings:m,__db:h}=f,o),i.$$.dirty[1]&16&&Xl.set(Object.keys(o).length>0),i.$$.dirty[5]&256&&r(2,F=s.params),i.$$.dirty[1]&480&&(H||!X?H||(W(w,{noResolve:H,...G}),r(39,X=!0)):W(w,{noResolve:H})),i.$$.dirty[0]&1&&r(41,z=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`),i.$$.dirty[0]&1&&r(42,V=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${d.readers.value}'
and revision_year = ${d.roadmap_years.value}`),i.$$.dirty[1]&7680&&(z||!le?z||(x(V,{noResolve:z,...I}),r(43,le=!0)):x(V,{noResolve:z})),i.$$.dirty[0]&1&&r(45,re=Z`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`),i.$$.dirty[0]&1&&r(46,ie=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${d.years.value}`),i.$$.dirty[1]&122880&&(re||!He?re||(ne(ie,{noResolve:re,...M}),r(47,He=!0)):ne(ie,{noResolve:re})),i.$$.dirty[1]&1966080&&(B||!Ae?B||(Ke(ae,{noResolve:B,...J}),r(51,Ae=!0)):Ke(ae,{noResolve:B})),i.$$.dirty[1]&31457280&&(be||!me?be||(ye(O,{noResolve:be,...$e}),r(55,me=!0)):ye(O,{noResolve:be})),i.$$.dirty[0]&1&&r(57,Ce=Z`select rv.year,
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

where year = ${d.years.value}`),i.$$.dirty[0]&1&&r(58,se=`select rv.year,
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

where year = ${d.years.value}`),i.$$.dirty[1]&503316480&&(Ce||!P?Ce||(Oe(se,{noResolve:Ce,...ve}),r(59,P=!0)):Oe(se,{noResolve:Ce})),i.$$.dirty[1]&1610612736|i.$$.dirty[2]&3&&(Se||!Ie?Se||(Be(Ee,{noResolve:Se,...Re}),r(63,Ie=!0)):Be(Ee,{noResolve:Se})),i.$$.dirty[2]&60&&(Ne||!De?Ne||(xe(Le,{noResolve:Ne,...qe}),r(67,De=!0)):xe(Le,{noResolve:Ne})),i.$$.dirty[2]&960&&(Pe||!ke?Pe||(we(_e,{noResolve:Pe,...ze}),r(71,ke=!0)):we(_e,{noResolve:Pe})),i.$$.dirty[0]&1&&r(73,pe=Z`WITH fred AS (
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
  milestone_number ASC;`),i.$$.dirty[0]&1&&r(74,k=`WITH fred AS (
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
  milestone_number ASC;`),i.$$.dirty[2]&15360&&(pe||!_?pe||(v(k,{noResolve:pe,...ce}),r(75,_=!0)):v(k,{noResolve:pe})),i.$$.dirty[0]&1&&r(77,ut=Z`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
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
where roadmap_version = ${d.years.value}`),i.$$.dirty[3]&7864320&&(Wt||!qa?Wt||(Na(Dr,{noResolve:Wt,...Gt}),r(115,qa=!0)):Na(Dr,{noResolve:Wt})),i.$$.dirty[3]&125829120&&(Qt||!Fa?Qt||(Ma(Or,{noResolve:Qt,...Yt}),r(119,Fa=!0)):Ma(Or,{noResolve:Qt})),i.$$.dirty[3]&2013265920&&(Jt||!Pa?Jt||(Ha(qr,{noResolve:Jt,...jt}),r(123,Pa=!0)):Ha(qr,{noResolve:Jt})),i.$$.dirty[4]&15&&(Kt||!Ba?Kt||(xa(Nr,{noResolve:Kt,...Zt}),r(127,Ba=!0)):xa(Nr,{noResolve:Kt})),i.$$.dirty[4]&240&&(er||!Ga?er||(Wa(Lr,{noResolve:er,...Xt}),r(131,Ga=!0)):Wa(Lr,{noResolve:er})),i.$$.dirty[0]&1&&r(133,rr=Z`select
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
where year = ${d.years.value}`),i.$$.dirty[4]&3840&&(rr||!Qa?rr||(ja(Fr,{noResolve:rr,...tr}),r(135,Qa=!0)):ja(Fr,{noResolve:rr})),i.$$.dirty[4]&61440&&(ir||!Za?ir||(Ka(Mr,{noResolve:ir,...ar}),r(139,Za=!0)):Ka(Mr,{noResolve:ir})),i.$$.dirty[0]&1&&r(141,lr=Z`select 'All' as label, NULL as value
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
    order by "order" ASC)`),i.$$.dirty[5]&30&&(cr||!mi?cr||(di(Br,{noResolve:cr,..._r}),r(159,mi=!0)):di(Br,{noResolve:cr})),i.$$.dirty[0]&1&&r(33,t=d.kind.value=="week"?"01K2HAFAD1JM47FD6JP3E4K69Q":"01K2MD0XJBGMKCE7KXN9F25T3X"),i.$$.dirty[0]&1&&r(161,a=d.kind.value),i.$$.dirty[0]&1&&r(162,n=d.week_p[0]),i.$$.dirty[0]&1|i.$$.dirty[5]&128&&r(160,l=d.kind.value=="week"?n:d.quarter.value),i.$$.dirty[0]&1|i.$$.dirty[5]&96&&r(2,F={year:parseInt(d.years.value,10),audience:d.audience_p.value,owner:d.owner.value,repo:d.repo.value=="null"?null:d.repo.value,[a]:parseInt(l,10),output_format:"markdown"}),i.$$.dirty[0]&2&&jr.map(U=>`${U.heading||""}

${U.content||""}`).join(`

`)},r(37,H=Z`select *
from eind.roadmap_revision_summaries`),r(38,w=`select *
from eind.roadmap_revision_summaries`),r(49,B=Z`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`),r(50,ae=`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`),r(53,be=Z`select * 
from eind.zenoh_roadmap_versions`),r(54,O=`select * 
from eind.zenoh_roadmap_versions`),r(61,Se=Z`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`),r(62,Ee=`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`),r(65,Ne=Z`select * 
FROM eind.zenoh_milestone_last_merge_date`),r(66,Le=`select * 
FROM eind.zenoh_milestone_last_merge_date`),r(69,Pe=Z`WITH fred AS (
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
FROM fred`),r(70,_e=`WITH fred AS (
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
FROM eind."zenoh_milestone_last merge_date"`),r(86,Rr=`select *
FROM eind."zenoh_milestone_last merge_date"`),r(89,Nt=Z`WITH bob AS (
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
  
FROM eind.roadmap_version_markdown`),r(117,Qt=Z`select * from eind.zenoh_roadmap_details`),r(118,Or="select * from eind.zenoh_roadmap_details"),r(121,Jt=Z`SELECT
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
eind.roadmap_versions_sections`),[d,jr,F,Q,j,he,Te,ee,D,de,Me,ge,q,mt,oa,ma,ca,ba,va,$a,Ea,Ca,Oa,La,za,Va,Ua,Ya,Ja,Xa,ri,ni,fi,t,f,o,G,H,w,X,I,z,V,le,M,re,ie,He,J,B,ae,Ae,$e,be,O,me,ve,Ce,se,P,Re,Se,Ee,Ie,qe,Ne,Le,De,ze,Pe,_e,ke,ce,pe,k,_,nt,ut,ft,kt,at,et,rt,ua,Dt,Ot,Rr,da,qt,Nt,Sr,pa,Lt,Ft,Er,ga,Mt,zt,Tr,ka,Pt,Ht,Ar,Ra,Vt,Bt,Cr,Ta,xt,Ut,Ir,Ia,Gt,Wt,Dr,qa,Yt,Qt,Or,Fa,jt,Jt,qr,Pa,Zt,Kt,Nr,Ba,Xt,er,Lr,Ga,tr,rr,Fr,Qa,ar,ir,Mr,Za,nr,lr,zr,ei,sr,or,Pr,ai,ur,fr,Hr,li,mr,dr,Vr,oi,_r,cr,Br,mi,l,a,n,s]}class zu extends ct{constructor(e){super(),pt(this,e,Su,Ru,_t,{data:34},null,[-1,-1,-1,-1,-1,-1,-1])}}export{zu as component};
