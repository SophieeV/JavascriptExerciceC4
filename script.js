
function Password(){
    let Input1=document.getElementById('Password1').value;
    let Input2=document.getElementById ('Password2').value

if(Input1===Input2)
{
  document.getElementById("Password1").style.border="3px solid green";
  document.getElementById("Password2").style.border="3px solid green";
}
  alert('mots de passe identiques')

 else{
    document.getElementById("Password1").style.border="3px solid red";
    document.getElementById("Password2").style.border="3px solid red";
}
  alert('mots de passe différents')
}
