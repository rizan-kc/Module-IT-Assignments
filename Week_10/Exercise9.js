var x = [1,2,3,4,5,6,7,8,9];
var s = 0;
var p = 1;
for (var i = 0; i < x.length; i++){
    s = s + x[i];
    p = p * x[i];
}
document.write("The sum and product of an array of integers is " + s + " and " + p + " respectively.");