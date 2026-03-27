var userName = prompt("Enter your Name")

var math = +prompt("Enter Maths Number")
var isl = +prompt("Enter Islamiat  Number")
var urdu = +prompt("Enter Urdu Number")
var eng = +prompt("Enter English Number")
var fxs = +prompt("Enter physics Number")


var obtainedMarks = math +isl + urdu + eng + fxs;
var total = 500;
var  percentage = (obtainedMarks / total) * 100;
var grade;


if (percentage > 100){
    grade = "invalid Perc"
}
else if (percentage >= 80){
    grade = "A+"
}
else if (percentage >= 70){
    grade = "A"
}
else if (percentage >= 60){
    grade = "b"
}
else if (percentage >= 50){
    grade = "c"
}
else{
    grade = "Fail"
}
document.writeln(`
    
        <table border="" width="60%" align="center">
        <tr>
            <th>name</th>
            <th>Maths</th>
            <th>Isl</th>
            <th>Urdu</th>
            <th>Eng</th>
            <th>physics</th>
            <th>obtainedMarks</th>
            <th>Perc</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>${userName}</td>
            <td>${math}</td>
            <td>${isl}</td>
            <td>${urdu}</td>
            <td>${eng}</td>
            <td>${fxs}</td>
            <td> ${obtainedMarks} / ${total} </td>
            <td> ${percentage.toFixed(2)} </td>
            <td> ${grade} </td>
        </tr>
    </table>    
`)

var item_name1 = prompt("Enter your item name")
var item_quantity1 = +prompt("Enter quantity")
var item1 = +prompt("enter your item price " + item_name1)

var item_name2 = prompt("enter your item 2")
var item_quantity2 = +prompt("Enter quantity")
var item2 = +prompt("enter your item price " + item_name2)

var item_name3 = prompt("enter your item 3")
var item_quantity3 = +prompt("Enter quantity")
var item3 = +prompt("enter your item price " + item_name3)

var item_name4 = prompt("enter your item 4")
var item_quantity4 = +prompt("Enter quantity")
var item4 = +prompt("enter your item price " + item_name4)

var item_name5 = prompt("enter your item 5")
var item_quantity5 = +prompt("Enter quantity")
var item5 = +prompt("enter your item price " + item_name5)

var final_amount1 = (item1 * item_quantity1)
var final_amount2 = (item2 * item_quantity2)
var final_amount3 = (item3 * item_quantity3)
var final_amount4 = (item4 * item_quantity4)
var final_amount5 = (item5 * item_quantity5)


var total =   final_amount1 + final_amount2 + final_amount3 + final_amount4 + final_amount5;

// console.log("Total amount before discount:", total);

var discount = 0;

// Applying discount
if (total <= 3000) {
    discount = 0;
} else if (total >= 5000) {
    discount = (total * 5) / 100;
} else if (total >= 10000) {
    discount = (total * 10) / 100;
} else {
    discount = 0;
}


var finalAmount = total - discount;

document.writeln(
    `
<table border="" width="60%" align="center">
      <tr>
        <th>item name</th>
        <th>item quantity</th>
        <th>item price</th>
        <th>total amount</th>
        <th>total discount</th>
        <th>after discount price</th>
    </tr>
    <tr>
        <td>${item_name1}</td>
        <td>${item_quantity1}</td>
        <td>${item1}</td>
        <td>${total}</td>
        <td>${discount.toFixed(2)}</td>
        <td>${final_amount1}</td>
    </tr>
    <tr>
        <td>${item_name2}</td>
        <td>${item_quantity2}</td>
        <td>${item2}</td>
        <td>${total}</td>
        <td>${discount.toFixed(2)}</td>
        <td>${final_amount2}</td>
    </tr>
    <tr>
        <td>${item_name3}</td>
        <td>${item_quantity3}</td>
        <td>${item3}</td>
        <td>${total}</td>
        <td>${discount.toFixed(2)}</td>
        <td>${final_amount3}</td>
    </tr>
    <tr>
        <td>${item_name4}</td>
        <td>${item_quantity4}</td>
        <td>${item4}</td>
        <td>${total}</td>
        <td>${discount.toFixed(2)}</td>
        <td>${final_amount4}</td>
    </tr>
    <tr>
        <td>${item_name5}</td>
        <td>${item_quantity5}</td>
        <td>${item5}</td>
        <td>${total}</td>
        <td>${discount.toFixed(2)}</td>
        <td>${final_amount5}</td>
    </tr>
    </table>
`)
