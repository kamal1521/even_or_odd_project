var p1={
    name:"Player 1",
    a1_count:0,
    a1_val:[]
};
var p2={
    name:"Player 2",
    a2_count:0,
    a2_val:[]
};
var count=0;
function playEvenOdd(){
    var a1=Math.floor(Math.random()*25+1);
    var a2=Math.floor(Math.random()*25+1);
    p1.a1_val.push(a1);
    p2.a2_val.push(a2);
    console.log(a1,a2);
    if(count==5)
    {
        if(p1.a1_count==p2.a2_count){
            document.getElementById("result").textContent="Ohhhh!!!! Woooopppppssss!!!! Match Draw!!!!";
        
    }
        else if(p1.a1_count>p2.a2_count)
        {
        document.getElementById("result").textContent="Yahooooo!!!!!! Player 1 -Your Winner!!!!!";
        }
        else
        {
            document.getElementById("result").textContent="Yahooooo!!!!!! Player 2 -Your Winner!!!!!";
        }
    }
    else{
        count++;
        if(a1%2==0)
        {
            p1.a1_count++;
            document.getElementById("score1").textContent=p1.a1_count;
        }
        if(a2%2==0)
        {
            p2.a2_count++;
            document.getElementById("score2").textContent=p2.a2_count;
        } 
        updateCircle();
    }

}
function updateCircle(){
    var p1_circle=document.getElementById("p1").children;
    p1.a1_val.forEach((run,value)=>{
        if(run%2==0)
        {
            p1_circle[value].style.backgroundColor="green";
        }

        else
        {
            p1_circle[value].style.backgroundColor="red";
        }
    });
        var p2_circle=document.getElementById("p2").children;
        p2.a2_val.forEach((run,value)=>{
            if(run%2==0)
            {
                p2_circle[value].style.backgroundColor="green";
            }
    
            else
            {
                p2_circle[value].style.backgroundColor="red";
            }
        });
}
