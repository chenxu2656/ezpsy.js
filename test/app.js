import ezPsy from "../dist/index.js"
console.log(ezPsy);
const canvasStyle = {
    backgroundColor: "black",
    width: "60",
    height: ""
    // height: "60"
}
let canvasDom = document.querySelector('#container')
let dom2 = new ezPsy({
    node: canvasDom
})
console.log(dom2);
console.log(st);
console.log(dom2);
// console.log(ezPsy.hello);