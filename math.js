function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
let a = "tej patel";
module.exports = { addfun: add, subfun: sub, value: a }; //same as module.exports={add,sub,a}; ane biji baju hello.js ma aapde add,sub ane a  kari ne use kari saksu like const {add,sub,a}=require("./math.js");
