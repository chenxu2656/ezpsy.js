/**
 * @description return the randomId
 * @returns string ,randomId
 */
let randomId = function () {
    const str = '1234567890qwertyuiopasdfghjklzxcvbnm';
    const strLength = str.length;
    const ranDomLen = 8;
    let n = '';
    for (let i = 0; i < ranDomLen; i++)
        n += str.charAt(Math.floor(Math.random() * strLength));
    console.log(n);
    return n;
};
/**
 * @description construct a endWith method
 * @param {string} str 
 */
let endWith = function(str:string){
    
}
let fullScreen
export {randomId}
