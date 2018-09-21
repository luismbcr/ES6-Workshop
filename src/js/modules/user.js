
const getUserData = () => {
  fetch('https://randomuser.me/api')
  .then((response)=> response.json())
  .then((user)=> user.results[0])
  .catch(()=> console.log('There is an error'))
};


export default getUserData;
