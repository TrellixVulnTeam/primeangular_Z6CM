"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[9683],{7290:(A,p,n)=>{n.d(p,{h:()=>c,a:()=>e});var d=n(6019),a=n(3668);const m=["code"],Z=["*"];let c=(()=>{class i{constructor(o){this.el=o,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return i.\u0275fac=function(o){return new(o||i)(a.Y36(a.SBq))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-code"]],viewQuery:function(o,g){if(1&o&&a.Gf(m,5),2&o){let u;a.iGM(u=a.CRH())&&(g.codeViewChild=u.first)}},inputs:{lang:"lang"},ngContentSelectors:Z,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(o,g){1&o&&(a.F$t(),a.TgZ(0,"pre",0),a.TgZ(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA(),a.qZA()),2&o&&a.Q6J("ngClass","language-"+g.lang)},directives:[d.mk],encapsulation:2}),i})(),e=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[d.ez]]}),i})()},9683:(A,p,n)=>{n.r(p),n.d(p,{StyleClassDemoModule:()=>q});var d=n(6019),a=n(7537),m=n(5472),Z=n(4466),c=n(1120),e=n(3668),i=n(1919),s=n(3475);let o=(()=>{class t{constructor(l,C){this.el=l,this.renderer=C}ngAfterViewInit(){this.eventListener=this.renderer.listen(this.el.nativeElement,"click",()=>{this.target=this.resolveTarget(),this.toggleClass?s.p.hasClass(this.target,this.toggleClass)?s.p.removeClass(this.target,this.toggleClass):s.p.addClass(this.target,this.toggleClass):null===this.target.offsetParent?this.enter():this.leave()})}enter(){this.enterActiveClass?this.animating||(this.animating=!0,"slidedown"===this.enterActiveClass&&(this.target.style.height="0px",s.p.removeClass(this.target,"hidden"),this.target.style.maxHeight=this.target.scrollHeight+"px",s.p.addClass(this.target,"hidden"),this.target.style.height=""),s.p.addClass(this.target,this.enterActiveClass),this.enterClass&&s.p.removeClass(this.target,this.enterClass),this.enterListener=this.renderer.listen(this.target,"animationend",()=>{s.p.removeClass(this.target,this.enterActiveClass),this.enterToClass&&s.p.addClass(this.target,this.enterToClass),this.enterListener(),"slidedown"===this.enterActiveClass&&(this.target.style.maxHeight=""),this.animating=!1})):(this.enterClass&&s.p.removeClass(this.target,this.enterClass),this.enterToClass&&s.p.addClass(this.target,this.enterToClass)),this.hideOnOutsideClick&&this.bindDocumentListener()}leave(){this.leaveActiveClass?this.animating||(this.animating=!0,s.p.addClass(this.target,this.leaveActiveClass),this.leaveClass&&s.p.removeClass(this.target,this.leaveClass),this.leaveListener=this.renderer.listen(this.target,"animationend",()=>{s.p.removeClass(this.target,this.leaveActiveClass),this.leaveToClass&&s.p.addClass(this.target,this.leaveToClass),this.leaveListener(),this.animating=!1})):(this.leaveClass&&s.p.removeClass(this.target,this.leaveClass),this.leaveToClass&&s.p.addClass(this.target,this.leaveToClass)),this.hideOnOutsideClick&&this.unbindDocumentListener()}resolveTarget(){if(this.target)return this.target;switch(this.selector){case"@next":return this.el.nativeElement.nextElementSibling;case"@prev":return this.el.nativeElement.previousElementSibling;case"@parent":return this.el.nativeElement.parentElement;case"@grandparent":return this.el.nativeElement.parentElement.parentElement;default:return document.querySelector(this.selector)}}bindDocumentListener(){this.documentListener||(this.documentListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"click",l=>{"static"===getComputedStyle(this.target).getPropertyValue("position")?this.unbindDocumentListener():!this.el.nativeElement.isSameNode(l.target)&&!this.el.nativeElement.contains(l.target)&&!this.target.contains(l.target)&&this.leave()}))}unbindDocumentListener(){this.documentListener&&(this.documentListener(),this.documentListener=null)}ngOnDestroy(){this.target=null,this.eventListener&&this.eventListener(),this.unbindDocumentListener()}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(e.SBq),e.Y36(e.Qsj))},t.\u0275dir=e.lG2({type:t,selectors:[["","pStyleClass",""]],hostAttrs:[1,"p-element"],inputs:{selector:["pStyleClass","selector"],enterClass:"enterClass",enterActiveClass:"enterActiveClass",enterToClass:"enterToClass",leaveClass:"leaveClass",leaveActiveClass:"leaveActiveClass",leaveToClass:"leaveToClass",hideOnOutsideClick:"hideOnOutsideClick",toggleClass:"toggleClass"}}),t})(),g=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez]]}),t})();var u=n(3622),h=n(7290);let T=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:190,vars:0,consts:[[1,"content-section","introduction"],[1,"feature-intro"],[1,"content-section","implementation"],[1,"card"],["pButton","","label","Toggle p-disabled","pStyleClass","@next","toggleClass","p-disabled"],["type","text","pInputText","",1,"p-d-block","p-mt-3"],["pButton","","label","Show","pStyleClass",".box","enterClass","p-d-none","enterActiveClass","my-fadein",1,"p-mr-2"],["pButton","","label","Hide","pStyleClass",".box","leaveActiveClass","my-fadeout","leaveToClass","p-d-none"],[1,"box","p-d-none"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/styleclass","target","_blank",1,"btn-viewsource"]],template:function(l,C){1&l&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"StyleClass"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",2),e.TgZ(7,"div",3),e.TgZ(8,"h5"),e._uU(9,"ToggleClass"),e.qZA(),e._UZ(10,"button",4),e._UZ(11,"input",5),e.TgZ(12,"h5"),e._uU(13,"Animations"),e.qZA(),e._UZ(14,"button",6),e._UZ(15,"button",7),e.TgZ(16,"div",8),e._uU(17,"Content"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",9),e.TgZ(19,"p-tabView"),e.TgZ(20,"p-tabPanel",10),e.TgZ(21,"h5"),e._uU(22,"Import"),e.qZA(),e.TgZ(23,"app-code",11),e.IAx(),e._uU(24,"\nimport {StyleClassModule} from 'primeng/styleclass';\n"),e.fQ9(),e.qZA(),e.TgZ(25,"h5"),e._uU(26,"Getting Started"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"StyleClass has two modes, "),e.TgZ(29,"i"),e._uU(30,"toggleClass"),e.qZA(),e._uU(31," to simply add-remove a class and enter/leave animations."),e.qZA(),e.TgZ(32,"p"),e.TgZ(33,"b"),e._uU(34,"ToggleClass"),e.qZA(),e.qZA(),e.TgZ(35,"app-code",12),e.IAx(),e._uU(36,'\n<button pButton label="Toggle" pStyleClass="@next" toggleClass="p-disabled"></button>\n<input type="text" pInputText class="p-d-block p-mt-3">\n'),e.fQ9(),e.qZA(),e.TgZ(37,"p"),e.TgZ(38,"b"),e._uU(39,"Enter/Leave Animation"),e.qZA(),e.qZA(),e.TgZ(40,"app-code",12),e.IAx(),e._uU(41,'\n<button pButton label="Show" class="p-mr-2" pStyleClass=".box" enterClass="p-d-none" enterActiveClass="my-fadein"></button>\n<button pButton label="Hide" pStyleClass=".box" leaveActiveClass="my-fadeout" leaveToClass="p-d-none"></button>\n<div class="box p-d-none">Content</div>\n'),e.fQ9(),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Target"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Target element is defined with the "),e.TgZ(46,"i"),e._uU(47,"pStyleClass"),e.qZA(),e._uU(48," attribute that can either be a valid css query or one of the keywords below."),e.qZA(),e.TgZ(49,"div",13),e.TgZ(50,"table",14),e.TgZ(51,"thead"),e.TgZ(52,"tr"),e.TgZ(53,"th"),e._uU(54,"Name"),e.qZA(),e.TgZ(55,"th"),e._uU(56,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(57,"tbody"),e.TgZ(58,"tr"),e.TgZ(59,"td"),e._uU(60,"@next"),e.qZA(),e.TgZ(61,"td"),e._uU(62,"Next element."),e.qZA(),e.qZA(),e.TgZ(63,"tr"),e.TgZ(64,"td"),e._uU(65,"@prev"),e.qZA(),e.TgZ(66,"td"),e._uU(67,"Previous element."),e.qZA(),e.qZA(),e.TgZ(68,"tr"),e.TgZ(69,"td"),e._uU(70,"@parent"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"Parent element."),e.qZA(),e.qZA(),e.TgZ(73,"tr"),e.TgZ(74,"td"),e._uU(75,"@grandparent"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"Parent element of the parent."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(78,"h5"),e._uU(79,"Properties"),e.qZA(),e.TgZ(80,"div",13),e.TgZ(81,"table",14),e.TgZ(82,"thead"),e.TgZ(83,"tr"),e.TgZ(84,"th"),e._uU(85,"Name"),e.qZA(),e.TgZ(86,"th"),e._uU(87,"Type"),e.qZA(),e.TgZ(88,"th"),e._uU(89,"Default"),e.qZA(),e.TgZ(90,"th"),e._uU(91,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(92,"tbody"),e.TgZ(93,"tr"),e.TgZ(94,"td"),e._uU(95,"pStyleClass"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"string"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"selector"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"Selector to define the target element."),e.qZA(),e.qZA(),e.TgZ(102,"tr"),e.TgZ(103,"td"),e._uU(104,"enterClass"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"string"),e.qZA(),e.TgZ(107,"td"),e._uU(108,"null"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"Class to add when item begins to get displayed."),e.qZA(),e.qZA(),e.TgZ(111,"tr"),e.TgZ(112,"td"),e._uU(113,"enterActiveClass"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"string"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"null"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"Class to add during enter animation."),e.qZA(),e.qZA(),e.TgZ(120,"tr"),e.TgZ(121,"td"),e._uU(122,"enterToClass"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"string"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"null"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"Class to add when enter animation is completed."),e.qZA(),e.qZA(),e.TgZ(129,"tr"),e.TgZ(130,"td"),e._uU(131,"leaveClass"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"string"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"null"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"Class to add when item begins to get hidden."),e.qZA(),e.qZA(),e.TgZ(138,"tr"),e.TgZ(139,"td"),e._uU(140,"leaveActiveClass"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"string"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"null"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"Class to add during leave animation"),e.qZA(),e.qZA(),e.TgZ(147,"tr"),e.TgZ(148,"td"),e._uU(149,"leaveToClass"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"string"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"null"),e.qZA(),e.TgZ(154,"td"),e._uU(155,"Class to add when leave animation is completed."),e.qZA(),e.qZA(),e.TgZ(156,"tr"),e.TgZ(157,"td"),e._uU(158,"hideOnOutsideClick"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"string"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"null"),e.qZA(),e.TgZ(163,"td"),e._uU(164,"Whether to trigger leave animation when outside of the element is clicked."),e.qZA(),e.qZA(),e.TgZ(165,"tr"),e.TgZ(166,"td"),e._uU(167,"toggleClass"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"string"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"null"),e.qZA(),e.TgZ(172,"td"),e._uU(173,"Adds or removes a class when no enter-leave animation is required."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(174,"h5"),e._uU(175,"Events"),e.qZA(),e.TgZ(176,"p"),e._uU(177,"Directive has no events."),e.qZA(),e.TgZ(178,"h5"),e._uU(179,"Dependencies"),e.qZA(),e.TgZ(180,"p"),e._uU(181,"None."),e.qZA(),e.qZA(),e.TgZ(182,"p-tabPanel",15),e.TgZ(183,"a",16),e.TgZ(184,"span"),e._uU(185,"View on GitHub"),e.qZA(),e.qZA(),e.TgZ(186,"app-code",12),e.IAx(),e._uU(187,'\n<h5>ToggleClass</h5>\n<button pButton label="Toggle" pStyleClass="@next" toggleClass="p-disabled"></button>\n<input type="text" pInputText class="p-d-block p-mt-3">\n\n<h5>Animations</h5>\n<button pButton label="Show" class="p-mr-2" pStyleClass=".box" enterClass="p-d-none" enterActiveClass="my-fadein"></button>\n<button pButton label="Hide" pStyleClass=".box" leaveActiveClass="my-fadeout" leaveToClass="p-d-none"></button>\n<div class="box p-d-none">Content</div>\n'),e.fQ9(),e.qZA(),e.TgZ(188,"app-code",11),e.IAx(),e._uU(189,"\nimport {Component} from '@angular/core';\n\n@Component({\n    templateUrl: './styleclassdemo.html',\n    styles:[`\n        .box {\n            background-color: var(--green-500);\n            color: #ffffff;\n            width: 100px;\n            height: 100px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-top: 1rem;\n            padding-bottom: 1rem;\n            border-radius: 4px;\n            margin-top: 1rem;\n            font-weight: bold;\n            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        }\n\n        @keyframes my-fadein {\n            0%   { opacity: 0; }\n            100% { opacity: 1; }\n        }\n\n        @keyframes my-fadeout {\n            0%   { opacity: 1; }\n            100% { opacity: 0; }\n        }\n\n        .my-fadein {\n            animation: my-fadein 150ms linear;\n        }\n\n        .my-fadeout {\n            animation: my-fadeout 150ms linear;\n        }\n    `],\n})\nexport class StyleClassDemo {\n\n}\n"),e.fQ9(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[i.Hq,o,Z.o,u.xf,u.x4,h.h],styles:[".box[_ngcontent-%COMP%]{background-color:var(--green-500);color:#fff;width:100px;height:100px;display:flex;align-items:center;justify-content:center;padding-top:1rem;padding-bottom:1rem;border-radius:4px;margin-top:1rem;font-weight:bold;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}@keyframes my-fadein{0%{opacity:0}to{opacity:1}}@keyframes my-fadeout{0%{opacity:1}to{opacity:0}}.my-fadein[_ngcontent-%COMP%]{animation:my-fadein .15s linear}.my-fadeout[_ngcontent-%COMP%]{animation:my-fadeout .15s linear}"]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild([{path:"",component:T}])],c.Bz]}),t})();var f=n(2340),y=n(2060);let q=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,v,a.u5,m.hJ,Z.j,g,h.a,f.LU,y.L]]}),t})()}}]);