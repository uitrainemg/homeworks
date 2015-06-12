function addRow() 
                        {
                        var FName = document.getElementById("fname"); 
                        var Lname = document.getElementById("lname")
                        var Gender = document.getElementById("gender");
                        var FrequentFlyer = document.getElementById("ffn");
                        var DoB = document.getElementById("myDate");
                        var Food = document.getElementById("fp");
                        var Country = document.getElementById("country");
                        var State = document.getElementById("state");
                        var Zipcode = document.getElementById("zipcode");
                        


                        var table = document.getElementById("myTableData");
                     
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        
                        row.insertCell(0).innerHTML = '<input type="checkbox" id ="chkAgree'+rowCount+ '" name ="chkbox[]" onclick ="disbutton()"/>';
                        
                        //row.insertCell(1).innerHTML= FName.value;
                        row.insertCell(1).innerHTML= '<a href="#" id = "fname" onclick = "loadRow(this,true,false)">'+FName.value+'</a>';
                        row.insertCell(2).innerHTML= Lname.value;
                        row.insertCell(3).innerHTML= Gender.value;
                        row.insertCell(4).innerHTML= FrequentFlyer.value;
                        row.insertCell(5).innerHTML= DoB.value;
                        row.insertCell(6).innerHTML= Food.value;
                        row.insertCell(7).innerHTML= Country.value;
                        row.insertCell(8).innerHTML= State.value;
                        row.insertCell(9).innerHTML= Zipcode.value;
                        row.insertCell(10).innerHTML= '<a href="#" onclick = "loadRow(this,false,true)">Edit</a>'; // '#
                        
                        row.cells[7].style.display='none';
                        row.cells[8].style.display='none';
                        row.cells[9].style.display='none';
                        /* 06/05 -- clear Form feilds */

                       document.getElementById("fname").value = ''; 
                       document.getElementById("lname").value = '';
                       document.getElementById("gender").value = 'Male';
                       document.getElementById("ffn").value = '';
                       document.getElementById("myDate").value = '';
                       document.getElementById("fp").value = 'Vegan';
                       document.getElementById("country").value = 'USA';
                       document.getElementById("state").value = 'Florida';
                       document.getElementById("zipcode").value = '';
                        }  

                        // select options- 06/07-----------------

                        var stateLists = new Array( );
                        stateLists["empty"] = ["Select a Country"]; 
                        stateLists["USA"] = ["Illinois", "Florida", "California"]; 
                        stateLists["CANADA"] = ["Alberta", "Manitoba"]; 
 
                         function countryChange(selectObj) { 
 
                            var idx = selectObj.selectedIndex; 
                            var which = selectObj.options[idx].value; 
 
                            cList = stateLists[which]; 
 
                            var cSelect = document.getElementById("state"); 
 
                            var len=cSelect.options.length; 
                                    while (cSelect.options.length > 0) { 
                                    cSelect.remove(0); }
                                    
                            var newOption; 
 
                                for (var i=0; i<cList.length; i++) { 
                                    newOption = document.createElement("option"); 
                                    newOption.value = cList[i];  // assumes option string and value are the same 
                                    newOption.text=cList[i]; 
 
                                try { 
                                    cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
                                    } 
                                catch (e) { 
                                    cSelect.appendChild(newOption); 
                                    } 
                                    } 
                                    }
                /*function changeText2(){
                    var userInput = document.getElementById('FName').value;
                    var lnk = document.getElementById('lnk');
                    lnk.href = userInput;
                    lnk.innerHTML = lnk.href;
                        }*/
                       
                function disbutton()
                            {
                                var table = document.getElementById("myTableData");
                                var rowCount = table.rows.length;
                                var enable = false;

                            for(var i=1; i<rowCount; i++) 
                            {
                                   var row = table.rows[i];
                                   var chkbox = row.cells[0].childNodes[0];
                                        if(chkbox  && chkbox.checked === true) 
                                        {
                                            enable = true;
                                            break;
                                        }
                            }
                            if(enable)
                            {
                                // enable delete button
                                document.getElementById("btnSubmit").disabled = false;
                            }
                            else
                            {
                                // disable delete button
                               document.getElementById("btnSubmit").disabled = true;
                            }
                        }  
                
                function deleteRow() 
                        {

                        var table = document.getElementById("myTableData");
                        var rowCount = table.rows.length;

                            for(var i=1; i<rowCount; i++) 
                            {
                                var row = table.rows[i];
                                var chkbox = row.cells[0].childNodes[0];
                                        if(null != chkbox && true == chkbox.checked) 
                                                {
                                                    table.deleteRow(i);
                                                    rowCount--;
                                                    i--;
                                                }
                            }        
                        } 
               function loadRow(obj,makeReadOnly,makeEnable) {

                        var row = obj.parentNode.parentNode;
                      
                       var cells = row.getElementsByTagName('td');

                                  
                        document.getElementById("fname").value = cells[1].childNodes[0].innerHTML;
                        document.getElementById("lname").value = cells[2].innerHTML;
                        document.getElementById("gender").value = cells[3].innerHTML;
                        document.getElementById("ffn").value = cells[4].innerHTML;
                        document.getElementById("myDate").value = cells[5].innerHTML;
                        document.getElementById("fp").value = cells[6].innerHTML;
                        document.getElementById("country").value = cells[7].innerHTML;
                        document.getElementById("state").value = cells[8].innerHTML;
                        document.getElementById("zipcode").value = cells[9].innerHTML;

                        document.getElementById("updatingRowId").value = row.rowIndex;

                        if(makeReadOnly)
                        {
                            
                            document.getElementById("fname").disabled= true;
                            document.getElementById("lname").disabled= true;
                            document.getElementById("gender").disabled = true;
                            document.getElementById("ffn").disabled = true;
                            document.getElementById("myDate").disabled = true;
                            document.getElementById("fp").disabled = true;
                            document.getElementById("country").disabled = true;
                            document.getElementById("state").disabled = true;
                            document.getElementById("zipcode").disabled = true;
                            document.getElementById("addDisable").disabled= true;
                        }
                        if (makeEnable) {

                            document.getElementById("fname").disabled= false;
                            document.getElementById("lname").disabled= false;
                            document.getElementById("gender").disabled = false;
                            document.getElementById("ffn").disabled = false;
                            document.getElementById("myDate").disabled = false;
                            document.getElementById("fp").disabled = false;
                            document.getElementById("country").disabled = false;
                            document.getElementById("state").disabled = false;
                            document.getElementById("zipcode").disabled = false;
                            document.getElementById("addDisable").disabled= true;
                        }
                    }
               function updateRow(){

                            var table = document.getElementById("myTableData");
                            var rows = table.getElementsByTagName('tr');
                                              
                            var myRow = rows[document.getElementById('updatingRowId').value];
                            
                            var myCells = myRow.getElementsByTagName('td');

                            myCells[1].childNodes[0].innerHTML = document.getElementById("fname").value;
                            myCells[2].innerHTML = document.getElementById("lname").value;
                            myCells[3].innerHTML = document.getElementById("gender").value;
                            myCells[4].innerHTML = document.getElementById("ffn").value;
                            myCells[5].innerHTML = document.getElementById("myDate").value;
                            myCells[6].innerHTML = document.getElementById("fp").value;
                            myCells[7].innerHTML = document.getElementById("country").value;
                            myCells[8].innerHTML = document.getElementById("state").value;
                            myCells[9].innerHTML = document.getElementById("zipcode").value;
                            }     

               function isNumberKey(evt)
                                {
                                    var charCode = (evt.which) ? evt.which : event.keyCode
                                    if (charCode > 31 && (charCode < 48 || charCode > 57))
                                    return false;

                                    return true;
                                }
