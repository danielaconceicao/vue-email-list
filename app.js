const emails = document.querySelector('.emails');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      console.log(response);

      const user = response.data.response;
      const arrNome = [];

      for (let i = 0; i < 10; i++) {
        console.log(user)
      }



      /* for (let i = 0; i < 10; i++) {
        const userName = `user${i}`;
        const userEmail = `${userName}@mante.com`;
        arrNome.push(userEmail);
      }
      console.log(arrNome); 

      const paragraph = document.createElement('p');
      paragraph.textContent = arrNome;
      emails.insertAdjacentHTML('afterbegin', response); */

    }).catch(err => console.error(err));


});


