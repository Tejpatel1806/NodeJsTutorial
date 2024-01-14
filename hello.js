console.log("Hii !! I am a Tej Patel");

// console.log(window); gives a error window is not defined
//console.log(alert('hello')); gives a error alert is not defined
//uper ni 2 line aapde browser ma inspect kari console ma lakhsu to tya execute thase pan ahi error aape che karan ke jyare aapde v8 engine ne c++ jode merge karyu tyare v8 engine ma thi DOM related jetli pan vastu che te ane window related vastu kadhi didhi ane pachi c++ jode merge karyu che etla mate nodejs ma document.getElementById ne evu nai lakhi sakie e error aapse karan ke dom related je che e aapde already nodejs ma thi kadhi nakhyu che

const math = require("./math");
console.log(math);
//{ addfun: [Function: add], subfun: [Function: sub],value:"tej patel" }
console.log(math.value);
console.log(math.addfun(2, 3));
