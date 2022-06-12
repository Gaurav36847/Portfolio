const button = document.getElementsByClassName('button-88')[0]
const button_about = document.getElementsByClassName('button-42')[0]
const name1 = document.getElementById('name')
const email1 = document.getElementById('email')
const Message = document.getElementById('Message')
const About = document.getElementById('about')




button.addEventListener('click',submit)
button_about.addEventListener('click',about)

function submit(e){
    console.log('printing successfully')
    console.log(name1.value);
    console.log(email1.value);
    console.log(Message.value);
    e.preventDefault();
}


// k'