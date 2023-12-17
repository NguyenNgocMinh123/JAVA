// Nhập các hệ số của phương trình
//var a = parseFloat(prompt("Nhập hệ số a:"));
//var b = parseFloat(prompt("Nhập hệ số b:"));
//var c = parseFloat(prompt("Nhập hệ số c:"));

//lấy các phần tử trong html 
var aInput = document.getElementById ('a');
var bInput = document.getElementById ('b');
var cInput = document.getElementById ('c');

var solveButton = document.getElementById('solveButton');

var resultOutput = document.getElementById ('result');

// xử lý sự kiện khi nhấn vào 'solve'  khi mà được nhấn vào
 if (solveButton) {solveButton.addEventListener
 ('click', function()
    {
     var a = parseFloat(aInput.value); 
     var b = parseFloat(bInput.value);
     var c = parseFloat(cInput.value);
 
     var result = quadraticEquation ( a,b,c);
     resultOutput.textContent = result;

    }
  )
}; 
function quadraticEquation (a,b,c){
 // Kiểm tra các giá trị của a, b, và c
 if (a == 0) {
        if (b == 0) {
         if (c == 0) {
            return "Phương trình có vô số nghiệm"
            } else {
            return "Phương trình vô nghiệm"
            }
        } else {
        var x = -c / b;
        return "Phương trình có một nghiệm duy nhất x = " + x;
        } 
 }  else {
  // Tính delta
    var delta = b * b - 4 * a * c;

    // Kiểm tra giá trị của delta
    if (delta < 0) {
        return "Phương trình không có nghiệm thực";
    } else if (delta == 0) { var x = -b / (2 * a);
    return "Phương trình có một nghiệm duy nhất x = " + x;
    } else 
    {
     var x1 = (-b + Math.sqrt(delta)) / (2 * a);
     var x2 = (-b - Math.sqrt(delta)) / (2 * a);
     return "Phương trình có hai nghiệm x1 = " + x1 + " và x2 = " + x2;
    }
 }
}

