var text2=" ";
var text3=" ";
var m=0;
function myFunction(){
	var text=document.getElementById('area').value;
	text=text.toLowerCase();
	var n=text.split(" ");
	var k=document.getElementById('searchtext').value;
	k=k.toLowerCase();
	var kr=k.replace(/ /g,"");
	var str=kr.split(",");
	var l2=str.length;
	var l=n.length;
	for(j=0;j<l2;j++){
		text2=" ";
	    m=0;	
	for(a=0;a<l;){
    //var b=/str[j]/i;
	index=n.indexOf(str[j],a);
    
    if(index !=-1){
       text2+=""+index+"," ;
       a+=index+1
	   m++; }
	else{
	   
	   break;
	   }
	}
	text3+=str[j]+":"+"found "+m+" time(s) at position(s):"+text2 + "\n";

}
	document.getElementById("demo").innerHTML=text3;
}

	