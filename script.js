// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const input = document.querySelector('#cep');
const button = document.querySelector('.buscar');
button.addEventListener('click', valorInput);

function valorInput(event) {
  event.preventDefault();
  const endereco = document.querySelector('.endereco');
  let CEP = input.value;

  fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    .then((resolucao) => {
      return resolucao.json();
    })
    .then((CEP) => {
      endereco.innerText = CEP.logradouro + ' - ' + CEP.bairro;
    });
}
