
var btnEleObj = document.getElementById("btn");

///traditional way
//btnEleObj.onclick = showValue;
///btnEleObj.onclick = showValue1;

btnEleObj.addEventListener("click", showValue, false);
/*btnEleObj.addEventListener("click", showValue1, false);
btnEleObj.addEventListener("click", showValue2, false);
btnEleObj.addEventListener("click", showValue3, false);`
*/

var increment = 0;
var decrement = 0;
///Event Handler
function showValue(e){
    debugger;
    increment++;
    console.log(btnEleObj.value + " clicked " + increment + " times");
}

function showValue1(evt){
    decrement--;
    console.log(btnEleObj.value + " not clicked " + decrement + " times");
}
function showValue3(evt){
    decrement--;
    console.log(btnEleObj.value + " not clicked ");
}
function showValue4(evt){
    decrement--;
    console.log(btnEleObj.value + " not clicked  times");
}


//Event Bubbling
//Event Capturing
/// Event Delagation