export const getProcessorData=(o=[],e,r)=>{var l;return(null===(l=(o||[]).find((o=>(null==o?void 0:o.processor_type)===e&&(null==o?void 0:o.live_mode)===!("live"!==r))))||void 0===l?void 0:l.processor_data)||{}};