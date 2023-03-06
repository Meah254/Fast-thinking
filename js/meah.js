window.onload = function (){var questions = ["1-3+3-1","5*6-5+5-30+7","1+1+1+1+1+1+1+1-1-1-1-1+4","2*2-4-5+4+2","13*1+2-15+15-30+15"];
    var answers = ["0","7","8","1","0"];
    var buttons = document.getElementById ("app");
    var h1 = document.getElementById ("h1");
    var back = document.getElementById ("back");
    back.addEventListener ("click",back);
    function back (){  }
    var start = document.getElementById ("start") ;
    var quiz = document.getElementById ("quiz");
    var name = document.createElement ("input");
    name.placeholder = "Enter your name.";
    var parent = document.getElementById ("page");
    start.addEventListener ("click",next);
    function next (){ 
        var i=0;
        var t=10 ;
        var n=1;
        var scor=0;
        quiz.innerHTML = "Enter your name in the input below and click \"Submit\". Just one name is enough.";
        parent.appendChild (name);
        buttons.removeChild (start);
        var submit= document.createElement ("button");
        submit.id="submit";
        var text = document.createTextNode ("Submit");
        submit.appendChild (text);
        buttons.appendChild (submit);
        submit.addEventListener ("click",home);
        function home (){ 
            if (name.value.length==0){
                alert ("Hey ! Please enter a valid name.Or should i call you blank? Nooo of course not") 
            } else{
                h1.appendChild (document.createTextNode (name.value));
                name.value="" 
            } 
            if (h1.innerHTML.length!=0){
                quiz.innerHTML ="Which color would you like your name to be? Enter a valid color.";
                name.placeholder="Enter prefered color";
                buttons.removeChild (submit);
                var check =document.createElement ("button");
                check.innerHTML = "Check";
                buttons.appendChild (check);
                check.id = "submit";
                var ok = document.createElement ("button");
                ok.innerHTML = "ok";
                ok.id="submit";
                buttons.appendChild (ok)
            } 
            check.onclick=function (){
                h1.style.color=name.value
            };
            ok.addEventListener ("click",make_dashboard);
            function make_dashboard (){ 
                var score= document.createElement ("p");
                score.innerHTML ="score:0";
                score.id="up";
                var timer= document.createElement ("p") ;
                timer.innerHTML ="timer:10";
                timer.id="up" ;
                var no= document.createElement ("p");
                no.innerHTML ="No:0" ;
                no.id="up";
                var info= document.getElementById ("info");
                buttons.removeChild (ok);
                buttons.removeChild(check);
                parent.removeChild (name);
                quiz.innerHTML ="You'll have ten seconds to answer each question. The questions consists of only simple mathematical problems. So good luck "+h1.innerHTML +"!";
                var go= document.createElement ("button") ;
                go.innerHTML ="Go!";
                go.id="submit";
                buttons.appendChild (go);
                function time(){
                    if (t==0){
                        t+=10;
                        i+=1;
                        n+=1
                    }
                    if (n==6){
                         buttons.innerHTML ="";
                        quiz.innerHTML ="" ;
                        if (scor<3){
                            info.innerHTML ="Whoa! sorry to say this but a score of "+scor+" means you can't even think "+h1.innerHTML+ " "
                        }else{
                            info.innerHTML ="You are a PRO. getting to a score of "+scor +" is not a joke. !!!CONGRATS!!!"
                        }
                        info= "infom"
                    }
                    quiz.innerHTML =questions[i];
                    no.innerHTML ="    No."+n;
                    score.innerHTML ="score:"+scor;
                    timer.innerHTML ="timer:"+t;
                    t-=1} go.addEventListener ("click",quizes) ;
                    function quizes (){
                        info.appendChild (score);
                        info.appendChild (timer);
                        info.appendChild (no);
                        setInterval (time,1000)
                    } 
                    go.addEventListener ("click",done);
                    function done (){
                        var ans= document.createElement ("input");
                        ans.placeholder ="Answer here!";
                        var don= document.createElement ("button");
                        don.id="submit";
                        don.innerHTML ="Done";
                         buttons.removeChild (go);
                        buttons.appendChild (ans);
                        buttons.appendChild (don);
                        don.addEventListener ("click",update);
                        function update (){
                        if (ans.value==answers[i]){
                            scor+=1;
                            t=10;
                            n+=1;
                            i+=1
                        }else{
                            alert ("Oops ! Sorry! Keep trying. Wonder what the answer is! ")
                        }
                    }
                }
            }
        }
    }
}