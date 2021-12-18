"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1672],{1672:(b,r,a)=>{a.r(r),a.d(r,{PaginatorDemoModule:()=>v});var d=a(6019),Z=a(1120),t=a(3668),i=a(2060),u=a(3769),l=a(1919),p=a(3622),s=a(7290),T=a(3362);function A(e,n){1&e&&t._UZ(0,"iframe",28)}const q=function(){return[10,20,30]},c=function(){return["/theming"]};let U=(()=>{class e{constructor(){this.first=0,this.totalRecords=120,this.totalRecords2=12}onPageChange(o){this.first=o.first}refresh(){this.first=0}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:377,vars:12,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","paginator","stackblitz","paginator-demo"],[1,"content-section","implementation"],[1,"card"],[3,"rows","totalRecords","rowsPerPageOptions"],[1,"p-grid","p-align-center"],[1,"p-col-1"],["icon","pi pi-refresh",3,"onClick"],[1,"p-col-10"],[3,"first","rows","totalRecords","showJumpToPageDropdown","showPageLinks","onPageChange"],[1,"p-col-1","p-grid","p-justify-end"],["icon","pi pi-search"],[1,"image-gallery"],[3,"src"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/paginator","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-paginator-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-paginator-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(o,g){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Paginator"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Paginator is a generic component to display content in paged format."),t.qZA(),t.qZA(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3),t.TgZ(8,"div",4),t.TgZ(9,"h5"),t._uU(10,"Basic"),t.qZA(),t._UZ(11,"p-paginator",5),t.TgZ(12,"h5"),t._uU(13,"Custom"),t.qZA(),t.TgZ(14,"div",6),t.TgZ(15,"div",7),t.TgZ(16,"p-button",8),t.NdJ("onClick",function(){return g.refresh()}),t.qZA(),t.qZA(),t.TgZ(17,"div",9),t.TgZ(18,"p-paginator",10),t.NdJ("onPageChange",function(P){return g.onPageChange(P)}),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t._UZ(20,"p-button",12),t.qZA(),t.qZA(),t.TgZ(21,"div",13),t._UZ(22,"img",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",15),t.TgZ(24,"p-tabView"),t.TgZ(25,"p-tabPanel",16),t.TgZ(26,"h5"),t._uU(27,"Import"),t.qZA(),t.TgZ(28,"app-code",17),t.IAx(),t._uU(29,"\nimport {PaginatorModule} from 'primeng/paginator';\n"),t.fQ9(),t.qZA(),t.TgZ(30,"h5"),t._uU(31,"Getting Started"),t.qZA(),t.TgZ(32,"p"),t._uU(33,"Paginator is defined using p-paginator element."),t.qZA(),t.TgZ(34,"app-code",18),t.IAx(),t._uU(35,"\n<p-paginator></p-paginator>\n"),t.fQ9(),t.qZA(),t.TgZ(36,"h5"),t._uU(37,"Rows and TotalRecords"),t.qZA(),t.TgZ(38,"p"),t.TgZ(39,"i"),t._uU(40,"rows"),t.qZA(),t._uU(41," and "),t.TgZ(42,"i"),t._uU(43,"totalRecords"),t.qZA(),t._uU(44," define how many pages the paginator should display. Paginator below will have 10 pages."),t.qZA(),t.TgZ(45,"app-code",18),t.IAx(),t._uU(46,'\n<p-paginator [rows]="10" [totalRecords]="100"></p-paginator>\n'),t.fQ9(),t.qZA(),t.TgZ(47,"h5"),t._uU(48,"PageLinks"),t.qZA(),t.TgZ(49,"p"),t._uU(50,"PageLinks provide shortcuts to jump to a specific page, use "),t.TgZ(51,"i"),t._uU(52,"pageLinkSize"),t.qZA(),t._uU(53," property to define the number of links to display. Default is 5."),t.qZA(),t.TgZ(54,"app-code",18),t.IAx(),t._uU(55,'\n<p-paginator [rows]="10" [totalRecords]="100" pageLinkSize="3"></p-paginator>\n'),t.fQ9(),t.qZA(),t.TgZ(56,"h5"),t._uU(57,"Rows Per Page"),t.qZA(),t.TgZ(58,"p"),t._uU(59,"Number of items per page can be changed by the user using a dropdown if you define "),t.TgZ(60,"i"),t._uU(61,"rowsPerPageOptions"),t.qZA(),t._uU(62," as an array of possible values."),t.qZA(),t.TgZ(63,"app-code",18),t.IAx(),t._uU(64,'\n<p-paginator [rows]="10" [totalRecords]="120" [rowsPerPageOptions]="[10,20,30]"></p-paginator>\n'),t.fQ9(),t.qZA(),t.TgZ(65,"h5"),t._uU(66,"CurrentPageReport"),t.qZA(),t.TgZ(67,"p"),t._uU(68,"Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following; "),t.qZA(),t.TgZ(69,"ul"),t.TgZ(70,"li"),t._uU(71,"{currentPage}"),t.qZA(),t.TgZ(72,"li"),t._uU(73,"{totalPages}"),t.qZA(),t.TgZ(74,"li"),t._uU(75,"{rows}"),t.qZA(),t.TgZ(76,"li"),t._uU(77,"{first}"),t.qZA(),t.TgZ(78,"li"),t._uU(79,"{last}"),t.qZA(),t.TgZ(80,"li"),t._uU(81,"{totalRecords}"),t.qZA(),t.qZA(),t.TgZ(82,"h5"),t._uU(83,"Properties"),t.qZA(),t.TgZ(84,"div",19),t.TgZ(85,"table",20),t.TgZ(86,"thead"),t.TgZ(87,"tr"),t.TgZ(88,"th"),t._uU(89,"Name"),t.qZA(),t.TgZ(90,"th"),t._uU(91,"Type"),t.qZA(),t.TgZ(92,"th"),t._uU(93,"Default"),t.qZA(),t.TgZ(94,"th"),t._uU(95,"Description"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(96,"tbody"),t.TgZ(97,"tr"),t.TgZ(98,"td"),t._uU(99,"totalRecords"),t.qZA(),t.TgZ(100,"td"),t._uU(101,"number"),t.qZA(),t.TgZ(102,"td"),t._uU(103,"0"),t.qZA(),t.TgZ(104,"td"),t._uU(105,"Number of total records."),t.qZA(),t.qZA(),t.TgZ(106,"tr"),t.TgZ(107,"td"),t._uU(108,"rows"),t.qZA(),t.TgZ(109,"td"),t._uU(110,"number"),t.qZA(),t.TgZ(111,"td"),t._uU(112,"0"),t.qZA(),t.TgZ(113,"td"),t._uU(114,"Data count to display per page."),t.qZA(),t.qZA(),t.TgZ(115,"tr"),t.TgZ(116,"td"),t._uU(117,"first"),t.qZA(),t.TgZ(118,"td"),t._uU(119,"number"),t.qZA(),t.TgZ(120,"td"),t._uU(121,"0"),t.qZA(),t.TgZ(122,"td"),t._uU(123,"Zero-relative number of the first row to be displayed."),t.qZA(),t.qZA(),t.TgZ(124,"tr"),t.TgZ(125,"td"),t._uU(126,"pageLinkSize"),t.qZA(),t.TgZ(127,"td"),t._uU(128,"number"),t.qZA(),t.TgZ(129,"td"),t._uU(130,"5"),t.qZA(),t.TgZ(131,"td"),t._uU(132,"Number of page links to display."),t.qZA(),t.qZA(),t.TgZ(133,"tr"),t.TgZ(134,"td"),t._uU(135,"rowsPerPageOptions"),t.qZA(),t.TgZ(136,"td"),t._uU(137,"array"),t.qZA(),t.TgZ(138,"td"),t._uU(139,"null"),t.qZA(),t.TgZ(140,"td"),t._uU(141,"Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}] "),t.qZA(),t.qZA(),t.TgZ(142,"tr"),t.TgZ(143,"td"),t._uU(144,"style"),t.qZA(),t.TgZ(145,"td"),t._uU(146,"string"),t.qZA(),t.TgZ(147,"td"),t._uU(148,"null"),t.qZA(),t.TgZ(149,"td"),t._uU(150,"Inline style of the component."),t.qZA(),t.qZA(),t.TgZ(151,"tr"),t.TgZ(152,"td"),t._uU(153,"styleClass"),t.qZA(),t.TgZ(154,"td"),t._uU(155,"string"),t.qZA(),t.TgZ(156,"td"),t._uU(157,"null"),t.qZA(),t.TgZ(158,"td"),t._uU(159,"Style class of the component."),t.qZA(),t.qZA(),t.TgZ(160,"tr"),t.TgZ(161,"td"),t._uU(162,"alwaysShow"),t.qZA(),t.TgZ(163,"td"),t._uU(164,"boolean"),t.qZA(),t.TgZ(165,"td"),t._uU(166,"true"),t.qZA(),t.TgZ(167,"td"),t._uU(168,"Whether to show it even there is only one page."),t.qZA(),t.qZA(),t.TgZ(169,"tr"),t.TgZ(170,"td"),t._uU(171,"showFirstLastIcon"),t.qZA(),t.TgZ(172,"td"),t._uU(173,"boolean"),t.qZA(),t.TgZ(174,"td"),t._uU(175,"true"),t.qZA(),t.TgZ(176,"td"),t._uU(177,"When enabled, icons are displayed on paginator to go first and last page."),t.qZA(),t.qZA(),t.TgZ(178,"tr"),t.TgZ(179,"td"),t._uU(180,"templateLeft"),t.qZA(),t.TgZ(181,"td"),t._uU(182,"TemplateRef"),t.qZA(),t.TgZ(183,"td"),t._uU(184,"null"),t.qZA(),t.TgZ(185,"td"),t._uU(186,"Template instance to inject into the left side of the paginator."),t.qZA(),t.qZA(),t.TgZ(187,"tr"),t.TgZ(188,"td"),t._uU(189,"templateRight"),t.qZA(),t.TgZ(190,"td"),t._uU(191,"TemplateRef"),t.qZA(),t.TgZ(192,"td"),t._uU(193,"null"),t.qZA(),t.TgZ(194,"td"),t._uU(195,"Template instance to inject into the right side of the paginator."),t.qZA(),t.qZA(),t.TgZ(196,"tr"),t.TgZ(197,"td"),t._uU(198,"dropdownItemTemplate"),t.qZA(),t.TgZ(199,"td"),t._uU(200,"TemplateRef"),t.qZA(),t.TgZ(201,"td"),t._uU(202,"null"),t.qZA(),t.TgZ(203,"td"),t._uU(204,"Template instance to inject into the dropdown item inside in the paginator."),t.qZA(),t.qZA(),t.TgZ(205,"tr"),t.TgZ(206,"td"),t._uU(207,"dropdownAppendTo"),t.qZA(),t.TgZ(208,"td"),t._uU(209,"any"),t.qZA(),t.TgZ(210,"td"),t._uU(211,"null"),t.qZA(),t.TgZ(212,"td"),t._uU(213,'Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).'),t.qZA(),t.qZA(),t.TgZ(214,"tr"),t.TgZ(215,"td"),t._uU(216,"dropdownScrollHeight"),t.qZA(),t.TgZ(217,"td"),t._uU(218,"string"),t.qZA(),t.TgZ(219,"td"),t._uU(220,"200px"),t.qZA(),t.TgZ(221,"td"),t._uU(222,"Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value."),t.qZA(),t.qZA(),t.TgZ(223,"tr"),t.TgZ(224,"td"),t._uU(225,"currentPageReportTemplate"),t.qZA(),t.TgZ(226,"td"),t._uU(227,"string"),t.qZA(),t.TgZ(228,"td"),t._uU(229,"({currentPage} of {totalPages})"),t.qZA(),t.TgZ(230,"td"),t._uU(231,"Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords} "),t.qZA(),t.qZA(),t.TgZ(232,"tr"),t.TgZ(233,"td"),t._uU(234,"showCurrentPageReport"),t.qZA(),t.TgZ(235,"td"),t._uU(236,"boolean"),t.qZA(),t.TgZ(237,"td"),t._uU(238,"false"),t.qZA(),t.TgZ(239,"td"),t._uU(240,"Whether to display current page report."),t.qZA(),t.qZA(),t.TgZ(241,"tr"),t.TgZ(242,"td"),t._uU(243,"showJumpToPageDropdown"),t.qZA(),t.TgZ(244,"td"),t._uU(245,"boolean"),t.qZA(),t.TgZ(246,"td"),t._uU(247,"false"),t.qZA(),t.TgZ(248,"td"),t._uU(249,"Whether to display a dropdown to navigate to any page."),t.qZA(),t.qZA(),t.TgZ(250,"tr"),t.TgZ(251,"td"),t._uU(252,"showJumpToPageInput"),t.qZA(),t.TgZ(253,"td"),t._uU(254,"boolean"),t.qZA(),t.TgZ(255,"td"),t._uU(256,"false"),t.qZA(),t.TgZ(257,"td"),t._uU(258,"Whether to display a input to navigate to any page."),t.qZA(),t.qZA(),t.TgZ(259,"tr"),t.TgZ(260,"td"),t._uU(261,"showPageLinks"),t.qZA(),t.TgZ(262,"td"),t._uU(263,"boolean"),t.qZA(),t.TgZ(264,"td"),t._uU(265,"true"),t.qZA(),t.TgZ(266,"td"),t._uU(267,"Whether to show page links."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(268,"h5"),t._uU(269,"Events"),t.qZA(),t.TgZ(270,"div",19),t.TgZ(271,"table",20),t.TgZ(272,"thead"),t.TgZ(273,"tr"),t.TgZ(274,"th"),t._uU(275,"Name"),t.qZA(),t.TgZ(276,"th"),t._uU(277,"Parameters"),t.qZA(),t.TgZ(278,"th"),t._uU(279,"Description"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(280,"tbody"),t.TgZ(281,"tr"),t.TgZ(282,"td"),t._uU(283,"onPageChange"),t.qZA(),t.TgZ(284,"td"),t._uU(285,"event.first: Index of first record "),t._UZ(286,"br"),t._uU(287," event.rows: Number of rows to display in new page "),t._UZ(288,"br"),t._uU(289," event.page: Index of the new page "),t._UZ(290,"br"),t._uU(291," event.pageCount: Total number of pages "),t._UZ(292,"br"),t.qZA(),t.TgZ(293,"td"),t._uU(294,"Callback to invoke when page changes, the event object contains information about the new state."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(295,"app-code",18),t.IAx(),t._uU(296,'\n<p-paginator [rows]="10" totalRecords="100" (onPageChange)="paginate($event)"></p-paginator>\n'),t.fQ9(),t.qZA(),t.TgZ(297,"app-code",17),t.IAx(),t._uU(298,"\nexport class MyComponent {\n\n    paginate(event) {\n        //event.first = Index of the first record\n        //event.rows = Number of rows to display in new page\n        //event.page = Index of the new page\n        //event.pageCount = Total number of pages\n    }\n\n}\n"),t.fQ9(),t.qZA(),t.TgZ(299,"h5"),t._uU(300,"Styling"),t.qZA(),t.TgZ(301,"p"),t._uU(302,"Following is the list of structural style classes, for theming classes visit "),t.TgZ(303,"a",21),t._uU(304,"theming page"),t.qZA(),t._uU(305,"."),t.qZA(),t.TgZ(306,"div",19),t.TgZ(307,"table",20),t.TgZ(308,"thead"),t.TgZ(309,"tr"),t.TgZ(310,"th"),t._uU(311,"Name"),t.qZA(),t.TgZ(312,"th"),t._uU(313,"Element"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(314,"tbody"),t.TgZ(315,"tr"),t.TgZ(316,"td"),t._uU(317,"p-paginator"),t.qZA(),t.TgZ(318,"td"),t._uU(319,"Container element."),t.qZA(),t.qZA(),t.TgZ(320,"tr"),t.TgZ(321,"td"),t._uU(322,"p-paginator-first"),t.qZA(),t.TgZ(323,"td"),t._uU(324,"First page element."),t.qZA(),t.qZA(),t.TgZ(325,"tr"),t.TgZ(326,"td"),t._uU(327,"p-paginator-prev"),t.qZA(),t.TgZ(328,"td"),t._uU(329,"Previous page element."),t.qZA(),t.qZA(),t.TgZ(330,"tr"),t.TgZ(331,"td"),t._uU(332,"p-paginator-pages"),t.qZA(),t.TgZ(333,"td"),t._uU(334,"Container of page links."),t.qZA(),t.qZA(),t.TgZ(335,"tr"),t.TgZ(336,"td"),t._uU(337,"p-paginator-page"),t.qZA(),t.TgZ(338,"td"),t._uU(339,"A page link."),t.qZA(),t.qZA(),t.TgZ(340,"tr"),t.TgZ(341,"td"),t._uU(342,"p-paginator-next"),t.qZA(),t.TgZ(343,"td"),t._uU(344,"Next page element."),t.qZA(),t.qZA(),t.TgZ(345,"tr"),t.TgZ(346,"td"),t._uU(347,"p-paginator-last"),t.qZA(),t.TgZ(348,"td"),t._uU(349,"Last page element."),t.qZA(),t.qZA(),t.TgZ(350,"tr"),t.TgZ(351,"td"),t._uU(352,"p-paginator-rpp-options"),t.qZA(),t.TgZ(353,"td"),t._uU(354,"Rows per page dropdown."),t.qZA(),t.qZA(),t.TgZ(355,"tr"),t.TgZ(356,"td"),t._uU(357,"p-paginator-page-options"),t.qZA(),t.TgZ(358,"td"),t._uU(359,"Jump to per page dropdown."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(360,"h5"),t._uU(361,"Dependencies"),t.qZA(),t.TgZ(362,"p"),t._uU(363,"None."),t.qZA(),t.qZA(),t.TgZ(364,"p-tabPanel",22),t.TgZ(365,"a",23),t.TgZ(366,"span"),t._uU(367,"View on GitHub"),t.qZA(),t.qZA(),t.TgZ(368,"a",24),t.TgZ(369,"span"),t._uU(370,"Edit in StackBlitz"),t.qZA(),t.qZA(),t.TgZ(371,"app-code",18),t.IAx(),t._uU(372,'\n<p-paginator [rows]="10" [totalRecords]="120" [rowsPerPageOptions]="[10,20,30]"></p-paginator>\n<h5>Basic</h5>\n    <p-paginator [rows]="10" [totalRecords]="totalRecords" [rowsPerPageOptions]="[10,20,30]"></p-paginator>\n\n    <h5>Custom</h5>\n    <div class="p-grid p-align-center">\n        <div class="p-col-1">\n            <p-button icon="pi pi-refresh" (onClick)="refresh()"></p-button>\n        </div>\n        <div class="p-col-10">\n            <p-paginator [first]="first" [rows]="1" [totalRecords]="totalRecords2" (onPageChange)="onPageChange($event)"\n            [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>\n        </div>\n        <div class="p-col-1 p-grid p-justify-end">\n            <p-button icon="pi pi-search"></p-button>\n        </div>\n    </div>\n    <div class="image-gallery">\n        <img src="assets/showcase/images/demo/nature/nature{{first + 1}}.jpg" />\n    </div>\n</div>\n'),t.fQ9(),t.qZA(),t.TgZ(373,"app-code",25),t._uU(374,"\n.image-gallery { text-align: center; padding: 1rem;\n}\n"),t.qZA(),t.qZA(),t.TgZ(375,"p-tabPanel",26),t.YNc(376,A,1,0,"ng-template",27),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(11),t.Q6J("rows",10)("totalRecords",g.totalRecords)("rowsPerPageOptions",t.DdM(10,q)),t.xp6(7),t.Q6J("first",g.first)("rows",1)("totalRecords",g.totalRecords2)("showJumpToPageDropdown",!0)("showPageLinks",!1),t.xp6(4),t.MGl("src","assets/showcase/images/demo/nature/nature",g.first+1,".jpg",t.LSH),t.xp6(281),t.Q6J("routerLink",t.DdM(11,c)))},directives:[i.P,u.D,l.zx,p.xf,p.x4,s.h,Z.yS,T.jx],styles:[".image-gallery[_ngcontent-%COMP%]{text-align:center;padding:1rem}"]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[Z.Bz.forChild([{path:"",component:U}])],Z.Bz]}),e})();var m=a(8630),_=a(2340),f=a(5472);let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,h,m.U,_.LU,s.a,f.hJ,i.L]]}),e})()}}]);