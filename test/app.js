import ezPsy from "../dist/index.js"
console.log(ezPsy);
let canvasDom = document.querySelector('#container')
let dom2 = new ezPsy({
    node: canvasDom
})
console.log(dom2.init(canvasDom));
// console.log(ezPsy.hello);