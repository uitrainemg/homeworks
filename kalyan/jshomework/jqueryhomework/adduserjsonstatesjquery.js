$(document).ready(function(){
    $('#addRow').click(function(){

        /*$('#myTableData').append('<tr><td></td><td></td></tr><tr><td></td><td></td></tr>');
        var rowcount = $('#myTableData tr').length;
        $('#myTableData tr:last td:last').html($("#fname").val());
        $('#myTableData tr:last td:last').html($("#lname").val());
        $('#myTableData tr:last td:last').html($("#gender").val());
        $('#myTableData tr:last td:last').html($("#ffn").val());
        $('#myTableData tr:last td:last').html($("#myDate").val());
        $('#myTableData tr:last td:last').html($("#fp").val());
        $('#myTableData tr:last td:last').html($("#country").val());
        $('#myTableData tr:last td:last').html($("#states").val());
        $('#fname').val('').focus();*/


        /*var $tr = $('<tr />');
        $tr.append($("<td />", { text: $("#test1").val() }))
        $tr.append($("<td />", { text: $("#fname").val() }))
        $tr.append($("<td />", { text: $("#lname").val() }))
        $tr.append($("<td />", { text: $("#gender").val() }))
        $tr.append($("<td />", { text: $(".test5:checked").val() }))
        $tr.appendTo('table');*/
                        
        
                        //Values are not populating in columns.
                        var FName = $("#fname").val();
                        var Lname = $("#lname").val();
                        var Gender = $("#gender").val();
                        var FrequentFlyer = $("#ffn").val();
                        var DoB = $("#myDate").val();
                        var Food = $("#fp").val();
                        var Country = $("#country").val();
                        var State = $("#states").val();
                        var Zipcode = $("#zipcode").val();
                        var table = $("#myTableData").val();
                        var rowcount = $("#myTableData").length;
                        $("#myTableData").append('<td><input type="checkbox"/></td>') .append('<td><a href="#" id = "loadRow(this,true,false)">').
                        append(FName).append('<td>$("#lname").val()</td><td>$("#gender").val()</td><td>$("#ffn").val()</td><td>$("#myDate").val()</td><td>$("#fp").val()</td><td>$("#country").val()</td><td>$("#states").val()</td><td>$("#zipcode").val()</td><td><a href="#" id = "loadRow(this,false,true)">Edit</a></td></tr>');
                        //$("#myTableData").append('<tr><td><input type="checkbox"/></td><td><a href="#" id = "loadRow(this,true,false)">').
                        //append(FName).append(' </a></td><td>$("#lname").val()</td><td>$("#gender").val()</td><td>$("#ffn").val()</td><td>$("#myDate").val()</td><td>$("#fp").val()</td><td>$("#country").val()</td><td>$("#states").val()</td><td>$("#zipcode").val()</td><td><a href="#" id = "loadRow(this,false,true)">Edit</a></td></tr>');

                       
                        //var table = document.getElementById("myTableData");
                        //var rows = $("#myTableData tr").length;
                        //$("#myTableData tr:last").after("<tr><td>" + FName + "</td><td>" + Lname + "</td><td>" + Gender + "</td><td>" + FrequentFlyer + "</td><td>" + DoB + "</td><td>" + Food + "</td><td>" + Country + "</td><td>" + State + "</td><td>" + Zipcode + "</td></tr>" );
                        //var newRowContent = "<tr><td>FName</td><td>Lname</td></tr>";    
                        //$(newRowContent).appendTo($("#myTableData"));
                        //});

                        //var row = table.insertRow(rowCount);
                        //var row = table.rowCount;
                        /*$(this)[0].innerHTML = '<input type="checkbox" id ="chkAgree'+rowCount+ '" name ="chkbox[]" id ="disButton"/>';
                        $(this)[1].innerHTML = '<a href="#" id = "fname" id = "loadRow(this,true,false)">'+$("#fname").val()+'</a>';
                        $(this)[2].innerHTML = $("#lname").val();*/
                        

            


                        /*var FName = $("#fname");
                        var Lname = $("#lname");
                        var Gender = $("#gender");
                        var FrequentFlyer = $("#ffn");
                        var DoB = $("#myDate");
                        var Food = $("#fp");
                        var Country = $("#country");
                        var State = $("#states");
                        var Zipcode = $("#zipcode");

                        //var table = $("#myTableData");
                        
                        
                        var table = document.getElementById("myTableData");
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        row.insertCell(0).innerHTML = '<input type="checkbox" id ="chkAgree'+rowCount+ '" name ="chkbox[]" id ="disButton"/>';
                        row.insertCell(1).innerHTML= '<a href="#" id = "fname" id = "loadRow(this)">'+$("#fname").val()+'</a>';
                        row.insertCell(2).innerHTML= $("#lname").val();
                        row.insertCell(3).innerHTML= $("#gender").val();
                        row.insertCell(4).innerHTML= $("#ffn").val();
                        row.insertCell(5).innerHTML= $("#myDate").val();
                        row.insertCell(6).innerHTML= $("#fp").val();
                        row.insertCell(7).innerHTML= $("#country").val();
                        row.insertCell(8).innerHTML= $("#states").val();
                        row.insertCell(9).innerHTML= $("#zipcode").val();
                        row.insertCell(10).innerHTML= '<a href="#" id = "loadRow(this)">Edit</a>';
                        //how to add rows using .append
                        row.cells[7].style.display='none';
                        row.cells[8].style.display='none';
                        row.cells[9].style.display='none';

                            $("#fname").val("");
                            $("#lname").val("");
                            $("#gender").val("Male");
                            $("#ffn").val("");
                            $("#myDate").val("");
                            $("#fp").val("Meat");
                            $("#country").val("United States");// Not clear 
                            $("#states").val("");
                            $("#zipcode").val("");*/

                    });
    

        
        
       $(".quantity").keypress(function (e) {
                    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                        return false;
                    }
                });

        $("#disButton").click(function(){
                        
                        if ($(this).is(':checked')) {
        
                            $('.btnSubmit').attr('disabled',false); //enable input
                        } 
                        else {
                            $('.btnSubmit').attr('disabled', true); //disable input
                        }
                    });     

       $("#deleteRow").on('click', function() {
            var checked = $('input:checkbox:checked').map(function () {
            return this.value;
            }).get();
            $('input:checkbox:checked').parents("tr").remove();

            });

       //Load Row

        $("#loadRow").click(function(obj,makeReadOnly,makeEnable){

                    var row = obj.parentNode.parentNode;
                    var cells = row.getElementsByTagName('td');

                                  
                        $("#fname").val(cells[1].childNodes[0].innerHTML) ;
                        $("#lname").val() = cells[2].innerHTML;
                        $("#gender").val() = cells[3].innerHTML;
                        $("#ffn").val() = cells[4].innerHTML;
                        $("#myDate").val() = cells[5].innerHTML;
                        $("#fp").val() = cells[6].innerHTML;
                        $("#country").val() = cells[7].innerHTML;
                        $("#states").val() = cells[8].innerHTML;
                        $("#zipcode").val() = cells[9].innerHTML;

                        //document.getElementById("updatingRowId").value = row.rowIndex;

                        if(makeReadOnly)
                        {
                            
                            $("#fname").disabled= true;
                            $("#lname").disabled= true;
                            $("#gender").disabled = true;
                            $("#ffn").disabled = true;
                            $("#myDate").disabled = true;
                            $("#fp").disabled = true;
                            $("#country").disabled = true;
                            $("#states").disabled = true;
                            $("#zipcode").disabled = true;
                            //document.getElementById("addDisable").disabled= true;
                        }
                        if (makeEnable) {

                            $("#fname").disabled= false;
                            $("#lname").disabled= false;
                            $("#gender").disabled = false;
                            $("#ffn").disabled = false;
                            $("#myDate").disabled = false;
                            $("#fp").disabled = false;
                            $("#country").disabled = false;
                            $("#states").disabled = false;
                            $("#zipcode").disabled = false;
                            document.getElementById("addDisable").disabled= true;
                        }
                    

        });
      

}); 
       

