/* /*Lab:exp_5_Part1_Decoder
	File name: addtbl.js
  content: inert  into table, sorting teh table, remove duplicate row.
    Author:Prakriti Dhang */

    /* Table creation */
var tabrowindex = 2;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var dataPoints = [];

var table, rows, switching, i, x, y, shouldSwitch;
function aintbl(){
    table = document.getElementById("mytable1");

    
    arr[0]=decimal[0];

    arr[1]=sinp[0];
    arr[2]=sinp[1];
    arr[3]=sinp[2];

    arr[4]=d11[0];
    arr[5]=d11[1];
    arr[6]=d11[2];
    arr[7]=d11[3];
    arr[8]=d11[4];
    arr[9]=d11[5];
    arr[10]=d11[6];
    arr[11]=d11[7];
    

    tabrowindex + 1;
    
       
    var row = table.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 12; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];

    }
    sortTable();
    
    deleterow(); /* Delete duplicate row */
   
    
}


    function sortTable() {
     
      table = document.getElementById("mytable1");
      swap = true;
      /*Make a loop that will continue until
      no swaping has been done:*/
      while (swap) {
        //start by saying: no swap is done:
        swap = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 3; i < (rows.length - 1); i++) {
          //start by saying there should be no swap:
          shouldswap = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("td")[0];
          y = rows[i + 1].getElementsByTagName("td")[0];
          //check if the two rows should swap place:
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            //if so, mark as a swap and break the loop:
            shouldswap = true;
            break;
          }

          

        }
        if (shouldswap) {
          /*If a swap has been marked, make the swap
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          swap = true;
          

        }
       
       
      }
    }
    

    function deleterow()
    {
      
      table = document.getElementById("mytable1");
      var rowCount = table.rows.length;
      swap = true;
      /*Make a loop that will continue until
      no swaping has been done:*/
      while (swap) {
        //start by saying: no swap is done:
        swap = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 3; i < (rows.length - 1); i++) {
          //start by saying there should be no swap:
          shouldswap = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("td")[0];
          y = rows[i + 1].getElementsByTagName("td")[0];
          //check if the two rows should swap place:
          if (Number(x.innerHTML) == Number(y.innerHTML)) {
            //if so, mark as a swap and break the loop:
            shouldswap = true;
            alert("Already Inserted");
            break;
          }
       
        }
        if (shouldswap) {
          /*If a swap has been marked, make the swap
          and mark that a switch has been done:*/
          rows[i].remove(rows[i + 1]);
          rowCount--;
          i--;
          tabrowindex--;
          swap = true;
        
          

        }
       
       
      }
      }
    /*function deleteRow() {
        try {
        var table = document.getElementById(mytable1);
        var rowCount = table.rows.length;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        for(var i=0; i<rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(Number(x.innerHTML) == Number(y.innerHTML)) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }


        }
        }catch(e) {
            alert(e);
        }
    } */
 