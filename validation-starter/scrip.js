let name = document.getElementById("name-error");
let phonw = document.getElementById("phone-error");
let Email = document.getElementById("Email-error");
let age = document.getElementById("Age-error");
let Password = document.getElementById("Password-error");
let confirm = document.getElementById("Confirm-error");
let submit = document.getElementById("sumbit-error");

function phon(){
  let nam = document.getElementById("contect").value;
  if(nam.length == 0){
    name.innerHTML= `name Is required`;

    return false
    
  }
  name.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
  true


}

function nom(){
  let number = document.getElementById("no").value;
  if(number.length != 10  ){
    phonw.innerHTML= `Phone number must be 10`;

    return false
    
  }
  phonw.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
  true


}
function mail(){
  let E = document.getElementById("e").value;
  if(E.length == 0  ){
    Email.innerHTML= `email is required`;

    return false
    
  }
  if (!E.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)  ){
    Email.innerHTML= `email is invalid`;

    return false
    
  }
  Email.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
  true


}


function vay(){
  let life = Number(document.getElementById("g").value);
  if(!( life > 17 && life<36 )  ){
    age.innerHTML= `age between 18 to 35`;

    return false
    
  }
  age.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
  true


}

function pas(){
  let r = document.getElementById("pass").value;
  if(r.length == 0  ){
    Password.innerHTML= `password required`;

    return false
    
  }
  Password.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
  true
  


}

function cm(){
  let r = document.getElementById("pass").value;
  let m = document.getElementById("c").value;
  if(r != m  ){
    confirm.innerHTML= `password must be same`;

    return false
    
  }
  confirm.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
  true

  


}

