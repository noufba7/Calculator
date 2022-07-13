var tabcal = "";
const u1=document.getElementById("u1");
const u2=document.getElementById("u2");

function calcad(value){
  tabcal += value;
  u1.value = tabcal;
}

function removech(){
  tabcal = tabcal.substring(0, tabcal.length -1);
  u1.value = tabcal;
}

function excm(){
  if ( tabcal.length == 0 || tabcal == ""){
    alert("needs a input");
    return;
  }

  try {
ans = eval(tabcal);
u2.value = ans;
  }
  
   catch (err){
     alert("invalid input");
   }

}

function reset(){
  u1.value = "";
  u1.value = "";
tabcal = "";
}