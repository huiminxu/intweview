// 普通方式
// nvm  
// commonjs
function add(a,b){
    return a + b
}
function mul(a,b){
    return a * b
}
// module.exports = add;

module.exports = {
    add,mul
};