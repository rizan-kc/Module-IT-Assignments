x = prompt("Enter the marks: ");
var marks = Number(x)
if (marks >= 80 && marks <= 100){
    document.write("Distinction.");
}
else if(marks < 80 && marks >= 60){
    document.write("First Division");
}
else if(marks < 60 && marks >= 50 ){
    document.write("Second Division");
}
else if (marks < 50 && marks >= 40){
    document.write("Third Division");
}
else{
    document.write("Fail")
}