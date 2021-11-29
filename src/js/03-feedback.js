import throttle from "lodash.throttle";

const form=document.querySelector('.feedback-form');

const keyStorage='feedback-form-state';

const formObject={};

const refs={
    form:document.querySelector('.feedback-form'),
    textarea:document.querySelector('.feedback-form textarea')
}

refs.form.addEventListener('submit',onFormSubmit);

refs.form.addEventListener('input',throttle( onTextInput, 500));

savedMessageLocal()

function savedMessageLocal(){
   
    const savedMessage=localStorage.getItem(keyStorage);
    if (savedMessage){
          const formInput=JSON.parse(localStorage.getItem(keyStorage));
            form.email.value=formInput.email;
            form.message.value=formInput.message;
    }   
}

function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(keyStorage)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(keyStorage)
    
}

function onTextInput(evt){
    formObject[evt.target.name]=evt.target.value;
    console.log(formObject);
    localStorage.setItem(keyStorage,JSON.stringify(formObject))
}
