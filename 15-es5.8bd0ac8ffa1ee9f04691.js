(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"uP/6":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("s7LF"),b=u("SVse"),s=u("PqYM"),c=function(l){return l[l.NULL=0]="NULL",l[l.HOME=1]="HOME",l[l.LOGIN=2]="LOGIN",l[l.REGISTER=3]="REGISTER",l[l.WHY=4]="WHY",l}({});class d{constructor(l,n){this.formBuilder=l,this.events=n,this.finished=new e.r,this.debugMode=!0,this.Popup=c,this.popup=c.NULL,this.login="assets/icon/log-in.svg",this.help="help-circle-outline",this.loginForm=l.group({username:["",a.l.compose([a.l.required,a.l.email])],password:["",a.l.compose([a.l.required])]}),this.registerForm=l.group({username:["",a.l.compose([a.l.required,a.l.email])],password:["",a.l.compose([a.l.required])],password_check:["",a.l.compose([a.l.required])]},{validator:d.passwordsMatch})}ngOnInit(){Object(s.a)(1e3).subscribe(()=>this.popup=c.HOME)}Login(){this.popup=c.LOGIN}SubmitLogin(){this.loginForm.invalid?alert("Invalid username (email) or password"):(console.log("Login JSON: ",JSON.stringify({Username:this.loginForm.value.username,Password:this.loginForm.value.password})),this.events.publish("loggedin",this.loginForm.value.username),this.finished.emit())}Register(){this.popup=c.REGISTER}SubmitRegister(){this.registerForm.invalid||this.registerForm.hasError("password mismatch")?alert("Username must be valid email, passwords must match"):(console.log("Register JSON: ",JSON.stringify({Username:this.registerForm.value.username,Password:this.registerForm.value.password})),this.finished.emit())}Why(){this.popup=c.WHY}BackHome(){this.popup=c.HOME}static passwordsMatch(l){let n=l.get("password"),u=l.get("password_check");if(n.value!=u.value)return{"password mismatch":!0}}}var p=e.Ab({encapsulation:0,styles:[["#login-view[_ngcontent-%COMP%]{--background:gray url('face-outline-skin-tones.47d815aea74f7b1ce8d2.png') no-repeat center center/contain;background-repeat:no-repeat;-webkit-box-align:center;align-items:center}#blank-row-default[_ngcontent-%COMP%]{height:25vh}#blank-row-why[_ngcontent-%COMP%]{height:15vh}#blank-row-login[_ngcontent-%COMP%]{height:20vh}#blank-row-register[_ngcontent-%COMP%]{height:17vh}#row-with-default-card[_ngcontent-%COMP%], #row-with-login-card[_ngcontent-%COMP%], #row-with-register-card[_ngcontent-%COMP%], #row-with-why-card[_ngcontent-%COMP%]{height:100%}#default_card[_ngcontent-%COMP%], #login_card[_ngcontent-%COMP%], #register_card[_ngcontent-%COMP%], #why_card[_ngcontent-%COMP%]{height:100%;width:100%;margin:0;background-color:#dcdcdc}#why_msg[_ngcontent-%COMP%]{color:#000;padding:10px;margin:0;text-align:center}.button-col[_ngcontent-%COMP%]{padding:0;margin:0}ion-button[_ngcontent-%COMP%]{text-transform:none!important}#login_but[_ngcontent-%COMP%], #register_but[_ngcontent-%COMP%]{margin:10px}#back_but[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;margin-bottom:10px}"]],data:{}});function g(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-row",[["id","blank-row-default"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null)],null,null)}function h(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-row",[["id","blank-row-why"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null)],null,null)}function C(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-row",[["id","blank-row-login"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null)],null,null)}function m(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-row",[["id","blank-row-register"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null)],null,null)}function f(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,37,"ion-row",[["id","row-with-default-card"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,35,"ion-col",[["offset","3"],["size","6"]],null,null,null,i.A,i.e)),e.Bb(3,49152,null,0,r.t,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.Cb(4,0,null,0,33,"ion-card",[["id","default_card"]],null,null,null,i.z,i.d)),e.Bb(5,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(l()(),e.Cb(6,0,null,0,31,"ion-grid",[],null,null,null,i.C,i.g)),e.Bb(7,49152,null,0,r.A,[e.j,e.p,e.F],null,null),(l()(),e.Cb(8,0,null,0,9,"ion-row",[],null,null,null,i.N,i.r)),e.Bb(9,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(10,0,null,0,7,"ion-col",[["class","button-col"]],null,null,null,i.A,i.e)),e.Bb(11,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(12,0,null,0,5,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Login()&&e),e}),i.x,i.b)),e.Bb(13,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Log-in\xa0"])),(l()(),e.Cb(16,0,null,0,1,"ion-icon",[],null,null,null,i.E,i.i)),e.Bb(17,49152,null,0,r.C,[e.j,e.p,e.F],{src:[0,"src"]},null),(l()(),e.Cb(18,0,null,0,9,"ion-row",[],null,null,null,i.N,i.r)),e.Bb(19,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(20,0,null,0,7,"ion-col",[["class","button-col"]],null,null,null,i.A,i.e)),e.Bb(21,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(22,0,null,0,5,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Register()&&e),e}),i.x,i.b)),e.Bb(23,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(24,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Register\xa0"])),(l()(),e.Cb(26,0,null,0,1,"ion-icon",[["name","create"]],null,null,null,i.E,i.i)),e.Bb(27,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(28,0,null,0,9,"ion-row",[],null,null,null,i.N,i.r)),e.Bb(29,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(30,0,null,0,7,"ion-col",[["class","button-col"]],null,null,null,i.A,i.e)),e.Bb(31,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(32,0,null,0,5,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Why()&&e),e}),i.x,i.b)),e.Bb(33,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(34,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Why\xa0"])),(l()(),e.Cb(36,0,null,0,1,"ion-icon",[],null,null,null,i.E,i.i)),e.Bb(37,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,"3","6"),l(n,13,0,"block"),l(n,17,0,u.login),l(n,23,0,"block"),l(n,27,0,"create"),l(n,33,0,"block"),l(n,37,0,u.help)}),null)}function B(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,13,"ion-row",[["id","row-with-why-card"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,11,"ion-col",[["offset","2"],["size","8"]],null,null,null,i.A,i.e)),e.Bb(3,49152,null,0,r.t,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.Cb(4,0,null,0,9,"ion-card",[["id","why_card"]],null,null,null,i.z,i.d)),e.Bb(5,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(l()(),e.Cb(6,0,null,0,1,"p",[["id","why_msg"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["We understand it can be annoying to have to make an account for everything, nowadays. We hope you'll still consider doing so for our app. The Psychology Department at the University of Colorado, Boulder is collecting anonymous data to better understand Cross Race Recognition Deficit, and that data is associated with your login, which is why we need everyone to make an account. Thanks for understanding."])),(l()(),e.Cb(8,0,null,0,5,"ion-button",[["expand","block"],["id","back_but"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.BackHome()&&e),e}),i.x,i.b)),e.Bb(9,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(10,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,i.E,i.i)),e.Bb(11,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Back\xa0"]))],(function(l,n){l(n,3,0,"2","8"),l(n,9,0,"block"),l(n,11,0,"arrow-back")}),null)}function k(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,44,"ion-row",[["id","row-with-login-card"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,42,"ion-col",[["offset","1"],["size","10"]],null,null,null,i.A,i.e)),e.Bb(3,49152,null,0,r.t,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.Cb(4,0,null,0,40,"ion-card",[["id","login_card"]],null,null,null,i.z,i.d)),e.Bb(5,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(l()(),e.Cb(6,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e.Ob(l,8).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Ob(l,8).onReset()&&o),o}),null,null)),e.Bb(7,16384,null,0,a.p,[],null,null),e.Bb(8,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},null),e.Qb(2048,null,a.a,null,[a.d]),e.Bb(10,16384,null,0,a.i,[[4,a.a]],null,null),(l()(),e.Cb(11,0,null,null,11,"ion-item",[],null,null,null,i.G,i.k)),e.Bb(12,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Cb(13,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.H,i.l)),e.Bb(14,49152,null,0,r.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Username:"])),(l()(),e.Cb(16,0,null,0,6,"ion-input",[["formControlName","username"],["placeholder","Username"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ob(l,18)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ob(l,18)._handleInputEvent(u.target)&&o),o}),i.F,i.j)),e.Bb(17,49152,null,0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Bb(18,16384,null,0,r.Lb,[e.p],null,null),e.Qb(1024,null,a.f,(function(l){return[l]}),[r.Lb]),e.Bb(20,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.o]],{name:[0,"name"]},null),e.Qb(2048,null,a.g,null,[a.c]),e.Bb(22,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),e.Cb(23,0,null,null,11,"ion-item",[],null,null,null,i.G,i.k)),e.Bb(24,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Cb(25,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.H,i.l)),e.Bb(26,49152,null,0,r.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Password:"])),(l()(),e.Cb(28,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","sTup1dPa55w0rd!"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ob(l,30)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ob(l,30)._handleInputEvent(u.target)&&o),o}),i.F,i.j)),e.Bb(29,49152,null,0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),e.Bb(30,16384,null,0,r.Lb,[e.p],null,null),e.Qb(1024,null,a.f,(function(l){return[l]}),[r.Lb]),e.Bb(32,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.o]],{name:[0,"name"]},null),e.Qb(2048,null,a.g,null,[a.c]),e.Bb(34,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),e.Cb(35,0,null,0,3,"ion-button",[["expand","block"],["id","login_but"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.SubmitLogin()&&e),e}),i.x,i.b)),e.Bb(36,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(37,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Submit\xa0"])),(l()(),e.Cb(39,0,null,0,5,"ion-button",[["expand","block"],["id","back_but"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.BackHome()&&e),e}),i.x,i.b)),e.Bb(40,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(41,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,i.E,i.i)),e.Bb(42,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(43,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Back\xa0"]))],(function(l,n){var u=n.component;l(n,3,0,"1","10"),l(n,8,0,u.loginForm),l(n,14,0,"stacked"),l(n,17,0,"Username","email"),l(n,20,0,"username"),l(n,26,0,"stacked"),l(n,29,0,"sTup1dPa55w0rd!"),l(n,32,0,"password"),l(n,36,0,"block"),l(n,40,0,"block"),l(n,42,0,"arrow-back")}),(function(l,n){l(n,6,0,e.Ob(n,10).ngClassUntouched,e.Ob(n,10).ngClassTouched,e.Ob(n,10).ngClassPristine,e.Ob(n,10).ngClassDirty,e.Ob(n,10).ngClassValid,e.Ob(n,10).ngClassInvalid,e.Ob(n,10).ngClassPending),l(n,16,0,e.Ob(n,22).ngClassUntouched,e.Ob(n,22).ngClassTouched,e.Ob(n,22).ngClassPristine,e.Ob(n,22).ngClassDirty,e.Ob(n,22).ngClassValid,e.Ob(n,22).ngClassInvalid,e.Ob(n,22).ngClassPending),l(n,28,0,e.Ob(n,34).ngClassUntouched,e.Ob(n,34).ngClassTouched,e.Ob(n,34).ngClassPristine,e.Ob(n,34).ngClassDirty,e.Ob(n,34).ngClassValid,e.Ob(n,34).ngClassInvalid,e.Ob(n,34).ngClassPending)}))}function w(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,56,"ion-row",[["id","row-with-register-card"]],null,null,null,i.N,i.r)),e.Bb(1,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,54,"ion-col",[["offset","1"],["size","10"]],null,null,null,i.A,i.e)),e.Bb(3,49152,null,0,r.t,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.Cb(4,0,null,0,52,"ion-card",[["id","register_card"]],null,null,null,i.z,i.d)),e.Bb(5,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(l()(),e.Cb(6,0,null,0,40,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e.Ob(l,8).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Ob(l,8).onReset()&&o),o}),null,null)),e.Bb(7,16384,null,0,a.p,[],null,null),e.Bb(8,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},null),e.Qb(2048,null,a.a,null,[a.d]),e.Bb(10,16384,null,0,a.i,[[4,a.a]],null,null),(l()(),e.Cb(11,0,null,null,11,"ion-item",[],null,null,null,i.G,i.k)),e.Bb(12,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Cb(13,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.H,i.l)),e.Bb(14,49152,null,0,r.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Username:"])),(l()(),e.Cb(16,0,null,0,6,"ion-input",[["formControlName","username"],["placeholder","Username"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ob(l,18)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ob(l,18)._handleInputEvent(u.target)&&o),o}),i.F,i.j)),e.Bb(17,49152,null,0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),e.Bb(18,16384,null,0,r.Lb,[e.p],null,null),e.Qb(1024,null,a.f,(function(l){return[l]}),[r.Lb]),e.Bb(20,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.o]],{name:[0,"name"]},null),e.Qb(2048,null,a.g,null,[a.c]),e.Bb(22,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),e.Cb(23,0,null,null,11,"ion-item",[],null,null,null,i.G,i.k)),e.Bb(24,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Cb(25,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.H,i.l)),e.Bb(26,49152,null,0,r.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Password:"])),(l()(),e.Cb(28,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","sTup1dPa55w0rd!"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ob(l,30)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ob(l,30)._handleInputEvent(u.target)&&o),o}),i.F,i.j)),e.Bb(29,49152,null,0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),e.Bb(30,16384,null,0,r.Lb,[e.p],null,null),e.Qb(1024,null,a.f,(function(l){return[l]}),[r.Lb]),e.Bb(32,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.o]],{name:[0,"name"]},null),e.Qb(2048,null,a.g,null,[a.c]),e.Bb(34,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),e.Cb(35,0,null,null,11,"ion-item",[],null,null,null,i.G,i.k)),e.Bb(36,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Cb(37,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.H,i.l)),e.Bb(38,49152,null,0,r.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Confirm Pswd:"])),(l()(),e.Cb(40,0,null,0,6,"ion-input",[["formControlName","password_check"],["placeholder","sTup1dPa55w0rd!"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ob(l,42)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ob(l,42)._handleInputEvent(u.target)&&o),o}),i.F,i.j)),e.Bb(41,49152,null,0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),e.Bb(42,16384,null,0,r.Lb,[e.p],null,null),e.Qb(1024,null,a.f,(function(l){return[l]}),[r.Lb]),e.Bb(44,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.f],[2,a.o]],{name:[0,"name"]},null),e.Qb(2048,null,a.g,null,[a.c]),e.Bb(46,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),e.Cb(47,0,null,0,3,"ion-button",[["expand","block"],["id","register_but"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.SubmitRegister()&&e),e}),i.x,i.b)),e.Bb(48,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(49,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Submit\xa0"])),(l()(),e.Cb(51,0,null,0,5,"ion-button",[["expand","block"],["id","back_but"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.BackHome()&&e),e}),i.x,i.b)),e.Bb(52,49152,null,0,r.k,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Cb(53,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,i.E,i.i)),e.Bb(54,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(55,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Back\xa0"]))],(function(l,n){var u=n.component;l(n,3,0,"1","10"),l(n,8,0,u.registerForm),l(n,14,0,"stacked"),l(n,17,0,"Username"),l(n,20,0,"username"),l(n,26,0,"stacked"),l(n,29,0,"sTup1dPa55w0rd!"),l(n,32,0,"password"),l(n,38,0,"stacked"),l(n,41,0,"sTup1dPa55w0rd!"),l(n,44,0,"password_check"),l(n,48,0,"block"),l(n,52,0,"block"),l(n,54,0,"arrow-back")}),(function(l,n){l(n,6,0,e.Ob(n,10).ngClassUntouched,e.Ob(n,10).ngClassTouched,e.Ob(n,10).ngClassPristine,e.Ob(n,10).ngClassDirty,e.Ob(n,10).ngClassValid,e.Ob(n,10).ngClassInvalid,e.Ob(n,10).ngClassPending),l(n,16,0,e.Ob(n,22).ngClassUntouched,e.Ob(n,22).ngClassTouched,e.Ob(n,22).ngClassPristine,e.Ob(n,22).ngClassDirty,e.Ob(n,22).ngClassValid,e.Ob(n,22).ngClassInvalid,e.Ob(n,22).ngClassPending),l(n,28,0,e.Ob(n,34).ngClassUntouched,e.Ob(n,34).ngClassTouched,e.Ob(n,34).ngClassPristine,e.Ob(n,34).ngClassDirty,e.Ob(n,34).ngClassValid,e.Ob(n,34).ngClassInvalid,e.Ob(n,34).ngClassPending),l(n,40,0,e.Ob(n,46).ngClassUntouched,e.Ob(n,46).ngClassTouched,e.Ob(n,46).ngClassPristine,e.Ob(n,46).ngClassDirty,e.Ob(n,46).ngClassValid,e.Ob(n,46).ngClassInvalid,e.Ob(n,46).ngClassPending)}))}function v(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,19,"ion-content",[["id","login-view"]],null,null,null,i.B,i.f)),e.Bb(1,49152,null,0,r.u,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,17,"ion-grid",[["style","margin-top: 45px"]],null,null,null,i.C,i.g)),e.Bb(3,49152,null,0,r.A,[e.j,e.p,e.F],null,null),(l()(),e.rb(16777216,null,0,1,null,g)),e.Bb(5,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,h)),e.Bb(7,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,C)),e.Bb(9,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,m)),e.Bb(11,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,f)),e.Bb(13,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,B)),e.Bb(15,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,k)),e.Bb(17,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,w)),e.Bb(19,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,u.popup==u.Popup.HOME),l(n,7,0,u.popup==u.Popup.WHY),l(n,9,0,u.popup==u.Popup.LOGIN),l(n,11,0,u.popup==u.Popup.REGISTER),l(n,13,0,u.popup==u.Popup.HOME),l(n,15,0,u.popup==u.Popup.WHY),l(n,17,0,u.popup==u.Popup.LOGIN),l(n,19,0,u.popup==u.Popup.REGISTER)}),null)}var O=u("iInd"),j=u("mrSG");class F{constructor(l,n){this.alertController=l,this.events=n,this.viewReady=!1,this.loggedIn=!1,this.username="USERNAME",this.level=1,this.progressToday=.5,n.subscribe("loggedin",l=>{this.username=l})}ngAfterViewInit(){this.viewReady=!0}logoutAlert(){return j.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({header:"Logout",message:"Do you want to logout?",buttons:[{text:"Cancel"},{text:"Logout",handler:()=>{this.logout()}}]});case 2:return n=l.sent,l.next=5,n.present();case 5:case"end":return l.stop()}}),l,this)})))}logout(){this.loggedIn=!1}}var y=e.Ab({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{color:#fff;padding-left:10px}"]],data:{}});function P(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"app-login",[],null,[[null,"finished"]],(function(l,n,u){var e=!0;return"finished"===n&&(e=0!=(l.component.loggedIn=!0)&&e),e}),v,p)),e.Bb(1,114688,null,0,d,[a.b,r.e],null,{finished:"finished"})],(function(l,n){l(n,1,0)}),null)}function x(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,53,"div",[],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,12,"ion-header",[],null,null,null,i.D,i.h)),e.Bb(2,49152,null,0,r.B,[e.j,e.p,e.F],null,null),(l()(),e.Cb(3,0,null,0,10,"ion-toolbar",[["style","border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: dodgerblue"]],null,null,null,i.R,i.v)),e.Bb(4,49152,null,0,r.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(5,0,null,0,2,"ion-title",[],null,null,null,i.P,i.t)),e.Bb(6,49152,null,0,r.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Dashboard"])),(l()(),e.Cb(8,0,null,0,1,"ion-icon",[["color","medium"],["name","exit"],["slot","end"],["style","margin-right: 10px; height: 30px; cursor: pointer"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logoutAlert()&&e),e}),i.E,i.i)),e.Bb(9,49152,null,0,r.C,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Cb(10,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.y,i.c)),e.Bb(11,49152,null,0,r.l,[e.j,e.p,e.F],null,null),(l()(),e.Cb(12,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,i.J,i.o)),e.Bb(13,49152,null,0,r.R,[e.j,e.p,e.F],{autoHide:[0,"autoHide"]},null),(l()(),e.Cb(14,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),e.Cb(15,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Tb(16,null,["Welcome, ",""])),(l()(),e.Cb(17,0,null,null,36,"ion-grid",[],null,null,null,i.C,i.g)),e.Bb(18,49152,null,0,r.A,[e.j,e.p,e.F],null,null),(l()(),e.Cb(19,0,null,0,18,"ion-row",[],null,null,null,i.N,i.r)),e.Bb(20,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(21,0,null,0,6,"div",[["style","text-align: center"]],null,null,null,null,null)),(l()(),e.Cb(22,0,null,null,1,"h6",[["style","color: white"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Today's Progress"])),(l()(),e.Cb(24,0,null,null,1,"ion-progress-bar",[],null,null,null,i.M,i.q)),e.Bb(25,49152,null,0,r.Z,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Cb(26,0,null,null,1,"div",[["style","text-align: center; color: white; margin-top: 10px"]],null,null,null,null,null)),(l()(),e.Tb(27,null,["","%"])),(l()(),e.Cb(28,0,null,0,9,"ion-col",[],null,null,null,i.A,i.e)),e.Bb(29,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(30,0,null,0,7,"ion-button",[["color","success"],["routerDirection","forward"],["routerLink","/train"],["style","width: 100%; height: 150px; font-size: 150%"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Ob(l,32).onClick()&&o),"click"===n&&(o=!1!==e.Ob(l,33).onClick(u)&&o),o}),i.x,i.b)),e.Bb(31,49152,null,0,r.k,[e.j,e.p,e.F],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),e.Bb(32,16384,null,0,O.n,[O.m,O.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(33,737280,null,0,r.Kb,[b.g,r.Hb,e.p,O.m,[2,O.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(34,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Train"])),(l()(),e.Cb(36,0,null,0,1,"ion-icon",[["name","fitness"]],null,null,null,i.E,i.i)),e.Bb(37,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(38,0,null,0,15,"ion-row",[],null,null,null,i.N,i.r)),e.Bb(39,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(40,0,null,0,3,"ion-col",[],null,null,null,i.A,i.e)),e.Bb(41,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(42,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Tb(43,null,["Level ",""])),(l()(),e.Cb(44,0,null,0,9,"ion-col",[],null,null,null,i.A,i.e)),e.Bb(45,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(46,0,null,0,7,"ion-button",[["routerDirection","forward"],["routerLink","/history"],["style","width: 100%; height: 150px; font-size: 150%"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Ob(l,48).onClick()&&o),"click"===n&&(o=!1!==e.Ob(l,49).onClick(u)&&o),o}),i.x,i.b)),e.Bb(47,49152,null,0,r.k,[e.j,e.p,e.F],{routerDirection:[0,"routerDirection"]},null),e.Bb(48,16384,null,0,O.n,[O.m,O.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(49,737280,null,0,r.Kb,[b.g,r.Hb,e.p,O.m,[2,O.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(50,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["History"])),(l()(),e.Cb(52,0,null,0,1,"ion-icon",[["name","analytics"]],null,null,null,i.E,i.i)),e.Bb(53,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,9,0,"medium","exit"),l(n,13,0,"false"),l(n,25,0,e.Gb(1,"",u.progressToday,"")),l(n,31,0,"success","forward"),l(n,32,0,"/train"),l(n,33,0,"forward"),l(n,37,0,"fitness"),l(n,47,0,"forward"),l(n,48,0,"/history"),l(n,49,0,"forward"),l(n,53,0,"analytics")}),(function(l,n){var u=n.component;l(n,16,0,u.username),l(n,27,0,100*u.progressToday),l(n,43,0,u.level)}))}function _(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,5,"ion-content",[["style","--background: gray;"]],null,null,null,i.B,i.f)),e.Bb(1,49152,null,0,r.u,[e.j,e.p,e.F],{fullscreen:[0,"fullscreen"]},null),(l()(),e.rb(16777216,null,0,1,null,P)),e.Bb(3,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,x)),e.Bb(5,16384,null,0,b.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,3,0,!u.loggedIn),l(n,5,0,u.loggedIn)}),null)}var I=e.yb("app-dashboard",F,(function(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"app-dashboard",[],null,null,null,_,y)),e.Bb(1,4243456,null,0,F,[r.a,r.e],null,null)],null,null)}),{},{},[]);u.d(n,"DashboardPageModuleNgFactory",(function(){return M}));var M=e.zb(o,[],(function(l){return e.Lb([e.Mb(512,e.m,e.jb,[[8,[t.a,I]],[3,e.m],e.D]),e.Mb(4608,b.l,b.k,[e.z,[2,b.w]]),e.Mb(4608,r.b,r.b,[e.F,e.g]),e.Mb(4608,r.Gb,r.Gb,[r.b,e.m,e.w]),e.Mb(4608,r.Jb,r.Jb,[r.b,e.m,e.w]),e.Mb(4608,a.n,a.n,[]),e.Mb(4608,a.b,a.b,[]),e.Mb(1073742336,b.b,b.b,[]),e.Mb(1073742336,r.Eb,r.Eb,[]),e.Mb(1073742336,a.m,a.m,[]),e.Mb(1073742336,a.e,a.e,[]),e.Mb(1073742336,a.k,a.k,[]),e.Mb(1073742336,O.o,O.o,[[2,O.t],[2,O.m]]),e.Mb(1073742336,o,o,[]),e.Mb(1024,O.k,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);