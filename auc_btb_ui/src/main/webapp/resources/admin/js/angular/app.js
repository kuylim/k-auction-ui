/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//app.controller('AppController', function($scope, $http){
///************************************************** LOADING SCOPE **********************************************************/
//         $scope.getAuction = function(){
//                    $http({
//                                url:'http://localhost:9999/api/auction/get',
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.auctions = response.data.DATA;
//                                console.log(response.data.DATA);
//                    });
//         };
////                  $http({
////                            url:'http://localhost:9999/api/bid-log/get',
////                            method:'GET'
////                   }).then(function(response){
////                            $scope.biding = response.data.DATA;
////                            console.log(response.data.DATA);
////	});
//	
//        $scope.getAuction();
//});
//
//app.controller('CategoryController', function($scope, $http){
///************************************************** LOADING SCOPE **********************************************************/
//    
//        $scope.getAuction();
//});

// 13th, Aug, 2016---------------------------------------------------------------------------------------------------------------
//
//var app = angular.module('AuctionApp', []);
//app.controller('AdminController', function($scope,$http){
//    $scope.getBidCustomers = function(){
//        $http({
//                           url:'http://localhost:9999/api/bid-log/get',
//                           method:'GET'           
//                 }).then(function(response){
//                                   $scope.bidcustomers = response.data.DATA;
//                                    console.log(response.data.DATA);
//                           },function(response){
//                                    console.log(response.data.MESSAGE);
//                  });
//    };
//    $scope.getTopCustomers = function(){
//        $http({
//                           url:'http://localhost:9999/api/customer/get?page=1&limit=12',
//                           method:'GET'           
//                 }).then(function(response){
//                                   $scope.topcustomers = response.data.DATA;
//                                    console.log(response.data.DATA);
//                           },function(response){
//                                    console.log(response.data.MESSAGE);
//                  });
//    };
//    $scope.getTopCustomers();
//    $scope.getBidCustomers();
//});
//
///************************************************** AUCTION CONTROLLER**********************************************************/
//app.controller('AuctionController', function($scope, $http){
//         $scope.getAuction = function(){
//                    $http({
//                                url:'http://localhost:9999/api/auction/get',
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.auctions = response.data.DATA;
////                                $scope.auctionid = response.data.DATA[0].auc_id;
////                                
////                                $scope.startdate = '12-12-2018';//start_date;
////                                $scope.enddate = response.data.DATA[0].end_date;
////                                $scope.startprice = response.data.DATA[0].start_price;
////                                $scope.currentprice = response.data.DATA[0].current_price;
//                                console.log(response.data.DATA);
//                    });
//         };
//         
//         $scope.getProduct = function(){
//                    $http({
//                                url:'http://localhost:9999/api/product/get',
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.products = response.data.DATA;
//                                console.log(response.data.DATA);
//                    });
//         };
//         $scope.getOwner = function(){
//                    $http({
//                                url:'http://localhost:9999/api/product-owner/get',
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.owners = response.data.DATA;
//                                console.log(response.data.DATA);
//                    });
//         };
//        $scope.addAuctionItem = function(){
//                 $http({
//                           url:'http://localhost:9999/api/auction/add',
//                           method:'POST',
//                           data:{	
//                                    'auc_id': $scope.aucid,
//                                    'bid_increment_price': $scope.bidincrementprice,
//                                    'buy_price': $scope.buyprice,
//                                    'current_price': $scope.currentprice,
//                                    'end_date':$scope.enddate ,
//                                    'image': $scope.image,
//                                    'name': $scope.name,
//                                    'owner_id': $scope.ownerid,
//                                    'pro_id': $scope.proid,
//                                    'product_condition': $scope.productcondition,
//                                    'start_date': $scope.startdate,
//                                    'start_price': $scope.startprice,
//                                    'status': $scope.status,
//                                    'usr_id': $scope.usrid     
//                           }            
//                 }).then(function(response){
//                            alert("Message : "+response.data.MESSAGE);
//                                   // $scope.getAuction();
//                                    //console.log(response.data.MESSAGE);
//                           },function(response){
//                                    //console.log(response.data.DATA);
//                  });
//        };
//        $scope.deleteAuctionItem = function(id){	
//	$http({
//		url:'http://localhost:9999/api/auction/delete/'+id,
//		method:'PUT'    
//                           }).then(function(response){    
//                                    $scope.getAuction();
//                                    console.log(response.data.MESSAGE);
//                           },function(response){
//                                    //console.log(response.data.DATA);  
//                                    //$scope.getAuction();            
//	});          
//         };
//         $scope.findAuctionItemUpdate = function(obj){
//                  $scope.item = obj.auc.auc_id;    
//         };
//         $scope.updateAuctionItem = function(){	
//	$http({
//                            url:'http://localhost:9999/api/auction/edit',
//                            method:'PUT',
//                            data:{
//                                    'auc_id': $scope.aucid,
//                                    'bid_increment_price': $scope.bidincrementprice,
//                                    'buy_price': $scope.buyprice,
//                                    'current_price': $scope.currentprice,
//                                    'end_date':$scope.enddate ,
//                                    'image': $scope.image,
//                                    'name': $scope.name,
//                                    'owner_id': $scope.ownerid,
//                                    'pro_id': $scope.proid,
//                                    'product_condition': $scope.productcondition,
//                                    'start_date': $scope.startdate,
//                                    'start_price': $scope.startprice,
//                                    'status': $scope.status,
//                                    'usr_id': $scope.usrid
//                            }
//                           }).then(function(response){
//                                    $scope.getAuction();
//                                      alert(response.data.MESSAGE);
//                                    console.log(response.data.MESSAGE);
//                           },function(response){
//                                     alert(response.data.MESSAGE);    
//	});          
//         };
//        $scope.getAuction();
//        $scope.getOwner();
//        $scope.getProduct();
//});
//
//
//
//
//var globalID = 1;
//app.controller('UserController', function($scope, $http){
//         $scope.getUser = function(){
//                    $http({
//                                url:'http://localhost:9999/api/user/get',
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.users = response.data.DATA; 
////                                $scope.userid = response.data.DATA[0].id;
////                                $scope.username = response.data.DATA[0].username;
////                                $scope.password = response.data.DATA[0].password;
////                                $scope.phone = response.data.DATA[0].phone;
////                                $scope.email = response.data.DATA[0].email;
//                                console.log(response.data.DATA);
//                    });
//         };
//         $scope.getUserSelect = function(id){
//         globalID = id;
//           $http({
//                                url:'http://localhost:9999/api/user/search/'+id,
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.selector = response.data.DATA; 
////                                $scope.userid = response.data.DATA[0].id;
////                                $scope.username = response.data.DATA[0].username;
////                                $scope.password = response.data.DATA[0].password;
////                                $scope.phone = response.data.DATA[0].phone;
////                                $scope.email = response.data.DATA[0].email;
//                                console.log(response.data.DATA);
//                    });   
//         };
//         
//           $scope.revokeUser = function(id){	
//	$http({
//		url:'http://localhost:9999/api/user/delete/'+id,
//		method:'PUT'    
//                           }).then(function(response){    
//                                    $scope.getUser(); 
//                                    console.log(response.data.MESSAGE);
//                           },function(response){
//                                    //console.log(response.data.DATA);  
//                                    //$scope.getAuction();            
//	});          
//         };
//         $scope.updateUser = function(){
//                 $http({
//                           url:'http://localhost:9999/api/user/edit',
//                           method:'POST',
//                           data:{
//                                    'email':$scope.email,
//                                    'id': $scope.userid,
//                                    'password': $scope.password,
//                                    'phone': $scope.phone,
//                                    'status': true,
//                                    'username': $scope.username
//                           }            
//                 }).then(function(response){
//                                    console.log(response.data);
//                           },function(response){      
//                                    console.log(response.data);
//                  });
//        };
//         $scope.getUser(); 
//          $scope.getUserSelect(globalID); 
//});
// 13th, Aug, 2016---------------------------------------------------------------------------------------------------------------//

