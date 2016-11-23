var myap = angular.module("myapp",[]);
myap.controller("maincontroller",firstone);
function firstone(){
  this.name1=0;
  this.name2=0;
  this.name3=0;
  this.name4=0;
  this.name5=0;
this.clicksum = function(){

   var number1 = parseFloat(this.name1);
   var number2 = parseFloat(this.name2);
   var number3 = parseFloat(this.name3);
   var number4 = parseFloat(this.name4);
   var number5 = parseFloat(this.name5);
   var price = parseFloat(4.50);
   var price2 = parseFloat(5.50);
   var price3 = parseFloat(6.50);
   var price4 = parseFloat(7.50);
   var price5 = parseFloat(4.50);

   var num2= (number1*price)+(number2*price2)+(number3*price3)+(number4*price4)+(number5*price5);

   this.finalprice = num2;
}


};
