import ezPsy from "../dist/index.js"
const canvasStyle = {
    backgroundColor: "black",
    width: "60",
    // height: "60"
}
let canvasDom = document.querySelector('#container')
let dom2 = ezPsy.init(canvasDom,canvasStyle)
console.log(dom2);
// console.log(ezPsy.hello);