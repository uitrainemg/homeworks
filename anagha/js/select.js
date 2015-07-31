function divCheck()
{
   document.getElementById('more').style.visibility = 'hidden';
   if(document.getElementById('rdpay1').checked){
    	document.getElementById('frame1').style.visibility = 'visible';
    	document.getElementById('frame2').style.visibility = 'hidden';
    	document.getElementById('frame3').style.visibility = 'hidden';
    }
    else  if(document.getElementById('rdpay2').checked){
    	document.getElementById('frame1').style.visibility = 'hidden';
    	document.getElementById('frame2').style.visibility = 'visible';
    	document.getElementById('frame3').style.visibility = 'hidden';
    }
    else if(document.getElementById('rdpay3').checked){
    	document.getElementById('frame1').style.visibility = 'hidden';
    	document.getElementById('frame2').style.visibility = 'hidden';
    	document.getElementById('frame3').style.visibility = 'visible';
    }
}

function showMoreText(){
	document.getElementById('more').style.visibility = 'visible';
    var title = "";
    if(document.getElementById('rdpay1').checked){
            title = "Credit \ Debit Card";
    }
    else  if(document.getElementById('rdpay2').checked){ 
         title = "PayPal";
    }
    else if(document.getElementById('rdpay3').checked){
        title ="Gift Card";
    }   
    document.getElementById('paratittle').innerHTML = title;
}