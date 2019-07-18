var redBtnElement = document.getElementById('redBtn');
redBtnElement.onclick =function() {
    var devColorElement = document.getElementById('divColor');
   // devColorElement.style.backgroundColor = 'red';
    devColorElement.className = 'class-one';
};

var redBtnElement = document.getElementById('greenBtn');
redBtnElement.onclick =function() {
    var devColorElement = document.getElementById('divColor');
   // devColorElement.style.backgroundColor = 'green';
    devColorElement.className ='class-two';
};

var redBtnElement = document.getElementById('blueBtn');
redBtnElement.onclick =function() {
    var devColorElement = document.getElementById('divColor');
    devColorElement.className = 'class-three';
};

var redBtnElement = document.getElementById('darkBtn');
redBtnElement.onclick =function() {
    var devColorElement = document.getElementById('divColor');
    devColorElement.className = 'my-style';
};


var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var firstNumber = document.getElementById('startingNumber').value;
    var lastNumber = document.getElementById('endingNumber').value;
    var result = ' ';
    for ( var i = firstNumber; i <= lastNumber; i++){
         result += i;
    }
    document.getElementById('result').value = result;

};

function myFunction() {
    document.getElementById("myForm").reset();
}