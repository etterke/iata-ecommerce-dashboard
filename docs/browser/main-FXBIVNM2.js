import{b as N}from"./chunk-U52LPQ2C.js";import"./chunk-NWIAU33N.js";import"./chunk-PDDFMRTK.js";import"./chunk-KPP5PL6C.js";import{a as A,b as v,d as O}from"./chunk-GMMN5GLE.js";import"./chunk-PJQSUNWK.js";import"./chunk-7DZXHDBT.js";import"./chunk-WTIQIHW5.js";import{B as T}from"./chunk-4G7V7CJ7.js";import{b as u,c as h,d as f,f as C,i as R}from"./chunk-6JNDSJJQ.js";import{C as a,Eb as d,U as m,ba as p,da as s,ic as l,jb as c,n as i}from"./chunk-5SDKPKES.js";var t={LOGIN:"login",DASHBOARD:"dashboard",CONTENT:"content",INVENTORY:"inventory",ANALYTICS:"analytics",USER_BEHAVIOUR:"user-behaviour",NAVIGATION:"navigation",ERROR:"error",EMPTY:""};var E=(o,e)=>{console.log("guard befutas");let S=p(N),n=p(v);return S.isAuthenticatedUser.pipe(m(r=>r?!0:(n.navigate([t.ERROR]),!1)),a(r=>(n.navigate([t.ERROR]),i(!1))))};var I=[{path:t.LOGIN,loadComponent:()=>import("./chunk-JKQER7UH.js").then(o=>o.LoginComponent)},{path:t.DASHBOARD,loadComponent:()=>import("./chunk-NSMDWLOW.js").then(o=>o.DashboardComponent),canActivate:[E],children:[{path:t.CONTENT,loadComponent:()=>import("./chunk-45NCDQZ3.js").then(o=>o.ContentComponent)},{path:t.INVENTORY,loadComponent:()=>import("./chunk-R3E3GVIN.js").then(o=>o.InventoryComponent)},{path:t.ANALYTICS,loadComponent:()=>import("./chunk-FPRSUYNQ.js").then(o=>o.SalesAnalyticsComponent)},{path:t.USER_BEHAVIOUR,loadComponent:()=>import("./chunk-UQEWU4AW.js").then(o=>o.UserBehaviourComponent)}]},{path:t.NAVIGATION,loadComponent:()=>import("./chunk-FP46PYEF.js").then(o=>o.HeaderComponent)},{path:t.ERROR,loadComponent:()=>import("./chunk-3TLJAKSL.js").then(o=>o.ErrorComponent)},{path:t.EMPTY,redirectTo:t.LOGIN,pathMatch:"full"}];var g={providers:[O(I),R(),T(),u(h())]};var H=(()=>{let e=class e{constructor(){this.title="iata-dashboard-app"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(r,L){r&1&&c(0,"router-outlet")},dependencies:[l,f,A]});let o=e;return o})();C(H,g).catch(o=>console.error(o));