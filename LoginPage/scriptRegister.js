const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

const form = document.getElementById('form')
const username = document.getElementById('name')
const emailreg = document.getElementById('emailreg')
const passwordreg = document.getElementById('passwordreg')
const emaillogin = document.getElementById('emaillogin')
const passwordlogin = document.getElementById('passwordlogin')

let res = 1;

formreg.addEventListener('submit', e =>{
    e.preventDefault();
    res = 1;

    validateInputsRegister();
    console.log(res);
    if(res === 1){
        alert("Register success")
        window.location.href = "../HomePage/indexHome.html";
    }
});

formlogin.addEventListener('submit', e =>{
    e.preventDefault();
    res = 1;

    validateInputsLogin();
    console.log(res);
    if(res === 1){
        alert("Login success")
        window.location.href = "../HomePage/indexHome.html";
    }
});

function linktoHome(){
    window.location.replace("../HomePage/indexHome2.html");
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    res = 0;
}

const setSuccess= element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputsRegister= () => {
    const nameVal = username.value.trim();
    const emailVal = emailreg.value.trim();
    const passwordVal = passwordreg.value.trim();

    if(nameVal === "")
    {
        setError(username, 'Name can not be empty');
    }
    else{
        setSuccess(username);
    }

    if(emailVal === "")
    {
        setError(emailreg, 'Email can not be empty');
    }
    else if(!emailVal.includes("@gmail.com"))
    {
        setError(emailreg, 'Email should be gmail.com');
    }
    else{
        setSuccess(emailreg);
    }

    if(passwordVal === "")
    {
        setError(passwordreg, 'Password can not be empty');
    }
    else if(passwordVal.length < 8)
    {
        setError(passwordreg, 'Password should be more than 7 character');
    }
    else{
        setSuccess(passwordreg);
    }
}

const validateInputsLogin= () => {
    const emailVal1 = emaillogin.value.trim();
    const passwordVal1 = passwordlogin.value.trim();

    if(emailVal1 === "")
    {
        setError(emaillogin, 'Email can not be empty');
    }
    else if(!emailVal1.includes("@gmail.com"))
    {
        setError(emaillogin, 'Email should be gmail.com');
    }
    else{
        setSuccess(emaillogin);
    }

    if(passwordVal1 === "")
    {
        setError(passwordlogin, 'Password can not be empty');
    }
    else if(passwordVal1.length < 8)
    {
        setError(passwordlogin, 'Password should be more than 7 character');
    }
    else{
        setSuccess(passwordlogin);
    }
}



