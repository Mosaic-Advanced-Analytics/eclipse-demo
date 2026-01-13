import{s as fi,d,i as c,a as P,b as Z,c as w,h as ui,e as N,f as it,j as g,k as h,l as ga,m as pi,o as vi,p as ci,q as yi,n as xe,v as H,g as mt,r as Re,t as ze,u as We,w as nt}from"../chunks/scheduler.DQMKnMhh.js";import{S as $i,i as bi,d as R,t as v,a as _,c as _e,m as S,b as k,e as T,g as me}from"../chunks/index.mQ_AmqKT.js";import{T as wi,a as Ea,A as gi,D as _t,S as Ei}from"../chunks/DynamicMarkdown.q-ukPbkT.js";import{A as Ri,a as Si}from"../chunks/AccordionItem.B3ci9VWS.js";import{D as wa,C as Qe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.lGD3JYjB.js";import{e as ki,s as Ti,Q as ge,p as Ai,a as Ra,r as Sa,C as Di}from"../chunks/inferColumnTypes.BBCfv8rn.js";import{h as M}from"../chunks/button.DbFXf4ko.js";import{w as qi}from"../chunks/entry.BezDF2rm.js";import{Q as Ee,B as Fi,D as lt,a as Ae}from"../chunks/BarChart.D1FHjkO0.js";import{p as Oi}from"../chunks/stores.gJjaOeMo.js";import{p as Ci}from"../chunks/profile.BW8tN6E9.js";function Ii(i){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:xe,p:xe,d:xe}}function Li(i){let t,r,e,a,l;return document.title=t=Pe.title,{c(){r=g(),e=h("meta"),a=g(),l=h("meta"),this.h()},l(s){r=w(s),e=N(s,"META",{property:!0,content:!0}),a=w(s),l=N(s,"META",{name:!0,content:!0}),this.h()},h(){var s,m;Z(e,"property","og:title"),Z(e,"content",((s=Pe.og)==null?void 0:s.title)??Pe.title),Z(l,"name","twitter:title"),Z(l,"content",((m=Pe.og)==null?void 0:m.title)??Pe.title)},m(s,m){c(s,r,m),c(s,e,m),c(s,a,m),c(s,l,m)},p(s,m){m&0&&t!==(t=Pe.title)&&(document.title=t)},d(s){s&&(d(r),d(e),d(a),d(l))}}}function Ni(i){var l,s;let t,r,e=(Pe.description||((l=Pe.og)==null?void 0:l.description))&&hi(),a=((s=Pe.og)==null?void 0:s.image)&&Mi();return{c(){e&&e.c(),t=g(),a&&a.c(),r=it()},l(m){e&&e.l(m),t=w(m),a&&a.l(m),r=it()},m(m,p){e&&e.m(m,p),c(m,t,p),a&&a.m(m,p),c(m,r,p)},p(m,p){var u,o;(Pe.description||(u=Pe.og)!=null&&u.description)&&e.p(m,p),(o=Pe.og)!=null&&o.image&&a.p(m,p)},d(m){m&&(d(t),d(r)),e&&e.d(m),a&&a.d(m)}}}function hi(i){let t,r,e,a,l;return{c(){t=h("meta"),r=g(),e=h("meta"),a=g(),l=h("meta"),this.h()},l(s){t=N(s,"META",{name:!0,content:!0}),r=w(s),e=N(s,"META",{property:!0,content:!0}),a=w(s),l=N(s,"META",{name:!0,content:!0}),this.h()},h(){var s,m,p;Z(t,"name","description"),Z(t,"content",Pe.description??((s=Pe.og)==null?void 0:s.description)),Z(e,"property","og:description"),Z(e,"content",((m=Pe.og)==null?void 0:m.description)??Pe.description),Z(l,"name","twitter:description"),Z(l,"content",((p=Pe.og)==null?void 0:p.description)??Pe.description)},m(s,m){c(s,t,m),c(s,r,m),c(s,e,m),c(s,a,m),c(s,l,m)},p:xe,d(s){s&&(d(t),d(r),d(e),d(a),d(l))}}}function Mi(i){let t,r,e;return{c(){t=h("meta"),r=g(),e=h("meta"),this.h()},l(a){t=N(a,"META",{property:!0,content:!0}),r=w(a),e=N(a,"META",{name:!0,content:!0}),this.h()},h(){var a,l;Z(t,"property","og:image"),Z(t,"content",Ra((a=Pe.og)==null?void 0:a.image)),Z(e,"name","twitter:image"),Z(e,"content",Ra((l=Pe.og)==null?void 0:l.image))},m(a,l){c(a,t,l),c(a,r,l),c(a,e,l)},p:xe,d(a){a&&(d(t),d(r),d(e))}}}function Hi(i){let t,r,e,a,l,s,m,p,u,o,y,q;return t=new Qe({props:{id:"year",title:"Roadmap",fmt:"id"}}),e=new Qe({props:{id:"demand_outstanding",title:"Demand ToDo",fmt:"pct0"}}),l=new Qe({props:{id:"total_demand_work_items",title:"Demand WKItems",fmt:"num0"}}),m=new Qe({props:{id:"resoureced_outstanding",title:"Staffed ToDo",fmt:"pct0"}}),u=new Qe({props:{id:"total_actioned_milestone_items",title:"Staffed WKItems",fmt:"num0"}}),y=new Qe({props:{id:"ratio",title:"Demand/Resourced",fmt:"pct0"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment),s=g(),T(m.$$.fragment),p=g(),T(u.$$.fragment),o=g(),T(y.$$.fragment)},l(f){k(t.$$.fragment,f),r=w(f),k(e.$$.fragment,f),a=w(f),k(l.$$.fragment,f),s=w(f),k(m.$$.fragment,f),p=w(f),k(u.$$.fragment,f),o=w(f),k(y.$$.fragment,f)},m(f,I){S(t,f,I),c(f,r,I),S(e,f,I),c(f,a,I),S(l,f,I),c(f,s,I),S(m,f,I),c(f,p,I),S(u,f,I),c(f,o,I),S(y,f,I),q=!0},p:xe,i(f){q||(_(t.$$.fragment,f),_(e.$$.fragment,f),_(l.$$.fragment,f),_(m.$$.fragment,f),_(u.$$.fragment,f),_(y.$$.fragment,f),q=!0)},o(f){v(t.$$.fragment,f),v(e.$$.fragment,f),v(l.$$.fragment,f),v(m.$$.fragment,f),v(u.$$.fragment,f),v(y.$$.fragment,f),q=!1},d(f){f&&(d(r),d(a),d(s),d(p),d(o)),R(t,f),R(e,f),R(l,f),R(m,f),R(u,f),R(y,f)}}}function Ui(i){let t,r,e,a,l,s,m,p,u,o;return t=new Qe({props:{id:"year",title:"Roadmap",fmt:"id"}}),e=new Qe({props:{id:"requirements",title:"Requirements"}}),l=new Qe({props:{id:"workitems",title:"Work Items"}}),m=new Qe({props:{id:"prs",title:"PRs"}}),u=new Qe({props:{id:"developers",title:"Devs"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment),s=g(),T(m.$$.fragment),p=g(),T(u.$$.fragment)},l(y){k(t.$$.fragment,y),r=w(y),k(e.$$.fragment,y),a=w(y),k(l.$$.fragment,y),s=w(y),k(m.$$.fragment,y),p=w(y),k(u.$$.fragment,y)},m(y,q){S(t,y,q),c(y,r,q),S(e,y,q),c(y,a,q),S(l,y,q),c(y,s,q),S(m,y,q),c(y,p,q),S(u,y,q),o=!0},p:xe,i(y){o||(_(t.$$.fragment,y),_(e.$$.fragment,y),_(l.$$.fragment,y),_(m.$$.fragment,y),_(u.$$.fragment,y),o=!0)},o(y){v(t.$$.fragment,y),v(e.$$.fragment,y),v(l.$$.fragment,y),v(m.$$.fragment,y),v(u.$$.fragment,y),o=!1},d(y){y&&(d(r),d(a),d(s),d(p)),R(t,y),R(e,y),R(l,y),R(m,y),R(u,y)}}}function Pi(i){let t,r,e,a,l,s,m,p;return t=new Ae({props:{valueLabel:"2021",value:"2021"}}),e=new Ae({props:{valueLabel:"2022",value:"2022"}}),l=new Ae({props:{valueLabel:"2023",value:"2023"}}),m=new Ae({props:{valueLabel:"2024",value:"2024"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment),s=g(),T(m.$$.fragment)},l(u){k(t.$$.fragment,u),r=w(u),k(e.$$.fragment,u),a=w(u),k(l.$$.fragment,u),s=w(u),k(m.$$.fragment,u)},m(u,o){S(t,u,o),c(u,r,o),S(e,u,o),c(u,a,o),S(l,u,o),c(u,s,o),S(m,u,o),p=!0},p:xe,i(u){p||(_(t.$$.fragment,u),_(e.$$.fragment,u),_(l.$$.fragment,u),_(m.$$.fragment,u),p=!0)},o(u){v(t.$$.fragment,u),v(e.$$.fragment,u),v(l.$$.fragment,u),v(m.$$.fragment,u),p=!1},d(u){u&&(d(r),d(a),d(s)),R(t,u),R(e,u),R(l,u),R(m,u)}}}function Gi(i){let t,r,e,a,l,s,m,p,u,o,y,q,f,I,A,U,ie,$e;return t=new Qe({props:{id:"year",title:"Roadmap",fmt:"id"}}),e=new Qe({props:{id:"milestone_id",title:"MileStone"}}),l=new Qe({props:{id:"milestone_date",title:"MS Date",fmt:"dmy"}}),m=new Qe({props:{id:"demanded_milestone_items",title:"Demand WKitms"}}),u=new Qe({props:{id:"demanded_outstanding_pct",title:"Demand ToDo",fmt:"pct0"}}),y=new Qe({props:{id:"actioned_milestone_items",title:"Staffed WKitms"}}),f=new Qe({props:{id:"actioned_outstanding_pct",title:"Staffed ToDo",fmt:"pct0"}}),A=new Qe({props:{id:"last_merge_date",title:"Latest Work",fmt:"dmy"}}),ie=new Qe({props:{id:"milestone_description",title:"Description",wrap:"false"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment),s=g(),T(m.$$.fragment),p=g(),T(u.$$.fragment),o=g(),T(y.$$.fragment),q=g(),T(f.$$.fragment),I=g(),T(A.$$.fragment),U=g(),T(ie.$$.fragment)},l(D){k(t.$$.fragment,D),r=w(D),k(e.$$.fragment,D),a=w(D),k(l.$$.fragment,D),s=w(D),k(m.$$.fragment,D),p=w(D),k(u.$$.fragment,D),o=w(D),k(y.$$.fragment,D),q=w(D),k(f.$$.fragment,D),I=w(D),k(A.$$.fragment,D),U=w(D),k(ie.$$.fragment,D)},m(D,ee){S(t,D,ee),c(D,r,ee),S(e,D,ee),c(D,a,ee),S(l,D,ee),c(D,s,ee),S(m,D,ee),c(D,p,ee),S(u,D,ee),c(D,o,ee),S(y,D,ee),c(D,q,ee),S(f,D,ee),c(D,I,ee),S(A,D,ee),c(D,U,ee),S(ie,D,ee),$e=!0},p:xe,i(D){$e||(_(t.$$.fragment,D),_(e.$$.fragment,D),_(l.$$.fragment,D),_(m.$$.fragment,D),_(u.$$.fragment,D),_(y.$$.fragment,D),_(f.$$.fragment,D),_(A.$$.fragment,D),_(ie.$$.fragment,D),$e=!0)},o(D){v(t.$$.fragment,D),v(e.$$.fragment,D),v(l.$$.fragment,D),v(m.$$.fragment,D),v(u.$$.fragment,D),v(y.$$.fragment,D),v(f.$$.fragment,D),v(A.$$.fragment,D),v(ie.$$.fragment,D),$e=!1},d(D){D&&(d(r),d(a),d(s),d(p),d(o),d(q),d(I),d(U)),R(t,D),R(e,D),R(l,D),R(m,D),R(u,D),R(y,D),R(f,D),R(A,D),R(ie,D)}}}function Bi(i){let t,r,e,a,l;return t=new Ae({props:{valueLabel:"Executive",value:"exec"}}),r=new Ae({props:{valueLabel:"Project Management",value:"pm"}}),e=new Ae({props:{valueLabel:"Team Lead",value:"team_lead"}}),a=new Ae({props:{valueLabel:"Dev",value:"developer"}}),{c(){T(t.$$.fragment),T(r.$$.fragment),T(e.$$.fragment),T(a.$$.fragment)},l(s){k(t.$$.fragment,s),k(r.$$.fragment,s),k(e.$$.fragment,s),k(a.$$.fragment,s)},m(s,m){S(t,s,m),S(r,s,m),S(e,s,m),S(a,s,m),l=!0},p:xe,i(s){l||(_(t.$$.fragment,s),_(r.$$.fragment,s),_(e.$$.fragment,s),_(a.$$.fragment,s),l=!0)},o(s){v(t.$$.fragment,s),v(r.$$.fragment,s),v(e.$$.fragment,s),v(a.$$.fragment,s),l=!1},d(s){R(t,s),R(r,s),R(e,s),R(a,s)}}}function Vi(i){let t,r,e;return t=new Ae({props:{valueLabel:"Weekly",value:"week"}}),r=new Ae({props:{valueLabel:"Quarterly",value:"quarter"}}),{c(){T(t.$$.fragment),T(r.$$.fragment)},l(a){k(t.$$.fragment,a),k(r.$$.fragment,a)},m(a,l){S(t,a,l),S(r,a,l),e=!0},p:xe,i(a){e||(_(t.$$.fragment,a),_(r.$$.fragment,a),e=!0)},o(a){v(t.$$.fragment,a),v(r.$$.fragment,a),e=!1},d(a){R(t,a),R(r,a)}}}function ka(i){let t,r;return t=new lt({props:{name:"quarter_p",$$slots:{default:[Yi]},$$scope:{ctx:i}}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Yi(i){let t,r,e,a,l;return t=new Ae({props:{valueLabel:"Q1",value:"1"}}),r=new Ae({props:{valueLabel:"Q2",value:"2"}}),e=new Ae({props:{valueLabel:"Q3",value:"3"}}),a=new Ae({props:{valueLabel:"Q4",value:"4"}}),{c(){T(t.$$.fragment),T(r.$$.fragment),T(e.$$.fragment),T(a.$$.fragment)},l(s){k(t.$$.fragment,s),k(r.$$.fragment,s),k(e.$$.fragment,s),k(a.$$.fragment,s)},m(s,m){S(t,s,m),S(r,s,m),S(e,s,m),S(a,s,m),l=!0},p:xe,i(s){l||(_(t.$$.fragment,s),_(r.$$.fragment,s),_(e.$$.fragment,s),_(a.$$.fragment,s),l=!0)},o(s){v(t.$$.fragment,s),v(r.$$.fragment,s),v(e.$$.fragment,s),v(a.$$.fragment,s),l=!1},d(s){R(t,s),R(r,s),R(e,s),R(a,s)}}}function Ta(i){let t,r;return t=new Ei({props:{title:"Week",name:"week_p",min:"1",max:"52",step:"1"}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Aa(i){let t,r=i[0].quarter_p.value+"",e,a,l=i[0].years.value+"",s,m;return{c(){t=We("Executive Q"),e=We(r),a=g(),s=We(l),m=We(" Summary")},l(p){t=ze(p,"Executive Q"),e=ze(p,r),a=w(p),s=ze(p,l),m=ze(p," Summary")},m(p,u){c(p,t,u),c(p,e,u),c(p,a,u),c(p,s,u),c(p,m,u)},p(p,u){u[0]&1&&r!==(r=p[0].quarter_p.value+"")&&nt(e,r),u[0]&1&&l!==(l=p[0].years.value+"")&&nt(s,l)},d(p){p&&(d(t),d(e),d(a),d(s),d(m))}}}function Da(i){let t,r=i[0].quarter_p.value+"",e,a,l=i[0].years.value+"",s,m;return{c(){t=We("Project Manager Q"),e=We(r),a=g(),s=We(l),m=We(" Summary")},l(p){t=ze(p,"Project Manager Q"),e=ze(p,r),a=w(p),s=ze(p,l),m=ze(p," Summary")},m(p,u){c(p,t,u),c(p,e,u),c(p,a,u),c(p,s,u),c(p,m,u)},p(p,u){u[0]&1&&r!==(r=p[0].quarter_p.value+"")&&nt(e,r),u[0]&1&&l!==(l=p[0].years.value+"")&&nt(s,l)},d(p){p&&(d(t),d(e),d(a),d(s),d(m))}}}function qa(i){let t,r=i[0].quarter_p.value+"",e,a,l=i[0].years.value+"",s,m;return{c(){t=We("Team Lead Q"),e=We(r),a=g(),s=We(l),m=We(" Summary")},l(p){t=ze(p,"Team Lead Q"),e=ze(p,r),a=w(p),s=ze(p,l),m=ze(p," Summary")},m(p,u){c(p,t,u),c(p,e,u),c(p,a,u),c(p,s,u),c(p,m,u)},p(p,u){u[0]&1&&r!==(r=p[0].quarter_p.value+"")&&nt(e,r),u[0]&1&&l!==(l=p[0].years.value+"")&&nt(s,l)},d(p){p&&(d(t),d(e),d(a),d(s),d(m))}}}function Fa(i){let t,r=i[0].quarter_p.value+"",e,a,l=i[0].years.value+"",s,m;return{c(){t=We("Developer Q"),e=We(r),a=g(),s=We(l),m=We(" Summary")},l(p){t=ze(p,"Developer Q"),e=ze(p,r),a=w(p),s=ze(p,l),m=ze(p," Summary")},m(p,u){c(p,t,u),c(p,e,u),c(p,a,u),c(p,s,u),c(p,m,u)},p(p,u){u[0]&1&&r!==(r=p[0].quarter_p.value+"")&&nt(e,r),u[0]&1&&l!==(l=p[0].years.value+"")&&nt(s,l)},d(p){p&&(d(t),d(e),d(a),d(s),d(m))}}}function zi(i){let t,r,e,a,l,s;return t=new _t({props:{content:i[22][0].heading_markdown}}),e=new _t({props:{content:i[22][0].content_markdown}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),l=h("hr"),this.h()},l(m){k(t.$$.fragment,m),r=w(m),k(e.$$.fragment,m),a=w(m),l=N(m,"HR",{style:!0}),this.h()},h(){H(l,"border","1px solid black")},m(m,p){S(t,m,p),c(m,r,p),S(e,m,p),c(m,a,p),c(m,l,p),s=!0},p(m,p){const u={};p[0]&4194304&&(u.content=m[22][0].heading_markdown),t.$set(u);const o={};p[0]&4194304&&(o.content=m[22][0].content_markdown),e.$set(o)},i(m){s||(_(t.$$.fragment,m),_(e.$$.fragment,m),s=!0)},o(m){v(t.$$.fragment,m),v(e.$$.fragment,m),s=!1},d(m){m&&(d(r),d(a),d(l)),R(t,m),R(e,m)}}}function Wi(i){let t,r='<a href="#overview-of-changes-to-the-previous-roadmap-version">Overview of changes to the previous roadmap version</a>',e,a,l,s,m,p,u,o,y;s=new _t({props:{content:i[5][0].single_sentence_summary}}),p=new lt({props:{name:"showroadmap",title:"Display Roadmap "+i[0].years.value+" verson",defaultValue:"no",$$slots:{default:[Ji]},$$scope:{ctx:i}}});let q=i[0].showroadmap.value!=="no"&&Oa(i);return{c(){t=h("h2"),t.innerHTML=r,e=g(),a=h("hr"),l=g(),T(s.$$.fragment),m=g(),T(p.$$.fragment),u=g(),q&&q.c(),o=it(),this.h()},l(f){t=N(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),mt(t)!=="svelte-159e7zg"&&(t.innerHTML=r),e=w(f),a=N(f,"HR",{style:!0}),l=w(f),k(s.$$.fragment,f),m=w(f),k(p.$$.fragment,f),u=w(f),q&&q.l(f),o=it(),this.h()},h(){Z(t,"class","markdown"),Z(t,"id","overview-of-changes-to-the-previous-roadmap-version"),H(a,"border","1px solid black")},m(f,I){c(f,t,I),c(f,e,I),c(f,a,I),c(f,l,I),S(s,f,I),c(f,m,I),S(p,f,I),c(f,u,I),q&&q.m(f,I),c(f,o,I),y=!0},p(f,I){const A={};I[0]&32&&(A.content=f[5][0].single_sentence_summary),s.$set(A);const U={};I[0]&1&&(U.title="Display Roadmap "+f[0].years.value+" verson"),I[6]&131072&&(U.$$scope={dirty:I,ctx:f}),p.$set(U),f[0].showroadmap.value!=="no"?q?(q.p(f,I),I[0]&1&&_(q,1)):(q=Oa(f),q.c(),_(q,1),q.m(o.parentNode,o)):q&&(me(),v(q,1,1,()=>{q=null}),_e())},i(f){y||(_(s.$$.fragment,f),_(p.$$.fragment,f),_(q),y=!0)},o(f){v(s.$$.fragment,f),v(p.$$.fragment,f),v(q),y=!1},d(f){f&&(d(t),d(e),d(a),d(l),d(m),d(u),d(o)),R(s,f),R(p,f),q&&q.d(f)}}}function Ji(i){let t,r,e,a;return t=new Ae({props:{valueLabel:"No",value:"no"}}),e=new Ae({props:{valueLabel:"Yes",value:"yes"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment)},l(l){k(t.$$.fragment,l),r=w(l),k(e.$$.fragment,l)},m(l,s){S(t,l,s),c(l,r,s),S(e,l,s),a=!0},p:xe,i(l){a||(_(t.$$.fragment,l),_(e.$$.fragment,l),a=!0)},o(l){v(t.$$.fragment,l),v(e.$$.fragment,l),a=!1},d(l){l&&d(r),R(t,l),R(e,l)}}}function Oa(i){let t,r,e=i[0].years.value+"",a,l,s,m,p,u,o,y,q,f,I;return u=new _t({props:{content:i[22][0].heading_markdown}}),y=new _t({props:{content:i[22][0].content_markdown}}),{c(){t=h("h2"),r=h("a"),a=We(e),l=We(" Roadmap Details"),s=g(),m=h("hr"),p=g(),T(u.$$.fragment),o=g(),T(y.$$.fragment),q=g(),f=h("hr"),this.h()},l(A){t=N(A,"H2",{class:!0,id:!0});var U=Re(t);r=N(U,"A",{href:!0});var ie=Re(r);a=ze(ie,e),l=ze(ie," Roadmap Details"),ie.forEach(d),U.forEach(d),s=w(A),m=N(A,"HR",{style:!0}),p=w(A),k(u.$$.fragment,A),o=w(A),k(y.$$.fragment,A),q=w(A),f=N(A,"HR",{style:!0}),this.h()},h(){Z(r,"href","#inputsyearsvalue-roadmap-details"),Z(t,"class","markdown"),Z(t,"id","inputsyearsvalue-roadmap-details"),H(m,"border","1px solid black"),H(f,"border","1px solid black")},m(A,U){c(A,t,U),P(t,r),P(r,a),P(r,l),c(A,s,U),c(A,m,U),c(A,p,U),S(u,A,U),c(A,o,U),S(y,A,U),c(A,q,U),c(A,f,U),I=!0},p(A,U){(!I||U[0]&1)&&e!==(e=A[0].years.value+"")&&nt(a,e);const ie={};U[0]&4194304&&(ie.content=A[22][0].heading_markdown),u.$set(ie);const $e={};U[0]&4194304&&($e.content=A[22][0].content_markdown),y.$set($e)},i(A){I||(_(u.$$.fragment,A),_(y.$$.fragment,A),I=!0)},o(A){v(u.$$.fragment,A),v(y.$$.fragment,A),I=!1},d(A){A&&(d(t),d(s),d(m),d(p),d(o),d(q),d(f)),R(u,A),R(y,A)}}}function Qi(i){let t,r,e,a;const l=[Wi,zi],s=[];function m(p,u){return p[0].years.value!=="2021"?0:1}return t=m(i),r=s[t]=l[t](i),{c(){r.c(),e=it()},l(p){r.l(p),e=it()},m(p,u){s[t].m(p,u),c(p,e,u),a=!0},p(p,u){let o=t;t=m(p),t===o?s[t].p(p,u):(me(),v(s[o],1,1,()=>{s[o]=null}),_e(),r=s[t],r?r.p(p,u):(r=s[t]=l[t](p),r.c()),_(r,1),r.m(e.parentNode,e))},i(p){a||(_(r),a=!0)},o(p){v(r),a=!1},d(p){p&&d(e),s[t].d(p)}}}function ji(i){let t,r;return t=new Si({props:{title:"Roadmap details: "+i[0].years.value+" version",$$slots:{default:[Qi]},$$scope:{ctx:i}}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&1&&(l.title="Roadmap details: "+e[0].years.value+" version"),a[0]&4194337|a[6]&131072&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ki(i){let t,r='<a href="#program-progress-to-date">Program Progress to date</a>',e,a,l,s,m,p,u,o,y,q,f,I,A,U,ie='<a href="#roadmap-detail">Roadmap Detail</a>',$e,D,ee,Me,He,Se,De,Be,qe,Ke='<a href="#platform-quaterly-delivery-summaries-by-audience">Platform Quaterly Delivery Summaries by Audience</a>',Ye,Le,ke,Ne,Ge,Fe,Ue,Te,ue,be,Ve,Oe,et,he,Ce,Ie,Q,z,J,de,te,re,pe,L,E,O,x,le,G,j,ve,ae,fe,ce,we,ne,ye,oe,se;s=new wa({props:{data:i[24],title:"Programme Overview:",rowSelection:"single",name:"deliveryOverview1",$$slots:{default:[Hi]},$$scope:{ctx:i}}}),o=new wa({props:{data:i[6],title:"Delivery Overview: Key Stats",rowSelection:"single",name:"deliveryOverview2",$$slots:{default:[Ui]},$$scope:{ctx:i}}}),I=new Fi({props:{data:i[16],x:"year",y:"activity_prs",series:"activity",title:"Programme Overview: Development Activity"}}),He=new lt({props:{name:"years",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[Pi]},$$scope:{ctx:i}}}),De=new wa({props:{data:i[8],title:i[0].years.value+" Roadmap",$$slots:{default:[Gi]},$$scope:{ctx:i}}}),be=new lt({props:{data:i[28],title:"Programme",name:"owner",value:"owner",defaultValue:"eclipse-zenoh"}}),Oe=new lt({props:{data:i[29],title:"Repo",name:"repo",value:"value",label:"label",defaultValue:"zenoh"}}),he=new lt({props:{name:"audience_p",title:"Perspective",$$slots:{default:[Bi]},$$scope:{ctx:i}}}),J=new lt({props:{name:"kind",defaultValue:"quarter",title:"Period",$$slots:{default:[Vi]},$$scope:{ctx:i}}});let B=i[0].kind.value=="quarter"&&ka(i),W=i[0].kind.value=="week"&&Ta(),K=i[0].audience_p.value=="exec"&&Aa(i),X=i[0].audience_p.value=="pm"&&Da(i),V=i[0].audience_p.value=="team_lead"&&qa(i),Y=i[0].audience_p.value=="developer"&&Fa(i);return j=new gi({props:{id:i[33],params:i[2],content_desc:"summary"}}),ne=new Ri({props:{$$slots:{default:[ji]},$$scope:{ctx:i}}}),{c(){t=h("h2"),t.innerHTML=r,e=g(),a=h("hr"),l=g(),T(s.$$.fragment),m=g(),p=h("hr"),u=g(),T(o.$$.fragment),y=g(),q=h("hr"),f=g(),T(I.$$.fragment),A=g(),U=h("h2"),U.innerHTML=ie,$e=g(),D=h("hr"),ee=g(),Me=h("div"),T(He.$$.fragment),Se=g(),T(De.$$.fragment),Be=g(),qe=h("h4"),qe.innerHTML=Ke,Ye=g(),Le=h("hr"),ke=g(),Ne=h("table"),Ge=h("tbody"),Fe=h("tr"),Ue=h("td"),Te=h("div"),ue=h("span"),T(be.$$.fragment),Ve=g(),T(Oe.$$.fragment),et=g(),T(he.$$.fragment),Ce=g(),Ie=h("tr"),Q=h("td"),z=h("div"),T(J.$$.fragment),de=g(),B&&B.c(),te=g(),W&&W.c(),re=We(`
             `),pe=g(),L=h("div"),K&&K.c(),E=g(),X&&X.c(),O=g(),V&&V.c(),x=g(),Y&&Y.c(),le=g(),G=h("div"),T(j.$$.fragment),ve=g(),ae=h("br"),fe=g(),ce=h("hr"),we=g(),T(ne.$$.fragment),ye=g(),oe=h("hr"),this.h()},l(b){t=N(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),mt(t)!=="svelte-18qc3es"&&(t.innerHTML=r),e=w(b),a=N(b,"HR",{style:!0}),l=w(b),k(s.$$.fragment,b),m=w(b),p=N(b,"HR",{style:!0}),u=w(b),k(o.$$.fragment,b),y=w(b),q=N(b,"HR",{style:!0}),f=w(b),k(I.$$.fragment,b),A=w(b),U=N(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),mt(U)!=="svelte-1usc0nn"&&(U.innerHTML=ie),$e=w(b),D=N(b,"HR",{style:!0}),ee=w(b),Me=N(b,"DIV",{style:!0});var F=Re(Me);k(He.$$.fragment,F),F.forEach(d),Se=w(b),k(De.$$.fragment,b),Be=w(b),qe=N(b,"H4",{class:!0,id:!0,"data-svelte-h":!0}),mt(qe)!=="svelte-sj40yn"&&(qe.innerHTML=Ke),Ye=w(b),Le=N(b,"HR",{style:!0}),ke=w(b),Ne=N(b,"TABLE",{style:!0});var n=Re(Ne);Ge=N(n,"TBODY",{});var $=Re(Ge);Fe=N($,"TR",{});var Ze=Re(Fe);Ue=N(Ze,"TD",{style:!0});var tt=Re(Ue);Te=N(tt,"DIV",{style:!0});var rt=Re(Te);ue=N(rt,"SPAN",{style:!0});var at=Re(ue);k(be.$$.fragment,at),Ve=w(at),k(Oe.$$.fragment,at),et=w(at),k(he.$$.fragment,at),at.forEach(d),rt.forEach(d),tt.forEach(d),Ze.forEach(d),Ce=w($),Ie=N($,"TR",{});var ot=Re(Ie);Q=N(ot,"TD",{style:!0});var st=Re(Q);z=N(st,"DIV",{style:!0});var Xe=Re(z);k(J.$$.fragment,Xe),de=w(Xe),B&&B.l(Xe),te=w(Xe),W&&W.l(Xe),re=ze(Xe,`
             `),Xe.forEach(d),st.forEach(d),ot.forEach(d),$.forEach(d),n.forEach(d),pe=w(b),L=N(b,"DIV",{style:!0});var Je=Re(L);K&&K.l(Je),E=w(Je),X&&X.l(Je),O=w(Je),V&&V.l(Je),x=w(Je),Y&&Y.l(Je),Je.forEach(d),le=w(b),G=N(b,"DIV",{style:!0});var je=Re(G);k(j.$$.fragment,je),ve=w(je),ae=N(je,"BR",{}),fe=w(je),ce=N(je,"HR",{style:!0}),we=w(je),k(ne.$$.fragment,je),ye=w(je),oe=N(je,"HR",{style:!0}),je.forEach(d),this.h()},h(){Z(t,"class","markdown"),Z(t,"id","program-progress-to-date"),H(a,"border","3px solid black"),H(p,"border","1px solid black"),H(q,"border","1px solid black"),Z(U,"class","markdown"),Z(U,"id","roadmap-detail"),H(D,"border","2px solid black"),H(Me,"display","flex"),H(Me,"justify-content","center"),Z(qe,"class","markdown"),Z(qe,"id","platform-quaterly-delivery-summaries-by-audience"),H(Le,"border","1px solid black"),H(ue,"display","inline-block"),H(ue,"margin","0 0px 0 0"),H(Te,"display","inline-block"),H(Te,"text-align","left"),H(Ue,"padding","6px 10px"),H(Ue,"text-align","center"),H(z,"display","inline-block"),H(z,"text-align","left"),H(Q,"padding","1px 10px"),H(Q,"text-align","center"),H(Ne,"width","100%"),H(Ne,"border-collapse","collapse"),H(Ne,"table-layout","fixed"),H(L,"font-size","18px"),H(L,"font-weight","bold"),H(ce,"border","2px solid black"),H(oe,"border","1px solid black"),H(G,"font-size","14px")},m(b,F){c(b,t,F),c(b,e,F),c(b,a,F),c(b,l,F),S(s,b,F),c(b,m,F),c(b,p,F),c(b,u,F),S(o,b,F),c(b,y,F),c(b,q,F),c(b,f,F),S(I,b,F),c(b,A,F),c(b,U,F),c(b,$e,F),c(b,D,F),c(b,ee,F),c(b,Me,F),S(He,Me,null),c(b,Se,F),S(De,b,F),c(b,Be,F),c(b,qe,F),c(b,Ye,F),c(b,Le,F),c(b,ke,F),c(b,Ne,F),P(Ne,Ge),P(Ge,Fe),P(Fe,Ue),P(Ue,Te),P(Te,ue),S(be,ue,null),P(ue,Ve),S(Oe,ue,null),P(ue,et),S(he,ue,null),P(Ge,Ce),P(Ge,Ie),P(Ie,Q),P(Q,z),S(J,z,null),P(z,de),B&&B.m(z,null),P(z,te),W&&W.m(z,null),P(z,re),c(b,pe,F),c(b,L,F),K&&K.m(L,null),P(L,E),X&&X.m(L,null),P(L,O),V&&V.m(L,null),P(L,x),Y&&Y.m(L,null),c(b,le,F),c(b,G,F),S(j,G,null),P(G,ve),P(G,ae),P(G,fe),P(G,ce),P(G,we),S(ne,G,null),P(G,ye),P(G,oe),se=!0},p(b,F){const n={};F[0]&16777216&&(n.data=b[24]),F[6]&131072&&(n.$$scope={dirty:F,ctx:b}),s.$set(n);const $={};F[0]&64&&($.data=b[6]),F[6]&131072&&($.$$scope={dirty:F,ctx:b}),o.$set($);const Ze={};F[0]&65536&&(Ze.data=b[16]),I.$set(Ze);const tt={};F[6]&131072&&(tt.$$scope={dirty:F,ctx:b}),He.$set(tt);const rt={};F[0]&256&&(rt.data=b[8]),F[0]&1&&(rt.title=b[0].years.value+" Roadmap"),F[6]&131072&&(rt.$$scope={dirty:F,ctx:b}),De.$set(rt);const at={};F[0]&268435456&&(at.data=b[28]),be.$set(at);const ot={};F[0]&536870912&&(ot.data=b[29]),Oe.$set(ot);const st={};F[6]&131072&&(st.$$scope={dirty:F,ctx:b}),he.$set(st);const Xe={};F[6]&131072&&(Xe.$$scope={dirty:F,ctx:b}),J.$set(Xe),b[0].kind.value=="quarter"?B?F[0]&1&&_(B,1):(B=ka(b),B.c(),_(B,1),B.m(z,te)):B&&(me(),v(B,1,1,()=>{B=null}),_e()),b[0].kind.value=="week"?W?F[0]&1&&_(W,1):(W=Ta(),W.c(),_(W,1),W.m(z,re)):W&&(me(),v(W,1,1,()=>{W=null}),_e()),b[0].audience_p.value=="exec"?K?K.p(b,F):(K=Aa(b),K.c(),K.m(L,E)):K&&(K.d(1),K=null),b[0].audience_p.value=="pm"?X?X.p(b,F):(X=Da(b),X.c(),X.m(L,O)):X&&(X.d(1),X=null),b[0].audience_p.value=="team_lead"?V?V.p(b,F):(V=qa(b),V.c(),V.m(L,x)):V&&(V.d(1),V=null),b[0].audience_p.value=="developer"?Y?Y.p(b,F):(Y=Fa(b),Y.c(),Y.m(L,null)):Y&&(Y.d(1),Y=null);const Je={};F[1]&4&&(Je.id=b[33]),F[0]&4&&(Je.params=b[2]),j.$set(Je);const je={};F[0]&4194337|F[6]&131072&&(je.$$scope={dirty:F,ctx:b}),ne.$set(je)},i(b){se||(_(s.$$.fragment,b),_(o.$$.fragment,b),_(I.$$.fragment,b),_(He.$$.fragment,b),_(De.$$.fragment,b),_(be.$$.fragment,b),_(Oe.$$.fragment,b),_(he.$$.fragment,b),_(J.$$.fragment,b),_(B),_(W),_(j.$$.fragment,b),_(ne.$$.fragment,b),se=!0)},o(b){v(s.$$.fragment,b),v(o.$$.fragment,b),v(I.$$.fragment,b),v(He.$$.fragment,b),v(De.$$.fragment,b),v(be.$$.fragment,b),v(Oe.$$.fragment,b),v(he.$$.fragment,b),v(J.$$.fragment,b),v(B),v(W),v(j.$$.fragment,b),v(ne.$$.fragment,b),se=!1},d(b){b&&(d(t),d(e),d(a),d(l),d(m),d(p),d(u),d(y),d(q),d(f),d(A),d(U),d($e),d(D),d(ee),d(Me),d(Se),d(Be),d(qe),d(Ye),d(Le),d(ke),d(Ne),d(pe),d(L),d(le),d(G)),R(s,b),R(o,b),R(I,b),R(He),R(De,b),R(be),R(Oe),R(he),R(J),B&&B.d(),W&&W.d(),K&&K.d(),X&&X.d(),V&&V.d(),Y&&Y.d(),R(j),R(ne)}}}function Xi(i){let t,r,e,a,l,s,m,p;return t=new Ae({props:{valueLabel:"2021",value:"2021"}}),e=new Ae({props:{valueLabel:"2022",value:"2022"}}),l=new Ae({props:{valueLabel:"2023",value:"2023"}}),m=new Ae({props:{valueLabel:"2024",value:"2024"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment),s=g(),T(m.$$.fragment)},l(u){k(t.$$.fragment,u),r=w(u),k(e.$$.fragment,u),a=w(u),k(l.$$.fragment,u),s=w(u),k(m.$$.fragment,u)},m(u,o){S(t,u,o),c(u,r,o),S(e,u,o),c(u,a,o),S(l,u,o),c(u,s,o),S(m,u,o),p=!0},p:xe,i(u){p||(_(t.$$.fragment,u),_(e.$$.fragment,u),_(l.$$.fragment,u),_(m.$$.fragment,u),p=!0)},o(u){v(t.$$.fragment,u),v(e.$$.fragment,u),v(l.$$.fragment,u),v(m.$$.fragment,u),p=!1},d(u){u&&(d(r),d(a),d(s)),R(t,u),R(e,u),R(l,u),R(m,u)}}}function Zi(i){let t,r,e,a,l,s;return t=new Ae({props:{valueLabel:"2022",value:"2022"}}),e=new Ae({props:{valueLabel:"2023",value:"2023"}}),l=new Ae({props:{valueLabel:"2024",value:"2024"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment)},l(m){k(t.$$.fragment,m),r=w(m),k(e.$$.fragment,m),a=w(m),k(l.$$.fragment,m)},m(m,p){S(t,m,p),c(m,r,p),S(e,m,p),c(m,a,p),S(l,m,p),s=!0},p:xe,i(m){s||(_(t.$$.fragment,m),_(e.$$.fragment,m),_(l.$$.fragment,m),s=!0)},o(m){v(t.$$.fragment,m),v(e.$$.fragment,m),v(l.$$.fragment,m),s=!1},d(m){m&&(d(r),d(a)),R(t,m),R(e,m),R(l,m)}}}function xi(i){let t,r,e,a,l,s,m,p,u,o;return t=new Ae({props:{valueLabel:"Product Manager",value:"Product Manager"}}),e=new Ae({props:{valueLabel:"Programme Manager",value:"Programme Manager"}}),l=new Ae({props:{valueLabel:"Project Manager",value:"Project Manager"}}),m=new Ae({props:{valueLabel:"Dev Lead",value:"Dev Lead"}}),u=new Ae({props:{valueLabel:"Developer",value:"Developer"}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment),a=g(),T(l.$$.fragment),s=g(),T(m.$$.fragment),p=g(),T(u.$$.fragment)},l(y){k(t.$$.fragment,y),r=w(y),k(e.$$.fragment,y),a=w(y),k(l.$$.fragment,y),s=w(y),k(m.$$.fragment,y),p=w(y),k(u.$$.fragment,y)},m(y,q){S(t,y,q),c(y,r,q),S(e,y,q),c(y,a,q),S(l,y,q),c(y,s,q),S(m,y,q),c(y,p,q),S(u,y,q),o=!0},p:xe,i(y){o||(_(t.$$.fragment,y),_(e.$$.fragment,y),_(l.$$.fragment,y),_(m.$$.fragment,y),_(u.$$.fragment,y),o=!0)},o(y){v(t.$$.fragment,y),v(e.$$.fragment,y),v(l.$$.fragment,y),v(m.$$.fragment,y),v(u.$$.fragment,y),o=!1},d(y){y&&(d(r),d(a),d(s),d(p)),R(t,y),R(e,y),R(l,y),R(m,y),R(u,y)}}}function Ca(i){let t,r,e=i[0].years.value+"",a,l,s,m,p,u,o;return m=new _t({props:{content:i[22][0].heading_markdown}}),u=new _t({props:{content:i[22][0].content_markdown}}),{c(){t=h("h1"),r=h("a"),a=We(e),l=We(" Roadmap Details"),s=g(),T(m.$$.fragment),p=g(),T(u.$$.fragment),this.h()},l(y){t=N(y,"H1",{class:!0,id:!0});var q=Re(t);r=N(q,"A",{href:!0});var f=Re(r);a=ze(f,e),l=ze(f," Roadmap Details"),f.forEach(d),q.forEach(d),s=w(y),k(m.$$.fragment,y),p=w(y),k(u.$$.fragment,y),this.h()},h(){Z(r,"href","#inputsyearsvalue-roadmap-details-1"),Z(t,"class","markdown"),Z(t,"id","inputsyearsvalue-roadmap-details-1")},m(y,q){c(y,t,q),P(t,r),P(r,a),P(r,l),c(y,s,q),S(m,y,q),c(y,p,q),S(u,y,q),o=!0},p(y,q){(!o||q[0]&1)&&e!==(e=y[0].years.value+"")&&nt(a,e);const f={};q[0]&4194304&&(f.content=y[22][0].heading_markdown),m.$set(f);const I={};q[0]&4194304&&(I.content=y[22][0].content_markdown),u.$set(I)},i(y){o||(_(m.$$.fragment,y),_(u.$$.fragment,y),o=!0)},o(y){v(m.$$.fragment,y),v(u.$$.fragment,y),o=!1},d(y){y&&(d(t),d(s),d(p)),R(m,y),R(u,y)}}}function el(i){let t,r='<a href="#roadmap-explorer">Roadmap Explorer</a>',e,a,l,s,m,p,u,o,y,q,f,I,A,U,ie,$e,D,ee,Me,He,Se,De='<a href="#roadmap-version-data">Roadmap Version Data</a>',Be,qe,Ke,Ye,Le,ke,Ne='<a href="#roadmap-version-overview">Roadmap Version Overview</a>',Ge,Fe,Ue,Te,ue,be,Ve,Oe,et,he,Ce,Ie,Q,z,J,de='<a href="#show">Show</a>',te,re,pe;q=new lt({props:{name:"roadmap_versions",title:"Roadmap Revision:",defaultValue:"2021",$$slots:{default:[Xi]},$$scope:{ctx:i}}}),A=new lt({props:{data:i[32],name:"section",value:"heading_text",title:"Select Roadmap Section",multiple:"true"}}),D=new _t({props:{content:i[1].map(mi).join(`

`)}}),Oe=new lt({props:{name:"roadmap_years",title:"Roadmap Revision:",defaultValue:"2022",$$slots:{default:[Zi]},$$scope:{ctx:i}}}),Ce=new lt({props:{name:"readers",title:"Audience",defaultValue:"Product Manager",$$slots:{default:[xi]},$$scope:{ctx:i}}}),Q=new _t({props:{content:i[4][0].four_sentence_summary}});let L=i[0].showroadmap.value!=="no"&&Ca(i);return{c(){t=h("h2"),t.innerHTML=r,e=g(),a=h("hr"),l=g(),s=h("table"),m=h("tbody"),p=h("tr"),u=h("td"),o=h("div"),y=h("span"),T(q.$$.fragment),f=g(),I=h("span"),T(A.$$.fragment),U=g(),ie=h("br"),$e=g(),T(D.$$.fragment),ee=g(),Me=h("br"),He=g(),Se=h("h2"),Se.innerHTML=De,Be=g(),qe=h("hr"),Ke=g(),Ye=h("hr"),Le=g(),ke=h("h3"),ke.innerHTML=Ne,Ge=g(),Fe=h("table"),Ue=h("tbody"),Te=h("tr"),ue=h("td"),be=h("div"),Ve=h("span"),T(Oe.$$.fragment),et=g(),he=h("span"),T(Ce.$$.fragment),Ie=g(),T(Q.$$.fragment),z=g(),J=h("h2"),J.innerHTML=de,te=g(),L&&L.c(),re=it(),this.h()},l(E){t=N(E,"H2",{class:!0,id:!0,"data-svelte-h":!0}),mt(t)!=="svelte-5rsgt5"&&(t.innerHTML=r),e=w(E),a=N(E,"HR",{style:!0}),l=w(E),s=N(E,"TABLE",{style:!0});var O=Re(s);m=N(O,"TBODY",{});var x=Re(m);p=N(x,"TR",{});var le=Re(p);u=N(le,"TD",{style:!0});var G=Re(u);o=N(G,"DIV",{style:!0});var j=Re(o);y=N(j,"SPAN",{style:!0});var ve=Re(y);k(q.$$.fragment,ve),ve.forEach(d),f=w(j),I=N(j,"SPAN",{style:!0});var ae=Re(I);k(A.$$.fragment,ae),ae.forEach(d),j.forEach(d),G.forEach(d),le.forEach(d),x.forEach(d),O.forEach(d),U=w(E),ie=N(E,"BR",{}),$e=w(E),k(D.$$.fragment,E),ee=w(E),Me=N(E,"BR",{}),He=w(E),Se=N(E,"H2",{class:!0,id:!0,"data-svelte-h":!0}),mt(Se)!=="svelte-1ycxcbc"&&(Se.innerHTML=De),Be=w(E),qe=N(E,"HR",{style:!0}),Ke=w(E),Ye=N(E,"HR",{style:!0}),Le=w(E),ke=N(E,"H3",{class:!0,id:!0,"data-svelte-h":!0}),mt(ke)!=="svelte-1iqdgtt"&&(ke.innerHTML=Ne),Ge=w(E),Fe=N(E,"TABLE",{style:!0});var fe=Re(Fe);Ue=N(fe,"TBODY",{});var ce=Re(Ue);Te=N(ce,"TR",{});var we=Re(Te);ue=N(we,"TD",{style:!0});var ne=Re(ue);be=N(ne,"DIV",{style:!0});var ye=Re(be);Ve=N(ye,"SPAN",{style:!0});var oe=Re(Ve);k(Oe.$$.fragment,oe),oe.forEach(d),et=w(ye),he=N(ye,"SPAN",{style:!0});var se=Re(he);k(Ce.$$.fragment,se),se.forEach(d),ye.forEach(d),ne.forEach(d),we.forEach(d),ce.forEach(d),fe.forEach(d),Ie=w(E),k(Q.$$.fragment,E),z=w(E),J=N(E,"H2",{class:!0,id:!0,"data-svelte-h":!0}),mt(J)!=="svelte-1w5ky1z"&&(J.innerHTML=de),te=w(E),L&&L.l(E),re=it(),this.h()},h(){Z(t,"class","markdown"),Z(t,"id","roadmap-explorer"),H(a,"border","1px solid black"),H(y,"display","inline-block"),H(y,"margin","0 8px 8px 0"),H(I,"display","inline-block"),H(I,"margin","0 0 8px 0"),H(o,"display","inline-block"),H(o,"text-align","left"),H(u,"padding","12px"),H(u,"text-align","center"),H(s,"width","100%"),H(s,"border-collapse","collapse"),H(s,"table-layout","fixed"),Z(Se,"class","markdown"),Z(Se,"id","roadmap-version-data"),H(qe,"border","3px solid black"),H(Ye,"border","1px solid black"),Z(ke,"class","markdown"),Z(ke,"id","roadmap-version-overview"),H(Ve,"display","inline-block"),H(Ve,"margin","0 8px 8px 0"),H(he,"display","inline-block"),H(he,"margin","0 0 8px 0"),H(be,"display","inline-block"),H(be,"text-align","left"),H(ue,"padding","12px"),H(ue,"text-align","center"),H(Fe,"width","100%"),H(Fe,"border-collapse","collapse"),H(Fe,"table-layout","fixed"),Z(J,"class","markdown"),Z(J,"id","show")},m(E,O){c(E,t,O),c(E,e,O),c(E,a,O),c(E,l,O),c(E,s,O),P(s,m),P(m,p),P(p,u),P(u,o),P(o,y),S(q,y,null),P(o,f),P(o,I),S(A,I,null),c(E,U,O),c(E,ie,O),c(E,$e,O),S(D,E,O),c(E,ee,O),c(E,Me,O),c(E,He,O),c(E,Se,O),c(E,Be,O),c(E,qe,O),c(E,Ke,O),c(E,Ye,O),c(E,Le,O),c(E,ke,O),c(E,Ge,O),c(E,Fe,O),P(Fe,Ue),P(Ue,Te),P(Te,ue),P(ue,be),P(be,Ve),S(Oe,Ve,null),P(be,et),P(be,he),S(Ce,he,null),c(E,Ie,O),S(Q,E,O),c(E,z,O),c(E,J,O),c(E,te,O),L&&L.m(E,O),c(E,re,O),pe=!0},p(E,O){const x={};O[6]&131072&&(x.$$scope={dirty:O,ctx:E}),q.$set(x);const le={};O[1]&2&&(le.data=E[32]),A.$set(le);const G={};O[0]&2&&(G.content=E[1].map(mi).join(`

`)),D.$set(G);const j={};O[6]&131072&&(j.$$scope={dirty:O,ctx:E}),Oe.$set(j);const ve={};O[6]&131072&&(ve.$$scope={dirty:O,ctx:E}),Ce.$set(ve);const ae={};O[0]&16&&(ae.content=E[4][0].four_sentence_summary),Q.$set(ae),E[0].showroadmap.value!=="no"?L?(L.p(E,O),O[0]&1&&_(L,1)):(L=Ca(E),L.c(),_(L,1),L.m(re.parentNode,re)):L&&(me(),v(L,1,1,()=>{L=null}),_e())},i(E){pe||(_(q.$$.fragment,E),_(A.$$.fragment,E),_(D.$$.fragment,E),_(Oe.$$.fragment,E),_(Ce.$$.fragment,E),_(Q.$$.fragment,E),_(L),pe=!0)},o(E){v(q.$$.fragment,E),v(A.$$.fragment,E),v(D.$$.fragment,E),v(Oe.$$.fragment,E),v(Ce.$$.fragment,E),v(Q.$$.fragment,E),v(L),pe=!1},d(E){E&&(d(t),d(e),d(a),d(l),d(s),d(U),d(ie),d($e),d(ee),d(Me),d(He),d(Se),d(Be),d(qe),d(Ke),d(Ye),d(Le),d(ke),d(Ge),d(Fe),d(Ie),d(z),d(J),d(te),d(re)),R(q),R(A),R(D,E),R(Oe),R(Ce),R(Q,E),L&&L.d(E)}}}function tl(i){let t,r,e,a;return t=new Ea({props:{label:"Platform: Delivery Overview & Analysis",$$slots:{default:[Ki]},$$scope:{ctx:i}}}),e=new Ea({props:{label:"Programme Documentation 2021-2024",$$slots:{default:[el]},$$scope:{ctx:i}}}),{c(){T(t.$$.fragment),r=g(),T(e.$$.fragment)},l(l){k(t.$$.fragment,l),r=w(l),k(e.$$.fragment,l)},m(l,s){S(t,l,s),c(l,r,s),S(e,l,s),a=!0},p(l,s){const m={};s[0]&826343781|s[1]&4|s[6]&131072&&(m.$$scope={dirty:s,ctx:l}),t.$set(m);const p={};s[0]&4194323|s[1]&2|s[6]&131072&&(p.$$scope={dirty:s,ctx:l}),e.$set(p)},i(l){a||(_(t.$$.fragment,l),_(e.$$.fragment,l),a=!0)},o(l){v(t.$$.fragment,l),v(e.$$.fragment,l),a=!1},d(l){l&&d(r),R(t,l),R(e,l)}}}function Ia(i){let t,r;return t=new Ee({props:{queryID:"roadmap_revision_summaries_all",queryResult:i[3]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&8&&(l.queryResult=e[3]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function La(i){let t,r;return t=new Ee({props:{queryID:"roadmap_revision_summaries_filtered",queryResult:i[4]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&16&&(l.queryResult=e[4]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Na(i){let t,r;return t=new Ee({props:{queryID:"roadmap_revision_summaries_filtered_delivery",queryResult:i[5]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&32&&(l.queryResult=e[5]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ha(i){let t,r;return t=new Ee({props:{queryID:"test",queryResult:i[6]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&64&&(l.queryResult=e[6]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ma(i){let t,r;return t=new Ee({props:{queryID:"roadmap_versions",queryResult:i[7]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&128&&(l.queryResult=e[7]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ha(i){let t,r;return t=new Ee({props:{queryID:"roadmap_versions_filtered",queryResult:i[8]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&256&&(l.queryResult=e[8]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ua(i){let t,r;return t=new Ee({props:{queryID:"roadmap_key_dates",queryResult:i[9]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&512&&(l.queryResult=e[9]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Pa(i){let t,r;return t=new Ee({props:{queryID:"bob2",queryResult:i[10]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&1024&&(l.queryResult=e[10]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ga(i){let t,r;return t=new Ee({props:{queryID:"roadmap_summary_data",queryResult:i[11]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&2048&&(l.queryResult=e[11]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ba(i){let t,r;return t=new Ee({props:{queryID:"roadmap_summary_data_filtered",queryResult:i[12]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&4096&&(l.queryResult=e[12]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Va(i){let t,r;return t=new Ee({props:{queryID:"dimgraph_data_input",queryResult:i[13]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&8192&&(l.queryResult=e[13]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ya(i){let t,r;return t=new Ee({props:{queryID:"dimgraph_data",queryResult:i[14]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&16384&&(l.queryResult=e[14]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function za(i){let t,r;return t=new Ee({props:{queryID:"testing",queryResult:i[15]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&32768&&(l.queryResult=e[15]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Wa(i){let t,r;return t=new Ee({props:{queryID:"actvity_barchart_by_year2",queryResult:i[16]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&65536&&(l.queryResult=e[16]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ja(i){let t,r;return t=new Ee({props:{queryID:"milestone_last_merge_date",queryResult:i[17]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&131072&&(l.queryResult=e[17]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Qa(i){let t,r;return t=new Ee({props:{queryID:"new_roadmap",queryResult:i[18]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&262144&&(l.queryResult=e[18]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ja(i){let t,r;return t=new Ee({props:{queryID:"new_roadmap_filtered",queryResult:i[19]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&524288&&(l.queryResult=e[19]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ka(i){let t,r;return t=new Ee({props:{queryID:"new_roadmap2",queryResult:i[20]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&1048576&&(l.queryResult=e[20]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Xa(i){let t,r;return t=new Ee({props:{queryID:"roadmap_details",queryResult:i[21]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&2097152&&(l.queryResult=e[21]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Za(i){let t,r;return t=new Ee({props:{queryID:"roadmap_details_filtered",queryResult:i[22]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&4194304&&(l.queryResult=e[22]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function xa(i){let t,r;return t=new Ee({props:{queryID:"milestone_details",queryResult:i[23]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&8388608&&(l.queryResult=e[23]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ei(i){let t,r;return t=new Ee({props:{queryID:"milestone_rolllup_by_year",queryResult:i[24]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&16777216&&(l.queryResult=e[24]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ti(i){let t,r;return t=new Ee({props:{queryID:"roadmap_catagories",queryResult:i[25]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&33554432&&(l.queryResult=e[25]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ri(i){let t,r;return t=new Ee({props:{queryID:"new_dim_data",queryResult:i[26]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&67108864&&(l.queryResult=e[26]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ai(i){let t,r;return t=new Ee({props:{queryID:"new_dim_data_filtered",queryResult:i[27]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&134217728&&(l.queryResult=e[27]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ii(i){let t,r;return t=new Ee({props:{queryID:"owners",queryResult:i[28]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&268435456&&(l.queryResult=e[28]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function li(i){let t,r;return t=new Ee({props:{queryID:"repos",queryResult:i[29]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&536870912&&(l.queryResult=e[29]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ni(i){let t,r;return t=new Ee({props:{queryID:"roadmap2025",queryResult:i[30]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&1073741824&&(l.queryResult=e[30]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function oi(i){let t,r;return t=new Ee({props:{queryID:"get_plan_revisions_by_version",queryResult:i[31]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[1]&1&&(l.queryResult=e[31]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function si(i){let t,r;return t=new Ee({props:{queryID:"roadmap_sections_payload",queryResult:i[1]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[0]&2&&(l.queryResult=e[1]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function _i(i){let t,r;return t=new Ee({props:{queryID:"roadmap_sections",queryResult:i[32]}}),{c(){T(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){S(t,e,a),r=!0},p(e,a){const l={};a[1]&2&&(l.queryResult=e[32]),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function rl(i){let t,r,e,a,l,s,m,p,u,o,y,q,f,I,A,U,ie,$e,D,ee,Me,He,Se,De,Be,qe,Ke,Ye,Le,ke,Ne,Ge,Fe,Ue,Te,ue,be,Ve,Oe;function et(n,$){return typeof Pe<"u"&&Pe.title?Li:Ii}let Ce=et()(i),Ie=typeof Pe=="object"&&Ni();s=new wi({props:{fullWidth:"true",$$slots:{default:[tl]},$$scope:{ctx:i}}});let Q=i[3]&&Ia(i),z=i[4]&&La(i),J=i[5]&&Na(i),de=i[6]&&ha(i),te=i[7]&&Ma(i),re=i[8]&&Ha(i),pe=i[9]&&Ua(i),L=i[10]&&Pa(i),E=i[11]&&Ga(i),O=i[12]&&Ba(i),x=i[13]&&Va(i),le=i[14]&&Ya(i),G=i[15]&&za(i),j=i[16]&&Wa(i),ve=i[17]&&Ja(i),ae=i[18]&&Qa(i),fe=i[19]&&ja(i),ce=i[20]&&Ka(i),we=i[21]&&Xa(i),ne=i[22]&&Za(i),ye=i[23]&&xa(i),oe=i[24]&&ei(i),se=i[25]&&ti(i),B=i[26]&&ri(i),W=i[27]&&ai(i),K=i[28]&&ii(i),X=i[29]&&li(i),V=i[30]&&ni(i),Y=i[31]&&oi(i),b=i[1]&&si(i),F=i[32]&&_i(i);return{c(){t=g(),Ce.c(),r=h("meta"),e=h("meta"),Ie&&Ie.c(),a=it(),l=g(),T(s.$$.fragment),m=g(),Q&&Q.c(),p=g(),z&&z.c(),u=g(),J&&J.c(),o=g(),de&&de.c(),y=g(),te&&te.c(),q=g(),re&&re.c(),f=g(),pe&&pe.c(),I=g(),L&&L.c(),A=g(),E&&E.c(),U=g(),O&&O.c(),ie=g(),x&&x.c(),$e=g(),le&&le.c(),D=g(),G&&G.c(),ee=g(),j&&j.c(),Me=g(),ve&&ve.c(),He=g(),ae&&ae.c(),Se=g(),fe&&fe.c(),De=g(),ce&&ce.c(),Be=g(),we&&we.c(),qe=g(),ne&&ne.c(),Ke=g(),ye&&ye.c(),Ye=g(),oe&&oe.c(),Le=g(),se&&se.c(),ke=g(),B&&B.c(),Ne=g(),W&&W.c(),Ge=g(),K&&K.c(),Fe=g(),X&&X.c(),Ue=g(),V&&V.c(),Te=g(),Y&&Y.c(),ue=g(),b&&b.c(),be=g(),F&&F.c(),Ve=it(),this.h()},l(n){t=w(n);const $=ui("svelte-2igo1p",document.head);Ce.l($),r=N($,"META",{name:!0,content:!0}),e=N($,"META",{name:!0,content:!0}),Ie&&Ie.l($),a=it(),$.forEach(d),l=w(n),k(s.$$.fragment,n),m=w(n),Q&&Q.l(n),p=w(n),z&&z.l(n),u=w(n),J&&J.l(n),o=w(n),de&&de.l(n),y=w(n),te&&te.l(n),q=w(n),re&&re.l(n),f=w(n),pe&&pe.l(n),I=w(n),L&&L.l(n),A=w(n),E&&E.l(n),U=w(n),O&&O.l(n),ie=w(n),x&&x.l(n),$e=w(n),le&&le.l(n),D=w(n),G&&G.l(n),ee=w(n),j&&j.l(n),Me=w(n),ve&&ve.l(n),He=w(n),ae&&ae.l(n),Se=w(n),fe&&fe.l(n),De=w(n),ce&&ce.l(n),Be=w(n),we&&we.l(n),qe=w(n),ne&&ne.l(n),Ke=w(n),ye&&ye.l(n),Ye=w(n),oe&&oe.l(n),Le=w(n),se&&se.l(n),ke=w(n),B&&B.l(n),Ne=w(n),W&&W.l(n),Ge=w(n),K&&K.l(n),Fe=w(n),X&&X.l(n),Ue=w(n),V&&V.l(n),Te=w(n),Y&&Y.l(n),ue=w(n),b&&b.l(n),be=w(n),F&&F.l(n),Ve=it(),this.h()},h(){Z(r,"name","twitter:card"),Z(r,"content","summary_large_image"),Z(e,"name","twitter:site"),Z(e,"content","@evidence_dev")},m(n,$){c(n,t,$),Ce.m(document.head,null),P(document.head,r),P(document.head,e),Ie&&Ie.m(document.head,null),P(document.head,a),c(n,l,$),S(s,n,$),c(n,m,$),Q&&Q.m(n,$),c(n,p,$),z&&z.m(n,$),c(n,u,$),J&&J.m(n,$),c(n,o,$),de&&de.m(n,$),c(n,y,$),te&&te.m(n,$),c(n,q,$),re&&re.m(n,$),c(n,f,$),pe&&pe.m(n,$),c(n,I,$),L&&L.m(n,$),c(n,A,$),E&&E.m(n,$),c(n,U,$),O&&O.m(n,$),c(n,ie,$),x&&x.m(n,$),c(n,$e,$),le&&le.m(n,$),c(n,D,$),G&&G.m(n,$),c(n,ee,$),j&&j.m(n,$),c(n,Me,$),ve&&ve.m(n,$),c(n,He,$),ae&&ae.m(n,$),c(n,Se,$),fe&&fe.m(n,$),c(n,De,$),ce&&ce.m(n,$),c(n,Be,$),we&&we.m(n,$),c(n,qe,$),ne&&ne.m(n,$),c(n,Ke,$),ye&&ye.m(n,$),c(n,Ye,$),oe&&oe.m(n,$),c(n,Le,$),se&&se.m(n,$),c(n,ke,$),B&&B.m(n,$),c(n,Ne,$),W&&W.m(n,$),c(n,Ge,$),K&&K.m(n,$),c(n,Fe,$),X&&X.m(n,$),c(n,Ue,$),V&&V.m(n,$),c(n,Te,$),Y&&Y.m(n,$),c(n,ue,$),b&&b.m(n,$),c(n,be,$),F&&F.m(n,$),c(n,Ve,$),Oe=!0},p(n,$){Ce.p(n,$),typeof Pe=="object"&&Ie.p(n,$);const Ze={};$[0]&826343799|$[1]&6|$[6]&131072&&(Ze.$$scope={dirty:$,ctx:n}),s.$set(Ze),n[3]?Q?(Q.p(n,$),$[0]&8&&_(Q,1)):(Q=Ia(n),Q.c(),_(Q,1),Q.m(p.parentNode,p)):Q&&(me(),v(Q,1,1,()=>{Q=null}),_e()),n[4]?z?(z.p(n,$),$[0]&16&&_(z,1)):(z=La(n),z.c(),_(z,1),z.m(u.parentNode,u)):z&&(me(),v(z,1,1,()=>{z=null}),_e()),n[5]?J?(J.p(n,$),$[0]&32&&_(J,1)):(J=Na(n),J.c(),_(J,1),J.m(o.parentNode,o)):J&&(me(),v(J,1,1,()=>{J=null}),_e()),n[6]?de?(de.p(n,$),$[0]&64&&_(de,1)):(de=ha(n),de.c(),_(de,1),de.m(y.parentNode,y)):de&&(me(),v(de,1,1,()=>{de=null}),_e()),n[7]?te?(te.p(n,$),$[0]&128&&_(te,1)):(te=Ma(n),te.c(),_(te,1),te.m(q.parentNode,q)):te&&(me(),v(te,1,1,()=>{te=null}),_e()),n[8]?re?(re.p(n,$),$[0]&256&&_(re,1)):(re=Ha(n),re.c(),_(re,1),re.m(f.parentNode,f)):re&&(me(),v(re,1,1,()=>{re=null}),_e()),n[9]?pe?(pe.p(n,$),$[0]&512&&_(pe,1)):(pe=Ua(n),pe.c(),_(pe,1),pe.m(I.parentNode,I)):pe&&(me(),v(pe,1,1,()=>{pe=null}),_e()),n[10]?L?(L.p(n,$),$[0]&1024&&_(L,1)):(L=Pa(n),L.c(),_(L,1),L.m(A.parentNode,A)):L&&(me(),v(L,1,1,()=>{L=null}),_e()),n[11]?E?(E.p(n,$),$[0]&2048&&_(E,1)):(E=Ga(n),E.c(),_(E,1),E.m(U.parentNode,U)):E&&(me(),v(E,1,1,()=>{E=null}),_e()),n[12]?O?(O.p(n,$),$[0]&4096&&_(O,1)):(O=Ba(n),O.c(),_(O,1),O.m(ie.parentNode,ie)):O&&(me(),v(O,1,1,()=>{O=null}),_e()),n[13]?x?(x.p(n,$),$[0]&8192&&_(x,1)):(x=Va(n),x.c(),_(x,1),x.m($e.parentNode,$e)):x&&(me(),v(x,1,1,()=>{x=null}),_e()),n[14]?le?(le.p(n,$),$[0]&16384&&_(le,1)):(le=Ya(n),le.c(),_(le,1),le.m(D.parentNode,D)):le&&(me(),v(le,1,1,()=>{le=null}),_e()),n[15]?G?(G.p(n,$),$[0]&32768&&_(G,1)):(G=za(n),G.c(),_(G,1),G.m(ee.parentNode,ee)):G&&(me(),v(G,1,1,()=>{G=null}),_e()),n[16]?j?(j.p(n,$),$[0]&65536&&_(j,1)):(j=Wa(n),j.c(),_(j,1),j.m(Me.parentNode,Me)):j&&(me(),v(j,1,1,()=>{j=null}),_e()),n[17]?ve?(ve.p(n,$),$[0]&131072&&_(ve,1)):(ve=Ja(n),ve.c(),_(ve,1),ve.m(He.parentNode,He)):ve&&(me(),v(ve,1,1,()=>{ve=null}),_e()),n[18]?ae?(ae.p(n,$),$[0]&262144&&_(ae,1)):(ae=Qa(n),ae.c(),_(ae,1),ae.m(Se.parentNode,Se)):ae&&(me(),v(ae,1,1,()=>{ae=null}),_e()),n[19]?fe?(fe.p(n,$),$[0]&524288&&_(fe,1)):(fe=ja(n),fe.c(),_(fe,1),fe.m(De.parentNode,De)):fe&&(me(),v(fe,1,1,()=>{fe=null}),_e()),n[20]?ce?(ce.p(n,$),$[0]&1048576&&_(ce,1)):(ce=Ka(n),ce.c(),_(ce,1),ce.m(Be.parentNode,Be)):ce&&(me(),v(ce,1,1,()=>{ce=null}),_e()),n[21]?we?(we.p(n,$),$[0]&2097152&&_(we,1)):(we=Xa(n),we.c(),_(we,1),we.m(qe.parentNode,qe)):we&&(me(),v(we,1,1,()=>{we=null}),_e()),n[22]?ne?(ne.p(n,$),$[0]&4194304&&_(ne,1)):(ne=Za(n),ne.c(),_(ne,1),ne.m(Ke.parentNode,Ke)):ne&&(me(),v(ne,1,1,()=>{ne=null}),_e()),n[23]?ye?(ye.p(n,$),$[0]&8388608&&_(ye,1)):(ye=xa(n),ye.c(),_(ye,1),ye.m(Ye.parentNode,Ye)):ye&&(me(),v(ye,1,1,()=>{ye=null}),_e()),n[24]?oe?(oe.p(n,$),$[0]&16777216&&_(oe,1)):(oe=ei(n),oe.c(),_(oe,1),oe.m(Le.parentNode,Le)):oe&&(me(),v(oe,1,1,()=>{oe=null}),_e()),n[25]?se?(se.p(n,$),$[0]&33554432&&_(se,1)):(se=ti(n),se.c(),_(se,1),se.m(ke.parentNode,ke)):se&&(me(),v(se,1,1,()=>{se=null}),_e()),n[26]?B?(B.p(n,$),$[0]&67108864&&_(B,1)):(B=ri(n),B.c(),_(B,1),B.m(Ne.parentNode,Ne)):B&&(me(),v(B,1,1,()=>{B=null}),_e()),n[27]?W?(W.p(n,$),$[0]&134217728&&_(W,1)):(W=ai(n),W.c(),_(W,1),W.m(Ge.parentNode,Ge)):W&&(me(),v(W,1,1,()=>{W=null}),_e()),n[28]?K?(K.p(n,$),$[0]&268435456&&_(K,1)):(K=ii(n),K.c(),_(K,1),K.m(Fe.parentNode,Fe)):K&&(me(),v(K,1,1,()=>{K=null}),_e()),n[29]?X?(X.p(n,$),$[0]&536870912&&_(X,1)):(X=li(n),X.c(),_(X,1),X.m(Ue.parentNode,Ue)):X&&(me(),v(X,1,1,()=>{X=null}),_e()),n[30]?V?(V.p(n,$),$[0]&1073741824&&_(V,1)):(V=ni(n),V.c(),_(V,1),V.m(Te.parentNode,Te)):V&&(me(),v(V,1,1,()=>{V=null}),_e()),n[31]?Y?(Y.p(n,$),$[1]&1&&_(Y,1)):(Y=oi(n),Y.c(),_(Y,1),Y.m(ue.parentNode,ue)):Y&&(me(),v(Y,1,1,()=>{Y=null}),_e()),n[1]?b?(b.p(n,$),$[0]&2&&_(b,1)):(b=si(n),b.c(),_(b,1),b.m(be.parentNode,be)):b&&(me(),v(b,1,1,()=>{b=null}),_e()),n[32]?F?(F.p(n,$),$[1]&2&&_(F,1)):(F=_i(n),F.c(),_(F,1),F.m(Ve.parentNode,Ve)):F&&(me(),v(F,1,1,()=>{F=null}),_e())},i(n){Oe||(_(s.$$.fragment,n),_(Q),_(z),_(J),_(de),_(te),_(re),_(pe),_(L),_(E),_(O),_(x),_(le),_(G),_(j),_(ve),_(ae),_(fe),_(ce),_(we),_(ne),_(ye),_(oe),_(se),_(B),_(W),_(K),_(X),_(V),_(Y),_(b),_(F),Oe=!0)},o(n){v(s.$$.fragment,n),v(Q),v(z),v(J),v(de),v(te),v(re),v(pe),v(L),v(E),v(O),v(x),v(le),v(G),v(j),v(ve),v(ae),v(fe),v(ce),v(we),v(ne),v(ye),v(oe),v(se),v(B),v(W),v(K),v(X),v(V),v(Y),v(b),v(F),Oe=!1},d(n){n&&(d(t),d(l),d(m),d(p),d(u),d(o),d(y),d(q),d(f),d(I),d(A),d(U),d(ie),d($e),d(D),d(ee),d(Me),d(He),d(Se),d(De),d(Be),d(qe),d(Ke),d(Ye),d(Le),d(ke),d(Ne),d(Ge),d(Fe),d(Ue),d(Te),d(ue),d(be),d(Ve)),Ce.d(n),d(r),d(e),Ie&&Ie.d(n),d(a),R(s,n),Q&&Q.d(n),z&&z.d(n),J&&J.d(n),de&&de.d(n),te&&te.d(n),re&&re.d(n),pe&&pe.d(n),L&&L.d(n),E&&E.d(n),O&&O.d(n),x&&x.d(n),le&&le.d(n),G&&G.d(n),j&&j.d(n),ve&&ve.d(n),ae&&ae.d(n),fe&&fe.d(n),ce&&ce.d(n),we&&we.d(n),ne&&ne.d(n),ye&&ye.d(n),oe&&oe.d(n),se&&se.d(n),B&&B.d(n),W&&W.d(n),K&&K.d(n),X&&X.d(n),V&&V.d(n),Y&&Y.d(n),b&&b.d(n),F&&F.d(n)}}}const Pe={title:"Roadmap Progress and Versions"},mi=i=>`${i.heading||""}

${i.content||""}`;function al(i,t,r){let e,a,l,s,m,p;ga(i,Oi,C=>r(163,m=C)),ga(i,Sa,C=>r(168,p=C));let{data:u}=t,{data:o={},customFormattingSettings:y,__db:q,inputs:f}=u;pi(Sa,p="f939c3a1d667647bd0f79ce76e2fcdc8",p);let I=ki(qi(f));vi(I.subscribe(C=>r(0,f=C))),ci(Di,{getCustomFormats:()=>y.customFormats||[]});const A=(C,di)=>Ci(q.query,C,{query_name:di});Ti(A);let U=m.params;yi(()=>!0);let ie={initialData:void 0,initialError:void 0},$e=M`select *
from eind.roadmap_revision_summaries`,D=`select *
from eind.roadmap_revision_summaries`;o.roadmap_revision_summaries_all_data&&(o.roadmap_revision_summaries_all_data instanceof Error?ie.initialError=o.roadmap_revision_summaries_all_data:ie.initialData=o.roadmap_revision_summaries_all_data,o.roadmap_revision_summaries_all_columns&&(ie.knownColumns=o.roadmap_revision_summaries_all_columns));let ee,Me=!1;const He=ge.createReactive({callback:C=>{r(3,ee=C)},execFn:A},{id:"roadmap_revision_summaries_all",...ie});He(D,{noResolve:$e,...ie}),globalThis[Symbol.for("roadmap_revision_summaries_all")]={get value(){return ee}};let Se={initialData:void 0,initialError:void 0},De=M`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${f.readers.value}'
and revision_year = ${f.roadmap_years.value}`,Be=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${f.readers.value}'
and revision_year = ${f.roadmap_years.value}`;o.roadmap_revision_summaries_filtered_data&&(o.roadmap_revision_summaries_filtered_data instanceof Error?Se.initialError=o.roadmap_revision_summaries_filtered_data:Se.initialData=o.roadmap_revision_summaries_filtered_data,o.roadmap_revision_summaries_filtered_columns&&(Se.knownColumns=o.roadmap_revision_summaries_filtered_columns));let qe,Ke=!1;const Ye=ge.createReactive({callback:C=>{r(4,qe=C)},execFn:A},{id:"roadmap_revision_summaries_filtered",...Se});Ye(Be,{noResolve:De,...Se}),globalThis[Symbol.for("roadmap_revision_summaries_filtered")]={get value(){return qe}};let Le={initialData:void 0,initialError:void 0},ke=M`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${f.years.value}`,Ne=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${f.years.value}`;o.roadmap_revision_summaries_filtered_delivery_data&&(o.roadmap_revision_summaries_filtered_delivery_data instanceof Error?Le.initialError=o.roadmap_revision_summaries_filtered_delivery_data:Le.initialData=o.roadmap_revision_summaries_filtered_delivery_data,o.roadmap_revision_summaries_filtered_delivery_columns&&(Le.knownColumns=o.roadmap_revision_summaries_filtered_delivery_columns));let Ge,Fe=!1;const Ue=ge.createReactive({callback:C=>{r(5,Ge=C)},execFn:A},{id:"roadmap_revision_summaries_filtered_delivery",...Le});Ue(Ne,{noResolve:ke,...Le}),globalThis[Symbol.for("roadmap_revision_summaries_filtered_delivery")]={get value(){return Ge}};let Te={initialData:void 0,initialError:void 0},ue=M`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`,be=`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`;o.test_data&&(o.test_data instanceof Error?Te.initialError=o.test_data:Te.initialData=o.test_data,o.test_columns&&(Te.knownColumns=o.test_columns));let Ve,Oe=!1;const et=ge.createReactive({callback:C=>{r(6,Ve=C)},execFn:A},{id:"test",...Te});et(be,{noResolve:ue,...Te}),globalThis[Symbol.for("test")]={get value(){return Ve}};let he={initialData:void 0,initialError:void 0},Ce=M`select * 
from eind.zenoh_roadmap_versions`,Ie=`select * 
from eind.zenoh_roadmap_versions`;o.roadmap_versions_data&&(o.roadmap_versions_data instanceof Error?he.initialError=o.roadmap_versions_data:he.initialData=o.roadmap_versions_data,o.roadmap_versions_columns&&(he.knownColumns=o.roadmap_versions_columns));let Q,z=!1;const J=ge.createReactive({callback:C=>{r(7,Q=C)},execFn:A},{id:"roadmap_versions",...he});J(Ie,{noResolve:Ce,...he}),globalThis[Symbol.for("roadmap_versions")]={get value(){return Q}};let de={initialData:void 0,initialError:void 0},te=M`select rv.year,
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

where year = ${f.years.value}`,re=`select rv.year,
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

where year = ${f.years.value}`;o.roadmap_versions_filtered_data&&(o.roadmap_versions_filtered_data instanceof Error?de.initialError=o.roadmap_versions_filtered_data:de.initialData=o.roadmap_versions_filtered_data,o.roadmap_versions_filtered_columns&&(de.knownColumns=o.roadmap_versions_filtered_columns));let pe,L=!1;const E=ge.createReactive({callback:C=>{r(8,pe=C)},execFn:A},{id:"roadmap_versions_filtered",...de});E(re,{noResolve:te,...de}),globalThis[Symbol.for("roadmap_versions_filtered")]={get value(){return pe}};let O={initialData:void 0,initialError:void 0},x=M`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`,le=`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`;o.roadmap_key_dates_data&&(o.roadmap_key_dates_data instanceof Error?O.initialError=o.roadmap_key_dates_data:O.initialData=o.roadmap_key_dates_data,o.roadmap_key_dates_columns&&(O.knownColumns=o.roadmap_key_dates_columns));let G,j=!1;const ve=ge.createReactive({callback:C=>{r(9,G=C)},execFn:A},{id:"roadmap_key_dates",...O});ve(le,{noResolve:x,...O}),globalThis[Symbol.for("roadmap_key_dates")]={get value(){return G}};let ae={initialData:void 0,initialError:void 0},fe=M`select * 
FROM eind.zenoh_milestone_last_merge_date`,ce=`select * 
FROM eind.zenoh_milestone_last_merge_date`;o.bob2_data&&(o.bob2_data instanceof Error?ae.initialError=o.bob2_data:ae.initialData=o.bob2_data,o.bob2_columns&&(ae.knownColumns=o.bob2_columns));let we,ne=!1;const ye=ge.createReactive({callback:C=>{r(10,we=C)},execFn:A},{id:"bob2",...ae});ye(ce,{noResolve:fe,...ae}),globalThis[Symbol.for("bob2")]={get value(){return we}};let oe={initialData:void 0,initialError:void 0},se=M`WITH fred AS (
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
FROM fred`,B=`WITH fred AS (
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
FROM fred`;o.roadmap_summary_data_data&&(o.roadmap_summary_data_data instanceof Error?oe.initialError=o.roadmap_summary_data_data:oe.initialData=o.roadmap_summary_data_data,o.roadmap_summary_data_columns&&(oe.knownColumns=o.roadmap_summary_data_columns));let W,K=!1;const X=ge.createReactive({callback:C=>{r(11,W=C)},execFn:A},{id:"roadmap_summary_data",...oe});X(B,{noResolve:se,...oe}),globalThis[Symbol.for("roadmap_summary_data")]={get value(){return W}};let V={initialData:void 0,initialError:void 0},Y=M`WITH fred AS (
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
WHERE milestone_year = ${f.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`,b=`WITH fred AS (
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
WHERE milestone_year = ${f.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`;o.roadmap_summary_data_filtered_data&&(o.roadmap_summary_data_filtered_data instanceof Error?V.initialError=o.roadmap_summary_data_filtered_data:V.initialData=o.roadmap_summary_data_filtered_data,o.roadmap_summary_data_filtered_columns&&(V.knownColumns=o.roadmap_summary_data_filtered_columns));let F,n=!1;const $=ge.createReactive({callback:C=>{r(12,F=C)},execFn:A},{id:"roadmap_summary_data_filtered",...V});$(b,{noResolve:Y,...V}),globalThis[Symbol.for("roadmap_summary_data_filtered")]={get value(){return F}};let Ze={initialData:void 0,initialError:void 0},tt=M`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value}`,rt=`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value}`;o.dimgraph_data_input_data&&(o.dimgraph_data_input_data instanceof Error?Ze.initialError=o.dimgraph_data_input_data:Ze.initialData=o.dimgraph_data_input_data,o.dimgraph_data_input_columns&&(Ze.knownColumns=o.dimgraph_data_input_columns));let at,ot=!1;const st=ge.createReactive({callback:C=>{r(13,at=C)},execFn:A},{id:"dimgraph_data_input",...Ze});st(rt,{noResolve:tt,...Ze}),globalThis[Symbol.for("dimgraph_data_input")]={get value(){return at}};let Xe={initialData:void 0,initialError:void 0},Je=M`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value})`,je=`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value})`;o.dimgraph_data_data&&(o.dimgraph_data_data instanceof Error?Xe.initialError=o.dimgraph_data_data:Xe.initialData=o.dimgraph_data_data,o.dimgraph_data_columns&&(Xe.knownColumns=o.dimgraph_data_columns));let vr,cr=!1;const yr=ge.createReactive({callback:C=>{r(14,vr=C)},execFn:A},{id:"dimgraph_data",...Xe});yr(je,{noResolve:Je,...Xe}),globalThis[Symbol.for("dimgraph_data")]={get value(){return vr}};let dt={initialData:void 0,initialError:void 0},ft=M`select *
FROM eind."zenoh_milestone_last_merge_date"`,jt=`select *
FROM eind."zenoh_milestone_last_merge_date"`;o.testing_data&&(o.testing_data instanceof Error?dt.initialError=o.testing_data:dt.initialData=o.testing_data,o.testing_columns&&(dt.knownColumns=o.testing_columns));let $r,br=!1;const wr=ge.createReactive({callback:C=>{r(15,$r=C)},execFn:A},{id:"testing",...dt});wr(jt,{noResolve:ft,...dt}),globalThis[Symbol.for("testing")]={get value(){return $r}};let ut={initialData:void 0,initialError:void 0},pt=M`WITH bob AS (
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
  a.activity;`,Kt=`WITH bob AS (
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
  a.activity;`;o.actvity_barchart_by_year2_data&&(o.actvity_barchart_by_year2_data instanceof Error?ut.initialError=o.actvity_barchart_by_year2_data:ut.initialData=o.actvity_barchart_by_year2_data,o.actvity_barchart_by_year2_columns&&(ut.knownColumns=o.actvity_barchart_by_year2_columns));let gr,Er=!1;const Rr=ge.createReactive({callback:C=>{r(16,gr=C)},execFn:A},{id:"actvity_barchart_by_year2",...ut});Rr(Kt,{noResolve:pt,...ut}),globalThis[Symbol.for("actvity_barchart_by_year2")]={get value(){return gr}};let vt={initialData:void 0,initialError:void 0},ct=M`SELECT 
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
  b.milestone_id`,Xt=`SELECT 
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
  b.milestone_id`;o.milestone_last_merge_date_data&&(o.milestone_last_merge_date_data instanceof Error?vt.initialError=o.milestone_last_merge_date_data:vt.initialData=o.milestone_last_merge_date_data,o.milestone_last_merge_date_columns&&(vt.knownColumns=o.milestone_last_merge_date_columns));let Sr,kr=!1;const Tr=ge.createReactive({callback:C=>{r(17,Sr=C)},execFn:A},{id:"milestone_last_merge_date",...vt});Tr(Xt,{noResolve:ct,...vt}),globalThis[Symbol.for("milestone_last_merge_date")]={get value(){return Sr}};let yt={initialData:void 0,initialError:void 0},$t=M`select *  
from csv.RoadmapMultiYearStatus`,Zt=`select *  
from csv.RoadmapMultiYearStatus`;o.new_roadmap_data&&(o.new_roadmap_data instanceof Error?yt.initialError=o.new_roadmap_data:yt.initialData=o.new_roadmap_data,o.new_roadmap_columns&&(yt.knownColumns=o.new_roadmap_columns));let Ar,Dr=!1;const qr=ge.createReactive({callback:C=>{r(18,Ar=C)},execFn:A},{id:"new_roadmap",...yt});qr(Zt,{noResolve:$t,...yt}),globalThis[Symbol.for("new_roadmap")]={get value(){return Ar}};let bt={initialData:void 0,initialError:void 0},wt=M`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${f.years.value}`,xt=`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${f.years.value}`;o.new_roadmap_filtered_data&&(o.new_roadmap_filtered_data instanceof Error?bt.initialError=o.new_roadmap_filtered_data:bt.initialData=o.new_roadmap_filtered_data,o.new_roadmap_filtered_columns&&(bt.knownColumns=o.new_roadmap_filtered_columns));let Fr,Or=!1;const Cr=ge.createReactive({callback:C=>{r(19,Fr=C)},execFn:A},{id:"new_roadmap_filtered",...bt});Cr(xt,{noResolve:wt,...bt}),globalThis[Symbol.for("new_roadmap_filtered")]={get value(){return Fr}};let gt={initialData:void 0,initialError:void 0},Et=M`select *
      
from eind.roadmap_summaries_detail`,er=`select *
      
from eind.roadmap_summaries_detail`;o.new_roadmap2_data&&(o.new_roadmap2_data instanceof Error?gt.initialError=o.new_roadmap2_data:gt.initialData=o.new_roadmap2_data,o.new_roadmap2_columns&&(gt.knownColumns=o.new_roadmap2_columns));let Ir,Lr=!1;const Nr=ge.createReactive({callback:C=>{r(20,Ir=C)},execFn:A},{id:"new_roadmap2",...gt});Nr(er,{noResolve:Et,...gt}),globalThis[Symbol.for("new_roadmap2")]={get value(){return Ir}};let Rt={initialData:void 0,initialError:void 0},St=M`SELECT *
  
FROM eind.roadmap_version_markdown`,tr=`SELECT *
  
FROM eind.roadmap_version_markdown`;o.roadmap_details_data&&(o.roadmap_details_data instanceof Error?Rt.initialError=o.roadmap_details_data:Rt.initialData=o.roadmap_details_data,o.roadmap_details_columns&&(Rt.knownColumns=o.roadmap_details_columns));let hr,Mr=!1;const Hr=ge.createReactive({callback:C=>{r(21,hr=C)},execFn:A},{id:"roadmap_details",...Rt});Hr(tr,{noResolve:St,...Rt}),globalThis[Symbol.for("roadmap_details")]={get value(){return hr}};let kt={initialData:void 0,initialError:void 0},Tt=M`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${f.years.value}`,rr=`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${f.years.value}`;o.roadmap_details_filtered_data&&(o.roadmap_details_filtered_data instanceof Error?kt.initialError=o.roadmap_details_filtered_data:kt.initialData=o.roadmap_details_filtered_data,o.roadmap_details_filtered_columns&&(kt.knownColumns=o.roadmap_details_filtered_columns));let Ur,Pr=!1;const Gr=ge.createReactive({callback:C=>{r(22,Ur=C)},execFn:A},{id:"roadmap_details_filtered",...kt});Gr(rr,{noResolve:Tt,...kt}),globalThis[Symbol.for("roadmap_details_filtered")]={get value(){return Ur}};let At={initialData:void 0,initialError:void 0},Dt=M`select * from eind.zenoh_roadmap_details`,ar="select * from eind.zenoh_roadmap_details";o.milestone_details_data&&(o.milestone_details_data instanceof Error?At.initialError=o.milestone_details_data:At.initialData=o.milestone_details_data,o.milestone_details_columns&&(At.knownColumns=o.milestone_details_columns));let Br,Vr=!1;const Yr=ge.createReactive({callback:C=>{r(23,Br=C)},execFn:A},{id:"milestone_details",...At});Yr(ar,{noResolve:Dt,...At}),globalThis[Symbol.for("milestone_details")]={get value(){return Br}};let qt={initialData:void 0,initialError:void 0},Ft=M`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`,ir=`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`;o.milestone_rolllup_by_year_data&&(o.milestone_rolllup_by_year_data instanceof Error?qt.initialError=o.milestone_rolllup_by_year_data:qt.initialData=o.milestone_rolllup_by_year_data,o.milestone_rolllup_by_year_columns&&(qt.knownColumns=o.milestone_rolllup_by_year_columns));let zr,Wr=!1;const Jr=ge.createReactive({callback:C=>{r(24,zr=C)},execFn:A},{id:"milestone_rolllup_by_year",...qt});Jr(ir,{noResolve:Ft,...qt}),globalThis[Symbol.for("milestone_rolllup_by_year")]={get value(){return zr}};let Ot={initialData:void 0,initialError:void 0},Ct=M`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`,lr=`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`;o.roadmap_catagories_data&&(o.roadmap_catagories_data instanceof Error?Ot.initialError=o.roadmap_catagories_data:Ot.initialData=o.roadmap_catagories_data,o.roadmap_catagories_columns&&(Ot.knownColumns=o.roadmap_catagories_columns));let Qr,jr=!1;const Kr=ge.createReactive({callback:C=>{r(25,Qr=C)},execFn:A},{id:"roadmap_catagories",...Ot});Kr(lr,{noResolve:Ct,...Ot}),globalThis[Symbol.for("roadmap_catagories")]={get value(){return Qr}};let It={initialData:void 0,initialError:void 0},Lt=M`select * from eind.dimension_data`,nr="select * from eind.dimension_data";o.new_dim_data_data&&(o.new_dim_data_data instanceof Error?It.initialError=o.new_dim_data_data:It.initialData=o.new_dim_data_data,o.new_dim_data_columns&&(It.knownColumns=o.new_dim_data_columns));let Xr,Zr=!1;const xr=ge.createReactive({callback:C=>{r(26,Xr=C)},execFn:A},{id:"new_dim_data",...It});xr(nr,{noResolve:Lt,...It}),globalThis[Symbol.for("new_dim_data")]={get value(){return Xr}};let Nt={initialData:void 0,initialError:void 0},ht=M`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${f.years.value}`,or=`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${f.years.value}`;o.new_dim_data_filtered_data&&(o.new_dim_data_filtered_data instanceof Error?Nt.initialError=o.new_dim_data_filtered_data:Nt.initialData=o.new_dim_data_filtered_data,o.new_dim_data_filtered_columns&&(Nt.knownColumns=o.new_dim_data_filtered_columns));let ea,ta=!1;const ra=ge.createReactive({callback:C=>{r(27,ea=C)},execFn:A},{id:"new_dim_data_filtered",...Nt});ra(or,{noResolve:ht,...Nt}),globalThis[Symbol.for("new_dim_data_filtered")]={get value(){return ea}};let Mt={initialData:void 0,initialError:void 0},Ht=M`select distinct owner from eind.repos`,sr="select distinct owner from eind.repos";o.owners_data&&(o.owners_data instanceof Error?Mt.initialError=o.owners_data:Mt.initialData=o.owners_data,o.owners_columns&&(Mt.knownColumns=o.owners_columns));let aa,ia=!1;const la=ge.createReactive({callback:C=>{r(28,aa=C)},execFn:A},{id:"owners",...Mt});la(sr,{noResolve:Ht,...Mt}),globalThis[Symbol.for("owners")]={get value(){return aa}};let Ut={initialData:void 0,initialError:void 0},Pt=M`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${f.owner.value}'`,_r=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${f.owner.value}'`;o.repos_data&&(o.repos_data instanceof Error?Ut.initialError=o.repos_data:Ut.initialData=o.repos_data,o.repos_columns&&(Ut.knownColumns=o.repos_columns));let na,oa=!1;const sa=ge.createReactive({callback:C=>{r(29,na=C)},execFn:A},{id:"repos",...Ut});sa(_r,{noResolve:Pt,...Ut}),globalThis[Symbol.for("repos")]={get value(){return na}};let Gt={initialData:void 0,initialError:void 0},Bt=M`select * from
eind.roadmap_versions_sections`,mr=`select * from
eind.roadmap_versions_sections`;o.roadmap2025_data&&(o.roadmap2025_data instanceof Error?Gt.initialError=o.roadmap2025_data:Gt.initialData=o.roadmap2025_data,o.roadmap2025_columns&&(Gt.knownColumns=o.roadmap2025_columns));let _a,ma=!1;const da=ge.createReactive({callback:C=>{r(30,_a=C)},execFn:A},{id:"roadmap2025",...Gt});da(mr,{noResolve:Bt,...Gt}),globalThis[Symbol.for("roadmap2025")]={get value(){return _a}};let Vt={initialData:void 0,initialError:void 0},Yt=M`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC`,dr=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC`;o.get_plan_revisions_by_version_data&&(o.get_plan_revisions_by_version_data instanceof Error?Vt.initialError=o.get_plan_revisions_by_version_data:Vt.initialData=o.get_plan_revisions_by_version_data,o.get_plan_revisions_by_version_columns&&(Vt.knownColumns=o.get_plan_revisions_by_version_columns));let fa,ua=!1;const pa=ge.createReactive({callback:C=>{r(31,fa=C)},execFn:A},{id:"get_plan_revisions_by_version",...Vt});pa(dr,{noResolve:Yt,...Vt}),globalThis[Symbol.for("get_plan_revisions_by_version")]={get value(){return fa}};let zt={initialData:void 0,initialError:void 0},Wt=M`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${f.section.value}`,fr=`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${f.section.value}`;o.roadmap_sections_payload_data&&(o.roadmap_sections_payload_data instanceof Error?zt.initialError=o.roadmap_sections_payload_data:zt.initialData=o.roadmap_sections_payload_data,o.roadmap_sections_payload_columns&&(zt.knownColumns=o.roadmap_sections_payload_columns));let pr,va=!1;const ca=ge.createReactive({callback:C=>{r(1,pr=C)},execFn:A},{id:"roadmap_sections_payload",...zt});ca(fr,{noResolve:Wt,...zt}),globalThis[Symbol.for("roadmap_sections_payload")]={get value(){return pr}};let Jt={initialData:void 0,initialError:void 0},Qt=M`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)`,ur=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)`;o.roadmap_sections_data&&(o.roadmap_sections_data instanceof Error?Jt.initialError=o.roadmap_sections_data:Jt.initialData=o.roadmap_sections_data,o.roadmap_sections_columns&&(Jt.knownColumns=o.roadmap_sections_columns));let ya,$a=!1;const ba=ge.createReactive({callback:C=>{r(32,ya=C)},execFn:A},{id:"roadmap_sections",...Jt});return ba(ur,{noResolve:Qt,...Jt}),globalThis[Symbol.for("roadmap_sections")]={get value(){return ya}},i.$$set=C=>{"data"in C&&r(34,u=C.data)},i.$$.update=()=>{i.$$.dirty[1]&8&&r(35,{data:o={},customFormattingSettings:y,__db:q}=u,o),i.$$.dirty[1]&16&&Ai.set(Object.keys(o).length>0),i.$$.dirty[5]&256&&r(2,U=m.params),i.$$.dirty[1]&480&&($e||!Me?$e||(He(D,{noResolve:$e,...ie}),r(39,Me=!0)):He(D,{noResolve:$e})),i.$$.dirty[0]&1&&r(41,De=M`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${f.readers.value}'
and revision_year = ${f.roadmap_years.value}`),i.$$.dirty[0]&1&&r(42,Be=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = '${f.readers.value}'
and revision_year = ${f.roadmap_years.value}`),i.$$.dirty[1]&7680&&(De||!Ke?De||(Ye(Be,{noResolve:De,...Se}),r(43,Ke=!0)):Ye(Be,{noResolve:De})),i.$$.dirty[0]&1&&r(45,ke=M`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${f.years.value}`),i.$$.dirty[0]&1&&r(46,Ne=`select *
from (select *
from eind.roadmap_revision_summaries)
            
where reader = 'Product Manager'
and revision_year = ${f.years.value}`),i.$$.dirty[1]&122880&&(ke||!Fe?ke||(Ue(Ne,{noResolve:ke,...Le}),r(47,Fe=!0)):Ue(Ne,{noResolve:ke})),i.$$.dirty[1]&1966080&&(ue||!Oe?ue||(et(be,{noResolve:ue,...Te}),r(51,Oe=!0)):et(be,{noResolve:ue})),i.$$.dirty[1]&31457280&&(Ce||!z?Ce||(J(Ie,{noResolve:Ce,...he}),r(55,z=!0)):J(Ie,{noResolve:Ce})),i.$$.dirty[0]&1&&r(57,te=M`select rv.year,
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

where year = ${f.years.value}`),i.$$.dirty[0]&1&&r(58,re=`select rv.year,
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

where year = ${f.years.value}`),i.$$.dirty[1]&503316480&&(te||!L?te||(E(re,{noResolve:te,...de}),r(59,L=!0)):E(re,{noResolve:te})),i.$$.dirty[1]&1610612736|i.$$.dirty[2]&3&&(x||!j?x||(ve(le,{noResolve:x,...O}),r(63,j=!0)):ve(le,{noResolve:x})),i.$$.dirty[2]&60&&(fe||!ne?fe||(ye(ce,{noResolve:fe,...ae}),r(67,ne=!0)):ye(ce,{noResolve:fe})),i.$$.dirty[2]&960&&(se||!K?se||(X(B,{noResolve:se,...oe}),r(71,K=!0)):X(B,{noResolve:se})),i.$$.dirty[0]&1&&r(73,Y=M`WITH fred AS (
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
WHERE milestone_year = ${f.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`),i.$$.dirty[0]&1&&r(74,b=`WITH fred AS (
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
WHERE milestone_year = ${f.years.value}
ORDER BY
  milestone_year,
  milestone_number ASC;`),i.$$.dirty[2]&15360&&(Y||!n?Y||($(b,{noResolve:Y,...V}),r(75,n=!0)):$(b,{noResolve:Y})),i.$$.dirty[0]&1&&r(77,tt=M`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value}`),i.$$.dirty[0]&1&&r(78,rt=`SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value}`),i.$$.dirty[2]&245760&&(tt||!ot?tt||(st(rt,{noResolve:tt,...Ze}),r(79,ot=!0)):st(rt,{noResolve:tt})),i.$$.dirty[0]&1&&r(81,Je=M`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value})`),i.$$.dirty[0]&1&&r(82,je=`SELECT 
milestone_id,
dev_activity,
pr_id
FrOM (SELECT DISTINCT ON (year, activity, milestone_id, pr_id)
    year as yr,
    activity as dev_activity,
    milestone_id as milestone_id,
    pr_id as pr_id
FROM eind.milestone_activity_delivery_data
where year = ${f.years.value})`),i.$$.dirty[2]&3932160&&(Je||!cr?Je||(yr(je,{noResolve:Je,...Xe}),r(83,cr=!0)):yr(je,{noResolve:Je})),i.$$.dirty[2]&62914560&&(ft||!br?ft||(wr(jt,{noResolve:ft,...dt}),r(87,br=!0)):wr(jt,{noResolve:ft})),i.$$.dirty[2]&1006632960&&(pt||!Er?pt||(Rr(Kt,{noResolve:pt,...ut}),r(91,Er=!0)):Rr(Kt,{noResolve:pt})),i.$$.dirty[2]&1073741824|i.$$.dirty[3]&7&&(ct||!kr?ct||(Tr(Xt,{noResolve:ct,...vt}),r(95,kr=!0)):Tr(Xt,{noResolve:ct})),i.$$.dirty[3]&120&&($t||!Dr?$t||(qr(Zt,{noResolve:$t,...yt}),r(99,Dr=!0)):qr(Zt,{noResolve:$t})),i.$$.dirty[0]&1&&r(101,wt=M`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${f.years.value}`),i.$$.dirty[0]&1&&r(102,xt=`select *  
from (select *  
from csv.RoadmapMultiYearStatus)

where year = ${f.years.value}`),i.$$.dirty[3]&1920&&(wt||!Or?wt||(Cr(xt,{noResolve:wt,...bt}),r(103,Or=!0)):Cr(xt,{noResolve:wt})),i.$$.dirty[3]&30720&&(Et||!Lr?Et||(Nr(er,{noResolve:Et,...gt}),r(107,Lr=!0)):Nr(er,{noResolve:Et})),i.$$.dirty[3]&491520&&(St||!Mr?St||(Hr(tr,{noResolve:St,...Rt}),r(111,Mr=!0)):Hr(tr,{noResolve:St})),i.$$.dirty[0]&1&&r(113,Tt=M`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${f.years.value}`),i.$$.dirty[0]&1&&r(114,rr=`SELECT *
  
FROM eind.roadmap_version_markdown
where roadmap_version = ${f.years.value}`),i.$$.dirty[3]&7864320&&(Tt||!Pr?Tt||(Gr(rr,{noResolve:Tt,...kt}),r(115,Pr=!0)):Gr(rr,{noResolve:Tt})),i.$$.dirty[3]&125829120&&(Dt||!Vr?Dt||(Yr(ar,{noResolve:Dt,...At}),r(119,Vr=!0)):Yr(ar,{noResolve:Dt})),i.$$.dirty[3]&2013265920&&(Ft||!Wr?Ft||(Jr(ir,{noResolve:Ft,...qt}),r(123,Wr=!0)):Jr(ir,{noResolve:Ft})),i.$$.dirty[4]&15&&(Ct||!jr?Ct||(Kr(lr,{noResolve:Ct,...Ot}),r(127,jr=!0)):Kr(lr,{noResolve:Ct})),i.$$.dirty[4]&240&&(Lt||!Zr?Lt||(xr(nr,{noResolve:Lt,...It}),r(131,Zr=!0)):xr(nr,{noResolve:Lt})),i.$$.dirty[0]&1&&r(133,ht=M`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${f.years.value}`),i.$$.dirty[0]&1&&r(134,or=`select
    year,
    milestone_id,
    activity,
    developer,
    pr_id
from (select * from eind.dimension_data)
where year = ${f.years.value}`),i.$$.dirty[4]&3840&&(ht||!ta?ht||(ra(or,{noResolve:ht,...Nt}),r(135,ta=!0)):ra(or,{noResolve:ht})),i.$$.dirty[4]&61440&&(Ht||!ia?Ht||(la(sr,{noResolve:Ht,...Mt}),r(139,ia=!0)):la(sr,{noResolve:Ht})),i.$$.dirty[0]&1&&r(141,Pt=M`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${f.owner.value}'`),i.$$.dirty[0]&1&&r(142,_r=`select 'All' as label, NULL as value
union all
select repo as label, repo as value from eind.repos
where owner = '${f.owner.value}'`),i.$$.dirty[4]&983040&&(Pt||!oa?Pt||(sa(_r,{noResolve:Pt,...Ut}),r(143,oa=!0)):sa(_r,{noResolve:Pt})),i.$$.dirty[4]&15728640&&(Bt||!ma?Bt||(da(mr,{noResolve:Bt,...Gt}),r(147,ma=!0)):da(mr,{noResolve:Bt})),i.$$.dirty[0]&1&&r(149,Yt=M`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC`),i.$$.dirty[0]&1&&r(150,dr=`select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC`),i.$$.dirty[4]&251658240&&(Yt||!ua?Yt||(pa(dr,{noResolve:Yt,...Vt}),r(151,ua=!0)):pa(dr,{noResolve:Yt})),i.$$.dirty[0]&1&&r(153,Wt=M`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${f.section.value}`),i.$$.dirty[0]&1&&r(154,fr=`select heading_markdown as heading,
          content_markdown as content 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)
    where heading_text in ${f.section.value}`),i.$$.dirty[4]&1879048192|i.$$.dirty[5]&1&&(Wt||!va?Wt||(ca(fr,{noResolve:Wt,...zt}),r(155,va=!0)):ca(fr,{noResolve:Wt})),i.$$.dirty[0]&1&&r(157,Qt=M`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)`),i.$$.dirty[0]&1&&r(158,ur=`select heading_text 
    from (select * 
    from (select * from
eind.roadmap_versions_sections)
    where roadmap_version = ${f.roadmap_versions.value}
    order by "order" ASC)`),i.$$.dirty[5]&30&&(Qt||!$a?Qt||(ba(ur,{noResolve:Qt,...Jt}),r(159,$a=!0)):ba(ur,{noResolve:Qt})),i.$$.dirty[0]&1&&r(33,e=f.kind.value=="week"?"01K2HAFAD1JM47FD6JP3E4K69Q":"01K2MD0XJBGMKCE7KXN9F25T3X"),i.$$.dirty[0]&1&&r(161,a=f.kind.value),i.$$.dirty[0]&1&&r(162,l=f.week_p[0]),i.$$.dirty[0]&1|i.$$.dirty[5]&128&&r(160,s=f.kind.value=="week"?l:f.quarter_p.value),i.$$.dirty[0]&1|i.$$.dirty[5]&96&&r(2,U={year:parseInt(f.years.value,10),audience:f.audience_p.value,owner:f.owner.value,repo:f.repo.value=="null"?null:f.repo.value,[a]:parseInt(s,10),output_format:"markdown"}),i.$$.dirty[0]&2&&pr.map(C=>`${C.heading||""}

${C.content||""}`).join(`

`)},r(37,$e=M`select *
from eind.roadmap_revision_summaries`),r(38,D=`select *
from eind.roadmap_revision_summaries`),r(49,ue=M`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`),r(50,be=`select * from eind.delivery_summary_by_year
where year in (2021,2022,2023,2024)`),r(53,Ce=M`select * 
from eind.zenoh_roadmap_versions`),r(54,Ie=`select * 
from eind.zenoh_roadmap_versions`),r(61,x=M`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`),r(62,le=`select 
rdd.year 
from eind.roadmap_dates as rdd
left join eind.zenoh_milestone_last_merge_date as lst
on rdd.year = lst.year
and rdd.milestone_id =lst.milestone_id`),r(65,fe=M`select * 
FROM eind.zenoh_milestone_last_merge_date`),r(66,ce=`select * 
FROM eind.zenoh_milestone_last_merge_date`),r(69,se=M`WITH fred AS (
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
FROM fred`),r(70,B=`WITH fred AS (
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
FROM fred`),r(85,ft=M`select *
FROM eind."zenoh_milestone_last_merge_date"`),r(86,jt=`select *
FROM eind."zenoh_milestone_last_merge_date"`),r(89,pt=M`WITH bob AS (
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
  a.activity;`),r(90,Kt=`WITH bob AS (
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
  a.activity;`),r(93,ct=M`SELECT 
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
  b.milestone_id`),r(94,Xt=`SELECT 
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
  b.milestone_id`),r(97,$t=M`select *  
from csv.RoadmapMultiYearStatus`),r(98,Zt=`select *  
from csv.RoadmapMultiYearStatus`),r(105,Et=M`select *
      
from eind.roadmap_summaries_detail`),r(106,er=`select *
      
from eind.roadmap_summaries_detail`),r(109,St=M`SELECT *
  
FROM eind.roadmap_version_markdown`),r(110,tr=`SELECT *
  
FROM eind.roadmap_version_markdown`),r(117,Dt=M`select * from eind.zenoh_roadmap_details`),r(118,ar="select * from eind.zenoh_roadmap_details"),r(121,Ft=M`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`),r(122,ir=`SELECT
  year,
  AVG(demanded_outstanding_pct) AS demand_outstanding,
  AVG(total_demanded_milestone_items) as total_demand_work_items,
  AVG(actioned_outstanding_pct) AS resoureced_outstanding,
  AVG(total_actioned_milestone_items) as total_actioned_milestone_items,
  AVG(total_actioned_milestone_items)/AVG(total_demanded_milestone_items) as ratio
  
from (select * from eind.zenoh_roadmap_details)
where in_version ='y'
GROUP BY year
ORDER BY year`),r(125,Ct=M`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`),r(126,lr=`select 
  bd.year,
  count(distinct bd.requirement_id) as requirements,
  count(distinct bd.work_item_id) as work_items,
  count(distinct bd.pr_id) as prs,
  count(distinct bd.author) as developers,
  
  
from eind.roadmap_wkims_reqs_prs_activity as bd
group by year`),r(129,Lt=M`select * from eind.dimension_data`),r(130,nr="select * from eind.dimension_data"),r(137,Ht=M`select distinct owner from eind.repos`),r(138,sr="select distinct owner from eind.repos"),r(145,Bt=M`select * from
eind.roadmap_versions_sections`),r(146,mr=`select * from
eind.roadmap_versions_sections`),[f,pr,U,ee,qe,Ge,Ve,Q,pe,G,we,W,F,at,vr,$r,gr,Sr,Ar,Fr,Ir,hr,Ur,Br,zr,Qr,Xr,ea,aa,na,_a,fa,ya,e,u,o,ie,$e,D,Me,Se,De,Be,Ke,Le,ke,Ne,Fe,Te,ue,be,Oe,he,Ce,Ie,z,de,te,re,L,O,x,le,j,ae,fe,ce,ne,oe,se,B,K,V,Y,b,n,Ze,tt,rt,ot,Xe,Je,je,cr,dt,ft,jt,br,ut,pt,Kt,Er,vt,ct,Xt,kr,yt,$t,Zt,Dr,bt,wt,xt,Or,gt,Et,er,Lr,Rt,St,tr,Mr,kt,Tt,rr,Pr,At,Dt,ar,Vr,qt,Ft,ir,Wr,Ot,Ct,lr,jr,It,Lt,nr,Zr,Nt,ht,or,ta,Mt,Ht,sr,ia,Ut,Pt,_r,oa,Gt,Bt,mr,ma,Vt,Yt,dr,ua,zt,Wt,fr,va,Jt,Qt,ur,$a,s,a,l,m]}class vl extends $i{constructor(t){super(),bi(this,t,al,rl,fi,{data:34},null,[-1,-1,-1,-1,-1,-1,-1])}}export{vl as component};
