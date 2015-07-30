function findKeywords(){
	var content = document.getElementById("contenttxt").value;
	var keywords= document.getElementById("keywordtxt").value;
	var keys = keywords.split(",");
	//alert(content);
	var len = keys.length;
	var displayResult="";
	for (var count = 0; count < len;count++) {
		var searchstring = keys[count].trim();
		//alert(searchstring);
		var result = totalIndexOf(content , searchstring);
		//alert(result.toString());
		displayResult = displayResult + searchstring + ": Found " + result.length + " times at position(s) "+ result.toString() +"<br/>";
	}
	document.getElementById("message").innerHTML = displayResult;
}

//get all positions for keywords
function totalIndexOf(str, toSearch) {
    var collect = [];
    for(var pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
        collect.push(pos);
    }
    return collect;
}