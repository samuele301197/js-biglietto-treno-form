const price = (0.21)

// const priceNumber = parseInt(price);

  
// const distanceNumber = parseInt(distance)


const underDiscount = ((price * distance) * 20) / 100


const overDiscount = ((price * distance) * 40) / 100


const firstData = price * distance



const formElem = document.getElementById("businesscard-form");
console.log(formElem);



const nameElem = document.querySelector(".card-header h3");
const distanceElem = document.querySelector("#business-card price");


formElem.addEventListener("submit", handleForm);


function handleForm(event) {
  event.preventDefault(); 

const ageInput = document.getElementById("age").value; 
const nameInput = document.getElementById("name").value; 
const distanceInput = document.getElementById("distance").value; 

if (ageInput < 19) {
    console .log(distanceInput * price);
} else if (ageInput > 64) {
    console .log((price * distance) / overDiscount);
} if (ageInput > 18) {
    console .log(firstData);
} else if (ageInput < 65) {
    console .log(firstData);
}




  


  console.log(age, name, distance);

  // Stampo i valori nella pagina
  nameElem.innerHTML = name;
  distanceElem.innerHTML = distance;

  // Ripulisco i campi
  formElem.reset();
}