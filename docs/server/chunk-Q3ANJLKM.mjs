import './polyfills.server.mjs';
import{a as A,b as L,c as T,d as V,e as $}from"./chunk-RKMLWASJ.mjs";import{a as u,b as j}from"./chunk-SP5TUHLB.mjs";import{a as y,d as I}from"./chunk-MDRCS5XD.mjs";import{a as E,b as c,d as U,e as _,f as N,h as g,i as P,j as G,k as O,l as B,m as D}from"./chunk-N7HXHIL6.mjs";import"./chunk-KLXSWKMW.mjs";import"./chunk-4HJRNBIT.mjs";import{c as x}from"./chunk-YHQ63LQF.mjs";import"./chunk-PVCNAB46.mjs";import{$ as b,Cb as C,P as h,Pa as a,Qa as m,_a as d,ab as v,f,fb as n,gb as o,hb as l,pb as F,pc as w,wb as s,xb as S,zb as M}from"./chunk-2IWH3EVV.mjs";import"./chunk-KRLCULJA.mjs";var R="Welcome to International Air Transport Association E-commerce analytics, please log in to continue",ne=(()=>{let r=class r{constructor(e,t,i){this.userService=e,this.authService=t,this.router=i,this.hostClass=!0,this.greeting=R,this.isExistingUser=!1,this.users=[],this.unsubscribe$=new f,this.loginForm=new N({username:new g("",[c.required]),password:new g("",[c.required])})}ngOnInit(){this.getUsers()}getUsers(){this.userService.getUsers().subscribe(e=>{this.users=e},e=>console.log(e))}onSubmit(){let e=this.loginForm.get("username")?.value,t=this.loginForm.get("password")?.value;this.authService.login(this.users,e,t).pipe(h(this.unsubscribe$)).subscribe(i=>{i?this.router.navigate(["/dashboard"]):(this.userService.registerUser({username:e,password:t}),this.resetForm(),this.router.navigate(["/dashboard"]))})}resetForm(){this.loginForm.reset(),this.loginForm.get("username")?.reset(),this.loginForm.get("password")?.reset()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}};r.\u0275fac=function(t){return new(t||r)(m(u),m(j),m(x))},r.\u0275cmp=b({type:r,selectors:[["app-login"]],hostVars:2,hostBindings:function(t,i){t&2&&v("app-login",i.hostClass)},standalone:!0,features:[M([u]),C],decls:14,vars:3,consts:[["src","../../../assets/icons/iata-logo-transp.webp","height","127","alt","iata-logo-transp.png",1,"header-logo"],[1,"greeting"],[1,"login-form",3,"formGroup","ngSubmit"],[1,""],["matInput","","placeholder","","type","text","id","username","formControlName","username"],["matInput","","placeholder","","type","text","id","password","formControlName","password"],["mat-raised-button","","type","submit","color","primary",3,"disabled"]],template:function(t,i){t&1&&(l(0,"img",0),n(1,"div",1),s(2),o(),n(3,"form",2),F("ngSubmit",function(){return i.onSubmit()}),n(4,"mat-form-field",3)(5,"mat-label"),s(6,"Username"),o(),l(7,"input",4),o(),n(8,"mat-form-field",3)(9,"mat-label"),s(10,"Password"),o(),l(11,"input",5),o(),n(12,"button",6),s(13," Log In "),o()()),t&2&&(a(2),S(i.greeting),a(1),d("formGroup",i.loginForm),a(9),d("disabled",i.loginForm.invalid))},dependencies:[w,D,P,E,U,_,G,O,B,T,L,A,$,V,I,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:20px}[_nghost-%COMP%]   .greeting[_ngcontent-%COMP%]{text-transform:uppercase;color:#00f;font-weight:700;padding:20px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:50vw;padding:10px}"]});let p=r;return p})();export{R as GREETING,ne as LoginComponent};
