"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[8516],{4805:function(e,r,t){t.d(r,{a:function(){return f},b:function(){return s},g:function(){return d}});var n=t(4467),o=t(296);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return u(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var _n=0,n=function(){};return{s:n,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw o}}}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function s(e){for(var r,t="",n=Object.entries(e);r=n.shift();){var i=r,a=(0,o.A)(i,2),u=a[0],s=a[1];if(Array.isArray(s)||s&&s.constructor===Object){var l,d=c(Object.entries(s).reverse());try{for(d.s();!(l=d.n()).done;){var f=(0,o.A)(l.value,2),p=f[0],h=f[1];n.unshift(["".concat(u,"[").concat(p,"]"),h])}}catch(e){d.e(e)}finally{d.f()}}else void 0!==s&&(null===s&&(s=""),t+="&"+[u,s].map(encodeURIComponent).join("="))}return t.substr(1)}function l(e){try{return decodeURIComponent(e)}catch(r){return e}}function d(e){return(function(e){var r;try{r=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(r)return r}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,r){var t=r.split("=").filter(Boolean).map(l),n=(0,o.A)(t,2),i=n[0],c=n[1],u=void 0===c?"":c;return i&&function(e,r,t){for(var n=r.length,o=n-1,i=0;i<n;i++){var c=r[i];!c&&Array.isArray(e)&&(c=e.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;var u=!isNaN(Number(r[i+1]));e[c]=i===o?t:e[c]||(u?[]:{}),Array.isArray(e[c])&&!u&&(e[c]=a({},e[c])),e=e[c]}}(e,i.replace(/\]/g,"").split("["),u),e}),Object.create(null))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;if(!r||!Object.keys(r).length)return e;var t=e,n=e.indexOf("?");return-1!==n&&(r=Object.assign(d(e),r),t=t.substr(0,n)),t+"?"+s(r)}},4883:function(e,r,t){t.d(r,{a:function(){return F},h:function(){return H}});var n=t(467),o=t(45),i=t(296),a=t(4467),c=t(9280),u=t.n(c),s=t(4805),l=t(3506),d=["rest_route"],f=["path","url"],p=["url","path","data","parse"];function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,a.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function w(e,r){return void 0!==(0,l.g)(e,r)}function m(e){var r=e.split("?"),t=r[1],n=r[0];return t?n+"?"+t.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,r){return e[0].localeCompare(r[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):n}var g=function(e,r){var t,n,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(t=e.namespace.replace(/^\/|\/$/g,""),o=(n=e.endpoint.replace(/^\//,""))?t+"/"+n:t),delete e.namespace,delete e.endpoint,r(v(v({},e),{},{path:o}))};function y(e,r){return Promise.resolve(r?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var b=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var r=e.match(/<([^>]+)>; rel="next"/);return r?{next:r[1]}:{}}(e.headers.get("link")).next},O=function(e){var r=!!e.path&&-1!==e.path.indexOf("per_page=-1"),t=!!e.url&&-1!==e.url.indexOf("per_page=-1");return r||t},x=function(){var e=(0,n.A)(u().mark((function e(r,t){var n,i,a,c,l,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.parse){e.next=2;break}return e.abrupt("return",t(r));case 2:if(O(r)){e.next=4;break}return e.abrupt("return",t(r));case 4:return e.next=6,F(v(v({},(p={per_page:100},void 0,void 0,h=(u=r).path,w=u.url,v(v({},(0,o.A)(u,f)),{},{url:w&&(0,s.a)(w,p),path:h&&(0,s.a)(h,p)}))),{},{parse:!1}));case 6:return n=e.sent,e.next=9,b(n);case 9:if(i=e.sent,Array.isArray(i)){e.next=12;break}return e.abrupt("return",i);case 12:if(a=_(n)){e.next=15;break}return e.abrupt("return",i);case 15:c=[].concat(i);case 16:if(!a){e.next=27;break}return e.next=19,F(v(v({},r),{},{path:void 0,url:a,parse:!1}));case 19:return l=e.sent,e.next=22,b(l);case 22:d=e.sent,c=c.concat(d),a=_(l),e.next=16;break;case 27:return e.abrupt("return",c);case 28:case"end":return e.stop()}var u,p,h,w}),e)})));return function(_x,r){return e.apply(this,arguments)}}(),j=new Set(["PATCH","PUT","DELETE"]),k=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,r)).catch((function(e){return P(e,r)}))};function P(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var r={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw r;return e.json().catch((function(){throw r}))}(e).then((function(e){var r={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||r}))}var A,S,C,E,T,I,D,M={Accept:"application/json, */*;q=0.1"},L={credentials:"include"},N=[function(e,r){return"string"!=typeof e.url||w(e.url,"_locale")||(e.url=(0,s.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||w(e.path,"_locale")||(e.path=(0,s.a)(e.path,{_locale:"user"})),r(e)},g,function(e,r){var t=e.method,n=void 0===t?"GET":t;return j.has(n.toUpperCase())&&(e=v(v({},e),{},{headers:v(v({},e.headers),{},{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),r(e)},x],U=function(e){if(e.status>=200&&e.status<300)return e;throw e},R=function(e){var r=e.url,t=e.path,n=e.data,i=e.parse,a=void 0===i||i,c=(0,o.A)(e,p),u=e.body,s=e.headers;return s=v(v({},M),s),n&&(u=JSON.stringify(n),s["Content-Type"]="application/json"),window.fetch(r||t||window.location.href,v(v(v({},L),c),{},{body:u,headers:s})).then((function(e){return Promise.resolve(e).then(U).catch((function(e){return P(e,a)})).then((function(e){return k(e,a)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function F(e){return N.reduceRight((function(e,r){return function(t){return r(t,e)}}),R)(e).catch((function(r){return"rest_cookie_invalid_nonce"!==r.code?Promise.reject(r):window.fetch(F.nonceEndpoint).then(U).then((function(e){return e.text()})).then((function(r){return F.nonceMiddleware.nonce=r,F(e)}))}))}F.use=function(e){N.unshift(e)},F.setFetchHandler=function(e){R=e},F.createNonceMiddleware=function(e){var r=function e(r,t){var n=r.headers,o=void 0===n?{}:n;for(var i in o)if("x-wp-nonce"===i.toLowerCase()&&o[i]===e.nonce)return t(r);return t(v(v({},r),{},{headers:v(v({},o),{},{"X-WP-Nonce":e.nonce})}))};return r.nonce=e,r},F.createPreloadingMiddleware=function(e){var r=Object.fromEntries(Object.entries(e).map((function(e){var r=(0,i.A)(e,2),t=r[0],n=r[1];return[m(t),n]})));return function(e,t){var n=e.parse,i=void 0===n||n,a=e.path;if(!a&&e.url){var c=(0,s.g)(e.url),u=c.rest_route,l=(0,o.A)(c,d);"string"==typeof u&&(a=(0,s.a)(u,l))}if("string"!=typeof a)return t(e);var f=e.method||"GET",p=m(a);if("GET"===f&&r[p]){var h=r[p];return delete r[p],y(h,!!i)}if("OPTIONS"===f&&r[f]&&r[f][p]){var v=r[f][p];return delete r[f][p],y(v,!!i)}return t(e)}},F.createRootURLMiddleware=function(e){return function(r,t){return g(r,(function(r){var n,o=r.url,i=r.path;return"string"==typeof i&&(n=e,-1!==e.indexOf("?")&&(i=i.replace("?","&")),i=i.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(i=i.replace("?","&")),o=n+i),t(v(v({},r),{},{url:o}))}))}},F.fetchAllMiddleware=x,F.mediaUploadMiddleware=function(e,r){if(!function(e){var r=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&r}(e))return r(e);var t=0,n=function e(n){return t++,r({path:"/wp/v2/media/".concat(n,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return t<5?e(n):(r({path:"/wp/v2/media/".concat(n,"?force=true"),method:"DELETE"}),Promise.reject())}))};return r(v(v({},e),{},{parse:!1})).catch((function(r){var t=r.headers.get("x-wp-upload-attachment-id");return r.status>=500&&r.status<600&&t?n(t).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(r)})):P(r,e.parse)})).then((function(r){return k(r,e.parse)}))},F.createThemePreviewMiddleware=function(e){return function(r,t){if("string"==typeof r.url){var n=(0,l.g)(r.url,"wp_theme_preview");void 0===n?r.url=(0,s.a)(r.url,{wp_theme_preview:e}):""===n&&(r.url=(0,l.r)(r.url,"wp_theme_preview"))}if("string"==typeof r.path){var o=(0,l.g)(r.path,"wp_theme_preview");void 0===o?r.path=(0,s.a)(r.path,{wp_theme_preview:e}):""===o&&(r.path=(0,l.r)(r.path,"wp_theme_preview"))}return t(r)}},F.fetchAllMiddleware=null,F.use(F.createRootURLMiddleware((null===(S=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===S?void 0:S.root_url)||(null===(C=null===window||void 0===window?void 0:window.scData)||void 0===C?void 0:C.root_url))),(null===(E=null===window||void 0===window?void 0:window.scData)||void 0===E?void 0:E.nonce)&&(F.nonceMiddleware=F.createNonceMiddleware(null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce),F.use(F.nonceMiddleware)),(null===(I=null===window||void 0===window?void 0:window.scData)||void 0===I?void 0:I.nonce_endpoint)&&(F.nonceEndpoint=null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.nonce_endpoint),F.use((function(e,r){return e.path=(0,s.a)(e.path,{t:Date.now()}),r(e)})),F.use((function(e,r){var t=r(e);return t.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),Promise.reject(e)})),t}));var z=function(e){var r={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw r;return e.json().catch((function(){throw r}))},H=function(){var e=(0,n.A)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(r);case 2:if("rest_cookie_invalid_nonce"===(t=e.sent).code){e.next=5;break}throw t;case 5:return e.abrupt("return",window.fetch(F.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){F.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},3506:function(e,r,t){t.d(r,{g:function(){return o},r:function(){return i}});var n=t(4805);function o(e,r){return(0,n.g)(e)[r]}function i(e){var r=e.indexOf("?");if(-1===r)return e;for(var t=(0,n.g)(e),o=e.substr(0,r),i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];a.forEach((function(e){return delete t[e]}));var u=(0,n.b)(t);return u?o+"?"+u:o}},8516:function(e,r,t){t.r(r),t.d(r,{sc_login_form:function(){return l}});var n=t(467),o=t(3029),i=t(2901),a=t(9280),c=t.n(a),u=t(1346),s=t(4883),l=function(){return(0,i.A)((function e(r){(0,o.A)(this,e),(0,u.r)(this,r),this.step=0,this.email="",this.password="",this.verifyCode="",this.loading=void 0,this.error=void 0}),[{key:"handleStepChange",value:function(){var e=this;1===this.step&&setTimeout((function(){var r,t;null===(t=null===(r=e.passwordInput)||void 0===r?void 0:r.triggerFocus)||void 0===t||t.call(r)}),50),2===this.step&&setTimeout((function(){var r,t;null===(t=null===(r=e.codeInput)||void 0===r?void 0:r.triggerFocus)||void 0===t||t.call(r)}),50)}},{key:"handleLoadingChange",value:function(e){e&&(this.error=null)}},{key:"handleVerifyCodeChange",value:function(e){(null==e?void 0:e.length)>=6&&this.submitCode()}},{key:"handleError",value:function(e){console.error(this.error),this.error=e||{message:wp.i18n.__("Something went wrong","surecart")}}},{key:"createLoginCode",value:(a=(0,n.A)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,(0,s.a)({method:"POST",path:"surecart/v1/verification_codes",data:{login:this.email}});case 4:this.step=this.step+1,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.handleError(e.t0);case 10:return e.prev=10,this.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,7,10,13]])}))),function(){return a.apply(this,arguments)})},{key:"submitCode",value:(t=(0,n.A)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,(0,s.a)({method:"POST",path:"surecart/v1/verification_codes/verify",data:{login:this.email,code:this.verifyCode}});case 4:if(e.sent.verified){e.next=8;break}throw{message:wp.i18n.__("Verification code is not valid. Please try again.","surecart")};case 8:window.location.reload(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),this.handleError(e.t0),this.loading=!1;case 15:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(){return t.apply(this,arguments)})},{key:"login",value:(r=(0,n.A)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,(0,s.a)({method:"POST",path:"surecart/v1/login",data:{login:this.email,password:this.password}});case 4:r=e.sent,(t=r.redirect_url)?window.location.replace(t):window.location.reload(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),this.handleError(e.t0),this.loading=!1;case 13:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return r.apply(this,arguments)})},{key:"checkEmail",value:(e=(0,n.A)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,(0,s.a)({method:"POST",path:"surecart/v1/check_email",data:{login:this.email}});case 4:this.step=this.step+1,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.handleError(e.t0);case 10:return e.prev=10,this.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,7,10,13]])}))),function(){return e.apply(this,arguments)})},{key:"renderInner",value:function(){var e=this;return 2===this.step?(0,u.h)(u.F,null,(0,u.h)("div",{class:"login-form__title",part:"title"},wp.i18n.__("Check your email for a confirmation code","surecart")),(0,u.h)("div",null,(0,u.h)("sc-form",{onScFormSubmit:function(){return e.submitCode()}},(0,u.h)("sc-input",{label:wp.i18n.__("Confirmation code","surecart"),type:"text",ref:function(r){return e.codeInput=r},autofocus:!0,required:!0,onScInput:function(r){return e.verifyCode=r.target.value}}),(0,u.h)("sc-button",{type:"primary",submit:!0,full:!0},(0,u.h)("sc-icon",{name:"lock",slot:"prefix"}),wp.i18n.__("Login with Code","surecart"))))):1===this.step&&this.email?(0,u.h)(u.F,null,(0,u.h)("div",{class:"login-form__title",part:"title"},(0,u.h)("div",null,wp.i18n.__("Welcome","surecart")),(0,u.h)("sc-button",{style:{fontSize:"18px"},size:"small",pill:!0,caret:!0,onClick:function(){return e.step=e.step-1}},(0,u.h)("sc-icon",{name:"user",slot:"prefix"}),this.email)),(0,u.h)("sc-flex",{flexDirection:"column",style:{"--sc-flex-column-gap":"var(--sc-spacing-large)"}},(0,u.h)("div",null,(0,u.h)("sc-form",{onScFormSubmit:function(){return e.createLoginCode()}},(0,u.h)("sc-button",{class:"login-code",type:"primary",submit:!0,full:!0},(0,u.h)("sc-icon",{name:"mail",slot:"prefix"}),wp.i18n.__("Send a login code","surecart"))),(0,u.h)("sc-divider",{style:{"--spacing":"0.5em"}},wp.i18n.__("or","surecart")),(0,u.h)("sc-form",{onScFormSubmit:function(){return e.login()}},(0,u.h)("sc-input",{label:wp.i18n.__("Enter your password","surecart"),type:"password",ref:function(r){return e.passwordInput=r},onKeyDown:function(r){return"Enter"===r.key&&e.login()},autofocus:!0,required:!0,onScInput:function(r){return e.password=r.target.value}}),(0,u.h)("sc-button",{type:"primary",outline:!0,submit:!0,full:!0},(0,u.h)("sc-icon",{name:"lock",slot:"prefix"}),wp.i18n.__("Login","surecart")))))):(0,u.h)(u.F,null,(0,u.h)("div",{class:"login-form__title",part:"title"},(0,u.h)("slot",{name:"title"})),(0,u.h)("sc-form",{onScFormSubmit:function(){return e.checkEmail()}},(0,u.h)("sc-input",{type:"text",value:this.email,label:wp.i18n.__("Username or Email Address","surecart"),onScInput:function(r){return e.email=r.target.value},onKeyDown:function(r){return"Enter"===r.key&&e.checkEmail()},required:!0,autofocus:!0}),(0,u.h)("sc-button",{type:"primary",submit:!0,full:!0},(0,u.h)("sc-icon",{name:"arrow-right",slot:"suffix"}),wp.i18n.__("Next","surecart"))))}},{key:"render",value:function(){var e,r,t=this;return(0,u.h)("div",{key:"a198dd3dd85a3fd53b499d6f01fc225b1e9886d8",class:"login-form"},(0,u.h)("sc-card",{key:"dc34f52874910e41dd8b46af1d512c8d5166cd50"},!!this.error&&(0,u.h)("sc-alert",{key:"a63a28c99a041e9d61fd0cfc7e331537426c5ede",open:!0,type:"danger",closable:!0,onScHide:function(){return t.error=null}},(0,u.h)("span",{key:"293bb57f85b4f50fb728be0d559148286f0ba8fb",slot:"title",innerHTML:null===(e=this.error)||void 0===e?void 0:e.message}),((null===(r=this.error)||void 0===r?void 0:r.additional_errors)||[]).map((function(e){var r=e.message;return(0,u.h)("div",{innerHTML:r})}))),this.renderInner()),this.loading&&(0,u.h)("sc-block-ui",{key:"2f0926e300c1f8d68c5eb444583a98ef593580d8",spinner:!0,style:{zIndex:"9","--sc-block-ui-opacity":"0.5"}}))}}],[{key:"watchers",get:function(){return{step:["handleStepChange"],loading:["handleLoadingChange"],verifyCode:["handleVerifyCodeChange"]}}}]);var e,r,t,a}();l.style=".login-form{font-size:16px;margin:var(--sc-spacing-xx-large) auto;max-width:400px;position:relative}.login-form__title{margin-bottom:var(--sc-spacing-medium);font-size:var(--sc-font-size-xx-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense);text-align:var(--sc-login-text-align, center)}.login-form__back{text-align:center;font-size:var(--sc-font-size-small)}sc-card{--sc-card-padding:var(--sc-spacing-xx-large)}"},45:function(e,r,t){t.d(r,{A:function(){return o}});var n=t(8587);function o(e,r){if(null==e)return{};var t,o,i=(0,n.A)(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},8587:function(e,r,t){function n(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}t.d(r,{A:function(){return n}})}}]);