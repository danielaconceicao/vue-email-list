const emails = document.querySelector('.emails');
const btn = document.querySelector('.btn');


btn.addEventListener('click', function(){
    axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      console.log(response);

      const emails = response.data.response;
      

    }).catch(err => console.error(err))


})
