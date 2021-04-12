let password = document.getElementById('password');
let password2 = document.getElementById('password2')

function verificationPassword(){
if (password.value != password2.value){
  document.getElementById('password').style.border = "3px solid red";
  document.getElementById('password2').style.border = "3px solid red";
  alert('veillez vérifier votre saisie')
} else {
  document.getElementById('password').style.border ="3px solid green";
  document.getElementById('password2').style.border ="3px solid green";
  alert('mots de passe identiques')
}
}
