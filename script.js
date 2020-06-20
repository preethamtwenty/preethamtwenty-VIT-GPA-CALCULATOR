function calc(){
    var a1=0;
    var b1=0; var a2=0; var b2=0; var a3=0; var b3=0; var a4=0;
    var b4=0;
    var a5=0;
    var b5=0;
    var a6=0;
    var b6=0; var a7=0; var b7=0;
    var a8=0; var b8=0;
    a1=document.querySelector("#s1m").defaultValue = "0";
    a2=document.querySelector("#s2m").defaultValue = "0";
    a3=document.querySelector("#s3m").defaultValue = "0";
    a4=document.querySelector("#s4m").defaultValue = "0";
    a5=document.querySelector("#s5m").defaultValue = "0";
    a6=document.querySelector("#s6m").defaultValue = "0";
    a7=document.querySelector("#s7m").defaultValue = "0";
    a8=document.querySelector("#s8m").defaultValue = "0";
    b1=document.querySelector("#s1c").defaultValue = "0";
    b2=document.querySelector("#s2c").defaultValue = "0";
    b3=document.querySelector("#s3c").defaultValue = "0";
    b4=document.querySelector("#s4c").defaultValue = "0";
    b5=document.querySelector("#s5c").defaultValue = "0";
    b6=document.querySelector("#s6c").defaultValue = "0";
    b7=document.querySelector("#s7c").defaultValue = "0";
    b8=document.querySelector("#s8c").defaultValue = "0";




    var a1=parseFloat(document.querySelector("#s1m").value);
    
    var b1=parseFloat(document.querySelector("#s1c").value);
    var a2=parseFloat(document.querySelector("#s2m").value);
    var b2=parseFloat(document.querySelector("#s2c").value);
   
    var a3=parseFloat(document.querySelector("#s3m").value);
    var b3=parseFloat(document.querySelector("#s3c").value);
    
    var a4=parseFloat(document.querySelector("#s4m").value);
    var b4=parseFloat(document.querySelector("#s4c").value);
    
    var a5=parseFloat(document.querySelector("#s5m").value);
    var b5=parseFloat(document.querySelector("#s5c").value);
    
    var a6=parseFloat(document.querySelector("#s6m").value);
    var b6=parseFloat(document.querySelector("#s6c").value);
    var a7=parseFloat(document.querySelector("#s7m").value);
    var b7=parseFloat(document.querySelector("#s7c").value);

    var a8=parseFloat(document.querySelector("#s8m").value);
    var b8=parseFloat(document.querySelector("#s8c").value);
    

    var c=a1*b1+a2*b2+a3*b3+a4*b4+a5*b5+a6*b6+a7*b7+a8*b8;
    var d=b1+b2+b3+b4+b5+b6+b7+b8;
    var e=c/d;
    var n = e.toFixed(2);
  
    

   
    
    document.querySelector("#result").innerHTML="YOUR CGPA IS    "+  n;
    
    
    
}
function calc2(){
    n1=document.querySelector("#n1").defaultValue = "0";
    m1=document.querySelector("#m1").defaultValue = "0";
    n2=document.querySelector("#n2").defaultValue = "0";
    m2=document.querySelector("#m2").defaultValue = "0";
    n3=document.querySelector("#n3").defaultValue = "0";
    m3=document.querySelector("#m3").defaultValue = "0";
    n4=document.querySelector("#n4").defaultValue = "0";
    m4=document.querySelector("#m4").defaultValue = "0";
    n5=document.querySelector("#n5").defaultValue = "0";
    m5=document.querySelector("#m5").defaultValue = "0";
    n6=document.querySelector("#n6").defaultValue = "0";
    m6=document.querySelector("#m6").defaultValue = "0";
    n7=document.querySelector("#n7").defaultValue = "0";
    m7=document.querySelector("#m7").defaultValue = "0";
    n8=document.querySelector("#n8").defaultValue = "0";
    m8=document.querySelector("#m8").defaultValue = "0";

    var n1=document.querySelector("#n1").value;
    var m1=document.querySelector("#m1").value;
    var n2=document.querySelector("#n2").value;
    var m2=document.querySelector("#m2").value;
    var n3=document.querySelector("#n3").value;
    var m3=document.querySelector("#m3").value;
    var n4=document.querySelector("#n4").value;
    var m4=document.querySelector("#m4").value;
    var n5=document.querySelector("#n5").value;
    var m5=document.querySelector("#m5").value;
    var n5=document.querySelector("#n6").value;
    var m6=document.querySelector("#m6").value;
    var n7=document.querySelector("#n7").value;
    var m7=document.querySelector("#m7").value;
    var n8=document.querySelector("#n8").value;
    var m8=document.querySelector("#m8").value;

    var l1=[n1,n2,n3,n4,n5,n6,n7,n8];
    var l2=[m1,m2,m3,m4,m5,m6,m7,m8];
    var l3=[];
    var j =0;
    var  k=0;
    var sum2=0;
    var sum=0;
    
    var ar1=[];
    var i=0;
    
    
    

    
    
        for(i=0;i< l1.length; i++){
            if(l1[i]=="S"){
                if(l2[i]=="f")
                {
                    var p1=10*4;
                }
                else if(l2[i]=="t"){
                    var p1=10*3;
                }
                else if(l2[i]=="tw"){
                    var p1=10*2;
                }
                else if(l2[i]=="o"){
                    var p1=10*1;
                }
        
            }
            else if(l1[i]=="A"){
                if(l2[i]=="f")
                {
                    var p1=9*4;
                }
                else if(l2[i]=="t"){
                    var p1=9*3;
                }
                else if(l2[i]=="tw"){
                    var p1=9*2;
                }
                else if(l2[i]=="o"){
                    var p1=9*1;
                }
        
            }
            else  if(l1[i]=="B"){
                if(l2[i]=="f")
                {
                    var p1=8*4;
                }
                else if(l2[i]=="t"){
                    var p1=8*3;
                }
                else if(l2[i]=="tw"){
                    var p1=8*2;
                }
                else if(l2[i]=="o"){
                    var p1=8*1;
                }
        
            }
            else  if(l1[i]=="C"){
                if(l2[i]=="f")
                {
                    var p1=7*4;
                }
                else if(l2[i]=="t"){
                    var p1=7*3;
                }
                else if(l2[i]=="tw"){
                    var p1=7*2;
                }
                else if(l2[i]=="o"){
                    var p1=7*1;
                }
        
            }
           
            
            else if(l1[i]=="D"){
                if(l2[i]=="f")
                {
                    var p1=7*4;
                }
                else if(l2[i]=="t"){
                    var p1=7*3;
                }
                else if(l2[i]=="tw"){
                    var p1=7*2;
                }
                else if(l2[i]=="o"){
                    var p1=7*1;
                }
        
            }
            else if(l1[i]=="E"){
                if(l2[i]=="f")
                {
                    var p1=6*4;
                }
                else if(l2[i]=="t"){
                    var p1=6*3;
                }
                else if(l2[i]=="tw"){
                    var p1=6*2;
                }
                else if(l2[i]=="o"){
                    var p1=6*1;
                }
        
            }
            
            else if(l1[i]=="F"){
                if(l2[i]=="f")
                {
                    var p1=0*4;
                }
                else if(l2[i]=="t"){
                    var p1=0*3;
                }
                else if(l2[i]=="tw"){

                
                    var p1=0*2;
                }
                
                else if(l2[i]=="o"){
                    var p1=0*1;
                }

            
        
            }
            ar1.push(p1);
        }
        for(i=0;i< l1.length; i++){
        
            if(l2[i]=="f")
            {
                
                var p2=4;
            }
            else if(l2[i]=="t"){
                var p2=3;
            }
            else if(l2[i]=="tw"){
                var p2=2;

            }
                
            
            else if(l2[i]=="o"){
                var p2=1;
            }
        
            
            
            
            l3.push(p2);

    
        }
       

        
        for(k=0;k< ar1.length; k++){
            
            sum=sum+ar1[k];

          



        }
        for(j=0;j< l3.length; j++){
            
            sum2=sum2+l3[j];


        }
        
        
        
        var h1=sum/sum2;
        var h2 = h1.toFixed(2);
       

        document.querySelector("#result1").innerHTML="YOUR GPA IS  "+h2  ;
       
  

}
