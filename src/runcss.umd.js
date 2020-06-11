!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,void 0):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var l=0;return function(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(o=t[Symbol.iterator]()).next.bind(o)}var n=new Map,o=new Map,l=document.createElement("style");document.head.appendChild(l);for(var i,r,s=l.sheet,a=new Map([["sm",s.cssRules[s.insertRule("@media(min-width:640px){}",s.cssRules.length)]],["md",s.cssRules[s.insertRule("@media(min-width:768px){}",s.cssRules.length)]],["lg",s.cssRules[s.insertRule("@media(min-width:1024px){}",s.cssRules.length)]],["xl",s.cssRules[s.insertRule("@media(min-width:1280px){}",s.cssRules.length)]]]),c=new Map([["p","padding"],["m","margin"],["h","height"],["z","z-index"],["w","width"]]),f=new Map([["t","-top"],["b","-bottom"],["l","-left"],["r","-right"]]),u=new Map([["container",function(){U("width:100%");var e=["640px","768px","1024px","1280px"];a.values().forEach(function(t,n){s=t,U("max-width:"+e[n])})}],["clearfix",function(){E="clearfix::after",U('content:"";display:table;clear:both;')}]]),d=function(e){return e.split(",")},p=function(e,t){var n=e.indexOf("-")+1;u.set(e,e.slice(0,n)+t+":"+e.slice(n).replace("-"," "))},v=t(d("box-border|box-sizing:border-box,box-content|box-sizing:content-box,hidden|display:none,object-scale-down|object-fit:scale-down,scrolling-touch|-webkit-overflow-scrolling:touch,scrolling-auto|-webkit-overflow-scrolling:auto,visible|visibility:visible,invisible|visibility:hidden,flex-row|flex-direction:row,flex-row-reverse|flex-direction:row-reverse,flex-col|flex-direction:column,flex-col-reverse|flex-direction:column-reverse,flex-no-wrap|flex-wrap:nowrap,flex-wrap|flex-wrap:wrap,flex-wrap-reverse|flex-wrap:wrap-reverse,items-stretch|align-items:stretch,items-start|align-items:flex-start,items-center|align-items:center,items-end|align-items:flex-end,items-baseline|align-items:baseline,content-start|align-content:flex-start,content-center|align-content:center,content-end|align-content:flex-end,content-between|align-content:space-between,content-around|align-content:space-around,self-auto|align-self:auto,self-start|align-self:flex-start,self-center|align-self:center,self-end|align-self:flex-end,self-stretch|align-self:stretch"));!(r=v()).done;)u.set.apply(u,r.value.split("|"));for(var b,g=t(d("object-contain,object-cover,object-fill,object-none,object-bottom"));!(b=g()).done;)p(b.value,"fit");for(var h,m=t(d("object-bottom,object-center,object-left,object-left-bottom,object-left-top,object-right,object-right-bottom,object-right-top,object-top"));!(h=m()).done;)p(h.value,"position");for(var x,w=t(d("float-right,float-left,float-none,clear-left,clear-right,clear-both,clear-none"));!(x=w()).done;){var y=x.value;u.set(y,y.replace("-",":"))}for(var j,R=t(d("block,flow-root,inline-block,inline,flex,grid,inline-grid,table,table-caption,table-cell,table-column,table-column-group,table-footer-group,table-header-group,table-row-group,table-row"));!(j=R()).done;){var N=j.value;u.set(N,"display:"+N)}for(var S,M=t(d("static,fixed,absolute,relative,sticky"));!(S=M()).done;){var T=S.value;u.set(T,"position:"+T)}var A,O,k,E,z=new Map([["overflow",function(){U(O+"-"+A[1]+":"+A[2])}]]);function C(){s=l.sheet,O=void 0,k="",E=i,A=i.split(":"),i=A[A.length-1];for(var e,n=t(A=A.slice(0,-1));!(e=n()).done;){var o=e.value;a.has(o)?s=a.get(o):(void 0).push(o)}if("-"===i[0]&&(k="-",i=i.slice(1)),i.length<3)L();else if(A=i.split("-"),(O=A[0]).length<3&&"bg"!==O)!function(){var e,t=A[1];if("px"===t)e=k+"1px";else if("full"===t)e="100%";else if("screen"===t)if("w"===O)e="100vw";else{if("h"!==O)return void L();e="100vh"}else if(isNaN(t))if(t.indexOf("/")>-1){var n=t.split("/"),o=n[0],l=n[1];if(o=Number(o),l=Number(l),isNaN(o)||isNaN(l))return void L();e=""+k+(Number(o)/Number(l)).toFixed(6)+"%"}else e=""+k+t;else e=""+k+.25*Number(t)+"rem";var i=c.get(O[0]);if(void 0!==i)if(O.length>1)if("x"===O[1])U(i+"-right:"+e),U(i+"-left:"+e);else if("y"===O[1])U(i+"-top:"+e),U(i+"-bottom:"+e);else{var r=f.get(O[1]);if(void 0===r)return void L();U(i+r+e)}else U(i+":"+e);else L()}();else{var r=u.get(i);if(void 0===r)if(A.length<2)L();else{var d=z.get(O);"function"!=typeof d?L():d()}else"function"==typeof r?r():U(r)}}for(var I,$=t(document.styleSheets);!(I=$()).done;)console.log(I.value);function L(){if(s!==l.sheet)for(var e,n=t(document.styleSheets);!(e=n()).done;){var o=e.value;console.log(o);for(var r,a=t(o.cssRules);!(r=a()).done;){var c=r.value;if(c.type===CSSRule.STYLE_RULE&&c.selectorText.split(",").map(function(e){return e.trim()}).includes("."+i))return i=E.replace(/[.:]/,"\\$&"),console.log("."+i+c.cssText.slice(c.cssText.indexOf("{"))),void s.insertRule("."+i+c.cssText.slice(c.cssText.indexOf("{")),s.length)}}}function U(e){i=E.replace(/[.:]/,"\\$&"),console.log("."+i+"{"+e+"}"),s.insertRule("."+i+"{"+e+"}",s.length)}exports.processClasses=function(e){if(!n.has(e)){n.set(e,!0);for(var l,r=t(e=e.replace(/\s\s+/g," ").split(" "));!(l=r()).done;)o.has(i=l.value)||(C(),o.set(i,!0))}}});
//# sourceMappingURL=runcss.umd.js.map
