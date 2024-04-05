function fetchUser() {
    fetch('https://randomuser.me/api/')
    .then((resp)=>resp.json())
    .then((data)=>{displayUser(data.results[0])});
}

document.querySelector('button').addEventListener('click',fetchUser);
document.addEventListener('DOMContentLoaded',fetchUser)
// fetchUser();

function displayUser(user) {
console.log(user);

const ul = document.querySelector('ul');

//name
const li_name = document.querySelector('.name');
li_name.innerHTML = `<strong>Name</strong> : ${user.name.first} ${user.name.last} `;
ul.appendChild(li_name);

//gender
const li_gender = document.querySelector('.gender');
li_gender.innerHTML = `<strong>Gender</strong> : ${user.gender}`;
ul.appendChild(li_gender);

//age
const li_age = document.querySelector('.age');
li_name.innerHTML = `<strong>Name</strong> : ${user.name.first} ${user.name.last} `;
ul.appendChild(li_age);


//address
const li_address = document.querySelector('.address');
li_address.innerHTML = `<strong>Address</strong> : ${user.location.country}-${user.location.city}  `;
ul.appendChild(li_address);

//phone no
const li_phone = document.querySelector('.phone');
li_phone.innerHTML = `<strong>Phone No.</strong> : ${user.phone}`  ;
ul.appendChild(li_phone);

//E-mail
const li_email = document.querySelector('.email');
li_email.innerHTML = `<strong>Email</strong> : ${user.email}`;
ul.appendChild(li_email);



const img = document.querySelector('.img');
img.innerHTML = `<img src="${user.picture.large}" alt="hello">`


    if (user.gender==='male') {
        document.body.style.backgroundColor = '#AC80A0';
    }
    else{
 document.body.style.backgroundColor = '#89AAE6'
    }
    
}