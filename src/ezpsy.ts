
import * as ezUtil from './util/util'
class EzpsyObj {
    id: string | number// generator random id for each element
    dom: HTMLElement
}

export interface EzpsyInitOption {
    width?: number | string  // 5 | '5px' , default px
    height?: number | string
}
export function init (dom:HTMLElement,opts?:EzpsyInitOption) {
    // 定义一个新的类  ezpsy , 提供基本方法
    const ez = new EzpsyObj(ezUtil.randomId(),dom);
    return ez
}