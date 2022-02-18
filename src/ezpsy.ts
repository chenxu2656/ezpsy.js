
import * as util from './util'
interface ezpsyInitOption{
    width?: number | string ,
    height?: number | string ,
    backgroundColor?: string ,
    fullScreen?: boolean | string
}
export default class ezPsy{
    /** init Dom */
    node: HTMLElement;
    /** width */
    width?: string | number ;
    /** height */
    height?: string | number ;
    /** background color */
    backgroundColor?: string
    /** fullscreen or not , priority > height&width */
    fullScreen?: boolean | string;
    constructor(node,options?:ezpsyInitOption){
        const params = options ? options : {
            width: "500px",
            height: "100px",
            fullScreen: false,
            backgroundColor: "#ffffff"
        }
        // this.node = node
        this.width = params.width
        this.height = params.height
        this.backgroundColor = params.backgroundColor
        this.fullScreen = params.fullScreen
        node.appendChild()
    }

    init(_dom: HTMLElement){
        if()
        let ez = document.createElement('canvas')
        ez.id = util.randomId()
        const domStyle = util.getStyle(_dom)
        console.log(domStyle);
        
        ez.style.width = _opts?.width ? `${_opts.width}px` : domStyle['width']
        ez.style.height = _opts?.height ? `${_opts.height}px` : domStyle['height']
        ez.style.backgroundColor = _opts?.backgroundColor
        _dom.appendChild(ez)
        return ez
    }   
}
