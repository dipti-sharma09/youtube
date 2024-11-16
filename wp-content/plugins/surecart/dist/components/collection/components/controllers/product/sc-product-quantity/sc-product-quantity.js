import{Host,h}from"@stencil/core";import{state}from"../../../../store/product/index";import{setProduct}from"../../../../store/product/setters";import{getMaxStockQuantity}from"../../../../functions/quantity";let id=0;export class ScProductQuantity{constructor(){this.inputId="sc-quantity-"+ ++id,this.helpId=`sc-quantity-help-text-${id}`,this.labelId=`sc-quantity-label-${id}`,this.size="medium",this.name=void 0,this.errors=void 0,this.showLabel=!0,this.label=void 0,this.required=!1,this.help=void 0,this.productId=void 0}render(){var e,t,r,i,o,s,l;const a=getMaxStockQuantity(null===(e=state[this.productId])||void 0===e?void 0:e.product,null===(t=state[this.productId])||void 0===t?void 0:t.selectedVariant);return h(Host,{key:"5719e071c6fd5da188cd09a0223912b96fa9460e"},h("sc-form-control",{key:"4753435c0a41ff546be5a2252960b666c9f5fcbf",exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("sc-quantity-select",{key:"e0eab821a5635476c3ff11666bfef9b6bf324cf1",size:this.size,quantity:Math.max((null===(i=null===(r=state[this.productId])||void 0===r?void 0:r.selectedPrice)||void 0===i?void 0:i.ad_hoc)?1:null===(o=state[this.productId])||void 0===o?void 0:o.quantity,1),disabled:null===(l=null===(s=state[this.productId])||void 0===s?void 0:s.selectedPrice)||void 0===l?void 0:l.ad_hoc,onScInput:e=>setProduct(this.productId,{quantity:e.detail}),...a?{max:a}:{}})))}static get is(){return"sc-product-quantity"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-product-quantity.css"]}}static get styleUrls(){return{$:["sc-product-quantity.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Size of the control"},attribute:"size",reflect:!0,defaultValue:"'medium'"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Name for the input. Used for validation errors."},attribute:"name",reflect:!1},errors:{type:"any",mutable:!1,complexType:{original:"any",resolved:"any",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Display server-side validation errors."},attribute:"errors",reflect:!1},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the label."},attribute:"show-label",reflect:!1,defaultValue:"true"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Input label."},attribute:"label",reflect:!1},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether the input is required."},attribute:"required",reflect:!1,defaultValue:"false"},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Help text"},attribute:"help",reflect:!1},productId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The product id"},attribute:"product-id",reflect:!1}}}}