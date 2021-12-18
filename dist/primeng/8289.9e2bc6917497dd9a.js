"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[8289],{7290:(m,l,o)=>{o.d(l,{h:()=>s,a:()=>A});var p=o(6019),n=o(3668);const c=["code"],t=["*"];let s=(()=>{class Z{constructor(i){this.el=i,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return Z.\u0275fac=function(i){return new(i||Z)(n.Y36(n.SBq))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["app-code"]],viewQuery:function(i,g){if(1&i&&n.Gf(c,5),2&i){let h;n.iGM(h=n.CRH())&&(g.codeViewChild=h.first)}},inputs:{lang:"lang"},ngContentSelectors:t,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(i,g){1&i&&(n.F$t(),n.TgZ(0,"pre",0),n.TgZ(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA(),n.qZA()),2&i&&n.Q6J("ngClass","language-"+g.lang)},directives:[p.mk],encapsulation:2}),Z})(),A=(()=>{class Z{}return Z.\u0275fac=function(i){return new(i||Z)},Z.\u0275mod=n.oAB({type:Z}),Z.\u0275inj=n.cJS({imports:[[p.ez]]}),Z})()},8289:(m,l,o)=>{o.r(l),o.d(l,{InputSwitchDemoModule:()=>w});var p=o(6019),n=o(7537),c=o(1120),t=o(3668),s=o(2060),A=o(2905),Z=o(3622),u=o(7290),i=o(3362);function g(e,d){1&e&&t._UZ(0,"iframe",18)}const h=function(){return["/theming"]};let q=(()=>{class e{constructor(){this.checked1=!1,this.checked2=!0}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:219,vars:4,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","inputswitch","stackblitz","inputswitch-demo"],[1,"content-section","implementation"],[1,"card"],[3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputswitch","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-inputswitch-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-inputswitch-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"InputSwitch"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"InputSwitch is used to select a boolean value."),t.qZA(),t.qZA(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3),t.TgZ(8,"div",4),t.TgZ(9,"h5"),t._uU(10,"Basic"),t.qZA(),t.TgZ(11,"p-inputSwitch",5),t.NdJ("ngModelChange",function(T){return r.checked1=T}),t.qZA(),t.TgZ(12,"h5"),t._uU(13,"PreSelection"),t.qZA(),t.TgZ(14,"p-inputSwitch",5),t.NdJ("ngModelChange",function(T){return r.checked2=T}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"p-tabView"),t.TgZ(17,"p-tabPanel",7),t.TgZ(18,"h5"),t._uU(19,"Import"),t.qZA(),t.TgZ(20,"app-code",8),t.IAx(),t._uU(21,"\nimport {InputSwitchModule} from 'primeng/inputswitch';\n"),t.fQ9(),t.qZA(),t.TgZ(22,"h5"),t._uU(23,"Getting Started"),t.qZA(),t.TgZ(24,"p"),t._uU(25,"Two-way binding to a boolean property is defined using the standard ngModel directive."),t.qZA(),t.TgZ(26,"app-code",9),t.IAx(),t._uU(27,'\n<p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>\n'),t.fQ9(),t.qZA(),t.TgZ(28,"app-code",8),t.IAx(),t._uU(29,"\nexport class ModelComponent {\n\n    checked: boolean;\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(30,"p"),t._uU(31,"As model is two-way binding enabled, setting the bound value as true displays the state as checked by default."),t.qZA(),t.TgZ(32,"app-code",8),t.IAx(),t._uU(33,"\nexport class ModelComponent {\n\n   checked: boolean = true;\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(34,"h5"),t._uU(35,"Model Driven Forms"),t.qZA(),t.TgZ(36,"p"),t._uU(37,"InputSwitch can be used in a model driven form as well."),t.qZA(),t.TgZ(38,"app-code",9),t.IAx(),t._uU(39,'\n<p-inputSwitch formControlName="enabled"></p-inputSwitch>\n'),t.fQ9(),t.qZA(),t.TgZ(40,"h5"),t._uU(41,"Properties"),t.qZA(),t.TgZ(42,"div",10),t.TgZ(43,"table",11),t.TgZ(44,"thead"),t.TgZ(45,"tr"),t.TgZ(46,"th"),t._uU(47,"Name"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Type"),t.qZA(),t.TgZ(50,"th"),t._uU(51,"Default"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Description"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"tbody"),t.TgZ(55,"tr"),t.TgZ(56,"td"),t._uU(57,"style"),t.qZA(),t.TgZ(58,"td"),t._uU(59,"string"),t.qZA(),t.TgZ(60,"td"),t._uU(61,"null"),t.qZA(),t.TgZ(62,"td"),t._uU(63,"Inline style of the component."),t.qZA(),t.qZA(),t.TgZ(64,"tr"),t.TgZ(65,"td"),t._uU(66,"styleClass"),t.qZA(),t.TgZ(67,"td"),t._uU(68,"string"),t.qZA(),t.TgZ(69,"td"),t._uU(70,"null"),t.qZA(),t.TgZ(71,"td"),t._uU(72,"Style class of the component."),t.qZA(),t.qZA(),t.TgZ(73,"tr"),t.TgZ(74,"td"),t._uU(75,"tabindex"),t.qZA(),t.TgZ(76,"td"),t._uU(77,"number"),t.qZA(),t.TgZ(78,"td"),t._uU(79,"null"),t.qZA(),t.TgZ(80,"td"),t._uU(81,"Index of the element in tabbing order."),t.qZA(),t.qZA(),t.TgZ(82,"tr"),t.TgZ(83,"td"),t._uU(84,"inputId"),t.qZA(),t.TgZ(85,"td"),t._uU(86,"string"),t.qZA(),t.TgZ(87,"td"),t._uU(88,"null"),t.qZA(),t.TgZ(89,"td"),t._uU(90,"Identifier of the input element."),t.qZA(),t.qZA(),t.TgZ(91,"tr"),t.TgZ(92,"td"),t._uU(93,"name"),t.qZA(),t.TgZ(94,"td"),t._uU(95,"string"),t.qZA(),t.TgZ(96,"td"),t._uU(97,"null"),t.qZA(),t.TgZ(98,"td"),t._uU(99,"Name of the input element."),t.qZA(),t.qZA(),t.TgZ(100,"tr"),t.TgZ(101,"td"),t._uU(102,"ariaLabelledBy"),t.qZA(),t.TgZ(103,"td"),t._uU(104,"string"),t.qZA(),t.TgZ(105,"td"),t._uU(106,"null"),t.qZA(),t.TgZ(107,"td"),t._uU(108,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),t.qZA(),t.qZA(),t.TgZ(109,"tr"),t.TgZ(110,"td"),t._uU(111,"disabled"),t.qZA(),t.TgZ(112,"td"),t._uU(113,"boolean"),t.qZA(),t.TgZ(114,"td"),t._uU(115,"false"),t.qZA(),t.TgZ(116,"td"),t._uU(117,"When present, it specifies that the element should be disabled."),t.qZA(),t.qZA(),t.TgZ(118,"tr"),t.TgZ(119,"td"),t._uU(120,"readonly"),t.qZA(),t.TgZ(121,"td"),t._uU(122,"boolean"),t.qZA(),t.TgZ(123,"td"),t._uU(124,"false"),t.qZA(),t.TgZ(125,"td"),t._uU(126,"When present, it specifies that the component cannot be edited."),t.qZA(),t.qZA(),t.TgZ(127,"tr"),t.TgZ(128,"td"),t._uU(129,"trueValue"),t.qZA(),t.TgZ(130,"td"),t._uU(131,"any"),t.qZA(),t.TgZ(132,"td"),t._uU(133,"null"),t.qZA(),t.TgZ(134,"td"),t._uU(135,"Value in checked state."),t.qZA(),t.qZA(),t.TgZ(136,"tr"),t.TgZ(137,"td"),t._uU(138,"falseValue"),t.qZA(),t.TgZ(139,"td"),t._uU(140,"any"),t.qZA(),t.TgZ(141,"td"),t._uU(142,"null"),t.qZA(),t.TgZ(143,"td"),t._uU(144,"Value in unchecked state."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(145,"h5"),t._uU(146,"Events"),t.qZA(),t.TgZ(147,"div",10),t.TgZ(148,"table",11),t.TgZ(149,"thead"),t.TgZ(150,"tr"),t.TgZ(151,"th"),t._uU(152,"Name"),t.qZA(),t.TgZ(153,"th"),t._uU(154,"Parameters"),t.qZA(),t.TgZ(155,"th"),t._uU(156,"Description"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(157,"tbody"),t.TgZ(158,"tr"),t.TgZ(159,"td"),t._uU(160,"onChange"),t.qZA(),t.TgZ(161,"td"),t._uU(162,"event.originalEvent: browser event"),t._UZ(163,"br"),t._uU(164," event.checked: checked state as a boolean"),t.qZA(),t.TgZ(165,"td"),t._uU(166,"Callback to invoke on state change."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(167,"app-code",9),t.IAx(),t._uU(168,'\n<p-inputSwitch (onChange)="handleChange($event)" [(ngModel)]="val"></p-inputSwitch>\n'),t.fQ9(),t.qZA(),t.TgZ(169,"app-code",8),t.IAx(),t._uU(170,"\nexport class ModelComponent {\n\n    handleChange(e) {\n        let isChecked = e.checked;\n    }\n}\n"),t.fQ9(),t.qZA(),t.TgZ(171,"h5"),t._uU(172,"Styling"),t.qZA(),t.TgZ(173,"p"),t._uU(174,"Following is the list of structural style classes, for theming classes visit "),t.TgZ(175,"a",12),t._uU(176,"theming page"),t.qZA(),t._uU(177,"."),t.qZA(),t.TgZ(178,"div",10),t.TgZ(179,"table",11),t.TgZ(180,"thead"),t.TgZ(181,"tr"),t.TgZ(182,"th"),t._uU(183,"Name"),t.qZA(),t.TgZ(184,"th"),t._uU(185,"Element"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(186,"tbody"),t.TgZ(187,"tr"),t.TgZ(188,"td"),t._uU(189,"p-inputswitch"),t.qZA(),t.TgZ(190,"td"),t._uU(191,"Container element."),t.qZA(),t.qZA(),t.TgZ(192,"tr"),t.TgZ(193,"td"),t._uU(194,"p-inputswitch-checked"),t.qZA(),t.TgZ(195,"td"),t._uU(196,"Container element in active state."),t.qZA(),t.qZA(),t.TgZ(197,"tr"),t.TgZ(198,"td"),t._uU(199,"p-inputswitch-slider"),t.qZA(),t.TgZ(200,"td"),t._uU(201,"Slider element behind the handle."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(202,"h5"),t._uU(203,"Dependencies"),t.qZA(),t.TgZ(204,"p"),t._uU(205,"None."),t.qZA(),t.qZA(),t.TgZ(206,"p-tabPanel",13),t.TgZ(207,"a",14),t.TgZ(208,"span"),t._uU(209,"View on GitHub"),t.qZA(),t.qZA(),t.TgZ(210,"a",15),t.TgZ(211,"span"),t._uU(212,"Edit in StackBlitz"),t.qZA(),t.qZA(),t.TgZ(213,"app-code",9),t.IAx(),t._uU(214,'\n<h5>Basic</h5>\n<p-inputSwitch [(ngModel)]="checked1"></p-inputSwitch>\n\n<h5>Preselection</h5>\n<p-inputSwitch [(ngModel)]="checked2"></p-inputSwitch>\n'),t.fQ9(),t.qZA(),t.TgZ(215,"app-code",8),t.IAx(),t._uU(216,"\nexport class InputSwitchDemo {\n\n    checked1: boolean = false;\n\n    checked2: boolean = true;\n}\n"),t.fQ9(),t.qZA(),t.qZA(),t.TgZ(217,"p-tabPanel",16),t.YNc(218,g,1,0,"ng-template",17),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(11),t.Q6J("ngModel",r.checked1),t.xp6(3),t.Q6J("ngModel",r.checked2),t.xp6(161),t.Q6J("routerLink",t.DdM(3,h)))},directives:[s.P,A.Ql,n.JJ,n.On,Z.xf,Z.x4,u.h,c.yS,i.jx],encapsulation:2}),e})(),U=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild([{path:"",component:q}])],c.Bz]}),e})();var _=o(1081),f=o(2340);let w=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,n.u5,U,_.Iu,f.LU,s.L,u.a]]}),e})()}}]);