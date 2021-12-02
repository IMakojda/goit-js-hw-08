import throttle from "lodash.throttle";

const form=document.querySelector('.feedback-form');

const inputEmail=form.email;

const inputMessage=form.message;

const keyStorage='feedback-form-state';

const formObject={};

savedMessageLocal()

inputEmail.addEventListener('input',throttle( formData,500));

inputMessage.addEventListener('input',throttle( formData,500));

form.addEventListener('submit',onFormSubmit);

function formData(e){

    formObject[e.target.name]=e.target.value;
    localStorage.setItem(keyStorage,JSON.stringify(formObject))

}

function savedMessageLocal(){
    
    const savedMessage=localStorage.getItem(keyStorage);
        if (savedMessage){
            const formInput=JSON.parse(localStorage.getItem(keyStorage));
     
            for (const key in formInput) {
                form[key].value=formInput[key];
                formObject[key]=formInput[key]
            }
         }   
}

function onFormSubmit(evt) {
        console.log(JSON.parse(localStorage.getItem(keyStorage)));
        evt.preventDefault();
        evt.currentTarget.reset();
        localStorage.removeItem(keyStorage)
}







