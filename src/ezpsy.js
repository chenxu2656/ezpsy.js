
import * as ezUtil from './util/util'
class EzpsyObj {
    constructor(id,dom){
        this.id= id
        this.dom=dom
    }
    createDom(){
        let ezpsyDom = document.createElement('canvas')
        ezpsyDom.id = this.id
        this.dom.append(ezpsyDom)
    }
}
let EzpsyInitOption = {
    width: "", // 5 | '5px' , default px
    height: ""
}
let init = (dom,opts)=> {
    // 定义一个新的类  ezpsy , 提供基本方法
    const ez = new EzpsyObj(ezUtil.randomId(),dom);
    ez.createDom()
}
export {init}