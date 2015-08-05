function paymethod(){

	if(document.getElementById("radio1").checked){
		if(countr==1){
			var c = document.body.children;
            var d = c.length-1;
            c[d].parentNode.removeChild(c[d]);
            countr--;
		}
		document.getElementById("addmore").style.visibility='visible';
		document.getElementById('div1').style.display="block";
		document.getElementById('div2').style.display="none";
		document.getElementById('div3').style.display="none";
		
	
    }
	else if(document.getElementById("radio2").checked){
		//window.location.reload();
		if(countr==1){
			var c = document.body.children;
            var d = c.length-1;
            c[d].parentNode.removeChild(c[d]);
            countr--;
		}
		document.getElementById("addmore").style.visibility='visible';
		document.getElementById('div1').style.display="none";
		document.getElementById('div2').style.display="block";
		document.getElementById('div3').style.display="none";
		
		
	}
    else if(document.getElementById("radio3").checked){
    	if(countr==1){
			var c = document.body.children;
            var d = c.length-1;
            c[d].parentNode.removeChild(c[d]);
            countr--;
		}
		document.getElementById("addmore").style.visibility='visible';
		document.getElementById('div1').style.display="none";
		document.getElementById('div2').style.display="none";
		document.getElementById('div3').style.display="block";
		
	}
}
var countr=0;
function addmorediv(){
	if(document.getElementById("radio1").checked){
        document.getElementById("addmore").style.visibility='hidden';
		var elmnt = document.getElementsByTagName("div")[1];
		var cln = elmnt.cloneNode(true);
		document.body.appendChild(cln).style.clear='left';
		countr+=1;
	}
	else if(document.getElementById("radio2").checked){
		document.getElementById("addmore").style.visibility='hidden';
		var elmnt = document.getElementsByTagName("div")[2];
		var cln = elmnt.cloneNode(true);
		document.body.appendChild(cln).style.clear='left';
		countr+=1;
	}
	else if(document.getElementById("radio3").checked){
		document.getElementById("addmore").style.visibility='hidden';
		var elmnt = document.getElementsByTagName("div")[4];
		var cln = elmnt.cloneNode(true);
		document.body.appendChild(cln).style.clear='left';
		countr+=1;
	}

}