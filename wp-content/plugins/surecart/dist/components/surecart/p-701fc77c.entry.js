import{r as c,h as e}from"./p-e97fde0a.js";import{i as a}from"./p-6ec14893.js";import{a as t}from"./p-401e165e.js";import"./p-3f6362a4.js";const s=":host{display:block}";const o=s;const f=class{constructor(e){c(this,e);this.heading=undefined;this.price=undefined;this.busy=false}async handleSubmit(c){const{ad_hoc_amount:e}=await c.target.getFormJson();this.busy=true;return window.location.assign(t(window.location.href,{action:"confirm",ad_hoc_amount:e}))}render(){return e("sc-dashboard-module",{key:"9cb13efa4bd8468e50f01892fa968b00102d1147",heading:this.heading||wp.i18n.__("Enter An Amount","surecart"),class:"subscription-switch"},e("sc-card",{key:"83495d98ec41f244524724a5efa91c5fbf2f752d"},e("sc-form",{key:"099b0fadb7aa7f7661d2c8a93b5b0b95f4b34fd3",onScSubmit:c=>this.handleSubmit(c)},e("sc-price-input",{key:"c69a11cc4109c22f408160272cf3c066802c5635",label:"Amount",name:"ad_hoc_amount",autofocus:true,required:true},e("span",{key:"6fa945950136e4e66f40fc3b7d6be74cfc40a2c4",slot:"suffix",style:{opacity:"0.75"}},a(this.price))),e("sc-button",{key:"5673577d89bdba9d5a76f925851e7ccbee571b39",type:"primary",full:true,submit:true,loading:this.busy},wp.i18n.__("Next","surecart")," ",e("sc-icon",{key:"4057d9b255723fa2ab4564a58ef58cabf1ff3f3b",name:"arrow-right",slot:"suffix"})))),this.busy&&e("sc-block-ui",{key:"e081fc4cd98af40bc0c8ac62264664ce0f498e33",style:{zIndex:"9"}}))}};f.style=o;export{f as sc_subscription_ad_hoc_confirm};
//# sourceMappingURL=p-701fc77c.entry.js.map