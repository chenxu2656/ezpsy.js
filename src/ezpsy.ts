
import * as ezUtil from './util/util'

export default class EZPSY {
    private _id: string
    private _dom: HTMLElement 
    constructor(
        _dom:HTMLElement
    ){
        this._id = ezUtil.randomId()
        this._dom = _dom
    }
    // 创建 canvas dom节点 作为基础画布
    init(){
        let canvasDom:HTMLElement = document.createElement('canvas')
        canvasDom.id = this._id
        this._dom.appendChild(canvasDom)
    }
}