var app = angular.module('AuctionApp', []);
app.controller('AuctionController', function($scope, $http, $filter){
	$scope.getPeople = function(){
		       
        $http({
        	url:'http://localhost:9999/api/auction/get',
            method:'GET'
        }).then(function(response){
            $scope.auctions = response.data.DATA;
            console.log(response.data.DATA);
        });
	};
	$scope.addAuction = function(){
		$http({
			url:'http://localhost:9999/api/auction/add',
			method:'POST',
			 data:{

				  "bid_increment_price": $scope.bidincrementprice,
				  "buy_price": $scope.buyprice,
				  "current_price": $scope.currentprice,
				  "end_date":$scope.enddate, 
				  "owner_id": $scope.ownerid,
				  "pro_id": $scope.proid,
				  "product_condition": $scope.productcondition,
				  "start_date":  $scope.startdate,
				  "start_price": $scope.startprice,
				  "usr_id": $scope.usrid 

				  //"auc_id": 23,  
				  //"status": "1",
				  //"image": "string",
				  //"name": "string",
                   }
		}).then(function(response){
			console.log(response.data);
			//alert(response.data.MESSAGE);
			$scope.getPeople();
			// $scope.name = "";
			// $scope.age = "";
			}, function(response){
					
			});
	};
	$scope.deletePerson = function(id){
		swal({   
			title: "Are you sure to delete this Auction?",   
			text: "Bider will not see this item anymore!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#ED0909",   
			confirmButtonText: "Yes",   
			cancelButtonText: "No",   
			closeOnConfirm: false,   
			closeOnCancel: false}, 
		function(isConfirm){   
			if (isConfirm) {     
				$http({
					url:'http://localhost:9999/api/auction/delete/'+id,
					method:'PUT'
				}).then(function(response){
					swal("Deleted!", "Auction item has been deleted :)", "success");  
					$scope.getPeople();
				},function(response){

				}); 
			} else {     
				swal("Cancelled", "This Auction item has not been deleted :(", "error");   
			} 
		});
	};


	$scope.getData = function(rec){
		 $scope.ownerid =rec.au.firstname,
		 $scope.proid =rec.au.pro_id,

		 $scope.bidincrementprice = rec.au.bid_increment_price,
		 $scope.buyprice =rec.au.buy_price,
		 $scope.currentprice =rec.au.current_price,
		 $scope.enddate = $filter('date')(rec.au.end_date,'yyyy-MM-dd'),
		 $scope.productcondition =rec.au.product_condition,
		 $scope.startdate = $filter('date')(rec.au.start_date,'yyyy-MM-dd'),
		 $scope.startprice =rec.au.start_price,
		 $scope.usrid =	1,//rec.au.usr_id,
		 $scope.aucid =rec.au.auc_id
	};

	$scope.updatePerson = function(){
		alert("Owner is "+$scope.ownerid+" , product is"+$scope.proid);
		swal({   
			title: "Are you sure to update this record?",   
			text: "You will not be able to roll back!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#E98106",   
			confirmButtonText: "Yes",   
			cancelButtonText: "No",   
			closeOnConfirm: false,   
			closeOnCancel: false }, 
		function(isConfirm){   
			if (isConfirm) {     
				$http({
					url:'http://localhost:9999/api/auction/edit',
					method:'PUT',
					data:{
						
						  "auc_id": $scope.aucid,
						  "bid_increment_price": $scope.bidincrementprice,
						  "buy_price": $scope.buyprice,
						  "current_price": $scope.currentprice,
						  "end_date":$scope.enddate, 
						  "owner_id": $scope.ownerid,
						  "pro_id": $scope.proid,
						  "product_condition": $scope.productcondition,
						  "start_date":  $scope.startdate,
						  "start_price": $scope.startprice,
						  "usr_id":1 //$scope.usrid 
					}
				}).then(function(response){
					swal("Updated!", "Auction item has been updated :)", "success"); 
					$('#btnclose').trigger('click');
					$scope.getPeople();
			},function(response){

			});	  
			}else {     
				swal("Cancelled", "Auction item has not been updated :(", "error");   
			} 
		});
	};
	$scope.getPeople();

$scope.getOwner = function(){
        $http({
            url:'http://localhost:9999/api/product-owner/get',
        	method:'GET'
        }).then(function(response){
        	$scope.owners = response.data.DATA;
            console.log(response.data.DATA);
        });
    };
    $scope.getOwner();
    $scope.getProduct = function(){
        $http({
            url:'http://localhost:9999/api/product/get',
            method:'GET'
        }).then(function(response){
            $scope.fsearch = 'anything';
            $scope.products = response.data.DATA;
            console.log(response.data.DATA);
        });
    };
    $scope.getProduct();
    $scope.targetSearch = function(){
        alert($scope.fsearch);
      //return $scope.fsearch;
    };
    $scope.getProduct();
   
});
function test()
{
    var search = document.getElementById("search").value;
    return search;
}

