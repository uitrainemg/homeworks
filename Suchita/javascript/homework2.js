function deletep() {
    var table =  document.getElementById("passangers");
    var n = table.rows.length;
    var t=0;
     for(var i = 1; i < n; i++) {
        t+=1;
        if(table.rows[i].cells[0].childNodes[0].checked!= null && table.rows[i].cells[0].childNodes[0].checked== true){
         
            table.deleteRow(i);
            break;
        }
        else if(t<n){continue;}
        else{
        	alert("select one row");
        }
                    
    }
}


function Add(table,firstname,lastname,dateOfBirth)
{
	
	var row=table.insertRow(table.rows.length);
	var cell0=row.insertCell(0);
	cell0.innerHTML='<input id="checkboxes" type="checkbox">';
	var cell1=row.insertCell(1);
	cell1.innerHTML=firstname;
	var cell2=row.insertCell(2);
	cell2.innerHTML=lastname;
	var cell3=row.insertCell(3);
	cell3.innerHTML=dateOfBirth;
	var cell4=row.insertCell(4);
	cell4.innerHTML=document.getElementById("mealstype").value;
	var cell5=row.insertCell(5);
	cell5.innerHTML='<a href="#" onclick="viewdetails(this)">view/edit</a>';
	var cell6=row.insertCell(6);
	cell6.innerHTML=document.getElementById("country").value;
	var cell7=row.insertCell(7);
	cell7.innerHTML=document.getElementById("state").value;
}

function requiredfields(firstname,lastname,dateOfBirth){
	
    if(firstname ==""|| lastname =="" || dateOfBirth ==""){
    	return false;}
    else {return true;}    	
}    	
    



   
function check(){
   var table=document.getElementById("passangers");
   var firstname=document.getElementById("fname").value;
   var lastname=document.getElementById("lname").value;
   var dateOfBirth=document.getElementById("dob").value;
   if(requiredfields(firstname,lastname,dateOfBirth)){
	    var n = table.rows.length;
	    var r,t=0;	
	    for(r=0;r<n;r++){
		   t+=1;
           if(table.rows[r].cells[1].innerHTML==firstname && table.rows[r].cells[2].innerHTML==lastname && table.rows[r].cells[3].innerHTML==dateOfBirth){   	
        	  alert("alredy exist");        	
        	   break;
            }           
        else if(t<n){continue;}  
        else{Add(table,firstname,lastname,dateOfBirth);}          
        } 
    }
     else{alert("fields cannot be empty");}  
}    

function update() {
	 
	
	var table=document.getElementById("passangers");
	var n = table.rows.length;
    for(var i = 1; i < n; i++) {
       
        if(table.rows[i].cells[0].childNodes[0].checked!= null && table.rows[i].cells[0].childNodes[0].checked== true){
        	
            table.rows[i].cells[1].childNodes[0].nodeValue=document.getElementById("fname").value;
            table.rows[i].cells[2].childNodes[0].nodeValue=document.getElementById("lname").value;
            table.rows[i].cells[3].childNodes[0].nodeValue=document.getElementById("dob").value;
            table.rows[i].cells[4].childNodes[0].nodeValue=document.getElementById("mealstype").value;
            table.rows[i].cells[6].childNodes[0].nodeValue=document.getElementById("country").value;
            table.rows[i].cells[7].childNodes[0].nodeValue=document.getElementById("state").value;
            empty();
            alert("updated");
            break;
	     }
	     
	}
}
    
function empty(){
	document.getElementById("fname").value=" ";
	document.getElementById("lname").value=" ";
	document.getElementById("dob").value="";
	document.getElementById("mealstype").value="select";
    document.getElementById("country").value="select"; 
    document.getElementById("state").value="select";       
}

function viewdetails(r){
	var index = r.parentNode.parentNode.rowIndex;
    var table = document.getElementById("passangers");
    document.getElementById("fname").value = table.rows[index].cells[1].innerHTML;
    document.getElementById("lname").value = table.rows[index].cells[2].innerHTML;
    document.getElementById("dob").value = table.rows[index].cells[3].innerHTML;   
    document.getElementById("mealstype").value = table.rows[index].cells[4].innerHTML;
    document.getElementById("country").value = table.rows[index].cells[6].innerHTML;
    var state=document.getElementById("state");
    state.options[state.selectedIndex].text=table.rows[index].cells[7].innerHTML;
}
function onCountryChange(){
	var country=document.getElementById("country").value;
	var stateCombo=document.getElementById("state");
	var l = stateCombo.options.length;
    var i;
    for(i=l;i>=0;i--){
      stateCombo.remove(i);    
	}

	if(country==="USA"){
		stateCombo.options[0]=new Option("Newyork","NY");
		stateCombo.options[1]=new Option("California","CA");
		stateCombo.options[2]=new Option("Florida","FL");
		stateCombo.options[3]=new Option("Texas","TX");
	}

	else if(country==="CANADA"){
		stateCombo.options[0]=new Option("BritishColumbia","BC");
		stateCombo.options[1]=new Option("Ontario","ON");
	}

	else if(country==="INDIA"){
		stateCombo.options[0]=new Option("UttarPradesh","UP");
		stateCombo.options[1]=new Option("TamilNadu","TN");
		stateCombo.options[2]=new Option("MadhyaPradesh","MP");
		stateCombo.options[3]=new Option("Karnataka","KN");
	}
}

