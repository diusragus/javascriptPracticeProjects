const sendBtn = document.getElementById('send');
const refreshBtn = document.getElementById('refresh');
const form = document.getElementsByTagName('form')[0];

//onchange form
form.addEventListener('change', function(e){
    e.preventDefault();
    let validEmail = emailValidation();
    let validSubject = subjectValidation();
    let validMessage = messageValidation();
        
    if ( validEmail && validSubject && validMessage ) {
        sendBtn.removeAttribute('disabled');
        sendBtn.setAttribute('style','background-color:coral')
    } else {
        sendBtn.setAttribute('disabled', 'disabled');
        sendBtn.setAttribute('style','background-color:rgb(252, 200, 181)')
    }
})

//onclick send button
sendBtn.addEventListener('click', function(e){    
    e.preventDefault();
    const formCard = document.getElementById('card');
    const spinner = document.createElement('div');
    spinner.setAttribute('class','loader');
    formCard.appendChild(spinner);
        
    setTimeout(function(){
        spinner.remove();    
    }, 1500);

    setTimeout(function(){
        const message = document.createElement('h4');
        message.innerHTML='El mensaje se ha enviado correctamente';
        formCard.appendChild(message);
    }, 1500);

    setTimeout(function(){
        form.submit(e);
    }, 4000);
})    

//email validation function
const emailValidation = function(){
    let input = document.getElementById('email-input');
    let data = input.value.includes('@');
        
    if (data) {
        input.setAttribute('class','email-input');        
    } else {
        input.setAttribute('class','email-input-error');
        input.value='Please insert a valid e-mail';
    }
    return data;
};

//subject validation function
const subjectValidation = function(){    
    let input = document.getElementById('subject-input');
    let data = input.value.length;
        
    if (data && input.value!=='Please insert a subject') {
        input.setAttribute('class','subject-input');        
    } else {
        input.setAttribute('class','subject-input-error');
        input.value='Please insert a subject';
    }
    return data;
};

//message validation function
const messageValidation = function() {
    let input = document.getElementById('message-input');
    let data = input.value.length;
        
    if (data && input.value!=='Please insert a messages') {
        input.setAttribute('class','message-input');        
    } else {
        input.setAttribute('class','message-input-error');
        input.value='Please insert a message';
    }
    return data;
};