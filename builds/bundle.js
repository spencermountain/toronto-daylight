!function n(e,r,t){function o(u,c){if(!r[u]){if(!e[u]){var l="function"==typeof require&&require;if(!c&&l)return l(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var p=r[u]={exports:{}};e[u][0].call(p.exports,function(n){var r=e[u][1][n];return o(r||n)},p,p.exports,n,e,r,t)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(n,e,r){"use strict";var t=n("hyperapp").h,o=n("./lib");e.exports=function(n,e,r){var i={},u=[];return o.isString(n)?(i.class=n,o.isObject(e)?(i.style=e,u=r):u=e):o.isObject(n)?(i=n,u=e):u=n,t("div",i,u)}},{"./lib":2,hyperapp:3}],2:[function(n,e,r){"use strict";r.isObject=function(n){return"[object Object]"===Object.prototype.toString.call(n)},r.isArray=function(n){return"[object Array]"===Object.prototype.toString.call(n)},r.isString=function(n){return"string"==typeof n}},{}],3:[function(n,e,r){var t,o;t=this,o=function(n){"use strict";n.h=function(n,e){for(var r,t=[],o=[],i=arguments.length;i-- >2;)t.push(arguments[i]);for(;t.length;)if(Array.isArray(r=t.pop()))for(i=r.length;i--;)t.push(r[i]);else null!=r&&!0!==r&&!1!==r&&o.push(r);return"function"==typeof n?n(e||{},o):{name:n,props:e||{},children:o}},n.app=function(n,e,r,t){function o(){h=!h;var n=r(m,g);for(t&&!h&&(v=function n(e,r,t,o,i,c){if(o===t);else if(null==t)r=e.insertBefore(a(o,i),r);else if(o.name&&o.name===t.name){!function(n,e,r,t){for(var o in u(e,r))r[o]!==("value"===o||"checked"===o?n[o]:e[o])&&p(n,o,r[o],t,e[o]);r.onupdate&&d.push(function(){r.onupdate(n,e)})}(r,t.props,o.props,i=i||"svg"===o.name);for(var l=[],h={},v={},y=0;y<t.children.length;y++)l[y]=r.childNodes[y],null!=(w=f(g=t.children[y]))&&(h[w]=[l[y],g]);y=0;for(var m=0;m<o.children.length;){var g=t.children[y],b=o.children[m],w=f(g),j=f(b);if(v[w])y++;else if(null==j)null==w&&(n(r,l[y],g,b,i),m++),y++;else{var O=h[j]||[];w===j?(n(r,O[0],O[1],b,i),y++):O[0]?n(r,r.insertBefore(O[0],l[y]),O[1],b,i):n(r,l[y],null,b,i),m++,v[j]=b}}for(;y<t.children.length;)null==f(g=t.children[y])&&s(r,l[y],g),y++;for(var y in h)v[h[y][1].props.key]||s(r,h[y][0],h[y][1])}else o.name===t.name?r.nodeValue=o:(r=e.insertBefore(a(o,i),c=r),s(e,c,t));return r}(t,v,y,y=n));n=d.pop();)n()}function i(){h||(h=!h,setTimeout(o))}function u(n,e){var r={};for(var t in n)r[t]=n[t];for(var t in e)r[t]=e[t];return r}function c(n,e,r){var t={};return n.length?(t[n[0]]=n.length>1?c(n.slice(1),e,r[n[0]]):e,u(r,t)):e}function l(n,e){for(var r=0;r<n.length;r++)e=e[n[r]];return e}function f(n){return n&&n.props?n.props.key:null}function p(n,e,r,t,o){if("key"===e);else if("style"===e)for(var i in u(o,r))n[e][i]=null==r||null==r[i]?"":r[i];else"function"==typeof r||e in n&&!t?n[e]=null==r?"":r:null!=r&&!1!==r&&n.setAttribute(e,r),null!=r&&!1!==r||n.removeAttribute(e)}function a(n,e){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(e=e||"svg"===n.name)?document.createElementNS("http://www.w3.org/2000/svg",n.name):document.createElement(n.name);if(n.props){n.props.oncreate&&d.push(function(){n.props.oncreate(r)});for(var t=0;t<n.children.length;t++)r.appendChild(a(n.children[t],e));for(var o in n.props)p(r,o,n.props[o],e)}return r}function s(n,e,r,t){function o(){n.removeChild(function n(e,r,t){if(t=r.props){for(var o=0;o<r.children.length;o++)n(e.childNodes[o],r.children[o]);t.ondestroy&&t.ondestroy(e)}return e}(e,r))}r.props&&(t=r.props.onremove)?t(e,o):o()}var h,d=[],v=t&&t.children[0]||null,y=v&&function n(e,r){return{name:e.nodeName.toLowerCase(),props:{},children:r.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e,r)})}}(v,[].map),m=u(n),g=u(e);return i(function n(e,r,t){for(var o in t)"function"==typeof t[o]?function(n,o){t[n]=function(n){return"function"==typeof(n=o(n))&&(n=n(l(e,m),t)),n&&n!==(r=l(e,m))&&!n.then&&i(m=c(e,u(r,n),m)),n}}(o,t[o]):n(e.concat(o),r[o]=r[o]||{},t[o]=u(t[o]))}([],m,g)),g}},"object"==typeof r&&void 0!==e?o(r):"function"==typeof define&&define.amd||o(t.hyperapp={})},{}],4:[function(n,e,r){"use strict";var t=n("hyperapp"),o=(t.h,t.app),i=n("../lib/div"),u={count:0},c=function(){console.log("hi")},l={down:function(){return console.log("log"),u}};window.main=o(u,l,function(n,e){return i("green f1",{onclick:c},"hello")},document.body)},{"../lib/div":1,hyperapp:3}]},{},[4]);
