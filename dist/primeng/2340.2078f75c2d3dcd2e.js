"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[2340],{2340:(g,p,o)=>{o.d(p,{LU:()=>t.LU});var t=o(3622)},3622:(g,p,o)=>{o.d(p,{x4:()=>h,xf:()=>b,LU:()=>W});var t=o(3668),c=o(6019),v=o(8439),u=o(5989),d=o(3392),r=o(3475),w=o(1197),T=o(6879);function m(i,l){1&i&&t.GkF(0)}function x(i,l){if(1&i&&(t.ynx(0),t.YNc(1,m,1,0,"ng-container",3),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.contentTemplate)}}function C(i,l){if(1&i&&(t.TgZ(0,"div",1),t.Hsn(1),t.YNc(2,x,2,1,"ng-container",2),t.qZA()),2&i){const e=t.oxw();t.Q6J("hidden",!e.selected),t.uIk("id",e.id)("aria-hidden",!e.selected)("aria-labelledby",e.id+"-label"),t.xp6(2),t.Q6J("ngIf",e.contentTemplate&&(e.cache?e.loaded:e.selected))}}const _=["*"],I=["content"],k=["navbar"],y=["prevBtn"],P=["nextBtn"],E=["inkbar"];function S(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",12,13),t.NdJ("click",function(){return t.CHM(e),t.oxw().navBackward()}),t._UZ(2,"span",14),t.qZA()}}function B(i,l){if(1&i&&t._UZ(0,"span",24),2&i){const e=t.oxw(3).$implicit;t.Q6J("ngClass",e.leftIcon)}}function V(i,l){if(1&i&&t._UZ(0,"span",25),2&i){const e=t.oxw(3).$implicit;t.Q6J("ngClass",e.rightIcon)}}function M(i,l){if(1&i&&(t.ynx(0),t.YNc(1,B,1,1,"span",21),t.TgZ(2,"span",22),t._uU(3),t.qZA(),t.YNc(4,V,1,1,"span",23),t.BQk()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e.leftIcon),t.xp6(2),t.Oqu(e.header),t.xp6(1),t.Q6J("ngIf",e.rightIcon)}}function O(i,l){1&i&&t.GkF(0)}function A(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"span",26),t.NdJ("click",function(a){t.CHM(e);const s=t.oxw(2).$implicit;return t.oxw().close(a,s)}),t.qZA()}}const D=function(i,l){return{"p-highlight":i,"p-disabled":l}};function Z(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",16),t.TgZ(1,"a",17),t.NdJ("click",function(a){t.CHM(e);const s=t.oxw().$implicit;return t.oxw().open(a,s)})("keydown.enter",function(a){t.CHM(e);const s=t.oxw().$implicit;return t.oxw().open(a,s)}),t.YNc(2,M,5,3,"ng-container",18),t.YNc(3,O,1,0,"ng-container",19),t.YNc(4,A,1,0,"span",20),t.qZA(),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Tol(e.headerStyleClass),t.Q6J("ngClass",t.WLB(16,D,e.selected,e.disabled))("ngStyle",e.headerStyle),t.xp6(1),t.Q6J("pTooltip",e.tooltip)("tooltipPosition",e.tooltipPosition)("positionStyle",e.tooltipPositionStyle)("tooltipStyleClass",e.tooltipStyleClass),t.uIk("id",e.id+"-label")("aria-selected",e.selected)("aria-controls",e.id)("aria-selected",e.selected)("tabindex",e.disabled?null:"0"),t.xp6(1),t.Q6J("ngIf",!e.headerTemplate),t.xp6(1),t.Q6J("ngTemplateOutlet",e.headerTemplate),t.xp6(1),t.Q6J("ngIf",e.closable)}}function Q(i,l){1&i&&t.YNc(0,Z,5,19,"li",15),2&i&&t.Q6J("ngIf",!l.$implicit.closed)}function J(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",27,28),t.NdJ("click",function(){return t.CHM(e),t.oxw().navForward()}),t._UZ(2,"span",29),t.qZA()}}const F=function(i){return{"p-tabview p-component":!0,"p-tabview-scrollable":i}};let R=0,h=(()=>{class i{constructor(e,n,a){this.viewContainer=n,this.cd=a,this.cache=!0,this.tooltipPosition="top",this.tooltipPositionStyle="absolute",this.id="p-tabpanel-"+R++,this.tabView=e}ngAfterContentInit(){this.templates.forEach(e=>{"header"===e.getType()?this.headerTemplate=e.template:this.contentTemplate=e.template})}get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||this.cd.detectChanges(),e&&(this.loaded=!0)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.tabView.cd.markForCheck()}get header(){return this._header}set header(e){this._header=e,this.tabView.updateInkBar(),this.tabView.cd.markForCheck()}get leftIcon(){return this._leftIcon}set leftIcon(e){this._leftIcon=e,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(e){this._rightIcon=e,this.tabView.cd.markForCheck()}ngOnDestroy(){this.view=null}}return i.\u0275fac=function(e){return new(e||i)(t.Y36((0,t.Gpc)(()=>b)),t.Y36(t.s_b),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["p-tabPanel"]],contentQueries:function(e,n,a){if(1&e&&t.Suo(a,d.jx,4),2&e){let s;t.iGM(s=t.CRH())&&(n.templates=s)}},hostAttrs:[1,"p-element"],inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:_,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(e,n){1&e&&(t.F$t(),t.YNc(0,C,3,5,"div",0)),2&e&&t.Q6J("ngIf",!n.closed)},directives:[c.O5,c.tP],encapsulation:2}),i})(),b=(()=>{class i{constructor(e,n){this.el=e,this.cd=n,this.orientation="top",this.onChange=new t.vpe,this.onClose=new t.vpe,this.activeIndexChange=new t.vpe,this.backwardIsDisabled=!0,this.forwardIsDisabled=!1}ngAfterContentInit(){this.initTabs(),this.tabPanels.changes.subscribe(e=>{this.initTabs()})}ngAfterViewChecked(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(null!=this.activeIndex&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}open(e,n){if(n.disabled)e&&e.preventDefault();else{if(!n.selected){let a=this.findSelectedTab();a&&(a.selected=!1),this.tabChanged=!0,n.selected=!0;let s=this.findTabIndex(n);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(s),this.onChange.emit({originalEvent:e,index:s}),this.updateScrollBar(s)}e&&e.preventDefault()}}close(e,n){this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(n),close:()=>{this.closeTab(n)}}):(this.closeTab(n),this.onClose.emit({originalEvent:e,index:this.findTabIndex(n)})),e.stopPropagation()}closeTab(e){if(!e.disabled){if(e.selected){this.tabChanged=!0,e.selected=!1;for(let n=0;n<this.tabs.length;n++){let a=this.tabs[n];if(!a.closed&&!e.disabled){a.selected=!0;break}}}e.closed=!0}}findSelectedTab(){for(let e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null}findTabIndex(e){let n=-1;for(let a=0;a<this.tabs.length;a++)if(this.tabs[a]==e){n=a;break}return n}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.tabs&&this.tabs.length&&null!=this._activeIndex&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0,this.updateScrollBar(e))}updateInkBar(){if(this.navbar){let e=r.p.findSingle(this.navbar.nativeElement,"li.p-highlight");this.inkbar.nativeElement.style.width=r.p.getWidth(e)+"px",this.inkbar.nativeElement.style.left=r.p.getOffset(e).left-r.p.getOffset(this.navbar.nativeElement).left+"px"}}updateScrollBar(e){this.navbar.nativeElement.children[e].scrollIntoView({block:"nearest"})}updateButtonState(){const e=this.content.nativeElement,{scrollLeft:n,scrollWidth:a}=e,s=r.p.getWidth(e);this.backwardIsDisabled=0===n,this.forwardIsDisabled=n===a-s}onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()}getVisibleButtonWidths(){var e,n;return[null===(e=this.prevBtn)||void 0===e?void 0:e.nativeElement,null===(n=this.nextBtn)||void 0===n?void 0:n.nativeElement].reduce((a,s)=>s?a+r.p.getWidth(s):a,0)}navBackward(){const e=this.content.nativeElement,n=r.p.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft-n;e.scrollLeft=a<=0?0:a}navForward(){const e=this.content.nativeElement,n=r.p.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+n,s=e.scrollWidth-n;e.scrollLeft=a>=s?s:a}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["p-tabView"]],contentQueries:function(e,n,a){if(1&e&&t.Suo(a,h,4),2&e){let s;t.iGM(s=t.CRH())&&(n.tabPanels=s)}},viewQuery:function(e,n){if(1&e&&(t.Gf(I,5),t.Gf(k,5),t.Gf(y,5),t.Gf(P,5),t.Gf(E,5)),2&e){let a;t.iGM(a=t.CRH())&&(n.content=a.first),t.iGM(a=t.CRH())&&(n.navbar=a.first),t.iGM(a=t.CRH())&&(n.prevBtn=a.first),t.iGM(a=t.CRH())&&(n.nextBtn=a.first),t.iGM(a=t.CRH())&&(n.inkbar=a.first)}},hostAttrs:[1,"p-element"],inputs:{orientation:"orientation",style:"style",styleClass:"styleClass",controlClose:"controlClose",scrollable:"scrollable",activeIndex:"activeIndex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:_,decls:13,vars:9,consts:[[3,"ngClass","ngStyle"],[1,"p-tabview-nav-container"],["class","p-tabview-nav-prev p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-nav-content",3,"scroll"],["content",""],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],[1,"p-tabview-ink-bar"],["inkbar",""],["class","p-tabview-nav-next p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-panels"],["type","button","pRipple","",1,"p-tabview-nav-prev","p-tabview-nav-btn","p-link",3,"click"],["prevBtn",""],[1,"pi","pi-chevron-left"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown.enter"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","p-tabview-close pi pi-times",3,"click",4,"ngIf"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-close","pi","pi-times",3,"click"],["type","button","pRipple","",1,"p-tabview-nav-next","p-tabview-nav-btn","p-link",3,"click"],["nextBtn",""],[1,"pi","pi-chevron-right"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,S,3,0,"button",2),t.TgZ(3,"div",3,4),t.NdJ("scroll",function(s){return n.onScroll(s)}),t.TgZ(5,"ul",5,6),t.YNc(7,Q,1,1,"ng-template",7),t._UZ(8,"li",8,9),t.qZA(),t.qZA(),t.YNc(10,J,3,0,"button",10),t.qZA(),t.TgZ(11,"div",11),t.Hsn(12),t.qZA(),t.qZA()),2&e&&(t.Tol(n.styleClass),t.Q6J("ngClass",t.VKq(7,F,n.scrollable))("ngStyle",n.style),t.xp6(2),t.Q6J("ngIf",n.scrollable&&!n.backwardIsDisabled),t.xp6(5),t.Q6J("ngForOf",n.tabs),t.xp6(3),t.Q6J("ngIf",n.scrollable&&!n.forwardIsDisabled))},directives:[c.mk,c.PC,c.O5,c.sg,w.H,T.u,c.tP],styles:[".p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:flex;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}\n"],encapsulation:2,changeDetection:0}),i})(),W=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,d.m8,v.z,u.T],d.m8]}),i})()}}]);