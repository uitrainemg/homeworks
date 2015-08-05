
function addPassenger(){
    //get input values
    var checklist = '<input type="checkbox">';
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var dateofbirth = document.getElementById("bday").value;
    var freflyer = document.getElementById("flyer").value;
    var meal = document.getElementById("mealtype").value;
    var cityname = document.getElementById("city").value;
    var countryname = document.getElementById("country").value;
    var selState = document.getElementById("state");
    //var statename = document.getElementById("state").text;
    var statename = selState.options[selState.selectedIndex].text;
    var editlink = '<a name="editlink" href="#" onclick="loadPassenger(this)">View/Edit</a>';
    
    if(checkTextField(firstname,lastname)){
        //get table and create row object 
        var table = document.getElementById("tlboutput");
        var row = table.insertRow(table.rows.length);
        //insert into table rows
        insertColumnData(row,0,checklist);
        insertColumnData(row,1, firstname);
        insertColumnData(row,2, lastname);
        insertColumnData(row,3, dateofbirth);
        insertColumnData(row,4, freflyer);
        insertColumnData(row,5, meal);
        insertColumnData(row,6, cityname);
        insertColumnData(row,7, countryname);
        insertColumnData(row,8, statename);
        insertColumnData(row,9, editlink);
    }else{
        alert("firstname,Lastname cannot be empty!")
    }


}

function insertColumnData(row,no,val){
    cell = row.insertCell(no);
    cell.innerHTML = val;
}

function loadPassenger(el){
    var index = el.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tlboutput");
    clearAllChecks();
    document.getElementById("fname").value = table.rows[index].cells[1].innerHTML;
    document.getElementById("lname").value = table.rows[index].cells[2].innerHTML;
    document.getElementById("bday").value = formatDate(table.rows[index].cells[3].innerHTML);
    document.getElementById("flyer").value = table.rows[index].cells[4].innerHTML;
    document.getElementById("mealtype").value = table.rows[index].cells[5].innerHTML;
    document.getElementById("city").value = table.rows[index].cells[6].innerHTML;
    var selCountry = document.getElementById("country");
    selCountry.options[selCountry.selectedIndex].text = table.rows[index].cells[7].innerHTML;
    var selState = document.getElementById("state");
    selState.options[selState.selectedIndex].text = table.rows[index].cells[8].innerHTML;
    table.rows[index].cells[0].childNodes[0].checked=true;
}

function updatePassenger(){
    var table =  document.getElementById("tlboutput");
    var rowCount = table.rows.length;
    for(var i = 1; i < rowCount; i++) {
        var chkbox = table.rows[i].cells[0].childNodes[0].checked;
        if(null != chkbox && true == chkbox) {
            table.rows[i].cells[1].innerHTML = document.getElementById("fname").value;
            table.rows[i].cells[2].innerHTML = document.getElementById("lname").value;
            table.rows[i].cells[3].innerHTML = document.getElementById("bday").value;
            table.rows[i].cells[4].innerHTML = document.getElementById("flyer").value;
            table.rows[i].cells[5].innerHTML = document.getElementById("mealtype").value;
            table.rows[i].cells[6].innerHTML = document.getElementById("city").value;
            var selCountry = document.getElementById("country");
            table.rows[i].cells[7].innerHTML = selCountry.options[selCountry.selectedIndex].text;
            var selState = document.getElementById("state");
            table.rows[i].cells[8].innerHTML = selState.options[selState.selectedIndex].text;
        }
     }
     clearAllFields();
}

function clearAllFields(){
    clearAllChecks();
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("bday").value = "";
    document.getElementById("flyer").value ="";
    document.getElementById("mealtype").selectedIndex =  0;
    document.getElementById("city").value = "";
    document.getElementById("country").selectedIndex =  0;
    document.getElementById("state").selectedIndex =  0;
}

function checkTextField(ftext,ltext) {
    if (ftext == '' || ltext == '') {
        return false;
    }else{
        return true;
    }
}

function clearAllChecks(){
    var table =  document.getElementById("tlboutput");
    var rowCount = table.rows.length;
    for(var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        chkbox.checked = false;
     
    }
}

function deletePassenger() {
    var table =  document.getElementById("tlboutput");
    var rowCount = table.rows.length;
    for(var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
         if(true == chkbox.checked) {
           // alert(i  + " delete row ");
            table.deleteRow(i);
        }
                    
    }
}


function getStateNames()
{
    var countryname = document.getElementById("country").value;
    var state = document.getElementById("state");
    var statelabel = document.getElementById("statelabel");
    var optionlength = state.options.length;
    //var i;
    for( var i=optionlength-1;i>=0;i--)
    {
        state.remove(i);
    }

    if(countryname === "USA"){
        statelabel.innerHTML ="State";
        state.options[0] = new Option("New York","NY");
        state.options[1] = new Option("Texas","TX");
        state.options[2] = new Option("Florida","FL");
        state.options[3] = new Option("Delaware","DEL");
        state.options[4] = new Option("California","CA");
    }else if (countryname === "Canada"){
        statelabel.innerHTML ="Province";
        state.options[0] = new Option("Quebec","QB");
        state.options[1] = new Option("Ontario","ON");
        state.options[2] = new Option("Alberta","AL");
        state.options[3] = new Option("Manitoba","MN");
        state.options[4] = new Option("Nova Scotia","NS");
    }else if (countryname === "India"){
        statelabel.innerHTML ="State";
        state.options[0] = new Option("Maharastra","MS");
        state.options[1] = new Option("Gujarat","GJ");
        state.options[2] = new Option("Andhra Pradesh","AP");
        state.options[3] = new Option("Madhya Pradesh","MP");
        state.options[4] = new Option("Tamil Nadu","TN"); 
    }
 }

function formatDate(userDate) {
   userDate = new Date(userDate);
   y = userDate.getFullYear().toString();
   m = (userDate.getMonth() + 1).toString();
   d = userDate.getDate().toString();
   if (m.length == 1) m = '0' + m;
   if (d.length == 1) d = '0' + d;
  return y + '-' +m +'-' + d;
}