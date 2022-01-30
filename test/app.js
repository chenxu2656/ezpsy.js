import ezPsy from "../dist/index.js"
let canvasStyle = {
    backgroundColor: "black",
    width: "60"
}
let test = ezPsy.hello
test()
let dom1 = document.querySelector('#dom1')
let dom2 = ezPsy.init(dom1,canvasStyle)
console.log(dom2);
// console.log(ezPsy.hello);