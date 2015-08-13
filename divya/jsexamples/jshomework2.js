function adding(){
	var table = document.getElementById('myTable');
	var row = table.insertRow(table.rows.length);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = '<input type="checkbox">';
	var cell2 = row.insertCell(1);
	cell2.innerHTML = document.getElementById("fname").value;
	var cell3 = row.insertCell(2);
	cell3.innerHTML = document.getElementById("lname").value;
	var cell4 = row.insertCell(3);
	cell4.innerHTML = document.getElementById("dob").value;
	var cell5 = row.insertCell(4);
	cell5.innerHTML = document.getElementById("frequentflyer").value;
	var cell6 = row.insertCell(5);
    cell6.innerHTML = document.getElementById("meals").value;
    var cell7 = row.insertCell(6);
	cell7.innerHTML = document.getElementById("country");
	cell7.style.display = 'none' ;
	var cell8 = row.insertCell(7);
	cell8.innerHTML=document.getElementById("state");
	cell8.style.display = 'none' ;
	var cell9 = row.insertCell(8);
	cell9.innerHTML=document.getElementById("city");
	cell9.style.display = 'none' ;
	var cell10 = row.insertCell(9);
	cell10.innerHTML=document.getElementById("zipcode");
	cell10.style.display = 'none' ;
	var cell11 = row.insertCell(10);
	cell11.innerHTML = '<a href="#" class = "Edit" onclick = "editing(event)"> edit </a>';
}

	function deleting() {
            var table = document.getElementById('myTable');
            var rowcount = table.rows.length;
            for(var i=0; i<rowcount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) 
                {
                    table.deleteRow(i);
                    rowcount--;
                    i--;
                }
            }
        }
        
      function load(event){
         var index = event.srcElement.parentElement.parentElement.rowIndex;
       	 var table = document.getElementById("myTable").rows[index];
         
         
        document.getElementById("fname").value = table.cells[1].innerHTML;
        document.getElementById("lname").value = table.cells[2].innerHTML;
        document.getElementById("dob").value = table.cells[3].innerHTML;
        document.getElementById("frequentflyer").value = table.cells[4].innerHTML;
        document.getElementById("meals").value = table.cells[5].innerHTML;
        document.getElementById("country").value = table.cells[6].innerHTML;
        document.getElementById("state").value = table.cells[7].innerHTML;
        document.getElementById("city").value = table.cells[8].innerHTML;
        document.getElementById("zipcode").value = table.cells[9].innerHTML;
      }
       
       function countryChange(){
       	var country=document.getElementById("country").value;
        var statecombo = document.getElementById("state");
        var statelabel = "";
        statelabel = document.getElementById("state");

       	if(country === "USA"){
       		statelabel.innerHTML = "STATE";
          statecombo.options[0] = new Option("NewYork","NY");
          statecombo.options[1] = new Option("California","CA");
          statecombo.options[2] = new Option("Florida","FA");
       		statecombo.options[3] = new Option("Colorado","CO");
          statecombo.options[4] = new Option("Georiga","GA");

        } else if(country === "CA"){
          statelabel.innerHTML = "Provience";
          statecombo.options[0] = new Option("Alberta","AB");
          statecombo.options[1] = new Option("Ontario" ,"ON");
          statecombo.options[2] = new Option("Nunavut" ,"NU");
          statecombo.options[3] = new Option("Quebec","QC");
          statecombo.options[4] = new Option("YUkon","YT");
       		
       	} else if(country === "INDIA"){
       		statelabel.innerHTML = "state : ";
       		statecombo.options[0] = new Option("Andhrapradesh","Ap");
       		statecombo.options[1] = new Option("Goa" ,"GA");
       		statecombo.options[2] = new Option("Assam" ,"AS");
       		statecombo.options[3] = new Option("Gujarat","GJ");
       		statecombo.options[4] = new Option("Bihar","BR");
} 

}

 