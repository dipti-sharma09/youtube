import{s as o}from"./p-93127aa7.js";import{c as s}from"./p-03631502.js";import{g as i}from"./p-e2d5dc4f.js";import{s as e}from"./p-97f59651.js";const{processors:n}=i(),{state:r,onChange:d,on:l,dispose:t}=s({processors:[],methods:[],manualPaymentMethods:[],disabled:{processors:[]},sortOrder:{processors:["stripe","paystack","paypal","mollie","mock"],manualPaymentMethods:[],paymentMethods:{mollie:["creditcard","paypal"]}},instances:{stripe:void 0},config:{stripe:{paymentElement:!1}},...n},((e,o)=>JSON.stringify(e)!==JSON.stringify(o))),a=()=>o(r.processors,"processor_type",r.sortOrder.processors).filter((o=>(null==o?void 0:o.live_mode)===("live"===(null==e?void 0:e.mode)))).filter((e=>!(r.disabled.processors||[]).includes(e.processor_type))).filter((o=>{var r;return!(null===(r=null==e?void 0:e.checkout)||void 0===r?void 0:r.reusable_payment_method_required)||!!(null==o?void 0:o.recurring_enabled)})).filter(((e,o,r)=>!r.some((e=>"mollie"===e.processor_type))||"mollie"===e.processor_type||"mock"===e.processor_type)),p=e=>a().find((({processor_type:o})=>o===e)),v=e=>a().find((({processor_type:o})=>o===e)),c=e=>a().some((({processor_type:o})=>o!==e&&"paypal"!==o&&"mock"!==o)),u=()=>o(r.manualPaymentMethods,"id",r.sortOrder.manualPaymentMethods).filter((e=>!(r.disabled.processors||[]).includes(null==e?void 0:e.id))).filter((o=>{var r;return!(null===(r=null==e?void 0:e.checkout)||void 0===r?void 0:r.reusable_payment_method_required)||!!(null==o?void 0:o.reusable)})),m=()=>o(r.methods,"id",r.sortOrder.paymentMethods.mollie).filter((e=>{var o,r;return"applepay"!==e.id||(null===window||void 0===window?void 0:window.ApplePaySession)&&(null===(r=null===(o=null===window||void 0===window?void 0:window.ApplePaySession)||void 0===o?void 0:o.canMakePayments)||void 0===r?void 0:r.call(o))})),y=()=>[...a(),...u()],w=()=>{var e;return(null===(e=y())||void 0===e?void 0:e.length)>1},f=()=>[...m(),...u(),p("mock")].filter(Boolean),h=()=>{var e;return(null===(e=f())||void 0===e?void 0:e.length)>1};export{a,u as b,m as c,w as d,v as e,h as f,p as g,c as h,d as o,r as s};