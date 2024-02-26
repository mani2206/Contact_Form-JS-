


document.getElementById("idsubmit").addEventListener("click", submit);

function submit(e){
  e.preventDefault();
  var error= 0;
  error+= firstName();
  error+= phonenumber();
  error+= mail();
  error+= date();
  error+= states();
  error+= gender();
  error+= messages();
}

//contions1
document.getElementById("name").addEventListener("keyup",firstName);
  function firstName(){
     var error= 0;
     var username = document.getElementById("name").value;
     var notnum = /^[0-9{.@$/%^&*(). !}]+$/;
     if( username == "")
     {
        document.getElementById("name").classList.add("is-invalid");
        document.getElementById("idname").innerHTML= "What's ur name?";
        document.getElementById("idname").style.color ="red";  
     }
     else if(username.match(notnum)){
         document.getElementById("idname").innerHTML= "Number and special characters cannot be taken";
         document.getElementById("idname").style.color ="red"; 
         document.getElementById("name").classList.add("is-invalid");
     }
     else
     {
         document.getElementById("idname").innerHTML = "Valid."; 
         document.getElementById("name").classList.remove("is-invalid");
         document.getElementById("name").classList.add("is-valid");
         document.getElementById("idname").style.color ="yellow";
         error++;
     }
  } 
  
  //conditions 2
  document.getElementById("phone").addEventListener("keyup",phonenumber);
  function phonenumber(){ 
      var error= 0;
      var phonenumber = document.getElementById("phone").value;
      var phonevalid = /^([0-9]{10})+$/;
      if( phonenumber == "")
      {
        document.getElementById("phones").innerHTML= "Please enter a valid phone number.";  
        document.getElementById("phones").style.color ="red";
        document.getElementById("phone").classList.add("is-invalid");
        document.getElementById("phone").classList.remove("is-valid");
      }
      else if(phonenumber.match(phonevalid))
      {
      
        document.getElementById("phones").innerHTML = "Valid."; 
        document.getElementById("phone").classList.remove("is-invalid");
        document.getElementById("phone").classList.add("is-valid");
        document.getElementById("phones").style.color ="green";
      }
      else
      {
        document.getElementById("phones").innerHTML= "Mobile Number can be 10 numbers";  
        document.getElementById("phones").style.color ="red";
        error++;
      }
  }    

  //contions3
  document.getElementById("email").addEventListener("keyup",mail);
  function mail(){
      var error= 0;
      var mail = document.getElementById("email").value;
      var mailvalid = /^([a-z0-9_.])+\@([a-z])+\.([a-z])+$/;
      if( mail == "")
      {
        document.getElementById("idemail").innerHTML= "Please enter ur valuable Mail id";  
        document.getElementById("idemail").style.color ="red";
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("email").classList.remove("is-valid");
      }
      else if(mail.match(mailvalid)){
        document.getElementById("idemail").innerHTML = "Valid.";
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");
        document.getElementById("idemail").style.color ="yellow"; 
      }
      else
      {
        document.getElementById("idemail").innerHTML= " @ and . is missing";
        document.getElementById("idemail").style.color ="red"; 
        error++;
      }
  }  

  // conditions4 
  document.getElementById("date").addEventListener("change",date);
  function date(){ 
    var mail = document.getElementById("date").value;
    if( mail == "")
    {
      document.getElementById("iddate").innerHTML= " Please choose the date.";  
      document.getElementById("iddate").style.color ="red";
      
    }
    else
    {
      document.getElementById("iddate").innerHTML = "Valid.";
      document.getElementById("date").classList.remove("is-invalid");
      document.getElementById("date").classList.add("is-valid");
      document.getElementById("iddate").style.color ="yellow";
    }
} 
  
// condtions 5
document.getElementById("state").addEventListener("change",states);
  function states(){
    var states = document.getElementById("state").value;
    if( states == "")
    {
      document.getElementById("idstate").innerHTML="Please Select ur state.";  
      document.getElementById("idstate").style.color ="red";
      document.getElementById("state").classList.add("is-invalid");
      document.getElementById("state").classList.remove("is-valid");
    }
    else
    {
      document.getElementById("idstate").innerHTML = "Valid."; 
      document.getElementById("state").classList.remove("is-invalid");
      document.getElementById("state").classList.add("is-valid");
      document.getElementById("idstate").style.color ="yellow";
    }
} 

// conditions6 
document.querySelector('input[name="gender"]').addEventListener("change",gender);
  function gender(){
    var getSelectedValue = document.querySelector('input[name="gender"]:checked');  
      
  if(getSelectedValue != null) {   
      document.getElementById("idgender").innerHTML ="Gender is selected"; 
      document.getElementById("idgender").style.color ="yellow";  
  }   
  else {   
      document.getElementById("idgender").innerHTML = "Gender is not selected";
      document.getElementById("idgender").style.color ="red"; 
  }   
}

//condition7
function messages(){  
    var error= 0;
    var message = document.getElementById("message").value;
    if( message == "")
    {
      document.getElementById("idmessage").innerHTML= "Message Can be filled."; 
      document.getElementById("idmessage").style.color ="red"; 
      document.getElementById("message").classList.add("is-invalid");
      document.getElementById("message").classList.remove("is-valid");
      error++;
    }
    else
    {
      document.getElementById("idmessage").innerHTML = "Valid."; 
      document.getElementById("message").classList.remove("is-invalid");
      document.getElementById("message").classList.add("is-valid");
      document.getElementById("idmessage").style.color ="yellow";
    }
    return error;
}  
//reset
document.getElementById("idreset").addEventListener('click', resetfn);
function resetfn(){
  document.getElementById("myform").reset();
  var clearError = document.querySelectorAll(".clear");
  clearError.forEach(element => {
       element.classList.remove("is-valid");
       element.classList.remove("is-invalid");
       element.innerHTML="";

  });
  document.getElementById("state").classList.remove("is-invalid");
  document.getElementById("state").classList.remove("is-valid");
}


