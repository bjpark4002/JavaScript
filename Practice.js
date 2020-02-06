
//Q#1  output time info
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var today = new Date();

var hour = today.getHours()
if(hour >12){
    hour -= 12
}
console.log('\n\n#Q1 . Display time info\n'+'Today is : '+dayList[today.getDay()]+'\nCurrent Time is :' +hour+'PM:'+today.getMinutes()+':'+today.getSeconds()+'\n')


//Q#2 Curretn time.
var month = ''

if(today.getMonth() < 10){
    month = '0'+today.getMonth()
}else{
    month = today.getMonth()
}

var date = ''
if(today.getDate()< 10){
    date = '0'+today.getDate()
}else{
    date = today.getDate()
}
console.log('#Q2 Display Current Date\n'+month+'-'+date+'-'+today.getFullYear()+'\n')

//Q#10 
function typeChecker(a ,b){
 
    var result=""
    if(typeof(a)==typeof(b)){
        result = "same type"
    }else{
        result = "not same"
    }
    console.log(result)
}
typeChecker(1,'2')


