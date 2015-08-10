$(document).ready(function(){

	$("#btnsubmit").click(function(){
		//get value
		var content = $("#contenttxt").val();
		var keywords= $("#keywordtxt").val();
		var keys = keywords.split(",");
	
		var len = keys.length;
		var displayResult="";
		for (var count = 0; count < len;count++) {
			var searchstring = keys[count].trim();
			//alert(searchstring);
			var result = totalIndexOf(content , searchstring);
			//alert(result.toString());
			displayResult = displayResult + searchstring + ": Found " + result.length + " times at position(s) "+ result.toString() +"<br/>";
		}
		//set html value
		$("#message").html(displayResult);
	});

	//get all positions for keywords
	function totalIndexOf(str, toSearch) {
	    var collect = [];
	    for(var pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
	        collect.push(pos);
	    }
	    return collect;
	}

});