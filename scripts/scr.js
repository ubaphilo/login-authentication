const firstName= document.querySelector('#firstName')
const lastName= document.querySelector('#lastName')
const otherName= document.querySelector('#otherName')
const email= document.querySelector('#email')
const birthDate= document.querySelector('#birthDate')
const password= document.querySelector('#password')
const confirmPassword= document.querySelector('#confirmPassword')
const btnSumbit= document.querySelector('#btnSumbit')
const msg= document.querySelector('#msg')


const check = (e)=>{
    console.log(firstName.value);
    
    e.preventDefault()
    let alert;
  if((password.value.length)<8  ){
        alert= `your password cannot be less than 8 characters !`
        msg.innerHTML= alert
        msg.style.color='red'
        msg.style.textShadow='1px 0 2px  black'
        msg.style.fontSize='14px'

    }else if(password.value != confirmPassword.value){
        alert= `Password Mis-match !`
        msg.innerHTML= alert
        msg.style.color='red'
        msg.style.fontSize='14px'
    }
    else{
        alert= `Account Succsessfully Created !`
        msg.innerHTML= alert
        msg.style.color='white'
        msg.style.fontSize='14px'

        localStorage.setItem('firstname',JSON.stringify(firstName.value))
        localStorage.setItem('lastName',JSON.stringify(lastName.value))
        localStorage.setItem('email',JSON.stringify(email.value))
        localStorage.setItem('birthDate',JSON.stringify(birthDate.value))
        localStorage.setItem('password',JSON.stringify(password.value))
        localStorage.setItem('firstname',JSON.stringify(firstName.value))

        setTimeout(() => {
            window.open('./pages/login.html')
        }, 1500);
    }
 

}
btnSumbit.addEventListener('click',check)
