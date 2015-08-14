$(document).ready(function(){

	$("#country").change(function(){
		var country=$('#country').find(":selected").text();       
          $('#state').empty();   	    

	if(country==="USA"){
		$('#state').append(new Option("florida","fl"));
		$('#state').append(new Option("california","CA"));
		$('#state').append(new Option("Texas","Tx"));
		$('#state').append(new Option("Illinois","Il"));
	}

	else if(country === "CANADA" ){
		$('#state').append(new Option("British Columbia","BC"));
		$('#state').append(new Option("Ontario","ON"));
	}

	else if(country === "INDIA" ){
		$('#state').append(new Option("Uttar Pradesh","UP"));
		$('#state').append(new Option("MadhyaPradesh","MP"));
		$('#state').append(new Option("Karnataka","KN"));
		$('#state').append(new Option("Tamil Nadu","TN"));		
	}

    });

    $("#addbtn").click(function(){
    	// var table=$("#passangers");
    	var l=$('#passangers tr').length;
    	$('#passangers tr').each(function(i){
        		if($("#fname").val()==$(this).find('td:eq(1)').text() && $("#lname").val()==$(this).find('td:eq(2)').text() && $("#dob").val()==$(this).find('td:eq(3)').text()){
    			alert("cannot add");
    			return false;
     		}
     		else if($("#fname").val()=="" || $("#lname").val()=="" || $("#dob").val()==""){
     			alert("fields cannot be blank");
     			return false;
     		}
     		else if(i<l-1){return;}
     		else{Add();}
     	});

    });

    $("#delbtn").click(function(){
     		deleter();
    });

   	$('#updbtn').click(function(){
   		  var l=$('#passangers tr').length;
        $('#passangers tr').each(function(i){
                if($("#fname").val()==$(this).find('td:eq(1)').text() && $("#lname").val()==$(this).find('td:eq(2)').text() && $("#dob").val()==$(this).find('td:eq(3)').text()){
                alert("cannot add");
                return false;
            }
            else if($("#fname").val()=="" || $("#lname").val()=="" || $("#dob").val()==""){
                alert("fields cannot be blank");
                return false;
            }
            else if(i<l-1){return;}
            else{updater();}
        });
   	});

    	function requiredfields(firstname,lastname,dateOfBirth){
	
        if(firstname ==""|| lastname =="" || dateOfBirth ==""){
    		return false;}
    	else {return true;}    	
		}  

		function Add()
		{  	
   			var firstname=$("#fname").val();
   			var lastname=$("#lname").val();
   			var dateOfBirth=$("#dob").val();
			var meal=$('#mealstype').val();
			var coun=$('#country').val();
			var stat=$('#state').val();

			$('#passangers tr:last').after('<tr> <td><input id="checkboxes" type="checkbox"> </td> <td>'+ firstname+'</td><td>'+ lastname+'</td> <td>'+ dateOfBirth+'</td><td>'+meal+'</td><td><a href="#" >view/edit</a></td><td>'+coun+'</td><td>'+stat+'</td> </tr>');
		}

		function deleter(){
			var l=$('#passangers tr').length;
			//$('#passangers tr').each(function(i){
				//if($('tr :input[type="checkbox"]').is(":checked")){
				//$('tr:has(input[type="checkbox"]:checked)'.remove();}
				$('#passangers').find('tr').each(function (i) {
        			var row = $(this);
        			if (row.find('input[type="checkbox"]').is(':checked')){
        				$(this).remove();
        				return false;
        			}		
				else if (i<l-1){return;}
				else{alert("select one");}
			});
		}

		function updater(){			
       
       	 $('tr:has(input[type="checkbox"]:checked)').each(function(){
         
         $(this).children(':nth-child(2)').html($("#fname").val());
         $(this).children(':nth-child(3)').html($("#lname").val());
         $(this).children(':nth-child(4)').html($("#dob").val());
         $(this).children(':nth-child(5)').html($("#mealstype").val());
         $(this).children(':nth-child(7)').html($("#country").val());
         $(this).children(':nth-child(8)').html($("#state").val());
                 
        });
       	}
       	
    $('a').click(function(){
    	var row_index = $(this).parent().parent().index('tr');
    	//alert(row_index); 
    	$('#passangers tr').each(function(i){
    		if(i==row_index){
    	//		alert("matched");
    			$("#fname").val($(this).find('td:eq(1)').text());
    			$("#lname").val($(this).find('td:eq(2)').text());
    			$("#dob").val($(this).find('td:eq(3)').text());
    			$("#mealstype").val($(this).find('td:eq(4)').text());
    			$("#country").val($(this).find('td:eq(6)').text());
    			$('#state :selected').val($(this).find('td:eq(7)').text());
    			
    		}
            else{return;}
    	});

	});
	$("#empbtn").click(function(){
		
    			$("#fname").val("");
    			$("#lname").val("");
    			$("#dob").val("");
    			$("#mealstype").val("select");
    			$("#country").val("select");
    			$('#state :selected').val("select");
    });		
});