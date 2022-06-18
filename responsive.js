function SUBMIT(){
    if (document.getElementById("FirstNameId").value==""){
        document.getElementById("FirstNameId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText1").style.display="block";
        document.getElementById("FirstNameId").style.border="2px solid red";
    }
    if (document.getElementById("LastNameId").value==""){
        document.getElementById("LastNameId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText2").style.display="block";
        document.getElementById("LastNameId").style.border="2px solid red";
        
    }
    if (document.getElementById("EmailId").value==""){
        document.getElementById("EmailId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText3").style.display="block";
        document.getElementById("EmailId").style.border="2px solid red";
        
    }
    if (document.getElementById("PasswordId").value==""){
        document.getElementById("PasswordId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText4").style.display="block";
        document.getElementById("PasswordId").style.border="2px solid red";
        
    }
}

function Remove(){
    if (document.getElementById("FirstNameId").value!=""){
        document.getElementById("FirstNameId").style.background="url('./Images/icon-error.svg') 380005px 10px no-repeat";
        document.getElementById("WarningText1").style.display="none";
        document.getElementById("FirstNameId").style.border="2px solid black";
    }
    if (document.getElementById("LastNameId").value!=""){
        document.getElementById("LastNameId").style.background="url('./Images/icon-error.svg') 3800005px 10px no-repeat";
        document.getElementById("WarningText2").style.display="none";
        document.getElementById("LastNameId").style.border="2px solid black";
        
    }
    if (document.getElementById("EmailId").value!=""){
        document.getElementById("EmailId").style.background="url('./Images/icon-error.svg') 380005px 10px no-repeat";
        document.getElementById("WarningText3").style.display="none";
        document.getElementById("EmailId").style.border="2px solid black";
        
    }
    if (document.getElementById("PasswordId").value!=""){
        document.getElementById("PasswordId").style.background="url('./Images/icon-error.svg') 3800005px 10px no-repeat";
        document.getElementById("WarningText4").style.display="none";
        document.getElementById("PasswordId").style.border="2px solid black";
       
    }  
}


function SUBMIT1(){
    if (document.getElementById("FirstNameId").value==""){
        document.getElementById("FirstNameId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText1").style.display="block";
        document.getElementById("FirstNameId").style.border="2px solid red";
    }
}

function SUBMIT2(){
    if (document.getElementById("LastNameId").value==""){
        document.getElementById("LastNameId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText2").style.display="block";
        document.getElementById("LastNameId").style.border="2px solid red";
        
    }
}

function SUBMIT3(){
    if (document.getElementById("EmailId").value==""){
        document.getElementById("EmailId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText3").style.display="block";
        document.getElementById("EmailId").style.border="2px solid red";
        
    }
}

function SUBMIT4(){
    if (document.getElementById("PasswordId").value==""){
        document.getElementById("PasswordId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
        document.getElementById("WarningText4").style.display="block";
        document.getElementById("PasswordId").style.border="2px solid red";
        
    }
}