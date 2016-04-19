document.addEventListener("DOMContentLoaded",function(event){
    
    var main = document.getElementById("main");
    var your = document.createElement("h3");
    var on = document.createElement("a");
    var ward = document.createElement("button");
              var total = document.createElement("h1");
              your.textContent = "Your Score:";
              
              total.textContent = localStorage.getItem("score");
              
              var outof = document.createElement("h4");
              outof.textContent = "out of 50";
              ward.textContent = "Play Again";
              
              on.setAttribute("href", "index.html");
              ward.setAttribute("class", "btn");
              
              main.appendChild(your);
              main.appendChild(total);
              main.appendChild(outof);
              main.appendChild(on);
              on.appendChild(ward);
            
        });