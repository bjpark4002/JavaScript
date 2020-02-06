// Code goes here


//Q#3
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
  

  //Q#4
  //get current url. window onload is needed to use function after dom is loaded.
  window.onload = function() {document.getElementById("URL").innerHTML=window.location.href}
  


  //Q#5
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


  //Q#6
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
  
    
//Q#7
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

  function mergeSortFunction(){


  }


  //Q#7-a

function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)  
  const left = arr.slice(0, middle)  
  const right = arr.slice(middle)  

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}
  function mergeSortFunction(){
    var arrayInput = document.getElementById("mergeInput").value
    arrayInput=arrayInput.substr(1)
    arrayInput=arrayInput.slice(0,-1)
    arrayInput=arrayInput.split(",")
    var i;          //i<5
    for(i =0 ; i< arrayInput.length; i++){
    arrayInput[i]=parseInt(arrayInput[i],10)  
    }

    arrayInput = mergeSort(arrayInput)
    document.getElementById("mergeAnswer").innerHTML =" ::::: " + arrayInput
  }
  //   [1,2,44,3,66,34,21,11]
  
  
  
  //Q#8

  function findLargest(){
  
    var fiveNum = document.getElementById("fiveNumberInput").value
    
    var arrayForm = fiveNum.split(',')
    var i = 0 
    var result = arrayForm[0];
    for(i = 1  ; i < 5; i++){
      if( parseInt(arrayForm[i]) > result){
        result = parseInt(arrayForm[i]);
      }
    }
    document.getElementById("largestNumber").innerHTML = result
    
  }



  //Q#9
  function NullChecker(){
  
    var nullcheck = document.getElementById("nullchecker").value
    var result =""
    if(nullcheck=="")
      result = "It is Null"
    else
      result = "It is not Null"
    document.getElementById("nullanswer").innerHTML = result
  }


  

