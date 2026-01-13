var bs=Object.defineProperty;var Ki=i=>{throw TypeError(i)};var ws=(i,t,r)=>t in i?bs(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var ha=(i,t,r)=>ws(i,typeof t!="symbol"?t+"":t,r),Zi=(i,t,r)=>t.has(i)||Ki("Cannot "+r);var ur=(i,t,r)=>(Zi(i,t,"read from private field"),r?r.call(i):t.get(i)),Aa=(i,t,r)=>t.has(i)?Ki("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,r),Xi=(i,t,r,e)=>(Zi(i,t,"write to private field"),e?e.call(i,r):t.set(i,r),r);import{s as Na,l as ra,d as f,b as G,i as p,a as S,e as A,r as P,c as y,k,j as b,m as is,w as Ot,t as ce,u as pe,n as Ze,U as el,B as Ts,f as mr,g as Kt,v as D,H as Zr,V as zi,W as tl,x as ls,y as ss,z as ns,A as os,T as Vi,X as Es,I as Rs,h as qs,o as Ss,p as hs,q as As,Y as ks}from"../chunks/scheduler.DQMKnMhh.js";import{S as Ia,i as Oa,d as w,t as d,a as m,m as T,b as E,e as R,g as me,c as ue}from"../chunks/index.mQ_AmqKT.js";import{t as Fa,v as Ds,x as _s,g as ms,y as us,z as Cs,A as Ns,B as Is,F as Os,G as rl,V as Ls,Q as fs,H as Fs,J as Ms,K as ds,L as Bs,M as Hs,N as Us,O as ea,R as ta,S as cs,D as ka,C as er,j as al}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Ly8RmBek.js";import{T as Ps,a as Gi,A as ps,D as Ma,S as Ws}from"../chunks/DynamicMarkdown.iAEKyx84.js";import{c as Ys,A as $s,a as aa}from"../chunks/AccordionItem.0m6Vn8OM.js";import{g as js,Q as Re,n as Qs,e as Xs,s as Vs,p as Gs,a as il,r as ll,C as zs}from"../chunks/inferColumnTypes.B8NFUSHe.js";import{h as j}from"../chunks/button.CncG0NrR.js";import{H as xs,Q as je,B as Ba,D as Xt,a as z}from"../chunks/BarChart.P3O-aILG.js";import{w as gs}from"../chunks/entry.BKxnNclu.js";import{p as Js}from"../chunks/stores.PtkBf563.js";import{D as xi,H as vs}from"../chunks/Heatmap.B8N_l0Hw.js";import{p as Ks}from"../chunks/profile.BW8tN6E9.js";function sl(i){let t,r,e,a,l=i[3]&&nl(i);return{c(){t=k("span"),r=pe(i[0]),e=b(),l&&l.c(),this.h()},l(o){t=A(o,"SPAN",{class:!0});var s=P(t);r=ce(s,i[0]),e=y(s),l&&l.l(s),s.forEach(f),this.h()},h(){G(t,"class","text-xs font-medium block mb-0.5")},m(o,s){p(o,t,s),S(t,r),S(t,e),l&&l.m(t,null),a=!0},p(o,s){(!a||s&1)&&Ot(r,o[0]),o[3]?l?(l.p(o,s),s&8&&m(l,1)):(l=nl(o),l.c(),m(l,1),l.m(t,null)):l&&(me(),d(l,1,1,()=>{l=null}),ue())},i(o){a||(m(l),a=!0)},o(o){d(l),a=!1},d(o){o&&f(t),l&&l.d()}}}function nl(i){let t,r;return t=new _s({props:{description:i[3]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a&8&&(l.description=e[3]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Zs(i){let t,r,e;return{c(){t=k("input"),this.h()},l(a){t=A(a,"INPUT",{class:!0,placeholder:!0}),this.h()},h(){G(t,"class","font-medium border pb-1 pt-[3px] h-8 border-base-300 bg-base-100 pr-3 rounded-md px-2 sm:text-xs max-w-fit bg-transparent cursor-text bg-right bg-no-repeat focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-content-muted shadow-sm text-base placeholder:font-normal placeholder:text-base-content-muted/80"),G(t,"placeholder",i[2])},m(a,l){p(a,t,l),el(t,i[4]),r||(e=Ts(t,"input",i[11]),r=!0)},p(a,l){l&4&&G(t,"placeholder",a[2]),l&16&&t.value!==a[4]&&el(t,a[4])},i:Ze,o:Ze,d(a){a&&f(t),r=!1,e()}}}function en(i){let t,r;return t=new Ds({props:{inputType:"TextInput",error:i[6],height:"32",width:"246"}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p:Ze,i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function tn(i){let t,r,e,a,l,o,s=i[0]&&sl(i);const u=[en,Zs],c=[];function h(n,M){return n[6].length?0:1}return e=h(i),a=c[e]=u[e](i),{c(){t=k("div"),s&&s.c(),r=b(),a.c(),this.h()},l(n){t=A(n,"DIV",{class:!0});var M=P(t);s&&s.l(M),r=y(M),a.l(M),M.forEach(f),this.h()},h(){G(t,"class",l=`${i[0]?"-mt-0.5":"mt-2"} mb-4 ml-0 mr-2 inline-block align-bottom`)},m(n,M){p(n,t,M),s&&s.m(t,null),S(t,r),c[e].m(t,null),o=!0},p(n,M){n[0]?s?(s.p(n,M),M&1&&m(s,1)):(s=sl(n),s.c(),m(s,1),s.m(t,r)):s&&(me(),d(s,1,1,()=>{s=null}),ue()),a.p(n,M),(!o||M&1&&l!==(l=`${n[0]?"-mt-0.5":"mt-2"} mb-4 ml-0 mr-2 inline-block align-bottom`))&&G(t,"class",l)},i(n){o||(m(s),m(a),o=!0)},o(n){d(s),d(a),o=!1},d(n){n&&f(t),s&&s.d(),c[e].d()}}}function rn(i){let t,r;return t=new xs({props:{enabled:i[1],$$slots:{default:[tn]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,[a]){const l={};a&2&&(l.enabled=e[1]),a&16413&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function an(i,t,r){let e;const a=js();ra(i,a,W=>r(12,e=W));let{title:l}=t,{name:o}=t,{hideDuringPrint:s=!0}=t,{placeholder:u="Type to search"}=t,{defaultValue:c=void 0}=t,{description:h=void 0}=t,{unsafe:n=!1}=t,M=!1;const F=()=>{let W=q;n||(W=W.replaceAll("'","''")),is(a,e[o]={toString(){return W},sql:`'${W}'`,search:K=>`damerau_levenshtein(${K}, '${W}')`},e)};let q=c;typeof c<"u"&&F();let Z=[];try{Ys({name:o})}catch(W){Z.push(W.message)}function B(){q=this.value,r(4,q)}return i.$$set=W=>{"title"in W&&r(0,l=W.title),"name"in W&&r(8,o=W.name),"hideDuringPrint"in W&&r(1,s=W.hideDuringPrint),"placeholder"in W&&r(2,u=W.placeholder),"defaultValue"in W&&r(9,c=W.defaultValue),"description"in W&&r(3,h=W.description),"unsafe"in W&&r(7,n=W.unsafe)},i.$$.update=()=>{i.$$.dirty&128&&r(7,n=Fa(n)),i.$$.dirty&1040&&(q&&r(10,M=!0),M&&F())},[l,s,u,h,q,a,Z,n,o,c,M,B]}class ln extends Ia{constructor(t){super(),Oa(this,t,an,rn,Na,{title:0,name:8,hideDuringPrint:1,placeholder:2,defaultValue:9,description:3,unsafe:7})}}function sn(i){let t,r;return t=new Ls({props:{error:i[3]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a&8&&(l.error=e[3]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function nn(i){let t,r=rl(i[2],i[4])+"",e,a,l,o=i[1]&&ol(i);return{c(){t=k("span"),e=pe(r),a=b(),o&&o.c(),this.h()},l(s){t=A(s,"SPAN",{style:!0});var u=P(t);e=ce(u,r),a=y(u),o&&o.l(u),u.forEach(f),this.h()},h(){D(t,"color",i[5])},m(s,u){p(s,t,u),S(t,e),S(t,a),o&&o.m(t,null),l=!0},p(s,u){(!l||u&20)&&r!==(r=rl(s[2],s[4])+"")&&Ot(e,r),s[1]?o?(o.p(s,u),u&2&&m(o,1)):(o=ol(s),o.c(),m(o,1),o.m(t,null)):o&&(me(),d(o,1,1,()=>{o=null}),ue()),(!l||u&32)&&D(t,"color",s[5])},i(s){l||(m(o),l=!0)},o(s){d(o),l=!1},d(s){s&&f(t),o&&o.d()}}}function on(i){let t,r,e,a,l,o="Placeholder: no data currently referenced.";return{c(){t=k("span"),r=pe("["),e=pe(i[0]),a=pe("]"),l=k("span"),l.textContent=o,this.h()},l(s){t=A(s,"SPAN",{class:!0});var u=P(t);r=ce(u,"["),e=ce(u,i[0]),a=ce(u,"]"),l=A(u,"SPAN",{class:!0,"data-svelte-h":!0}),Kt(l)!=="svelte-ddarzq"&&(l.textContent=o),u.forEach(f),this.h()},h(){G(l,"class","error-msg svelte-1qvl5jp"),G(t,"class","placeholder svelte-1qvl5jp")},m(s,u){p(s,t,u),S(t,r),S(t,e),S(t,a),S(t,l)},p(s,u){u&1&&Ot(e,s[0])},i:Ze,o:Ze,d(s){s&&f(t)}}}function ol(i){let t,r;return t=new _s({props:{description:i[1]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a&2&&(l.description=e[1]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function _n(i){let t,r,e,a;const l=[on,nn,sn],o=[];function s(u,c){return u[0]?0:u[3]?2:1}return t=s(i),r=o[t]=l[t](i),{c(){r.c(),e=mr()},l(u){r.l(u),e=mr()},m(u,c){o[t].m(u,c),p(u,e,c),a=!0},p(u,[c]){let h=t;t=s(u),t===h?o[t].p(u,c):(me(),d(o[h],1,1,()=>{o[h]=null}),ue(),r=o[t],r?r.p(u,c):(r=o[t]=l[t](u),r.c()),m(r,1),r.m(e.parentNode,e))},i(u){a||(m(r),a=!0)},o(u){d(r),a=!1},d(u){u&&f(e),o[t].d(u)}}}function mn(i,t,r){let e,a,l=Ze,o=()=>(l(),l=Zr(e,Y=>r(15,a=Y)),e);i.$$.on_destroy.push(()=>l());const{resolveColor:s}=ms();let{data:u=null}=t,{row:c=0}=t,{column:h=null}=t,{value:n=null}=t,{placeholder:M=null}=t,{description:F=void 0}=t,{fmt:q=void 0}=t,Z,B,W,{color:K=void 0}=t,N="",{redNegatives:x=!1}=t,H;return i.$$set=Y=>{"data"in Y&&r(7,u=Y.data),"row"in Y&&r(10,c=Y.row),"column"in Y&&r(8,h=Y.column),"value"in Y&&r(11,n=Y.value),"placeholder"in Y&&r(0,M=Y.placeholder),"description"in Y&&r(1,F=Y.description),"fmt"in Y&&r(12,q=Y.fmt),"color"in Y&&r(13,K=Y.color),"redNegatives"in Y&&r(9,x=Y.redNegatives)},i.$$.update=()=>{var Y;if(i.$$.dirty&2304&&r(8,h=h??n),i.$$.dirty&21897)try{if(r(3,W=void 0),!M)if(u){if(typeof u=="string")throw Error(`Received: data=${u}, expected: data={${u}}`);if(Array.isArray(u)||r(7,u=[u]),isNaN(c))throw Error("row must be a number (row="+c+")");try{Object.keys(u[c])[0]}catch{throw Error("Row "+c+" does not exist in the dataset")}r(8,h=h??Object.keys(u[c])[0]),us(u,[h]),r(14,H=Cs(u,"array"));const ee=H.filter(V=>{var I;return V.type==="date"&&!(((I=u[0])==null?void 0:I[V.id])instanceof Date)}).map(V=>V.id);for(let V=0;V<ee.length;V++)r(7,u=Ns(u,ee[V]));r(2,B=u[c][h]),r(14,H=H.filter(V=>V.id===h)),q?r(4,Z=Is(q,(Y=H[0].format)==null?void 0:Y.valueType)):r(4,Z=H[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(ee){if(r(3,W=ee.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${W}`),Os)throw W}i.$$.dirty&2304&&n&&h&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),i.$$.dirty&8192&&o(r(6,e=s(K))),i.$$.dirty&512&&r(9,x=x==="true"||x===!0),i.$$.dirty&33284&&(x||a)&&(x&&B<0?r(5,N="rgb(220 38 38)"):a&&r(5,N=a))},[M,F,B,W,Z,N,e,u,h,x,c,n,q,K,H,a]}class un extends Ia{constructor(t){super(),Oa(this,t,mn,_n,Na,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function fn(i){let t;const r=i[7].default,e=ls(r,i,i[8],null);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,l){e&&e.m(a,l),t=!0},p(a,l){e&&e.p&&(!t||l&256)&&ss(e,r,a,a[8],t?os(r,a[8],l,null):ns(a[8]),null)},i(a){t||(m(e,a),t=!0)},o(a){d(e,a),t=!1},d(a){e&&e.d(a)}}}function dn(i){let t,r;const e=[i[4],{data:Re.isQuery(i[11])?Array.from(i[11]):i[11]}];let a={$$slots:{default:[fn]},$$scope:{ctx:i}};for(let l=0;l<e.length;l+=1)a=zi(a,e[l]);return t=new un({props:a}),{c(){R(t.$$.fragment)},l(l){E(t.$$.fragment,l)},m(l,o){T(t,l,o),r=!0},p(l,o){const s=o&2064?Fs(e,[o&16&&Ms(l[4]),o&2048&&{data:Re.isQuery(l[11])?Array.from(l[11]):l[11]}]):{};o&256&&(s.$$scope={dirty:o,ctx:l}),t.$set(s)},i(l){r||(m(t.$$.fragment,l),r=!0)},o(l){d(t.$$.fragment,l),r=!1},d(l){w(t,l)}}}function _l(i){let t,r;return t=new ds({props:{emptyMessage:i[2],emptySet:i[1],chartType:gn,isInitial:i[3]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a&4&&(l.emptyMessage=e[2]),a&2&&(l.emptySet=e[1]),a&8&&(l.isInitial=e[3]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function cn(i){let t,r,e=!i[4].placeholder&&_l(i);return{c(){t=k("span"),e&&e.c(),this.h()},l(a){t=A(a,"SPAN",{slot:!0});var l=P(t);e&&e.l(l),l.forEach(f),this.h()},h(){G(t,"slot","empty")},m(a,l){p(a,t,l),e&&e.m(t,null),r=!0},p(a,l){a[4].placeholder?e&&(me(),d(e,1,1,()=>{e=null}),ue()):e?(e.p(a,l),l&16&&m(e,1)):(e=_l(a),e.c(),m(e,1),e.m(t,null))},i(a){r||(m(e),r=!0)},o(a){d(e),r=!1},d(a){a&&f(t),e&&e.d()}}}function pn(i){let t,r="Loading...";return{c(){t=k("span"),t.textContent=r,this.h()},l(e){t=A(e,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Kt(t)!=="svelte-89gxhc"&&(t.textContent=r),this.h()},h(){G(t,"slot","skeleton"),G(t,"class","text-base-content-muted")},m(e,a){p(e,t,a)},p:Ze,d(e){e&&f(t)}}}function $n(i){let t,r;return t=new fs({props:{data:i[0],$$slots:{skeleton:[pn],empty:[cn],default:[dn,({loaded:e})=>({11:e}),({loaded:e})=>e?2048:0]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,[a]){const l={};a&1&&(l.data=e[0]),a&2334&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}let gn="Value";function vn(i,t,r){let e,{$$slots:a={},$$scope:l}=t,{data:o}=t,{column:s}=t,{agg:u}=t;const c=Re.isQuery(o)?o.hash:void 0;let h=(o==null?void 0:o.hash)===c,{emptySet:n=void 0}=t,{emptyMessage:M=void 0}=t;return i.$$set=F=>{r(10,t=zi(zi({},t),tl(F))),"data"in F&&r(0,o=F.data),"column"in F&&r(5,s=F.column),"agg"in F&&r(6,u=F.agg),"emptySet"in F&&r(1,n=F.emptySet),"emptyMessage"in F&&r(2,M=F.emptyMessage),"$$scope"in F&&r(8,l=F.$$scope)},i.$$.update=()=>{i.$$.dirty&97&&u&&r(0,o=o.groupBy(void 0).agg({[u]:{col:s,as:s}})),i.$$.dirty&1&&r(3,h=(o==null?void 0:o.hash)===c),r(4,e=Object.fromEntries(Object.entries(t).filter(([,F])=>F!==void 0)))},t=tl(t),[o,n,M,h,e,s,u,a,l]}class fr extends Ia{constructor(t){super(),Oa(this,t,vn,$n,Na,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}var Da,Ca,ia,la;class yn{constructor(t,r){Aa(this,Da,gs({}));Aa(this,Ca,Qs());Aa(this,ia);Aa(this,la);ha(this,"subscribe",ur(this,Da).subscribe);ha(this,"setError",t=>ur(this,Da).update(r=>({...r,error:t})));ha(this,"clearError",()=>this.setError(void 0));ha(this,"setConfig",async t=>{this.clearError();try{let{data:r,xMin:e,xMax:a,yMin:l,yMax:o,color:s,areaColor:u,labelColor:c,label:h,labelPosition:n,border:M,borderWidth:F,borderColor:q,activeAppearance:Z}=t;Re.isQuery(r)&&!r.dataLoaded&&await r.fetch();const B=Vi(ur(this,ia));if(typeof B>"u")throw new Error("Reference Area cannot be used outside of a chart");B.swapXY&&([e,a,l,o]=[l,o,e,a]),typeof n>"u"&&(B.swapXY?n="topRight":l&&o&&e&&a?n="topLeft":l||o?n="right":n="top"),M&&typeof F>"u"&&(F=1),c=c??s,u=u??(s?Bs(s).alpha(Z==="dark"?.15:.1).css():void 0),q=q??s;const W=[];if(r){us(r,[e,a,l,o].filter(H=>typeof H<"u"));for(let H=0;H<r.length;H++)W.push([{name:h?r[H][h]??h:void 0,xAxis:e?r[H][e]:void 0,yAxis:l?r[H][l]:void 0},{xAxis:a?r[H][a]:void 0,yAxis:o?r[H][o]:void 0}])}else W.push([{name:h,xAxis:e,yAxis:l},{xAxis:a,yAxis:o}]);let K;const N=Vi(ur(this,la)).series;Array.isArray(N)?K=N.find(ml):N&&(K=ml(N)?N:void 0);const x={evidenceSeriesType:"reference_area",id:ur(this,Ca),type:Vi(ur(this,ia)).chartType==="Bar Chart"?"bar":"line",stack:K==null?void 0:K.stack,animation:!1,silent:!0,markArea:{data:W,emphasis:{disabled:!0},itemStyle:{color:u,opacity:t.opacity,borderWidth:F,borderColor:q,borderType:t.borderType},label:{show:!0,position:bn[n],color:c,padding:t.labelPadding,backgroundColor:t.labelBackgroundColor,borderColor:t.labelBorderColor,borderWidth:t.labelBorderWidth,borderRadius:t.labelBorderRadius,borderType:t.labelBorderType,fontSize:t.fontSize,align:t.align,fontWeight:t.bold?"bold":void 0,fontStyle:t.italic?"italic":void 0}}};ur(this,la).update(H=>{H.series||(H.series=[]),Array.isArray(H.series)||(H.series=[H.series]);const Y=H.series.findIndex(ee=>ee.id===ur(this,Ca));return Y===-1?H.series.push(x):H.series[Y]=x,B.swapXY?Array.isArray(H.yAxis)?H.yAxis.forEach(ee=>{ee.type==="category"&&(ee.axisTick={...ee.axisTick,alignWithLabel:!1})}):H.yAxis&&(H.yAxis.axisTick={...H.yAxis.axisTick,alignWithLabel:!1}):Array.isArray(H.xAxis)?H.xAxis.forEach(ee=>{ee.type==="category"&&(ee.axisTick={...ee.axisTick,alignWithLabel:!1})}):H.xAxis&&(H.xAxis.axisTick={...H.xAxis.axisTick,alignWithLabel:!1}),H})}catch(r){this.setError(String(r.message))}});Xi(this,ia,t),Xi(this,la,r)}}Da=new WeakMap,Ca=new WeakMap,ia=new WeakMap,la=new WeakMap;const bn={topLeft:"insideTopLeft",top:"insideTop",topRight:"insideTopRight",bottomLeft:"insideBottomLeft",bottom:"insideBottom",bottomRight:"insideBottomRight",left:"insideLeft",center:"inside",centre:"inside",right:"insideRight"},ml=i=>i.type==="bar"&&!("evidenceSeriesType"in i);function ul(i){let t,r;const e=i[49].default,a=ls(e,i,i[51],null);return{c(){t=k("div"),a&&a.c(),this.h()},l(l){t=A(l,"DIV",{class:!0});var o=P(t);a&&a.l(o),o.forEach(f),this.h()},h(){G(t,"class","invisible")},m(l,o){p(l,t,o),a&&a.m(t,null),i[50](t),r=!0},p(l,o){a&&a.p&&(!r||o[1]&1048576)&&ss(a,e,l,l[51],r?os(e,l[51],o,null):ns(l[51]),null)},i(l){r||(m(a,l),r=!0)},o(l){d(a,l),r=!1},d(l){l&&f(t),a&&a.d(l),i[50](null)}}}function wn(i){let t,r;return t=new fs({props:{data:i[2],$$slots:{skeleton:[qn],error:[Rn,({loaded:e})=>({55:e}),({loaded:e})=>[0,e?16777216:0]],empty:[En]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&4&&(l.data=e[2]),a[0]&19|a[1]&17825792&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Tn(i){let t,r;return t=new cs({props:{error:i[11].error,height:"50",title:Ji}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&2048&&(l.error=e[11].error),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function En(i){let t,r;return t=new ds({props:{slot:"empty",emptyMessage:i[1],emptySet:i[0],chartType:Ji,isInitial:i[4]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&2&&(l.emptyMessage=e[1]),a[0]&1&&(l.emptySet=e[0]),a[0]&16&&(l.isInitial=e[4]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Rn(i){let t,r;return t=new cs({props:{slot:"error",title:Ji,error:i[55].error.message}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&16777216&&(l.error=e[55].error.message),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function qn(i){let t;return{c(){t=k("div"),this.h()},l(r){t=A(r,"DIV",{slot:!0,class:!0}),P(t).forEach(f),this.h()},h(){G(t,"slot","skeleton"),G(t,"class","hidden")},m(r,e){p(r,t,e)},p:Ze,d(r){r&&f(t)}}}function Sn(i){let t,r,e,a,l,o=i[15].default&&ul(i);const s=[Tn,wn],u=[];function c(h,n){return h[11].error?0:1}return r=c(i),e=u[r]=s[r](i),{c(){o&&o.c(),t=b(),e.c(),a=mr()},l(h){o&&o.l(h),t=y(h),e.l(h),a=mr()},m(h,n){o&&o.m(h,n),p(h,t,n),u[r].m(h,n),p(h,a,n),l=!0},p(h,n){h[15].default?o?(o.p(h,n),n[0]&32768&&m(o,1)):(o=ul(h),o.c(),m(o,1),o.m(t.parentNode,t)):o&&(me(),d(o,1,1,()=>{o=null}),ue());let M=r;r=c(h),r===M?u[r].p(h,n):(me(),d(u[M],1,1,()=>{u[M]=null}),ue(),e=u[r],e?e.p(h,n):(e=u[r]=s[r](h),e.c()),m(e,1),e.m(a.parentNode,a))},i(h){l||(m(o),m(e),l=!0)},o(h){d(o),d(e),l=!1},d(h){h&&(f(t),f(a)),o&&o.d(h),u[r].d(h)}}}let Ji="Reference Area";function hn(i,t,r){let e,a,l,o,s,u,c,h,n,M=Ze,F=()=>(M(),M=Zr(u,O=>r(42,n=O)),u),q,Z=Ze,B=()=>(Z(),Z=Zr(s,O=>r(43,q=O)),s),W,K=Ze,N=()=>(K(),K=Zr(o,O=>r(44,W=O)),o),x,H=Ze,Y=()=>(H(),H=Zr(l,O=>r(45,x=O)),l),ee,V=Ze,I=()=>(V(),V=Zr(a,O=>r(46,ee=O)),a),J,it=Ze,nt=()=>(it(),it=Zr(e,O=>r(47,J=O)),e),lt,Qe;i.$$.on_destroy.push(()=>M()),i.$$.on_destroy.push(()=>Z()),i.$$.on_destroy.push(()=>K()),i.$$.on_destroy.push(()=>H()),i.$$.on_destroy.push(()=>V()),i.$$.on_destroy.push(()=>it());let{$$slots:ot={},$$scope:dt}=t;const _t=Es(ot),{activeAppearance:yt,resolveColor:ie}=ms();ra(i,yt,O=>r(41,h=O));let{emptySet:Ue=void 0}=t,{emptyMessage:ct=void 0}=t,{xMin:qe=void 0}=t,{xMax:st=void 0}=t,{yMin:pt=void 0}=t,{yMax:$t=void 0}=t,{data:et=void 0}=t,{label:Be=void 0}=t,{color:xe="info"}=t,{areaColor:mt=void 0}=t,{opacity:ut=1}=t,{border:vt=!1}=t,{borderType:tt="dashed"}=t,{borderColor:Ie=void 0}=t,{borderWidth:bt=void 0}=t,{labelColor:gt=void 0}=t,{labelPadding:wt=1}=t,{labelPosition:qt=void 0}=t,{labelBackgroundColor:Et=void 0}=t,{labelBorderWidth:Xe=void 0}=t,{labelBorderRadius:Te=void 0}=t,{labelBorderColor:Oe=void 0}=t,{labelBorderType:he=void 0}=t,{fontSize:Le=void 0}=t,{align:$e=void 0}=t,{bold:ge=void 0}=t,{italic:ve=void 0}=t,{preserveWhitespace:Pe=!1}=t,le;const Fe=Re.isQuery(et)?et.hash:void 0,we=Hs();ra(i,we,O=>r(48,lt=O));const re=Us(),oe=new yn(we,re);ra(i,oe,O=>r(11,Qe=O));function Ee(O){Rs[O?"unshift":"push"](()=>{le=O,r(3,le)})}return i.$$set=O=>{"emptySet"in O&&r(0,Ue=O.emptySet),"emptyMessage"in O&&r(1,ct=O.emptyMessage),"xMin"in O&&r(23,qe=O.xMin),"xMax"in O&&r(24,st=O.xMax),"yMin"in O&&r(25,pt=O.yMin),"yMax"in O&&r(26,$t=O.yMax),"data"in O&&r(2,et=O.data),"label"in O&&r(16,Be=O.label),"color"in O&&r(17,xe=O.color),"areaColor"in O&&r(18,mt=O.areaColor),"opacity"in O&&r(27,ut=O.opacity),"border"in O&&r(28,vt=O.border),"borderType"in O&&r(29,tt=O.borderType),"borderColor"in O&&r(19,Ie=O.borderColor),"borderWidth"in O&&r(30,bt=O.borderWidth),"labelColor"in O&&r(20,gt=O.labelColor),"labelPadding"in O&&r(31,wt=O.labelPadding),"labelPosition"in O&&r(32,qt=O.labelPosition),"labelBackgroundColor"in O&&r(21,Et=O.labelBackgroundColor),"labelBorderWidth"in O&&r(33,Xe=O.labelBorderWidth),"labelBorderRadius"in O&&r(34,Te=O.labelBorderRadius),"labelBorderColor"in O&&r(22,Oe=O.labelBorderColor),"labelBorderType"in O&&r(35,he=O.labelBorderType),"fontSize"in O&&r(36,Le=O.fontSize),"align"in O&&r(37,$e=O.align),"bold"in O&&r(38,ge=O.bold),"italic"in O&&r(39,ve=O.italic),"preserveWhitespace"in O&&r(40,Pe=O.preserveWhitespace),"$$scope"in O&&r(51,dt=O.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&131072&&r(17,xe=ea("ReferenceArea","color",xe)),i.$$.dirty[0]&131072&&nt(r(10,e=ie(xe))),i.$$.dirty[0]&262144&&r(18,mt=ea("ReferenceArea","areaColor",mt)),i.$$.dirty[0]&262144&&I(r(9,a=ie(mt))),i.$$.dirty[0]&524288&&r(19,Ie=ea("ReferenceArea","borderColor",Ie)),i.$$.dirty[0]&524288&&Y(r(8,l=ie(Ie))),i.$$.dirty[0]&1048576&&r(20,gt=ea("ReferenceArea","labelColor",gt)),i.$$.dirty[0]&1048576&&N(r(7,o=ie(gt))),i.$$.dirty[0]&2097152&&r(21,Et=ea("ReferenceArea","labelBackgroundColor",Et)),i.$$.dirty[0]&2097152&&B(r(6,s=ie(Et))),i.$$.dirty[0]&4194304&&r(22,Oe=ea("ReferenceArea","labelBorderColor",Oe)),i.$$.dirty[0]&4194304&&F(r(5,u=ie(Oe))),i.$$.dirty[0]&8|i.$$.dirty[1]&512&&le!=null&&le.textContent&&(Pe?r(16,Be=le.textContent):r(16,Be=le.textContent.split(`
`).map(O=>O.trim()).join(`
`))),i.$$.dirty[0]&4&&r(4,c=Re.isQuery(et)&&et.hash===Fe),i.$$.dirty[0]&2139160580|i.$$.dirty[1]&261631&&oe.setConfig({xMin:qe,xMax:st,yMin:pt,yMax:$t,data:et,label:Be,color:J,areaColor:ee,opacity:ta(ut),border:Fa(vt),borderType:tt,borderColor:x,borderWidth:ta(bt),labelColor:W,labelPadding:ta(wt),labelPosition:qt,labelBackgroundColor:q,labelBorderColor:n,labelBorderWidth:ta(Xe),labelBorderRadius:ta(Te),labelBorderType:he,fontSize:ta(Le),align:$e,bold:Fa(ge),italic:Fa(ve),activeAppearance:h})},[Ue,ct,et,le,c,u,s,o,l,a,e,Qe,yt,we,oe,_t,Be,xe,mt,Ie,gt,Et,Oe,qe,st,pt,$t,ut,vt,tt,bt,wt,qt,Xe,Te,he,Le,$e,ge,ve,Pe,h,n,q,W,x,ee,J,lt,ot,Ee,dt]}class fl extends Ia{constructor(t){super(),Oa(this,t,hn,Sn,Na,{emptySet:0,emptyMessage:1,xMin:23,xMax:24,yMin:25,yMax:26,data:2,label:16,color:17,areaColor:18,opacity:27,border:28,borderType:29,borderColor:19,borderWidth:30,labelColor:20,labelPadding:31,labelPosition:32,labelBackgroundColor:21,labelBorderWidth:33,labelBorderRadius:34,labelBorderColor:22,labelBorderType:35,fontSize:36,align:37,bold:38,italic:39,preserveWhitespace:40},null,[-1,-1])}}function dl(i,t,r){const e=i.slice();return e[263]=t[r],e}function An(i){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Ze,p:Ze,d:Ze}}function kn(i){let t,r,e,a,l;return document.title=t=At.title,{c(){r=b(),e=k("meta"),a=b(),l=k("meta"),this.h()},l(o){r=y(o),e=A(o,"META",{property:!0,content:!0}),a=y(o),l=A(o,"META",{name:!0,content:!0}),this.h()},h(){var o,s;G(e,"property","og:title"),G(e,"content",((o=At.og)==null?void 0:o.title)??At.title),G(l,"name","twitter:title"),G(l,"content",((s=At.og)==null?void 0:s.title)??At.title)},m(o,s){p(o,r,s),p(o,e,s),p(o,a,s),p(o,l,s)},p(o,s){s&0&&t!==(t=At.title)&&(document.title=t)},d(o){o&&(f(r),f(e),f(a),f(l))}}}function Dn(i){var l,o;let t,r,e=(At.description||((l=At.og)==null?void 0:l.description))&&Cn(),a=((o=At.og)==null?void 0:o.image)&&Nn();return{c(){e&&e.c(),t=b(),a&&a.c(),r=mr()},l(s){e&&e.l(s),t=y(s),a&&a.l(s),r=mr()},m(s,u){e&&e.m(s,u),p(s,t,u),a&&a.m(s,u),p(s,r,u)},p(s,u){var c,h;(At.description||(c=At.og)!=null&&c.description)&&e.p(s,u),(h=At.og)!=null&&h.image&&a.p(s,u)},d(s){s&&(f(t),f(r)),e&&e.d(s),a&&a.d(s)}}}function Cn(i){let t,r,e,a,l;return{c(){t=k("meta"),r=b(),e=k("meta"),a=b(),l=k("meta"),this.h()},l(o){t=A(o,"META",{name:!0,content:!0}),r=y(o),e=A(o,"META",{property:!0,content:!0}),a=y(o),l=A(o,"META",{name:!0,content:!0}),this.h()},h(){var o,s,u;G(t,"name","description"),G(t,"content",At.description??((o=At.og)==null?void 0:o.description)),G(e,"property","og:description"),G(e,"content",((s=At.og)==null?void 0:s.description)??At.description),G(l,"name","twitter:description"),G(l,"content",((u=At.og)==null?void 0:u.description)??At.description)},m(o,s){p(o,t,s),p(o,r,s),p(o,e,s),p(o,a,s),p(o,l,s)},p:Ze,d(o){o&&(f(t),f(r),f(e),f(a),f(l))}}}function Nn(i){let t,r,e;return{c(){t=k("meta"),r=b(),e=k("meta"),this.h()},l(a){t=A(a,"META",{property:!0,content:!0}),r=y(a),e=A(a,"META",{name:!0,content:!0}),this.h()},h(){var a,l;G(t,"property","og:image"),G(t,"content",il((a=At.og)==null?void 0:a.image)),G(e,"name","twitter:image"),G(e,"content",il((l=At.og)==null?void 0:l.image))},m(a,l){p(a,t,l),p(a,r,l),p(a,e,l)},p:Ze,d(a){a&&(f(t),f(r),f(e))}}}function In(i){let t,r,e,a,l,o,s,u;return t=new z({props:{valueLabel:"Q1",value:"1"}}),e=new z({props:{valueLabel:"Q2",value:"2"}}),l=new z({props:{valueLabel:"Q3",value:"3"}}),s=new z({props:{valueLabel:"Q4",value:"4"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment)},l(c){E(t.$$.fragment,c),r=y(c),E(e.$$.fragment,c),a=y(c),E(l.$$.fragment,c),o=y(c),E(s.$$.fragment,c)},m(c,h){T(t,c,h),p(c,r,h),T(e,c,h),p(c,a,h),T(l,c,h),p(c,o,h),T(s,c,h),u=!0},p:Ze,i(c){u||(m(t.$$.fragment,c),m(e.$$.fragment,c),m(l.$$.fragment,c),m(s.$$.fragment,c),u=!0)},o(c){d(t.$$.fragment,c),d(e.$$.fragment,c),d(l.$$.fragment,c),d(s.$$.fragment,c),u=!1},d(c){c&&(f(r),f(a),f(o)),w(t,c),w(e,c),w(l,c),w(s,c)}}}function On(i){let t,r,e,a,l,o,s,u,c,h,n,M;return t=new z({props:{value:"2020"}}),e=new z({props:{value:"2021"}}),l=new z({props:{value:"2022"}}),s=new z({props:{value:"2023"}}),c=new z({props:{value:"2024"}}),n=new z({props:{value:"2025"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment),u=b(),R(c.$$.fragment),h=b(),R(n.$$.fragment)},l(F){E(t.$$.fragment,F),r=y(F),E(e.$$.fragment,F),a=y(F),E(l.$$.fragment,F),o=y(F),E(s.$$.fragment,F),u=y(F),E(c.$$.fragment,F),h=y(F),E(n.$$.fragment,F)},m(F,q){T(t,F,q),p(F,r,q),T(e,F,q),p(F,a,q),T(l,F,q),p(F,o,q),T(s,F,q),p(F,u,q),T(c,F,q),p(F,h,q),T(n,F,q),M=!0},p:Ze,i(F){M||(m(t.$$.fragment,F),m(e.$$.fragment,F),m(l.$$.fragment,F),m(s.$$.fragment,F),m(c.$$.fragment,F),m(n.$$.fragment,F),M=!0)},o(F){d(t.$$.fragment,F),d(e.$$.fragment,F),d(l.$$.fragment,F),d(s.$$.fragment,F),d(c.$$.fragment,F),d(n.$$.fragment,F),M=!1},d(F){F&&(f(r),f(a),f(o),f(u),f(h)),w(t,F),w(e,F),w(l,F),w(s,F),w(c,F),w(n,F)}}}function Ln(i){let t,r,e,a,l,o,s,u;return t=new z({props:{valueLabel:"Exec",value:"exec"}}),e=new z({props:{valueLabel:"Project Management",value:"pm"}}),l=new z({props:{valueLabel:"Team Lead",value:"team_lead"}}),s=new z({props:{valueLabel:"Dev",value:"developer"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment)},l(c){E(t.$$.fragment,c),r=y(c),E(e.$$.fragment,c),a=y(c),E(l.$$.fragment,c),o=y(c),E(s.$$.fragment,c)},m(c,h){T(t,c,h),p(c,r,h),T(e,c,h),p(c,a,h),T(l,c,h),p(c,o,h),T(s,c,h),u=!0},p:Ze,i(c){u||(m(t.$$.fragment,c),m(e.$$.fragment,c),m(l.$$.fragment,c),m(s.$$.fragment,c),u=!0)},o(c){d(t.$$.fragment,c),d(e.$$.fragment,c),d(l.$$.fragment,c),d(s.$$.fragment,c),u=!1},d(c){c&&(f(r),f(a),f(o)),w(t,c),w(e,c),w(l,c),w(s,c)}}}function Fn(i){let t,r,e,a,l,o,s,u;return t=new z({props:{valueLabel:"Activity",value:"activity",default:!0}}),e=new z({props:{valueLabel:"Industrial Area",value:"industrial"}}),l=new z({props:{valueLabel:"Technology Area",value:"technology"}}),s=new z({props:{valueLabel:"Programme",value:"owner"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment)},l(c){E(t.$$.fragment,c),r=y(c),E(e.$$.fragment,c),a=y(c),E(l.$$.fragment,c),o=y(c),E(s.$$.fragment,c)},m(c,h){T(t,c,h),p(c,r,h),T(e,c,h),p(c,a,h),T(l,c,h),p(c,o,h),T(s,c,h),u=!0},p:Ze,i(c){u||(m(t.$$.fragment,c),m(e.$$.fragment,c),m(l.$$.fragment,c),m(s.$$.fragment,c),u=!0)},o(c){d(t.$$.fragment,c),d(e.$$.fragment,c),d(l.$$.fragment,c),d(s.$$.fragment,c),u=!1},d(c){c&&(f(r),f(a),f(o)),w(t,c),w(e,c),w(l,c),w(s,c)}}}function Mn(i){let t,r,e,a,l,o,s,u,c,h,n,M,F,q,Z,B,W,K,N,x;return o=new Xt({props:{name:"label_type",defaultValue:"activity",title:"Breakdown:",$$slots:{default:[Fn]},$$scope:{ctx:i}}}),u=new Ba({props:{data:i[34],x:"week_start",y:"count",yAxisTitle:"PRS by week",series:"label",labels:"true",height:"2000"}}),{c(){t=k("table"),r=k("table"),e=k("tr"),a=k("td"),l=k("div"),R(o.$$.fragment),s=b(),R(u.$$.fragment),c=b(),h=k("br"),n=k("br"),M=k("br"),F=k("br"),q=k("br"),Z=k("br"),B=k("br"),W=k("br"),K=k("br"),N=k("br"),this.h()},l(H){t=A(H,"TABLE",{style:!0});var Y=P(t);r=A(Y,"TABLE",{style:!0});var ee=P(r);e=A(ee,"TR",{});var V=P(e);a=A(V,"TD",{style:!0});var I=P(a);l=A(I,"DIV",{style:!0});var J=P(l);E(o.$$.fragment,J),J.forEach(f),I.forEach(f),V.forEach(f),ee.forEach(f),s=y(Y),E(u.$$.fragment,Y),c=y(Y),h=A(Y,"BR",{}),n=A(Y,"BR",{}),M=A(Y,"BR",{}),F=A(Y,"BR",{}),q=A(Y,"BR",{}),Z=A(Y,"BR",{}),B=A(Y,"BR",{}),W=A(Y,"BR",{}),K=A(Y,"BR",{}),N=A(Y,"BR",{}),Y.forEach(f),this.h()},h(){D(l,"display","inline-block"),D(a,"text-align","center"),D(a,"padding","12px"),D(r,"width","100%"),D(r,"border-collapse","collapse"),D(t,"width","100%"),D(t,"border-collapse","collapse")},m(H,Y){p(H,t,Y),S(t,r),S(r,e),S(e,a),S(a,l),T(o,l,null),S(t,s),T(u,t,null),S(t,c),S(t,h),S(t,n),S(t,M),S(t,F),S(t,q),S(t,Z),S(t,B),S(t,W),S(t,K),S(t,N),x=!0},p(H,Y){const ee={};Y[8]&262144&&(ee.$$scope={dirty:Y,ctx:H}),o.$set(ee);const V={};Y[1]&8&&(V.data=H[34]),u.$set(V)},i(H){x||(m(o.$$.fragment,H),m(u.$$.fragment,H),x=!0)},o(H){d(o.$$.fragment,H),d(u.$$.fragment,H),x=!1},d(H){H&&f(t),w(o),w(u)}}}function Bn(i){let t,r,e,a,l,o;return t=new z({props:{valueLabel:"Industrial Area",value:"industrial"}}),e=new z({props:{valueLabel:"Technology Area",value:"technology"}}),l=new z({props:{valueLabel:"Activity",value:"activity"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p:Ze,i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function Hn(i){let t,r,e,a,l,o;return t=new z({props:{valueLabel:"Industrial Area",value:"industrial"}}),e=new z({props:{valueLabel:"Tech Area",value:"technology"}}),l=new z({props:{valueLabel:"Activity",value:"activity"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p:Ze,i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function Un(i){let t,r,e,a,l,o;return t=new Xt({props:{name:"x_axis",title:"X Axis",defaultValue:"industrial",$$slots:{default:[Bn]},$$scope:{ctx:i}}}),e=new Xt({props:{name:"y_axis",title:"Y Axis",defaultValue:"technology",$$slots:{default:[Hn]},$$scope:{ctx:i}}}),l=new vs({props:{data:i[35],x:"xval",y:"yval",xLabelRotation:"-45",title:`PRs Merged ${i[0].x_axis.label} and ${i[0].y_axis.label}`,value:"totals",chartAreaHeight:"850"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p(s,u){const c={};u[8]&262144&&(c.$$scope={dirty:u,ctx:s}),t.$set(c);const h={};u[8]&262144&&(h.$$scope={dirty:u,ctx:s}),e.$set(h);const n={};u[1]&16&&(n.data=s[35]),u[0]&1&&(n.title=`PRs Merged ${s[0].x_axis.label} and ${s[0].y_axis.label}`),l.$set(n)},i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function Pn(i){let t,r='<a href="#tbd-roadmapoverviewselecteddimensions">TBD roadmapOverviewSelectedDimensions</a>';return{c(){t=k("h1"),t.innerHTML=r,this.h()},l(e){t=A(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Kt(t)!=="svelte-ippt17"&&(t.innerHTML=r),this.h()},h(){G(t,"class","markdown"),G(t,"id","tbd-roadmapoverviewselecteddimensions")},m(e,a){p(e,t,a)},p:Ze,d(e){e&&f(t)}}}function Wn(i){let t,r,e,a,l,o;return t=new aa({props:{title:" Q"+i[0].quarter.value+" "+i[0].year.value+" Weekly Merged Code File Changes",$$slots:{default:[Mn]},$$scope:{ctx:i}}}),e=new aa({props:{title:" Q"+i[0].quarter.value+" "+i[0].year.value+"  Merged Code Files Changes Heatmaps",$$slots:{default:[Un]},$$scope:{ctx:i}}}),l=new aa({props:{title:" Q"+i[0].quarter.value+" "+i[0].year.value+"  Plan vs Activity",$$slots:{default:[Pn]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p(s,u){const c={};u[0]&1&&(c.title=" Q"+s[0].quarter.value+" "+s[0].year.value+" Weekly Merged Code File Changes"),u[1]&8|u[8]&262144&&(c.$$scope={dirty:u,ctx:s}),t.$set(c);const h={};u[0]&1&&(h.title=" Q"+s[0].quarter.value+" "+s[0].year.value+"  Merged Code Files Changes Heatmaps"),u[0]&1|u[1]&16|u[8]&262144&&(h.$$scope={dirty:u,ctx:s}),e.$set(h);const n={};u[0]&1&&(n.title=" Q"+s[0].quarter.value+" "+s[0].year.value+"  Plan vs Activity"),u[8]&262144&&(n.$$scope={dirty:u,ctx:s}),l.$set(n)},i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function Yn(i){let t,r,e,a='<a href="#platform-level-delivery-summary--analysis">Platform Level Delivery: Summary &amp; Analysis</a>',l,o,s,u,c,h=`<tr><th style="text-align:center; padding:12px; font-size:22px; font-weight:600;"><hr style="border: 2px light grey;"/>
                  Quaterly Delivery Prime Record Overview</th></tr>`,n,M,F,q,Z,B,W,K,N,x='<a href="#platform-quaterly-delivery-summaries-by-audience">Platform Quaterly Delivery Summaries by Audience</a>',H,Y,ee,V,I,J,it,nt,lt,Qe,ot,dt,_t,yt,ie,Ue,ct,qe,st=i[0].audience.value+"",pt,$t,et=i[0].quarter.value+"",Be,xe,mt=i[0].year.value+"",ut,vt,tt,Ie,bt,gt,wt,qt,Et,Xe,Te,Oe,he=i[0].quarter.value+"",Le,$e,ge=i[0].year.value+"",ve,Pe,le,Fe,we,re,oe,Ee,O,se,fe,ne,Ve="",He,de,_e,Ge,ae,Q,rt,Ae=i[0].quarter.value+"",Je,Se,ye,Ke,ze,at,ke=i[0].quarter.value+"",Me,De,be,We,X,g,C=i[0].quarter.value+"",Ce,_,v,Ct,Vt,Lt,St=i[0].quarter.value+"",Ft,Gt,Rt,jt,Mt,Tt,Ye,Ne;return Z=new Ba({props:{data:i[27],x:"quarter_start",y:"label_count",y2:"pr_count",y2SeriesType:"line",colorPalette:["silver","black"]}}),Qe=new Xt({props:{name:"quarter",defaultValue:"3",title:"Quarter:",$$slots:{default:[In]},$$scope:{ctx:i}}}),_t=new Xt({props:{name:"year",defaultValue:"2024",title:"Year:",$$slots:{default:[On]},$$scope:{ctx:i}}}),Ue=new Xt({props:{name:"audience",title:"Perspective of:",$$slots:{default:[Ln]},$$scope:{ctx:i}}}),Ie=new ps({props:{id:"01K2MD0XJBGMKCE7KXN9F25T3X",params:{quarter:parseInt(i[0].quarter.value,10),year:parseInt(i[0].year.value,10),audience:i[0].audience.value,output_format:"markdown"},content_desc:"summary"}}),_e=new xi({props:{data:i[31],name:"pr_dimensions",limit:"15",multiple:!0}}),ye=new fr({props:{data:i[29],column:"pr_count",row:"0",fmt:"num0"}}),be=new fr({props:{data:i[29],column:"label_count",row:"0",fmt:"num0"}}),v=new fr({props:{data:i[30],column:"pr_count",row:"0",fmt:"num0"}}),Rt=new fr({props:{data:i[30],column:"label_count",row:"0",fmt:"num0"}}),Ye=new $s({props:{single:!0,$$slots:{default:[Wn]},$$scope:{ctx:i}}}),{c(){t=k("hr"),r=b(),e=k("h1"),e.innerHTML=a,l=b(),o=k("hr"),s=b(),u=k("table"),c=k("thead"),c.innerHTML=h,n=b(),M=k("tbody"),F=k("tr"),q=k("td"),R(Z.$$.fragment),B=b(),W=k("hr"),K=b(),N=k("h2"),N.innerHTML=x,H=b(),Y=k("hr"),ee=b(),V=k("table"),I=k("tbody"),J=k("tr"),it=k("td"),nt=k("div"),lt=k("span"),R(Qe.$$.fragment),ot=b(),dt=k("span"),R(_t.$$.fragment),yt=b(),ie=k("span"),R(Ue.$$.fragment),ct=b(),qe=k("div"),pt=pe(st),$t=pe(" Summary Q"),Be=pe(et),xe=b(),ut=pe(mt),vt=b(),tt=k("div"),R(Ie.$$.fragment),bt=b(),gt=k("hr"),wt=b(),qt=k("br"),Et=b(),Xe=k("h1"),Te=k("a"),Oe=pe("Q"),Le=pe(he),$e=b(),ve=pe(ge),Pe=pe(" Software Delivery Overview"),le=b(),Fe=k("hr"),we=b(),re=k("table"),oe=k("tbody"),Ee=k("tr"),O=k("td"),se=k("table"),fe=k("tr"),ne=k("td"),ne.innerHTML=Ve,He=b(),de=k("td"),R(_e.$$.fragment),Ge=b(),ae=k("tr"),Q=k("th"),rt=pe("Q"),Je=pe(Ae),Se=pe(" Merged PRs: "),R(ye.$$.fragment),Ke=b(),ze=k("br"),at=pe(`
                Q`),Me=pe(ke),De=pe(" PR Lables: "),R(be.$$.fragment),We=b(),X=k("th"),g=pe("Q"),Ce=pe(C),_=pe(" Filtered Merged PR: "),R(v.$$.fragment),Ct=b(),Vt=k("br"),Lt=pe(`
                Q`),Ft=pe(St),Gt=pe(" Filtered PR Lables: "),R(Rt.$$.fragment),jt=b(),Mt=k("br"),Tt=b(),R(Ye.$$.fragment),this.h()},l($){t=A($,"HR",{style:!0}),r=y($),e=A($,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Kt(e)!=="svelte-1vhwi3f"&&(e.innerHTML=a),l=y($),o=A($,"HR",{style:!0}),s=y($),u=A($,"TABLE",{style:!0});var L=P(u);c=A(L,"THEAD",{"data-svelte-h":!0}),Kt(c)!=="svelte-1q2x6a"&&(c.innerHTML=h),n=y(L),M=A(L,"TBODY",{});var Nt=P(M);F=A(Nt,"TR",{});var It=P(F);q=A(It,"TD",{style:!0});var ht=P(q);E(Z.$$.fragment,ht),B=y(ht),W=A(ht,"HR",{style:!0}),ht.forEach(f),It.forEach(f),Nt.forEach(f),L.forEach(f),K=y($),N=A($,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Kt(N)!=="svelte-sx4g17"&&(N.innerHTML=x),H=y($),Y=A($,"HR",{style:!0}),ee=y($),V=A($,"TABLE",{style:!0});var Ut=P(V);I=A(Ut,"TBODY",{});var Pt=P(I);J=A(Pt,"TR",{});var Qt=P(J);it=A(Qt,"TD",{style:!0});var Wt=P(it);nt=A(Wt,"DIV",{style:!0});var kt=P(nt);lt=A(kt,"SPAN",{style:!0});var Bt=P(lt);E(Qe.$$.fragment,Bt),Bt.forEach(f),ot=y(kt),dt=A(kt,"SPAN",{style:!0});var zt=P(dt);E(_t.$$.fragment,zt),zt.forEach(f),yt=y(kt),ie=A(kt,"SPAN",{style:!0});var xt=P(ie);E(Ue.$$.fragment,xt),xt.forEach(f),kt.forEach(f),Wt.forEach(f),Qt.forEach(f),Pt.forEach(f),Ut.forEach(f),ct=y($),qe=A($,"DIV",{style:!0});var Dt=P(qe);pt=ce(Dt,st),$t=ce(Dt," Summary Q"),Be=ce(Dt,et),xe=y(Dt),ut=ce(Dt,mt),Dt.forEach(f),vt=y($),tt=A($,"DIV",{style:!0});var tr=P(tt);E(Ie.$$.fragment,tr),tr.forEach(f),bt=y($),gt=A($,"HR",{style:!0}),wt=y($),qt=A($,"BR",{}),Et=y($),Xe=A($,"H1",{class:!0,id:!0});var Zt=P(Xe);Te=A(Zt,"A",{href:!0});var Jt=P(Te);Oe=ce(Jt,"Q"),Le=ce(Jt,he),$e=y(Jt),ve=ce(Jt,ge),Pe=ce(Jt," Software Delivery Overview"),Jt.forEach(f),Zt.forEach(f),le=y($),Fe=A($,"HR",{style:!0}),we=y($),re=A($,"TABLE",{style:!0});var rr=P(re);oe=A(rr,"TBODY",{});var sr=P(oe);Ee=A(sr,"TR",{});var nr=P(Ee);O=A(nr,"TD",{colspan:!0,style:!0});var ar=P(O);se=A(ar,"TABLE",{style:!0});var ir=P(se);fe=A(ir,"TR",{});var lr=P(fe);ne=A(lr,"TD",{style:!0,"data-svelte-h":!0}),Kt(ne)!=="svelte-15pl43j"&&(ne.innerHTML=Ve),He=y(lr),de=A(lr,"TD",{style:!0});var or=P(de);E(_e.$$.fragment,or),or.forEach(f),lr.forEach(f),ir.forEach(f),ar.forEach(f),nr.forEach(f),Ge=y(sr),ae=A(sr,"TR",{style:!0});var _r=P(ae);Q=A(_r,"TH",{style:!0});var Yt=P(Q);rt=ce(Yt,"Q"),Je=ce(Yt,Ae),Se=ce(Yt," Merged PRs: "),E(ye.$$.fragment,Yt),Ke=y(Yt),ze=A(Yt,"BR",{}),at=ce(Yt,`
                Q`),Me=ce(Yt,ke),De=ce(Yt," PR Lables: "),E(be.$$.fragment,Yt),Yt.forEach(f),We=y(_r),X=A(_r,"TH",{style:!0});var ft=P(X);g=ce(ft,"Q"),Ce=ce(ft,C),_=ce(ft," Filtered Merged PR: "),E(v.$$.fragment,ft),Ct=y(ft),Vt=A(ft,"BR",{}),Lt=ce(ft,`
                Q`),Ft=ce(ft,St),Gt=ce(ft," Filtered PR Lables: "),E(Rt.$$.fragment,ft),jt=y(ft),Mt=A(ft,"BR",{}),ft.forEach(f),_r.forEach(f),sr.forEach(f),rr.forEach(f),Tt=y($),E(Ye.$$.fragment,$),this.h()},h(){D(t,"border","3px solid black"),G(e,"class","markdown"),G(e,"id","platform-level-delivery-summary--analysis"),D(o,"border","4px solid black"),D(W,"height","2px"),D(W,"background-color","#d3d3d3"),D(W,"border","none"),D(W,"margin","8px 0 0 0"),D(q,"padding","12px"),D(q,"text-align","center"),D(u,"width","100%"),D(u,"border-collapse","collapse"),G(N,"class","markdown"),G(N,"id","platform-quaterly-delivery-summaries-by-audience"),D(Y,"border","2px solid black"),D(lt,"display","inline-block"),D(lt,"margin","0 8px 8px 0"),D(dt,"display","inline-block"),D(dt,"margin","0 8px 8px 0"),D(ie,"display","inline-block"),D(ie,"margin","0 0 8px 0"),D(nt,"display","inline-block"),D(nt,"text-align","left"),D(it,"padding","12px"),D(it,"text-align","center"),D(V,"width","100%"),D(V,"border-collapse","collapse"),D(V,"table-layout","fixed"),D(qe,"font-size","18px"),D(qe,"font-weight","bold"),D(tt,"font-size","14px"),D(gt,"border","2px solid black"),G(Te,"href","#qinputsquartervalue-inputsyearvalue-software-delivery-overview"),G(Xe,"class","markdown"),G(Xe,"id","qinputsquartervalue-inputsyearvalue-software-delivery-overview"),D(Fe,"border","2px solid black"),D(ne,"width","10%"),D(ne,"padding","12px"),D(de,"width","90%"),D(de,"padding","12px"),D(de,"text-align","center"),D(se,"width","100%"),D(se,"border-collapse","collapse"),D(se,"table-layout","fixed"),G(O,"colspan","2"),D(O,"padding","0"),D(Q,"width","50%"),D(Q,"text-align","center"),D(Q,"border","1px solid #ccc"),D(Q,"padding","10px"),D(Q,"font-size","0.75rem"),D(Q,"height","25px"),D(X,"width","50%"),D(X,"text-align","center"),D(X,"border","1px solid #ccc"),D(X,"padding","10px"),D(X,"font-size","0.75rem"),D(ae,"background-color","#f0f0f0"),D(re,"border-collapse","collapse"),D(re,"width","100%"),D(re,"table-layout","fixed")},m($,L){p($,t,L),p($,r,L),p($,e,L),p($,l,L),p($,o,L),p($,s,L),p($,u,L),S(u,c),S(u,n),S(u,M),S(M,F),S(F,q),T(Z,q,null),S(q,B),S(q,W),p($,K,L),p($,N,L),p($,H,L),p($,Y,L),p($,ee,L),p($,V,L),S(V,I),S(I,J),S(J,it),S(it,nt),S(nt,lt),T(Qe,lt,null),S(nt,ot),S(nt,dt),T(_t,dt,null),S(nt,yt),S(nt,ie),T(Ue,ie,null),p($,ct,L),p($,qe,L),S(qe,pt),S(qe,$t),S(qe,Be),S(qe,xe),S(qe,ut),p($,vt,L),p($,tt,L),T(Ie,tt,null),p($,bt,L),p($,gt,L),p($,wt,L),p($,qt,L),p($,Et,L),p($,Xe,L),S(Xe,Te),S(Te,Oe),S(Te,Le),S(Te,$e),S(Te,ve),S(Te,Pe),p($,le,L),p($,Fe,L),p($,we,L),p($,re,L),S(re,oe),S(oe,Ee),S(Ee,O),S(O,se),S(se,fe),S(fe,ne),S(fe,He),S(fe,de),T(_e,de,null),S(oe,Ge),S(oe,ae),S(ae,Q),S(Q,rt),S(Q,Je),S(Q,Se),T(ye,Q,null),S(Q,Ke),S(Q,ze),S(Q,at),S(Q,Me),S(Q,De),T(be,Q,null),S(ae,We),S(ae,X),S(X,g),S(X,Ce),S(X,_),T(v,X,null),S(X,Ct),S(X,Vt),S(X,Lt),S(X,Ft),S(X,Gt),T(Rt,X,null),S(X,jt),S(X,Mt),p($,Tt,L),T(Ye,$,L),Ne=!0},p($,L){const Nt={};L[0]&134217728&&(Nt.data=$[27]),Z.$set(Nt);const It={};L[8]&262144&&(It.$$scope={dirty:L,ctx:$}),Qe.$set(It);const ht={};L[8]&262144&&(ht.$$scope={dirty:L,ctx:$}),_t.$set(ht);const Ut={};L[8]&262144&&(Ut.$$scope={dirty:L,ctx:$}),Ue.$set(Ut),(!Ne||L[0]&1)&&st!==(st=$[0].audience.value+"")&&Ot(pt,st),(!Ne||L[0]&1)&&et!==(et=$[0].quarter.value+"")&&Ot(Be,et),(!Ne||L[0]&1)&&mt!==(mt=$[0].year.value+"")&&Ot(ut,mt);const Pt={};L[0]&1&&(Pt.params={quarter:parseInt($[0].quarter.value,10),year:parseInt($[0].year.value,10),audience:$[0].audience.value,output_format:"markdown"}),Ie.$set(Pt),(!Ne||L[0]&1)&&he!==(he=$[0].quarter.value+"")&&Ot(Le,he),(!Ne||L[0]&1)&&ge!==(ge=$[0].year.value+"")&&Ot(ve,ge);const Qt={};L[1]&1&&(Qt.data=$[31]),_e.$set(Qt),(!Ne||L[0]&1)&&Ae!==(Ae=$[0].quarter.value+"")&&Ot(Je,Ae);const Wt={};L[0]&536870912&&(Wt.data=$[29]),ye.$set(Wt),(!Ne||L[0]&1)&&ke!==(ke=$[0].quarter.value+"")&&Ot(Me,ke);const kt={};L[0]&536870912&&(kt.data=$[29]),be.$set(kt),(!Ne||L[0]&1)&&C!==(C=$[0].quarter.value+"")&&Ot(Ce,C);const Bt={};L[0]&1073741824&&(Bt.data=$[30]),v.$set(Bt),(!Ne||L[0]&1)&&St!==(St=$[0].quarter.value+"")&&Ot(Ft,St);const zt={};L[0]&1073741824&&(zt.data=$[30]),Rt.$set(zt);const xt={};L[0]&1|L[1]&24|L[8]&262144&&(xt.$$scope={dirty:L,ctx:$}),Ye.$set(xt)},i($){Ne||(m(Z.$$.fragment,$),m(Qe.$$.fragment,$),m(_t.$$.fragment,$),m(Ue.$$.fragment,$),m(Ie.$$.fragment,$),m(_e.$$.fragment,$),m(ye.$$.fragment,$),m(be.$$.fragment,$),m(v.$$.fragment,$),m(Rt.$$.fragment,$),m(Ye.$$.fragment,$),Ne=!0)},o($){d(Z.$$.fragment,$),d(Qe.$$.fragment,$),d(_t.$$.fragment,$),d(Ue.$$.fragment,$),d(Ie.$$.fragment,$),d(_e.$$.fragment,$),d(ye.$$.fragment,$),d(be.$$.fragment,$),d(v.$$.fragment,$),d(Rt.$$.fragment,$),d(Ye.$$.fragment,$),Ne=!1},d($){$&&(f(t),f(r),f(e),f(l),f(o),f(s),f(u),f(K),f(N),f(H),f(Y),f(ee),f(V),f(ct),f(qe),f(vt),f(tt),f(bt),f(gt),f(wt),f(qt),f(Et),f(Xe),f(le),f(Fe),f(we),f(re),f(Tt)),w(Z),w(Qe),w(_t),w(Ue),w(Ie),w(_e),w(ye),w(be),w(v),w(Rt),w(Ye,$)}}}function jn(i){let t,r,e,a,l;return t=new z({props:{valueLabel:"Executive",value:"exec"}}),r=new z({props:{valueLabel:"Project Management",value:"pm"}}),e=new z({props:{valueLabel:"Team Lead",value:"team_lead"}}),a=new z({props:{valueLabel:"Dev",value:"developer"}}),{c(){R(t.$$.fragment),R(r.$$.fragment),R(e.$$.fragment),R(a.$$.fragment)},l(o){E(t.$$.fragment,o),E(r.$$.fragment,o),E(e.$$.fragment,o),E(a.$$.fragment,o)},m(o,s){T(t,o,s),T(r,o,s),T(e,o,s),T(a,o,s),l=!0},p:Ze,i(o){l||(m(t.$$.fragment,o),m(r.$$.fragment,o),m(e.$$.fragment,o),m(a.$$.fragment,o),l=!0)},o(o){d(t.$$.fragment,o),d(r.$$.fragment,o),d(e.$$.fragment,o),d(a.$$.fragment,o),l=!1},d(o){w(t,o),w(r,o),w(e,o),w(a,o)}}}function Qn(i){let t,r,e,a,l,o,s;return t=new z({props:{value:"2020"}}),r=new z({props:{value:"2021"}}),e=new z({props:{value:"2022"}}),a=new z({props:{value:"2023"}}),l=new z({props:{value:"2024"}}),o=new z({props:{value:"2025"}}),{c(){R(t.$$.fragment),R(r.$$.fragment),R(e.$$.fragment),R(a.$$.fragment),R(l.$$.fragment),R(o.$$.fragment)},l(u){E(t.$$.fragment,u),E(r.$$.fragment,u),E(e.$$.fragment,u),E(a.$$.fragment,u),E(l.$$.fragment,u),E(o.$$.fragment,u)},m(u,c){T(t,u,c),T(r,u,c),T(e,u,c),T(a,u,c),T(l,u,c),T(o,u,c),s=!0},p:Ze,i(u){s||(m(t.$$.fragment,u),m(r.$$.fragment,u),m(e.$$.fragment,u),m(a.$$.fragment,u),m(l.$$.fragment,u),m(o.$$.fragment,u),s=!0)},o(u){d(t.$$.fragment,u),d(r.$$.fragment,u),d(e.$$.fragment,u),d(a.$$.fragment,u),d(l.$$.fragment,u),d(o.$$.fragment,u),s=!1},d(u){w(t,u),w(r,u),w(e,u),w(a,u),w(l,u),w(o,u)}}}function Xn(i){let t,r,e;return t=new z({props:{valueLabel:"Weekly",value:"week"}}),r=new z({props:{valueLabel:"Quarterly",value:"quarter"}}),{c(){R(t.$$.fragment),R(r.$$.fragment)},l(a){E(t.$$.fragment,a),E(r.$$.fragment,a)},m(a,l){T(t,a,l),T(r,a,l),e=!0},p:Ze,i(a){e||(m(t.$$.fragment,a),m(r.$$.fragment,a),e=!0)},o(a){d(t.$$.fragment,a),d(r.$$.fragment,a),e=!1},d(a){w(t,a),w(r,a)}}}function cl(i){let t,r;return t=new Xt({props:{name:"quarter_p",$$slots:{default:[Vn]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Vn(i){let t,r,e,a,l;return t=new z({props:{valueLabel:"Q1",value:"1"}}),r=new z({props:{valueLabel:"Q2",value:"2"}}),e=new z({props:{valueLabel:"Q3",value:"3"}}),a=new z({props:{valueLabel:"Q4",value:"4"}}),{c(){R(t.$$.fragment),R(r.$$.fragment),R(e.$$.fragment),R(a.$$.fragment)},l(o){E(t.$$.fragment,o),E(r.$$.fragment,o),E(e.$$.fragment,o),E(a.$$.fragment,o)},m(o,s){T(t,o,s),T(r,o,s),T(e,o,s),T(a,o,s),l=!0},p:Ze,i(o){l||(m(t.$$.fragment,o),m(r.$$.fragment,o),m(e.$$.fragment,o),m(a.$$.fragment,o),l=!0)},o(o){d(t.$$.fragment,o),d(r.$$.fragment,o),d(e.$$.fragment,o),d(a.$$.fragment,o),l=!1},d(o){w(t,o),w(r,o),w(e,o),w(a,o)}}}function pl(i){let t,r;return t=new Ws({props:{title:"Week",name:"week_p",min:"1",max:"52",step:"1"}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Gn(i){let t,r,e,a,l,o,s=`<tr><th style="text-align:center; padding:12px; font-size:22px; font-weight:600;"><hr style="border: 2px light grey;"/>
                Quaterly Programme Delivery Prime Record Summary</th></tr>`,u,c,h,n,M,F,q,Z,B,W='<a href="#programme-quaterlyweekly-delivery-summaries">Programme Quaterly/Weekly Delivery Summaries</a>',K,N,x,H,Y,ee,V,I,J,it,nt,lt,Qe,ot,dt,_t,yt,ie,Ue,ct,qe,st,pt,$t,et,Be,xe,mt=i[0].audience_p.value+"",ut,vt,tt,Ie,bt,gt,wt,qt,Et,Xe,Te,Oe,he=i[0].quarter.value+"",Le,$e,ge=i[0].year.value+"",ve,Pe,le,Fe,we,re,oe,Ee,O,se,fe,ne,Ve="",He,de,_e,Ge,ae,Q,rt,Ae=i[0].quarter.value+"",Je,Se,ye,Ke,ze,at,ke=i[0].quarter.value+"",Me,De,be,We,X,g,C=i[0].quarter.value+"",Ce,_,v,Ct,Vt,Lt,St=i[0].quarter.value+"",Ft,Gt,Rt,jt,Mt,Tt;M=new Ba({props:{data:i[28],x:"quarter_start",y:"label_count",series:"programme",colorPalette:["#101010","#2A2A2A","#787878","#929292","#A6A6A6","#B4B4B4","#BBBBBB","#C0C0C0"]}}),it=new Xt({props:{data:i[36],title:"Programme",name:"owner",value:"owner",defaultValue:"eclipse-zenoh"}}),lt=new Xt({props:{data:i[37],title:"Repo",name:"repo",value:"value",label:"label",defaultValue:"zenoh"}}),ot=new Xt({props:{name:"audience_p",title:"Perspective",$$slots:{default:[jn]},$$scope:{ctx:i}}}),Ue=new Xt({props:{name:"year_p",defaultValue:"2025",title:"Year",$$slots:{default:[Qn]},$$scope:{ctx:i}}}),qe=new Xt({props:{name:"kind",defaultValue:"quarter",title:"Period",$$slots:{default:[Xn]},$$scope:{ctx:i}}});let Ye=i[0].kind.value=="quarter"&&cl(i),Ne=i[0].kind.value=="week"&&pl();return Ie=new ps({props:{id:i[44],params:i[3],content_desc:"summary"}}),_e=new xi({props:{data:i[32],name:"pr_dimensions_prog",limit:"15",multiple:!0}}),ye=new fr({props:{data:i[29],column:"pr_count",row:"0",fmt:"num0"}}),be=new fr({props:{data:i[29],column:"label_count",row:"0",fmt:"num0"}}),v=new fr({props:{data:i[30],column:"pr_count",row:"0",fmt:"num0"}}),Rt=new fr({props:{data:i[30],column:"label_count",row:"0",fmt:"num0"}}),{c(){t=k("hr"),r=pe(` 
        
      # Programme Level Overview
      `),e=k("hr"),a=b(),l=k("table"),o=k("thead"),o.innerHTML=s,u=b(),c=k("tbody"),h=k("tr"),n=k("td"),R(M.$$.fragment),F=b(),q=k("hr"),Z=b(),B=k("h2"),B.innerHTML=W,K=b(),N=k("hr"),x=b(),H=k("table"),Y=k("tbody"),ee=k("tr"),V=k("td"),I=k("div"),J=k("span"),R(it.$$.fragment),nt=b(),R(lt.$$.fragment),Qe=b(),R(ot.$$.fragment),dt=b(),_t=k("tr"),yt=k("td"),ie=k("div"),R(Ue.$$.fragment),ct=b(),R(qe.$$.fragment),st=b(),Ye&&Ye.c(),pt=b(),Ne&&Ne.c(),$t=pe(`
             `),et=b(),Be=k("h2"),xe=k("a"),ut=pe(mt),vt=pe(" Summary"),tt=b(),R(Ie.$$.fragment),bt=b(),gt=k("br"),wt=b(),qt=k("hr"),Et=b(),Xe=k("h1"),Te=k("a"),Oe=pe("Q"),Le=pe(he),$e=b(),ve=pe(ge),Pe=pe(" Software Delivery Overview"),le=b(),Fe=k("hr"),we=b(),re=k("table"),oe=k("tbody"),Ee=k("tr"),O=k("td"),se=k("table"),fe=k("tr"),ne=k("td"),ne.innerHTML=Ve,He=b(),de=k("td"),R(_e.$$.fragment),Ge=b(),ae=k("tr"),Q=k("th"),rt=pe("Q"),Je=pe(Ae),Se=pe(" Merged PRs: "),R(ye.$$.fragment),Ke=b(),ze=k("br"),at=pe(`
              Q`),Me=pe(ke),De=pe(" PR Lables: "),R(be.$$.fragment),We=b(),X=k("th"),g=pe("Q"),Ce=pe(C),_=pe(" Filtered Merged PR: "),R(v.$$.fragment),Ct=b(),Vt=k("br"),Lt=pe(`
              Q`),Ft=pe(St),Gt=pe(" Filtered PR Lables: "),R(Rt.$$.fragment),jt=b(),Mt=k("br"),this.h()},l($){t=A($,"HR",{style:!0}),r=ce($,` 
        
      # Programme Level Overview
      `),e=A($,"HR",{style:!0}),a=y($),l=A($,"TABLE",{style:!0});var L=P(l);o=A(L,"THEAD",{"data-svelte-h":!0}),Kt(o)!=="svelte-1tow5ef"&&(o.innerHTML=s),u=y(L),c=A(L,"TBODY",{});var Nt=P(c);h=A(Nt,"TR",{});var It=P(h);n=A(It,"TD",{style:!0});var ht=P(n);E(M.$$.fragment,ht),F=y(ht),q=A(ht,"HR",{style:!0}),ht.forEach(f),It.forEach(f),Nt.forEach(f),L.forEach(f),Z=y($),B=A($,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Kt(B)!=="svelte-1r3hby9"&&(B.innerHTML=W),K=y($),N=A($,"HR",{style:!0}),x=y($),H=A($,"TABLE",{style:!0});var Ut=P(H);Y=A(Ut,"TBODY",{});var Pt=P(Y);ee=A(Pt,"TR",{});var Qt=P(ee);V=A(Qt,"TD",{style:!0});var Wt=P(V);I=A(Wt,"DIV",{style:!0});var kt=P(I);J=A(kt,"SPAN",{style:!0});var Bt=P(J);E(it.$$.fragment,Bt),nt=y(Bt),E(lt.$$.fragment,Bt),Qe=y(Bt),E(ot.$$.fragment,Bt),Bt.forEach(f),kt.forEach(f),Wt.forEach(f),Qt.forEach(f),dt=y(Pt),_t=A(Pt,"TR",{});var zt=P(_t);yt=A(zt,"TD",{style:!0});var xt=P(yt);ie=A(xt,"DIV",{style:!0});var Dt=P(ie);E(Ue.$$.fragment,Dt),ct=y(Dt),E(qe.$$.fragment,Dt),st=y(Dt),Ye&&Ye.l(Dt),pt=y(Dt),Ne&&Ne.l(Dt),$t=ce(Dt,`
             `),Dt.forEach(f),xt.forEach(f),zt.forEach(f),Pt.forEach(f),Ut.forEach(f),et=y($),Be=A($,"H2",{class:!0,id:!0});var tr=P(Be);xe=A(tr,"A",{href:!0});var Zt=P(xe);ut=ce(Zt,mt),vt=ce(Zt," Summary"),Zt.forEach(f),tr.forEach(f),tt=y($),E(Ie.$$.fragment,$),bt=y($),gt=A($,"BR",{}),wt=y($),qt=A($,"HR",{style:!0}),Et=y($),Xe=A($,"H1",{class:!0,id:!0});var Jt=P(Xe);Te=A(Jt,"A",{href:!0});var rr=P(Te);Oe=ce(rr,"Q"),Le=ce(rr,he),$e=y(rr),ve=ce(rr,ge),Pe=ce(rr," Software Delivery Overview"),rr.forEach(f),Jt.forEach(f),le=y($),Fe=A($,"HR",{style:!0}),we=y($),re=A($,"TABLE",{style:!0});var sr=P(re);oe=A(sr,"TBODY",{});var nr=P(oe);Ee=A(nr,"TR",{});var ar=P(Ee);O=A(ar,"TD",{colspan:!0,style:!0});var ir=P(O);se=A(ir,"TABLE",{style:!0});var lr=P(se);fe=A(lr,"TR",{});var or=P(fe);ne=A(or,"TD",{style:!0,"data-svelte-h":!0}),Kt(ne)!=="svelte-158yw1r"&&(ne.innerHTML=Ve),He=y(or),de=A(or,"TD",{style:!0});var _r=P(de);E(_e.$$.fragment,_r),_r.forEach(f),or.forEach(f),lr.forEach(f),ir.forEach(f),ar.forEach(f),Ge=y(nr),ae=A(nr,"TR",{style:!0});var Yt=P(ae);Q=A(Yt,"TH",{style:!0});var ft=P(Q);rt=ce(ft,"Q"),Je=ce(ft,Ae),Se=ce(ft," Merged PRs: "),E(ye.$$.fragment,ft),Ke=y(ft),ze=A(ft,"BR",{}),at=ce(ft,`
              Q`),Me=ce(ft,ke),De=ce(ft," PR Lables: "),E(be.$$.fragment,ft),ft.forEach(f),We=y(Yt),X=A(Yt,"TH",{style:!0});var Ht=P(X);g=ce(Ht,"Q"),Ce=ce(Ht,C),_=ce(Ht," Filtered Merged PR: "),E(v.$$.fragment,Ht),Ct=y(Ht),Vt=A(Ht,"BR",{}),Lt=ce(Ht,`
              Q`),Ft=ce(Ht,St),Gt=ce(Ht," Filtered PR Lables: "),E(Rt.$$.fragment,Ht),jt=y(Ht),Mt=A(Ht,"BR",{}),Ht.forEach(f),Yt.forEach(f),nr.forEach(f),sr.forEach(f),this.h()},h(){D(t,"border","3px solid black"),D(e,"border","4px solid black"),D(q,"height","2px"),D(q,"background-color","#d3d3d3"),D(q,"border","none"),D(q,"margin","8px 0 0 0"),D(n,"padding","12px"),D(n,"text-align","center"),D(l,"width","100%"),D(l,"border-collapse","collapse"),G(B,"class","markdown"),G(B,"id","programme-quaterlyweekly-delivery-summaries"),D(N,"border","2px solid black"),D(J,"display","inline-block"),D(J,"margin","0 0px 0 0"),D(I,"display","inline-block"),D(I,"text-align","left"),D(V,"padding","6px 10px"),D(V,"text-align","center"),D(ie,"display","inline-block"),D(ie,"text-align","left"),D(yt,"padding","1px 10px"),D(yt,"text-align","center"),D(H,"width","100%"),D(H,"border-collapse","collapse"),D(H,"table-layout","fixed"),G(xe,"href","#inputsaudience_pvalue-summary"),G(Be,"class","markdown"),G(Be,"id","inputsaudience_pvalue-summary"),D(qt,"border","2px solid black"),G(Te,"href","#qinputsquartervalue-inputsyearvalue-software-delivery-overview-1"),G(Xe,"class","markdown"),G(Xe,"id","qinputsquartervalue-inputsyearvalue-software-delivery-overview-1"),D(Fe,"border","2px solid black"),D(ne,"width","10%"),D(ne,"padding","12px"),D(de,"width","90%"),D(de,"padding","12px"),D(de,"text-align","center"),D(se,"width","100%"),D(se,"border-collapse","collapse"),D(se,"table-layout","fixed"),G(O,"colspan","2"),D(O,"padding","0"),D(Q,"width","50%"),D(Q,"text-align","center"),D(Q,"border","1px solid #ccc"),D(Q,"padding","10px"),D(Q,"font-size","0.75rem"),D(Q,"height","25px"),D(X,"width","50%"),D(X,"text-align","center"),D(X,"border","1px solid #ccc"),D(X,"padding","10px"),D(X,"font-size","0.75rem"),D(ae,"background-color","#f0f0f0"),D(re,"border-collapse","collapse"),D(re,"width","100%"),D(re,"table-layout","fixed")},m($,L){p($,t,L),p($,r,L),p($,e,L),p($,a,L),p($,l,L),S(l,o),S(l,u),S(l,c),S(c,h),S(h,n),T(M,n,null),S(n,F),S(n,q),p($,Z,L),p($,B,L),p($,K,L),p($,N,L),p($,x,L),p($,H,L),S(H,Y),S(Y,ee),S(ee,V),S(V,I),S(I,J),T(it,J,null),S(J,nt),T(lt,J,null),S(J,Qe),T(ot,J,null),S(Y,dt),S(Y,_t),S(_t,yt),S(yt,ie),T(Ue,ie,null),S(ie,ct),T(qe,ie,null),S(ie,st),Ye&&Ye.m(ie,null),S(ie,pt),Ne&&Ne.m(ie,null),S(ie,$t),p($,et,L),p($,Be,L),S(Be,xe),S(xe,ut),S(xe,vt),p($,tt,L),T(Ie,$,L),p($,bt,L),p($,gt,L),p($,wt,L),p($,qt,L),p($,Et,L),p($,Xe,L),S(Xe,Te),S(Te,Oe),S(Te,Le),S(Te,$e),S(Te,ve),S(Te,Pe),p($,le,L),p($,Fe,L),p($,we,L),p($,re,L),S(re,oe),S(oe,Ee),S(Ee,O),S(O,se),S(se,fe),S(fe,ne),S(fe,He),S(fe,de),T(_e,de,null),S(oe,Ge),S(oe,ae),S(ae,Q),S(Q,rt),S(Q,Je),S(Q,Se),T(ye,Q,null),S(Q,Ke),S(Q,ze),S(Q,at),S(Q,Me),S(Q,De),T(be,Q,null),S(ae,We),S(ae,X),S(X,g),S(X,Ce),S(X,_),T(v,X,null),S(X,Ct),S(X,Vt),S(X,Lt),S(X,Ft),S(X,Gt),T(Rt,X,null),S(X,jt),S(X,Mt),Tt=!0},p($,L){const Nt={};L[0]&268435456&&(Nt.data=$[28]),M.$set(Nt);const It={};L[1]&32&&(It.data=$[36]),it.$set(It);const ht={};L[1]&64&&(ht.data=$[37]),lt.$set(ht);const Ut={};L[8]&262144&&(Ut.$$scope={dirty:L,ctx:$}),ot.$set(Ut);const Pt={};L[8]&262144&&(Pt.$$scope={dirty:L,ctx:$}),Ue.$set(Pt);const Qt={};L[8]&262144&&(Qt.$$scope={dirty:L,ctx:$}),qe.$set(Qt),$[0].kind.value=="quarter"?Ye?L[0]&1&&m(Ye,1):(Ye=cl($),Ye.c(),m(Ye,1),Ye.m(ie,pt)):Ye&&(me(),d(Ye,1,1,()=>{Ye=null}),ue()),$[0].kind.value=="week"?Ne?L[0]&1&&m(Ne,1):(Ne=pl(),Ne.c(),m(Ne,1),Ne.m(ie,$t)):Ne&&(me(),d(Ne,1,1,()=>{Ne=null}),ue()),(!Tt||L[0]&1)&&mt!==(mt=$[0].audience_p.value+"")&&Ot(ut,mt);const Wt={};L[1]&8192&&(Wt.id=$[44]),L[0]&8&&(Wt.params=$[3]),Ie.$set(Wt),(!Tt||L[0]&1)&&he!==(he=$[0].quarter.value+"")&&Ot(Le,he),(!Tt||L[0]&1)&&ge!==(ge=$[0].year.value+"")&&Ot(ve,ge);const kt={};L[1]&2&&(kt.data=$[32]),_e.$set(kt),(!Tt||L[0]&1)&&Ae!==(Ae=$[0].quarter.value+"")&&Ot(Je,Ae);const Bt={};L[0]&536870912&&(Bt.data=$[29]),ye.$set(Bt),(!Tt||L[0]&1)&&ke!==(ke=$[0].quarter.value+"")&&Ot(Me,ke);const zt={};L[0]&536870912&&(zt.data=$[29]),be.$set(zt),(!Tt||L[0]&1)&&C!==(C=$[0].quarter.value+"")&&Ot(Ce,C);const xt={};L[0]&1073741824&&(xt.data=$[30]),v.$set(xt),(!Tt||L[0]&1)&&St!==(St=$[0].quarter.value+"")&&Ot(Ft,St);const Dt={};L[0]&1073741824&&(Dt.data=$[30]),Rt.$set(Dt)},i($){Tt||(m(M.$$.fragment,$),m(it.$$.fragment,$),m(lt.$$.fragment,$),m(ot.$$.fragment,$),m(Ue.$$.fragment,$),m(qe.$$.fragment,$),m(Ye),m(Ne),m(Ie.$$.fragment,$),m(_e.$$.fragment,$),m(ye.$$.fragment,$),m(be.$$.fragment,$),m(v.$$.fragment,$),m(Rt.$$.fragment,$),Tt=!0)},o($){d(M.$$.fragment,$),d(it.$$.fragment,$),d(lt.$$.fragment,$),d(ot.$$.fragment,$),d(Ue.$$.fragment,$),d(qe.$$.fragment,$),d(Ye),d(Ne),d(Ie.$$.fragment,$),d(_e.$$.fragment,$),d(ye.$$.fragment,$),d(be.$$.fragment,$),d(v.$$.fragment,$),d(Rt.$$.fragment,$),Tt=!1},d($){$&&(f(t),f(r),f(e),f(a),f(l),f(Z),f(B),f(K),f(N),f(x),f(H),f(et),f(Be),f(tt),f(bt),f(gt),f(wt),f(qt),f(Et),f(Xe),f(le),f(Fe),f(we),f(re)),w(M),w(it),w(lt),w(ot),w(Ue),w(qe),Ye&&Ye.d(),Ne&&Ne.d(),w(Ie,$),w(_e),w(ye),w(be),w(v),w(Rt)}}}function zn(i){let t,r,e,a;return t=new fl({props:{xMin:"2020-01-01",xMax:"2022-12-31",label:"Naive Planning",color:"#f2382760"}}),e=new fl({props:{xMin:"2023-01-05",xMax:"2023-08-30",label:"Rescue",color:"#f1ef68b5"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment)},l(l){E(t.$$.fragment,l),r=y(l),E(e.$$.fragment,l)},m(l,o){T(t,l,o),p(l,r,o),T(e,l,o),a=!0},p:Ze,i(l){a||(m(t.$$.fragment,l),m(e.$$.fragment,l),a=!0)},o(l){d(t.$$.fragment,l),d(e.$$.fragment,l),a=!1},d(l){l&&f(r),w(t,l),w(e,l)}}}function xn(i){let t,r,e,a,l,o,s,u,c,h;return t=new z({props:{valueLabel:"2021",value:"2021"}}),e=new z({props:{valueLabel:"2022",value:"2022"}}),l=new z({props:{valueLabel:"2023",value:"2023"}}),s=new z({props:{valueLabel:"2024",value:"2024"}}),c=new z({props:{valueLabel:"2025",value:"2025"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment),u=b(),R(c.$$.fragment)},l(n){E(t.$$.fragment,n),r=y(n),E(e.$$.fragment,n),a=y(n),E(l.$$.fragment,n),o=y(n),E(s.$$.fragment,n),u=y(n),E(c.$$.fragment,n)},m(n,M){T(t,n,M),p(n,r,M),T(e,n,M),p(n,a,M),T(l,n,M),p(n,o,M),T(s,n,M),p(n,u,M),T(c,n,M),h=!0},p:Ze,i(n){h||(m(t.$$.fragment,n),m(e.$$.fragment,n),m(l.$$.fragment,n),m(s.$$.fragment,n),m(c.$$.fragment,n),h=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),d(l.$$.fragment,n),d(s.$$.fragment,n),d(c.$$.fragment,n),h=!1},d(n){n&&(f(r),f(a),f(o),f(u)),w(t,n),w(e,n),w(l,n),w(s,n),w(c,n)}}}function Jn(i){let t,r,e,a,l,o,s,u;return t=new z({props:{valueLabel:"2021/2022",value:"2021/2022"}}),e=new z({props:{valueLabel:"2022/2023",value:"2022/2023"}}),l=new z({props:{valueLabel:"2023/2024",value:"2023/2024"}}),s=new z({props:{valueLabel:"2024/2025",value:"2024/2025"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment)},l(c){E(t.$$.fragment,c),r=y(c),E(e.$$.fragment,c),a=y(c),E(l.$$.fragment,c),o=y(c),E(s.$$.fragment,c)},m(c,h){T(t,c,h),p(c,r,h),T(e,c,h),p(c,a,h),T(l,c,h),p(c,o,h),T(s,c,h),u=!0},p:Ze,i(c){u||(m(t.$$.fragment,c),m(e.$$.fragment,c),m(l.$$.fragment,c),m(s.$$.fragment,c),u=!0)},o(c){d(t.$$.fragment,c),d(e.$$.fragment,c),d(l.$$.fragment,c),d(s.$$.fragment,c),u=!1},d(c){c&&(f(r),f(a),f(o)),w(t,c),w(e,c),w(l,c),w(s,c)}}}function Kn(i){let t,r,e,a,l,o,s,u,c,h;return t=new z({props:{valueLabel:"Product Manager",value:"Product Manager"}}),e=new z({props:{valueLabel:"Programme Manager",value:"Programme Manager"}}),l=new z({props:{valueLabel:"Project Manager",value:"Project Manager"}}),s=new z({props:{valueLabel:"Dev Lead",value:"Dev Lead"}}),c=new z({props:{valueLabel:"Developer",value:"Developer"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment),u=b(),R(c.$$.fragment)},l(n){E(t.$$.fragment,n),r=y(n),E(e.$$.fragment,n),a=y(n),E(l.$$.fragment,n),o=y(n),E(s.$$.fragment,n),u=y(n),E(c.$$.fragment,n)},m(n,M){T(t,n,M),p(n,r,M),T(e,n,M),p(n,a,M),T(l,n,M),p(n,o,M),T(s,n,M),p(n,u,M),T(c,n,M),h=!0},p:Ze,i(n){h||(m(t.$$.fragment,n),m(e.$$.fragment,n),m(l.$$.fragment,n),m(s.$$.fragment,n),m(c.$$.fragment,n),h=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),d(l.$$.fragment,n),d(s.$$.fragment,n),d(c.$$.fragment,n),h=!1},d(n){n&&(f(r),f(a),f(o),f(u)),w(t,n),w(e,n),w(l,n),w(s,n),w(c,n)}}}function Zn(i){let t,r,e;return r=new Ma({props:{content:i[19][0].four_sentence_summary}}),{c(){t=k("div"),R(r.$$.fragment),this.h()},l(a){t=A(a,"DIV",{class:!0});var l=P(t);E(r.$$.fragment,l),l.forEach(f),this.h()},h(){G(t,"class","text-sm text-gray-600")},m(a,l){p(a,t,l),T(r,t,null),e=!0},p(a,l){const o={};l[0]&524288&&(o.content=a[19][0].four_sentence_summary),r.$set(o)},i(a){e||(m(r.$$.fragment,a),e=!0)},o(a){d(r.$$.fragment,a),e=!1},d(a){a&&f(t),w(r)}}}function $l(i){let t,r,e,a,l,o,s,u;return e=new Ma({props:{content:i[263].paragraph_title}}),l=new Ma({props:{content:i[263].paragraph_content}}),{c(){t=k("p"),r=k("strong"),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),s=k("br"),this.h()},l(c){t=A(c,"P",{class:!0});var h=P(t);r=A(h,"STRONG",{class:!0});var n=P(r);E(e.$$.fragment,n),n.forEach(f),h.forEach(f),a=y(c),E(l.$$.fragment,c),o=y(c),s=A(c,"BR",{}),this.h()},h(){G(r,"class","markdown"),G(t,"class","markdown")},m(c,h){p(c,t,h),S(t,r),T(e,r,null),p(c,a,h),T(l,c,h),p(c,o,h),p(c,s,h),u=!0},p(c,h){const n={};h[0]&524288&&(n.content=c[263].paragraph_title),e.$set(n);const M={};h[0]&524288&&(M.content=c[263].paragraph_content),l.$set(M)},i(c){u||(m(e.$$.fragment,c),m(l.$$.fragment,c),u=!0)},o(c){d(e.$$.fragment,c),d(l.$$.fragment,c),u=!1},d(c){c&&(f(t),f(a),f(o),f(s)),w(e),w(l,c)}}}function eo(i){let t,r,e=al(i[19]),a=[];for(let o=0;o<e.length;o+=1)a[o]=$l(dl(i,e,o));const l=o=>d(a[o],1,1,()=>{a[o]=null});return{c(){t=k("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=A(o,"DIV",{class:!0});var s=P(t);for(let u=0;u<a.length;u+=1)a[u].l(s);s.forEach(f),this.h()},h(){G(t,"class","text-sm text-gray-600")},m(o,s){p(o,t,s);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(t,null);r=!0},p(o,s){if(s[0]&524288){e=al(o[19]);let u;for(u=0;u<e.length;u+=1){const c=dl(o,e,u);a[u]?(a[u].p(c,s),m(a[u],1)):(a[u]=$l(c),a[u].c(),m(a[u],1),a[u].m(t,null))}for(me(),u=e.length;u<a.length;u+=1)l(u);ue()}},i(o){if(!r){for(let s=0;s<e.length;s+=1)m(a[s]);r=!0}},o(o){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)d(a[s]);r=!1},d(o){o&&f(t),ks(a,o)}}}function to(i){let t;return{c(){t=pe("### Blah Blah")},l(r){t=ce(r,"### Blah Blah")},m(r,e){p(r,t,e)},d(r){r&&f(t)}}}function ro(i){let t,r,e,a,l,o;return t=new aa({props:{title:i[0].roadmap_years.value+"  Roadmap Revision Summary.",class:"text-blue-600 text-xl font-semibold bg-gray-100",$$slots:{default:[Zn]},$$scope:{ctx:i}}}),e=new aa({props:{title:i[0].roadmap_years.value+" Roadmap Revision Details.",class:"text-blue-600 text-xl font-semibold bg-gray-100",$$slots:{default:[eo]},$$scope:{ctx:i}}}),l=new aa({props:{title:i[0].roadmap_years.value+" Roadmap Delivery and Change  Details.",class:"text-blue-600 text-xl font-semibold bg-gray-100",$$slots:{default:[to]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p(s,u){const c={};u[0]&1&&(c.title=s[0].roadmap_years.value+"  Roadmap Revision Summary."),u[0]&524288|u[8]&262144&&(c.$$scope={dirty:u,ctx:s}),t.$set(c);const h={};u[0]&1&&(h.title=s[0].roadmap_years.value+" Roadmap Revision Details."),u[0]&524288|u[8]&262144&&(h.$$scope={dirty:u,ctx:s}),e.$set(h);const n={};u[0]&1&&(n.title=s[0].roadmap_years.value+" Roadmap Delivery and Change  Details."),u[8]&262144&&(n.$$scope={dirty:u,ctx:s}),l.$set(n)},i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function ao(i){let t,r,e,a,l,o;return t=new er({props:{id:"requirement_id"}}),e=new er({props:{id:"requirment_description",wrap:"true"}}),l=new er({props:{id:"delivery_outstanding",contentType:"colorscale",colorScale:"negative"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p:Ze,i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function io(i){let t,r,e,a,l,o;return t=new z({props:{valueLabel:"Work Item ",value:"work_item_id"}}),e=new z({props:{valueLabel:"Requirement",value:"requirement_id"}}),l=new z({props:{valueLabel:"Milestone",value:"milestone_id"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p:Ze,i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function lo(i){let t,r,e,a,l,o,s,u,c,h,n,M,F,q,Z,B,W,K,N,x,H,Y,ee,V;return t=new z({props:{valueLabel:"Jan",value:"1"}}),e=new z({props:{valueLabel:"Feb",value:"2"}}),l=new z({props:{valueLabel:"Mar",value:"3"}}),s=new z({props:{valueLabel:"Apr",value:"4"}}),c=new z({props:{valueLabel:"May",value:"5"}}),n=new z({props:{valueLabel:"Jun",value:"6"}}),F=new z({props:{valueLabel:"Jul",value:"7"}}),Z=new z({props:{valueLabel:"Aug",value:"8"}}),W=new z({props:{valueLabel:"Sep",value:"9"}}),N=new z({props:{valueLabel:"Oct",value:"10"}}),H=new z({props:{valueLabel:"Nov",value:"11"}}),ee=new z({props:{valueLabel:"Dec",value:"12"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment),u=b(),R(c.$$.fragment),h=b(),R(n.$$.fragment),M=b(),R(F.$$.fragment),q=b(),R(Z.$$.fragment),B=b(),R(W.$$.fragment),K=b(),R(N.$$.fragment),x=b(),R(H.$$.fragment),Y=b(),R(ee.$$.fragment)},l(I){E(t.$$.fragment,I),r=y(I),E(e.$$.fragment,I),a=y(I),E(l.$$.fragment,I),o=y(I),E(s.$$.fragment,I),u=y(I),E(c.$$.fragment,I),h=y(I),E(n.$$.fragment,I),M=y(I),E(F.$$.fragment,I),q=y(I),E(Z.$$.fragment,I),B=y(I),E(W.$$.fragment,I),K=y(I),E(N.$$.fragment,I),x=y(I),E(H.$$.fragment,I),Y=y(I),E(ee.$$.fragment,I)},m(I,J){T(t,I,J),p(I,r,J),T(e,I,J),p(I,a,J),T(l,I,J),p(I,o,J),T(s,I,J),p(I,u,J),T(c,I,J),p(I,h,J),T(n,I,J),p(I,M,J),T(F,I,J),p(I,q,J),T(Z,I,J),p(I,B,J),T(W,I,J),p(I,K,J),T(N,I,J),p(I,x,J),T(H,I,J),p(I,Y,J),T(ee,I,J),V=!0},p:Ze,i(I){V||(m(t.$$.fragment,I),m(e.$$.fragment,I),m(l.$$.fragment,I),m(s.$$.fragment,I),m(c.$$.fragment,I),m(n.$$.fragment,I),m(F.$$.fragment,I),m(Z.$$.fragment,I),m(W.$$.fragment,I),m(N.$$.fragment,I),m(H.$$.fragment,I),m(ee.$$.fragment,I),V=!0)},o(I){d(t.$$.fragment,I),d(e.$$.fragment,I),d(l.$$.fragment,I),d(s.$$.fragment,I),d(c.$$.fragment,I),d(n.$$.fragment,I),d(F.$$.fragment,I),d(Z.$$.fragment,I),d(W.$$.fragment,I),d(N.$$.fragment,I),d(H.$$.fragment,I),d(ee.$$.fragment,I),V=!1},d(I){I&&(f(r),f(a),f(o),f(u),f(h),f(M),f(q),f(B),f(K),f(x),f(Y)),w(t,I),w(e,I),w(l,I),w(s,I),w(c,I),w(n,I),w(F,I),w(Z,I),w(W,I),w(N,I),w(H,I),w(ee,I)}}}function so(i){let t,r,e,a;return t=new er({props:{id:"pr_id"}}),e=new er({props:{id:"technical_description",wrap:"true"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment)},l(l){E(t.$$.fragment,l),r=y(l),E(e.$$.fragment,l)},m(l,o){T(t,l,o),p(l,r,o),T(e,l,o),a=!0},p:Ze,i(l){a||(m(t.$$.fragment,l),m(e.$$.fragment,l),a=!0)},o(l){d(t.$$.fragment,l),d(e.$$.fragment,l),a=!1},d(l){l&&f(r),w(t,l),w(e,l)}}}function no(i){let t,r,e,a,l,o,s,u,c,h,n,M,F,q,Z,B,W,K;return t=new er({props:{id:"pr_id"}}),e=new er({props:{id:"requirement_id"}}),l=new er({props:{id:"req_desc",wrap:"true"}}),s=new er({props:{id:"work_item_id"}}),c=new er({props:{id:"work_item_description",wrap:"true"}}),n=new er({props:{id:"milestone_id"}}),F=new er({props:{id:"milestone_description",wrap:"true"}}),Z=new er({props:{id:"merged_at"}}),W=new er({props:{id:"milestone_date"}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment),o=b(),R(s.$$.fragment),u=b(),R(c.$$.fragment),h=b(),R(n.$$.fragment),M=b(),R(F.$$.fragment),q=b(),R(Z.$$.fragment),B=b(),R(W.$$.fragment)},l(N){E(t.$$.fragment,N),r=y(N),E(e.$$.fragment,N),a=y(N),E(l.$$.fragment,N),o=y(N),E(s.$$.fragment,N),u=y(N),E(c.$$.fragment,N),h=y(N),E(n.$$.fragment,N),M=y(N),E(F.$$.fragment,N),q=y(N),E(Z.$$.fragment,N),B=y(N),E(W.$$.fragment,N)},m(N,x){T(t,N,x),p(N,r,x),T(e,N,x),p(N,a,x),T(l,N,x),p(N,o,x),T(s,N,x),p(N,u,x),T(c,N,x),p(N,h,x),T(n,N,x),p(N,M,x),T(F,N,x),p(N,q,x),T(Z,N,x),p(N,B,x),T(W,N,x),K=!0},p:Ze,i(N){K||(m(t.$$.fragment,N),m(e.$$.fragment,N),m(l.$$.fragment,N),m(s.$$.fragment,N),m(c.$$.fragment,N),m(n.$$.fragment,N),m(F.$$.fragment,N),m(Z.$$.fragment,N),m(W.$$.fragment,N),K=!0)},o(N){d(t.$$.fragment,N),d(e.$$.fragment,N),d(l.$$.fragment,N),d(s.$$.fragment,N),d(c.$$.fragment,N),d(n.$$.fragment,N),d(F.$$.fragment,N),d(Z.$$.fragment,N),d(W.$$.fragment,N),K=!1},d(N){N&&(f(r),f(a),f(o),f(u),f(h),f(M),f(q),f(B)),w(t,N),w(e,N),w(l,N),w(s,N),w(c,N),w(n,N),w(F,N),w(Z,N),w(W,N)}}}function oo(i){let t,r='<a href="#platform-delivery-track-record">Platform Delivery Track Record</a>',e,a,l,o,s,u,c='<a href="#roadmap-explorer">Roadmap Explorer</a>',h,n,M,F,q,Z,B,W,K,N,x,H,Y,ee,V,I,J,it,nt,lt,Qe,ot='<a href="#roadmap-revision-details">Roadmap revision Details</a>',dt,_t,yt,ie,Ue,ct,qe,st,pt,$t,et,Be,xe,mt,ut,vt,tt=i[0].roadmap_years.value+"",Ie,bt,gt,wt,qt=i[19][0].single_sentence_summary+"",Et,Xe,Te,Oe,he,Le,$e,ge,ve,Pe,le,Fe,we=i[0].selected_dimensions+"",re,oe,Ee,O,se,fe,ne,Ve,He,de,_e,Ge,ae,Q,rt,Ae,Je,Se,ye='<a href="#pr-details-enter-pr-id">PR Details: Enter PR ID</a>',Ke,ze,at,ke,Me,De,be,We,X;return o=new Ba({props:{title:"Platform Lifetime Merged PRs & Developers",data:i[21],x:"quarter_start",y:"prs_merged",stackTotalLabel:"true",y2:"active_developers",y2SeriesType:"line",chartAreaHeight:150,colorPalette:["#706d6eff","#7e7d7e9e","#e3e1e6eb"],$$slots:{default:[zn]},$$scope:{ctx:i}}}),N=new Xt({props:{name:"roadmap_versions",multiple:"false",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[xn]},$$scope:{ctx:i}}}),Y=new Xt({props:{data:i[40],name:"section",value:"heading_text",title:"Select Roadmap Section",multiple:"true"}}),V=new Ma({props:{content:i[43]}}),$t=new Xt({props:{name:"roadmap_years",title:"Roadmap Revision:",defaultValue:"2024/2025",$$slots:{default:[Jn]},$$scope:{ctx:i}}}),xe=new Xt({props:{name:"readers",title:"Audience",defaultValue:"Product Manager",$$slots:{default:[Kn]},$$scope:{ctx:i}}}),$e=new $s({props:{single:"false",class:"rounded-xl bg-gray-50 px-8 mt-4",$$slots:{default:[ro]},$$scope:{ctx:i}}}),ve=new ka({props:{data:i[9]}}),le=new xi({props:{data:i[13],name:"selected_dimensions",handleMissing:"zero",metric:"count(pr_id)"}}),Ee=new ka({props:{data:i[4],rows:"10",$$slots:{default:[ao]},$$scope:{ctx:i}}}),_e=new Xt({props:{name:"x_axis_requirment",title:"X-Axis:",defaultValue:"requirement_id",$$slots:{default:[io]},$$scope:{ctx:i}}}),Q=new Xt({props:{name:"merged_month",title:"Merged Month:",defaultValue:"1",$$slots:{default:[lo]},$$scope:{ctx:i}}}),Ae=new vs({props:{data:i[10],x:"xval",y:"yval",value:"count",xLabelRotation:"-45",filter:"true"}}),ze=new ln({props:{name:"prid",defaultValue:"1522"}}),ke=new ka({props:{data:i[7],$$slots:{default:[so]},$$scope:{ctx:i}}}),De=new ka({props:{data:i[8],$$slots:{default:[no]},$$scope:{ctx:i}}}),We=new ka({props:{data:i[5]}}),{c(){t=k("h2"),t.innerHTML=r,e=b(),a=k("hr"),l=b(),R(o.$$.fragment),s=b(),u=k("h2"),u.innerHTML=c,h=b(),n=k("hr"),M=b(),F=k("table"),q=k("tbody"),Z=k("tr"),B=k("td"),W=k("div"),K=k("span"),R(N.$$.fragment),x=b(),H=k("span"),R(Y.$$.fragment),ee=b(),R(V.$$.fragment),I=b(),J=k("br"),it=b(),nt=k("br"),lt=b(),Qe=k("h2"),Qe.innerHTML=ot,dt=b(),_t=k("hr"),yt=b(),ie=k("table"),Ue=k("tbody"),ct=k("tr"),qe=k("td"),st=k("div"),pt=k("span"),R($t.$$.fragment),et=b(),Be=k("span"),R(xe.$$.fragment),mt=b(),ut=k("h2"),vt=k("a"),Ie=pe(tt),bt=pe(" Roadmap revision:"),gt=b(),wt=k("p"),Et=pe(qt),Xe=b(),Te=k("hr"),Oe=b(),he=k("br"),Le=b(),R($e.$$.fragment),ge=b(),R(ve.$$.fragment),Pe=b(),R(le.$$.fragment),Fe=b(),re=pe(we),oe=b(),R(Ee.$$.fragment),O=b(),se=k("table"),fe=k("tbody"),ne=k("tr"),Ve=k("td"),He=k("div"),de=k("span"),R(_e.$$.fragment),Ge=b(),ae=k("span"),R(Q.$$.fragment),rt=b(),R(Ae.$$.fragment),Je=b(),Se=k("h3"),Se.innerHTML=ye,Ke=b(),R(ze.$$.fragment),at=b(),R(ke.$$.fragment),Me=b(),R(De.$$.fragment),be=b(),R(We.$$.fragment),this.h()},l(g){t=A(g,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Kt(t)!=="svelte-1u0qynl"&&(t.innerHTML=r),e=y(g),a=A(g,"HR",{style:!0}),l=y(g),E(o.$$.fragment,g),s=y(g),u=A(g,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Kt(u)!=="svelte-5rsgt5"&&(u.innerHTML=c),h=y(g),n=A(g,"HR",{style:!0}),M=y(g),F=A(g,"TABLE",{style:!0});var C=P(F);q=A(C,"TBODY",{});var Ce=P(q);Z=A(Ce,"TR",{});var _=P(Z);B=A(_,"TD",{style:!0});var v=P(B);W=A(v,"DIV",{style:!0});var Ct=P(W);K=A(Ct,"SPAN",{style:!0});var Vt=P(K);E(N.$$.fragment,Vt),Vt.forEach(f),x=y(Ct),H=A(Ct,"SPAN",{style:!0});var Lt=P(H);E(Y.$$.fragment,Lt),Lt.forEach(f),Ct.forEach(f),v.forEach(f),_.forEach(f),Ce.forEach(f),C.forEach(f),ee=y(g),E(V.$$.fragment,g),I=y(g),J=A(g,"BR",{}),it=y(g),nt=A(g,"BR",{}),lt=y(g),Qe=A(g,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Kt(Qe)!=="svelte-9dggih"&&(Qe.innerHTML=ot),dt=y(g),_t=A(g,"HR",{style:!0}),yt=y(g),ie=A(g,"TABLE",{style:!0});var St=P(ie);Ue=A(St,"TBODY",{});var Ft=P(Ue);ct=A(Ft,"TR",{});var Gt=P(ct);qe=A(Gt,"TD",{style:!0});var Rt=P(qe);st=A(Rt,"DIV",{style:!0});var jt=P(st);pt=A(jt,"SPAN",{style:!0});var Mt=P(pt);E($t.$$.fragment,Mt),Mt.forEach(f),et=y(jt),Be=A(jt,"SPAN",{style:!0});var Tt=P(Be);E(xe.$$.fragment,Tt),Tt.forEach(f),jt.forEach(f),Rt.forEach(f),Gt.forEach(f),Ft.forEach(f),St.forEach(f),mt=y(g),ut=A(g,"H2",{class:!0,id:!0});var Ye=P(ut);vt=A(Ye,"A",{href:!0});var Ne=P(vt);Ie=ce(Ne,tt),bt=ce(Ne," Roadmap revision:"),Ne.forEach(f),Ye.forEach(f),gt=y(g),wt=A(g,"P",{class:!0});var $=P(wt);Et=ce($,qt),$.forEach(f),Xe=y(g),Te=A(g,"HR",{style:!0}),Oe=y(g),he=A(g,"BR",{}),Le=y(g),E($e.$$.fragment,g),ge=y(g),E(ve.$$.fragment,g),Pe=y(g),E(le.$$.fragment,g),Fe=y(g),re=ce(g,we),oe=y(g),E(Ee.$$.fragment,g),O=y(g),se=A(g,"TABLE",{style:!0});var L=P(se);fe=A(L,"TBODY",{});var Nt=P(fe);ne=A(Nt,"TR",{});var It=P(ne);Ve=A(It,"TD",{style:!0});var ht=P(Ve);He=A(ht,"DIV",{style:!0});var Ut=P(He);de=A(Ut,"SPAN",{style:!0});var Pt=P(de);E(_e.$$.fragment,Pt),Pt.forEach(f),Ge=y(Ut),ae=A(Ut,"SPAN",{style:!0});var Qt=P(ae);E(Q.$$.fragment,Qt),Qt.forEach(f),Ut.forEach(f),ht.forEach(f),It.forEach(f),Nt.forEach(f),L.forEach(f),rt=y(g),E(Ae.$$.fragment,g),Je=y(g),Se=A(g,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Kt(Se)!=="svelte-rutzi1"&&(Se.innerHTML=ye),Ke=y(g),E(ze.$$.fragment,g),at=y(g),E(ke.$$.fragment,g),Me=y(g),E(De.$$.fragment,g),be=y(g),E(We.$$.fragment,g),this.h()},h(){G(t,"class","markdown"),G(t,"id","platform-delivery-track-record"),D(a,"border","1px solid black"),G(u,"class","markdown"),G(u,"id","roadmap-explorer"),D(n,"border","1px solid black"),D(K,"display","inline-block"),D(K,"margin","0 8px 8px 0"),D(H,"display","inline-block"),D(H,"margin","0 0 8px 0"),D(W,"display","inline-block"),D(W,"text-align","left"),D(B,"padding","12px"),D(B,"text-align","center"),D(F,"width","100%"),D(F,"border-collapse","collapse"),D(F,"table-layout","fixed"),G(Qe,"class","markdown"),G(Qe,"id","roadmap-revision-details"),D(_t,"border","1px solid black"),D(pt,"display","inline-block"),D(pt,"margin","0 8px 8px 0"),D(Be,"display","inline-block"),D(Be,"margin","0 0 8px 0"),D(st,"display","inline-block"),D(st,"text-align","left"),D(qe,"padding","12px"),D(qe,"text-align","center"),D(ie,"width","100%"),D(ie,"border-collapse","collapse"),D(ie,"table-layout","fixed"),G(vt,"href","#inputsroadmap_yearsvalue-roadmap-revision"),G(ut,"class","markdown"),G(ut,"id","inputsroadmap_yearsvalue-roadmap-revision"),G(wt,"class","markdown"),D(Te,"border","2px light grey"),D(de,"display","inline-block"),D(de,"margin","0 8px 8px 0"),D(ae,"display","inline-block"),D(ae,"margin","0 8px 8px 0"),D(He,"display","inline-block"),D(He,"text-align","left"),D(Ve,"padding","12px"),D(Ve,"text-align","center"),D(se,"width","100%"),D(se,"border-collapse","collapse"),D(se,"table-layout","fixed"),G(Se,"class","markdown"),G(Se,"id","pr-details-enter-pr-id")},m(g,C){p(g,t,C),p(g,e,C),p(g,a,C),p(g,l,C),T(o,g,C),p(g,s,C),p(g,u,C),p(g,h,C),p(g,n,C),p(g,M,C),p(g,F,C),S(F,q),S(q,Z),S(Z,B),S(B,W),S(W,K),T(N,K,null),S(W,x),S(W,H),T(Y,H,null),p(g,ee,C),T(V,g,C),p(g,I,C),p(g,J,C),p(g,it,C),p(g,nt,C),p(g,lt,C),p(g,Qe,C),p(g,dt,C),p(g,_t,C),p(g,yt,C),p(g,ie,C),S(ie,Ue),S(Ue,ct),S(ct,qe),S(qe,st),S(st,pt),T($t,pt,null),S(st,et),S(st,Be),T(xe,Be,null),p(g,mt,C),p(g,ut,C),S(ut,vt),S(vt,Ie),S(vt,bt),p(g,gt,C),p(g,wt,C),S(wt,Et),p(g,Xe,C),p(g,Te,C),p(g,Oe,C),p(g,he,C),p(g,Le,C),T($e,g,C),p(g,ge,C),T(ve,g,C),p(g,Pe,C),T(le,g,C),p(g,Fe,C),p(g,re,C),p(g,oe,C),T(Ee,g,C),p(g,O,C),p(g,se,C),S(se,fe),S(fe,ne),S(ne,Ve),S(Ve,He),S(He,de),T(_e,de,null),S(He,Ge),S(He,ae),T(Q,ae,null),p(g,rt,C),T(Ae,g,C),p(g,Je,C),p(g,Se,C),p(g,Ke,C),T(ze,g,C),p(g,at,C),T(ke,g,C),p(g,Me,C),T(De,g,C),p(g,be,C),T(We,g,C),X=!0},p(g,C){const Ce={};C[0]&2097152&&(Ce.data=g[21]),C[8]&262144&&(Ce.$$scope={dirty:C,ctx:g}),o.$set(Ce);const _={};C[8]&262144&&(_.$$scope={dirty:C,ctx:g}),N.$set(_);const v={};C[1]&512&&(v.data=g[40]),Y.$set(v);const Ct={};C[1]&4096&&(Ct.content=g[43]),V.$set(Ct);const Vt={};C[8]&262144&&(Vt.$$scope={dirty:C,ctx:g}),$t.$set(Vt);const Lt={};C[8]&262144&&(Lt.$$scope={dirty:C,ctx:g}),xe.$set(Lt),(!X||C[0]&1)&&tt!==(tt=g[0].roadmap_years.value+"")&&Ot(Ie,tt),(!X||C[0]&524288)&&qt!==(qt=g[19][0].single_sentence_summary+"")&&Ot(Et,qt);const St={};C[0]&524289|C[8]&262144&&(St.$$scope={dirty:C,ctx:g}),$e.$set(St);const Ft={};C[0]&512&&(Ft.data=g[9]),ve.$set(Ft);const Gt={};C[0]&8192&&(Gt.data=g[13]),le.$set(Gt),(!X||C[0]&1)&&we!==(we=g[0].selected_dimensions+"")&&Ot(re,we);const Rt={};C[0]&16&&(Rt.data=g[4]),C[8]&262144&&(Rt.$$scope={dirty:C,ctx:g}),Ee.$set(Rt);const jt={};C[8]&262144&&(jt.$$scope={dirty:C,ctx:g}),_e.$set(jt);const Mt={};C[8]&262144&&(Mt.$$scope={dirty:C,ctx:g}),Q.$set(Mt);const Tt={};C[0]&1024&&(Tt.data=g[10]),Ae.$set(Tt);const Ye={};C[0]&128&&(Ye.data=g[7]),C[8]&262144&&(Ye.$$scope={dirty:C,ctx:g}),ke.$set(Ye);const Ne={};C[0]&256&&(Ne.data=g[8]),C[8]&262144&&(Ne.$$scope={dirty:C,ctx:g}),De.$set(Ne);const $={};C[0]&32&&($.data=g[5]),We.$set($)},i(g){X||(m(o.$$.fragment,g),m(N.$$.fragment,g),m(Y.$$.fragment,g),m(V.$$.fragment,g),m($t.$$.fragment,g),m(xe.$$.fragment,g),m($e.$$.fragment,g),m(ve.$$.fragment,g),m(le.$$.fragment,g),m(Ee.$$.fragment,g),m(_e.$$.fragment,g),m(Q.$$.fragment,g),m(Ae.$$.fragment,g),m(ze.$$.fragment,g),m(ke.$$.fragment,g),m(De.$$.fragment,g),m(We.$$.fragment,g),X=!0)},o(g){d(o.$$.fragment,g),d(N.$$.fragment,g),d(Y.$$.fragment,g),d(V.$$.fragment,g),d($t.$$.fragment,g),d(xe.$$.fragment,g),d($e.$$.fragment,g),d(ve.$$.fragment,g),d(le.$$.fragment,g),d(Ee.$$.fragment,g),d(_e.$$.fragment,g),d(Q.$$.fragment,g),d(Ae.$$.fragment,g),d(ze.$$.fragment,g),d(ke.$$.fragment,g),d(De.$$.fragment,g),d(We.$$.fragment,g),X=!1},d(g){g&&(f(t),f(e),f(a),f(l),f(s),f(u),f(h),f(n),f(M),f(F),f(ee),f(I),f(J),f(it),f(nt),f(lt),f(Qe),f(dt),f(_t),f(yt),f(ie),f(mt),f(ut),f(gt),f(wt),f(Xe),f(Te),f(Oe),f(he),f(Le),f(ge),f(Pe),f(Fe),f(re),f(oe),f(O),f(se),f(rt),f(Je),f(Se),f(Ke),f(at),f(Me),f(be)),w(o,g),w(N),w(Y),w(V,g),w($t),w(xe),w($e,g),w(ve,g),w(le,g),w(Ee,g),w(_e),w(Q),w(Ae,g),w(ze,g),w(ke,g),w(De,g),w(We,g)}}}function _o(i){let t,r,e,a,l,o;return t=new Gi({props:{label:"Platform: Delivery Overview & Analysis",$$slots:{default:[Yn]},$$scope:{ctx:i}}}),e=new Gi({props:{label:"Programme: Delivery Overview & Analysis",$$slots:{default:[Gn]},$$scope:{ctx:i}}}),l=new Gi({props:{label:"Zenoh Roapmap Revisions: 2021--2025",$$slots:{default:[oo]},$$scope:{ctx:i}}}),{c(){R(t.$$.fragment),r=b(),R(e.$$.fragment),a=b(),R(l.$$.fragment)},l(s){E(t.$$.fragment,s),r=y(s),E(e.$$.fragment,s),a=y(s),E(l.$$.fragment,s)},m(s,u){T(t,s,u),p(s,r,u),T(e,s,u),p(s,a,u),T(l,s,u),o=!0},p(s,u){const c={};u[0]&1744830465|u[1]&25|u[8]&262144&&(c.$$scope={dirty:u,ctx:s}),t.$set(c);const h={};u[0]&1879048201|u[1]&8290|u[8]&262144&&(h.$$scope={dirty:u,ctx:s}),e.$set(h);const n={};u[0]&2631601|u[1]&4608|u[8]&262144&&(n.$$scope={dirty:u,ctx:s}),l.$set(n)},i(s){o||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(l.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),d(l.$$.fragment,s),o=!1},d(s){s&&(f(r),f(a)),w(t,s),w(e,s),w(l,s)}}}function gl(i){let t,r;return t=new je({props:{queryID:"work_items_status_2024_by_requirement",queryResult:i[4]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&16&&(l.queryResult=e[4]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function vl(i){let t,r;return t=new je({props:{queryID:"work_items_status_2024",queryResult:i[5]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&32&&(l.queryResult=e[5]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function yl(i){let t,r;return t=new je({props:{queryID:"heatmap_data",queryResult:i[6]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&64&&(l.queryResult=e[6]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function bl(i){let t,r;return t=new je({props:{queryID:"heatmap_data_pr_filtered",queryResult:i[7]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&128&&(l.queryResult=e[7]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function wl(i){let t,r;return t=new je({props:{queryID:"heatmap_data_filtered_details",queryResult:i[8]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&256&&(l.queryResult=e[8]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Tl(i){let t,r;return t=new je({props:{queryID:"milestone_dates",queryResult:i[9]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&512&&(l.queryResult=e[9]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function El(i){let t,r;return t=new je({props:{queryID:"roadmap_heatmap_data",queryResult:i[10]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&1024&&(l.queryResult=e[10]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Rl(i){let t,r;return t=new je({props:{queryID:"roadmap_heatmap_data_total",queryResult:i[11]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&2048&&(l.queryResult=e[11]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ql(i){let t,r;return t=new je({props:{queryID:"roadmap_dimensions",queryResult:i[12]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&4096&&(l.queryResult=e[12]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Sl(i){let t,r;return t=new je({props:{queryID:"bollocks",queryResult:i[13]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&8192&&(l.queryResult=e[13]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function hl(i){let t,r;return t=new je({props:{queryID:"test_roadmap_deltas",queryResult:i[14]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&16384&&(l.queryResult=e[14]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Al(i){let t,r;return t=new je({props:{queryID:"roadmap_revisions_summaries",queryResult:i[15]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&32768&&(l.queryResult=e[15]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function kl(i){let t,r;return t=new je({props:{queryID:"base_years",queryResult:i[16]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&65536&&(l.queryResult=e[16]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Dl(i){let t,r;return t=new je({props:{queryID:"revision_years",queryResult:i[17]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&131072&&(l.queryResult=e[17]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Cl(i){let t,r;return t=new je({props:{queryID:"readers",queryResult:i[18]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&262144&&(l.queryResult=e[18]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Nl(i){let t,r;return t=new je({props:{queryID:"display_roadmap_revisions_summaries",queryResult:i[19]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&524288&&(l.queryResult=e[19]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Il(i){let t,r;return t=new je({props:{queryID:"newDimensions",queryResult:i[20]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&1048576&&(l.queryResult=e[20]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Ol(i){let t,r;return t=new je({props:{queryID:"newMega",queryResult:i[21]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&2097152&&(l.queryResult=e[21]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Ll(i){let t,r;return t=new je({props:{queryID:"roadmapOverviewSelectedDimensions",queryResult:i[22]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&4194304&&(l.queryResult=e[22]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Fl(i){let t,r;return t=new je({props:{queryID:"weekly_display_bar_chart_dim2",queryResult:i[23]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&8388608&&(l.queryResult=e[23]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Ml(i){let t,r;return t=new je({props:{queryID:"mega",queryResult:i[24]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&16777216&&(l.queryResult=e[24]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Bl(i){let t,r;return t=new je({props:{queryID:"quaterly_developer_activity",queryResult:i[25]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&33554432&&(l.queryResult=e[25]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Hl(i){let t,r;return t=new je({props:{queryID:"quater_start_end_dates",queryResult:i[1]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&2&&(l.queryResult=e[1]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Ul(i){let t,r;return t=new je({props:{queryID:"jumbotron",queryResult:i[26]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&67108864&&(l.queryResult=e[26]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Pl(i){let t,r;return t=new je({props:{queryID:"cf_all_time_quterly_counts_jumbotron",queryResult:i[27]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&134217728&&(l.queryResult=e[27]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Wl(i){let t,r;return t=new je({props:{queryID:"cf_all_time_quterly_counts_programme_jumbotron",queryResult:i[28]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&268435456&&(l.queryResult=e[28]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Yl(i){let t,r;return t=new je({props:{queryID:"pr_label_counts_selected_quater",queryResult:i[29]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&536870912&&(l.queryResult=e[29]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function jl(i){let t,r;return t=new je({props:{queryID:"pr_label_counts_dim_filter_selected_quater",queryResult:i[30]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&1073741824&&(l.queryResult=e[30]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Ql(i){let t,r;return t=new je({props:{queryID:"dim_data_selected_quater_new",queryResult:i[31]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&1&&(l.queryResult=e[31]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Xl(i){let t,r;return t=new je({props:{queryID:"dim_data_selected_quater_new_programme",queryResult:i[32]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&2&&(l.queryResult=e[32]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Vl(i){let t,r;return t=new je({props:{queryID:"bar_chart_base_data2",queryResult:i[33]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&4&&(l.queryResult=e[33]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Gl(i){let t,r;return t=new je({props:{queryID:"wekly_display_bar_chart_data2",queryResult:i[34]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&8&&(l.queryResult=e[34]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function zl(i){let t,r;return t=new je({props:{queryID:"activity2",queryResult:i[35]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&16&&(l.queryResult=e[35]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function xl(i){let t,r;return t=new je({props:{queryID:"owners",queryResult:i[36]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&32&&(l.queryResult=e[36]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Jl(i){let t,r;return t=new je({props:{queryID:"repos",queryResult:i[37]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&64&&(l.queryResult=e[37]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Kl(i){let t,r;return t=new je({props:{queryID:"roadmap2025",queryResult:i[38]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&128&&(l.queryResult=e[38]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function Zl(i){let t,r;return t=new je({props:{queryID:"get_plan_revisions_by_version",queryResult:i[39]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&256&&(l.queryResult=e[39]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function es(i){let t,r;return t=new je({props:{queryID:"roadmap_sections_payload",queryResult:i[2]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[0]&4&&(l.queryResult=e[2]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ts(i){let t,r;return t=new je({props:{queryID:"roadmap_sections",queryResult:i[40]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&512&&(l.queryResult=e[40]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function rs(i){let t,r;return t=new je({props:{queryID:"get_plan_revisions",queryResult:i[41]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&1024&&(l.queryResult=e[41]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function as(i){let t,r;return t=new je({props:{queryID:"get_selective_plan_revisions",queryResult:i[42]}}),{c(){R(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){T(t,e,a),r=!0},p(e,a){const l={};a[1]&2048&&(l.queryResult=e[42]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function mo(i){let t,r,e,a,l,o,s='<a href="#eclipse--delivery-overiew--analysis">Eclipse  Delivery Overiew &amp; Analysis</a>',u,c,h,n,M,F,q,Z,B,W,K,N,x,H,Y,ee,V,I,J,it,nt,lt,Qe,ot,dt,_t,yt,ie,Ue,ct,qe,st,pt,$t,et,Be,xe,mt,ut,vt,tt,Ie,bt,gt,wt;function qt(_,v){return typeof At<"u"&&At.title?kn:An}let Xe=qt()(i),Te=typeof At=="object"&&Dn();c=new Ps({props:{fullWidth:"true",$$slots:{default:[_o]},$$scope:{ctx:i}}});let Oe=i[4]&&gl(i),he=i[5]&&vl(i),Le=i[6]&&yl(i),$e=i[7]&&bl(i),ge=i[8]&&wl(i),ve=i[9]&&Tl(i),Pe=i[10]&&El(i),le=i[11]&&Rl(i),Fe=i[12]&&ql(i),we=i[13]&&Sl(i),re=i[14]&&hl(i),oe=i[15]&&Al(i),Ee=i[16]&&kl(i),O=i[17]&&Dl(i),se=i[18]&&Cl(i),fe=i[19]&&Nl(i),ne=i[20]&&Il(i),Ve=i[21]&&Ol(i),He=i[22]&&Ll(i),de=i[23]&&Fl(i),_e=i[24]&&Ml(i),Ge=i[25]&&Bl(i),ae=i[1]&&Hl(i),Q=i[26]&&Ul(i),rt=i[27]&&Pl(i),Ae=i[28]&&Wl(i),Je=i[29]&&Yl(i),Se=i[30]&&jl(i),ye=i[31]&&Ql(i),Ke=i[32]&&Xl(i),ze=i[33]&&Vl(i),at=i[34]&&Gl(i),ke=i[35]&&zl(i),Me=i[36]&&xl(i),De=i[37]&&Jl(i),be=i[38]&&Kl(i),We=i[39]&&Zl(i),X=i[2]&&es(i),g=i[40]&&ts(i),C=i[41]&&rs(i),Ce=i[42]&&as(i);return{c(){t=b(),Xe.c(),r=k("meta"),e=k("meta"),Te&&Te.c(),a=mr(),l=b(),o=k("h1"),o.innerHTML=s,u=b(),R(c.$$.fragment),h=b(),Oe&&Oe.c(),n=b(),he&&he.c(),M=b(),Le&&Le.c(),F=b(),$e&&$e.c(),q=b(),ge&&ge.c(),Z=b(),ve&&ve.c(),B=b(),Pe&&Pe.c(),W=b(),le&&le.c(),K=b(),Fe&&Fe.c(),N=b(),we&&we.c(),x=b(),re&&re.c(),H=b(),oe&&oe.c(),Y=b(),Ee&&Ee.c(),ee=b(),O&&O.c(),V=b(),se&&se.c(),I=b(),fe&&fe.c(),J=b(),ne&&ne.c(),it=b(),Ve&&Ve.c(),nt=b(),He&&He.c(),lt=b(),de&&de.c(),Qe=b(),_e&&_e.c(),ot=b(),Ge&&Ge.c(),dt=b(),ae&&ae.c(),_t=b(),Q&&Q.c(),yt=b(),rt&&rt.c(),ie=b(),Ae&&Ae.c(),Ue=b(),Je&&Je.c(),ct=b(),Se&&Se.c(),qe=b(),ye&&ye.c(),st=b(),Ke&&Ke.c(),pt=b(),ze&&ze.c(),$t=b(),at&&at.c(),et=b(),ke&&ke.c(),Be=b(),Me&&Me.c(),xe=b(),De&&De.c(),mt=b(),be&&be.c(),ut=b(),We&&We.c(),vt=b(),X&&X.c(),tt=b(),g&&g.c(),Ie=b(),C&&C.c(),bt=b(),Ce&&Ce.c(),gt=mr(),this.h()},l(_){t=y(_);const v=qs("svelte-2igo1p",document.head);Xe.l(v),r=A(v,"META",{name:!0,content:!0}),e=A(v,"META",{name:!0,content:!0}),Te&&Te.l(v),a=mr(),v.forEach(f),l=y(_),o=A(_,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Kt(o)!=="svelte-1b3ac9k"&&(o.innerHTML=s),u=y(_),E(c.$$.fragment,_),h=y(_),Oe&&Oe.l(_),n=y(_),he&&he.l(_),M=y(_),Le&&Le.l(_),F=y(_),$e&&$e.l(_),q=y(_),ge&&ge.l(_),Z=y(_),ve&&ve.l(_),B=y(_),Pe&&Pe.l(_),W=y(_),le&&le.l(_),K=y(_),Fe&&Fe.l(_),N=y(_),we&&we.l(_),x=y(_),re&&re.l(_),H=y(_),oe&&oe.l(_),Y=y(_),Ee&&Ee.l(_),ee=y(_),O&&O.l(_),V=y(_),se&&se.l(_),I=y(_),fe&&fe.l(_),J=y(_),ne&&ne.l(_),it=y(_),Ve&&Ve.l(_),nt=y(_),He&&He.l(_),lt=y(_),de&&de.l(_),Qe=y(_),_e&&_e.l(_),ot=y(_),Ge&&Ge.l(_),dt=y(_),ae&&ae.l(_),_t=y(_),Q&&Q.l(_),yt=y(_),rt&&rt.l(_),ie=y(_),Ae&&Ae.l(_),Ue=y(_),Je&&Je.l(_),ct=y(_),Se&&Se.l(_),qe=y(_),ye&&ye.l(_),st=y(_),Ke&&Ke.l(_),pt=y(_),ze&&ze.l(_),$t=y(_),at&&at.l(_),et=y(_),ke&&ke.l(_),Be=y(_),Me&&Me.l(_),xe=y(_),De&&De.l(_),mt=y(_),be&&be.l(_),ut=y(_),We&&We.l(_),vt=y(_),X&&X.l(_),tt=y(_),g&&g.l(_),Ie=y(_),C&&C.l(_),bt=y(_),Ce&&Ce.l(_),gt=mr(),this.h()},h(){G(r,"name","twitter:card"),G(r,"content","summary_large_image"),G(e,"name","twitter:site"),G(e,"content","@evidence_dev"),G(o,"class","markdown"),G(o,"id","eclipse--delivery-overiew--analysis")},m(_,v){p(_,t,v),Xe.m(document.head,null),S(document.head,r),S(document.head,e),Te&&Te.m(document.head,null),S(document.head,a),p(_,l,v),p(_,o,v),p(_,u,v),T(c,_,v),p(_,h,v),Oe&&Oe.m(_,v),p(_,n,v),he&&he.m(_,v),p(_,M,v),Le&&Le.m(_,v),p(_,F,v),$e&&$e.m(_,v),p(_,q,v),ge&&ge.m(_,v),p(_,Z,v),ve&&ve.m(_,v),p(_,B,v),Pe&&Pe.m(_,v),p(_,W,v),le&&le.m(_,v),p(_,K,v),Fe&&Fe.m(_,v),p(_,N,v),we&&we.m(_,v),p(_,x,v),re&&re.m(_,v),p(_,H,v),oe&&oe.m(_,v),p(_,Y,v),Ee&&Ee.m(_,v),p(_,ee,v),O&&O.m(_,v),p(_,V,v),se&&se.m(_,v),p(_,I,v),fe&&fe.m(_,v),p(_,J,v),ne&&ne.m(_,v),p(_,it,v),Ve&&Ve.m(_,v),p(_,nt,v),He&&He.m(_,v),p(_,lt,v),de&&de.m(_,v),p(_,Qe,v),_e&&_e.m(_,v),p(_,ot,v),Ge&&Ge.m(_,v),p(_,dt,v),ae&&ae.m(_,v),p(_,_t,v),Q&&Q.m(_,v),p(_,yt,v),rt&&rt.m(_,v),p(_,ie,v),Ae&&Ae.m(_,v),p(_,Ue,v),Je&&Je.m(_,v),p(_,ct,v),Se&&Se.m(_,v),p(_,qe,v),ye&&ye.m(_,v),p(_,st,v),Ke&&Ke.m(_,v),p(_,pt,v),ze&&ze.m(_,v),p(_,$t,v),at&&at.m(_,v),p(_,et,v),ke&&ke.m(_,v),p(_,Be,v),Me&&Me.m(_,v),p(_,xe,v),De&&De.m(_,v),p(_,mt,v),be&&be.m(_,v),p(_,ut,v),We&&We.m(_,v),p(_,vt,v),X&&X.m(_,v),p(_,tt,v),g&&g.m(_,v),p(_,Ie,v),C&&C.m(_,v),p(_,bt,v),Ce&&Ce.m(_,v),p(_,gt,v),wt=!0},p(_,v){Xe.p(_,v),typeof At=="object"&&Te.p(_,v);const Ct={};v[0]&2015897529|v[1]&12923|v[8]&262144&&(Ct.$$scope={dirty:v,ctx:_}),c.$set(Ct),_[4]?Oe?(Oe.p(_,v),v[0]&16&&m(Oe,1)):(Oe=gl(_),Oe.c(),m(Oe,1),Oe.m(n.parentNode,n)):Oe&&(me(),d(Oe,1,1,()=>{Oe=null}),ue()),_[5]?he?(he.p(_,v),v[0]&32&&m(he,1)):(he=vl(_),he.c(),m(he,1),he.m(M.parentNode,M)):he&&(me(),d(he,1,1,()=>{he=null}),ue()),_[6]?Le?(Le.p(_,v),v[0]&64&&m(Le,1)):(Le=yl(_),Le.c(),m(Le,1),Le.m(F.parentNode,F)):Le&&(me(),d(Le,1,1,()=>{Le=null}),ue()),_[7]?$e?($e.p(_,v),v[0]&128&&m($e,1)):($e=bl(_),$e.c(),m($e,1),$e.m(q.parentNode,q)):$e&&(me(),d($e,1,1,()=>{$e=null}),ue()),_[8]?ge?(ge.p(_,v),v[0]&256&&m(ge,1)):(ge=wl(_),ge.c(),m(ge,1),ge.m(Z.parentNode,Z)):ge&&(me(),d(ge,1,1,()=>{ge=null}),ue()),_[9]?ve?(ve.p(_,v),v[0]&512&&m(ve,1)):(ve=Tl(_),ve.c(),m(ve,1),ve.m(B.parentNode,B)):ve&&(me(),d(ve,1,1,()=>{ve=null}),ue()),_[10]?Pe?(Pe.p(_,v),v[0]&1024&&m(Pe,1)):(Pe=El(_),Pe.c(),m(Pe,1),Pe.m(W.parentNode,W)):Pe&&(me(),d(Pe,1,1,()=>{Pe=null}),ue()),_[11]?le?(le.p(_,v),v[0]&2048&&m(le,1)):(le=Rl(_),le.c(),m(le,1),le.m(K.parentNode,K)):le&&(me(),d(le,1,1,()=>{le=null}),ue()),_[12]?Fe?(Fe.p(_,v),v[0]&4096&&m(Fe,1)):(Fe=ql(_),Fe.c(),m(Fe,1),Fe.m(N.parentNode,N)):Fe&&(me(),d(Fe,1,1,()=>{Fe=null}),ue()),_[13]?we?(we.p(_,v),v[0]&8192&&m(we,1)):(we=Sl(_),we.c(),m(we,1),we.m(x.parentNode,x)):we&&(me(),d(we,1,1,()=>{we=null}),ue()),_[14]?re?(re.p(_,v),v[0]&16384&&m(re,1)):(re=hl(_),re.c(),m(re,1),re.m(H.parentNode,H)):re&&(me(),d(re,1,1,()=>{re=null}),ue()),_[15]?oe?(oe.p(_,v),v[0]&32768&&m(oe,1)):(oe=Al(_),oe.c(),m(oe,1),oe.m(Y.parentNode,Y)):oe&&(me(),d(oe,1,1,()=>{oe=null}),ue()),_[16]?Ee?(Ee.p(_,v),v[0]&65536&&m(Ee,1)):(Ee=kl(_),Ee.c(),m(Ee,1),Ee.m(ee.parentNode,ee)):Ee&&(me(),d(Ee,1,1,()=>{Ee=null}),ue()),_[17]?O?(O.p(_,v),v[0]&131072&&m(O,1)):(O=Dl(_),O.c(),m(O,1),O.m(V.parentNode,V)):O&&(me(),d(O,1,1,()=>{O=null}),ue()),_[18]?se?(se.p(_,v),v[0]&262144&&m(se,1)):(se=Cl(_),se.c(),m(se,1),se.m(I.parentNode,I)):se&&(me(),d(se,1,1,()=>{se=null}),ue()),_[19]?fe?(fe.p(_,v),v[0]&524288&&m(fe,1)):(fe=Nl(_),fe.c(),m(fe,1),fe.m(J.parentNode,J)):fe&&(me(),d(fe,1,1,()=>{fe=null}),ue()),_[20]?ne?(ne.p(_,v),v[0]&1048576&&m(ne,1)):(ne=Il(_),ne.c(),m(ne,1),ne.m(it.parentNode,it)):ne&&(me(),d(ne,1,1,()=>{ne=null}),ue()),_[21]?Ve?(Ve.p(_,v),v[0]&2097152&&m(Ve,1)):(Ve=Ol(_),Ve.c(),m(Ve,1),Ve.m(nt.parentNode,nt)):Ve&&(me(),d(Ve,1,1,()=>{Ve=null}),ue()),_[22]?He?(He.p(_,v),v[0]&4194304&&m(He,1)):(He=Ll(_),He.c(),m(He,1),He.m(lt.parentNode,lt)):He&&(me(),d(He,1,1,()=>{He=null}),ue()),_[23]?de?(de.p(_,v),v[0]&8388608&&m(de,1)):(de=Fl(_),de.c(),m(de,1),de.m(Qe.parentNode,Qe)):de&&(me(),d(de,1,1,()=>{de=null}),ue()),_[24]?_e?(_e.p(_,v),v[0]&16777216&&m(_e,1)):(_e=Ml(_),_e.c(),m(_e,1),_e.m(ot.parentNode,ot)):_e&&(me(),d(_e,1,1,()=>{_e=null}),ue()),_[25]?Ge?(Ge.p(_,v),v[0]&33554432&&m(Ge,1)):(Ge=Bl(_),Ge.c(),m(Ge,1),Ge.m(dt.parentNode,dt)):Ge&&(me(),d(Ge,1,1,()=>{Ge=null}),ue()),_[1]?ae?(ae.p(_,v),v[0]&2&&m(ae,1)):(ae=Hl(_),ae.c(),m(ae,1),ae.m(_t.parentNode,_t)):ae&&(me(),d(ae,1,1,()=>{ae=null}),ue()),_[26]?Q?(Q.p(_,v),v[0]&67108864&&m(Q,1)):(Q=Ul(_),Q.c(),m(Q,1),Q.m(yt.parentNode,yt)):Q&&(me(),d(Q,1,1,()=>{Q=null}),ue()),_[27]?rt?(rt.p(_,v),v[0]&134217728&&m(rt,1)):(rt=Pl(_),rt.c(),m(rt,1),rt.m(ie.parentNode,ie)):rt&&(me(),d(rt,1,1,()=>{rt=null}),ue()),_[28]?Ae?(Ae.p(_,v),v[0]&268435456&&m(Ae,1)):(Ae=Wl(_),Ae.c(),m(Ae,1),Ae.m(Ue.parentNode,Ue)):Ae&&(me(),d(Ae,1,1,()=>{Ae=null}),ue()),_[29]?Je?(Je.p(_,v),v[0]&536870912&&m(Je,1)):(Je=Yl(_),Je.c(),m(Je,1),Je.m(ct.parentNode,ct)):Je&&(me(),d(Je,1,1,()=>{Je=null}),ue()),_[30]?Se?(Se.p(_,v),v[0]&1073741824&&m(Se,1)):(Se=jl(_),Se.c(),m(Se,1),Se.m(qe.parentNode,qe)):Se&&(me(),d(Se,1,1,()=>{Se=null}),ue()),_[31]?ye?(ye.p(_,v),v[1]&1&&m(ye,1)):(ye=Ql(_),ye.c(),m(ye,1),ye.m(st.parentNode,st)):ye&&(me(),d(ye,1,1,()=>{ye=null}),ue()),_[32]?Ke?(Ke.p(_,v),v[1]&2&&m(Ke,1)):(Ke=Xl(_),Ke.c(),m(Ke,1),Ke.m(pt.parentNode,pt)):Ke&&(me(),d(Ke,1,1,()=>{Ke=null}),ue()),_[33]?ze?(ze.p(_,v),v[1]&4&&m(ze,1)):(ze=Vl(_),ze.c(),m(ze,1),ze.m($t.parentNode,$t)):ze&&(me(),d(ze,1,1,()=>{ze=null}),ue()),_[34]?at?(at.p(_,v),v[1]&8&&m(at,1)):(at=Gl(_),at.c(),m(at,1),at.m(et.parentNode,et)):at&&(me(),d(at,1,1,()=>{at=null}),ue()),_[35]?ke?(ke.p(_,v),v[1]&16&&m(ke,1)):(ke=zl(_),ke.c(),m(ke,1),ke.m(Be.parentNode,Be)):ke&&(me(),d(ke,1,1,()=>{ke=null}),ue()),_[36]?Me?(Me.p(_,v),v[1]&32&&m(Me,1)):(Me=xl(_),Me.c(),m(Me,1),Me.m(xe.parentNode,xe)):Me&&(me(),d(Me,1,1,()=>{Me=null}),ue()),_[37]?De?(De.p(_,v),v[1]&64&&m(De,1)):(De=Jl(_),De.c(),m(De,1),De.m(mt.parentNode,mt)):De&&(me(),d(De,1,1,()=>{De=null}),ue()),_[38]?be?(be.p(_,v),v[1]&128&&m(be,1)):(be=Kl(_),be.c(),m(be,1),be.m(ut.parentNode,ut)):be&&(me(),d(be,1,1,()=>{be=null}),ue()),_[39]?We?(We.p(_,v),v[1]&256&&m(We,1)):(We=Zl(_),We.c(),m(We,1),We.m(vt.parentNode,vt)):We&&(me(),d(We,1,1,()=>{We=null}),ue()),_[2]?X?(X.p(_,v),v[0]&4&&m(X,1)):(X=es(_),X.c(),m(X,1),X.m(tt.parentNode,tt)):X&&(me(),d(X,1,1,()=>{X=null}),ue()),_[40]?g?(g.p(_,v),v[1]&512&&m(g,1)):(g=ts(_),g.c(),m(g,1),g.m(Ie.parentNode,Ie)):g&&(me(),d(g,1,1,()=>{g=null}),ue()),_[41]?C?(C.p(_,v),v[1]&1024&&m(C,1)):(C=rs(_),C.c(),m(C,1),C.m(bt.parentNode,bt)):C&&(me(),d(C,1,1,()=>{C=null}),ue()),_[42]?Ce?(Ce.p(_,v),v[1]&2048&&m(Ce,1)):(Ce=as(_),Ce.c(),m(Ce,1),Ce.m(gt.parentNode,gt)):Ce&&(me(),d(Ce,1,1,()=>{Ce=null}),ue())},i(_){wt||(m(c.$$.fragment,_),m(Oe),m(he),m(Le),m($e),m(ge),m(ve),m(Pe),m(le),m(Fe),m(we),m(re),m(oe),m(Ee),m(O),m(se),m(fe),m(ne),m(Ve),m(He),m(de),m(_e),m(Ge),m(ae),m(Q),m(rt),m(Ae),m(Je),m(Se),m(ye),m(Ke),m(ze),m(at),m(ke),m(Me),m(De),m(be),m(We),m(X),m(g),m(C),m(Ce),wt=!0)},o(_){d(c.$$.fragment,_),d(Oe),d(he),d(Le),d($e),d(ge),d(ve),d(Pe),d(le),d(Fe),d(we),d(re),d(oe),d(Ee),d(O),d(se),d(fe),d(ne),d(Ve),d(He),d(de),d(_e),d(Ge),d(ae),d(Q),d(rt),d(Ae),d(Je),d(Se),d(ye),d(Ke),d(ze),d(at),d(ke),d(Me),d(De),d(be),d(We),d(X),d(g),d(C),d(Ce),wt=!1},d(_){_&&(f(t),f(l),f(o),f(u),f(h),f(n),f(M),f(F),f(q),f(Z),f(B),f(W),f(K),f(N),f(x),f(H),f(Y),f(ee),f(V),f(I),f(J),f(it),f(nt),f(lt),f(Qe),f(ot),f(dt),f(_t),f(yt),f(ie),f(Ue),f(ct),f(qe),f(st),f(pt),f($t),f(et),f(Be),f(xe),f(mt),f(ut),f(vt),f(tt),f(Ie),f(bt),f(gt)),Xe.d(_),f(r),f(e),Te&&Te.d(_),f(a),w(c,_),Oe&&Oe.d(_),he&&he.d(_),Le&&Le.d(_),$e&&$e.d(_),ge&&ge.d(_),ve&&ve.d(_),Pe&&Pe.d(_),le&&le.d(_),Fe&&Fe.d(_),we&&we.d(_),re&&re.d(_),oe&&oe.d(_),Ee&&Ee.d(_),O&&O.d(_),se&&se.d(_),fe&&fe.d(_),ne&&ne.d(_),Ve&&Ve.d(_),He&&He.d(_),de&&de.d(_),_e&&_e.d(_),Ge&&Ge.d(_),ae&&ae.d(_),Q&&Q.d(_),rt&&rt.d(_),Ae&&Ae.d(_),Je&&Je.d(_),Se&&Se.d(_),ye&&ye.d(_),Ke&&Ke.d(_),ze&&ze.d(_),at&&at.d(_),ke&&ke.d(_),Me&&Me.d(_),De&&De.d(_),be&&be.d(_),We&&We.d(_),X&&X.d(_),g&&g.d(_),C&&C.d(_),Ce&&Ce.d(_)}}}const At={title:"Delivery Drill-down"};function uo(i,t,r){let e,a,l,o,s,u,c;ra(i,Js,U=>r(214,u=U)),ra(i,ll,U=>r(218,c=U));let{data:h}=t,{data:n={},customFormattingSettings:M,__db:F,inputs:q}=h;is(ll,c="4bda32355ed9c8a17ee276548face201",c);let Z=Xs(gs(q));Ss(Z.subscribe(U=>r(0,q=U))),hs(zs,{getCustomFormats:()=>M.customFormats||[]});const B=(U,ys)=>Ks(F.query,U,{query_name:ys});Vs(B);let W=u.params;As(()=>!0);let K={initialData:void 0,initialError:void 0},N=j`select *
from eind.requirements_status
order by delivery_outstanding desc`,x=`select *
from eind.requirements_status
order by delivery_outstanding desc`;n.work_items_status_2024_by_requirement_data&&(n.work_items_status_2024_by_requirement_data instanceof Error?K.initialError=n.work_items_status_2024_by_requirement_data:K.initialData=n.work_items_status_2024_by_requirement_data,n.work_items_status_2024_by_requirement_columns&&(K.knownColumns=n.work_items_status_2024_by_requirement_columns));let H,Y=!1;const ee=Re.createReactive({callback:U=>{r(4,H=U)},execFn:B},{id:"work_items_status_2024_by_requirement",...K});ee(x,{noResolve:N,...K}),globalThis[Symbol.for("work_items_status_2024_by_requirement")]={get value(){return H}};let V={initialData:void 0,initialError:void 0},I=j`select * from eind.pr_requirements_wkitm_status`,J="select * from eind.pr_requirements_wkitm_status";n.work_items_status_2024_data&&(n.work_items_status_2024_data instanceof Error?V.initialError=n.work_items_status_2024_data:V.initialData=n.work_items_status_2024_data,n.work_items_status_2024_columns&&(V.knownColumns=n.work_items_status_2024_columns));let it,nt=!1;const lt=Re.createReactive({callback:U=>{r(5,it=U)},execFn:B},{id:"work_items_status_2024",...V});lt(J,{noResolve:I,...V}),globalThis[Symbol.for("work_items_status_2024")]={get value(){return it}};let Qe={initialData:void 0,initialError:void 0},ot=j`select * from eind.pr_requirment_work_item2`,dt="select * from eind.pr_requirment_work_item2";n.heatmap_data_data&&(n.heatmap_data_data instanceof Error?Qe.initialError=n.heatmap_data_data:Qe.initialData=n.heatmap_data_data,n.heatmap_data_columns&&(Qe.knownColumns=n.heatmap_data_columns));let _t,yt=!1;const ie=Re.createReactive({callback:U=>{r(6,_t=U)},execFn:B},{id:"heatmap_data",...Qe});ie(dt,{noResolve:ot,...Qe}),globalThis[Symbol.for("heatmap_data")]={get value(){return _t}};let Ue={initialData:void 0,initialError:void 0},ct=j`SELECT DISTINCT ON (pr_id,technical_description, merged_at)
    pr_id,
    technical_description,
    
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    technical_description,
    merged_at DESC;`,qe=`SELECT DISTINCT ON (pr_id,technical_description, merged_at)
    pr_id,
    technical_description,
    
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    technical_description,
    merged_at DESC;`;n.heatmap_data_pr_filtered_data&&(n.heatmap_data_pr_filtered_data instanceof Error?Ue.initialError=n.heatmap_data_pr_filtered_data:Ue.initialData=n.heatmap_data_pr_filtered_data,n.heatmap_data_pr_filtered_columns&&(Ue.knownColumns=n.heatmap_data_pr_filtered_columns));let st,pt=!1;const $t=Re.createReactive({callback:U=>{r(7,st=U)},execFn:B},{id:"heatmap_data_pr_filtered",...Ue});$t(qe,{noResolve:ct,...Ue}),globalThis[Symbol.for("heatmap_data_pr_filtered")]={get value(){return st}};let et={initialData:void 0,initialError:void 0},Be=j`SELECT DISTINCT ON (pr_id,requirement_id, work_item_id)
    pr_id,
    requirement_id,
    req_desc,
    work_item_id,
    work_item_description,
    milestone_id,
    milestone_description,
    merged_at,
    milestone_date
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    requirement_id,
    work_item_id,
    merged_at DESC;`,xe=`SELECT DISTINCT ON (pr_id,requirement_id, work_item_id)
    pr_id,
    requirement_id,
    req_desc,
    work_item_id,
    work_item_description,
    milestone_id,
    milestone_description,
    merged_at,
    milestone_date
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    requirement_id,
    work_item_id,
    merged_at DESC;`;n.heatmap_data_filtered_details_data&&(n.heatmap_data_filtered_details_data instanceof Error?et.initialError=n.heatmap_data_filtered_details_data:et.initialData=n.heatmap_data_filtered_details_data,n.heatmap_data_filtered_details_columns&&(et.knownColumns=n.heatmap_data_filtered_details_columns));let mt,ut=!1;const vt=Re.createReactive({callback:U=>{r(8,mt=U)},execFn:B},{id:"heatmap_data_filtered_details",...et});vt(xe,{noResolve:Be,...et}),globalThis[Symbol.for("heatmap_data_filtered_details")]={get value(){return mt}};let tt={initialData:void 0,initialError:void 0},Ie=j`select distinct milestone_id,
  milestone_date,
  EXTRACT(MONTH FROM milestone_date) as mlst_month
  from eind.pr_requirment_work_item2
  order by milestone_date ASC`,bt=`select distinct milestone_id,
  milestone_date,
  EXTRACT(MONTH FROM milestone_date) as mlst_month
  from eind.pr_requirment_work_item2
  order by milestone_date ASC`;n.milestone_dates_data&&(n.milestone_dates_data instanceof Error?tt.initialError=n.milestone_dates_data:tt.initialData=n.milestone_dates_data,n.milestone_dates_columns&&(tt.knownColumns=n.milestone_dates_columns));let gt,wt=!1;const qt=Re.createReactive({callback:U=>{r(9,gt=U)},execFn:B},{id:"milestone_dates",...tt});qt(bt,{noResolve:Ie,...tt}),globalThis[Symbol.for("milestone_dates")]={get value(){return gt}};let Et={initialData:void 0,initialError:void 0},Xe=j`SELECT DISTINCT ON (pr_id, requirement_id, work_item_id, milestone_id)
  pr_id AS yval,
  ${q.x_axis_requirment.value} AS xval,
  COUNT(${q.x_axis_requirment.value}) AS count
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}
GROUP BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  ${q.x_axis_requirment.value}
ORDER BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  count DESC
LIMIT 2000;`,Te=`SELECT DISTINCT ON (pr_id, requirement_id, work_item_id, milestone_id)
  pr_id AS yval,
  ${q.x_axis_requirment.value} AS xval,
  COUNT(${q.x_axis_requirment.value}) AS count
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}
GROUP BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  ${q.x_axis_requirment.value}
ORDER BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  count DESC
LIMIT 2000;`;n.roadmap_heatmap_data_data&&(n.roadmap_heatmap_data_data instanceof Error?Et.initialError=n.roadmap_heatmap_data_data:Et.initialData=n.roadmap_heatmap_data_data,n.roadmap_heatmap_data_columns&&(Et.knownColumns=n.roadmap_heatmap_data_columns));let Oe,he=!1;const Le=Re.createReactive({callback:U=>{r(10,Oe=U)},execFn:B},{id:"roadmap_heatmap_data",...Et});Le(Te,{noResolve:Xe,...Et}),globalThis[Symbol.for("roadmap_heatmap_data")]={get value(){return Oe}};let $e={initialData:void 0,initialError:void 0},ge=j`SELECT
  COUNT(DISTINCT pr_id) AS total_prs
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}

limit 2000;`,ve=`SELECT
  COUNT(DISTINCT pr_id) AS total_prs
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}

limit 2000;`;n.roadmap_heatmap_data_total_data&&(n.roadmap_heatmap_data_total_data instanceof Error?$e.initialError=n.roadmap_heatmap_data_total_data:$e.initialData=n.roadmap_heatmap_data_total_data,n.roadmap_heatmap_data_total_columns&&($e.knownColumns=n.roadmap_heatmap_data_total_columns));let Pe,le=!1;const Fe=Re.createReactive({callback:U=>{r(11,Pe=U)},execFn:B},{id:"roadmap_heatmap_data_total",...$e});Fe(ve,{noResolve:ge,...$e}),globalThis[Symbol.for("roadmap_heatmap_data_total")]={get value(){return Pe}};let we={initialData:void 0,initialError:void 0},re=j`select 
        pr_id,
        workstream_name,
        business_objective,
        category as "Dev Activity"
            
 from (select *
  from eind.dimemsion_data_2024)
 WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`,oe=`select 
        pr_id,
        workstream_name,
        business_objective,
        category as "Dev Activity"
            
 from (select *
  from eind.dimemsion_data_2024)
 WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`;n.roadmap_dimensions_data&&(n.roadmap_dimensions_data instanceof Error?we.initialError=n.roadmap_dimensions_data:we.initialData=n.roadmap_dimensions_data,n.roadmap_dimensions_columns&&(we.knownColumns=n.roadmap_dimensions_columns));let Ee,O=!1;const se=Re.createReactive({callback:U=>{r(12,Ee=U)},execFn:B},{id:"roadmap_dimensions",...we});se(oe,{noResolve:re,...we}),globalThis[Symbol.for("roadmap_dimensions")]={get value(){return Ee}};let fe={initialData:void 0,initialError:void 0},ne=j`select 
        distinct pr_id,
        business_objective,
        workstream_name,
        category

    from (select *
  from eind.dimemsion_data_2024)
    WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`,Ve=`select 
        distinct pr_id,
        business_objective,
        workstream_name,
        category

    from (select *
  from eind.dimemsion_data_2024)
    WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`;n.bollocks_data&&(n.bollocks_data instanceof Error?fe.initialError=n.bollocks_data:fe.initialData=n.bollocks_data,n.bollocks_columns&&(fe.knownColumns=n.bollocks_columns));let He,de=!1;const _e=Re.createReactive({callback:U=>{r(13,He=U)},execFn:B},{id:"bollocks",...fe});_e(Ve,{noResolve:ne,...fe}),globalThis[Symbol.for("bollocks")]={get value(){return He}};let Ge={initialData:void 0,initialError:void 0},ae=j`select *
  from eind.dimemsion_data_2024`,Q=`select *
  from eind.dimemsion_data_2024`;n.test_roadmap_deltas_data&&(n.test_roadmap_deltas_data instanceof Error?Ge.initialError=n.test_roadmap_deltas_data:Ge.initialData=n.test_roadmap_deltas_data,n.test_roadmap_deltas_columns&&(Ge.knownColumns=n.test_roadmap_deltas_columns));let rt,Ae=!1;const Je=Re.createReactive({callback:U=>{r(14,rt=U)},execFn:B},{id:"test_roadmap_deltas",...Ge});Je(Q,{noResolve:ae,...Ge}),globalThis[Symbol.for("test_roadmap_deltas")]={get value(){return rt}};let Se={initialData:void 0,initialError:void 0},ye=j`select * from csv.roadmap_revisions_role_based_summaries`,Ke="select * from csv.roadmap_revisions_role_based_summaries";n.roadmap_revisions_summaries_data&&(n.roadmap_revisions_summaries_data instanceof Error?Se.initialError=n.roadmap_revisions_summaries_data:Se.initialData=n.roadmap_revisions_summaries_data,n.roadmap_revisions_summaries_columns&&(Se.knownColumns=n.roadmap_revisions_summaries_columns));let ze,at=!1;const ke=Re.createReactive({callback:U=>{r(15,ze=U)},execFn:B},{id:"roadmap_revisions_summaries",...Se});ke(Ke,{noResolve:ye,...Se}),globalThis[Symbol.for("roadmap_revisions_summaries")]={get value(){return ze}};let Me={initialData:void 0,initialError:void 0},De=j`select DISTINCT base_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`,be=`select DISTINCT base_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`;n.base_years_data&&(n.base_years_data instanceof Error?Me.initialError=n.base_years_data:Me.initialData=n.base_years_data,n.base_years_columns&&(Me.knownColumns=n.base_years_columns));let We,X=!1;const g=Re.createReactive({callback:U=>{r(16,We=U)},execFn:B},{id:"base_years",...Me});g(be,{noResolve:De,...Me}),globalThis[Symbol.for("base_years")]={get value(){return We}};let C={initialData:void 0,initialError:void 0},Ce=j`select DISTINCT revision_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`,_=`select DISTINCT revision_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`;n.revision_years_data&&(n.revision_years_data instanceof Error?C.initialError=n.revision_years_data:C.initialData=n.revision_years_data,n.revision_years_columns&&(C.knownColumns=n.revision_years_columns));let v,Ct=!1;const Vt=Re.createReactive({callback:U=>{r(17,v=U)},execFn:B},{id:"revision_years",...C});Vt(_,{noResolve:Ce,...C}),globalThis[Symbol.for("revision_years")]={get value(){return v}};let Lt={initialData:void 0,initialError:void 0},St=j`select DISTINCT reader
 from (select * from csv.roadmap_revisions_role_based_summaries)`,Ft=`select DISTINCT reader
 from (select * from csv.roadmap_revisions_role_based_summaries)`;n.readers_data&&(n.readers_data instanceof Error?Lt.initialError=n.readers_data:Lt.initialData=n.readers_data,n.readers_columns&&(Lt.knownColumns=n.readers_columns));let Gt,Rt=!1;const jt=Re.createReactive({callback:U=>{r(18,Gt=U)},execFn:B},{id:"readers",...Lt});jt(Ft,{noResolve:St,...Lt}),globalThis[Symbol.for("readers")]={get value(){return Gt}};let Mt={initialData:void 0,initialError:void 0},Tt=j`SELECT
  reader,
  single_sentence_summary,
  four_sentence_summary,
  paragraph_title,
  paragraph_content,
  base_year,
  revision_year,
  CAST(CAST(base_year AS INT) AS TEXT)  as base_check,
  CAST(CAST(revision_year AS INT) AS TEXT) as rev_check
  
  FROM (select * from csv.roadmap_revisions_role_based_summaries)
  Where split_part('${q.roadmap_years.value}', '/', 1)= base_check
  AND split_part('${q.roadmap_years.value}', '/', 2) = rev_check
  AND reader= '${q.readers.value}'`,Ye=`SELECT
  reader,
  single_sentence_summary,
  four_sentence_summary,
  paragraph_title,
  paragraph_content,
  base_year,
  revision_year,
  CAST(CAST(base_year AS INT) AS TEXT)  as base_check,
  CAST(CAST(revision_year AS INT) AS TEXT) as rev_check
  
  FROM (select * from csv.roadmap_revisions_role_based_summaries)
  Where split_part('${q.roadmap_years.value}', '/', 1)= base_check
  AND split_part('${q.roadmap_years.value}', '/', 2) = rev_check
  AND reader= '${q.readers.value}'`;n.display_roadmap_revisions_summaries_data&&(n.display_roadmap_revisions_summaries_data instanceof Error?Mt.initialError=n.display_roadmap_revisions_summaries_data:Mt.initialData=n.display_roadmap_revisions_summaries_data,n.display_roadmap_revisions_summaries_columns&&(Mt.knownColumns=n.display_roadmap_revisions_summaries_columns));let Ne,$=!1;const L=Re.createReactive({callback:U=>{r(19,Ne=U)},execFn:B},{id:"display_roadmap_revisions_summaries",...Mt});L(Ye,{noResolve:Tt,...Mt}),globalThis[Symbol.for("display_roadmap_revisions_summaries")]={get value(){return Ne}};let Nt={initialData:void 0,initialError:void 0},It=j`select * from eind2.code_file_summaries`,ht="select * from eind2.code_file_summaries";n.newDimensions_data&&(n.newDimensions_data instanceof Error?Nt.initialError=n.newDimensions_data:Nt.initialData=n.newDimensions_data,n.newDimensions_columns&&(Nt.knownColumns=n.newDimensions_columns));let Ut,Pt=!1;const Qt=Re.createReactive({callback:U=>{r(20,Ut=U)},execFn:B},{id:"newDimensions",...Nt});Qt(ht,{noResolve:It,...Nt}),globalThis[Symbol.for("newDimensions")]={get value(){return Ut}};let Wt={initialData:void 0,initialError:void 0},kt=j`select * from csv.PRDevsByQuarter`,Bt="select * from csv.PRDevsByQuarter";n.newMega_data&&(n.newMega_data instanceof Error?Wt.initialError=n.newMega_data:Wt.initialData=n.newMega_data,n.newMega_columns&&(Wt.knownColumns=n.newMega_columns));let zt,xt=!1;const Dt=Re.createReactive({callback:U=>{r(21,zt=U)},execFn:B},{id:"newMega",...Wt});Dt(Bt,{noResolve:kt,...Wt}),globalThis[Symbol.for("newMega")]={get value(){return zt}};let tr={initialData:void 0,initialError:void 0},Zt=j`select 
    business_objective_desc as business_Objective,
    broad_theme as roadmap_theme,
    ws_desc as WorkSteam_Description,
    activity1 as Activity
    
    from (select * from eind2.code_file_summaries)
    Where req_year = '2022'`,Jt=`select 
    business_objective_desc as business_Objective,
    broad_theme as roadmap_theme,
    ws_desc as WorkSteam_Description,
    activity1 as Activity
    
    from (select * from eind2.code_file_summaries)
    Where req_year = '2022'`;n.roadmapOverviewSelectedDimensions_data&&(n.roadmapOverviewSelectedDimensions_data instanceof Error?tr.initialError=n.roadmapOverviewSelectedDimensions_data:tr.initialData=n.roadmapOverviewSelectedDimensions_data,n.roadmapOverviewSelectedDimensions_columns&&(tr.knownColumns=n.roadmapOverviewSelectedDimensions_columns));let rr,sr=!1;const nr=Re.createReactive({callback:U=>{r(22,rr=U)},execFn:B},{id:"roadmapOverviewSelectedDimensions",...tr});nr(Jt,{noResolve:Zt,...tr}),globalThis[Symbol.for("roadmapOverviewSelectedDimensions")]={get value(){return rr}};let ar={initialData:void 0,initialError:void 0},ir=j`SELECT *
FROM (
  SELECT
    make_date(
      EXTRACT(YEAR FROM merged_at::date)::int,
      ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
      1
    ) AS quarter_start,
    broad_theme as roadmap_theme,
    COUNT(DISTINCT author) AS active_developers,
    COUNT(DISTINCT pr_id) AS prs_merged
    
  FROM (select * from eind2.code_file_summaries)
  GROUP BY 1, 2
) sub
WHERE sub.quarter_start > '1969-12-31'
ORDER BY sub.quarter_start;`,lr=`SELECT *
FROM (
  SELECT
    make_date(
      EXTRACT(YEAR FROM merged_at::date)::int,
      ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
      1
    ) AS quarter_start,
    broad_theme as roadmap_theme,
    COUNT(DISTINCT author) AS active_developers,
    COUNT(DISTINCT pr_id) AS prs_merged
    
  FROM (select * from eind2.code_file_summaries)
  GROUP BY 1, 2
) sub
WHERE sub.quarter_start > '1969-12-31'
ORDER BY sub.quarter_start;`;n.weekly_display_bar_chart_dim2_data&&(n.weekly_display_bar_chart_dim2_data instanceof Error?ar.initialError=n.weekly_display_bar_chart_dim2_data:ar.initialData=n.weekly_display_bar_chart_dim2_data,n.weekly_display_bar_chart_dim2_columns&&(ar.knownColumns=n.weekly_display_bar_chart_dim2_columns));let or,_r=!1;const Yt=Re.createReactive({callback:U=>{r(23,or=U)},execFn:B},{id:"weekly_display_bar_chart_dim2",...ar});Yt(lr,{noResolve:ir,...ar}),globalThis[Symbol.for("weekly_display_bar_chart_dim2")]={get value(){return or}};let ft={initialData:void 0,initialError:void 0},Ht=j`WITH quarter_devs AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    COUNT(DISTINCT author) AS active_developers
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1
)

, quarter_themes AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    broad_theme AS roadmap_theme,
    COUNT(DISTINCT pr_id) AS prs_merged
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1, 2
)

SELECT
  qt.quarter_start,
  qt.roadmap_theme,
  qt.prs_merged,
  qd.active_developers
FROM quarter_themes qt
LEFT JOIN quarter_devs qd
  ON qt.quarter_start = qd.quarter_start
WHERE qt.quarter_start > DATE '1969-12-31'
ORDER BY qt.quarter_start, qt.roadmap_theme;`,sa=`WITH quarter_devs AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    COUNT(DISTINCT author) AS active_developers
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1
)

, quarter_themes AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    broad_theme AS roadmap_theme,
    COUNT(DISTINCT pr_id) AS prs_merged
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1, 2
)

SELECT
  qt.quarter_start,
  qt.roadmap_theme,
  qt.prs_merged,
  qd.active_developers
FROM quarter_themes qt
LEFT JOIN quarter_devs qd
  ON qt.quarter_start = qd.quarter_start
WHERE qt.quarter_start > DATE '1969-12-31'
ORDER BY qt.quarter_start, qt.roadmap_theme;`;n.mega_data&&(n.mega_data instanceof Error?ft.initialError=n.mega_data:ft.initialData=n.mega_data,n.mega_columns&&(ft.knownColumns=n.mega_columns));let Ha,Ua=!1;const Pa=Re.createReactive({callback:U=>{r(24,Ha=U)},execFn:B},{id:"mega",...ft});Pa(sa,{noResolve:Ht,...ft}),globalThis[Symbol.for("mega")]={get value(){return Ha}};let dr={initialData:void 0,initialError:void 0},cr=j`SELECT *
FROM (
 SELECT
   date_trunc('quarter', merged_at)::date AS quarter_start,
   COUNT(DISTINCT author) AS active_developers
 FROM (select * from eind2.code_file_summaries)
 WHERE merged_at IS NOT NULL
   AND author IS NOT NULL
 GROUP BY 1
) sub
WHERE sub.quarter_start > DATE '1969-12-31'
ORDER BY sub.quarter_start;`,na=`SELECT *
FROM (
 SELECT
   date_trunc('quarter', merged_at)::date AS quarter_start,
   COUNT(DISTINCT author) AS active_developers
 FROM (select * from eind2.code_file_summaries)
 WHERE merged_at IS NOT NULL
   AND author IS NOT NULL
 GROUP BY 1
) sub
WHERE sub.quarter_start > DATE '1969-12-31'
ORDER BY sub.quarter_start;`;n.quaterly_developer_activity_data&&(n.quaterly_developer_activity_data instanceof Error?dr.initialError=n.quaterly_developer_activity_data:dr.initialData=n.quaterly_developer_activity_data,n.quaterly_developer_activity_columns&&(dr.knownColumns=n.quaterly_developer_activity_columns));let Wa,Ya=!1;const ja=Re.createReactive({callback:U=>{r(25,Wa=U)},execFn:B},{id:"quaterly_developer_activity",...dr});ja(na,{noResolve:cr,...dr}),globalThis[Symbol.for("quaterly_developer_activity")]={get value(){return Wa}};let pr={initialData:void 0,initialError:void 0},$r=j`SELECT
  "start" AS bob,
  "end"   AS fred,

  -- ISO-style strings (yyyy-mm-dd)
  LEFT(CAST("start" AS VARCHAR), 10) AS start_string,
  LEFT(CAST("end"   AS VARCHAR), 10) AS end_string,

  -- Date-typed columns (ISO)
  CAST("start" AS DATE) AS start_iso,
  CAST("end"   AS DATE) AS end_iso,

  -- Pretty strings (dd-mm-yyyy)
  strftime(CAST("start" AS DATE), '%d-%m-%Y') AS start_date,
  strftime(CAST("end"   AS DATE), '%d-%m-%Y') AS end_date
FROM csv.quater_data
WHERE "year" = ${parseInt(q.year.value,10)}
AND "quarter" = ${parseInt(q.quarter.value,10)};`,oa=`SELECT
  "start" AS bob,
  "end"   AS fred,

  -- ISO-style strings (yyyy-mm-dd)
  LEFT(CAST("start" AS VARCHAR), 10) AS start_string,
  LEFT(CAST("end"   AS VARCHAR), 10) AS end_string,

  -- Date-typed columns (ISO)
  CAST("start" AS DATE) AS start_iso,
  CAST("end"   AS DATE) AS end_iso,

  -- Pretty strings (dd-mm-yyyy)
  strftime(CAST("start" AS DATE), '%d-%m-%Y') AS start_date,
  strftime(CAST("end"   AS DATE), '%d-%m-%Y') AS end_date
FROM csv.quater_data
WHERE "year" = ${parseInt(q.year.value,10)}
AND "quarter" = ${parseInt(q.quarter.value,10)};`;n.quater_start_end_dates_data&&(n.quater_start_end_dates_data instanceof Error?pr.initialError=n.quater_start_end_dates_data:pr.initialData=n.quater_start_end_dates_data,n.quater_start_end_dates_columns&&(pr.knownColumns=n.quater_start_end_dates_columns));let te,Qa=!1;const Xa=Re.createReactive({callback:U=>{r(1,te=U)},execFn:B},{id:"quater_start_end_dates",...pr});Xa(oa,{noResolve:$r,...pr}),globalThis[Symbol.for("quater_start_end_dates")]={get value(){return te}};let gr={initialData:void 0,initialError:void 0},vr=j`select * from pr_activity_technology_industry_category`,_a="select * from pr_activity_technology_industry_category";n.jumbotron_data&&(n.jumbotron_data instanceof Error?gr.initialError=n.jumbotron_data:gr.initialData=n.jumbotron_data,n.jumbotron_columns&&(gr.knownColumns=n.jumbotron_columns));let Va,Ga=!1;const za=Re.createReactive({callback:U=>{r(26,Va=U)},execFn:B},{id:"jumbotron",...gr});za(_a,{noResolve:vr,...gr}),globalThis[Symbol.for("jumbotron")]={get value(){return Va}};let yr={initialData:void 0,initialError:void 0},br=j`SELECT
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start
ORDER BY quarter_start;`,ma=`SELECT
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start
ORDER BY quarter_start;`;n.cf_all_time_quterly_counts_jumbotron_data&&(n.cf_all_time_quterly_counts_jumbotron_data instanceof Error?yr.initialError=n.cf_all_time_quterly_counts_jumbotron_data:yr.initialData=n.cf_all_time_quterly_counts_jumbotron_data,n.cf_all_time_quterly_counts_jumbotron_columns&&(yr.knownColumns=n.cf_all_time_quterly_counts_jumbotron_columns));let xa,Ja=!1;const Ka=Re.createReactive({callback:U=>{r(27,xa=U)},execFn:B},{id:"cf_all_time_quterly_counts_jumbotron",...yr});Ka(ma,{noResolve:br,...yr}),globalThis[Symbol.for("cf_all_time_quterly_counts_jumbotron")]={get value(){return xa}};let wr={initialData:void 0,initialError:void 0},Tr=j`SELECT
  owner as programme,
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start,programme
ORDER BY quarter_start;`,ua=`SELECT
  owner as programme,
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start,programme
ORDER BY quarter_start;`;n.cf_all_time_quterly_counts_programme_jumbotron_data&&(n.cf_all_time_quterly_counts_programme_jumbotron_data instanceof Error?wr.initialError=n.cf_all_time_quterly_counts_programme_jumbotron_data:wr.initialData=n.cf_all_time_quterly_counts_programme_jumbotron_data,n.cf_all_time_quterly_counts_programme_jumbotron_columns&&(wr.knownColumns=n.cf_all_time_quterly_counts_programme_jumbotron_columns));let Za,ei=!1;const ti=Re.createReactive({callback:U=>{r(28,Za=U)},execFn:B},{id:"cf_all_time_quterly_counts_programme_jumbotron",...wr});ti(ua,{noResolve:Tr,...wr}),globalThis[Symbol.for("cf_all_time_quterly_counts_programme_jumbotron")]={get value(){return Za}};let Er={initialData:void 0,initialError:void 0},Rr=j`SELECT
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
WHERE merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`,fa=`SELECT
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
WHERE merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`;n.pr_label_counts_selected_quater_data&&(n.pr_label_counts_selected_quater_data instanceof Error?Er.initialError=n.pr_label_counts_selected_quater_data:Er.initialData=n.pr_label_counts_selected_quater_data,n.pr_label_counts_selected_quater_columns&&(Er.knownColumns=n.pr_label_counts_selected_quater_columns));let ri,ai=!1;const ii=Re.createReactive({callback:U=>{r(29,ri=U)},execFn:B},{id:"pr_label_counts_selected_quater",...Er});ii(fa,{noResolve:Rr,...Er}),globalThis[Symbol.for("pr_label_counts_selected_quater")]={get value(){return ri}};let qr={initialData:void 0,initialError:void 0},Sr=j`SELECT
  COUNT(*)                 AS label_count,   -- code-file rows
  COUNT(DISTINCT pr_id)    AS pr_count    -- unique PRs
FROM (select * from pr_activity_technology_industry_category)
WHERE ${q.pr_dimensions}
AND merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`,da=`SELECT
  COUNT(*)                 AS label_count,   -- code-file rows
  COUNT(DISTINCT pr_id)    AS pr_count    -- unique PRs
FROM (select * from pr_activity_technology_industry_category)
WHERE ${q.pr_dimensions}
AND merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`;n.pr_label_counts_dim_filter_selected_quater_data&&(n.pr_label_counts_dim_filter_selected_quater_data instanceof Error?qr.initialError=n.pr_label_counts_dim_filter_selected_quater_data:qr.initialData=n.pr_label_counts_dim_filter_selected_quater_data,n.pr_label_counts_dim_filter_selected_quater_columns&&(qr.knownColumns=n.pr_label_counts_dim_filter_selected_quater_columns));let li,si=!1;const ni=Re.createReactive({callback:U=>{r(30,li=U)},execFn:B},{id:"pr_label_counts_dim_filter_selected_quater",...qr});ni(da,{noResolve:Sr,...qr}),globalThis[Symbol.for("pr_label_counts_dim_filter_selected_quater")]={get value(){return li}};let hr={initialData:void 0,initialError:void 0},Ar=j`select activity,
        industrial,
        technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`,ca=`select activity,
        industrial,
        technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`;n.dim_data_selected_quater_new_data&&(n.dim_data_selected_quater_new_data instanceof Error?hr.initialError=n.dim_data_selected_quater_new_data:hr.initialData=n.dim_data_selected_quater_new_data,n.dim_data_selected_quater_new_columns&&(hr.knownColumns=n.dim_data_selected_quater_new_columns));let oi,_i=!1;const mi=Re.createReactive({callback:U=>{r(31,oi=U)},execFn:B},{id:"dim_data_selected_quater_new",...hr});mi(ca,{noResolve:Ar,...hr}),globalThis[Symbol.for("dim_data_selected_quater_new")]={get value(){return oi}};let kr={initialData:void 0,initialError:void 0},Dr=j`select 
      owner as programme,
      activity,
      industrial,
      technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`,pa=`select 
      owner as programme,
      activity,
      industrial,
      technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`;n.dim_data_selected_quater_new_programme_data&&(n.dim_data_selected_quater_new_programme_data instanceof Error?kr.initialError=n.dim_data_selected_quater_new_programme_data:kr.initialData=n.dim_data_selected_quater_new_programme_data,n.dim_data_selected_quater_new_programme_columns&&(kr.knownColumns=n.dim_data_selected_quater_new_programme_columns));let ui,fi=!1;const di=Re.createReactive({callback:U=>{r(32,ui=U)},execFn:B},{id:"dim_data_selected_quater_new_programme",...kr});di(pa,{noResolve:Dr,...kr}),globalThis[Symbol.for("dim_data_selected_quater_new_programme")]={get value(){return ui}};let Cr={initialData:void 0,initialError:void 0},Nr=j`SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}'`,$a=`SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}'`;n.bar_chart_base_data2_data&&(n.bar_chart_base_data2_data instanceof Error?Cr.initialError=n.bar_chart_base_data2_data:Cr.initialData=n.bar_chart_base_data2_data,n.bar_chart_base_data2_columns&&(Cr.knownColumns=n.bar_chart_base_data2_columns));let ci,pi=!1;const $i=Re.createReactive({callback:U=>{r(33,ci=U)},execFn:B},{id:"bar_chart_base_data2",...Cr});$i($a,{noResolve:Nr,...Cr}),globalThis[Symbol.for("bar_chart_base_data2")]={get value(){return ci}};let Ir={initialData:void 0,initialError:void 0},Or=j`SELECT
    DATE_TRUNC('week', merged_at)::date AS week_start,
    ${q.label_type.value} AS label,
    COUNT(*) AS count              
  from (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
    
  GROUP BY 1,2
  ORDER BY 1`,ga=`SELECT
    DATE_TRUNC('week', merged_at)::date AS week_start,
    ${q.label_type.value} AS label,
    COUNT(*) AS count              
  from (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
    
  GROUP BY 1,2
  ORDER BY 1`;n.wekly_display_bar_chart_data2_data&&(n.wekly_display_bar_chart_data2_data instanceof Error?Ir.initialError=n.wekly_display_bar_chart_data2_data:Ir.initialData=n.wekly_display_bar_chart_data2_data,n.wekly_display_bar_chart_data2_columns&&(Ir.knownColumns=n.wekly_display_bar_chart_data2_columns));let gi,vi=!1;const yi=Re.createReactive({callback:U=>{r(34,gi=U)},execFn:B},{id:"wekly_display_bar_chart_data2",...Ir});yi(ga,{noResolve:Or,...Ir}),globalThis[Symbol.for("wekly_display_bar_chart_data2")]={get value(){return gi}};let Lr={initialData:void 0,initialError:void 0},Fr=j`select 
          ${q.x_axis.value} as xval,
          ${q.y_axis.value} as yval,
          count(merged_at) as totals,
      FROM
          (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
      WHERE ${q.pr_dimensions}
      GROUP BY ${q.x_axis.value}, ${q.y_axis.value}
      ORDER BY totals desc`,va=`select 
          ${q.x_axis.value} as xval,
          ${q.y_axis.value} as yval,
          count(merged_at) as totals,
      FROM
          (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
      WHERE ${q.pr_dimensions}
      GROUP BY ${q.x_axis.value}, ${q.y_axis.value}
      ORDER BY totals desc`;n.activity2_data&&(n.activity2_data instanceof Error?Lr.initialError=n.activity2_data:Lr.initialData=n.activity2_data,n.activity2_columns&&(Lr.knownColumns=n.activity2_columns));let bi,wi=!1;const Ti=Re.createReactive({callback:U=>{r(35,bi=U)},execFn:B},{id:"activity2",...Lr});Ti(va,{noResolve:Fr,...Lr}),globalThis[Symbol.for("activity2")]={get value(){return bi}};let Mr={initialData:void 0,initialError:void 0},Br=j`select distinct owner from eind.repos`,ya="select distinct owner from eind.repos";n.owners_data&&(n.owners_data instanceof Error?Mr.initialError=n.owners_data:Mr.initialData=n.owners_data,n.owners_columns&&(Mr.knownColumns=n.owners_columns));let Ei,Ri=!1;const qi=Re.createReactive({callback:U=>{r(36,Ei=U)},execFn:B},{id:"owners",...Mr});qi(ya,{noResolve:Br,...Mr}),globalThis[Symbol.for("owners")]={get value(){return Ei}};let Hr={initialData:void 0,initialError:void 0},Ur=j`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${q.owner.value}'`,ba=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${q.owner.value}'`;n.repos_data&&(n.repos_data instanceof Error?Hr.initialError=n.repos_data:Hr.initialData=n.repos_data,n.repos_columns&&(Hr.knownColumns=n.repos_columns));let Si,hi=!1;const Ai=Re.createReactive({callback:U=>{r(37,Si=U)},execFn:B},{id:"repos",...Hr});Ai(ba,{noResolve:Ur,...Hr}),globalThis[Symbol.for("repos")]={get value(){return Si}};let Pr={initialData:void 0,initialError:void 0},Wr=j`select * from
eind.roadmap_versions_sections`,wa=`select * from
eind.roadmap_versions_sections`;n.roadmap2025_data&&(n.roadmap2025_data instanceof Error?Pr.initialError=n.roadmap2025_data:Pr.initialData=n.roadmap2025_data,n.roadmap2025_columns&&(Pr.knownColumns=n.roadmap2025_columns));let ki,Di=!1;const Ci=Re.createReactive({callback:U=>{r(38,ki=U)},execFn:B},{id:"roadmap2025",...Pr});Ci(wa,{noResolve:Wr,...Pr}),globalThis[Symbol.for("roadmap2025")]={get value(){return ki}};let Yr={initialData:void 0,initialError:void 0},jr=j`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC`,Ta=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC`;n.get_plan_revisions_by_version_data&&(n.get_plan_revisions_by_version_data instanceof Error?Yr.initialError=n.get_plan_revisions_by_version_data:Yr.initialData=n.get_plan_revisions_by_version_data,n.get_plan_revisions_by_version_columns&&(Yr.knownColumns=n.get_plan_revisions_by_version_columns));let Ni,Ii=!1;const Oi=Re.createReactive({callback:U=>{r(39,Ni=U)},execFn:B},{id:"get_plan_revisions_by_version",...Yr});Oi(Ta,{noResolve:jr,...Yr}),globalThis[Symbol.for("get_plan_revisions_by_version")]={get value(){return Ni}};let Qr={initialData:void 0,initialError:void 0},Xr=j`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${q.section.value}`,Ea=`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${q.section.value}`;n.roadmap_sections_payload_data&&(n.roadmap_sections_payload_data instanceof Error?Qr.initialError=n.roadmap_sections_payload_data:Qr.initialData=n.roadmap_sections_payload_data,n.roadmap_sections_payload_columns&&(Qr.knownColumns=n.roadmap_sections_payload_columns));let La,Li=!1;const Fi=Re.createReactive({callback:U=>{r(2,La=U)},execFn:B},{id:"roadmap_sections_payload",...Qr});Fi(Ea,{noResolve:Xr,...Qr}),globalThis[Symbol.for("roadmap_sections_payload")]={get value(){return La}};let Vr={initialData:void 0,initialError:void 0},Gr=j`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)`,Ra=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)`;n.roadmap_sections_data&&(n.roadmap_sections_data instanceof Error?Vr.initialError=n.roadmap_sections_data:Vr.initialData=n.roadmap_sections_data,n.roadmap_sections_columns&&(Vr.knownColumns=n.roadmap_sections_columns));let Mi,Bi=!1;const Hi=Re.createReactive({callback:U=>{r(40,Mi=U)},execFn:B},{id:"roadmap_sections",...Vr});Hi(Ra,{noResolve:Gr,...Vr}),globalThis[Symbol.for("roadmap_sections")]={get value(){return Mi}};let zr={initialData:void 0,initialError:void 0},xr=j`select * from eind2.code_file_summaries as road_map_revs`,qa="select * from eind2.code_file_summaries as road_map_revs";n.get_plan_revisions_data&&(n.get_plan_revisions_data instanceof Error?zr.initialError=n.get_plan_revisions_data:zr.initialData=n.get_plan_revisions_data,n.get_plan_revisions_columns&&(zr.knownColumns=n.get_plan_revisions_columns));let Ui,Pi=!1;const Wi=Re.createReactive({callback:U=>{r(41,Ui=U)},execFn:B},{id:"get_plan_revisions",...zr});Wi(qa,{noResolve:xr,...zr}),globalThis[Symbol.for("get_plan_revisions")]={get value(){return Ui}};let Jr={initialData:void 0,initialError:void 0},Kr=j`select requirement_id,
            change_description as requirement_changes,
            completed_2021 as requirement_completed_in_2021,
            milestone_rescheduled_2022 as requirement_reschuled_to_2022,
            changed_2022 as requirment_changed_in_2022,
            current_year as current_year_roadmap_version,
            prior_year as prior_year_roadmap_version


    from  (select * from eind2.code_file_summaries as road_map_revs)`,Sa=`select requirement_id,
            change_description as requirement_changes,
            completed_2021 as requirement_completed_in_2021,
            milestone_rescheduled_2022 as requirement_reschuled_to_2022,
            changed_2022 as requirment_changed_in_2022,
            current_year as current_year_roadmap_version,
            prior_year as prior_year_roadmap_version


    from  (select * from eind2.code_file_summaries as road_map_revs)`;n.get_selective_plan_revisions_data&&(n.get_selective_plan_revisions_data instanceof Error?Jr.initialError=n.get_selective_plan_revisions_data:Jr.initialData=n.get_selective_plan_revisions_data,n.get_selective_plan_revisions_columns&&(Jr.knownColumns=n.get_selective_plan_revisions_columns));let Yi,ji=!1;const Qi=Re.createReactive({callback:U=>{r(42,Yi=U)},execFn:B},{id:"get_selective_plan_revisions",...Jr});return Qi(Sa,{noResolve:Kr,...Jr}),globalThis[Symbol.for("get_selective_plan_revisions")]={get value(){return Yi}},i.$$set=U=>{"data"in U&&r(45,h=U.data)},i.$$.update=()=>{i.$$.dirty[1]&16384&&r(46,{data:n={},customFormattingSettings:M,__db:F}=h,n),i.$$.dirty[1]&32768&&Gs.set(Object.keys(n).length>0),i.$$.dirty[6]&268435456&&r(3,W=u.params),i.$$.dirty[1]&983040&&(N||!Y?N||(ee(x,{noResolve:N,...K}),r(50,Y=!0)):ee(x,{noResolve:N})),i.$$.dirty[1]&15728640&&(I||!nt?I||(lt(J,{noResolve:I,...V}),r(54,nt=!0)):lt(J,{noResolve:I})),i.$$.dirty[1]&251658240&&(ot||!yt?ot||(ie(dt,{noResolve:ot,...Qe}),r(58,yt=!0)):ie(dt,{noResolve:ot})),i.$$.dirty[0]&1&&r(60,ct=j`SELECT DISTINCT ON (pr_id,technical_description, merged_at)
    pr_id,
    technical_description,
    
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    technical_description,
    merged_at DESC;`),i.$$.dirty[0]&1&&r(61,qe=`SELECT DISTINCT ON (pr_id,technical_description, merged_at)
    pr_id,
    technical_description,
    
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    technical_description,
    merged_at DESC;`),i.$$.dirty[1]&1879048192|i.$$.dirty[2]&1&&(ct||!pt?ct||($t(qe,{noResolve:ct,...Ue}),r(62,pt=!0)):$t(qe,{noResolve:ct})),i.$$.dirty[0]&1&&r(64,Be=j`SELECT DISTINCT ON (pr_id,requirement_id, work_item_id)
    pr_id,
    requirement_id,
    req_desc,
    work_item_id,
    work_item_description,
    milestone_id,
    milestone_description,
    merged_at,
    milestone_date
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    requirement_id,
    work_item_id,
    merged_at DESC;`),i.$$.dirty[0]&1&&r(65,xe=`SELECT DISTINCT ON (pr_id,requirement_id, work_item_id)
    pr_id,
    requirement_id,
    req_desc,
    work_item_id,
    work_item_description,
    milestone_id,
    milestone_description,
    merged_at,
    milestone_date
  from (select * from eind.pr_requirment_work_item2)
  where pr_id = ${q.prid}
  ORDER BY
    pr_id,
    requirement_id,
    work_item_id,
    merged_at DESC;`),i.$$.dirty[2]&30&&(Be||!ut?Be||(vt(xe,{noResolve:Be,...et}),r(66,ut=!0)):vt(xe,{noResolve:Be})),i.$$.dirty[2]&480&&(Ie||!wt?Ie||(qt(bt,{noResolve:Ie,...tt}),r(70,wt=!0)):qt(bt,{noResolve:Ie})),i.$$.dirty[0]&1&&r(72,Xe=j`SELECT DISTINCT ON (pr_id, requirement_id, work_item_id, milestone_id)
  pr_id AS yval,
  ${q.x_axis_requirment.value} AS xval,
  COUNT(${q.x_axis_requirment.value}) AS count
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}
GROUP BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  ${q.x_axis_requirment.value}
ORDER BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  count DESC
LIMIT 2000;`),i.$$.dirty[0]&1&&r(73,Te=`SELECT DISTINCT ON (pr_id, requirement_id, work_item_id, milestone_id)
  pr_id AS yval,
  ${q.x_axis_requirment.value} AS xval,
  COUNT(${q.x_axis_requirment.value}) AS count
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}
GROUP BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  ${q.x_axis_requirment.value}
ORDER BY
  pr_id,
  requirement_id,
  work_item_id,
  milestone_id,
  count DESC
LIMIT 2000;`),i.$$.dirty[2]&7680&&(Xe||!he?Xe||(Le(Te,{noResolve:Xe,...Et}),r(74,he=!0)):Le(Te,{noResolve:Xe})),i.$$.dirty[0]&1&&r(76,ge=j`SELECT
  COUNT(DISTINCT pr_id) AS total_prs
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}

limit 2000;`),i.$$.dirty[0]&1&&r(77,ve=`SELECT
  COUNT(DISTINCT pr_id) AS total_prs
FROM (select * from eind.pr_requirment_work_item2)
WHERE EXTRACT(MONTH FROM merged_at) = ${q.merged_month.value}

limit 2000;`),i.$$.dirty[2]&122880&&(ge||!le?ge||(Fe(ve,{noResolve:ge,...$e}),r(78,le=!0)):Fe(ve,{noResolve:ge})),i.$$.dirty[2]&1966080&&(re||!O?re||(se(oe,{noResolve:re,...we}),r(82,O=!0)):se(oe,{noResolve:re})),i.$$.dirty[2]&31457280&&(ne||!de?ne||(_e(Ve,{noResolve:ne,...fe}),r(86,de=!0)):_e(Ve,{noResolve:ne})),i.$$.dirty[2]&503316480&&(ae||!Ae?ae||(Je(Q,{noResolve:ae,...Ge}),r(90,Ae=!0)):Je(Q,{noResolve:ae})),i.$$.dirty[2]&1610612736|i.$$.dirty[3]&3&&(ye||!at?ye||(ke(Ke,{noResolve:ye,...Se}),r(94,at=!0)):ke(Ke,{noResolve:ye})),i.$$.dirty[3]&60&&(De||!X?De||(g(be,{noResolve:De,...Me}),r(98,X=!0)):g(be,{noResolve:De})),i.$$.dirty[3]&960&&(Ce||!Ct?Ce||(Vt(_,{noResolve:Ce,...C}),r(102,Ct=!0)):Vt(_,{noResolve:Ce})),i.$$.dirty[3]&15360&&(St||!Rt?St||(jt(Ft,{noResolve:St,...Lt}),r(106,Rt=!0)):jt(Ft,{noResolve:St})),i.$$.dirty[0]&1&&r(108,Tt=j`SELECT
  reader,
  single_sentence_summary,
  four_sentence_summary,
  paragraph_title,
  paragraph_content,
  base_year,
  revision_year,
  CAST(CAST(base_year AS INT) AS TEXT)  as base_check,
  CAST(CAST(revision_year AS INT) AS TEXT) as rev_check
  
  FROM (select * from csv.roadmap_revisions_role_based_summaries)
  Where split_part('${q.roadmap_years.value}', '/', 1)= base_check
  AND split_part('${q.roadmap_years.value}', '/', 2) = rev_check
  AND reader= '${q.readers.value}'`),i.$$.dirty[0]&1&&r(109,Ye=`SELECT
  reader,
  single_sentence_summary,
  four_sentence_summary,
  paragraph_title,
  paragraph_content,
  base_year,
  revision_year,
  CAST(CAST(base_year AS INT) AS TEXT)  as base_check,
  CAST(CAST(revision_year AS INT) AS TEXT) as rev_check
  
  FROM (select * from csv.roadmap_revisions_role_based_summaries)
  Where split_part('${q.roadmap_years.value}', '/', 1)= base_check
  AND split_part('${q.roadmap_years.value}', '/', 2) = rev_check
  AND reader= '${q.readers.value}'`),i.$$.dirty[3]&245760&&(Tt||!$?Tt||(L(Ye,{noResolve:Tt,...Mt}),r(110,$=!0)):L(Ye,{noResolve:Tt})),i.$$.dirty[3]&3932160&&(It||!Pt?It||(Qt(ht,{noResolve:It,...Nt}),r(114,Pt=!0)):Qt(ht,{noResolve:It})),i.$$.dirty[3]&62914560&&(kt||!xt?kt||(Dt(Bt,{noResolve:kt,...Wt}),r(118,xt=!0)):Dt(Bt,{noResolve:kt})),i.$$.dirty[3]&1006632960&&(Zt||!sr?Zt||(nr(Jt,{noResolve:Zt,...tr}),r(122,sr=!0)):nr(Jt,{noResolve:Zt})),i.$$.dirty[3]&1073741824|i.$$.dirty[4]&7&&(ir||!_r?ir||(Yt(lr,{noResolve:ir,...ar}),r(126,_r=!0)):Yt(lr,{noResolve:ir})),i.$$.dirty[4]&120&&(Ht||!Ua?Ht||(Pa(sa,{noResolve:Ht,...ft}),r(130,Ua=!0)):Pa(sa,{noResolve:Ht})),i.$$.dirty[4]&1920&&(cr||!Ya?cr||(ja(na,{noResolve:cr,...dr}),r(134,Ya=!0)):ja(na,{noResolve:cr})),i.$$.dirty[0]&1&&r(136,$r=j`SELECT
  "start" AS bob,
  "end"   AS fred,

  -- ISO-style strings (yyyy-mm-dd)
  LEFT(CAST("start" AS VARCHAR), 10) AS start_string,
  LEFT(CAST("end"   AS VARCHAR), 10) AS end_string,

  -- Date-typed columns (ISO)
  CAST("start" AS DATE) AS start_iso,
  CAST("end"   AS DATE) AS end_iso,

  -- Pretty strings (dd-mm-yyyy)
  strftime(CAST("start" AS DATE), '%d-%m-%Y') AS start_date,
  strftime(CAST("end"   AS DATE), '%d-%m-%Y') AS end_date
FROM csv.quater_data
WHERE "year" = ${parseInt(q.year.value,10)}
AND "quarter" = ${parseInt(q.quarter.value,10)};`),i.$$.dirty[0]&1&&r(137,oa=`SELECT
  "start" AS bob,
  "end"   AS fred,

  -- ISO-style strings (yyyy-mm-dd)
  LEFT(CAST("start" AS VARCHAR), 10) AS start_string,
  LEFT(CAST("end"   AS VARCHAR), 10) AS end_string,

  -- Date-typed columns (ISO)
  CAST("start" AS DATE) AS start_iso,
  CAST("end"   AS DATE) AS end_iso,

  -- Pretty strings (dd-mm-yyyy)
  strftime(CAST("start" AS DATE), '%d-%m-%Y') AS start_date,
  strftime(CAST("end"   AS DATE), '%d-%m-%Y') AS end_date
FROM csv.quater_data
WHERE "year" = ${parseInt(q.year.value,10)}
AND "quarter" = ${parseInt(q.quarter.value,10)};`),i.$$.dirty[4]&30720&&($r||!Qa?$r||(Xa(oa,{noResolve:$r,...pr}),r(138,Qa=!0)):Xa(oa,{noResolve:$r})),i.$$.dirty[4]&491520&&(vr||!Ga?vr||(za(_a,{noResolve:vr,...gr}),r(142,Ga=!0)):za(_a,{noResolve:vr})),i.$$.dirty[4]&7864320&&(br||!Ja?br||(Ka(ma,{noResolve:br,...yr}),r(146,Ja=!0)):Ka(ma,{noResolve:br})),i.$$.dirty[4]&125829120&&(Tr||!ei?Tr||(ti(ua,{noResolve:Tr,...wr}),r(150,ei=!0)):ti(ua,{noResolve:Tr})),i.$$.dirty[0]&2&&r(152,Rr=j`SELECT
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
WHERE merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[0]&2&&r(153,fa=`SELECT
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
WHERE merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[4]&2013265920&&(Rr||!ai?Rr||(ii(fa,{noResolve:Rr,...Er}),r(154,ai=!0)):ii(fa,{noResolve:Rr})),i.$$.dirty[0]&3&&r(156,Sr=j`SELECT
  COUNT(*)                 AS label_count,   -- code-file rows
  COUNT(DISTINCT pr_id)    AS pr_count    -- unique PRs
FROM (select * from pr_activity_technology_industry_category)
WHERE ${q.pr_dimensions}
AND merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[0]&3&&r(157,da=`SELECT
  COUNT(*)                 AS label_count,   -- code-file rows
  COUNT(DISTINCT pr_id)    AS pr_count    -- unique PRs
FROM (select * from pr_activity_technology_industry_category)
WHERE ${q.pr_dimensions}
AND merged_at >= DATE '${te[0].start_string}'
AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[5]&15&&(Sr||!si?Sr||(ni(da,{noResolve:Sr,...qr}),r(158,si=!0)):ni(da,{noResolve:Sr})),i.$$.dirty[0]&2&&r(160,Ar=j`select activity,
        industrial,
        technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[0]&2&&r(161,ca=`select activity,
        industrial,
        technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[5]&240&&(Ar||!_i?Ar||(mi(ca,{noResolve:Ar,...hr}),r(162,_i=!0)):mi(ca,{noResolve:Ar})),i.$$.dirty[0]&2&&r(164,Dr=j`select 
      owner as programme,
      activity,
      industrial,
      technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[0]&2&&r(165,pa=`select 
      owner as programme,
      activity,
      industrial,
      technology
  from (select * from pr_activity_technology_industry_category) 
  Where merged_at >= DATE '${te[0].start_string}'
  AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[5]&3840&&(Dr||!fi?Dr||(di(pa,{noResolve:Dr,...kr}),r(166,fi=!0)):di(pa,{noResolve:Dr})),i.$$.dirty[0]&3&&r(168,Nr=j`SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[0]&3&&r(169,$a=`SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}'`),i.$$.dirty[5]&61440&&(Nr||!pi?Nr||($i($a,{noResolve:Nr,...Cr}),r(170,pi=!0)):$i($a,{noResolve:Nr})),i.$$.dirty[0]&3&&r(172,Or=j`SELECT
    DATE_TRUNC('week', merged_at)::date AS week_start,
    ${q.label_type.value} AS label,
    COUNT(*) AS count              
  from (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
    
  GROUP BY 1,2
  ORDER BY 1`),i.$$.dirty[0]&3&&r(173,ga=`SELECT
    DATE_TRUNC('week', merged_at)::date AS week_start,
    ${q.label_type.value} AS label,
    COUNT(*) AS count              
  from (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
    
  GROUP BY 1,2
  ORDER BY 1`),i.$$.dirty[5]&983040&&(Or||!vi?Or||(yi(ga,{noResolve:Or,...Ir}),r(174,vi=!0)):yi(ga,{noResolve:Or})),i.$$.dirty[0]&3&&r(176,Fr=j`select 
          ${q.x_axis.value} as xval,
          ${q.y_axis.value} as yval,
          count(merged_at) as totals,
      FROM
          (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
      WHERE ${q.pr_dimensions}
      GROUP BY ${q.x_axis.value}, ${q.y_axis.value}
      ORDER BY totals desc`),i.$$.dirty[0]&3&&r(177,va=`select 
          ${q.x_axis.value} as xval,
          ${q.y_axis.value} as yval,
          count(merged_at) as totals,
      FROM
          (SELECT merged_at, activity, industrial, technology, owner
    from (select * from pr_activity_technology_industry_category)
    where ${q.pr_dimensions}
    AND merged_at >= DATE '${te[0].start_string}'
    AND merged_at <=   DATE '${te[0].end_string}')
      WHERE ${q.pr_dimensions}
      GROUP BY ${q.x_axis.value}, ${q.y_axis.value}
      ORDER BY totals desc`),i.$$.dirty[5]&15728640&&(Fr||!wi?Fr||(Ti(va,{noResolve:Fr,...Lr}),r(178,wi=!0)):Ti(va,{noResolve:Fr})),i.$$.dirty[5]&251658240&&(Br||!Ri?Br||(qi(ya,{noResolve:Br,...Mr}),r(182,Ri=!0)):qi(ya,{noResolve:Br})),i.$$.dirty[0]&1&&r(184,Ur=j`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${q.owner.value}'`),i.$$.dirty[0]&1&&r(185,ba=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${q.owner.value}'`),i.$$.dirty[5]&1879048192|i.$$.dirty[6]&1&&(Ur||!hi?Ur||(Ai(ba,{noResolve:Ur,...Hr}),r(186,hi=!0)):Ai(ba,{noResolve:Ur})),i.$$.dirty[6]&30&&(Wr||!Di?Wr||(Ci(wa,{noResolve:Wr,...Pr}),r(190,Di=!0)):Ci(wa,{noResolve:Wr})),i.$$.dirty[0]&1&&r(192,jr=j`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC`),i.$$.dirty[0]&1&&r(193,Ta=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC`),i.$$.dirty[6]&480&&(jr||!Ii?jr||(Oi(Ta,{noResolve:jr,...Yr}),r(194,Ii=!0)):Oi(Ta,{noResolve:jr})),i.$$.dirty[0]&1&&r(196,Xr=j`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${q.section.value}`),i.$$.dirty[0]&1&&r(197,Ea=`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${q.section.value}`),i.$$.dirty[6]&7680&&(Xr||!Li?Xr||(Fi(Ea,{noResolve:Xr,...Qr}),r(198,Li=!0)):Fi(Ea,{noResolve:Xr})),i.$$.dirty[0]&1&&r(200,Gr=j`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)`),i.$$.dirty[0]&1&&r(201,Ra=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${q.roadmap_versions.value}
    order by "order" ASC)`),i.$$.dirty[6]&122880&&(Gr||!Bi?Gr||(Hi(Ra,{noResolve:Gr,...Vr}),r(202,Bi=!0)):Hi(Ra,{noResolve:Gr})),i.$$.dirty[6]&1966080&&(xr||!Pi?xr||(Wi(qa,{noResolve:xr,...zr}),r(206,Pi=!0)):Wi(qa,{noResolve:xr})),i.$$.dirty[6]&31457280&&(Kr||!ji?Kr||(Qi(Sa,{noResolve:Kr,...Jr}),r(210,ji=!0)):Qi(Sa,{noResolve:Kr})),i.$$.dirty[0]&1&&r(44,e=q.kind.value=="week"?"01K2HAFAD1JM47FD6JP3E4K69Q":"01K2MD0XJBGMKCE7KXN9F25T3X"),i.$$.dirty[0]&1&&r(212,a=q.kind.value),i.$$.dirty[0]&1&&r(213,l=q.week_p[0]),i.$$.dirty[0]&1|i.$$.dirty[6]&134217728&&r(211,o=q.kind.value=="week"?l:q.quarter.value),i.$$.dirty[0]&1|i.$$.dirty[6]&100663296&&r(3,W={year:parseInt(q.year_p.value,10),audience:q.audience_p.value,owner:q.owner.value,repo:q.repo.value=="null"?null:q.repo.value,[a]:parseInt(o,10),output_format:"markdown"}),i.$$.dirty[0]&4&&r(43,s=La.map(U=>`${U.heading||""}

${U.content||""}`).join(`

`))},r(48,N=j`select *
from eind.requirements_status
order by delivery_outstanding desc`),r(49,x=`select *
from eind.requirements_status
order by delivery_outstanding desc`),r(52,I=j`select * from eind.pr_requirements_wkitm_status`),r(53,J="select * from eind.pr_requirements_wkitm_status"),r(56,ot=j`select * from eind.pr_requirment_work_item2`),r(57,dt="select * from eind.pr_requirment_work_item2"),r(68,Ie=j`select distinct milestone_id,
  milestone_date,
  EXTRACT(MONTH FROM milestone_date) as mlst_month
  from eind.pr_requirment_work_item2
  order by milestone_date ASC`),r(69,bt=`select distinct milestone_id,
  milestone_date,
  EXTRACT(MONTH FROM milestone_date) as mlst_month
  from eind.pr_requirment_work_item2
  order by milestone_date ASC`),r(80,re=j`select 
        pr_id,
        workstream_name,
        business_objective,
        category as "Dev Activity"
            
 from (select *
  from eind.dimemsion_data_2024)
 WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`),r(81,oe=`select 
        pr_id,
        workstream_name,
        business_objective,
        category as "Dev Activity"
            
 from (select *
  from eind.dimemsion_data_2024)
 WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`),r(84,ne=j`select 
        distinct pr_id,
        business_objective,
        workstream_name,
        category

    from (select *
  from eind.dimemsion_data_2024)
    WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`),r(85,Ve=`select 
        distinct pr_id,
        business_objective,
        workstream_name,
        category

    from (select *
  from eind.dimemsion_data_2024)
    WHERE merged_at BETWEEN DATE '2024-01-01' AND DATE '2024-12-31'`),r(88,ae=j`select *
  from eind.dimemsion_data_2024`),r(89,Q=`select *
  from eind.dimemsion_data_2024`),r(92,ye=j`select * from csv.roadmap_revisions_role_based_summaries`),r(93,Ke="select * from csv.roadmap_revisions_role_based_summaries"),r(96,De=j`select DISTINCT base_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`),r(97,be=`select DISTINCT base_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`),r(100,Ce=j`select DISTINCT revision_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`),r(101,_=`select DISTINCT revision_year
 from (select * from csv.roadmap_revisions_role_based_summaries)`),r(104,St=j`select DISTINCT reader
 from (select * from csv.roadmap_revisions_role_based_summaries)`),r(105,Ft=`select DISTINCT reader
 from (select * from csv.roadmap_revisions_role_based_summaries)`),r(112,It=j`select * from eind2.code_file_summaries`),r(113,ht="select * from eind2.code_file_summaries"),r(116,kt=j`select * from csv.PRDevsByQuarter`),r(117,Bt="select * from csv.PRDevsByQuarter"),r(120,Zt=j`select 
    business_objective_desc as business_Objective,
    broad_theme as roadmap_theme,
    ws_desc as WorkSteam_Description,
    activity1 as Activity
    
    from (select * from eind2.code_file_summaries)
    Where req_year = '2022'`),r(121,Jt=`select 
    business_objective_desc as business_Objective,
    broad_theme as roadmap_theme,
    ws_desc as WorkSteam_Description,
    activity1 as Activity
    
    from (select * from eind2.code_file_summaries)
    Where req_year = '2022'`),r(124,ir=j`SELECT *
FROM (
  SELECT
    make_date(
      EXTRACT(YEAR FROM merged_at::date)::int,
      ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
      1
    ) AS quarter_start,
    broad_theme as roadmap_theme,
    COUNT(DISTINCT author) AS active_developers,
    COUNT(DISTINCT pr_id) AS prs_merged
    
  FROM (select * from eind2.code_file_summaries)
  GROUP BY 1, 2
) sub
WHERE sub.quarter_start > '1969-12-31'
ORDER BY sub.quarter_start;`),r(125,lr=`SELECT *
FROM (
  SELECT
    make_date(
      EXTRACT(YEAR FROM merged_at::date)::int,
      ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
      1
    ) AS quarter_start,
    broad_theme as roadmap_theme,
    COUNT(DISTINCT author) AS active_developers,
    COUNT(DISTINCT pr_id) AS prs_merged
    
  FROM (select * from eind2.code_file_summaries)
  GROUP BY 1, 2
) sub
WHERE sub.quarter_start > '1969-12-31'
ORDER BY sub.quarter_start;`),r(128,Ht=j`WITH quarter_devs AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    COUNT(DISTINCT author) AS active_developers
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1
)

, quarter_themes AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    broad_theme AS roadmap_theme,
    COUNT(DISTINCT pr_id) AS prs_merged
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1, 2
)

SELECT
  qt.quarter_start,
  qt.roadmap_theme,
  qt.prs_merged,
  qd.active_developers
FROM quarter_themes qt
LEFT JOIN quarter_devs qd
  ON qt.quarter_start = qd.quarter_start
WHERE qt.quarter_start > DATE '1969-12-31'
ORDER BY qt.quarter_start, qt.roadmap_theme;`),r(129,sa=`WITH quarter_devs AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    COUNT(DISTINCT author) AS active_developers
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1
)

, quarter_themes AS (
  SELECT
    date_trunc('quarter', merged_at)::date AS quarter_start,
    broad_theme AS roadmap_theme,
    COUNT(DISTINCT pr_id) AS prs_merged
  FROM (select * from eind2.code_file_summaries)
  WHERE merged_at IS NOT NULL
  GROUP BY 1, 2
)

SELECT
  qt.quarter_start,
  qt.roadmap_theme,
  qt.prs_merged,
  qd.active_developers
FROM quarter_themes qt
LEFT JOIN quarter_devs qd
  ON qt.quarter_start = qd.quarter_start
WHERE qt.quarter_start > DATE '1969-12-31'
ORDER BY qt.quarter_start, qt.roadmap_theme;`),r(132,cr=j`SELECT *
FROM (
 SELECT
   date_trunc('quarter', merged_at)::date AS quarter_start,
   COUNT(DISTINCT author) AS active_developers
 FROM (select * from eind2.code_file_summaries)
 WHERE merged_at IS NOT NULL
   AND author IS NOT NULL
 GROUP BY 1
) sub
WHERE sub.quarter_start > DATE '1969-12-31'
ORDER BY sub.quarter_start;`),r(133,na=`SELECT *
FROM (
 SELECT
   date_trunc('quarter', merged_at)::date AS quarter_start,
   COUNT(DISTINCT author) AS active_developers
 FROM (select * from eind2.code_file_summaries)
 WHERE merged_at IS NOT NULL
   AND author IS NOT NULL
 GROUP BY 1
) sub
WHERE sub.quarter_start > DATE '1969-12-31'
ORDER BY sub.quarter_start;`),r(140,vr=j`select * from pr_activity_technology_industry_category`),r(141,_a="select * from pr_activity_technology_industry_category"),r(144,br=j`SELECT
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start
ORDER BY quarter_start;`),r(145,ma=`SELECT
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start
ORDER BY quarter_start;`),r(148,Tr=j`SELECT
  owner as programme,
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start,programme
ORDER BY quarter_start;`),r(149,ua=`SELECT
  owner as programme,
  make_date(
    EXTRACT(YEAR FROM merged_at::date)::int,
    ((EXTRACT(QUARTER FROM merged_at::date)::int - 1) * 3) + 1,
    1
  ) AS quarter_start,
  COUNT(pr_id) AS label_count,
  COUNT(DISTINCT pr_id) AS pr_count
FROM (select * from pr_activity_technology_industry_category)
GROUP BY quarter_start,programme
ORDER BY quarter_start;`),r(180,Br=j`select distinct owner from eind.repos`),r(181,ya="select distinct owner from eind.repos"),r(188,Wr=j`select * from
eind.roadmap_versions_sections`),r(189,wa=`select * from
eind.roadmap_versions_sections`),r(204,xr=j`select * from eind2.code_file_summaries as road_map_revs`),r(205,qa="select * from eind2.code_file_summaries as road_map_revs"),r(208,Kr=j`select requirement_id,
            change_description as requirement_changes,
            completed_2021 as requirement_completed_in_2021,
            milestone_rescheduled_2022 as requirement_reschuled_to_2022,
            changed_2022 as requirment_changed_in_2022,
            current_year as current_year_roadmap_version,
            prior_year as prior_year_roadmap_version


    from  (select * from eind2.code_file_summaries as road_map_revs)`),r(209,Sa=`select requirement_id,
            change_description as requirement_changes,
            completed_2021 as requirement_completed_in_2021,
            milestone_rescheduled_2022 as requirement_reschuled_to_2022,
            changed_2022 as requirment_changed_in_2022,
            current_year as current_year_roadmap_version,
            prior_year as prior_year_roadmap_version


    from  (select * from eind2.code_file_summaries as road_map_revs)`),[q,te,La,W,H,it,_t,st,mt,gt,Oe,Pe,Ee,He,rt,ze,We,v,Gt,Ne,Ut,zt,rr,or,Ha,Wa,Va,xa,Za,ri,li,oi,ui,ci,gi,bi,Ei,Si,ki,Ni,Mi,Ui,Yi,s,e,h,n,K,N,x,Y,V,I,J,nt,Qe,ot,dt,yt,Ue,ct,qe,pt,et,Be,xe,ut,tt,Ie,bt,wt,Et,Xe,Te,he,$e,ge,ve,le,we,re,oe,O,fe,ne,Ve,de,Ge,ae,Q,Ae,Se,ye,Ke,at,Me,De,be,X,C,Ce,_,Ct,Lt,St,Ft,Rt,Mt,Tt,Ye,$,Nt,It,ht,Pt,Wt,kt,Bt,xt,tr,Zt,Jt,sr,ar,ir,lr,_r,ft,Ht,sa,Ua,dr,cr,na,Ya,pr,$r,oa,Qa,gr,vr,_a,Ga,yr,br,ma,Ja,wr,Tr,ua,ei,Er,Rr,fa,ai,qr,Sr,da,si,hr,Ar,ca,_i,kr,Dr,pa,fi,Cr,Nr,$a,pi,Ir,Or,ga,vi,Lr,Fr,va,wi,Mr,Br,ya,Ri,Hr,Ur,ba,hi,Pr,Wr,wa,Di,Yr,jr,Ta,Ii,Qr,Xr,Ea,Li,Vr,Gr,Ra,Bi,zr,xr,qa,Pi,Jr,Kr,Sa,ji,o,a,l,u]}class So extends Ia{constructor(t){super(),Oa(this,t,uo,mo,Na,{data:45},null,[-1,-1,-1,-1,-1,-1,-1,-1,-1])}}export{So as component};
