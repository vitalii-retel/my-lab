"use strict";(self.webpackChunklab=self.webpackChunklab||[]).push([[918],{918:(v,p,c)=>{c.r(p),c.d(p,{TickDrawComponent:()=>T});var t=c(946),g=c(814);class w{}class k{constructor(s,o,i,e){this.canvasEl=s,this.metersX=o,this.metersY=i,this.ticksInterval=e,this.objs=[],this.objPositions=new WeakMap,this.objNextPositions=new WeakMap,this.ticksIntervalMs=1e3*this.ticksInterval,this.state="stopped",this.startTime=Date.now(),this.tickNextStartTime=Date.now(),this.tickDirectCalls=0,this.theme={bgColor:"#ffffff",color:"#000000"}}setTheme(s){this.theme=s}addObject(s,{x:o,y:i}){this.objs.push(s),this.objPositions.set(s,{x:o,y:i})}start(){const s=this.canvasEl.getContext("2d");if(!s)throw new Error("Cannot draw!");this.ctx=s,this.canvasEl.width=0,this.canvasEl.height=0,this.width=this.canvasEl.clientWidth,this.height=this.canvasEl.clientHeight,this.canvasEl.width=this.width,this.canvasEl.height=this.height,this.state="started",this.startTime=Date.now(),this.tickNextStartTime=this.startTime,this.tickDirectCalls=0,this.requestTick(),this.requestDraw()}stop(){this.state="stopped"}requestTick(){if("stopped"===this.state)return;const s=25===this.tickDirectCalls?this.tickNextStartTime:Date.now();if(s>this.tickNextStartTime)return this.tickDirectCalls++,void this.tick();this.tickDirectCalls=0,setTimeout(()=>this.tick(),this.tickNextStartTime-s)}tick(){this.objs.forEach(s=>{const o=s.calculateNextPosition({getObjPosition:d.bind(null,this.objPositions),ticksInterval:this.ticksInterval,stop:this.stop.bind(this)});this.objNextPositions.set(s,o)}),this.objs.forEach(s=>{this.objPositions.set(s,d(this.objNextPositions,s))}),this.tickNextStartTime+=this.ticksIntervalMs,this.requestTick()}requestDraw(){"stopped"!==this.state&&requestAnimationFrame(()=>this.draw())}draw(){this.ctx.fillStyle=this.theme.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.objs.forEach(s=>s.draw({getObjPosition:d.bind(null,this.objPositions),ctx:this.ctx,scale:{x:this.width/this.metersX,y:this.height/this.metersY},theme:this.theme})),this.requestDraw()}}function d(a,s){return a.get(s)}class r extends w{constructor(s,o=(()=>{})){super(),this.num=s,this.statisticFn=o,this.followDog=this,this.l=0}calculateNextPosition({getObjPosition:s,ticksInterval:o,stop:i}){const e=s(this),n=s(this.followDog),l=Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2)),m=l/1,u={x:e.x+(n.x-e.x)/m*o,y:e.y+(n.y-e.y)/m*o};return this.l+=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)),l<2*o&&i(),u}draw({getObjPosition:s,theme:o,ctx:i,scale:e}){const{x:n,y:h}=s(this);i.beginPath(),i.strokeStyle=o.color,i.lineWidth=1,i.arc(n*e.x,h*e.y,.1*e.x,0,2*Math.PI),i.stroke(),i.beginPath(),i.font=`${Math.round(.16*e.y)}px sans-serif`,i.strokeText(String(this.num),(n-.045)*e.x,(h+.06)*e.y),this.statisticFn({l:this.l})}follow(s){this.followDog=s}}const b=["canvas"];let T=(()=>{class a{constructor(o){this.cdr=o,this.space=null,this.data={}}ngOnDestroy(){this.stop()}start(){this.stop(),this.space=new k(this.canvasEl.nativeElement,10,10,.005);const o=new r(1,this.statDogs.bind(this,1)),i=new r(2,this.statDogs.bind(this,2)),e=new r(3,this.statDogs.bind(this,3)),n=new r(4,this.statDogs.bind(this,4));o.follow(i),i.follow(e),e.follow(n),n.follow(o),this.space.addObject(o,{x:0,y:0}),this.space.addObject(i,{x:10,y:0}),this.space.addObject(e,{x:10,y:10}),this.space.addObject(n,{x:0,y:10}),this.space.setTheme({color:getComputedStyle(this.canvasEl.nativeElement).color,bgColor:getComputedStyle(this.canvasEl.nativeElement).backgroundColor}),this.space.start()}stop(){this.space&&(this.space.stop(),this.space=null)}statDogs(o,i){this.data={...this.data,[o]:i},this.cdr.markForCheck()}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["lab-tick-draw"]],viewQuery:function(o,i){if(1&o&&t.Gf(b,5,t.SBq),2&o){let e;t.iGM(e=t.CRH())&&(i.canvasEl=e.first)}},standalone:!0,features:[t.jDz],decls:26,vars:4,consts:[[1,"buttons"],["type","button",3,"click"],["canvas",""],[1,"statistic"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.start()}),t._uU(2,"Start"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return i.stop()}),t._uU(4,"Stop"),t.qZA()(),t._UZ(5,"canvas",null,2),t.TgZ(7,"div",3)(8,"p"),t._uU(9,"10 m x 10 m"),t.qZA(),t.TgZ(10,"h4"),t._uU(11,"1"),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA(),t.TgZ(14,"h4"),t._uU(15,"2"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA(),t.TgZ(18,"h4"),t._uU(19,"3"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA(),t.TgZ(22,"h4"),t._uU(23,"4"),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA()()),2&o){let e,n,h,l;t.xp6(13),t.hij("",(null!==(e=null==i.data[1]?null:i.data[1].l)&&void 0!==e?e:0).toFixed(2)," m"),t.xp6(4),t.hij("",(null!==(n=null==i.data[2]?null:i.data[2].l)&&void 0!==n?n:0).toFixed(2)," m"),t.xp6(4),t.hij("",(null!==(h=null==i.data[3]?null:i.data[3].l)&&void 0!==h?h:0).toFixed(2)," m"),t.xp6(4),t.hij("",(null!==(l=null==i.data[4]?null:i.data[4].l)&&void 0!==l?l:0).toFixed(2)," m")}},dependencies:[g.ez],styles:["[_nghost-%COMP%]{display:grid;gap:.5em 1em;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;height:100%}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:1em;grid-column:1/3}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;height:100%;aspect-ratio:1;box-shadow:var(--shadow);background-color:var(--bg-main);color:var(--c-main)}"],changeDetection:0}),a})()}}]);