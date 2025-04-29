const price = (0.21)
//   console .log(price);

const priceNumber = parseInt(price);

  




const distanceNumber = parseInt(distance)
//   console .log(distanceNumber);






const underDiscount = ((priceNumber * distanceNumber) * 20) / 100
// * console .log = (underDiscount)

const overDiscount = ((priceNumber * distanceNumber) * 40) / 100
// * console .log = (overDiscount)

const firstData = priceNumber * distanceNumber
// * console .log = (firstData)















const formElem = document.getElementById("businesscard-form");
console.log(formElem);

// Prelevo tutti gli input
const ageInput = document.getElementById("age"); // elemento del DOM, object
const nameInput = document.getElementById("name"); // elemento del DOM, object
const distanceInput = document.getElementById("distance"); // elemento del DOM, object

// console.log(ageInput);

// Prelevo elementi della card da compilare
const nameElem = document.querySelector(".card-header h3");
const distanceElem = document.querySelector("#business-card price");


formElem.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault(); // ferma il ricaricamento della pagina
//   console.log("Ciao sono il form");

if ("#age" < 19) {
    console .log(distance * price);
} else if ("#age" > 64) {
    console .log((priceNumber * distanceNumber) / overDiscount);
} if ("#age" > 18) {
    console .log(firstData);
} else if ("#age" < 65) {
    console .log(firstData);

}

  // Prelevo tutti i valori degli input
  const age = ageInput.value;
  const name = nameInput.value;
  const distance = distanceInput.value;




  console.log(age, name, distance);

  // Stampo i valori nella pagina
  nameElem.innerHTML = name;
  distanceElem.innerHTML = distance;

  // Ripulisco i campi
  formElem.reset();
}