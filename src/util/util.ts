let randomId = () => {
    const str = '1234567890qwertyuiopasdfghjklzxcvbnm'
    const strLength = str.length
    const ranDomLen = 8
    let n = ''
    for (let i = 0; i < ranDomLen; i++) n += str.charAt(Math.floor(Math.random() * strLength));
    console.log(n);
    return n
} 
export {randomId}