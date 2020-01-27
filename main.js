document.addEventListener("DOMContentLoaded", function() {
  console.log("working fine");

  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    wrapAround: true,
    adaptiveHeight:false,
    cellAlign: 'left',
    contain: true
  });
  
  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity( '.main-carousel', {
    // options
  });
});



const submitButton = document.getElementsByClassName("submit-button")[0];

submitButton.addEventListener("click", function(){
  const emailTextArea = document.getElementsByClassName("input-textbox")[0];
  const result = validateEmail(emailTextArea.value);
    if (!result){
      alert("You have entered an invalid email address!");
    }
    else{
      alert("Thank you for subscribing!");
    }

});




/* source: https://tylermcginnis.com/validate-email-address-javascript/*/ 
function validateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }

    return (false)
}
