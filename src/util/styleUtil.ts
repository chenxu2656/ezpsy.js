export{
    getStyle,
    setStyle
}

/**
 * @description 返回元素属性，对象或者属性值
 * @author chen.xu
 * @date 14/02/2022
 * @param {HTMLElement} dom
 * @param {string} [attr]
 * @return {*} 
 */
let getStyle = (dom:HTMLElement,attr?:string)=>{
    return attr?window.getComputedStyle(dom)[attr]:window.getComputedStyle(dom)
}
/**
 * @description  设置元素属性
 * @author chen.xu
 * @date 14/02/2022
 * @param {HTMLElement} dom
 * @param {string} attr
 * @param {string} value
 */
let setStyle = (dom:HTMLElement, attr:string,value:string)=>{
    dom.style['attr'] = value
}
// let setUnit = (variable:any){

// }