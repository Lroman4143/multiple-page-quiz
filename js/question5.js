document.addEventListener("DOMContentLoaded",function(event){
    
    var window2 = document.getElementById("window2");
    
    window2.setAttribute("href","final.html");

    var question1 = document.getElementById("question_1");
    var question2 = document.getElementById("question_2");
    var question3 = document.getElementById("question_3");
    
    question1.onclick = function(){
            localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 5);
            question1.disabled = true;
            question1.setAttribute("class", "btn disabled");
        };
        
        
        question3.onclick = function(){
            localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 5);
            question3.disabled = true;
            question3.setAttribute("class", "btn disabled");
        };
        
        question2.addEventListener("click",function(event){
            question1.disabled = true;
            question3.disabled = true;
          question2.setAttribute("class", "btn disabled two");
          localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 10);
          
          var submit = document.createElement("button");
          
          submit.setAttribute("class","btn nq");
          submit.textContent = "Finish";
          
          window2.appendChild(submit);
        });
            
        });