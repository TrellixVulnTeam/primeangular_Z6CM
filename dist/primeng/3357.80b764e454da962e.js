"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[3357],{8151:(A,m,s)=>{s.d(m,{Qy:()=>n.Qy});var n=s(6153)},6153:(A,m,s)=>{s.d(m,{UN:()=>b,Qy:()=>q});var n=s(3668),u=s(6019),r=s(7550),t=s(5989),f=s(7537),T=s(1197);function c(l,o){if(1&l&&n._UZ(0,"span",8),2&l){const e=n.oxw(2).$implicit;n.Tol(e.icon),n.Q6J("ngClass","p-button-icon p-button-icon-left")}}function g(l,o){if(1&l&&(n.ynx(0),n.YNc(1,c,1,3,"span",6),n.TgZ(2,"span",7),n._uU(3),n.qZA(),n.BQk()),2&l){const e=n.oxw().$implicit,i=n.oxw();n.xp6(1),n.Q6J("ngIf",e.icon),n.xp6(2),n.Oqu(i.getOptionLabel(e))}}function p(l,o){1&l&&n.GkF(0)}const _=function(l,o){return{$implicit:l,index:o}};function h(l,o){if(1&l&&n.YNc(0,p,1,0,"ng-container",9),2&l){const e=n.oxw(),i=e.$implicit,a=e.index,d=n.oxw();n.Q6J("ngTemplateOutlet",d.itemTemplate)("ngTemplateOutletContext",n.WLB(2,_,i,a))}}const v=function(l,o,e){return{"p-highlight":l,"p-disabled":o,"p-button-icon-only":e}};function U(l,o){if(1&l){const e=n.EpF();n.TgZ(0,"div",2,3),n.NdJ("click",function(a){const d=n.CHM(e),Z=d.$implicit,C=d.index;return n.oxw().onItemClick(a,Z,C)})("keydown.enter",function(a){const d=n.CHM(e),Z=d.$implicit,C=d.index;return n.oxw().onItemClick(a,Z,C)})("blur",function(){return n.CHM(e),n.oxw().onBlur()}),n.YNc(2,g,4,2,"ng-container",4),n.YNc(3,h,1,5,"ng-template",null,5,n.W1O),n.qZA()}if(2&l){const e=o.$implicit,i=n.MAs(4),a=n.oxw();n.Tol(e.styleClass),n.Q6J("ngClass",n.kEZ(10,v,a.isSelected(e),a.disabled||a.isOptionDisabled(e),e.icon&&!a.getOptionLabel(e))),n.uIk("aria-pressed",a.isSelected(e))("title",e.title)("aria-label",e.label)("tabindex",a.disabled?null:a.tabindex)("aria-labelledby",a.getOptionLabel(e)),n.xp6(2),n.Q6J("ngIf",!a.itemTemplate)("ngIfElse",i)}}const y={provide:f.JU,useExisting:(0,n.Gpc)(()=>b),multi:!0};let b=(()=>{class l{constructor(e){this.cd=e,this.tabindex=0,this.onOptionClick=new n.vpe,this.onChange=new n.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}getOptionLabel(e){return this.optionLabel?r.gb.resolveFieldData(e,this.optionLabel):null!=e.label?e.label:e}getOptionValue(e){return this.optionValue?r.gb.resolveFieldData(e,this.optionValue):this.optionLabel||void 0===e.value?e:e.value}isOptionDisabled(e){return this.optionDisabled?r.gb.resolveFieldData(e,this.optionDisabled):void 0!==e.disabled&&e.disabled}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onItemClick(e,i,a){this.disabled||this.isOptionDisabled(i)||(this.multiple?this.isSelected(i)?this.removeOption(i):this.value=[...this.value||[],this.getOptionValue(i)]:this.value=this.getOptionValue(i),this.onOptionClick.emit({originalEvent:e,option:i,index:a}),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}))}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(i=>!r.gb.equals(i,this.getOptionValue(e),this.dataKey))}isSelected(e){let i=!1,a=this.getOptionValue(e);if(this.multiple){if(this.value)for(let d of this.value)if(r.gb.equals(d,a,this.dataKey)){i=!0;break}}else i=r.gb.equals(this.getOptionValue(e),this.value,this.dataKey);return i}}return l.\u0275fac=function(e){return new(e||l)(n.Y36(n.sBO))},l.\u0275cmp=n.Xpm({type:l,selectors:[["p-selectButton"]],contentQueries:function(e,i,a){if(1&e&&n.Suo(a,n.Rgc,5),2&e){let d;n.iGM(d=n.CRH())&&(i.itemTemplate=d.first)}},hostAttrs:[1,"p-element"],inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",tabindex:"tabindex",multiple:"multiple",style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",dataKey:"dataKey"},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[n._Bn([y])],decls:2,vars:5,consts:[["role","group",3,"ngClass","ngStyle"],["class","p-button p-component","role","button","pRipple","",3,"class","ngClass","click","keydown.enter","blur",4,"ngFor","ngForOf"],["role","button","pRipple","",1,"p-button","p-component",3,"ngClass","click","keydown.enter","blur"],["btn",""],[4,"ngIf","ngIfElse"],["customcontent",""],[3,"ngClass","class",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n.YNc(1,U,5,14,"div",1),n.qZA()),2&e&&(n.Tol(i.styleClass),n.Q6J("ngClass","p-selectbutton p-buttonset p-component")("ngStyle",i.style),n.xp6(1),n.Q6J("ngForOf",i.options))},directives:[u.mk,u.PC,u.sg,T.H,u.O5,u.tP],styles:[".p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}\n"],encapsulation:2,changeDetection:0}),l})(),q=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[u.ez,t.T]]}),l})()},7290:(A,m,s)=>{s.d(m,{h:()=>f,a:()=>T});var n=s(6019),u=s(3668);const r=["code"],t=["*"];let f=(()=>{class c{constructor(p){this.el=p,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return c.\u0275fac=function(p){return new(p||c)(u.Y36(u.SBq))},c.\u0275cmp=u.Xpm({type:c,selectors:[["app-code"]],viewQuery:function(p,_){if(1&p&&u.Gf(r,5),2&p){let h;u.iGM(h=u.CRH())&&(_.codeViewChild=h.first)}},inputs:{lang:"lang"},ngContentSelectors:t,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(p,_){1&p&&(u.F$t(),u.TgZ(0,"pre",0),u.TgZ(1,"code",null,1),u.Hsn(3),u._uU(4,"\n"),u.qZA(),u.qZA()),2&p&&u.Q6J("ngClass","language-"+_.lang)},directives:[n.mk],encapsulation:2}),c})(),T=(()=>{class c{}return c.\u0275fac=function(p){return new(p||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[[n.ez]]}),c})()},3357:(A,m,s)=>{s.r(m),s.d(m,{SelectButtonDemoModule:()=>l});var n=s(6019),u=s(7537),r=s(1120),t=s(3668),f=s(2060),T=s(6153),c=s(3622),g=s(7290),p=s(3362);function _(o,e){1&o&&t._UZ(0,"i"),2&o&&t.Tol(e.$implicit.icon)}function h(o,e){1&o&&t._UZ(0,"iframe",19)}let v=(()=>{class o{constructor(){this.value1="off",this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],this.justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}]}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:245,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","selectbutton","stackblitz","selectbutton-demo"],[1,"content-section","implementation"],[1,"card"],["optionLabel","label","optionValue","value",3,"options","ngModel","ngModelChange"],["multiple","multiple","optionLabel","name","optionValue","value",3,"options","ngModel","ngModelChange"],["optionLabel","icon",3,"options","ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-selectbutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-selectbutton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"SelectButton"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"SelectButton is a form component to choose a value from a list of options using button elements."),t.qZA(),t.qZA(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3),t.TgZ(8,"div",4),t.TgZ(9,"h5"),t._uU(10,"Single Selection"),t.qZA(),t.TgZ(11,"p-selectButton",5),t.NdJ("ngModelChange",function(Z){return a.value1=Z}),t.qZA(),t.TgZ(12,"h5"),t._uU(13,"Multiple Selection"),t.qZA(),t.TgZ(14,"p-selectButton",6),t.NdJ("ngModelChange",function(Z){return a.value2=Z}),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Custom Template"),t.qZA(),t.TgZ(17,"p-selectButton",7),t.NdJ("ngModelChange",function(Z){return a.value3=Z}),t.YNc(18,_,1,2,"ng-template"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",8),t.TgZ(20,"p-tabView"),t.TgZ(21,"p-tabPanel",9),t.TgZ(22,"h5"),t._uU(23,"Import"),t.qZA(),t.TgZ(24,"app-code",10),t.IAx(),t._uU(25,"\nimport {SelectButtonModule} from 'primeng/selectbutton';\n"),t.fQ9(),t.qZA(),t.TgZ(26,"h5"),t._uU(27,"Getting Started"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"SelectButton requires a value to bind and a collection of options."),t.qZA(),t.TgZ(30,"app-code",11),t.IAx(),t._uU(31,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCity" optionLabel="name"></p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(32,"app-code",10),t.IAx(),t._uU(33,"\ninterface City {\n    name: string,\n    code: string\n}\n\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCity: City;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(34,"h5"),t._uU(35,"Value Binding"),t.qZA(),t.TgZ(36,"p"),t._uU(37,"The option itself is bound to the model by default, use "),t.TgZ(38,"i"),t._uU(39,"optionValue"),t.qZA(),t._uU(40," to customize the property to pass as the value."),t.qZA(),t.TgZ(41,"app-code",11),t.IAx(),t._uU(42,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCityCode" optionLabel="name" optionValue="code"></p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(43,"app-code",10),t.IAx(),t._uU(44,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCityCode: string;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(45,"h5"),t._uU(46,"Selection"),t.qZA(),t.TgZ(47,"p"),t._uU(48,"SelectButtons allows selection of either single or multiple items, this behavior is defined with the "),t.TgZ(49,"i"),t._uU(50,"multiple"),t.qZA(),t._uU(51," property. In single case, model should be a single object reference whereas in multiple case should be an array."),t.qZA(),t.TgZ(52,"app-code",11),t.IAx(),t._uU(53,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true"></p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(54,"app-code",10),t.IAx(),t._uU(55,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCities: City[];\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(56,"h5"),t._uU(57,"Disabled Options"),t.qZA(),t.TgZ(58,"p"),t._uU(59,"Particular options can be prevented from selection using the "),t.TgZ(60,"i"),t._uU(61,"optionDisabled"),t.qZA(),t._uU(62," property."),t.qZA(),t.TgZ(63,"app-code",11),t.IAx(),t._uU(64,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" optionDisabled="inactive"></p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(65,"app-code",10),t.IAx(),t._uU(66,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCity: City;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY', inactive: false},\n            {name: 'Rome', code: 'RM', inactive: true},\n            {name: 'London', code: 'LDN', inactive: false},\n            {name: 'Istanbul', code: 'IST', inactive: true},\n            {name: 'Paris', code: 'PRS', inactive: false}\n        ];\n    }\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(67,"h5"),t._uU(68,"Model Driven Forms"),t.qZA(),t.TgZ(69,"p"),t._uU(70,"SelectButton can be used in a model driven form as well."),t.qZA(),t.TgZ(71,"app-code",11),t.IAx(),t._uU(72,'\n<p-selectButton [options]="cities" formControlName="selectedCity"></p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(73,"h5"),t._uU(74,"Custom Content"),t.qZA(),t.TgZ(75,"p"),t._uU(76,"For custom content support define a ng-template where the local ng-template variable refers to an option in the options collection."),t.qZA(),t.TgZ(77,"app-code",11),t.IAx(),t._uU(78,'\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">\n    <ng-template let-item>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(79,"app-code",10),t.IAx(),t._uU(80,"\nexport class SelectButtonDemo {\n\n    justifyOptions: any[];\n\n    value: any;\n\n    constructor() {    \n        this.justifyOptions = [\n            {icon: 'pi pi-align-left', justify: 'Left'},\n            {icon: 'pi pi-align-right', justify: 'Right'},\n            {icon: 'pi pi-align-center', justify: 'Center'},\n            {icon: 'pi pi-align-justify', justify: 'Justify'}\n        ];\n    }\n}\n"),t.fQ9(),t.qZA(),t.TgZ(81,"h5"),t._uU(82,"Properties"),t.qZA(),t.TgZ(83,"div",12),t.TgZ(84,"table",13),t.TgZ(85,"thead"),t.TgZ(86,"tr"),t.TgZ(87,"th"),t._uU(88,"Name"),t.qZA(),t.TgZ(89,"th"),t._uU(90,"Type"),t.qZA(),t.TgZ(91,"th"),t._uU(92,"Default"),t.qZA(),t.TgZ(93,"th"),t._uU(94,"Description"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"tbody"),t.TgZ(96,"tr"),t.TgZ(97,"td"),t._uU(98,"options"),t.qZA(),t.TgZ(99,"td"),t._uU(100,"array"),t.qZA(),t.TgZ(101,"td"),t._uU(102,"null"),t.qZA(),t.TgZ(103,"td"),t._uU(104,"An array of selectitems to display as the available options."),t.qZA(),t.qZA(),t.TgZ(105,"tr"),t.TgZ(106,"td"),t._uU(107,"optionLabel"),t.qZA(),t.TgZ(108,"td"),t._uU(109,"string"),t.qZA(),t.TgZ(110,"td"),t._uU(111,"label"),t.qZA(),t.TgZ(112,"td"),t._uU(113,"Name of the label field of an option."),t.qZA(),t.qZA(),t.TgZ(114,"tr"),t.TgZ(115,"td"),t._uU(116,"optionValue"),t.qZA(),t.TgZ(117,"td"),t._uU(118,"string"),t.qZA(),t.TgZ(119,"td"),t._uU(120,"value"),t.qZA(),t.TgZ(121,"td"),t._uU(122,"Name of the value field of an option."),t.qZA(),t.qZA(),t.TgZ(123,"tr"),t.TgZ(124,"td"),t._uU(125,"optionDisabled"),t.qZA(),t.TgZ(126,"td"),t._uU(127,"string"),t.qZA(),t.TgZ(128,"td"),t._uU(129,"disabled"),t.qZA(),t.TgZ(130,"td"),t._uU(131,"Name of the disabled field of an option."),t.qZA(),t.qZA(),t.TgZ(132,"tr"),t.TgZ(133,"td"),t._uU(134,"multiple"),t.qZA(),t.TgZ(135,"td"),t._uU(136,"boolean"),t.qZA(),t.TgZ(137,"td"),t._uU(138,"false"),t.qZA(),t.TgZ(139,"td"),t._uU(140,"When specified, allows selecting multiple values."),t.qZA(),t.qZA(),t.TgZ(141,"tr"),t.TgZ(142,"td"),t._uU(143,"tabindex"),t.qZA(),t.TgZ(144,"td"),t._uU(145,"number"),t.qZA(),t.TgZ(146,"td"),t._uU(147,"0"),t.qZA(),t.TgZ(148,"td"),t._uU(149,"Index of the element in tabbing order."),t.qZA(),t.qZA(),t.TgZ(150,"tr"),t.TgZ(151,"td"),t._uU(152,"style"),t.qZA(),t.TgZ(153,"td"),t._uU(154,"string"),t.qZA(),t.TgZ(155,"td"),t._uU(156,"null"),t.qZA(),t.TgZ(157,"td"),t._uU(158,"Inline style of the component."),t.qZA(),t.qZA(),t.TgZ(159,"tr"),t.TgZ(160,"td"),t._uU(161,"styleClass"),t.qZA(),t.TgZ(162,"td"),t._uU(163,"string"),t.qZA(),t.TgZ(164,"td"),t._uU(165,"null"),t.qZA(),t.TgZ(166,"td"),t._uU(167,"Style class of the component."),t.qZA(),t.qZA(),t.TgZ(168,"tr"),t.TgZ(169,"td"),t._uU(170,"ariaLabelledBy"),t.qZA(),t.TgZ(171,"td"),t._uU(172,"string"),t.qZA(),t.TgZ(173,"td"),t._uU(174,"null"),t.qZA(),t.TgZ(175,"td"),t._uU(176,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),t.qZA(),t.qZA(),t.TgZ(177,"tr"),t.TgZ(178,"td"),t._uU(179,"disabled"),t.qZA(),t.TgZ(180,"td"),t._uU(181,"boolean"),t.qZA(),t.TgZ(182,"td"),t._uU(183,"false"),t.qZA(),t.TgZ(184,"td"),t._uU(185,"When present, it specifies that the element should be disabled."),t.qZA(),t.qZA(),t.TgZ(186,"tr"),t.TgZ(187,"td"),t._uU(188,"dataKey"),t.qZA(),t.TgZ(189,"td"),t._uU(190,"string"),t.qZA(),t.TgZ(191,"td"),t._uU(192,"null"),t.qZA(),t.TgZ(193,"td"),t._uU(194,"A property to uniquely identify a value in options."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(195,"h5"),t._uU(196,"Events"),t.qZA(),t.TgZ(197,"div",12),t.TgZ(198,"table",13),t.TgZ(199,"thead"),t.TgZ(200,"tr"),t.TgZ(201,"th"),t._uU(202,"Name"),t.qZA(),t.TgZ(203,"th"),t._uU(204,"Parameters"),t.qZA(),t.TgZ(205,"th"),t._uU(206,"Description"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(207,"tbody"),t.TgZ(208,"tr"),t.TgZ(209,"td"),t._uU(210,"onChange"),t.qZA(),t.TgZ(211,"td"),t._uU(212,"event.originalEvent: browser event"),t._UZ(213,"br"),t._uU(214," event.value: single value or an array of values that are selected "),t.qZA(),t.TgZ(215,"td"),t._uU(216,"Callback to invoke when value changes."),t.qZA(),t.qZA(),t.TgZ(217,"tr"),t.TgZ(218,"td"),t._uU(219,"onOptionClick"),t.qZA(),t.TgZ(220,"td"),t._uU(221,"event.originalEvent: browser event"),t._UZ(222,"br"),t._uU(223," event.option: SelectItem instance of the clicked button"),t._UZ(224,"br"),t._uU(225," event.index: Index of the clicked button "),t.qZA(),t.TgZ(226,"td"),t._uU(227,"Callback to invoke when a button is clicked."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(228,"h5"),t._uU(229,"Dependencies"),t.qZA(),t.TgZ(230,"p"),t._uU(231,"None."),t.qZA(),t.qZA(),t.TgZ(232,"p-tabPanel",14),t.TgZ(233,"a",15),t.TgZ(234,"span"),t._uU(235,"View on GitHub"),t.qZA(),t.qZA(),t.TgZ(236,"a",16),t.TgZ(237,"span"),t._uU(238,"Edit in StackBlitz"),t.qZA(),t.qZA(),t.TgZ(239,"app-code",11),t.IAx(),t._uU(240,'\n<h5>Single Selection</h5>\n<p-selectButton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value"></p-selectButton>\n\n<h5>Multiple Selection</h5>\n<p-selectButton [options]="paymentOptions" [(ngModel)]="value2" multiple="multiple" optionLabel="name" optionValue="value"></p-selectButton>\n\n<h5>Custom Template</h5>\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value3" optionLabel="icon">\n    <ng-template let-item>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>\n'),t.fQ9(),t.qZA(),t.TgZ(241,"app-code",10),t.IAx(),t._uU(242,"\nimport {Component} from '@angular/core';\n\n@Component({\n    templateUrl: './selectbuttondemo.html'\n})\nexport class SelectButtonDemo {\n\n    stateOptions: any[];\n\n    paymentOptions: any[];\n\n    justifyOptions: any[];\n\n    value1: string = \"off\";\n\n    value2: number;\n\n    value3: any;\n\n    constructor() {\n        this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];\n\n        this.paymentOptions = [\n            {name: 'Option 1', value: 1},\n            {name: 'Option 2', value: 2},\n            {name: 'Option 3', value: 3}\n        ];\n\n        this.justifyOptions = [\n            {icon: 'pi pi-align-left', justify: 'Left'},\n            {icon: 'pi pi-align-right', justify: 'Right'},\n            {icon: 'pi pi-align-center', justify: 'Center'},\n            {icon: 'pi pi-align-justify', justify: 'Justify'}\n        ];\n    }\n}\n"),t.fQ9(),t.qZA(),t.qZA(),t.TgZ(243,"p-tabPanel",17),t.YNc(244,h,1,0,"ng-template",18),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(11),t.Q6J("options",a.stateOptions)("ngModel",a.value1),t.xp6(3),t.Q6J("options",a.paymentOptions)("ngModel",a.value2),t.xp6(3),t.Q6J("options",a.justifyOptions)("ngModel",a.value3))},directives:[f.P,T.UN,u.JJ,u.On,c.xf,c.x4,g.h,p.jx],encapsulation:2}),o})(),U=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild([{path:"",component:v}])],r.Bz]}),o})();var y=s(8151),b=s(5472),q=s(2340);let l=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,U,u.u5,y.Qy,b.hJ,q.LU,g.a,f.L]]}),o})()}}]);