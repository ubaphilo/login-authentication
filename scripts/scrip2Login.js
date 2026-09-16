const email= document.querySelector('#email')
const password= document.querySelector('#password')
const btnSumbit= document.querySelector('#btnSumbit')
const msg= document.querySelector('#msg')

const login = (e)=>{
e.preventDefault()

let mail = JSON.parse(localStorage.getItem('email'))
let key = JSON.parse(localStorage.getItem('password'))

if(mail != email.value || email.value==""){
msg.innerHTML= `Invalid email Address !`
msg.style.color = 'red'
msg.style.fontSize = '14px'
}
else if( key != password.value || password.value==""){
msg.innerHTML= `Invalid password !`
msg.style.color = 'red'
msg.style.fontSize = '14px'
}
else{
msg.innerHTML= `logged in !`
msg.style.color = 'green'
msg.style.fontSize = '14px'
setTimeout(()=>{
window.open('home.html')
},1500)
}
}

btnSumbit.addEventListener('click',login)