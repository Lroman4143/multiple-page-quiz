var score = 0;
document.addEventListener("DOMContentLoaded",function(event){
    var button1 = document.getElementById("button1");
    button1.addEventListener("click",function(event){
        
        window.open("http://geekwise-lindsey-roman.github.io/multiple-page-quiz/question1.html","_self");
        
        var question_1 = document.getElementById("question_1");
        var question_2 = document.getElementById("question_2");
        var question_3 = document.getElementById("question_3");
        
        question_1.onclick = function(){
            score = score - 5;
            question_1.disabled = true;
            question_1.setAttribute("class", "btn disabled");
        };
        
        
        question_2.onclick = function(){
            score = score - 5;
            question_2.disabled = true;
            question_2.setAttribute("class", "btn disabled two");
        };
        
        question_3.onclick = function(){
            question_3.disabled = true;
            question_2.disabled = true;
            question_1.disabled = true;
            
          question_3.setAttribute("class", "btn disabled");
          
          score = score + 10;
          
          var submit_1 = document.createElement("button");
          submit_1.setAttribute("class", "btn");
          submit_1.textContent = "Next Question";
        };
      
    });
    
});