(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"uP/6":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),s=u("SVse"),a=u("iInd"),b=u("mrSG"),c=u("Xy44"),d=u("k82s");class h{constructor(l,n,u,e){this.getProgress=l,this.events=n,this.toastController=u,this.localNotifications=e}ngOnInit(){this.localNotifications.requestPermission()}ionViewWillEnter(){this.waitingForResponse=!0,this.getProgress.getData().subscribe(l=>{this.days=l.days,this.level=l.level;let n=(new Date).toLocaleDateString(),u="";for(let e in this.days)[this.days[e].nameface,this.days[e].whosnew,this.days[e].memory,this.days[e].shuffle,this.days[e].forcedchoice,this.days[e].samedifferent].indexOf(-1)<0&&(u=new Date(this.days[e].date).toLocaleDateString());n==u?this.progressToday=1:(this.progressToday=0,this.days[this.level]&&(this.days[this.level].nameface>=6&&this.progressToday++,this.days[this.level].whosnew>=6&&this.progressToday++,this.days[this.level].memory>=24&&this.progressToday++,this.days[this.level].shuffle>=12&&this.progressToday++,this.days[this.level].forcedchoice>=6&&this.progressToday++,this.days[this.level].samedifferent>=6&&this.progressToday++),this.progressToday=parseFloat((this.progressToday/6).toFixed(2))),this.progressOverall=this.level/10,this.waitingForResponse=!1},l=>b.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Something went wrong. Please try logging out and back in",color:"danger",duration:2e3})).present()})))}}var g=e.Ab({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{font-size:150%;border-radius:10px;margin-top:3vh;height:20vh;width:95%}"]],data:{}});function f(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,2,"div",[["style","height: 90%; display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"ion-spinner",[["color","light"],["name","crescent"]],null,null,null,i.ab,i.y)),e.Bb(2,49152,null,0,r.sb,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,2,0,"light","crescent")}),null)}function p(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Pre-Assessment"]))],null,null)}function y(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(1,null,["Level ",""]))],null,(function(l,n){l(n,1,0,n.component.level)}))}function m(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Post-Assessment"]))],null,null)}function v(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Complete"]))],null,null)}function w(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,7,"div",[["style","width: 100%; display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"div",[["class","subheader"],["style","width: 25%"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Today:"])),(l()(),e.Cb(3,0,null,null,4,"div",[["style","text-align: center; width: 60%; margin-top: 9%"]],null,null,null,null,null)),(l()(),e.Cb(4,0,null,null,1,"ion-progress-bar",[["style","width: 100%; margin: 0 auto"]],null,null,null,i.T,i.r)),e.Bb(5,49152,null,0,r.Z,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Cb(6,0,null,null,1,"div",[["style","color: white; margin-top: 3%"]],null,null,null,null,null)),(l()(),e.Tb(7,null,["","%"]))],(function(l,n){l(n,5,0,e.Gb(1,"",n.component.progressToday,""))}),(function(l,n){l(n,7,0,100*n.component.progressToday)}))}function C(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,38,"div",[["style","height: 90%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,8,"div",[["style","color: white; font-size: 11vw; width: 100%; margin-left: 10%"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,p)),e.Bb(3,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,y)),e.Bb(5,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,m)),e.Bb(7,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,v)),e.Bb(9,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,w)),e.Bb(11,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(12,0,null,null,7,"div",[["style","width: 100%; display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(13,0,null,null,1,"div",[["class","subheader"],["style","width: 25%"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Overall:"])),(l()(),e.Cb(15,0,null,null,4,"div",[["style","text-align: center; width: 60%; margin-top: 9%"]],null,null,null,null,null)),(l()(),e.Cb(16,0,null,null,1,"ion-progress-bar",[["style","width: 100%; margin: 0 auto"]],null,null,null,i.T,i.r)),e.Bb(17,49152,null,0,r.Z,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Cb(18,0,null,null,1,"div",[["style","color: white; margin-top: 3%"]],null,null,null,null,null)),(l()(),e.Tb(19,null,["","%"])),(l()(),e.Cb(20,0,null,null,18,"div",[["style","text-align: center; width: 100%"]],null,null,null,null,null)),(l()(),e.Cb(21,0,null,null,8,"ion-button",[["color","success"],["routerDirection","forward"],["routerLink","/train"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ob(l,23).onClick()&&t),"click"===n&&(t=!1!==e.Ob(l,24).onClick(u)&&t),t}),i.D,i.b)),e.Bb(22,49152,null,0,r.k,[e.j,e.p,e.F],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),e.Bb(23,16384,null,0,a.n,[a.m,a.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(24,737280,null,0,r.Mb,[s.g,r.Hb,e.p,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(25,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,i.O,i.m)),e.Bb(26,49152,null,0,r.N,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Train"])),(l()(),e.Cb(28,0,null,0,1,"ion-icon",[["name","fitness"],["slot","end"]],null,null,null,i.L,i.j)),e.Bb(29,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(30,0,null,null,8,"ion-button",[["color","primary"],["routerDirection","forward"],["routerLink","/history"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ob(l,32).onClick()&&t),"click"===n&&(t=!1!==e.Ob(l,33).onClick(u)&&t),t}),i.D,i.b)),e.Bb(31,49152,null,0,r.k,[e.j,e.p,e.F],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),e.Bb(32,16384,null,0,a.n,[a.m,a.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(33,737280,null,0,r.Mb,[s.g,r.Hb,e.p,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(34,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,i.O,i.m)),e.Bb(35,49152,null,0,r.N,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["History"])),(l()(),e.Cb(37,0,null,0,1,"ion-icon",[["name","analytics"],["slot","end"]],null,null,null,i.L,i.j)),e.Bb(38,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,0==u.level),l(n,5,0,u.level>0&&u.level<9),l(n,7,0,9==u.level),l(n,9,0,u.level>9),l(n,11,0,u.level>0&&u.level<9),l(n,17,0,e.Gb(1,"",u.progressOverall,"")),l(n,22,0,"success","forward"),l(n,23,0,"/train"),l(n,24,0,"forward"),l(n,29,0,"fitness"),l(n,31,0,"primary","forward"),l(n,32,0,"/history"),l(n,33,0,"forward"),l(n,38,0,"analytics")}),(function(l,n){l(n,19,0,100*n.component.progressOverall)}))}function B(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,16,"ion-content",[["style","--background: gray;"]],null,null,null,i.I,i.g)),e.Bb(1,49152,null,0,r.u,[e.j,e.p,e.F],{fullscreen:[0,"fullscreen"]},null),(l()(),e.Cb(2,0,null,0,10,"ion-header",[],null,null,null,i.K,i.i)),e.Bb(3,49152,null,0,r.B,[e.j,e.p,e.F],null,null),(l()(),e.Cb(4,0,null,0,8,"ion-toolbar",[["style","border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: dodgerblue"]],null,null,null,i.db,i.B)),e.Bb(5,49152,null,0,r.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(6,0,null,0,2,"ion-title",[],null,null,null,i.bb,i.z)),e.Bb(7,49152,null,0,r.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Dashboard"])),(l()(),e.Cb(9,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.E,i.c)),e.Bb(10,49152,null,0,r.l,[e.j,e.p,e.F],null,null),(l()(),e.Cb(11,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,i.Q,i.p)),e.Bb(12,49152,null,0,r.R,[e.j,e.p,e.F],{autoHide:[0,"autoHide"]},null),(l()(),e.rb(16777216,null,0,1,null,f)),e.Bb(14,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,C)),e.Bb(16,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,12,0,"false"),l(n,14,0,u.waitingForResponse),l(n,16,0,!u.waitingForResponse)}),null)}function j(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"app-dashboard",[],null,null,null,B,g)),e.Bb(1,114688,null,0,h,[c.a,r.e,r.Pb,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.yb("app-dashboard",h,j,{},{},[]),T=u("s7LF");u.d(n,"DashboardPageModuleNgFactory",(function(){return F}));var F=e.zb(t,[],(function(l){return e.Lb([e.Mb(512,e.m,e.jb,[[8,[o.a,k]],[3,e.m],e.D]),e.Mb(4608,s.l,s.k,[e.z,[2,s.w]]),e.Mb(4608,r.b,r.b,[e.F,e.g]),e.Mb(4608,r.Gb,r.Gb,[r.b,e.m,e.w]),e.Mb(4608,r.Lb,r.Lb,[r.b,e.m,e.w]),e.Mb(4608,T.n,T.n,[]),e.Mb(4608,T.b,T.b,[]),e.Mb(4608,d.a,d.a,[]),e.Mb(1073742336,s.b,s.b,[]),e.Mb(1073742336,r.Eb,r.Eb,[]),e.Mb(1073742336,T.m,T.m,[]),e.Mb(1073742336,T.e,T.e,[]),e.Mb(1073742336,T.k,T.k,[]),e.Mb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.Mb(1073742336,t,t,[]),e.Mb(1024,a.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);