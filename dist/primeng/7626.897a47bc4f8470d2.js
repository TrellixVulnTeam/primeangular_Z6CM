"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[7626],{7290:(h,p,a)=>{a.d(p,{h:()=>A,a:()=>g});var Z=a(6019),t=a(3668);const e=["code"],u=["*"];let A=(()=>{class c{constructor(i){this.el=i,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return c.\u0275fac=function(i){return new(i||c)(t.Y36(t.SBq))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-code"]],viewQuery:function(i,r){if(1&i&&t.Gf(e,5),2&i){let m;t.iGM(m=t.CRH())&&(r.codeViewChild=m.first)}},inputs:{lang:"lang"},ngContentSelectors:u,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(i,r){1&i&&(t.F$t(),t.TgZ(0,"pre",0),t.TgZ(1,"code",null,1),t.Hsn(3),t._uU(4,"\n"),t.qZA(),t.qZA()),2&i&&t.Q6J("ngClass","language-"+r.lang)},directives:[Z.mk],encapsulation:2}),c})(),g=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[Z.ez]]}),c})()},7626:(h,p,a)=>{a.r(p),a.d(p,{CascadeSelectDemoModule:()=>O});var Z=a(6019),t=a(1120),e=a(3668),u=a(2060),A=a(9637),g=a(7537),c=a(3362),l=a(3622),i=a(7290);function r(n,s){if(1&n&&e._UZ(0,"img",23),2&n){const o=e.oxw().$implicit;e.Tol("flag flag-"+o.code.toLowerCase())}}function m(n,s){1&n&&e._UZ(0,"i",24)}function _(n,s){1&n&&e._UZ(0,"i",25)}function f(n,s){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,r,1,2,"img",20),e.YNc(2,m,1,0,"i",21),e.YNc(3,_,1,0,"i",22),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.qZA()),2&n){const o=s.$implicit;e.xp6(1),e.Q6J("ngIf",o.states),e.xp6(1),e.Q6J("ngIf",o.cities),e.xp6(1),e.Q6J("ngIf",o.cname),e.xp6(2),e.Oqu(o.cname||o.name)}}function C(n,s){1&n&&e._UZ(0,"iframe",26)}const U=function(){return{minWidth:"14rem"}},q=function(){return["states","cities"]},S=function(){return["/theming"]};let y=(()=>{class n{ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:340,vars:16,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","cascadeselect","stackblitz","cascadeselect-demo"],[1,"content-section","implementation"],[1,"card"],["optionLabel","cname","optionGroupLabel","name","placeholder","Select a City",3,"ngModel","options","optionGroupChildren","ngModelChange"],["pTemplate","option"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/cascadeselect","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-cascadeselect-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"country-item"],["src","assets/showcase/images/demo/flag/flag_placeholder.png",3,"class",4,"ngIf"],["class","pi pi-compass p-mr-2",4,"ngIf"],["class","pi pi-map-marker p-mr-2",4,"ngIf"],["src","assets/showcase/images/demo/flag/flag_placeholder.png"],[1,"pi","pi-compass","p-mr-2"],[1,"pi","pi-map-marker","p-mr-2"],["src","https://stackblitz.com/edit/primeng-cascadeselect-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(o,d){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"CascadeSelect"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"CascadeSelect displays a nested structure of options."),e.qZA(),e.qZA(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.TgZ(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"p-cascadeSelect",5),e.NdJ("ngModelChange",function(T){return d.selectedCity1=T}),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Templating"),e.qZA(),e.TgZ(14,"p-cascadeSelect",5),e.NdJ("ngModelChange",function(T){return d.selectedCity2=T}),e.YNc(15,f,6,4,"ng-template",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",7),e.TgZ(17,"p-tabView"),e.TgZ(18,"p-tabPanel",8),e.TgZ(19,"h5"),e._uU(20,"Import"),e.qZA(),e.TgZ(21,"app-code",9),e.IAx(),e._uU(22,"\nimport {CascadeSelectModule} from 'primeng/cascadeselect';\n"),e.fQ9(),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Getting Started"),e.qZA(),e.TgZ(25,"p"),e._uU(26,"CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy. "),e.TgZ(27,"i"),e._uU(28,"optionGroupLabel"),e.qZA(),e._uU(29," is used for the text of a category and "),e.TgZ(30,"i"),e._uU(31,"optionGroupChildren"),e.qZA(),e._uU(32," is to define the children of the category. Note that order of the "),e.TgZ(33,"i"),e._uU(34,"optionGroupChildren"),e.qZA(),e._uU(35," matters and it should correspond to the data hierarchy."),e.qZA(),e.TgZ(36,"app-code",10),e.IAx(),e._uU(37,'\n<p-cascadeSelect [(ngModel)]="selectedCity1" [options]="countries" optionLabel="cname" optionGroupLabel="name" \n    [optionGroupChildren]="[\'states\', \'cities\']" [style]="{\'minWidth\': \'14rem\'}"></p-cascadeSelect>\n'),e.fQ9(),e.qZA(),e.TgZ(38,"app-code",9),e.IAx(),e._uU(39,"\ncountries: any[];\n\nselectedCity1: any;\n\nngOnInit() {\n    this.countries = [\n        {\n            name: 'Australia',\n            code: 'AU',\n            states: [\n                {\n                    name: 'New South Wales',\n                    cities: [\n                        {cname: 'Sydney', code: 'A-SY'},\n                        {cname: 'Newcastle', code: 'A-NE'},\n                        {cname: 'Wollongong', code: 'A-WO'}\n                    ]\n                },\n                {\n                    name: 'Queensland',\n                    cities: [\n                        {cname: 'Brisbane', code: 'A-BR'},\n                        {cname: 'Townsville', code: 'A-TO'}\n                    ]\n                },\n                \n            ]\n        },\n        {\n            name: 'Canada', \n            code: 'CA',\n            states: [\n                {\n                    name: 'Quebec',\n                    cities: [\n                        {cname: 'Montreal', code: 'C-MO'},\n                        {cname: 'Quebec City', code: 'C-QU'}\n                    ]\n                },\n                {\n                    name: 'Ontario',\n                    cities: [\n                        {cname: 'Ottawa', code: 'C-OT'},\n                        {cname: 'Toronto', code: 'C-TO'}\n                    ]\n                },\n                \n            ]\n        },\n        {\n            name: 'United States',\n            code: 'US',\n            states: [\n                {\n                    name: 'California',\n                    cities: [\n                        {cname: 'Los Angeles', code: 'US-LA'},\n                        {cname: 'San Diego', code: 'US-SD'},\n                        {cname: 'San Francisco', code: 'US-SF'}\n                    ]\n                },\n                {\n                    name: 'Florida',\n                    cities: [\n                        {cname: 'Jacksonville', code: 'US-JA'},\n                        {cname: 'Miami', code: 'US-MI'},\n                        {cname: 'Tampa', code: 'US-TA'},\n                        {cname: 'Orlando', code: 'US-OR'}\n                    ]\n                },\n                {\n                    name: 'Texas',\n                    cities: [\n                        {cname: 'Austin', code: 'US-AU'},\n                        {cname: 'Dallas', code: 'US-DA'},\n                        {cname: 'Houston', code: 'US-HO'}\n                    ]\n                }\n            ]\n        }\n    ];\n}\n"),e.fQ9(),e.qZA(),e.TgZ(40,"h5"),e._uU(41,"Templating"),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Content of an item can be customized with the "),e.TgZ(44,"i"),e._uU(45,"option"),e.qZA(),e._uU(46," template."),e.qZA(),e.TgZ(47,"app-code",10),e.IAx(),e._uU(48,'\n<p-cascadeSelect [(ngModel)]="selectedCity2" [options]="countries" optionLabel="cname" optionGroupLabel="name" \n    [optionGroupChildren]="[\'states\', \'cities\']" [style]="{\'minWidth\': \'14rem\'}" placeholder="Select a City">\n    <ng-template pTemplate="option" let-option>\n        <div class="country-item">\n            <img *ngIf="option.states" src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="\'flag flag-\' + option.code.toLowerCase()"/>\n            <i class="pi pi-compass p-mr-2" *ngIf="option.cities"></i>\n            <i class="pi pi-map-marker p-mr-2" *ngIf="option.cname"></i>\n            <span>{{option.cname || option.name}}</span>\n        </div>\n    </ng-template>\n</p-cascadeSelect>\n'),e.fQ9(),e.qZA(),e.TgZ(49,"h5"),e._uU(50,"Properties"),e.qZA(),e.TgZ(51,"div",11),e.TgZ(52,"table",12),e.TgZ(53,"thead"),e.TgZ(54,"tr"),e.TgZ(55,"th"),e._uU(56,"Name"),e.qZA(),e.TgZ(57,"th"),e._uU(58,"Type"),e.qZA(),e.TgZ(59,"th"),e._uU(60,"Default"),e.qZA(),e.TgZ(61,"th"),e._uU(62,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"tbody"),e.TgZ(64,"tr"),e.TgZ(65,"td"),e._uU(66,"options"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"array"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"null"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"An array of selectitems to display as the available options."),e.qZA(),e.qZA(),e.TgZ(73,"tr"),e.TgZ(74,"td"),e._uU(75,"optionLabel"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"string"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"null"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"Property name or getter function to use as the label of an option."),e.qZA(),e.qZA(),e.TgZ(82,"tr"),e.TgZ(83,"td"),e._uU(84,"optionValue"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"string"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"null"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"Property name or getter function to use as the value of an option, defaults to the option itself when not defined."),e.qZA(),e.qZA(),e.TgZ(91,"tr"),e.TgZ(92,"td"),e._uU(93,"optionGroupLabel"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"string"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"null"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"Property name or getter function to use as the label of an option group."),e.qZA(),e.qZA(),e.TgZ(100,"tr"),e.TgZ(101,"td"),e._uU(102,"optionGroupChildren"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"string"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"null"),e.qZA(),e.TgZ(107,"td"),e._uU(108,"Property name or getter function to retrieve the items of a group."),e.qZA(),e.qZA(),e.TgZ(109,"tr"),e.TgZ(110,"td"),e._uU(111,"placeholder"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"string"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"null"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"Default text to display when no option is selected."),e.qZA(),e.qZA(),e.TgZ(118,"tr"),e.TgZ(119,"td"),e._uU(120,"disabled"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"boolean"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"false"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"When present, it specifies that the component should be disabled."),e.qZA(),e.qZA(),e.TgZ(127,"tr"),e.TgZ(128,"td"),e._uU(129,"dataKey"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"string"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"null"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"A property to uniquely identify an option."),e.qZA(),e.qZA(),e.TgZ(136,"tr"),e.TgZ(137,"td"),e._uU(138,"tabindex"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"number"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"null"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"Index of the element in tabbing order."),e.qZA(),e.qZA(),e.TgZ(145,"tr"),e.TgZ(146,"td"),e._uU(147,"inputId"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"string"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"null"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"Identifier of the underlying input element."),e.qZA(),e.qZA(),e.TgZ(154,"tr"),e.TgZ(155,"td"),e._uU(156,"ariaLabelledBy"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"string"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"null"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),e.qZA(),e.qZA(),e.TgZ(163,"tr"),e.TgZ(164,"td"),e._uU(165,"appendTo"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"string"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"null"),e.qZA(),e.TgZ(170,"td"),e._uU(171,'Id of the element or "body" for document where the overlay should be appended to.'),e.qZA(),e.qZA(),e.TgZ(172,"tr"),e.TgZ(173,"td"),e._uU(174,"style"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"object"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"null"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Inline style of the component."),e.qZA(),e.qZA(),e.TgZ(181,"tr"),e.TgZ(182,"td"),e._uU(183,"styleClass"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"string"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"null"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"Style class of the component."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(190,"h5"),e._uU(191,"Events"),e.qZA(),e.TgZ(192,"div",11),e.TgZ(193,"table",12),e.TgZ(194,"thead"),e.TgZ(195,"tr"),e.TgZ(196,"th"),e._uU(197,"Name"),e.qZA(),e.TgZ(198,"th"),e._uU(199,"Parameters"),e.qZA(),e.TgZ(200,"th"),e._uU(201,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(202,"tbody"),e.TgZ(203,"tr"),e.TgZ(204,"td"),e._uU(205,"onChange"),e.qZA(),e.TgZ(206,"td"),e._uU(207,"event.originalEvent: Original event "),e._UZ(208,"br"),e._uU(209," event.value: Selected option value "),e.qZA(),e.TgZ(210,"td"),e._uU(211,"Callback to invoke on value change."),e.qZA(),e.qZA(),e.TgZ(212,"tr"),e.TgZ(213,"td"),e._uU(214,"onGroupChange"),e.qZA(),e.TgZ(215,"td"),e._uU(216,"event.originalEvent: Original event "),e._UZ(217,"br"),e._uU(218," event.value: Selected option group "),e.qZA(),e.TgZ(219,"td"),e._uU(220,"Callback to invoke when a group changes."),e.qZA(),e.qZA(),e.TgZ(221,"tr"),e.TgZ(222,"td"),e._uU(223,"onBeforeShow"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"-"),e.qZA(),e.TgZ(226,"td"),e._uU(227,"Callback to invoke before the overlay is shown."),e.qZA(),e.qZA(),e.TgZ(228,"tr"),e.TgZ(229,"td"),e._uU(230,"onBeforeHide"),e.qZA(),e.TgZ(231,"td"),e._uU(232,"-"),e.qZA(),e.TgZ(233,"td"),e._uU(234,"Callback to invoke before the overlay is hidden."),e.qZA(),e.qZA(),e.TgZ(235,"tr"),e.TgZ(236,"td"),e._uU(237,"onShow"),e.qZA(),e.TgZ(238,"td"),e._uU(239,"-"),e.qZA(),e.TgZ(240,"td"),e._uU(241,"Callback to invoke when the overlay is shown."),e.qZA(),e.qZA(),e.TgZ(242,"tr"),e.TgZ(243,"td"),e._uU(244,"onHide"),e.qZA(),e.TgZ(245,"td"),e._uU(246,"-"),e.qZA(),e.TgZ(247,"td"),e._uU(248,"Callback to invoke when the overlay is hidden."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(249,"h5"),e._uU(250,"Templates"),e.qZA(),e.TgZ(251,"div",11),e.TgZ(252,"table",12),e.TgZ(253,"thead"),e.TgZ(254,"tr"),e.TgZ(255,"th"),e._uU(256,"Name"),e.qZA(),e.TgZ(257,"th"),e._uU(258,"Parameters"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(259,"tbody"),e.TgZ(260,"tr"),e.TgZ(261,"td"),e._uU(262,"value"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"$implicit: Value of the component "),e._UZ(265,"br"),e._uU(266," placeholder: Placeholder text to show"),e.qZA(),e.qZA(),e.TgZ(267,"tr"),e.TgZ(268,"td"),e._uU(269,"option"),e.qZA(),e.TgZ(270,"td"),e._uU(271,"$implicit: Data of the option"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(272,"h5"),e._uU(273,"Styling"),e.qZA(),e.TgZ(274,"p"),e._uU(275,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(276,"a",13),e._uU(277,"theming"),e.qZA(),e._uU(278," page."),e.qZA(),e.TgZ(279,"div",11),e.TgZ(280,"table",12),e.TgZ(281,"thead"),e.TgZ(282,"tr"),e.TgZ(283,"th"),e._uU(284,"Name"),e.qZA(),e.TgZ(285,"th"),e._uU(286,"Element"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(287,"tbody"),e.TgZ(288,"tr"),e.TgZ(289,"td"),e._uU(290,"p-cascadeselect"),e.qZA(),e.TgZ(291,"td"),e._uU(292,"Container element."),e.qZA(),e.qZA(),e.TgZ(293,"tr"),e.TgZ(294,"td"),e._uU(295,"p-cascadeselect-label"),e.qZA(),e.TgZ(296,"td"),e._uU(297,"Element to display label of selected option."),e.qZA(),e.qZA(),e.TgZ(298,"tr"),e.TgZ(299,"td"),e._uU(300,"p-cascadeselect-trigger"),e.qZA(),e.TgZ(301,"td"),e._uU(302,"Icon element."),e.qZA(),e.qZA(),e.TgZ(303,"tr"),e.TgZ(304,"td"),e._uU(305,"p-cascadeselect-panel"),e.qZA(),e.TgZ(306,"td"),e._uU(307,"Icon element."),e.qZA(),e.qZA(),e.TgZ(308,"tr"),e.TgZ(309,"td"),e._uU(310,"p-cascadeselect-items-wrapper"),e.qZA(),e.TgZ(311,"td"),e._uU(312,"Wrapper element of items list."),e.qZA(),e.qZA(),e.TgZ(313,"tr"),e.TgZ(314,"td"),e._uU(315,"p-cascadeselect-items"),e.qZA(),e.TgZ(316,"td"),e._uU(317,"List element of items."),e.qZA(),e.qZA(),e.TgZ(318,"tr"),e.TgZ(319,"td"),e._uU(320,"p-cascadeselect-item"),e.qZA(),e.TgZ(321,"td"),e._uU(322,"An item in the list."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(323,"h5"),e._uU(324,"Dependencies"),e.qZA(),e.TgZ(325,"p"),e._uU(326,"None."),e.qZA(),e.qZA(),e.TgZ(327,"p-tabPanel",14),e.TgZ(328,"a",15),e.TgZ(329,"span"),e._uU(330,"View on GitHub"),e.qZA(),e.qZA(),e.TgZ(331,"a",16),e.TgZ(332,"span"),e._uU(333,"Edit in StackBlitz"),e.qZA(),e.qZA(),e.TgZ(334,"app-code",10),e.IAx(),e._uU(335,'\n<h5>Basic</h5>\n<p-cascadeSelect [(ngModel)]="selectedCity1" [options]="countries" optionLabel="cname" optionGroupLabel="name" \n    [optionGroupChildren]="[\'states\', \'cities\']" [style]="{\'minWidth\': \'14rem\'}" placeholder="Select a City"></p-cascadeSelect>\n    \n<h5>Templating</h5>\n<p-cascadeSelect [(ngModel)]="selectedCity2" [options]="countries" optionLabel="cname" optionGroupLabel="name" \n    [optionGroupChildren]="[\'states\', \'cities\']" [style]="{\'minWidth\': \'14rem\'}" placeholder="Select a City">\n    <ng-template pTemplate="option" let-option>\n        <div class="country-item">\n            <img *ngIf="option.states" src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="\'flag flag-\' + option.code.toLowerCase()"/>\n            <i class="pi pi-compass p-mr-2" *ngIf="option.cities"></i>\n            <i class="pi pi-map-marker p-mr-2" *ngIf="option.cname"></i>\n            <span>{{option.cname || option.name}}</span>\n        </div>\n    </ng-template>\n</p-cascadeSelect>\n'),e.fQ9(),e.qZA(),e.TgZ(336,"app-code",9),e.IAx(),e._uU(337,"\nexport class CascadeSelectDemo {\n\n    countries: any[];\n\n    selectedCity1: any;\n\n    selectedCity2: any;\n\n    ngOnInit() {\n        this.countries = [\n            {\n                name: 'Australia',\n                code: 'AU',\n                states: [\n                    {\n                        name: 'New South Wales',\n                        cities: [\n                            {cname: 'Sydney', code: 'A-SY'},\n                            {cname: 'Newcastle', code: 'A-NE'},\n                            {cname: 'Wollongong', code: 'A-WO'}\n                        ]\n                    },\n                    {\n                        name: 'Queensland',\n                        cities: [\n                            {cname: 'Brisbane', code: 'A-BR'},\n                            {cname: 'Townsville', code: 'A-TO'}\n                        ]\n                    },\n                    \n                ]\n            },\n            {\n                name: 'Canada', \n                code: 'CA',\n                states: [\n                    {\n                        name: 'Quebec',\n                        cities: [\n                            {cname: 'Montreal', code: 'C-MO'},\n                            {cname: 'Quebec City', code: 'C-QU'}\n                        ]\n                    },\n                    {\n                        name: 'Ontario',\n                        cities: [\n                            {cname: 'Ottawa', code: 'C-OT'},\n                            {cname: 'Toronto', code: 'C-TO'}\n                        ]\n                    },\n                    \n                ]\n            },\n            {\n                name: 'United States',\n                code: 'US',\n                states: [\n                    {\n                        name: 'California',\n                        cities: [\n                            {cname: 'Los Angeles', code: 'US-LA'},\n                            {cname: 'San Diego', code: 'US-SD'},\n                            {cname: 'San Francisco', code: 'US-SF'}\n                        ]\n                    },\n                    {\n                        name: 'Florida',\n                        cities: [\n                            {cname: 'Jacksonville', code: 'US-JA'},\n                            {cname: 'Miami', code: 'US-MI'},\n                            {cname: 'Tampa', code: 'US-TA'},\n                            {cname: 'Orlando', code: 'US-OR'}\n                        ]\n                    },\n                    {\n                        name: 'Texas',\n                        cities: [\n                            {cname: 'Austin', code: 'US-AU'},\n                            {cname: 'Dallas', code: 'US-DA'},\n                            {cname: 'Houston', code: 'US-HO'}\n                        ]\n                    }\n                ]\n            }\n        ];\n    }\n}\n"),e.fQ9(),e.qZA(),e.qZA(),e.TgZ(338,"p-tabPanel",17),e.YNc(339,C,1,0,"ng-template",18),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(11),e.Akn(e.DdM(11,U)),e.Q6J("ngModel",d.selectedCity1)("options",d.countries)("optionGroupChildren",e.DdM(12,q)),e.xp6(3),e.Akn(e.DdM(13,U)),e.Q6J("ngModel",d.selectedCity2)("options",d.countries)("optionGroupChildren",e.DdM(14,q)),e.xp6(262),e.Q6J("routerLink",e.DdM(15,S)))},directives:[u.P,A.ZK,g.JJ,g.On,c.jx,l.xf,l.x4,i.h,t.yS,Z.O5],encapsulation:2}),n})(),b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[t.Bz.forChild([{path:"",component:y}])],t.Bz]}),n})();var v=a(5472),D=a(2239),w=a(2340),M=a(2882);let O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[Z.ez,b,v.hJ,D.Q,w.LU,M.XH,g.u5,u.L,i.a]]}),n})()}}]);