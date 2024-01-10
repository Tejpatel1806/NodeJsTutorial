const fs=require("fs");
//fs ma gana badha function che official website par jaine jovana e badha ne ane use karvana

//synchronous file ma write karva mate
// fs.writeFileSync("./write.txt","Hello Tej");
//aa uper ni line jo write.txt nai hoy to e pehla create karse pachi ema content nakhse Hello Tej
//ane jo aa file hase to ema je content hase e bhusai jase ane eni jagya e Hello Tej aavi jase

//Asynchronous file ma write karva mate
// fs.writeFile("./write.txt","Hello HERE Tej",(err)=>{console.log(err)});
//aa uper ni line jo write.txt nai hoy to e pehla create karse pachi ema content nakhse Hello Tej
//ane jo aa file hase to ema je content hase e bhusai jase ane eni jagya e Hello Tej aavi jase

//File ne read karva mate 
const data=fs.readFileSync("./read.txt","utf-8");
//aama uper utf-8 lakhvanu reason e che ke aapde je data aavto hoy te binary ma aavto hoy ene string ma convert karva mate aapde utf-8 lakhvu padse
console.log(data);

//aapde asynchronous rite read karie to te kai return nai kare ane aapde data callback function ma j aavse jyare synchronous ma e data return karse
fs.readFile("./read.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log('Error',err);
    }
    else
    {
        console.log(data);
    }
})

//aa che te file ne override nai kare khali file ma je data che eni pachad aa data ne append kari dese
fs.appendFileSync("./write.txt","I AM A TEJ PATEL");