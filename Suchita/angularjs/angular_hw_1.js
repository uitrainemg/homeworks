var app = angular.module('myApp', []);
		app.controller('myCtrl', function($scope) {
			
			$scope.countries={"INDIA":['karnataka','Uttar Pradesh','Madhya Pradesh','Tamil Nadu'],
						      "CANADA":['British Columbia','Ontario'],
						  	  "USA":['Florida','Illinoi','California']};

			$scope.cols=[{'fname':'Suchita','lname':'Gupta','dateofbirth':'10-10-1976','mealtype':'veg','country':'USA','state':'florida'}]; 
        	$scope.selectedcols=[];  

        	$scope.addcol=function(){

          	if($scope.myform.fn.$pristine || $scope.myform.ln.$pristine ){
            	alert("required fields cannot be empty");
          		}
          	else{

          		
          			var strcountry=document.getElementById("country").value;
          			var dat=document.getElementById("date1").value;
          		
            	var f=$scope.fnameng;
            	var l=$scope.lnameng;
            	var d=dat;
            	var m=$scope.mealng;
            	var c=strcountry;
            	var s=$scope.stateng;
            	var newcol={'fname':f,'lname':l,'dateofbirth':d,'mealtype':m,'country':c,'state':s};
            	$scope.cols.push(newcol);
          		}
        	}

        	$scope.removecol=function(){
          	angular.forEach($scope.selectedcols,function(col,idx){
            if($scope.selectedcols[idx]===true){
                $scope.cols.splice(idx,1);
                delete $scope.selectedcols[idx];
            	}
            });
        	}

        	$scope.updater=function(){
          	angular.forEach($scope.selectedcols,function(col,idx){ 
              	if($scope.selectedcols[idx]===true){   
                	if($scope.myform.fn.$pristine || $scope.myform.ln.$pristine ){
                  	alert("required fields cannot be empty");
                  	}
                else{     
                  	$scope.cols[idx].fname=$scope.fnameng;
                  	$scope.cols[idx].lname=$scope.lnameng;
                  	$scope.cols[idx].dateofbirth=$scope.dateng;
                  	$scope.cols[idx].mealtype=$scope.mealng;
                  	$scope.cols[idx].country=document.getElementById("country").value;
                  	$scope.cols[idx].state=$scope.stateng;
                  	$scope.clearin();
                  	}
              	}
       		});
      		}

      		$scope.clearin=function(){
          		$scope.fnameng="";
          		$scope.lnameng="";
          		$scope.dateng="";
          		$scope.mealng="";
          		$scope.countryng="";
          		$scope.stateng="";

        	}
		});
  