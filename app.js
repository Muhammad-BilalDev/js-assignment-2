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
