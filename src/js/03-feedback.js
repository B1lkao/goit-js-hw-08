import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textareaEL = document.querySelector('textarea');
const submitEL = document.querySelector('.feedback-form');
const TEXTlOCALSTORAGE = "feedback-form-state"

inputEl.addEventListener('input', throttle(textInput, 500));
textareaEL.addEventListener('input', throttle(textInput, 500));
submitEL.addEventListener('submit', onSubmitClick);

    let textForm = {};   

function textInput(e) {
    textForm[e.target.name] = e.target.value;
    localStorage.setItem(TEXTlOCALSTORAGE, JSON.stringify(textForm));
};

   try {
       const textLocalStorage = localStorage.getItem(TEXTlOCALSTORAGE);
       if (textLocalStorage){
        textForm = JSON.parse(textLocalStorage);
        inputEl.value = textForm[inputEl.name];
        textareaEL.value = textForm[textareaEL.name];
    }
        }
        catch (error) { 
            console.log(error);
        }

function onSubmitClick(e) {
    e.preventDefault();
    console.log(textForm);
    e.currentTarget.reset();
    localStorage.clear();
};