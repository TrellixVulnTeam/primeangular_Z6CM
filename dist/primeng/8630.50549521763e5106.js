"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[8630],{3769:(f,_,p)=>{p.d(_,{D:()=>U,U:()=>H});var t=p(3668),r=p(6019),g=p(7537),u=p(9990),m=p(5989),h=p(3392),P=p(2825),w=p(1197),x=p(6078),T=p(3362),C=p(1953);function v(n,i){1&n&&t.GkF(0)}const c=function(n){return{$implicit:n}};function M(n,i){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,v,1,0,"ng-container",16),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.templateLeft)("ngTemplateOutletContext",t.VKq(2,c,e.paginatorState))}}function b(n,i){if(1&n&&(t.TgZ(0,"span",17),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.currentPageReport)}}const l=function(n){return{"p-disabled":n}};function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(a){return t.CHM(e),t.oxw(2).changePageToFirst(a)}),t._UZ(1,"span",19),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",e.isFirstPage()||e.empty())("ngClass",t.VKq(2,l,e.isFirstPage()||e.empty()))}}const k=function(n){return{"p-highlight":n}};function I(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(a){const d=t.CHM(e).$implicit;return t.oxw(3).onPageLinkClick(a,d-1)}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw(3);t.Q6J("ngClass",t.VKq(2,k,e-1==o.getPage())),t.xp6(1),t.Oqu(e)}}function R(n,i){if(1&n&&(t.TgZ(0,"span",20),t.YNc(1,I,2,4,"button",21),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.pageLinks)}}function O(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw(3);t.Oqu(e.currentPageReport)}}function y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"p-dropdown",23),t.NdJ("onChange",function(a){return t.CHM(e),t.oxw(2).onPageDropdownChange(a)}),t.YNc(1,O,1,1,"ng-template",24),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("options",e.pageItems)("ngModel",e.getPage())("disabled",e.empty())("appendTo",e.dropdownAppendTo)("scrollHeight",e.dropdownScrollHeight)}}function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(a){return t.CHM(e),t.oxw(2).changePageToLast(a)}),t._UZ(1,"span",26),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",e.isLastPage()||e.empty())("ngClass",t.VKq(2,l,e.isLastPage()||e.empty()))}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"p-inputNumber",27),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw(2).changePage(a-1)}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("ngModel",e.currentPage())("disabled",e.empty())}}function D(n,i){1&n&&t.GkF(0)}function S(n,i){if(1&n&&t.YNc(0,D,1,0,"ng-container",16),2&n){const e=i.$implicit,o=t.oxw(4);t.Q6J("ngTemplateOutlet",o.dropdownItemTemplate)("ngTemplateOutletContext",t.VKq(2,c,e))}}function A(n,i){1&n&&(t.ynx(0),t.YNc(1,S,1,4,"ng-template",30),t.BQk())}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"p-dropdown",28),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw(2).rows=a})("onChange",function(a){return t.CHM(e),t.oxw(2).onRppChange(a)}),t.YNc(1,A,2,0,"ng-container",29),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("options",e.rowsPerPageItems)("ngModel",e.rows)("disabled",e.empty())("appendTo",e.dropdownAppendTo)("scrollHeight",e.dropdownScrollHeight),t.xp6(1),t.Q6J("ngIf",e.dropdownItemTemplate)}}function F(n,i){1&n&&t.GkF(0)}function Z(n,i){if(1&n&&(t.TgZ(0,"div",31),t.YNc(1,F,1,0,"ng-container",16),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.templateRight)("ngTemplateOutletContext",t.VKq(2,c,e.paginatorState))}}function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.YNc(1,M,2,4,"div",2),t.YNc(2,b,2,1,"span",3),t.YNc(3,L,2,4,"button",4),t.TgZ(4,"button",5),t.NdJ("click",function(a){return t.CHM(e),t.oxw().changePageToPrev(a)}),t._UZ(5,"span",6),t.qZA(),t.YNc(6,R,2,1,"span",7),t.YNc(7,y,2,5,"p-dropdown",8),t.TgZ(8,"button",9),t.NdJ("click",function(a){return t.CHM(e),t.oxw().changePageToNext(a)}),t._UZ(9,"span",10),t.qZA(),t.YNc(10,E,2,4,"button",11),t.YNc(11,J,1,2,"p-inputNumber",12),t.YNc(12,N,2,6,"p-dropdown",13),t.YNc(13,Z,2,4,"div",14),t.qZA()}if(2&n){const e=t.oxw();t.Tol(e.styleClass),t.Q6J("ngStyle",e.style)("ngClass","p-paginator p-component"),t.xp6(1),t.Q6J("ngIf",e.templateLeft),t.xp6(1),t.Q6J("ngIf",e.showCurrentPageReport),t.xp6(1),t.Q6J("ngIf",e.showFirstLastIcon),t.xp6(1),t.Q6J("disabled",e.isFirstPage()||e.empty())("ngClass",t.VKq(17,l,e.isFirstPage()||e.empty())),t.xp6(2),t.Q6J("ngIf",e.showPageLinks),t.xp6(1),t.Q6J("ngIf",e.showJumpToPageDropdown),t.xp6(1),t.Q6J("disabled",e.isLastPage()||e.empty())("ngClass",t.VKq(19,l,e.isLastPage()||e.empty())),t.xp6(2),t.Q6J("ngIf",e.showFirstLastIcon),t.xp6(1),t.Q6J("ngIf",e.showJumpToPageInput),t.xp6(1),t.Q6J("ngIf",e.rowsPerPageOptions),t.xp6(1),t.Q6J("ngIf",e.templateRight)}}let U=(()=>{class n{constructor(e){this.cd=e,this.pageLinkSize=5,this.onPageChange=new t.vpe,this.alwaysShow=!0,this.dropdownScrollHeight="200px",this.currentPageReportTemplate="{currentPage} of {totalPages}",this.showFirstLastIcon=!0,this.totalRecords=0,this.rows=0,this.showPageLinks=!0,this._first=0,this._page=0}ngOnInit(){this.updatePaginatorState()}ngOnChanges(e){e.totalRecords&&(this.updatePageLinks(),this.updatePaginatorState(),this.updateFirst(),this.updateRowsPerPageOptions()),e.first&&(this._first=e.first.currentValue,this.updatePageLinks(),this.updatePaginatorState()),e.rows&&(this.updatePageLinks(),this.updatePaginatorState()),e.rowsPerPageOptions&&this.updateRowsPerPageOptions()}get first(){return this._first}set first(e){this._first=e}updateRowsPerPageOptions(){if(this.rowsPerPageOptions){this.rowsPerPageItems=[];for(let e of this.rowsPerPageOptions)"object"==typeof e&&e.showAll?this.rowsPerPageItems.unshift({label:e.showAll,value:this.totalRecords}):this.rowsPerPageItems.push({label:String(e),value:e})}}isFirstPage(){return 0===this.getPage()}isLastPage(){return this.getPage()===this.getPageCount()-1}getPageCount(){return Math.ceil(this.totalRecords/this.rows)}calculatePageLinkBoundaries(){let e=this.getPageCount(),o=Math.min(this.pageLinkSize,e),a=Math.max(0,Math.ceil(this.getPage()-o/2)),s=Math.min(e-1,a+o-1);return a=Math.max(0,a-(this.pageLinkSize-(s-a+1))),[a,s]}updatePageLinks(){this.pageLinks=[];let e=this.calculatePageLinkBoundaries(),a=e[1];for(let s=e[0];s<=a;s++)this.pageLinks.push(s+1);if(this.showJumpToPageDropdown){this.pageItems=[];for(let s=0;s<this.getPageCount();s++)this.pageItems.push({label:String(s+1),value:s})}}changePage(e){var o=this.getPageCount();if(e>=0&&e<o){this._first=this.rows*e;var a={page:e,first:this.first,rows:this.rows,pageCount:o};this.updatePageLinks(),this.onPageChange.emit(a),this.updatePaginatorState()}}updateFirst(){const e=this.getPage();e>0&&this.totalRecords&&this.first>=this.totalRecords&&Promise.resolve(null).then(()=>this.changePage(e-1))}getPage(){return Math.floor(this.first/this.rows)}changePageToFirst(e){this.isFirstPage()||this.changePage(0),e.preventDefault()}changePageToPrev(e){this.changePage(this.getPage()-1),e.preventDefault()}changePageToNext(e){this.changePage(this.getPage()+1),e.preventDefault()}changePageToLast(e){this.isLastPage()||this.changePage(this.getPageCount()-1),e.preventDefault()}onPageLinkClick(e,o){this.changePage(o),e.preventDefault()}onRppChange(e){this.changePage(this.getPage())}onPageDropdownChange(e){this.changePage(e.value)}updatePaginatorState(){this.paginatorState={page:this.getPage(),pageCount:this.getPageCount(),rows:this.rows,first:this.first,totalRecords:this.totalRecords}}empty(){return 0===this.getPageCount()}currentPage(){return this.getPageCount()>0?this.getPage()+1:0}get currentPageReport(){return this.currentPageReportTemplate.replace("{currentPage}",String(this.currentPage())).replace("{totalPages}",String(this.getPageCount())).replace("{first}",String(this.totalRecords>0?this._first+1:0)).replace("{last}",String(Math.min(this._first+this.rows,this.totalRecords))).replace("{rows}",String(this.rows)).replace("{totalRecords}",String(this.totalRecords))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["p-paginator"]],hostAttrs:[1,"p-element"],inputs:{pageLinkSize:"pageLinkSize",style:"style",styleClass:"styleClass",alwaysShow:"alwaysShow",templateLeft:"templateLeft",templateRight:"templateRight",dropdownAppendTo:"dropdownAppendTo",dropdownScrollHeight:"dropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:"showCurrentPageReport",showFirstLastIcon:"showFirstLastIcon",totalRecords:"totalRecords",rows:"rows",rowsPerPageOptions:"rowsPerPageOptions",showJumpToPageDropdown:"showJumpToPageDropdown",showJumpToPageInput:"showJumpToPageInput",showPageLinks:"showPageLinks",dropdownItemTemplate:"dropdownItemTemplate",first:"first"},outputs:{onPageChange:"onPageChange"},features:[t.TTD],decls:1,vars:1,consts:[[3,"class","ngStyle","ngClass",4,"ngIf"],[3,"ngStyle","ngClass"],["class","p-paginator-left-content",4,"ngIf"],["class","p-paginator-current",4,"ngIf"],["type","button","pRipple","","class","p-paginator-first p-paginator-element p-link",3,"disabled","ngClass","click",4,"ngIf"],["type","button","pRipple","",1,"p-paginator-prev","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-left"],["class","p-paginator-pages",4,"ngIf"],["styleClass","p-paginator-page-options",3,"options","ngModel","disabled","appendTo","scrollHeight","onChange",4,"ngIf"],["type","button","pRipple","",1,"p-paginator-next","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-right"],["type","button","pRipple","","class","p-paginator-last p-paginator-element p-link",3,"disabled","ngClass","click",4,"ngIf"],["class","p-paginator-page-input",3,"ngModel","disabled","ngModelChange",4,"ngIf"],["styleClass","p-paginator-rpp-options",3,"options","ngModel","disabled","appendTo","scrollHeight","ngModelChange","onChange",4,"ngIf"],["class","p-paginator-right-content",4,"ngIf"],[1,"p-paginator-left-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-paginator-current"],["type","button","pRipple","",1,"p-paginator-first","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-double-left"],[1,"p-paginator-pages"],["type","button","class","p-paginator-page p-paginator-element p-link","pRipple","",3,"ngClass","click",4,"ngFor","ngForOf"],["type","button","pRipple","",1,"p-paginator-page","p-paginator-element","p-link",3,"ngClass","click"],["styleClass","p-paginator-page-options",3,"options","ngModel","disabled","appendTo","scrollHeight","onChange"],["pTemplate","selectedItem"],["type","button","pRipple","",1,"p-paginator-last","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-double-right"],[1,"p-paginator-page-input",3,"ngModel","disabled","ngModelChange"],["styleClass","p-paginator-rpp-options",3,"options","ngModel","disabled","appendTo","scrollHeight","ngModelChange","onChange"],[4,"ngIf"],["pTemplate","item"],[1,"p-paginator-right-content"]],template:function(e,o){1&e&&t.YNc(0,Q,14,21,"div",0),2&e&&t.Q6J("ngIf",!!o.alwaysShow||o.pageLinks&&o.pageLinks.length>1)},directives:[r.O5,r.PC,r.mk,w.H,r.tP,r.sg,x.Lt,g.JJ,g.On,T.jx,C.Rn],styles:[".p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}\n"],encapsulation:2,changeDetection:0}),n})(),H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,u.kW,P.L$,g.u5,h.m8,m.T],u.kW,P.L$,g.u5,h.m8]}),n})()},8630:(f,_,p)=>{p.d(_,{U:()=>t.U});var t=p(3769)}}]);