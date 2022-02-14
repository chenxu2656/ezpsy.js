
import * as ezUtil from './util'
interface ezpsyInitOption{
    width?: number | string ,
    height?: number | string ,
    backgroundColor?: string
}
let init = (_dom: HTMLElement, _opts: ezpsyInitOption = {
        backgroundColor: "white",
        height: "500",
        width: "500"
    }) =>{
        let ez = document.createElement('canvas')
        ez.id = ezUtil.randomId()
        const domStyle = ezUtil.getStyle(_dom)
        console.log(domStyle);
        
        ez.style.width = _opts?.width ? `${_opts.width}px` : domStyle['width']
        ez.style.height = _opts?.height ? `${_opts.height}px` : domStyle['height']
        ez.style.backgroundColor = _opts?.backgroundColor
        _dom.appendChild(ez)
        return ez
}
let hello = ()=>{
    console.log('hello');
    
}
export {init , hello}