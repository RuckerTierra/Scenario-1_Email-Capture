window.onload = function(){
  let emailState = false;
  
  let emailModal = document.getElementsByClassName('email-modal')[0];

  let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];

  let emailInput = document.getElementsByClassName('email-modal__input')[0];

  let emailButton = document.getElementsByClassName('email-modal__button')[0];
  
  let emailFormGroup = document.getElementsByClassName('email-modal__form-group')[0];

  let emailError = document.getElementsByClassName('email-modal__error-message')[0];

  // check if email is valid
  function emailIsValid(email){
    return /\S+@\S+\.\S+/.test(email);
  }

  let closeModal = () => {
    emailModal.classList.remove('email-modal--visible');
  }

  emailButton.addEventListener('click', () => {
    if(emailIsValid(emailInput.value)){
      console.log(emailInput.value);
    } else {
      emailError.classList.add('email-modal__error-message--active');
      emailFormGroup.classList.add('email-modal__form-group--error');
      console.log('This is not a valid email.');
    }
  });
    

  let showModal = () => {
    if (emailState == false){
      emailModal.classList.add('email-modal--visible');
      emailState = true; 
    };
  }

  closeButton.addEventListener('click', () => {
    closeModal();
  });

    document.body.addEventListener('mouseleave', () => {
      showModal();
    });


  console.log(document);
}