const emails = document.querySelector('.emails');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  
  const arrEmails = [];

  for (let i = 0; i < 10; i++) {
    axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      //console.log(response);
      arrEmails.push(response.data);
      
    }).catch(err => console.error(err));
  }

  console.log(arrEmails);

  const list = document.createElement('li');
  list.textContent = arrEmails;
  emails.appendChild(list)
  
});

/* 
      /* for (let i = 0; i < 10; i++) {
        user = response.data;
        console.log(user)
      }  */
      
      //console.log(arrEmails);
      
      /* const [user1] = arrEmails

      const list = document.createElement('li');
      list.textContent = user1;
      emails.appendChild(list); */

      /* for (let i = 0; i < 10; i++) {
        const userName = `user${i}`;
        const userEmail = `${userName}@mante.com`;
        arrEmails.push(userEmail);
      }
      console.log(arrEmails); 

      const paragraph = document.createElement('p');
      paragraph.textContent = arrEmails;
      emails.insertAdjacentHTML('afterbegin', response); */