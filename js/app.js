window.onload = function(){
  let emailState = false;
  
  //elements
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
  let emailInput = document.getElementsByClassName('email-modal__input')[0];
  let emailButton = document.getElementsByClassName('email-modal__button')[0];
  let emailFormGroup = document.getElementsByClassName('email-modal__form-group')[0];
  let emailError = document.getElementsByClassName('email-modal__error-message')[0];
  let emailThankContainer = document.getElementsByClassName('email-thank')[0];
  let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];

  // check if email is valid
  function emailIsValid(email){
    return /\S+@\S+\.\S+/.test(email);
  }

  let showModal = () => {
    if (emailState == false){
      emailModal.classList.add('email-modal--visible');
      emailState = true; 
    };
  }

  let closeModal = () => {
    emailModal.classList.remove('email-modal--visible');
  }

  // if valid email is not entered
  let addErrors = () => {
    emailError.classList.add('email-modal__error-message--active');
    emailFormGroup.classList.add('email-modal__form-group--error');
    console.log('This is not a valid email.');
  }
  let removeErrors = () => {
    emailError.classList.remove('email-modal__error-message--active');
    emailFormGroup.classList.remove('email-modal__form-group--error');
    console.log('This is not a valid email.');
  }

  // show success message
  let showThankMessage = () => {
    emailThankContainer.classList.add('email-thank__success');
    // automatically closes the modal after 3 seconds
    setTimeout(() => {
      closeModal();
    }, 3000);
  }

  emailInput.addEventListener('click', () => {
    removeErrors();
  })

  emailButton.addEventListener('click', () => {
    if(emailIsValid(emailInput.value)){
      console.log(emailInput.value);
      showThankMessage();
    } else {
      addErrors();
    }
  });

  declineOffer.addEventListener('click', () => {
    closeModal();
  })

  closeButton.addEventListener('click', () => {
    closeModal();
  });

    document.body.addEventListener('mouseleave', () => {
      showModal();
    });


  console.log(document);
}
