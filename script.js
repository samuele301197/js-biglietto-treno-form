// const price = (0.21)
// //   console .log(price);

// const priceNumber = parseInt(price);

  



// // const numberKm = prompt("Quanti chilometri percorrerai?")
// // const numberKmNumber = parseInt(numberKm)
// //   console .log(numberKmNumber);

// // const userAge = prompt("Quanti anni hai?")
// // console .log(userAge);



// const underDiscount = ((priceNumber * numberKmNumber) * 20) / 100
// // * console .log = (underDiscount)

// const overDiscount = ((priceNumber * numberKmNumber) * 40) / 100
// // * console .log = (overDiscount)

// const firstData = priceNumber * numberKmNumber
// // * console .log = (firstData)




// if (userAge < 19) {
//     console .log(numberKm * price);
// } else if (userAge > 64) {
//     console .log((priceNumber * numberKmNumber) / overDiscount);
// } if (userAge > 18) {
//     console .log(firstData);
// } else if (userAge < 65) {
//     console .log(firstData);
// }










const formElem = document.getElementById("businesscard-form");
console.log(formElem);

// Prelevo tutti gli input
const ageInput = document.getElementById("age"); // elemento del DOM, object
const nameInput = document.getElementById("name"); // elemento del DOM, object
const distanceInput = document.getElementById("distance"); // elemento del DOM, object

console.log(ageInput);

// Prelevo elementi della card da compilare
const headerElem = document.querySelector(".card-header");
const nameElem = document.querySelector("#business-card h3");
const distanceElem = document.querySelector("#business-card p");


formElem.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault(); // ferma il ricaricamento della pagina
  console.log("Ciao sono il form");

  // Prelevo tutti i valori degli input
  const age = ageInput.value;
  const name = nameInput.value;
  const distance = distanceInput.value;


  console.log(age, name, distance);

  // Stampo i valori nella pagina
  nameElem.innerHTML = `${age}} ${name}`;
  distanceElem.innerHTML = distance;

  // Ripulisco i campi
  formElem.reset();
}