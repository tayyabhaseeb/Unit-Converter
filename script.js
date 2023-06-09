// Variables declared

let inputData = document.getElementById("inputData");
let btn = document.getElementById("btn");
let container21 = document.getElementById("container-2-1");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

// Meter to Feet

function meterToFeet() {
  let inputDataValue = inputData.value;

  let oneMeterToFeet = 3.281;

  let Feet = inputDataValue * oneMeterToFeet;
  let meter = inputDataValue / oneMeterToFeet;

  let roundedFeet = Feet.toFixed(3);
  let roundedMeter = meter.toFixed(3);

  para1.innerHTML = ` 
      <p class = 'para'>${inputDataValue} meters = ${roundedFeet} feets | ${inputDataValue} feet = ${roundedMeter} meters</p>
    
      `;
}

// Liters to Gallons

function litersToGallons() {
  let inputDataValue = inputData.value;

  let oneLiterToGallon = 0.264;

  let gallon = inputDataValue * oneLiterToGallon;
  let liter = inputDataValue / oneLiterToGallon;

  let roundedGallon = gallon.toFixed(3);
  let roundedLiter = liter.toFixed(3);

  para2.innerHTML = ` 
        <p class = 'para'>${inputDataValue} Liters = ${roundedGallon} gallons | ${inputDataValue} gallons = ${roundedLiter} Liters</p>
      
        `;
}

// Kilograms to Pounds

function KilogramToPound() {
  let inputDataValue = inputData.value;

  let oneKiloToPound = 2.204;

  let pound = inputDataValue * oneKiloToPound;
  let kilo = inputDataValue / oneKiloToPound;

  let roundedPound = pound.toFixed(3);
  let roundedKilo = kilo.toFixed(3);

  para3.innerHTML = ` 
          <p class = 'para'>${inputDataValue} Kilograms = ${roundedPound} pounds | ${inputDataValue} Pounds = ${roundedKilo} Kilograms</p>
        
          `;
}

// Event Listener

btn.addEventListener("click", function () {
  meterToFeet();
  litersToGallons();
  KilogramToPound();
});
