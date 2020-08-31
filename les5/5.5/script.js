'use strict';

let chessBoard = document.getElementById("cell");

for ( let i=0;i<8;i++) {
    let row = chessBoard.appendChild(document.createElement("div"));
    for (let j=0;j<8;j++) {
        row.appendChild(document.createElement("span"));    }
}



// var x=8;
// var y=8;

// var chessBoard = document.getElementById("chessBoard");

// for (var i=0; i<y; i++){
//     var row = chessBoard.appendChild(document.createElement("div"));
//     for (var j=0; j<x; j++){
//         row.appendChild(document.createElement("span"));
//     }
// }


var table = document.createElement("table");
for (var i = 1; i < 9; i++) {
       var tr = document.createElement('tr');
       for (var j = 1; j < 9; j++) {
           var td = document.createElement('td');
           if (i%2 == j%2) {
               td.className = "white";
           } else {
               td.className = "black";
           }
           tr.appendChild(td);
       }
       table.appendChild(tr);
}
document.body.appendChild(table);








