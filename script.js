// Code goes here

function mul(){
  
    var field1= document.getElementById("var1").value
    var field2= document.getElementById("var2").value
    var result = field1 * field2
    
    document.getElementById("answer").innerHTML = "= "+result
  }
  
  function div(){
    var field1= document.getElementById("var1").value
    var field2= document.getElementById("var2").value
    if(field2 > field1){
      document.getElementById("answer").innerHTML = "wrong input"
      return
    }
    var result = field1 / field2
    
    document.getElementById("answer").innerHTML = ":"+result
  }
  
  //get current url. window onload is needed to use function after dom is loaded.
  window.onload = function() {document.getElementById("URL").innerHTML=window.location.href}
  
  function letsRev(){
    var tem1 = document.getElementById("var3").value
  
    if(tem1 < 10){
      document.getElementById("revAns").innerHTML = ": "+tem1
      return
    }
    tem1 = tem1.split("").reverse().join("")
    document.getElementById("revAns").innerHTML = ": "+tem1
  }
  
// Code goes here
function compareNumbers(a, b) {
    return a - b;
  }

function secondSmallBig(){

    '1,6,2,3,5'


    var arrayInput = document.getElementById("arrayInput").value
    arrayInput=arrayInput.substr(1)
    arrayInput=arrayInput.slice(0,-1)
    arrayInput=arrayInput.split(",")
    var i;          //i<5
    for(i =0 ; i< arrayInput.length; i++){
    arrayInput[i]=parseInt(arrayInput[i],10)  
    }
    
    arrayInput=arrayInput.sort(function(a,b) { return a - b; });
    document.getElementById("arrayInputAns").innerHTML = "<br>Sorted Form : "+arrayInput+"<br>2nd smallest : "+arrayInput[0] + "<br>2nd biggest : "+arrayInput[arrayInput.length-2]
    // arrayInput+" "+i + typeof(arrayInput)+" "+typeof(arrayInput[0])
    
    //   [12,1254,21,2,66,20]
}
  
    

function outputRange(){
    var range1 = parseInt(document.getElementById("range1").value,10)
    var range2 = parseInt(document.getElementById("range2").value,10)
    var i=range1+1
    
    var result= [];
    for(i;i<range2;i++){
      result.push(i);
    }
    document.getElementById('rangeAns').innerHTML ="[" +result+"]"
    
  }