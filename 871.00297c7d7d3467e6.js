"use strict";(self.webpackChunkcomplete_guide=self.webpackChunkcomplete_guide||[]).push([[871],{3871:(M,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>A});var t=a(7587);let p=(()=>{class e{constructor(){this.close=new t.vpe}ngOnInit(){}onClose(){this.close.emit()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:6,vars:1,consts:[[1,"backdrop"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(n,o){1&n&&(t._UZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return o.onClose()}),t._uU(5,"Close"),t.qZA()()()),2&n&&(t.xp6(2),t.hij(" ",o.message," "))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:99}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:white;box-shadow:0 2px 8px #00000042}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),e})(),d=(()=>{class e{constructor(n){this.viewContainerRef=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.s_b))},e.\u0275dir=t.lG2({type:e,selectors:[["","appPlaceholder",""]]}),e})();var g=a(9923),u=a(1845),m=a(9808),s=a(2382);let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div")(2,"div")(3,"div")(4,"div"),t.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#58aa5f transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),e})();function f(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-alert",6),t.NdJ("close",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.onHandleError())}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("message",n.error)}}function _(e,i){}function b(e,i){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-loading-spinner"),t.qZA())}function v(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"form",7,8),t.NdJ("ngSubmit",function(){t.CHM(n);const r=t.MAs(1),l=t.oxw();return t.KtG(l.onSubmit(r))}),t.TgZ(2,"div",9)(3,"label",10),t._uU(4,"E-Mail"),t.qZA(),t._UZ(5,"input",11),t.qZA(),t.TgZ(6,"div",9)(7,"label",12),t._uU(8,"Password"),t.qZA(),t._UZ(9,"input",13),t.qZA(),t.TgZ(10,"div")(11,"button",14),t._uU(12),t.qZA(),t._uU(13," | "),t.TgZ(14,"button",15),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.onSwitchMode())}),t._uU(15),t.qZA()()()}if(2&e){const n=t.MAs(1),o=t.oxw();t.xp6(11),t.Q6J("disabled",!n.valid),t.xp6(1),t.Oqu(o.isLoginMode?"Log in":"Sign up"),t.xp6(3),t.hij("Switch to ",o.isLoginMode?"Sign up":"Log in","")}}let C=(()=>{class e{constructor(n,o){this.authService=n,this.router=o,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(n){if(!n.valid)return;this.isLoading=!0;const o=n.value.email,r=n.value.password;let l;l=this.isLoginMode?this.authService.login(o,r):this.authService.signup(o,r),l.subscribe({next:()=>{this.isLoading=!1,this.router.navigate(["/recipes"]).then()},error:w=>{this.isLoading=!1,this.showError(w)}}),n.reset()}onHandleError(){this.error=null}showError(n){const o=this.alertHost.viewContainerRef;o.clear();const r=o.createComponent(p);r.instance.message=n,this.closeSubscription=r.instance.close.subscribe(()=>{this.closeSubscription.unsubscribe(),o.clear()})}ngOnDestroy(){this.closeSubscription&&this.closeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.e),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],viewQuery:function(n,o){if(1&n&&t.Gf(d,5),2&n){let r;t.iGM(r=t.CRH())&&(o.alertHost=r.first)}},decls:6,vars:3,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],[3,"message","close",4,"ngIf"],["appPlaceholder",""],[4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[3,"message","close"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","name","email","ngModel","","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","name","password","ngModel","","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-default",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,f,1,1,"app-alert",2),t.YNc(3,_,0,0,"ng-template",3),t.YNc(4,b,2,0,"div",4),t.YNc(5,v,16,3,"form",5),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",o.error),t.xp6(2),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading))},dependencies:[m.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.wO,s.on,s.On,s.F,h,p,d],encapsulation:2}),e})();var x=a(4466);let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,s.u5,x.m,u.Bz.forChild([{path:"",component:C}])]}),e})()}}]);