import { userProfileTemplate } from '../templates/index';

const userHTML = document.querySelector('.user');

const getUserData = () => {
  fetch('https://randomuser.me/api')
  .then((response)=> response.json())
  .then((user)=>{
    const templateString = userProfileTemplate(user.results[0]);
    userHTML.innerHTML = templateString;
  })
  .catch(()=> console.log('There is an error'))
};

export default getUserData;
