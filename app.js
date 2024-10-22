const emailsEl = document.querySelector('.emails-space');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function () {

  for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(responses => {
      const response = responses.data;
      //console.log(response);
      const list = document.createElement('li');
      list.textContent = response.response;
      emailsEl.appendChild(list)

    }).catch(err => console.error(err));
  }
});