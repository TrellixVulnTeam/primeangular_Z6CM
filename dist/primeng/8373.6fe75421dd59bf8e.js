(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[8373],{8373:function(Q,tt,V){var Y;void 0!==this||window,Q.exports=(Y=function(){try{return V(9487)}catch(G){}}(),(()=>{"use strict";var K={662:function(H,y){var x,c=this&&this.__extends||(x=function(p,u){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,h){s.__proto__=h}||function(s,h){for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(s[r]=h[r])})(p,u)},function(p,u){if("function"!=typeof u&&null!==u)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");function s(){this.constructor=p}x(p,u),p.prototype=null===u?Object.create(u):(s.prototype=u.prototype,new s)});Object.defineProperty(y,"__esModule",{value:!0}),y.CellHookData=y.HookData=void 0;var v=function(p,u,s){this.table=u,this.pageNumber=u.pageNumber,this.pageCount=this.pageNumber,this.settings=u.settings,this.cursor=s,this.doc=p.getDocument()};y.HookData=v;var a=function(p){function u(s,h,r,t,n,i){var d=p.call(this,s,h,i)||this;return d.cell=r,d.row=t,d.column=n,d.section=t.section,d}return c(u,p),u}(v);y.CellHookData=a},790:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0});var c=x(148),v=x(938),a=x(323),p=x(587),u=x(49),s=x(858);y.default=function(h){h.API.autoTable=function(){for(var r,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];1===t.length?r=t[0]:(console.error("Use of deprecated autoTable initiation"),(r=t[2]||{}).columns=t[0],r.body=t[1]);var i=(0,p.parseInput)(this,r),d=(0,s.createTable)(this,i);return(0,u.drawTable)(this,d),this},h.API.lastAutoTable=!1,h.API.previousAutoTable=!1,h.API.autoTable.previous=!1,h.API.autoTableText=function(r,t,n,i){(0,v.default)(r,t,n,i,this)},h.API.autoTableSetDefaults=function(r){return a.DocHandler.setDefaults(r,this),this},h.autoTableSetDefaults=function(r,t){a.DocHandler.setDefaults(r,t)},h.API.autoTableHtmlToJson=function(r,t){if(void 0===t&&(t=!1),"undefined"==typeof window)return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var n=new a.DocHandler(this),i=(0,c.parseHtml)(n,r,window,t,!1),g=i.body;return{columns:i.head[0].map(function(l){return l.content}),rows:g,data:g}},h.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var r=this.lastAutoTable;return r&&r.finalY?r.finalY:0},h.API.autoTableAddPageContent=function(r){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),h.API.autoTable.globalDefaults||(h.API.autoTable.globalDefaults={}),h.API.autoTable.globalDefaults.addPageContent=r,this},h.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}},938:(H,y)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(x,c,v,a,p){a=a||{};var u=1.15,s=p.internal.scaleFactor,h=p.internal.getFontSize()/s,r="",t=1;if("middle"!==a.valign&&"bottom"!==a.valign&&"center"!==a.halign&&"right"!==a.halign||(t=(r="string"==typeof x?x.split(/\r\n|\r|\n/g):x).length||1),v+=h*(2-u),"middle"===a.valign?v-=t/2*h*u:"bottom"===a.valign&&(v-=t*h*u),"center"===a.halign||"right"===a.halign){var n=h;if("center"===a.halign&&(n*=.5),r&&t>=1){for(var i=0;i<r.length;i++)p.text(r[i],c-p.getStringUnitWidth(r[i])*n,v),v+=h*u;return p}c-=p.getStringUnitWidth(x)*n}return"justify"===a.halign?p.text(x,c,v,{maxWidth:a.maxWidth||100,align:"justify"}):p.text(x,c,v),p}},200:(H,y)=>{function x(c,v){var a=c>0,p=v||0===v;return a&&p?"DF":a?"S":p?"F":null}Object.defineProperty(y,"__esModule",{value:!0}),y.parseSpacing=y.getFillStyle=y.addTableBorder=y.getStringWidth=void 0,y.getStringWidth=function(c,v,a){return a.applyStyles(v,!0),(Array.isArray(c)?c:[c]).map(function(p){return a.getTextWidth(p)}).reduce(function(p,u){return Math.max(p,u)},0)},y.addTableBorder=function(c,v,a,p){var u=v.settings.tableLineWidth;c.applyStyles({lineWidth:u,lineColor:v.settings.tableLineColor});var h=x(u,!1);h&&c.rect(a.x,a.y,v.getWidth(c.pageSize().width),p.y-a.y,h)},y.getFillStyle=x,y.parseSpacing=function(c,v){var a,p,u,s;if(c=c||v,Array.isArray(c)){if(c.length>=4)return{top:c[0],right:c[1],bottom:c[2],left:c[3]};if(3===c.length)return{top:c[0],right:c[1],bottom:c[2],left:c[1]};if(2===c.length)return{top:c[0],right:c[1],bottom:c[0],left:c[1]};c=1===c.length?c[0]:v}return"object"==typeof c?("number"==typeof c.vertical&&(c.top=c.vertical,c.bottom=c.vertical),"number"==typeof c.horizontal&&(c.right=c.horizontal,c.left=c.horizontal),{left:null!==(a=c.left)&&void 0!==a?a:v,top:null!==(p=c.top)&&void 0!==p?p:v,right:null!==(u=c.right)&&void 0!==u?u:v,bottom:null!==(s=c.bottom)&&void 0!==s?s:v}):("number"!=typeof c&&(c=v),{top:c,right:c,bottom:c,left:c})}},913:function(H,y){var x,c=this&&this.__extends||(x=function(a,p){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,s){u.__proto__=s}||function(u,s){for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(u[h]=s[h])})(a,p)},function(a,p){if("function"!=typeof p&&null!==p)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");function u(){this.constructor=a}x(a,p),a.prototype=null===p?Object.create(p):(u.prototype=p.prototype,new u)});Object.defineProperty(y,"__esModule",{value:!0}),y.getTheme=y.defaultStyles=y.HtmlRowInput=y.FONT_ROW_RATIO=void 0,y.FONT_ROW_RATIO=1.15;var v=function(a){function p(u){var s=a.call(this)||this;return s._element=u,s}return c(p,a),p}(Array);y.HtmlRowInput=v,y.defaultStyles=function(a){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/a,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}},y.getTheme=function(a){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[a]}},259:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.parseCss=void 0;var c=x(200);function v(p,u){var s=a(p,u);if(!s)return null;var h=s.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!h||!Array.isArray(h))return null;var r=[parseInt(h[1]),parseInt(h[2]),parseInt(h[3])];return 0===parseInt(h[4])||isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function a(p,u){var s=u(p);return"rgba(0, 0, 0, 0)"===s||"transparent"===s||"initial"===s||"inherit"===s?null==p.parentElement?null:a(p.parentElement,u):s}y.parseCss=function(p,u,s,h,r){var t={},n=96/72,i=v(u,function(w){return r.getComputedStyle(w).backgroundColor});null!=i&&(t.fillColor=i);var d=v(u,function(w){return r.getComputedStyle(w).color});null!=d&&(t.textColor=d);var g=v(u,function(w){return r.getComputedStyle(w).borderTopColor});null!=g&&(t.lineColor=g);var w,P,C,D,S,W,T,l=(C=[(w=h).paddingTop,w.paddingRight,w.paddingBottom,w.paddingLeft],D=96/(72/(P=s)),S=(parseInt(w.lineHeight)-parseInt(w.fontSize))/P/2,W=C.map(function(O){return parseInt(O||"0")/D}),S>(T=(0,c.parseSpacing)(W,0)).top&&(T.top=S),S>T.bottom&&(T.bottom=S),T);l&&(t.cellPadding=l);var o=parseInt(h.borderTopWidth||"");(o=o/n/s)&&(t.lineWidth=o);var f=["left","right","center","justify"];-1!==f.indexOf(h.textAlign)&&(t.halign=h.textAlign),-1!==(f=["middle","bottom","top"]).indexOf(h.verticalAlign)&&(t.valign=h.verticalAlign);var b=parseInt(h.fontSize||"");isNaN(b)||(t.fontSize=b/n);var m=function(w){var P="";return("bold"===w.fontWeight||"bolder"===w.fontWeight||parseInt(w.fontWeight)>=700)&&(P="bold"),"italic"!==w.fontStyle&&"oblique"!==w.fontStyle||(P+="italic"),P}(h);m&&(t.fontStyle=m);var e=(h.fontFamily||"").toLowerCase();return-1!==p.indexOf(e)&&(t.font=e),t}},323:(H,y)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.DocHandler=void 0;var x={},c=function(){function v(a){this.jsPDFDocument=a,this.userStyles={textColor:a.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:a.internal.getFontSize(),fontStyle:a.internal.getFont().fontStyle,font:a.internal.getFont().fontName}}return v.setDefaults=function(a,p){void 0===p&&(p=null),p?p.__autoTableDocumentDefaults=a:x=a},v.unifyColor=function(a){return Array.isArray(a)?a:"number"==typeof a?[a,a,a]:"string"==typeof a?[a]:null},v.prototype.applyStyles=function(a,p){var u,s,h;void 0===p&&(p=!1),a.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(a.fontStyle);var r=this.jsPDFDocument.internal.getFont(),t=r.fontStyle,n=r.fontName;if(a.font&&(n=a.font),a.fontStyle){t=a.fontStyle;var i=this.getFontList()[n];i&&-1===i.indexOf(t)&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(i[0]),t=i[0])}if(this.jsPDFDocument.setFont(n,t),a.fontSize&&this.jsPDFDocument.setFontSize(a.fontSize),!p){var d=v.unifyColor(a.fillColor);d&&(u=this.jsPDFDocument).setFillColor.apply(u,d),(d=v.unifyColor(a.textColor))&&(s=this.jsPDFDocument).setTextColor.apply(s,d),(d=v.unifyColor(a.lineColor))&&(h=this.jsPDFDocument).setDrawColor.apply(h,d),"number"==typeof a.lineWidth&&this.jsPDFDocument.setLineWidth(a.lineWidth)}},v.prototype.splitTextToSize=function(a,p,u){return this.jsPDFDocument.splitTextToSize(a,p,u)},v.prototype.rect=function(a,p,u,s,h){return this.jsPDFDocument.rect(a,p,u,s,h)},v.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},v.prototype.getTextWidth=function(a){return this.jsPDFDocument.getTextWidth(a)},v.prototype.getDocument=function(){return this.jsPDFDocument},v.prototype.setPage=function(a){this.jsPDFDocument.setPage(a)},v.prototype.addPage=function(){return this.jsPDFDocument.addPage()},v.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},v.prototype.getGlobalOptions=function(){return x||{}},v.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},v.prototype.pageSize=function(){var a=this.jsPDFDocument.internal.pageSize;return null==a.width&&(a={width:a.getWidth(),height:a.getHeight()}),a},v.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},v.prototype.pageNumber=function(){var a=this.jsPDFDocument.internal.getCurrentPageInfo();return a?a.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},v}();y.DocHandler=c},148:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.parseHtml=void 0;var c=x(259),v=x(913);function a(u,s,h,r,t,n){for(var i=new v.HtmlRowInput(r),d=0;d<r.cells.length;d++){var g=r.cells[d],l=h.getComputedStyle(g);if(t||"none"!==l.display){var o=void 0;n&&(o=(0,c.parseCss)(u,g,s,l,h)),i.push({rowSpan:g.rowSpan,colSpan:g.colSpan,styles:o,_element:g,content:p(g)})}}var f=h.getComputedStyle(r);if(i.length>0&&(t||"none"!==f.display))return i}function p(u){var s=u.cloneNode(!0);return s.innerHTML=s.innerHTML.replace(/\n/g,"").replace(/ +/g," "),s.innerHTML=s.innerHTML.split(/\<br.*?\>/).map(function(h){return h.trim()}).join("\n"),s.innerText||s.textContent||""}y.parseHtml=function(u,s,h,r,t){var n,i,d;void 0===r&&(r=!1),void 0===t&&(t=!1),d="string"==typeof s?h.document.querySelector(s):s;var g=Object.keys(u.getFontList()),l=u.scaleFactor(),o=[],f=[],b=[];if(!d)return console.error("Html table could not be found with input: ",s),{head:o,body:f,foot:b};for(var m=0;m<d.rows.length;m++){var e=d.rows[m],w=null===(i=null===(n=null==e?void 0:e.parentElement)||void 0===n?void 0:n.tagName)||void 0===i?void 0:i.toLowerCase(),P=a(g,l,h,e,r,t);P&&("thead"===w?o.push(P):"tfoot"===w?b.push(P):f.push(P))}return{head:o,body:f,foot:b}}},587:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.parseInput=void 0;var c=x(148),v=x(360),a=x(200),p=x(323),u=x(291);function s(h,r,t){var n=h[0]||r[0]||t[0]||[],i=[];return Object.keys(n).filter(function(d){return"_element"!==d}).forEach(function(d){var g,l=1;"object"!=typeof(g=Array.isArray(n)?n[parseInt(d)]:n[d])||Array.isArray(g)||(l=(null==g?void 0:g.colSpan)||1);for(var o=0;o<l;o++){var f={dataKey:Array.isArray(n)?i.length:d+(o>0?"_"+o:"")};i.push(f)}}),i}y.parseInput=function(h,r){var t=new p.DocHandler(h),n=t.getDocumentOptions(),i=t.getGlobalOptions();(0,u.default)(t,i,n,r);var d,g=(0,v.assign)({},i,n,r);"undefined"!=typeof window&&(d=window);var l=function(m,e,w){for(var P={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},C=function(W){if("columnStyles"===W)P.columnStyles=(0,v.assign)({},m[W],e[W],w[W]);else{var k=[m,e,w].map(function(_){return _[W]||{}});P[W]=(0,v.assign)({},k[0],k[1],k[2])}},D=0,S=Object.keys(P);D<S.length;D++)C(S[D]);return P}(i,n,r),o=function(m,e,w){for(var P={didParseCell:[],willDrawCell:[],didDrawCell:[],didDrawPage:[]},C=0,D=[m,e,w];C<D.length;C++){var S=D[C];S.didParseCell&&P.didParseCell.push(S.didParseCell),S.willDrawCell&&P.willDrawCell.push(S.willDrawCell),S.didDrawCell&&P.didDrawCell.push(S.didDrawCell),S.didDrawPage&&P.didDrawPage.push(S.didDrawPage)}return P}(i,n,r),f=function(m,e){var w,P,C,D,S,W,T,O,F,k,_,A,j,J,U,L,X,Z,$,M=(0,a.parseSpacing)(e.margin,40/m.scaleFactor()),z=null!==(U=e.startY,L=(J=m).getLastAutoTable(),X=J.scaleFactor(),Z=J.pageNumber(),$=!1,L&&L.startPageNumber&&($=L.startPageNumber+L.pageNumber-1===Z),w="number"==typeof U?U:null!=U&&!1!==U||!$||null==(null==L?void 0:L.finalY)?null:L.finalY+20/X)&&void 0!==w?w:M.top;A=!0===e.showFoot?"everyPage":!1===e.showFoot?"never":null!==(P=e.showFoot)&&void 0!==P?P:"everyPage",j=!0===e.showHead?"everyPage":!1===e.showHead?"never":null!==(C=e.showHead)&&void 0!==C?C:"everyPage";var I=null!==(D=e.useCss)&&void 0!==D&&D,R=null!==(S=e.horizontalPageBreakRepeat)&&void 0!==S?S:null;return{includeHiddenHtml:null!==(W=e.includeHiddenHtml)&&void 0!==W&&W,useCss:I,theme:e.theme||(I?"plain":"striped"),startY:z,margin:M,pageBreak:null!==(T=e.pageBreak)&&void 0!==T?T:"auto",rowPageBreak:null!==(O=e.rowPageBreak)&&void 0!==O?O:"auto",tableWidth:null!==(F=e.tableWidth)&&void 0!==F?F:"auto",showHead:j,showFoot:A,tableLineWidth:null!==(k=e.tableLineWidth)&&void 0!==k?k:0,tableLineColor:null!==(_=e.tableLineColor)&&void 0!==_?_:200,horizontalPageBreak:!!e.horizontalPageBreak,horizontalPageBreakRepeat:R}}(t,g),b=function(m,e,w){var P=e.head||[],C=e.body||[],D=e.foot||[];if(e.html)if(w){var W=(0,c.parseHtml)(m,e.html,w,e.includeHiddenHtml,e.useCss)||{};P=W.head||P,C=W.body||P,D=W.foot||P}else console.error("Cannot parse html in non browser environment");return{columns:e.columns||s(P,C,D),head:P,body:C,foot:D}}(t,g,d);return{id:r.tableId,content:b,hooks:o,styles:l,settings:f}}},291:(H,y)=>{function x(c){c.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),c.minCellHeight||(c.minCellHeight=c.rowHeight)):c.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),c.cellWidth||(c.cellWidth=c.columnWidth))}Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(c,v,a,p){for(var u=function(r){r&&"object"!=typeof r&&console.error("The options parameter should be of type object, is: "+typeof r),void 0!==r.extendWidth&&(r.tableWidth=r.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),void 0!==r.margins&&(void 0===r.margin&&(r.margin=r.margins),console.error("Use of deprecated option: margins, use margin instead.")),r.startY&&"number"!=typeof r.startY&&(console.error("Invalid value for startY option",r.startY),delete r.startY),!r.didDrawPage&&(r.afterPageContent||r.beforePageContent||r.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),r.didDrawPage=function(l){c.applyStyles(c.userStyles),r.beforePageContent&&r.beforePageContent(l),c.applyStyles(c.userStyles),r.afterPageContent&&r.afterPageContent(l),c.applyStyles(c.userStyles),r.afterPageAdd&&l.pageNumber>1&&l.afterPageAdd(l),c.applyStyles(c.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(l){r[l]&&console.error('The "'+l+'" hook has changed in version 3.0, check the changelog for how to migrate.')}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(l){var o=l[0],f=l[1];r[f]&&(console.error("Use of deprecated option "+f+". Use "+o+" instead"),r[o]=r[f])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(l){var o="string"==typeof l?l:l[0],f="string"==typeof l?l:l[1];void 0!==r[o]&&(void 0===r.styles[f]&&(r.styles[f]=r[o]),console.error("Use of deprecated option: "+o+", use the style "+f+" instead."))});for(var t=0,n=["styles","bodyStyles","headStyles","footStyles"];t<n.length;t++)x(r[n[t]]||{});for(var i=r.columnStyles||{},d=0,g=Object.keys(i);d<g.length;d++)x(i[g[d]]||{})},s=0,h=[v,a,p];s<h.length;s++)u(h[s])}},287:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.Column=y.Cell=y.Row=y.Table=void 0;var c=x(913),v=x(662),a=x(200),p=function(){function r(t,n){this.pageNumber=1,this.pageCount=1,this.id=t.id,this.settings=t.settings,this.styles=t.styles,this.hooks=t.hooks,this.columns=n.columns,this.head=n.head,this.body=n.body,this.foot=n.foot}return r.prototype.getHeadHeight=function(t){return this.head.reduce(function(n,i){return n+i.getMaxCellHeight(t)},0)},r.prototype.getFootHeight=function(t){return this.foot.reduce(function(n,i){return n+i.getMaxCellHeight(t)},0)},r.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},r.prototype.callCellHooks=function(t,n,i,d,g,l){for(var o=0,f=n;o<f.length;o++){var b=!1===(0,f[o])(new v.CellHookData(t,this,i,d,g,l));if(i.text=Array.isArray(i.text)?i.text:[i.text],b)return!1}return!0},r.prototype.callEndPageHooks=function(t,n){t.applyStyles(t.userStyles);for(var i=0,d=this.hooks.didDrawPage;i<d.length;i++)(0,d[i])(new v.HookData(t,this,n))},r.prototype.getWidth=function(t){if("number"==typeof this.settings.tableWidth)return this.settings.tableWidth;if("wrap"===this.settings.tableWidth)return this.columns.reduce(function(i,d){return i+d.wrappedWidth},0);var n=this.settings.margin;return t-n.left-n.right},r}();y.Table=p;var u=function(){function r(t,n,i,d,g){void 0===g&&(g=!1),this.height=0,this.raw=t,t instanceof c.HtmlRowInput&&(this.raw=t._element,this.element=t._element),this.index=n,this.section=i,this.cells=d,this.spansMultiplePages=g}return r.prototype.getMaxCellHeight=function(t){var n=this;return t.reduce(function(i,d){var g;return Math.max(i,(null===(g=n.cells[d.index])||void 0===g?void 0:g.height)||0)},0)},r.prototype.hasRowSpan=function(t){var n=this;return t.filter(function(i){var d=n.cells[i.index];return!!d&&d.rowSpan>1}).length>0},r.prototype.canEntireRowFit=function(t,n){return this.getMaxCellHeight(n)<=t},r.prototype.getMinimumRowHeight=function(t,n){var i=this;return t.reduce(function(d,g){var l=i.cells[g.index];if(!l)return 0;var o=l.styles.fontSize/n.scaleFactor()*c.FONT_ROW_RATIO,f=l.padding("vertical")+o;return f>d?f:d},0)},r}();y.Row=u;var s=function(){function r(t,n,i){var d,g;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=n,this.section=i,this.raw=t;var l=t;null==t||"object"!=typeof t||Array.isArray(t)?(this.rowSpan=1,this.colSpan=1):(this.rowSpan=t.rowSpan||1,this.colSpan=t.colSpan||1,l=null!==(g=null!==(d=t.content)&&void 0!==d?d:t.title)&&void 0!==g?g:t,t._element&&(this.raw=t._element)),this.text=(null!=l?""+l:"").split(/\r\n|\r|\n/g)}return r.prototype.getTextPos=function(){var t,n;if("top"===this.styles.valign)t=this.y+this.padding("top");else if("bottom"===this.styles.valign)t=this.y+this.height-this.padding("bottom");else{var i=this.height-this.padding("vertical");t=this.y+i/2+this.padding("top")}if("right"===this.styles.halign)n=this.x+this.width-this.padding("right");else if("center"===this.styles.halign){var d=this.width-this.padding("horizontal");n=this.x+d/2+this.padding("left")}else n=this.x+this.padding("left");return{x:n,y:t}},r.prototype.getContentHeight=function(t){var n=(Array.isArray(this.text)?this.text.length:1)*(this.styles.fontSize/t*c.FONT_ROW_RATIO)+this.padding("vertical");return Math.max(n,this.styles.minCellHeight)},r.prototype.padding=function(t){var n=(0,a.parseSpacing)(this.styles.cellPadding,0);return"vertical"===t?n.top+n.bottom:"horizontal"===t?n.left+n.right:n[t]},r}();y.Cell=s;var h=function(){function r(t,n,i){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=t,this.raw=n,this.index=i}return r.prototype.getMaxCustomCellWidth=function(t){for(var n=0,i=0,d=t.allRows();i<d.length;i++){var g=d[i].cells[this.index];g&&"number"==typeof g.styles.cellWidth&&(n=Math.max(n,g.styles.cellWidth))}return n},r}();y.Column=h},360:(H,y)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.assign=void 0,y.assign=function(x,c,v,a,p){if(null==x)throw new TypeError("Cannot convert undefined or null to object");for(var u=Object(x),s=1;s<arguments.length;s++){var h=arguments[s];if(null!=h)for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(u[r]=h[r])}return u}},858:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.createTable=void 0;var c=x(323),v=x(287),a=x(189),p=x(913),u=x(360);function s(t,n,i,d,g,l){var o={};return n.map(function(f,b){for(var m=0,e={},w=0,P=0,C=0,D=i;C<D.length;C++){var S=D[C];if(null==o[S.index]||0===o[S.index].left)if(0===P){var W,T={};"object"!=typeof(W=Array.isArray(f)?f[S.index-w-m]:f[S.dataKey])||Array.isArray(W)||(T=(null==W?void 0:W.styles)||{});var O=r(t,S,b,g,d,l,T),F=new v.Cell(W,O,t);e[S.dataKey]=F,e[S.index]=F,o[S.index]={left:F.rowSpan-1,times:P=F.colSpan-1}}else P--,w++;else o[S.index].left--,P=o[S.index].times,m++}return new v.Row(f,b,t,e)})}function h(t,n){var i={};return t.forEach(function(d){if(null!=d.raw){var g=function(l,o){if("head"===l){if("object"==typeof o)return o.header||o.title||null;if("string"==typeof o||"number"==typeof o)return o}else if("foot"===l&&"object"==typeof o)return o.footer;return null}(n,d.raw);null!=g&&(i[d.dataKey]=g)}}),Object.keys(i).length>0?i:null}function r(t,n,i,d,g,l,o){var f,b=(0,p.getTheme)(d);"head"===t?f=g.headStyles:"body"===t?f=g.bodyStyles:"foot"===t&&(f=g.footStyles);var m=(0,u.assign)({},b.table,b[t],g.styles,f),w="body"===t&&(g.columnStyles[n.dataKey]||g.columnStyles[n.index])||{},P="body"===t&&i%2==0?(0,u.assign)({},b.alternateRow,g.alternateRowStyles):{},C=(0,p.defaultStyles)(l),D=(0,u.assign)({},C,m,P,w);return(0,u.assign)(D,o)}y.createTable=function(t,n){var i=new c.DocHandler(t),d=function(l,o){var m,f=l.content,b=f.columns.map(function(C,D){var S,W,T;return T="object"==typeof C&&null!==(W=null!==(S=C.dataKey)&&void 0!==S?S:C.key)&&void 0!==W?W:D,new v.Column(T,C,D)});0===f.head.length&&(m=h(b,"head"))&&f.head.push(m),0===f.foot.length&&(m=h(b,"foot"))&&f.foot.push(m);var e=l.settings.theme,w=l.styles;return{columns:b,head:s("head",f.head,b,w,e,o),body:s("body",f.body,b,w,e,o),foot:s("foot",f.foot,b,w,e,o)}}(n,i.scaleFactor()),g=new v.Table(n,d);return(0,a.calculateWidths)(i,g),i.applyStyles(i.userStyles),g}},49:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.addPage=y.drawTable=void 0;var c=x(913),v=x(200),a=x(287),p=x(323),u=x(360),s=x(938),h=x(435);function r(l,o,f){var b=l.styles.fontSize/f.scaleFactor()*c.FONT_ROW_RATIO,m=l.padding("vertical"),e=Math.floor((o-m)/b);return Math.max(0,e)}function t(l,o,f,b,m,e,w){var D,S,T,O,F,P=(D=l,T=e,O=(S=o).settings.margin.bottom,("everyPage"===(F=S.settings.showFoot)||"lastPage"===F&&b)&&(O+=S.getFootHeight(S.columns)),D.pageSize().height-T.y-O);if(f.canEntireRowFit(P,w))n(l,o,f,e,w);else if(function(D,S,W,T){var O=D.pageSize().height,F=T.settings.margin,k=O-(F.top+F.bottom);"body"===S.section&&(k-=T.getHeadHeight(T.columns)+T.getFootHeight(T.columns));var _=S.getMinimumRowHeight(T.columns,D),A=_<W;if(_>k)return console.error("Will not be able to print row "+S.index+" correctly since it's minimum height is larger than page height"),!0;if(!A)return!1;var j=S.hasRowSpan(T.columns);return S.getMaxCellHeight(T.columns)>k?(j&&console.error("The content of row "+S.index+" will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported."),!0):!j&&"avoid"!==T.settings.rowPageBreak}(l,f,P,o)){var C=function(D,S,W,T){var O={};D.spansMultiplePages=!0,D.height=0;for(var F=0,k=0,_=W.columns;k<_.length;k++){var A=_[k];if(R=D.cells[A.index]){Array.isArray(R.text)||(R.text=[R.text]);var j=new a.Cell(R.raw,R.styles,R.section);(j=(0,u.assign)(j,R)).text=[];var M=r(R,S,T);R.text.length>M&&(j.text=R.text.splice(M,R.text.length));var z=T.scaleFactor();R.contentHeight=R.getContentHeight(z),R.contentHeight>=S&&(R.contentHeight=S,j.styles.minCellHeight-=S),R.contentHeight>D.height&&(D.height=R.contentHeight),j.contentHeight=j.getContentHeight(z),j.contentHeight>F&&(F=j.contentHeight),O[A.index]=j}}var I=new a.Row(D.raw,-1,D.section,O,!0);I.height=F;for(var E=0,B=W.columns;E<B.length;E++){var R;(j=I.cells[(A=B[E]).index])&&(j.height=I.height),(R=D.cells[A.index])&&(R.height=D.height)}return I}(f,P,o,l);n(l,o,f,e,w),d(l,o,m,e,w),t(l,o,C,b,m,e,w)}else d(l,o,m,e,w),t(l,o,f,b,m,e,w)}function n(l,o,f,b,m){b.x=o.settings.margin.left;for(var e=0,w=m;e<w.length;e++){var P=w[e],C=f.cells[P.index];if(C)if(l.applyStyles(C.styles),C.x=b.x,C.y=b.y,!1!==o.callCellHooks(l,o.hooks.willDrawCell,C,f,P,b)){i(l,C,b);var D=C.getTextPos();(0,s.default)(C.text,D.x,D.y,{halign:C.styles.halign,valign:C.styles.valign,maxWidth:Math.ceil(C.width-C.padding("left")-C.padding("right"))},l.getDocument()),o.callCellHooks(l,o.hooks.didDrawCell,C,f,P,b),b.x+=P.width}else b.x+=P.width;else b.x+=P.width}b.y+=f.height}function i(l,o,f){var b=o.styles;if(l.getDocument().setFillColor(l.getDocument().getFillColor()),"number"==typeof b.lineWidth){var m=(0,v.getFillStyle)(b.lineWidth,b.fillColor);m&&l.rect(o.x,f.y,o.width,o.height,m)}else if("object"==typeof b.lineWidth){l.rect(o.x,f.y,o.width,o.height,"F");var e=Object.keys(b.lineWidth),w=b.lineWidth;e.map(function(P){var C=(0,v.getFillStyle)(w[P],b.fillColor);!function(D,S,W,T,O,F){var k,_,A,j;switch(T){case"top":k=W.x,_=W.y,A=W.x+S.width,j=W.y;break;case"left":k=W.x,_=W.y,A=W.x,j=W.y+S.height;break;case"right":k=W.x+S.width,_=W.y,A=W.x+S.width,j=W.y+S.height;break;default:k=W.x,_=W.y+S.height-F,A=W.x+S.width,j=W.y+S.height-F}D.getDocument().setLineWidth(F),D.getDocument().line(k,_,A,j,O)}(l,o,f,P,C||"S",w[P])})}}function d(l,o,f,b,m){void 0===m&&(m=[]),l.applyStyles(l.userStyles),"everyPage"===o.settings.showFoot&&o.foot.forEach(function(w){return n(l,o,w,b,m)}),o.callEndPageHooks(l,b);var e=o.settings.margin;(0,v.addTableBorder)(l,o,f,b),g(l),o.pageNumber++,o.pageCount++,b.x=e.left,b.y=e.top,f.y=e.top,"everyPage"===o.settings.showHead&&o.head.forEach(function(w){return n(l,o,w,b,m)})}function g(l){var o=l.pageNumber();l.setPage(o+1),l.pageNumber()===o&&l.addPage()}y.drawTable=function(l,o){var f=o.settings,b=f.startY,m=f.margin,e={x:m.left,y:b},w=o.getHeadHeight(o.columns)+o.getFootHeight(o.columns),P=b+m.bottom+w;"avoid"===f.pageBreak&&(P+=o.allRows().reduce(function(S,W){return S+W.height},0));var C=new p.DocHandler(l);("always"===f.pageBreak||null!=f.startY&&P>C.pageSize().height)&&(g(C),e.y=m.top);var S,W,T,O,D=(0,u.assign)({},e);o.startPageNumber=C.pageNumber(),!0===f.horizontalPageBreak?(T=D,O=e,h.default.calculateAllColumnsCanFitInPage(S=C,W=o).map(function(F,k){var _,A,j,M,z;S.applyStyles(S.userStyles),k>0?d(S,W,T,O,F.columns):(j=O,M=F.columns,z=(A=W).settings,(_=S).applyStyles(_.userStyles),("firstPage"===z.showHead||"everyPage"===z.showHead)&&A.head.forEach(function(I){return n(_,A,I,j,M)})),function(_,A,j,M,z){_.applyStyles(_.userStyles),A.body.forEach(function(I,E){t(_,A,I,E===A.body.length-1,j,M,z)})}(S,W,T,O,F.columns),function(_,A,j,M){var z=A.settings;_.applyStyles(_.userStyles),("lastPage"===z.showFoot||"everyPage"===z.showFoot)&&A.foot.forEach(function(I){return n(_,A,I,j,M)})}(S,W,O,F.columns)})):(C.applyStyles(C.userStyles),"firstPage"!==f.showHead&&"everyPage"!==f.showHead||o.head.forEach(function(S){return n(C,o,S,e,o.columns)}),C.applyStyles(C.userStyles),o.body.forEach(function(S,W){t(C,o,S,W===o.body.length-1,D,e,o.columns)}),C.applyStyles(C.userStyles),"lastPage"!==f.showFoot&&"everyPage"!==f.showFoot||o.foot.forEach(function(S){return n(C,o,S,e,o.columns)})),(0,v.addTableBorder)(C,o,D,e),o.callEndPageHooks(C,e),o.finalY=e.y,l.lastAutoTable=o,l.previousAutoTable=o,l.autoTable&&(l.autoTable.previous=o),C.applyStyles(C.userStyles)},y.addPage=d},435:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0});var c=x(200),v=function(p,u){var s=(0,c.parseSpacing)(u.settings.margin,0);return p.pageSize().width-(s.left+s.right)},a=function(p,u,s){void 0===s&&(s={});var h=v(p,u),r=u.settings.horizontalPageBreakRepeat,t=null,n=[],i=[],d=u.columns.length,g=s&&s.start?s.start:0;for(null!=r&&(t=u.columns.find(function(o){return o.dataKey===r||o.index===r}))&&(n.push(t.index),i.push(u.columns[t.index]),h-=t.wrappedWidth);g<d;)if((null==t?void 0:t.index)!==g){var l=u.columns[g].wrappedWidth;if(h<l){0!==g&&g!==s.start||(n.push(g),i.push(u.columns[g]));break}n.push(g),i.push(u.columns[g]),h-=l,g++}else g++;return{colIndexes:n,columns:i,lastIndex:g}};y.default={getColumnsCanFitInPage:a,calculateAllColumnsCanFitInPage:function(p,u){for(var s=[],h=0,r=u.columns.length;h<r;){var t=a(p,u,{start:0===h?0:h});t&&t.columns&&t.columns.length?(h=t.lastIndex,s.push(t)):h++}return s},getPageAvailableWidth:v}},189:(H,y,x)=>{Object.defineProperty(y,"__esModule",{value:!0}),y.ellipsize=y.resizeColumns=y.calculateWidths=void 0;var c=x(200),v=x(435);function a(u,s,h){for(var r=s,t=u.reduce(function(b,m){return b+m.wrappedWidth},0),n=0;n<u.length;n++){var i=u[n],g=i.width+r*(i.wrappedWidth/t),l=h(i),o=g<l?l:g;s-=o-i.width,i.width=o}if(s=Math.round(1e10*s)/1e10){var f=u.filter(function(b){return!(s<0)||b.width>h(b)});f.length&&(s=a(f,s,h))}return s}function p(u,s,h,r,t){return u.map(function(n){return function(i,d,g,l,o){var f=1e4*l.scaleFactor();if((d=Math.ceil(d*f)/f)>=(0,c.getStringWidth)(i,g,l))return i;for(;d<(0,c.getStringWidth)(i+o,g,l)&&!(i.length<=1);)i=i.substring(0,i.length-1);return i.trim()+o}(n,s,h,r,t)})}y.calculateWidths=function(u,s){var n,i,d,g,l;i=s,d=(n=u).scaleFactor(),g=i.settings.horizontalPageBreak,l=v.default.getPageAvailableWidth(n,i),i.allRows().forEach(function(o){for(var f=0,b=i.columns;f<b.length;f++){var m=b[f],e=o.cells[m.index];if(e){i.callCellHooks(n,i.hooks.didParseCell,e,o,m,null);var P=e.padding("horizontal");e.contentWidth=(0,c.getStringWidth)(e.text,e.styles,n)+P;var C=(0,c.getStringWidth)(e.text.join(" ").split(/\s+/),e.styles,n);e.minReadableWidth=C+e.padding("horizontal"),"number"==typeof e.styles.cellWidth?(e.minWidth=e.styles.cellWidth,e.wrappedWidth=e.styles.cellWidth):"wrap"===e.styles.cellWidth||!0===g?e.contentWidth>l?(e.minWidth=l,e.wrappedWidth=l):(e.minWidth=e.contentWidth,e.wrappedWidth=e.contentWidth):(e.minWidth=e.styles.minCellWidth||10/d,e.wrappedWidth=e.contentWidth,e.minWidth>e.wrappedWidth&&(e.wrappedWidth=e.minWidth))}}}),i.allRows().forEach(function(o){for(var f=0,b=i.columns;f<b.length;f++){var m=b[f],e=o.cells[m.index];if(e&&1===e.colSpan)m.wrappedWidth=Math.max(m.wrappedWidth,e.wrappedWidth),m.minWidth=Math.max(m.minWidth,e.minWidth),m.minReadableWidth=Math.max(m.minReadableWidth,e.minReadableWidth);else{var w=i.styles.columnStyles[m.dataKey]||i.styles.columnStyles[m.index]||{},P=w.cellWidth||w.minCellWidth;P&&"number"==typeof P&&(m.minWidth=P,m.wrappedWidth=P)}e&&(e.colSpan>1&&!m.minWidth&&(m.minWidth=e.minWidth),e.colSpan>1&&!m.wrappedWidth&&(m.wrappedWidth=e.minWidth))}});var h=[],r=0;s.columns.forEach(function(n){var i=n.getMaxCustomCellWidth(s);i?n.width=i:(n.width=n.wrappedWidth,h.push(n)),r+=n.width});var t=s.getWidth(u.pageSize().width)-r;t&&(t=a(h,t,function(n){return Math.max(n.minReadableWidth,n.minWidth)})),t&&(t=a(h,t,function(n){return n.minWidth})),t=Math.abs(t),!s.settings.horizontalPageBreak&&t>.1/u.scaleFactor()&&(t=t<1?t:Math.round(t),console.error("Of the table content, "+t+" units width could not fit page")),function(n){for(var i=n.allRows(),d=0;d<i.length;d++)for(var g=i[d],l=null,o=0,f=0,b=0;b<n.columns.length;b++){var m=n.columns[b];if((f-=1)>1&&n.columns[b+1])o+=m.width,delete g.cells[m.index];else if(l){var e=l;delete g.cells[m.index],l=null,e.width=m.width+o}else{if(!(e=g.cells[m.index]))continue;if(f=e.colSpan,o=0,e.colSpan>1){l=e,o+=m.width;continue}e.width=m.width+o}}}(s),function(n,i){for(var d={count:0,height:0},g=0,l=n.allRows();g<l.length;g++){for(var o=l[g],f=0,b=n.columns;f<b.length;f++){var e=o.cells[b[f].index];if(e){i.applyStyles(e.styles,!0);var w=e.width-e.padding("horizontal");"linebreak"===e.styles.overflow?e.text=i.splitTextToSize(e.text,w+1/i.scaleFactor(),{fontSize:e.styles.fontSize}):"ellipsize"===e.styles.overflow?e.text=p(e.text,w,e.styles,i,"..."):"hidden"===e.styles.overflow?e.text=p(e.text,w,e.styles,i,""):"function"==typeof e.styles.overflow&&(e.text=e.styles.overflow(e.text,w)),e.contentHeight=e.getContentHeight(i.scaleFactor());var P=e.contentHeight/e.rowSpan;e.rowSpan>1&&d.count*d.height<P*e.rowSpan?d={height:P,count:e.rowSpan}:d&&d.count>0&&d.height>P&&(P=d.height),P>o.height&&(o.height=P)}}d.count--}}(s,u),function(n){for(var i={},d=1,g=n.allRows(),l=0;l<g.length;l++)for(var o=g[l],f=0,b=n.columns;f<b.length;f++){var m=b[f],e=i[m.index];if(d>1)d--,delete o.cells[m.index];else if(e)e.cell.height+=o.height,d=e.cell.colSpan,delete o.cells[m.index],e.left--,e.left<=1&&delete i[m.index];else{var w=o.cells[m.index];if(!w)continue;if(w.height=o.height,w.rowSpan>1){var P=g.length-l;i[m.index]={cell:w,left:w.rowSpan>P?P:w.rowSpan,row:o}}}}}(s)},y.resizeColumns=a,y.ellipsize=p},84:H=>{if(void 0===Y){var y=new Error("Cannot find module 'undefined'");throw y.code="MODULE_NOT_FOUND",y}H.exports=Y}},q={};function N(H){var y=q[H];if(void 0!==y)return y.exports;var x=q[H]={exports:{}};return K[H].call(x.exports,x,x.exports,N),x.exports}var G={};return(()=>{var H=G;Object.defineProperty(H,"__esModule",{value:!0}),H.Cell=H.Column=H.Row=H.Table=H.CellHookData=H.__drawTable=H.__createTable=H.applyPlugin=void 0;var y=N(790),x=N(587),c=N(49),v=N(858),a=N(287);Object.defineProperty(H,"Table",{enumerable:!0,get:function(){return a.Table}});var p=N(662);Object.defineProperty(H,"CellHookData",{enumerable:!0,get:function(){return p.CellHookData}});var u=N(287);function s(r){(0,y.default)(r)}Object.defineProperty(H,"Cell",{enumerable:!0,get:function(){return u.Cell}}),Object.defineProperty(H,"Column",{enumerable:!0,get:function(){return u.Column}}),Object.defineProperty(H,"Row",{enumerable:!0,get:function(){return u.Row}}),H.applyPlugin=s,H.default=function(r,t){var n=(0,x.parseInput)(r,t),i=(0,v.createTable)(r,n);(0,c.drawTable)(r,i)},H.__createTable=function(r,t){var n=(0,x.parseInput)(r,t);return(0,v.createTable)(r,n)},H.__drawTable=function(r,t){(0,c.drawTable)(r,t)};try{var h=N(84);h.jsPDF&&(h=h.jsPDF),s(h)}catch(r){}})(),G})())}}]);