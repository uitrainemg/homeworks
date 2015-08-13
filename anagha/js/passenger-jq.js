$(document).ready(function(){

  $('#btndelete').prop('disabled', true).addClass('disabledButton');
  $('#btnupdate').prop('disabled', true).addClass('disabledButton');

  stateChange('USA');

$('input:checkbox').click(function(){
    var checkFlag=false;
    var rowCount = $("#tlboutput tr").size();
    for(var i = 1; i < rowCount; i++) {
        if($("#chk"+i).prop('checked')) {
            checkFlag=true;  
            break;   
        }
    }

    if(checkFlag){    
        $('#btndelete').prop('disabled', false).removeClass('disabledButton'); 
    }else{
        $('#btndelete').prop('disabled', true).addClass('disabledButton');
    }           
    
});

$("#btnadd").click(function(){
    //get input values
    var rowCnt = $("#tlboutput tr").size();
    var checklist = '<input type=checkbox class="check" id=chk'+rowCnt +'>';
    var firstname = $("#fname").val();
    var lastname = $("#lname").val();
    var dateofbirth = $("#bday").val();
    var freflyer = $("#flyer").val();
    var meal = $("#mealtype").val();
    var cityname = $("#city").val();
    var countryname = $("#country").val();
    var statename =  $('select#state option:selected').text();
    var editlink = '<a id=editlink'+rowCnt +' href=#>View/Edit</a>';

    if(checkTextField(firstname,lastname)){
        //get table and create row object 
        var tableRow ='<tr id=tr'+ rowCnt+'>';
        tableRow =tableRow + "<td>"+checklist +"</td>";
        tableRow =tableRow + "<td>"+firstname +"</td>";
        tableRow =tableRow + "<td>"+lastname +"</td>";
        tableRow =tableRow + "<td>"+dateofbirth +"</td>";
        tableRow =tableRow + "<td>"+freflyer +"</td>";
        tableRow =tableRow + "<td>"+meal +"</td>";
        tableRow =tableRow + "<td>"+cityname +"</td>";
        tableRow =tableRow + "<td>"+countryname +"</td>";
        tableRow =tableRow + "<td>"+statename +"</td>";
        tableRow =tableRow + "<td>"+editlink +"</td>";
        tableRow =tableRow + '</tr>';
        $("#tlboutput").append(tableRow);
        clearAllFields();
    }else{
        alert("firstname,Lastname cannot be empty!")
    }
});//add

$("#tlboutput").on('click', 'a', function(){
    $('#btnupdate').prop('disabled', false).removeClass('disabledButton');
   var col = $(this).closest("td").index();
   var index = $(this).closest("tr").index();
   var row=$(this).closest("tr");
    clearAllChecks();
    $("#chk"+index).prop('checked', true); 
    $("#fname").val($("td:eq(1)",row).text());
    $("#lname").val($("td:eq(2)",row).text());
    $("#bday").val(formatDate($("td:eq(3)",row).text()));
    $("#flyer").val($("td:eq(4)",row).text());
    $("#mealtype").val($("td:eq(5)",row).text());
    $("#city").val($("td:eq(6)",row).text());
    var countryText = $("td:eq(7)",row).text();
    var stateText = $("td:eq(8)",row).text()
    $('select#country option:selected').text(countryText);
    $('select#state option:selected').text(stateText);
});//edit


$("#btnupdate").click(function(){
    var rowCount = $("#tlboutput tr").size();
    for(var i = 1; i < rowCount; i++) {
        if($("#chk"+i).prop('checked')) {
            var row=$("#chk"+i).closest("tr");
            $("td:eq(1)",row).html($("#fname").val());
            $("td:eq(2)",row).html($("#lname").val());
            $("td:eq(3)",row).html($("#bday").val());
            $("td:eq(4)",row).html($("#flyer").val());
            $("td:eq(5)",row).html($("#mealtype").val());
            $("td:eq(6)",row).html($("#city").val());
            $("td:eq(7)",row).html($('select#country option:selected').text());
            $("td:eq(8)",row).html($('select#state option:selected').text());
        }
     }
     clearAllFields();
     $('#btnupdate').prop('disabled', true).addClass('disabledButton');
});//update

function clearAllFields(){
    clearAllChecks();
    $("#fname").val("");
    $("#lname").val("");
    $("#bday").val("");
    $("#flyer").val("");
    $("select#mealtype").prop('selectedIndex', 0);
    $("#city").val("");
    $("#country").prop('selectedIndex', 0);
    $("#state").prop('selectedIndex', 0);
}

function checkTextField(ftext,ltext) {
    if (ftext == '' || ltext == '') {
        return false;
    }else{
        return true;
    }
}

function clearAllChecks(){
    var rowCount = $("#tlboutput tr").size();
    for(var i = 1; i < rowCount; i++) {
       $("#chk"+i).prop('checked', false);
   }
}

$("#btndelete").click(function(){
    var rowCount = $("#tlboutput tr").size();
    for(var i = 1; i < rowCount; i++) {
         if($("#chk"+i).prop('checked')) {
             $("#chk"+i).closest("tr").remove();
        }
                    
    }
});//delete


$("#country").change(function(){
      stateChange($("#country").val());
 });//on change

function stateChange(countryname){
    //var countryname = $("#country").val();
    $('#state option').each(function(i, option){ 
        $(option).remove(); 
    });
    if (countryname === "CA"){
       $("#statelabel").html("Province");
    }else {
        $("#statelabel").html("State");
    }
    $.get("http://localhost:3000/getStates?country="+countryname, function(data){
            data.forEach(function(element,index){
                $('#state').append($("<option></option>").attr("value", element.short).text(element.name));
            })
            
     });
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

});