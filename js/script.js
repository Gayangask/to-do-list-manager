let tasks = [];


let enterBtn = document.getElementById("inputBtn");
let back = document.getElementById("backBtn");
let list = document.getElementById("list");

list.innerHTML = "<br>1. Add task<br><br>2. Remove Tasks<br><br>3. View Tasks<br><br>4. Exit";

function myfunction(){

  let valuet = document.getElementById("intask").value;
  let choice = document.getElementById("choice").value;
  // let valuetinput = document.getElementById("intask");
  
  if(choice !== ""){
    if(choice == 1){
      
      tasks.push(valuet);
      
      
      
    }else if(choice == 2){
      tasks.length = 0;
      list.innerHTML = tasks.join("");
      
    }else if(choice == 3){
      
      list.innerHTML = `<h2 style="text-align:center;">Your Tasks</h2><ul style="margin-left:25px;margin-top:25px;">${tasks.map(tasks=>`<li>${tasks}</li>`).join("")}</ul`;

      

    }else if(choice == 4){
      list.style.textAlign = "center";
      list.innerHTML = "<br><br><br><br>Have A Nice Day....";
    }else{
      list.style.textAlign = "center";
      list.innerHTML = "<br><br><br><br><br>Enter A Valid Number...."
    }
    
  }else{
    list.style.textAlign = "center";
      list.innerHTML = "<br><br><br><br>Please Enter A Value....";
  }
  }

enterBtn.addEventListener("click",function(){
  let valuetinput = document.getElementById("intask");
  myfunction();

  valuetinput.value = "";
  valuetinput.focus();
  
  

});


back.addEventListener("click",function(){
  let choiceInput = document.getElementById("choice");
  choiceInput.value = "";

  
  list.style.textAlign = "left";
  list.innerHTML = "<br>1. Add task<br><br>2. Remove Tasks<br><br>3. View Tasks<br><br>4. Exit";

});


