
//recupero i valori (first-name, last-name & age) dell'input
const firstName = document.querySelector('#firstName').value;
const lastName = document.querySelector('#lastName').value;
const age = document.querySelector('#age').value;

// creo un oggetto person con i dati recuperati
const person = {
  firstName: firstName,
  lastName: lastName,
  age: age
};

//convierto l'oggetto in una string JSON
const personjs = JSON.stringify(person);

//recupero l'elemento form
const formElement = document.querySelector('form');
//aggiungo l'attributo data-person al form. questo attributto viene impostato il valore della stringa JSON 
formElement.setAttribute('data-person', personjs);

 
//stampa l'oggetto person
console.log(formElement.getAttribute('data-person'));
















/* const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const age = Number(document.querySelector('#age').value);

  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };

  const formElement = document.getElementById('myForm');
  const personJson = JSON.stringify(person);
  formElement.setAttribute('data-person', personJson);
  console.log(formElement.getAttribute('data-person')) */