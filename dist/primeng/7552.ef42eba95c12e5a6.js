"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[7552],{7290:(f,h,s)=>{s.d(h,{h:()=>m,a:()=>b});var c=s(6019),d=s(3668);const g=["code"],e=["*"];let m=(()=>{class l{constructor(p){this.el=p,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return l.\u0275fac=function(p){return new(p||l)(d.Y36(d.SBq))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-code"]],viewQuery:function(p,u){if(1&p&&d.Gf(g,5),2&p){let T;d.iGM(T=d.CRH())&&(u.codeViewChild=T.first)}},inputs:{lang:"lang"},ngContentSelectors:e,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(p,u){1&p&&(d.F$t(),d.TgZ(0,"pre",0),d.TgZ(1,"code",null,1),d.Hsn(3),d._uU(4,"\n"),d.qZA(),d.qZA()),2&p&&d.Q6J("ngClass","language-"+u.lang)},directives:[c.mk],encapsulation:2}),l})(),b=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[[c.ez]]}),l})()},7552:(f,h,s)=>{s.r(h),s.d(h,{SidebarDemoModule:()=>B});var c=s(6019),d=s(7537),g=s(1120),e=s(3668),m=s(2060),b=s(9814),l=s(5989),Z=s(3475),p=s(3392),u=s(7550),T=s(1197);function q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(a){return e.CHM(t),e.oxw(2).close(a)})("keydown.enter",function(a){return e.CHM(t),e.oxw(2).close(a)}),e._UZ(1,"span",8),e.qZA()}if(2&i){const t=e.oxw(2);e.uIk("aria-label",t.ariaCloseLabel)}}function v(i,o){1&i&&e.GkF(0)}const S=function(i,o,t,n,a,r){return{"p-sidebar":!0,"p-sidebar-active":i,"p-sidebar-left":o,"p-sidebar-right":t,"p-sidebar-top":n,"p-sidebar-bottom":a,"p-sidebar-full":r}},U=function(i,o){return{transform:i,transition:o}},y=function(i){return{value:"visible",params:i}};function C(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",1,2),e.NdJ("@panelState.start",function(a){return e.CHM(t),e.oxw().onAnimationStart(a)})("@panelState.done",function(a){return e.CHM(t),e.oxw().onAnimationEnd(a)}),e.TgZ(2,"div",3),e.YNc(3,q,2,1,"button",4),e.qZA(),e.TgZ(4,"div",5),e.Hsn(5),e.YNc(6,v,1,0,"ng-container",6),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.Tol(t.styleClass),e.Q6J("ngClass",e.HTZ(8,S,t.visible,"left"===t.position&&!t.fullScreen,"right"===t.position&&!t.fullScreen,"top"===t.position&&!t.fullScreen,"bottom"===t.position&&!t.fullScreen,t.fullScreen))("@panelState",e.VKq(18,y,e.WLB(15,U,t.transformOptions,t.transitionOptions)))("ngStyle",t.style),e.uIk("aria-modal",t.modal),e.xp6(3),e.Q6J("ngIf",t.showCloseIcon),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const k=["*"],x=(0,b.oQ)([(0,b.oB)({transform:"{{transform}}",opacity:0}),(0,b.jt)("{{transition}}")]),w=(0,b.oQ)([(0,b.jt)("{{transition}}",(0,b.oB)({transform:"{{transform}}",opacity:0}))]);let I=(()=>{class i{constructor(t,n,a,r){this.el=t,this.renderer=n,this.cd=a,this.config=r,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.modal=!0,this.dismissible=!0,this.showCloseIcon=!0,this.closeOnEscape=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new e.vpe,this.onHide=new e.vpe,this.visibleChange=new e.vpe,this._position="left",this._fullScreen=!1,this.transformOptions="translate3d(-100%, 0px, 0px)"}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template})}get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){switch(this._position=t,t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)"}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}show(){this.autoZIndex&&u.P9.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(){this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1),Z.p.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",t=>{this.dismissible&&this.close(t)})),document.body.appendChild(this.mask),this.blockScroll&&Z.p.addClass(document.body,"p-overflow-hidden"))}disableModality(){this.mask&&(Z.p.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.destroyModal.bind(this),this.mask.addEventListener("animationend",this.animationEndListener))}destroyModal(){this.unbindMaskClickListener(),this.mask&&document.body.removeChild(this.mask),this.blockScroll&&Z.p.removeClass(document.body,"p-overflow-hidden"),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){"visible"===t.toState&&(this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(t){"void"===t.toState&&(this.hide(),u.P9.clear(this.container),this.unbindGlobalListeners())}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):Z.p.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",n=>{27==n.which&&parseInt(this.container.style.zIndex)===Z.p.zindex+this.baseZIndex&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.mask.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.el.nativeElement.appendChild(this.container),this.container&&this.autoZIndex&&u.P9.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(p.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-sidebar"]],contentQueries:function(t,n,a){if(1&t&&e.Suo(a,p.jx,4),2&t){let r;e.iGM(r=e.CRH())&&(n.templates=r)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:"blockScroll",style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",modal:"modal",dismissible:"dismissible",showCloseIcon:"showCloseIcon",closeOnEscape:"closeOnEscape",transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},ngContentSelectors:k,decls:1,vars:1,consts:[["role","complementary",3,"ngClass","ngStyle","class",4,"ngIf"],["role","complementary",3,"ngClass","ngStyle"],["container",""],[1,"p-sidebar-header"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[1,"p-sidebar-close-icon","pi","pi-times"]],template:function(t,n){1&t&&(e.F$t(),e.YNc(0,C,7,20,"div",0)),2&t&&e.Q6J("ngIf",n.visible)},directives:[c.O5,c.mk,c.PC,c.tP,T.H],styles:[".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto}.p-sidebar-header{display:flex;align-items:center;justify-content:flex-end}.p-sidebar-icon{display:flex;align-items:center;justify-content:center}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"],encapsulation:2,data:{animation:[(0,b.X$)("panelState",[(0,b.eR)("void => visible",[(0,b._7)(x)]),(0,b.eR)("visible => void",[(0,b._7)(w)])])]},changeDetection:0}),i})(),E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.ez,l.T]]}),i})();var L=s(1919),A=s(3622),_=s(7290),D=s(3362);function M(i,o){1&i&&e._UZ(0,"iframe",27)}const z=function(){return["/theming"]};let J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:358,vars:13,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","sidebar","stackblitz","sidebar-demo"],[1,"content-section","implementation"],[1,"card"],[3,"visible","baseZIndex","visibleChange"],["position","right",3,"visible","baseZIndex","visibleChange"],["position","top",3,"visible","baseZIndex","visibleChange"],["position","bottom",3,"visible","baseZIndex","visibleChange"],[3,"visible","fullScreen","baseZIndex","visibleChange"],["type","button","icon","pi pi-arrow-right",1,"p-mr-2",3,"click"],["type","button","icon","pi pi-arrow-left",1,"p-mr-2",3,"click"],["type","button","icon","pi pi-arrow-down",1,"p-mr-2",3,"click"],["type","button","icon","pi pi-arrow-up",1,"p-mr-2",3,"click"],["type","button","icon","pi pi-th-large",1,"p-mr-2",3,"click"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/sidebar","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-sidebar-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-sidebar-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Sidebar"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Sidebar is a panel component displayed as an overlay at the edges of the screen."),e.qZA(),e.qZA(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.TgZ(9,"p-sidebar",5),e.NdJ("visibleChange",function(r){return n.visibleSidebar1=r}),e.TgZ(10,"h3"),e._uU(11,"Left Sidebar"),e.qZA(),e.qZA(),e.TgZ(12,"p-sidebar",6),e.NdJ("visibleChange",function(r){return n.visibleSidebar2=r}),e.TgZ(13,"h3"),e._uU(14,"Right Sidebar"),e.qZA(),e.qZA(),e.TgZ(15,"p-sidebar",7),e.NdJ("visibleChange",function(r){return n.visibleSidebar3=r}),e.TgZ(16,"h3"),e._uU(17,"Top Sidebar"),e.qZA(),e.qZA(),e.TgZ(18,"p-sidebar",8),e.NdJ("visibleChange",function(r){return n.visibleSidebar4=r}),e.TgZ(19,"h3"),e._uU(20,"Bottom Sidebar"),e.qZA(),e.qZA(),e.TgZ(21,"p-sidebar",9),e.NdJ("visibleChange",function(r){return n.visibleSidebar5=r}),e.TgZ(22,"h3"),e._uU(23,"Full Screen"),e.qZA(),e.qZA(),e.TgZ(24,"p-button",10),e.NdJ("click",function(){return n.visibleSidebar1=!0}),e.qZA(),e.TgZ(25,"p-button",11),e.NdJ("click",function(){return n.visibleSidebar2=!0}),e.qZA(),e.TgZ(26,"p-button",12),e.NdJ("click",function(){return n.visibleSidebar3=!0}),e.qZA(),e.TgZ(27,"p-button",13),e.NdJ("click",function(){return n.visibleSidebar4=!0}),e.qZA(),e.TgZ(28,"p-button",14),e.NdJ("click",function(){return n.visibleSidebar5=!0}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div",15),e.TgZ(30,"p-tabView"),e.TgZ(31,"p-tabPanel",16),e.TgZ(32,"h5"),e._uU(33,"Import"),e.qZA(),e.TgZ(34,"app-code",17),e.IAx(),e._uU(35,"\nimport {SidebarModule} from 'primeng/sidebar';\n"),e.fQ9(),e.qZA(),e.TgZ(36,"h5"),e._uU(37,"Getting Started"),e.qZA(),e.TgZ(38,"p"),e._uU(39,"Sidebar is used as a container and visibility is controlled with visible property."),e.qZA(),e.TgZ(40,"app-code",18),e.IAx(),e._uU(41,'\n<p-sidebar [(visible)]="display">\n    Content\n</p-sidebar>\n\n<p-button type="text" (click)="display = true" icon="pi pi-plus" label="Show"></p-button>\n'),e.fQ9(),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Position"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the "),e.TgZ(46,"i"),e._uU(47,"position"),e.qZA(),e._uU(48," property."),e.qZA(),e.TgZ(49,"app-code",18),e.IAx(),e._uU(50,'\n<p-sidebar [(visible)]="display" position="right">\n    Content\n</p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Size"),e.qZA(),e.TgZ(53,"p"),e._uU(54,"Sidebar size can be changed using a fixed value or using one of the three predefined ones."),e.qZA(),e.TgZ(55,"app-code",18),e.IAx(),e._uU(56,'\n<p-sidebar [(visible)]="display" [style]="{width:\'30em\'}"></p-sidebar>\n\n<p-sidebar [(visible)]="display" styleClass="p-sidebar-sm"></p-sidebar>\n<p-sidebar [(visible)]="display" styleClass="p-sidebar-md"></p-sidebar>\n<p-sidebar [(visible)]="display" styleClass="p-sidebar-lg"></p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(57,"h5"),e._uU(58,"Animation Configuration"),e.qZA(),e.TgZ(59,"p"),e._uU(60,"Transition of the Sidebar open and hide animations can be customized using the transitionOptions property with a default value as "),e.TgZ(61,"b"),e._uU(62,"150ms cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e._uU(63,", example below disables the animation altogether."),e.qZA(),e.TgZ(64,"app-code",18),e.IAx(),e._uU(65,'\n<p-sidebar [(visible)]="display" [transitionOptions]="\'0ms\'"></p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Full Screen"),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Full screen mode allows the sidebar to cover whole screen."),e.qZA(),e.TgZ(70,"app-code",18),e.IAx(),e._uU(71,'\n<p-sidebar [(visible)]="display" [fullScreen]="true">\nContent\n</p-sidebar>\n'),e.fQ9(),e.qZA(),e.TgZ(72,"h5"),e._uU(73,"Properties"),e.qZA(),e.TgZ(74,"div",19),e.TgZ(75,"table",20),e.TgZ(76,"thead"),e.TgZ(77,"tr"),e.TgZ(78,"th"),e._uU(79,"Name"),e.qZA(),e.TgZ(80,"th"),e._uU(81,"Type"),e.qZA(),e.TgZ(82,"th"),e._uU(83,"Default"),e.qZA(),e.TgZ(84,"th"),e._uU(85,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(86,"tbody"),e.TgZ(87,"tr"),e.TgZ(88,"td"),e._uU(89,"visible"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"boolean"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"false"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"Specifies the visibility of the dialog."),e.qZA(),e.qZA(),e.TgZ(96,"tr"),e.TgZ(97,"td"),e._uU(98,"position"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"string"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"left"),e.qZA(),e.TgZ(103,"td"),e._uU(104,'Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".'),e.qZA(),e.qZA(),e.TgZ(105,"tr"),e.TgZ(106,"td"),e._uU(107,"fullScreen"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"boolean"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"false"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"Adds a close icon to the header to hide the dialog."),e.qZA(),e.qZA(),e.TgZ(114,"tr"),e.TgZ(115,"td"),e._uU(116,"appendTo"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"any"),e.qZA(),e.TgZ(119,"td"),e._uU(120,"null"),e.qZA(),e.TgZ(121,"td"),e._uU(122,'Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).'),e.qZA(),e.qZA(),e.TgZ(123,"tr"),e.TgZ(124,"td"),e._uU(125,"style"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"string"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"null"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"Inline style of the component."),e.qZA(),e.qZA(),e.TgZ(132,"tr"),e.TgZ(133,"td"),e._uU(134,"styleClass"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"string"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"null"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"Style class of the component."),e.qZA(),e.qZA(),e.TgZ(141,"tr"),e.TgZ(142,"td"),e._uU(143,"blockScroll"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"boolean"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"false"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"Whether to block scrolling of the document when sidebar is active."),e.qZA(),e.qZA(),e.TgZ(150,"tr"),e.TgZ(151,"td"),e._uU(152,"baseZIndex"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"number"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"0"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"Base zIndex value to use in layering."),e.qZA(),e.qZA(),e.TgZ(159,"tr"),e.TgZ(160,"td"),e._uU(161,"autoZIndex"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"boolean"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"true"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"Whether to automatically manage layering."),e.qZA(),e.qZA(),e.TgZ(168,"tr"),e.TgZ(169,"td"),e._uU(170,"modal"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"boolean"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"true"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"Whether an overlay mask is displayed behind the sidebar."),e.qZA(),e.qZA(),e.TgZ(177,"tr"),e.TgZ(178,"td"),e._uU(179,"dismissible"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"boolean"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"true"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"Whether to dismiss sidebar on click of the mask."),e.qZA(),e.qZA(),e.TgZ(186,"tr"),e.TgZ(187,"td"),e._uU(188,"showCloseIcon"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"boolean"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"true"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"Whether to display the close icon."),e.qZA(),e.qZA(),e.TgZ(195,"tr"),e.TgZ(196,"td"),e._uU(197,"transitionOptions"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"string"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"150ms cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"Transition options of the animation."),e.qZA(),e.qZA(),e.TgZ(204,"tr"),e.TgZ(205,"td"),e._uU(206,"ariaCloseLabel"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"string"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"close"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"Aria label of the close icon."),e.qZA(),e.qZA(),e.TgZ(213,"tr"),e.TgZ(214,"td"),e._uU(215,"closeOnEscape"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"boolean"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"true"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"Specifices if pressing escape key should hide the sidebar."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(222,"h5"),e._uU(223,"Events"),e.qZA(),e.TgZ(224,"div",19),e.TgZ(225,"table",20),e.TgZ(226,"thead"),e.TgZ(227,"tr"),e.TgZ(228,"th"),e._uU(229,"Name"),e.qZA(),e.TgZ(230,"th"),e._uU(231,"Parameters"),e.qZA(),e.TgZ(232,"th"),e._uU(233,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(234,"tbody"),e.TgZ(235,"tr"),e.TgZ(236,"td"),e._uU(237,"onShow"),e.qZA(),e.TgZ(238,"td"),e._uU(239,"event: Event object"),e.qZA(),e.TgZ(240,"td"),e._uU(241,"Callback to invoke when dialog is shown."),e.qZA(),e.qZA(),e.TgZ(242,"tr"),e.TgZ(243,"td"),e._uU(244,"onHide"),e.qZA(),e.TgZ(245,"td"),e._uU(246,"event: Event object"),e.qZA(),e.TgZ(247,"td"),e._uU(248,"Callback to invoke when dialog is hidden."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(249,"h5"),e._uU(250,"Templates"),e.qZA(),e.TgZ(251,"div",19),e.TgZ(252,"table",20),e.TgZ(253,"thead"),e.TgZ(254,"tr"),e.TgZ(255,"th"),e._uU(256,"Name"),e.qZA(),e.TgZ(257,"th"),e._uU(258,"Parameters"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(259,"tbody"),e.TgZ(260,"tr"),e.TgZ(261,"td"),e._uU(262,"content"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"-"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(265,"h5"),e._uU(266,"Styling"),e.qZA(),e.TgZ(267,"p"),e._uU(268,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(269,"a",21),e._uU(270,"theming page"),e.qZA(),e._uU(271,"."),e.qZA(),e.TgZ(272,"div",19),e.TgZ(273,"table",20),e.TgZ(274,"thead"),e.TgZ(275,"tr"),e.TgZ(276,"th"),e._uU(277,"Name"),e.qZA(),e.TgZ(278,"th"),e._uU(279,"Element"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(280,"tbody"),e.TgZ(281,"tr"),e.TgZ(282,"td"),e._uU(283,"p-sidebar"),e.qZA(),e.TgZ(284,"td"),e._uU(285,"Container element"),e.qZA(),e.qZA(),e.TgZ(286,"tr"),e.TgZ(287,"td"),e._uU(288,"p-sidebar-left"),e.qZA(),e.TgZ(289,"td"),e._uU(290,"Container element of left sidebar."),e.qZA(),e.qZA(),e.TgZ(291,"tr"),e.TgZ(292,"td"),e._uU(293,"p-sidebar-right"),e.qZA(),e.TgZ(294,"td"),e._uU(295,"Container element of right sidebar."),e.qZA(),e.qZA(),e.TgZ(296,"tr"),e.TgZ(297,"td"),e._uU(298,"p-sidebar-top"),e.qZA(),e.TgZ(299,"td"),e._uU(300,"Container element of top sidebar."),e.qZA(),e.qZA(),e.TgZ(301,"tr"),e.TgZ(302,"td"),e._uU(303,"p-sidebar-bottom"),e.qZA(),e.TgZ(304,"td"),e._uU(305,"Container element of bottom sidebar."),e.qZA(),e.qZA(),e.TgZ(306,"tr"),e.TgZ(307,"td"),e._uU(308,"p-sidebar-full"),e.qZA(),e.TgZ(309,"td"),e._uU(310,"Container element of a full screen sidebar."),e.qZA(),e.qZA(),e.TgZ(311,"tr"),e.TgZ(312,"td"),e._uU(313,"p-sidebar-active"),e.qZA(),e.TgZ(314,"td"),e._uU(315,"Container element when sidebar is visible."),e.qZA(),e.qZA(),e.TgZ(316,"tr"),e.TgZ(317,"td"),e._uU(318,"p-sidebar-close"),e.qZA(),e.TgZ(319,"td"),e._uU(320,"Close anchor element."),e.qZA(),e.qZA(),e.TgZ(321,"tr"),e.TgZ(322,"td"),e._uU(323,"p-sidebar-sm"),e.qZA(),e.TgZ(324,"td"),e._uU(325,"Small sized sidebar."),e.qZA(),e.qZA(),e.TgZ(326,"tr"),e.TgZ(327,"td"),e._uU(328,"p-sidebar-md"),e.qZA(),e.TgZ(329,"td"),e._uU(330,"Medium sized sidebar."),e.qZA(),e.qZA(),e.TgZ(331,"tr"),e.TgZ(332,"td"),e._uU(333,"p-sidebar-lg"),e.qZA(),e.TgZ(334,"td"),e._uU(335,"Large sized sidebar."),e.qZA(),e.qZA(),e.TgZ(336,"tr"),e.TgZ(337,"td"),e._uU(338,"p-sidebar-mask"),e.qZA(),e.TgZ(339,"td"),e._uU(340,"Modal layer of the sidebar."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(341,"h5"),e._uU(342,"Dependencies"),e.qZA(),e.TgZ(343,"p"),e._uU(344,"None."),e.qZA(),e.qZA(),e.TgZ(345,"p-tabPanel",22),e.TgZ(346,"a",23),e.TgZ(347,"span"),e._uU(348,"View on GitHub"),e.qZA(),e.qZA(),e.TgZ(349,"a",24),e.TgZ(350,"span"),e._uU(351,"Edit in StackBlitz"),e.qZA(),e.qZA(),e.TgZ(352,"app-code",18),e.IAx(),e._uU(353,'\n<p-sidebar [(visible)]="visibleSidebar1" [baseZIndex]="10000">\n    <h3>Left Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar2" position="right" [baseZIndex]="10000">\n    <h3>Right Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar3" position="top" [baseZIndex]="10000">\n    <h3>Top Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar4" position="bottom" [baseZIndex]="10000">\n    <h3>Bottom Sidebar</h3>\n</p-sidebar>\n\n<p-sidebar [(visible)]="visibleSidebar5" [fullScreen]="true" [baseZIndex]="10000">\n    <h3>Full Screen Sidebar</h3>\n</p-sidebar>\n\n<p-button type="button" class="p-mr-2" (click)="visibleSidebar1 = true" icon="pi pi-arrow-right"></p-button>\n<p-button type="button" class="p-mr-2" (click)="visibleSidebar2 = true" icon="pi pi-arrow-left"></p-button>\n<p-button type="button" class="p-mr-2" (click)="visibleSidebar3 = true" icon="pi pi-arrow-down"></p-button>\n<p-button type="button" class="p-mr-2" (click)="visibleSidebar4 = true" icon="pi pi-arrow-up"></p-button>\n<p-button type="button" class="p-mr-2" (click)="visibleSidebar5 = true" icon="pi pi-th-large"></p-button>\n'),e.fQ9(),e.qZA(),e.TgZ(354,"app-code",17),e.IAx(),e._uU(355,"\nexport class SidebarDemo {\n\n    visibleSidebar1;\n\n    visibleSidebar2;\n\n    visibleSidebar3;\n\n    visibleSidebar4;\n\n    visibleSidebar5;\n\n}\n"),e.fQ9(),e.qZA(),e.qZA(),e.TgZ(356,"p-tabPanel",25),e.YNc(357,M,1,0,"ng-template",26),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(9),e.Q6J("visible",n.visibleSidebar1)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar2)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar3)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar4)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",n.visibleSidebar5)("fullScreen",!0)("baseZIndex",1e4),e.xp6(248),e.Q6J("routerLink",e.DdM(12,z)))},directives:[m.P,I,L.zx,A.xf,A.x4,_.h,g.yS,D.jx],encapsulation:2}),i})(),O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild([{path:"",component:J}])],g.Bz]}),i})();var Q=s(5472),N=s(2340);let B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.ez,O,d.u5,E,Q.hJ,N.LU,m.L,_.a]]}),i})()}}]);