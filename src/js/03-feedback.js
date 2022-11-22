import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');

const LOCAL_DATA_NAME = "feedback-form-state";

const currentLocal = JSON.parse(localStorage.getItem(LOCAL_DATA_NAME));

const localPrint = {};

const onFormInput = event => {
    localPrint[event.target.name] = event.target.value;
    
    localStorage.setItem(LOCAL_DATA_NAME, JSON.stringify(localPrint));
 
};
form.addEventListener('input', throttle(onFormInput, 500));
 
const fillForm = () => {
    currentLocal&&currentLocal.email ? form.email.value = currentLocal.email : null;
    currentLocal&&currentLocal.message ? form.message.value = currentLocal.message:null;
     
}
fillForm();

const onSubmitClick = event => {
    event.preventDefault();
    console.log({'email': form.email.value,'message':form.message.value}); 
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_DATA_NAME);
 }
form.addEventListener('submit', onSubmitClick);