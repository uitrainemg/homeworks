function getweather(zip) {    
    var result=document.getElementById("demo");
    var request=new XMLHttpRequest();
    request.open("GET","http://api.apixu.com/v1/forecast.json?key=87269ce8ca1a43a799e203852153107&q="+zip);
    request.send();
    request.onreadystatechange=function()
      {
        if(request.readyState==4 && request.status==200)
            {
                var demo1=JSON.parse(request.responseText);         
                addmore(demo1.location.name,demo1.current.temp_f+" F",demo1.current.condition.text,demo1.forecast.forecastday[0].day.maxtemp_f+"/"+demo1.forecast.forecastday[0].day.mintemp_f,'<img src=" '+demo1.current.condition.icon+' " />')                          
                
            }            
      }
}
var i=0;
var j=0;

function addmore(loca,tf,conditn,mm,pic){
    i+=1;
    var elmnt = document.getElementsByTagName("div")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln).style.float='left';
    document.getElementsByTagName("p")[1+j].innerHTML=loca;
    document.getElementsByTagName("p")[2+j].innerHTML=tf;
    document.getElementsByTagName("p")[3+j].innerHTML=conditn;
    document.getElementsByClassName("img1")[i-1].innerHTML=pic;
    document.getElementsByTagName("p")[4+j].innerHTML=mm;
    j=j+4;

    if(i==1){
        var d=document.getElementsByTagName("div")[4];
        d.parentNode.removeChild(d);
    }
}
var arr=[];
function zipcodecheck(){    
    var zip=document.getElementById("zipcode").value;
    var index=arr.indexOf(zip);
    if(index==-1){
        getweather(zip);
        arr.push(zip);
        zip.innerHTML=" ";        
    }
    else{
        alert("already exist");        
    }
}

function close2(a){
     var x = a.parentNode.parentNode;
     x.parentNode.removeChild(x);
}
