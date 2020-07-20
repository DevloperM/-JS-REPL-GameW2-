/*
    1. Ask which region
    2. Ask which country
    3. Ask Budget
*/

const readlinesync = require("readline-sync");

let region = "";
let country = "";
let budget = 0;
let goAhead = true;

console.log("Welcome to Moon's Traveling Advisor");

while (goAhead) {
  console.log("Where do you want to go?");
  region = readlinesync.question("Options: Europe or Asia? ");

  switch (region.toLowerCase()) {
    case "europe":
      console.log(`${region} is a good chioce`);
      askWhichCountry(region, country, budget);
      goAhead = false;
      break;
    case "asia":
      console.log(`${region} is a good chioce`);
      askWhichCountry(region, country, budget);
      goAhead = false;
      break;
    default:
      console.log("Sorry I don't understand. Please try again.\n");
      goAhead = true;
      break;
  }
}

//todo: display only at the end
console.log(
  `Great. Let me reseatch on ${country} in ${region} within your budget of ${budget}`
);

function askWhichCountry(region, country, budget) {
  //let country = "";
  let goAhead = true;

  while (goAhead) {
    console.log("Which country?");
    if (region == "europe") {
      country = readlinesync.question("Options: France or UK? ");
    } else {
      country = readlinesync.question("Options: Japan or Thailand? ");
    }

    switch (country.toLowerCase()) {
      case "france":
        console.log(`${country} is a great city`);

        goAhead = false;
        break;
      case "uk":
        console.log(`${country} is a great city`);

        goAhead = false;
        break;
      case "japan":
        console.log(`${country} is a great city`);

        goAhead = false;
        break;
      case "thailand":
        console.log(`${country} is a great city`);

        goAhead = false;
        break;
      default:
        console.log("Sorry I don't understand. Please try again.\n");
        goAhead = true;
        break;
    }
  }
}
