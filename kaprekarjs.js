$(function(){

$('.check').click(function(){
    $('.ans').html("");
    $('.abc').html("");
    var z= $('.input').val().toString();
    var s = "";
    s = z;
    var xArr = new Array();
    xArr[0]= 0;
    var counter=0;
    
    for(i=0;i<=40|| counter==1;i++){
    
    var x = s.split("");
   
    var w= x.sort(function(a, b){return b-a}).join("");
    var v= x.sort(function(a, b){return a-b}).join("");
    var y= parseInt(w)-parseInt(v);
    
    if(x.length ==3 || x.length ==4){
    if(y == parseInt(s)){
    
         counter++;
         if(counter==2){
         $('.ans').append( "<br /> Kerprekar's number found");
             break ;
         }//end if counter==2
         
    }//end if y==ParseInt(s)
    s= y.toString();
      $('.ans').append("<br />"+w+" - "+v+"  =  "+y);      
    }//end if x.length ==3
    
    
    if(x.length >= 5){
        if(xArr.includes(y)){
        var sArr= xArr.slice(xArr.indexOf(y))
             $('.ans').append( "<b>Kerprekar's series found for the "+x.length +" digit number and it is");
             for(j=0;j<sArr.length;j++){
                 $('.ans').append("<label class=\"btn bg-info\">" + sArr[j] +"</label>");
                 if(j+1%3==0){
                     $('.ans').append("<p> ____<p />");
                 }
             }
             counter++;
             break ;
        }//end if xArr includes y
        else{
            xArr[i]= y;
           // console.log(xArr[i]);
        }
        s= y.toString();
        $('.abc').append("<tr><td>"+w+"  - "+v+"  =  " +y+"</td></tr>");
    }//end if x>5
    }//end for loop
});
});