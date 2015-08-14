$(document).ready(function(){

var collect = [];

$("#btnadd").click(function(){
	var str = $("#zipcode").val();
    alert(str);
	var flag = false;

    if(collect.length > 0){
    	flag = eleContainsInArray(collect,str);
	}

    if (str.length == 0) {
        $("#txtHint").val('');
        return;
    } 
    else if(flag == true){
    	alert("City with this Zipcode already exits.");
    }   else {
        var url="http://api.apixu.com/v1/forecast.json?key=87269ce8ca1a43a799e203852153107&q=" + str+"&days=1";
        $.get(url, function(data){
            collect.push(str);
            createDiv(data.location.name,data.current.condition.icon,data.current.temp_f,data.current.condition.text,data.forecast.forecastday[0].day.maxtemp_f,data.forecast.forecastday[0].day.mintemp_f);
        });
    }	
});//add

function eleContainsInArray(arr,element){
    if(arr != null && arr.length >0){
        for(var i=0;i<arr.length;i++){
            if(arr[i] == element)
                return true;
        }
    }
    return false;
 } 

 function closeDiv(divid){
    alert(divid);
    //document.getElementById(divid).style.display = 'none';
    //$("#"+divid).style.display = 'none';
}

function createDiv(name,icon,tempf,condition,maxtempf,mintemp_f){
    var divTag = $('<div></div>').attr('id', "#div"+name);
    divTag.attr("align","left");
    divTag.addClass('div1Class');

   /* var imgCloseTag= $("<img></img>").attr('src', "../image/close.jpg");
    //$("#img1").attr('src', "../image/close.jpg");
    imgCloseTag.addClass('imgClass');
    // imgCloseTag.addEventListener("click",function(){closeDiv(divTag.id);}, false);
    var divHead =$("<div></div>").text(name);
    divHead.addClass('headClass');

    imgCloseTag.append(divHead);
    divTag.append(divHead);

    var hr1Tag =$("<hr>").addClass('hr1Class');
    var divMid =$("<div></div>").text(name);

    var imgTag = $("<img></img>").attr('src', icon);
    imgTag.addClass('iconClass');

    var spanTemp =$("<span></span>").text(tempf);
    spanTemp.addClass('tempfClass');

    var spanCond =$("<span></span>").text(condition);
    spanCond.addClass('condClass');

    divMid.append(imgTag);
    divMid.append(spanTemp);
    divMid.append(spanCond);

    var hr2Tag = $("<hr>").addClass('hr2Class');

    var divFooter = $("<div></div>").text(maxtempf +" / " + mintemp_f);
    divFooter.attr("align","center");
    divFooter.addClass('footerClass');

    divTag.append(hr1Tag);
    divTag.append(divMid);
    divTag.append(hr2Tag);
    divTag.append(divFooter);*/
    divTag.append('body');
}

});