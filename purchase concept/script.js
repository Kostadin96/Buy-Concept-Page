



function left_modal(){
    for(i=0;i<document.PaymentMethod["RB1"].length;i++){
      if(document.PaymentMethod["RB1"][i].checked){
    window.open(document.PaymentMethod["RB1"][i].value);
    break;
  }
}
  }


function middle_modal(){
    for(i=0;i<document.PaymentMethodMiddle["RB3"].length;i++){
      if(document.PaymentMethodMiddle["RB3"][i].checked){
    window.open(document.PaymentMethodMiddle["RB3"][i].value);
    break;
  }
}
  }



function right_modal(){
    for(i=0;i<document.PaymentMethodRight["RB2"].length;i++){
      if(document.PaymentMethodRight["RB2"][i].checked){
    window.open(document.PaymentMethodRight["RB2"][i].value);
    break;
  }
}
  }

