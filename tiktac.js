let  one,two,three,four,five,six,seven,eigth,nine;
let out1=document.querySelector('.out');
one=document.getElementById("1");
two=document.getElementById("2");
three=document.getElementById("3");
four=document.getElementById("4");
five=document.getElementById("5");
six=document.getElementById("6");
seven=document.getElementById("7");
eigth=document.getElementById("8");
nine=document.getElementById("9");
let x='X';
let o='O';
let player1,player2;
player1=0;
player2=0;
var i=document.querySelector('.player1');
var c=document.querySelector('.player2');
i.innerHTML="Крестики: "+ player1;
c.innerHTML="Крестики: "+ player2;

function refresh(){
if(out1.innerHTML=="X победил!"){
    player1+=1;
    i.innerHTML="Крестики: "+ player1;
    out1.innerHTML="Ходит : O";
}
else if(out1.innerHTML=="O победил!"){
    player2+=1;
    c.innerHTML="Крестики: "+ player2;
    out1.innerHTML="Ходит : X";
}
one.style="background-color:null;";
two.style="background-color:null;";
three.style="background-color:null;";
four.style="background-color:null;";
five.style="background-color:null;";
six.style="background-color:null;";
seven.style="background-color:null;";
eigth.style="background-color:null;";
nine.style="background-color:null;";

one.value=".";
two.value=".";
three.value=".";
four.value=".";
five.value=".";
six.value=".";
seven.value=".";
eigth.value=".";
nine.value=".";

}
function check(){
    if(one.value==x&&two.value==x&&three.value==x){
        out1.innerHTML="X победил!";
      
    one.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
    two.style="background-color:red;text-decoration: line-through 4px black;";
    three.style="background-color:red;text-decoration: line-through 4px black;";

    setTimeout(refresh, 3000);
    }
    if(one.value==o&&two.value==o&&three.value==o){
        out1.innerHTML="O победил!";
        one.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        two.style="background-color:green;text-decoration: line-through 4px black;";
        three.style="background-color:green;text-decoration: line-through 4px black;";
        
        setTimeout(refresh, 3000);
    }
    if(one.value==x&&four.value==x&&seven.value==x){
        out1.innerHTML="X победил!";
        one.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        four.style="background-color:red;text-decoration: line-through 4px black;";
        seven.style="background-color:red;text-decoration: line-through 4px black;";
        setTimeout(refresh, 3000);
        
    }
    if(one.value==o&&four.value==o&&seven.value==o){
        out1.innerHTML="O победил!";
        one.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
       four.style="background-color:green;text-decoration: line-through 4px black;";
        seven.style="background-color:green;text-decoration: line-through 4px black;";
        setTimeout(refresh, 3000);
    }
    if(one.value==x&&five.value==x&&nine.value==x){
        out1.innerHTML="X победил!";
        one.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:red;text-decoration: line-through 4px black;";
        nine.style="background-color:red;text-decoration: line-through 4px black;";
        setTimeout(refresh, 3000);
    }
    if(one.value==o&&five.value==o&&nine.value==o){
        out1.innerHTML="O победил!";
        one.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:green;text-decoration: line-through 4px black;";
         nine.style="background-color:green;text-decoration: line-through 4px black;";
         setTimeout(refresh, 3000);
    }
    if(three.value==x&&six.value==x&&nine.value==x){
        out1.innerHTML="X победил!";
        three.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        six.style="background-color:red;text-decoration: line-through 4px black;";
        nine.style="background-color:red;text-decoration: line-through 4px black;";
        setTimeout(refresh, 3000);
    }
    if(three.value==o&&six.value==o&&nine.value==o){
        out1.innerHTML="O победил!";
        three.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        six.style="background-color:green;text-decoration: line-through 4px black;";
         nine.style="background-color:green;text-decoration: line-through 4px black;";
         setTimeout(refresh, 3000);
    }
    if(four.value==x&&five.value==x&&six.value==x){
        out1.innerHTML="X победил!";
        four.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:red;text-decoration: line-through 4px black;";
       six.style="background-color:red;text-decoration: line-through 4px black;";
       setTimeout(refresh, 3000);
    }
    if(four.value==o&&five.value==o&&six.value==o){
        out1.innerHTML="O победил!";
        four.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:green;text-decoration: line-through 4px black;";
         six.style="background-color:green;text-decoration: line-through 4px black;";
         setTimeout(refresh, 3000);
    }
    if(seven.value==x&&eigth.value==x&&nine.value==x){
        out1.innerHTML="X победил!";
        seven.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        eigth.style="background-color:red;text-decoration: line-through 4px black;";
       nine.style="background-color:red;text-decoration: line-through 4px black;";
       setTimeout(refresh, 3000);
    }
    if(seven.value==o&&eigth.value==o&&nine.value==o){
        out1.innerHTML="O победил!";
        setTimeout(refresh, 3000);
        seven.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        eigth.style="background-color:green;text-decoration: line-through 4px black;";
         nine.style="background-color:green;text-decoration: line-through 4px black;";
    }
    if(two.value==x&&five.value==x&&eigth.value==x){
        out1.innerHTML="X победил!";
        two.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:red;text-decoration: line-through 4px black;";
       eigth.style="background-color:red;text-decoration: line-through 4px black;";
       setTimeout(refresh, 3000);
    }
    if(two.value==o&&five.value==o&&eigth.value==o){
        out1.innerHTML="O победил!";
        two.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:green;text-decoration: line-through 4px black;";
         eigth.style="background-color:green;text-decoration: line-through 4px black;";
         setTimeout(refresh, 3000);
    }
    if(three.value==x&&five.value==x&&seven.value==x){
        out1.innerHTML="X победил!";
        three.style="background-color:red;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:red;text-decoration: line-through 4px black;";
       seven.style="background-color:red;text-decoration: line-through 4px black;";
       setTimeout(refresh, 3000);

    }
    if(three.value==o&&five.value==o&&seven.value==o){
        out1.innerHTML="O победил!";
        three.style="background-color:green;text-dicoration;text-decoration: line-through 4px black;";
        five.style="background-color:green;text-decoration: line-through 4px black;";
         seven.style="background-color:green;text-decoration: line-through 4px black;";
         setTimeout(refresh, 1500);
    }
if(one.value!=='.'&&two.value!=='.'&&three.value!=='.'&&four.value!=='.'&&five.value!=='.'&&six.value!=='.'&&seven.value!=='.'&&eigth.value!=='.'&&nine.value!=='.'){
    setTimeout(refresh, 1000);

}
}
function out10(){
if(one.value=='.'&&out1.innerHTML=="Ходит : X"){
   one.value=x;
   one.style="background-color:red";
    out1.innerHTML="Ходит : O";
}
else if(one.value=='.'&&out1.innerHTML=="Ходит : O"){
    one.value=o;
    one.style="background-color:green";
     out1.innerHTML="Ходит : X";
 }
    check();
}
function out11(){
    if(two.value=='.'&&out1.innerHTML=="Ходит : X"){
        two.value=x;
        two.style="background-color:red";
        out1.innerHTML="Ходит : O";
    }
    else if(two.value=='.'&&out1.innerHTML=="Ходит : O"){
        two.value=o;
        two.style="background-color:green";
         out1.innerHTML="Ходит : X";
     }
        check();
    }
    
    function out12(){
        if(three.value=='.'&&out1.innerHTML=="Ходит : X"){
            three.value=x;
            three.style="background-color:red";
            out1.innerHTML="Ходит : O";
        }
        else if(three.value=='.'&&out1.innerHTML=="Ходит : O"){
            three.value=o;
            three.style="background-color:green";
             out1.innerHTML="Ходит : X";
         }
            check();
        }
     
            function out13(){
                if(four.value=='.'&&out1.innerHTML=="Ходит : X"){
                    four.value=x;
                    four.style="background-color:red";
                    out1.innerHTML="Ходит : O";
                }
                else if(four.value=='.'&&out1.innerHTML=="Ходит : O"){
                    four.value=o;
                    four.style="background-color:green";
                     out1.innerHTML="Ходит : X";
                 }
                    check();
                } 
                function out14(){
                    if(five.value=='.'&&out1.innerHTML=="Ходит : X"){
                        five.value=x;
                        five.style="background-color:red";
                        out1.innerHTML="Ходит : O";
                    }
                    else if(five.value=='.'&&out1.innerHTML=="Ходит : O"){
                        five.value=o;
                        five.style="background-color:green";
                         out1.innerHTML="Ходит : X";
                     }
                        check();
                    } 
                    function out15(){
                        if(six.value=='.'&&out1.innerHTML=="Ходит : X"){
                            six.value=x;
                            six.style="background-color:red";
                            out1.innerHTML="Ходит : O";
                        }
                        else if(six.value=='.'&&out1.innerHTML=="Ходит : O"){
                            six.value=o;
                            six.style="background-color:green";
                             out1.innerHTML="Ходит : X";
                         }
                            check();
                        } 
                        function out16(){
                            if(seven.value=='.'&&out1.innerHTML=="Ходит : X"){
                                seven.value=x;
                                seven.style="background-color:red";
                                out1.innerHTML="Ходит : O";
                            }
                            else if(seven.value=='.'&&out1.innerHTML=="Ходит : O"){
                                seven.value=o;
                                seven.style="background-color:green";
                                 out1.innerHTML="Ходит : X";
                             }
                                check();
                            } 
                            function out17(){
                                if(eigth.value=='.'&&out1.innerHTML=="Ходит : X"){
                                    eigth.value=x;
                                    eigth.style="background-color:red";
                                    out1.innerHTML="Ходит : O";
                                }
                                else if(eigth.value=='.'&&out1.innerHTML=="Ходит : O"){
                                    eigth.value=o;
                                    eigth.style="background-color:green";
                                     out1.innerHTML="Ходит : X";
                                 }
                                    check();
                                } 
                                function out18(){
                                    if(nine.value=='.'&&out1.innerHTML=="Ходит : X"){
                                        nine.value=x;
                                        nine.style="background-color:red";
                                        out1.innerHTML="Ходит : O";
                                    }
                                    else if(nine.value=='.'&&out1.innerHTML=="Ходит : O"){
                                        nine.value=o;
                                        nine.style="background-color:green";
                                         out1.innerHTML="Ходит : X";
                                     }
                                        check();
                                    } 
                                
one.onclick=out10;
two.onclick=out11;
three.onclick=out12;
four.onclick=out13;
five.onclick=out14;
six.onclick=out15;
seven.onclick=out16;
eigth.onclick=out17;
nine.onclick=out18;