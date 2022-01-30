/**
 * @description return the css value of current dom , if attr is null ,return object
 * @param {HTMLElement} dom 
 * @param {string} [attr]
 * @returns {string | object}
 */
let getStyle = (dom:HTMLElement,attr?:string)=>{
    return attr?window.getComputedStyle(dom)[attr]:window.getComputedStyle(dom)
}
let unitProcess = (value:any) => {
    let _value = value.toSting()
    
}
export {getStyle}