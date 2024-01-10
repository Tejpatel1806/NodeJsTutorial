function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
module.exports={addfun:add,subfun:sub};//same as module.exports={add,sub}; ane biji baju hello.js ma aapde add ane sub kari ne use kari saksu like const {add,sub}=require("./math.js");