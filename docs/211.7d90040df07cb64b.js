"use strict";(self.webpackChunklab=self.webpackChunklab||[]).push([[211],{9211:(jn,ft,c)=>{c.r(ft),c.d(ft,{ObjectThrowingComponent:()=>Un});var V=c(6814),S=c(7432);class ye{#t={};get items(){return this.#t}constructor(e={}){Object.assign(this.#t,e)}add(e,t){this.#t="function"!=typeof t?{...this.#t,[e]:t}:{...this.#t,[e]:t(this.#t[e])}}}const z="on",N="time";class Ve{#t=[];#e=new WeakMap;#n=new WeakMap;#h=1e3*this.ticksInterval;#r="stopped";#p=Date.now();#s=Date.now();#a=0;#u;#i={real:Date.now(),space:Date.now()};#o=new ye({[z]:!1});#f;#c;get statistic(){return this.#o.items}constructor(e){this.ticksInterval=e}addObject(e,{x:t,y:r}){this.#t.push(e),this.#e.set(e,{x:t,y:r})}setCanvas(e){this.#u=e,this.#l()}start(){this.#r="started",this.#l(),this.#o.add(z,!0),this.#i.real=Date.now(),this.#i.space=this.statistic[N]||0,this.#p=Date.now(),this.#s=this.#p,this.#a=0,this.#g(),this.#_()}stop(){this.#r="stopped",this.#l(),clearTimeout(this.#f),this.#c&&cancelAnimationFrame(this.#c),this.#o.add(z,!1)}#g(){if("stopped"===this.#r)return;const e=25===this.#a?this.#s:Date.now();if(e>this.#s)return this.#a++,void this.#m();this.#a=0,this.#f=setTimeout(()=>this.#m(),this.#s-e)}#m(){if(this.#t.some(t=>t.shouldStop({getObjPosition:r=>this.#e.get(r)})))return void this.stop();this.#t.forEach(t=>{const r=t.calculateNextPosition({getObjPosition:s=>this.#e.get(s),ticksInterval:this.ticksInterval});this.#n.set(t,r)}),this.#t.forEach(t=>{this.#e.set(t,this.#n.get(t))}),this.#o.add(N,t=>(t??0)+this.ticksInterval);const e=Date.now()-this.#i.real;e>1e3&&(this.#o.add("timeSpeed",1e3*(this.statistic[N]-this.#i.space)/e),this.#i.real+=e,this.#i.space=this.statistic[N]),this.#s+=this.#h,this.#g()}#_(){"stopped"!==this.#r&&(this.#c=requestAnimationFrame(()=>this.#y()))}#y(){this.#l(),this.#_()}#l(){if(!this.#u)return;const e=this.#u;e.clean(),this.#t.forEach(t=>t.draw({getObjPosition:r=>this.#e.get(r),cx:r=>r*e.scaleX,cy:r=>(e.sizeY-r)*e.scaleY,cdx:(r,s)=>this.#d(r*e.scaleX,s??0),cdy:(r,s)=>this.#d(-r*e.scaleY,s??0),cd:(r,s)=>this.#d(r*e.scaleX,s??0),ctx:e.ctx,theme:e.theme}))}#d(e,t){return e>=0?Math.max(e,t):Math.min(e,t)}}class be{#t=0;#e=0;#n=new S.$k;get statistic(){return this.#n.items}constructor({vx:e,vy:t}){this.#t=e,this.#e=t,this.#n.add("speedX",this.#t),this.#n.add("speedY",this.#e)}shouldStop({getObjPosition:e}){return e(this).y<0}calculateNextPosition({ticksInterval:e,getObjPosition:t}){this.#e-=9.8*e;const r={x:t(this).x+e*this.#t,y:t(this).y+e*this.#e};return this.#n.add("speedX",this.#t),this.#n.add("speedY",this.#e),this.#n.add("altitude",r.y),r}draw({ctx:e,cx:t,cy:r,cd:s,getObjPosition:o,theme:a}){const{x:l,y:f}=o(this);e.beginPath(),e.strokeStyle=a.color,e.lineWidth=1,e.arc(t(l),r(f),s(.1,5),0,2*Math.PI),e.stroke()}}var gt=c(7398),b=c(4936),i=c(6146),Ae=c(7715),De=c(5592),Me=c(7453),we=c(4829),Oe=c(4564),Ee=c(8251),Fe=c(7400),Se=c(2714);let mt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||n)(i.Y36(i.Qsj),i.Y36(i.SBq))};static#e=this.\u0275dir=i.lG2({type:n})}return n})(),y=(()=>{class n extends mt{static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=i.n5z(n)))(s||n)}})();static#e=this.\u0275dir=i.lG2({type:n,features:[i.qOj]})}return n})();const p=new i.OlP("NgValueAccessor"),Te={provide:p,useExisting:(0,i.Gpc)(()=>x),multi:!0},Be=new i.OlP("CompositionEventMode");let x=(()=>{class n extends mt{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ge(){const n=(0,V.q)()?(0,V.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Be,8))};static#e=this.\u0275dir=i.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){1&r&&i.NdJ("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[i._Bn([Te]),i.qOj]})}return n})();function g(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function yt(n){return null!=n&&"number"==typeof n.length}const u=new i.OlP("NgValidators"),m=new i.OlP("NgAsyncValidators"),ke=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class h{static min(e){return function vt(n){return e=>{if(g(e.value)||g(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function Ct(n){return e=>{if(g(e.value)||g(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return function Vt(n){return g(n.value)?{required:!0}:null}(e)}static requiredTrue(e){return function bt(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return function At(n){return g(n.value)||ke.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function Dt(n){return e=>g(e.value)||!yt(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function Mt(n){return e=>yt(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function wt(n){if(!n)return T;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(g(r.value))return null;const s=r.value;return e.test(s)?null:{pattern:{requiredPattern:t,actualValue:s}}}}(e)}static nullValidator(e){return null}static compose(e){return xt(e)}static composeAsync(e){return Tt(e)}}function T(n){return null}function Ot(n){return null!=n}function Et(n){return(0,i.QGY)(n)?(0,Ae.D)(n):n}function Ft(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function St(n,e){return e.map(t=>t(n))}function Nt(n){return n.map(e=>function Ie(n){return!n.validate}(e)?e:t=>e.validate(t))}function xt(n){if(!n)return null;const e=n.filter(Ot);return 0==e.length?null:function(t){return Ft(St(t,e))}}function Z(n){return null!=n?xt(Nt(n)):null}function Tt(n){if(!n)return null;const e=n.filter(Ot);return 0==e.length?null:function(t){return function Ne(...n){const e=(0,Oe.jO)(n),{args:t,keys:r}=(0,Me.D)(n),s=new De.y(o=>{const{length:a}=t;if(!a)return void o.complete();const l=new Array(a);let f=a,M=a;for(let L=0;L<a;L++){let pt=!1;(0,we.Xf)(t[L]).subscribe((0,Ee.x)(o,Hn=>{pt||(pt=!0,M--),l[L]=Hn},()=>f--,void 0,()=>{(!f||!pt)&&(M||o.next(r?(0,Se.n)(r,l):l),o.complete())}))}});return e?s.pipe((0,Fe.Z)(e)):s}(St(t,e).map(Et)).pipe((0,gt.U)(Ft))}}function $(n){return null!=n?Tt(Nt(n)):null}function Gt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Bt(n){return n._rawValidators}function kt(n){return n._rawAsyncValidators}function W(n){return n?Array.isArray(n)?n:[n]:[]}function G(n,e){return Array.isArray(n)?n.includes(e):n===e}function It(n,e){const t=W(e);return W(n).forEach(s=>{G(t,s)||t.push(s)}),t}function Pt(n,e){return W(e).filter(t=>!G(n,t))}class Ut{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Z(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=$(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class d extends Ut{get formDirective(){return null}get path(){return null}}class _ extends Ut{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ht{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let jt=(()=>{class n extends Ht{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||n)(i.Y36(_,2))};static#e=this.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){2&r&&i.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[i.qOj]})}return n})(),qt=(()=>{class n extends Ht{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||n)(i.Y36(d,10))};static#e=this.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){2&r&&i.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[i.qOj]})}return n})();const w="VALID",k="INVALID",A="PENDING",O="DISABLED";function X(n){return(I(n)?n.validators:n)||null}function K(n,e){return(I(e)?e.asyncValidators:n)||null}function I(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class zt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===k}get pending(){return this.status==A}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(It(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(It(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Pt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Pt(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===A)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const t=Et(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,s)=>r&&r._find(s),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(k)?k:w}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){I(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function je(n){return Array.isArray(n)?Z(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function qe(n){return Array.isArray(n)?$(n):n||null}(this._rawAsyncValidators)}}class P extends zt{constructor(e,t,r){super(X(t),K(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){(function Lt(n,e,t){n._forEachChild((r,s)=>{if(void 0===t[s])throw new i.vHH(1002,"")})})(this,0,e),Object.keys(e).forEach(r=>{(function Yt(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const s=this.controls[r];s&&s.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,s)=>{r.reset(e?e[s]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,s)=>((r.enabled||this.disabled)&&(t[s]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((s,o)=>{r=t(r,s,o)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}const D=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>U}),U="always";function E(n,e,t=U){tt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===t)&&e.valueAccessor.setDisabledState?.(n.disabled),function Le(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Zt(n,e)})}(n,e),function Ze(n,e){const t=(r,s)=>{e.valueAccessor.writeValue(r),s&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function ze(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Zt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Ye(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function j(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),R(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function q(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function tt(n,e){const t=Bt(n);null!==e.validator?n.setValidators(Gt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=kt(n);null!==e.asyncValidator?n.setAsyncValidators(Gt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const s=()=>n.updateValueAndValidity();q(e._rawValidators,s),q(e._rawAsyncValidators,s)}function R(n,e){let t=!1;if(null!==n){if(null!==e.validator){const s=Bt(n);if(Array.isArray(s)&&s.length>0){const o=s.filter(a=>a!==e.validator);o.length!==s.length&&(t=!0,n.setValidators(o))}}if(null!==e.asyncValidator){const s=kt(n);if(Array.isArray(s)&&s.length>0){const o=s.filter(a=>a!==e.asyncValidator);o.length!==s.length&&(t=!0,n.setAsyncValidators(o))}}}const r=()=>{};return q(e._rawValidators,r),q(e._rawAsyncValidators,r),t}function Zt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Qt(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function Jt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const v=class extends zt{constructor(e=null,t,r){super(X(t),K(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Jt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Qt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Qt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Jt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},rn={provide:p,useExisting:(0,i.Gpc)(()=>st),multi:!0};let st=(()=>{class n extends y{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=r=>{t(""==r?null:parseFloat(r))}}static#t=this.\u0275fac=(()=>{let t;return function(s){return(t||(t=i.n5z(n)))(s||n)}})();static#e=this.\u0275dir=i.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){1&r&&i.NdJ("input",function(a){return s.onChange(a.target.value)})("blur",function(){return s.onTouched()})},features:[i._Bn([rn]),i.qOj]})}return n})(),ne=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=i.oAB({type:n});static#n=this.\u0275inj=i.cJS({})}return n})();const ot=new i.OlP("NgModelWithFormControlWarning"),un={provide:d,useExisting:(0,i.Gpc)(()=>Y)};let Y=(()=>{class n extends d{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return E(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){j(t.control||null,t,!1),function Je(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Wt(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,s=this.form.get(t.path);r!==s&&(j(r||null,t),(n=>n instanceof v)(s)&&(E(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function $t(n,e){tt(n,e)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function $e(n,e){return R(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){tt(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||n)(i.Y36(u,10),i.Y36(m,10),i.Y36(D,8))};static#e=this.\u0275dir=i.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(r,s){1&r&&i.NdJ("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([un]),i.qOj,i.TTD]})}return n})();const hn={provide:_,useExisting:(0,i.Gpc)(()=>ut)};let ut=(()=>{class n extends _{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,s,o,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=function it(n,e){if(!e)return null;let t,r,s;return Array.isArray(e),e.forEach(o=>{o.constructor===x?t=o:function Qe(n){return Object.getPrototypeOf(n.constructor)===y}(o)?r=o:s=o}),s||r||t||null}(0,o)}ngOnChanges(t){this._added||this._setUpControl(),function nt(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function H(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||n)(i.Y36(d,13),i.Y36(u,10),i.Y36(m,10),i.Y36(p,10),i.Y36(ot,8))};static#n=this.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([hn]),i.qOj,i.TTD]})}return n})(),On=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=i.oAB({type:n});static#n=this.\u0275inj=i.cJS({imports:[ne]})}return n})(),Fn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ot,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:D,useValue:t.callSetDisabledState??U}]}}static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=i.oAB({type:n});static#n=this.\u0275inj=i.cJS({imports:[On]})}return n})();function Sn(n,e){if(1&n){const t=i.EpF();i.TgZ(0,"button",9),i.NdJ("click",function(){i.CHM(t);const s=i.oxw();return i.KtG(s.start())}),i._uU(1," Start "),i.qZA()}}function Nn(n,e){if(1&n){const t=i.EpF();i.TgZ(0,"button",9),i.NdJ("click",function(){i.CHM(t);const s=i.oxw();return i.KtG(s.stop())}),i._uU(1," Stop "),i.qZA()}}function xn(n,e){if(1&n&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,13),i._uU(2,"State"),i.BQk(),i.ynx(3,14),i._uU(4),i.BQk(),i.qZA()),2&n){const t=i.oxw().ngIf;i.xp6(4),i.Oqu(t.space.on?"on":"off")}}function Tn(n,e){if(1&n&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,13),i._uU(2,"Time"),i.BQk(),i.ynx(3,14),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&n){const t=i.oxw().ngIf;i.xp6(4),i.hij("",i.xi3(5,1,t.space.time,"1.3-3")," s")}}function Gn(n,e){if(1&n&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,13),i._uU(2,"Time speed"),i.BQk(),i.ynx(3,14),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&n){const t=i.oxw().ngIf;let r;i.xp6(4),i.hij(" ",i.xi3(5,1,100*(null!==(r=t.space.timeSpeed)&&void 0!==r?r:0),"1.1-1")," % ")}}function Bn(n,e){if(1&n&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,13),i._uU(2,"Speed horizontal"),i.BQk(),i.ynx(3,14),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&n){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.speedX,"1.2-2")," m/s ")}}function kn(n,e){if(1&n&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,13),i._uU(2,"Speed vertical"),i.BQk(),i.ynx(3,14),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&n){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.speedY,"1.2-2")," m/s ")}}function In(n,e){if(1&n&&(i.TgZ(0,"ui-statistic-line"),i.ynx(1,13),i._uU(2,"Altitude"),i.BQk(),i.ynx(3,14),i._uU(4),i.ALo(5,"number"),i.BQk(),i.qZA()),2&n){const t=i.oxw().ngIf;i.xp6(4),i.hij(" ",i.xi3(5,1,t.ball.altitude,"1.1-1")," m ")}}function Pn(n,e){if(1&n&&(i.ynx(0),i.TgZ(1,"ui-statistic"),i.ynx(2,2),i._uU(3,"Space"),i.BQk(),i.YNc(4,xn,5,1,"ui-statistic-line",11)(5,Tn,6,4,"ui-statistic-line",11)(6,Gn,6,4,"ui-statistic-line",11),i.qZA(),i.TgZ(7,"ui-statistic"),i.ynx(8,2),i._uU(9,"Ball"),i.BQk(),i.YNc(10,Bn,6,4,"ui-statistic-line",11)(11,kn,6,4,"ui-statistic-line",11)(12,In,6,4,"ui-statistic-line",11),i.qZA(),i.BQk()),2&n){const t=e.ngIf;i.xp6(4),i.Q6J("ngIf",t.space.hasOwnProperty("on")),i.xp6(1),i.Q6J("ngIf",t.space.hasOwnProperty("time")),i.xp6(1),i.Q6J("ngIf",t.space.hasOwnProperty("timeSpeed")),i.xp6(4),i.Q6J("ngIf",t.ball.hasOwnProperty("speedX")),i.xp6(1),i.Q6J("ngIf",t.ball.hasOwnProperty("speedY")),i.xp6(1),i.Q6J("ngIf",t.ball.hasOwnProperty("altitude"))}}let Un=(()=>{class n{#t;#e;constructor(t){this.cdr=t,this.statistic$=(0,S.WI)(()=>({space:this.#t?.statistic??{},ball:this.#e?.statistic??{}})),this.started$=this.statistic$.pipe((0,gt.U)(r=>r.space.on)),this.form=new P({angle:new v(60,{validators:[h.min(0),h.max(90),h.required],nonNullable:!0}),mass:new v(.2,{validators:[h.min(0),h.required],nonNullable:!0}),energy:new v(2e3,{validators:[h.min(0),h.required],nonNullable:!0}),sizeX:new v(2e3,{validators:[h.min(0),h.required],nonNullable:!0}),sizeY:new v(1500,{validators:[h.min(0),h.required],nonNullable:!0})}),this.sizeX=this.form.getRawValue().sizeX,this.sizeY=this.form.getRawValue().sizeY}reset(){this.#n();const{mass:t,energy:r,angle:s,sizeX:o,sizeY:a}=this.form.getRawValue();this.sizeX=o,this.sizeY=a,this.#t=new Ve(.005);const l=Math.sqrt(2*r/t);this.#e=new be({vx:l*Math.cos(s*Math.PI/180),vy:l*Math.sin(s*Math.PI/180)}),this.#t.addObject(this.#e,{x:0,y:0}),this.#t.setCanvas(this.canvasComponent)}start(){this.#t?.start()}stop(){this.#t?.stop()}ngAfterViewInit(){this.reset(),this.cdr.detectChanges()}ngOnDestroy(){this.#n()}#n(){this.stop(),this.#t=void 0,this.#e=void 0}static#h=this.\u0275fac=function(r){return new(r||n)(i.Y36(i.sBO))};static#r=this.\u0275cmp=i.Xpm({type:n,selectors:[["lab-object-throwing"]],viewQuery:function(r,s){if(1&r&&i.Gf(S.cY,5),2&r){let o;i.iGM(o=i.CRH())&&(s.canvasComponent=o.first)}},standalone:!0,features:[i.jDz],decls:34,vars:12,consts:[[1,"control-panel"],[3,"formGroup"],["title",""],["ui-input","","type","number","formControlName","angle"],["ui-input","","type","number","formControlName","mass","step","0.1"],["ui-input","","type","number","formControlName","energy"],["ui-input","","type","number","formControlName","sizeX"],["ui-input","","type","number","formControlName","sizeY"],[1,"buttons"],["type","button",3,"click"],["type","button",3,"click",4,"ngIf"],[4,"ngIf"],[3,"sizeX","sizeY"],["label",""],["value",""]],template:function(r,s){1&r&&(i.TgZ(0,"div",0)(1,"ui-form",1),i.ynx(2,2),i._uU(3,"Parameters"),i.BQk(),i.TgZ(4,"ui-control")(5,"ui-label"),i._uU(6,"Angle to horizon"),i.qZA(),i._UZ(7,"input",3),i.qZA(),i.TgZ(8,"ui-control")(9,"ui-label"),i._uU(10,"Mass, kg"),i.qZA(),i._UZ(11,"input",4),i.qZA(),i.TgZ(12,"ui-control")(13,"ui-label"),i._uU(14,"Energy, J"),i.qZA(),i._UZ(15,"input",5),i.qZA(),i.TgZ(16,"ui-control")(17,"ui-label"),i._uU(18,"Size horizontal, m"),i.qZA(),i._UZ(19,"input",6),i.qZA(),i.TgZ(20,"ui-control")(21,"ui-label"),i._uU(22,"Size vertical, m"),i.qZA(),i._UZ(23,"input",7),i.qZA()(),i.TgZ(24,"div",8)(25,"button",9),i.NdJ("click",function(){return s.reset()}),i._uU(26,"Set / Reset"),i.qZA(),i.YNc(27,Sn,2,0,"button",10),i.ALo(28,"async"),i.YNc(29,Nn,2,0,"button",10),i.ALo(30,"async"),i.qZA(),i.YNc(31,Pn,13,6,"ng-container",11),i.ALo(32,"async"),i.qZA(),i._UZ(33,"tick-canvas",12)),2&r&&(i.xp6(1),i.Q6J("formGroup",s.form),i.xp6(26),i.Q6J("ngIf",!i.lcZ(28,6,s.started$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(30,8,s.started$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(32,10,s.statistic$)),i.xp6(2),i.Q6J("sizeX",s.sizeX)("sizeY",s.sizeY))},dependencies:[V.ez,V.O5,V.Ov,V.JJ,S.cY,b._E,b.Dd,b.Ur,b.Fr,b._n,b.am,Fn,x,st,jt,qt,Y,ut],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:auto 1fr;gap:1em;height:100%}[_nghost-%COMP%]   .control-panel[_ngcontent-%COMP%]{display:grid;gap:1em;align-content:start}[_nghost-%COMP%]   .control-panel[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:.5em}"],changeDetection:0})}return n})()}}]);