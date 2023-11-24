"use strict";(self.webpackChunklab=self.webpackChunklab||[]).push([[211],{9211:(qn,gt,d)=>{d.r(gt),d.d(gt,{ObjectThrowingComponent:()=>jn});var b=d(6814),x=d(7432);class ye{#t={};get items(){return this.#t}constructor(n={}){Object.assign(this.#t,n)}add(n,t){this.#t="function"!=typeof t?{...this.#t,[n]:t}:{...this.#t,[n]:t(this.#t[n])}}}const z="on",T="time";class Ve{#t=[];#e=new WeakMap;#n=new WeakMap;#a=1e3*this.ticksInterval;#r="stopped";#l=Date.now();#s=Date.now();#i=0;#d;#o={real:Date.now(),space:Date.now()};#u=new ye({[z]:!1});#f;#h;get statistic(){return this.#u.items}constructor(n){this.ticksInterval=n}addObject(n,{x:t,y:r}){this.#t.push(n),this.#e.set(n,{x:t,y:r})}setCanvas(n){this.#d=n,this.#c()}start(){this.#r="started",this.#c(),this.#u.add(z,!0),this.#o.real=Date.now(),this.#o.space=this.statistic[T]||0,this.#l=Date.now(),this.#s=this.#l,this.#i=0,this.#g(),this.#_()}stop(){this.#r="stopped",this.#c(),clearTimeout(this.#f),this.#h&&cancelAnimationFrame(this.#h),this.#u.add(z,!1)}#g(){if("stopped"===this.#r)return;const n=25===this.#i?this.#s:Date.now();if(n>this.#s)return this.#i++,void this.#m();this.#i=0,this.#f=setTimeout(()=>this.#m(),this.#s-n)}#m(){if(this.#t.some(t=>t.shouldStop({getObjPosition:r=>this.#e.get(r)})))return void this.stop();this.#t.forEach(t=>{const r=t.calculateNextPosition({getObjPosition:s=>this.#e.get(s),ticksInterval:this.ticksInterval});this.#n.set(t,r)}),this.#t.forEach(t=>{this.#e.set(t,this.#n.get(t))}),this.#u.add(T,t=>(t??0)+this.ticksInterval);const n=Date.now()-this.#o.real;n>1e3&&(this.#u.add("timeSpeed",1e3*(this.statistic[T]-this.#o.space)/n),this.#o.real+=n,this.#o.space=this.statistic[T]),this.#s+=this.#a,this.#g()}#_(){"stopped"!==this.#r&&(this.#h=requestAnimationFrame(()=>this.#y()))}#y(){this.#c(),this.#_()}#c(){if(!this.#d)return;const n=this.#d;n.clean(),this.#t.forEach(t=>t.draw({getObjPosition:r=>this.#e.get(r),cx:r=>r*n.scaleX,cy:r=>(n.sizeY-r)*n.scaleY,cdx:(r,s)=>this.#p(r*n.scaleX,s??0),cdy:(r,s)=>this.#p(-r*n.scaleY,s??0),cd:(r,s)=>this.#p(r*n.scaleX,s??0),ctx:n.ctx,theme:n.theme}))}#p(n,t){return n>=0?Math.max(n,t):Math.min(n,t)}}class be{#t=0;#e=0;#n=!1;#a=0;#r=0;#l=0;#s=0;#i=new x.$k;get statistic(){return this.#i.items}constructor({vx:n,vy:t,airDrag:r,airDensity:s,c:o,frontArea:a,mass:l}){this.#t=n,this.#e=t,this.#n=r,this.#a=s,this.#r=a,this.#l=o,this.#s=l,this.#i.add("speedX",this.#t),this.#i.add("speedY",this.#e)}shouldStop({getObjPosition:n}){return n(this).y<0}calculateNextPosition({ticksInterval:n,getObjPosition:t}){let r=0,s=0;if(this.#n){const a=Math.sqrt(Math.pow(this.#t,2)+Math.pow(this.#e,2)),l=n*(.5*this.#l*this.#r*this.#a*a*a)/this.#s,p=Math.abs(this.#t/this.#e);s=l/(p+1),r=p*s}this.#e-=9.8*n+(this.#e>0?1:-1)*s,this.#t-=r;const o={x:t(this).x+n*this.#t,y:t(this).y+n*this.#e};return this.#i.add("speedX",this.#t),this.#i.add("speedY",this.#e),this.#i.add("altitude",o.y),this.#i.add("x",o.x),o}draw({ctx:n,cx:t,cy:r,cd:s,getObjPosition:o,theme:a}){const{x:l,y:p}=o(this);n.beginPath(),n.strokeStyle=a.color,n.lineWidth=1,n.arc(t(l),r(p),s(.1,5),0,2*Math.PI),n.stroke()}}var mt=d(7398),A=d(4936),i=d(6146),Ae=d(7715),De=d(5592),Me=d(7453),we=d(4829),Oe=d(4564),Ee=d(8251),Fe=d(7400),Se=d(2714);let _t=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq))};static#e=this.\u0275dir=i.lG2({type:e})}return e})(),C=(()=>{class e extends _t{static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=i.n5z(e)))(s||e)}})();static#e=this.\u0275dir=i.lG2({type:e,features:[i.qOj]})}return e})();const g=new i.OlP("NgValueAccessor"),xe={provide:g,useExisting:(0,i.Gpc)(()=>$),multi:!0};let $=(()=>{class e extends C{writeValue(t){this.setProperty("checked",t)}static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=i.n5z(e)))(s||e)}})();static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,s){1&r&&i.NdJ("change",function(a){return s.onChange(a.target.checked)})("blur",function(){return s.onTouched()})},features:[i._Bn([xe]),i.qOj]})}return e})();const Te={provide:g,useExisting:(0,i.Gpc)(()=>G),multi:!0},Be=new i.OlP("CompositionEventMode");let G=(()=>{class e extends _t{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ge(){const e=(0,b.q)()?(0,b.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Be,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){1&r&&i.NdJ("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[i._Bn([Te]),i.qOj]})}return e})();function m(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function yt(e){return null!=e&&"number"==typeof e.length}const c=new i.OlP("NgValidators"),_=new i.OlP("NgAsyncValidators"),ke=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class u{static min(n){return function vt(e){return n=>{if(m(n.value)||m(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function Ct(e){return n=>{if(m(n.value)||m(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function Vt(e){return m(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function bt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function At(e){return m(e.value)||ke.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function Dt(e){return n=>m(n.value)||!yt(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Mt(e){return n=>yt(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function wt(e){if(!e)return B;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(m(r.value))return null;const s=r.value;return n.test(s)?null:{pattern:{requiredPattern:t,actualValue:s}}}}(n)}static nullValidator(n){return null}static compose(n){return xt(n)}static composeAsync(n){return Tt(n)}}function B(e){return null}function Ot(e){return null!=e}function Et(e){return(0,i.QGY)(e)?(0,Ae.D)(e):e}function Ft(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function St(e,n){return n.map(t=>t(e))}function Nt(e){return e.map(n=>function Ie(e){return!e.validate}(n)?n:t=>n.validate(t))}function xt(e){if(!e)return null;const n=e.filter(Ot);return 0==n.length?null:function(t){return Ft(St(t,n))}}function W(e){return null!=e?xt(Nt(e)):null}function Tt(e){if(!e)return null;const n=e.filter(Ot);return 0==n.length?null:function(t){return function Ne(...e){const n=(0,Oe.jO)(e),{args:t,keys:r}=(0,Me.D)(e),s=new De.y(o=>{const{length:a}=t;if(!a)return void o.complete();const l=new Array(a);let p=a,v=a;for(let w=0;w<a;w++){let O=!1;(0,we.Xf)(t[w]).subscribe((0,Ee.x)(o,Hn=>{O||(O=!0,v--),l[w]=Hn},()=>p--,void 0,()=>{(!p||!O)&&(v||o.next(r?(0,Se.n)(r,l):l),o.complete())}))}});return n?s.pipe((0,Fe.Z)(n)):s}(St(t,n).map(Et)).pipe((0,mt.U)(Ft))}}function Q(e){return null!=e?Tt(Nt(e)):null}function Gt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Bt(e){return e._rawValidators}function kt(e){return e._rawAsyncValidators}function J(e){return e?Array.isArray(e)?e:[e]:[]}function k(e,n){return Array.isArray(e)?e.includes(n):e===n}function It(e,n){const t=J(n);return J(e).forEach(s=>{k(t,s)||t.push(s)}),t}function Pt(e,n){return J(n).filter(t=>!k(e,t))}class Ut{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=W(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class h extends Ut{get formDirective(){return null}get path(){return null}}class y extends Ut{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class jt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ht=(()=>{class e extends jt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(y,2))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){2&r&&i.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[i.qOj]})}return e})(),qt=(()=>{class e extends jt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(h,10))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){2&r&&i.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[i.qOj]})}return e})();const E="VALID",P="INVALID",D="PENDING",F="DISABLED";function tt(e){return(U(e)?e.validators:e)||null}function et(e,n){return(U(n)?n.asyncValidators:e)||null}function U(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Lt{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===P}get pending(){return this.status==D}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(It(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(It(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Pt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Pt(n,this._rawAsyncValidators))}hasValidator(n){return k(this._rawValidators,n)}hasAsyncValidator(n){return k(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=D,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=E,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===D)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;const t=Et(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,s)=>r&&r._find(s),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(P)?P:E}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){U(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function He(e){return Array.isArray(e)?W(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function qe(e){return Array.isArray(e)?Q(e):e||null}(this._rawAsyncValidators)}}class j extends Lt{constructor(n,t,r){super(tt(t),et(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function Zt(e,n,t){e._forEachChild((r,s)=>{if(void 0===t[s])throw new i.vHH(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function Yt(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const s=this.controls[r];s&&s.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,s)=>{r.reset(n?n[s]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,s)=>((r.enabled||this.disabled)&&(t[s]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((s,o)=>{r=t(r,s,o)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const M=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>H}),H="always";function S(e,n,t=H){nt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Ze(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&zt(e,n)})}(e,n),function ze(e,n){const t=(r,s)=>{n.valueAccessor.writeValue(r),s&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Le(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&zt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Ye(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function R(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),Z(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Y(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function nt(e,n){const t=Bt(e);null!==n.validator?e.setValidators(Gt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=kt(e);null!==n.asyncValidator?e.setAsyncValidators(Gt(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const s=()=>e.updateValueAndValidity();Y(n._rawValidators,s),Y(n._rawAsyncValidators,s)}function Z(e,n){let t=!1;if(null!==e){if(null!==n.validator){const s=Bt(e);if(Array.isArray(s)&&s.length>0){const o=s.filter(a=>a!==n.validator);o.length!==s.length&&(t=!0,e.setValidators(o))}}if(null!==n.asyncValidator){const s=kt(e);if(Array.isArray(s)&&s.length>0){const o=s.filter(a=>a!==n.asyncValidator);o.length!==s.length&&(t=!0,e.setAsyncValidators(o))}}}const r=()=>{};return Y(n._rawValidators,r),Y(n._rawAsyncValidators,r),t}function zt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Qt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Jt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const f=class extends Lt{constructor(n=null,t,r){super(tt(t),et(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Jt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Qt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Qt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Jt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},rn={provide:g,useExisting:(0,i.Gpc)(()=>at),multi:!0};let at=(()=>{class e extends C{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=r=>{t(""==r?null:parseFloat(r))}}static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=i.n5z(e)))(s||e)}})();static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){1&r&&i.NdJ("input",function(a){return s.onChange(a.target.value)})("blur",function(){return s.onTouched()})},features:[i._Bn([rn]),i.qOj]})}return e})(),ne=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({})}return e})();const lt=new i.OlP("NgModelWithFormControlWarning"),un={provide:h,useExisting:(0,i.Gpc)(()=>L)};let L=(()=>{class e extends h{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return S(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){R(t.control||null,t,!1),function Je(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Wt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,s=this.form.get(t.path);r!==s&&(R(r||null,t),(e=>e instanceof f)(s)&&(S(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function $t(e,n){nt(e,n)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function $e(e,n){return Z(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){nt(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,10),i.Y36(_,10),i.Y36(M,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){1&r&&i.NdJ("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([un]),i.qOj,i.TTD]})}return e})();const hn={provide:y,useExisting:(0,i.Gpc)(()=>dt)};let dt=(()=>{class e extends y{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,s,o,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=function st(e,n){if(!n)return null;let t,r,s;return Array.isArray(n),n.forEach(o=>{o.constructor===G?t=o:function Qe(e){return Object.getPrototypeOf(e.constructor)===C}(o)?r=o:s=o}),s||r||t||null}(0,o)}ngOnChanges(t){this._added||this._setUpControl(),function rt(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function q(e,n){return[...n.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||e)(i.Y36(h,13),i.Y36(c,10),i.Y36(_,10),i.Y36(g,10),i.Y36(lt,8))};static#n=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([hn]),i.qOj,i.TTD]})}return e})(),On=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[ne]})}return e})(),Fn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:lt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:M,useValue:t.callSetDisabledState??H}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[On]})}return e})();function Sn(e,n){if(1&e){const t=i.EpF();i.TgZ(0,"button",13),i.NdJ("click",function(){i.CHM(t);const s=i.oxw();return i.KtG(s.start())}),i._uU(1," Start "),i.qZA()}}function Nn(e,n){if(1&e){const t=i.EpF();i.TgZ(0,"button",13),i.NdJ("click",function(){i.CHM(t);const s=i.oxw();return i.KtG(s.stop())}),i._uU(1," Stop "),i.qZA()}}function xn(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"State"),i.BQk(),i.ynx(3,18),i._uU(4),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;i.xp6(4),i.Oqu(t.space.on?"on":"off")}}function Tn(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"Time"),i.BQk(),i.ynx(3,18),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;i.xp6(4),i.hij("",i.xi3(5,1,t.space.time,"1.3-3")," s")}}function Gn(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"Time speed"),i.BQk(),i.ynx(3,18),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;let r;i.xp6(4),i.hij(" ",i.xi3(5,1,100*(null!==(r=t.space.timeSpeed)&&void 0!==r?r:0),"1.1-1")," % ")}}function Bn(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"Speed horizontal"),i.BQk(),i.ynx(3,18),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.speedX,"1.2-2")," m/s ")}}function kn(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"Speed vertical"),i.BQk(),i.ynx(3,18),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.speedY,"1.2-2")," m/s ")}}function In(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"Altitude"),i.BQk(),i.ynx(3,18),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.altitude,"1.1-1")," m ")}}function Pn(e,n){if(1&e&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,17),i._uU(2,"Distance"),i.BQk(),i.ynx(3,18),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&e){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.x,"1.1-1")," m ")}}function Un(e,n){if(1&e&&(i.ynx(0),i.TgZ(1,"ui-statistic"),i.ynx(2,2),i._uU(3,"Space"),i.BQk(),i.YNc(4,xn,5,1,"ui-statistic-line",15)(5,Tn,6,4,"ui-statistic-line",15)(6,Gn,6,4,"ui-statistic-line",15),i.qZA(),i.TgZ(7,"ui-statistic"),i.ynx(8,2),i._uU(9,"Ball"),i.BQk(),i.YNc(10,Bn,6,4,"ui-statistic-line",15)(11,kn,6,4,"ui-statistic-line",15)(12,In,6,4,"ui-statistic-line",15)(13,Pn,6,4,"ui-statistic-line",15),i.qZA(),i.BQk()),2&e){const t=n.ngIf;i.xp6(4),i.Q6J("ngIf",t.space.hasOwnProperty("on")),i.xp6(1),i.Q6J("ngIf",t.space.hasOwnProperty("time")),i.xp6(1),i.Q6J("ngIf",t.space.hasOwnProperty("timeSpeed")),i.xp6(4),i.Q6J("ngIf",t.ball.hasOwnProperty("speedX")),i.xp6(1),i.Q6J("ngIf",t.ball.hasOwnProperty("speedY")),i.xp6(1),i.Q6J("ngIf",t.ball.hasOwnProperty("altitude")),i.xp6(1),i.Q6J("ngIf",t.ball.hasOwnProperty("x"))}}let jn=(()=>{class e{#t;#e;constructor(t){this.cdr=t,this.statistic$=(0,x.WI)(()=>({space:this.#t?.statistic??{},ball:this.#e?.statistic??{}})),this.started$=this.statistic$.pipe((0,mt.U)(r=>r.space.on)),this.form=new j({angle:new f(60,{validators:[u.min(0),u.max(90),u.required],nonNullable:!0}),mass:new f(.2,{validators:[u.min(0),u.required],nonNullable:!0}),airDrag:new f(!0,{nonNullable:!0}),objectBallisticC:new f(2,{validators:[u.min(0),u.required],nonNullable:!0}),frontArea:new f(4,{validators:[u.min(0),u.required],nonNullable:!0}),airDensity:new f(1.225,{validators:[u.min(0),u.required],nonNullable:!0}),energy:new f(2e3,{validators:[u.min(0),u.required],nonNullable:!0}),sizeX:new f(2e3,{validators:[u.min(0),u.required],nonNullable:!0}),sizeY:new f(1500,{validators:[u.min(0),u.required],nonNullable:!0})}),this.sizeX=this.form.getRawValue().sizeX,this.sizeY=this.form.getRawValue().sizeY}reset(){this.#n();const{mass:t,energy:r,angle:s,sizeX:o,sizeY:a,airDensity:l,objectBallisticC:p,frontArea:v,airDrag:w}=this.form.getRawValue();this.sizeX=o,this.sizeY=a,this.#t=new Ve(.005);const O=Math.sqrt(2*r/t);this.#e=new be({vx:O*Math.cos(s*Math.PI/180),vy:O*Math.sin(s*Math.PI/180),airDensity:l,c:p,frontArea:v/1e4,mass:t,airDrag:w}),this.#t.addObject(this.#e,{x:0,y:0}),this.#t.setCanvas(this.canvasComponent)}start(){this.#t?.start()}stop(){this.#t?.stop()}ngAfterViewInit(){this.reset(),this.cdr.detectChanges()}ngOnDestroy(){this.#n()}#n(){this.stop(),this.#t=void 0,this.#e=void 0}static#a=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.sBO))};static#r=this.\u0275cmp=i.Xpm({type:e,selectors:[["lab-object-throwing"]],viewQuery:function(r,s){if(1&r&&i.Gf(x.cY,5),2&r){let o;i.iGM(o=i.CRH())&&(s.canvasComponent=o.first)}},standalone:!0,features:[i.jDz],decls:54,vars:12,consts:[[1,"control-panel"],[3,"formGroup"],["title",""],["ui-input","","type","number","formControlName","angle"],["ui-input","","type","number","formControlName","mass","step","0.1"],["ui-input","","type","number","formControlName","energy"],["ui-input","","type","checkbox","formControlName","airDrag"],["ui-input","","type","number","formControlName","objectBallisticC","step","0.01"],["ui-input","","type","number","formControlName","frontArea","step","0.01"],["ui-input","","type","number","formControlName","airDensity","step","0.001"],["ui-input","","type","number","formControlName","sizeX"],["ui-input","","type","number","formControlName","sizeY"],[1,"buttons"],["type","button",3,"click"],["type","button",3,"click",4,"ngIf"],[4,"ngIf"],[3,"sizeX","sizeY"],["label",""],["value",""]],template:function(r,s){1&r&&(i.TgZ(0,"div",0)(1,"ui-form",1),i.ynx(2,2),i._uU(3,"Parameters"),i.BQk(),i.TgZ(4,"ui-control")(5,"ui-label"),i._uU(6,"Angle to horizon, degrees"),i.qZA(),i._UZ(7,"input",3),i.qZA(),i.TgZ(8,"ui-control")(9,"ui-label"),i._uU(10,"Mass, kg"),i.qZA(),i._UZ(11,"input",4),i.qZA(),i.TgZ(12,"ui-control")(13,"ui-label"),i._uU(14,"Energy, J"),i.qZA(),i._UZ(15,"input",5),i.qZA(),i.TgZ(16,"ui-control")(17,"ui-label"),i._uU(18,"Air drag"),i.qZA(),i._UZ(19,"input",6),i.qZA(),i.TgZ(20,"ui-control")(21,"ui-label"),i._uU(22,"Ballistic coefficient C"),i.qZA(),i._UZ(23,"input",7),i.qZA(),i.TgZ(24,"ui-control")(25,"ui-label"),i._uU(26,"Front area, cm"),i.TgZ(27,"sup"),i._uU(28,"2"),i.qZA()(),i._UZ(29,"input",8),i.qZA(),i.TgZ(30,"ui-control")(31,"ui-label"),i._uU(32,"Air density, kg/m"),i.TgZ(33,"sup"),i._uU(34,"3"),i.qZA()(),i._UZ(35,"input",9),i.qZA(),i.TgZ(36,"ui-control")(37,"ui-label"),i._uU(38,"Size horizontal, m"),i.qZA(),i._UZ(39,"input",10),i.qZA(),i.TgZ(40,"ui-control")(41,"ui-label"),i._uU(42,"Size vertical, m"),i.qZA(),i._UZ(43,"input",11),i.qZA()(),i.TgZ(44,"div",12)(45,"button",13),i.NdJ("click",function(){return s.reset()}),i._uU(46,"Set / Reset"),i.qZA(),i.YNc(47,Sn,2,0,"button",14),i.ALo(48,"async"),i.YNc(49,Nn,2,0,"button",14),i.ALo(50,"async"),i.qZA(),i.YNc(51,Un,14,7,"ng-container",15),i.ALo(52,"async"),i.qZA(),i._UZ(53,"tick-canvas",16)),2&r&&(i.xp6(1),i.Q6J("formGroup",s.form),i.xp6(46),i.Q6J("ngIf",!i.lcZ(48,6,s.started$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(50,8,s.started$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(52,10,s.statistic$)),i.xp6(2),i.Q6J("sizeX",s.sizeX)("sizeY",s.sizeY))},dependencies:[b.ez,b.O5,b.Ov,b.JJ,x.cY,A._E,A.Dd,A.Ur,A.Fr,A._n,A.am,Fn,G,at,$,Ht,qt,L,dt],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:auto 1fr;gap:1em;height:100%}[_nghost-%COMP%]   .control-panel[_ngcontent-%COMP%]{display:grid;gap:1em;align-content:start}[_nghost-%COMP%]   .control-panel[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:.5em}"],changeDetection:0})}return e})()}}]);