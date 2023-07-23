var cl = console.log;


let obj={
    email:"Bhupendrajanjal4141@gmail.com",
    Passworld : "123456789!",
    contact : '7020894752',
    EnterCaption :'EMDLEH',
    
}

const emailcontrol = document.getElementById('email')
const Passworldcontrol = document.getElementById('passworld')
const ContactNUmber = document.getElementById('ContactNUmber')
// const reset = document.getElementById('reset')
const loginForm = document.getElementById('loginForm')
const onLoginhandler = (eve)=>{
    eve.preventDefault()///[]apan login kelya nantr form submitted lihun yet 
    cl('Form submitted')
    const emailval = emailcontrol.value;
    const passval = Passworldcontrol.value;
    const contact = ContactNUmber.value;
    if(emailval=== obj.email && passval === obj.Passworld && contact=== obj.contact){
        alert('login Sucessfully')
    }
    else{
        alert('Inavalid userName and passworld ');
    }
    
    eve.target.reset()
    

} 

const onkeydown = (e)=>{
    e.target.style.color = 'white';
    e.target.style.border='2px solid red';
    e.target.style.backgroundColor='orange'
    
}
const onmouseleave = (e)=>{
    e.preventDefault()
}




loginForm.addEventListener('leave',onmouseleave)
loginForm.addEventListener('keydown',onkeydown)
loginForm.addEventListener('submit',onLoginhandler)

///API CALL 




