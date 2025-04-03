document.write("<table border='2' cellspacing='10' cellpadding='5' style='border-collapse: collapse; text-align: center; width: 50%; border: 2px solid white;'>");
document.write("<tr style='background-color:#3891a7; color: white;'><th>S.N.</th><th>Name</th><th>Image</th></tr>");

for (var i = 1; i <= 4; i++) {
    var bgColor = i % 2 === 0 ? '#cedce1' : '#e8eef1'; 
    document.write("<tr style='background-color: " + bgColor + ";'>");
    document.write("<td>" + i + "</td>");
    document.write("<td>Name " + i + "</td>");
    document.write("<td><img src='" + i + ".jpg' alt='Image " + i + "' width='50'></td>");
    document.write("</tr>");
}

document.write("</table>");
