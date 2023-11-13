const URL = "https://swapi.dev/api/starships/";

let starships = [];

const fetchData = async (url) => {
  // REtrieve the data from the API
  loading();
  try {
    let response = await fetch(url);
    response = await response.json();
    starships = await response.results;
    removeLoading();
  } catch (e) {
    removeLoading();
    console.error(e);
  }
};

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.className = "spaceship";

  const name = document.createElement("h2");
  name.innerText = spaceship.name;
  name.className = "spaceship-med spaceship-margin";

  const costCredits = document.createElement("span");
  const credits = parseInt(spaceship.cost_in_credits).toLocaleString("en-US");
  costCredits.innerText = `${credits !== "NaN" ? credits : "n/a"} Credits`;
  costCredits.className = "spaceship-margin spaceship-bold";

  const modelAndCredits = document.createElement("div");
  modelAndCredits.className = "ship-name-credits";

  modelAndCredits.appendChild(name);
  modelAndCredits.appendChild(costCredits);

  const manufacturer = document.createElement("p");
  manufacturer.innerText = `Manufactured by ${spaceship.manufacturer}`;
  manufacturer.className = "spaceship-margin";

  const atmos_and_cargo = document.createElement("div");
  atmos_and_cargo.className = "spaceship-atmos-credits";

  const max_atm_speed = document.createElement("span");
  max_atm_speed.innerText = `${spaceship.max_atmosphering_speed}`;
  max_atm_speed.className = "spaceship-grid-ctr spaceship-bold";

  const max_atm_speed_text = document.createElement("span");
  max_atm_speed_text.innerText = `Max atmosphering speed`;
  max_atm_speed_text.className = "spaceship-grid-ctr";

  const divider = document.createElement("div");
  const hrDivElem = document.createElement("hr");
  hrDivElem.className = "spaceship-divider";
  divider.appendChild(hrDivElem);

  const cargo_capacity = document.createElement("span");
  cargo_capacity.innerText = `${parseInt(
    spaceship.cargo_capacity
  ).toLocaleString("en-US")}`;
  cargo_capacity.className = "spaceship-grid-ctr spaceship-bold";

  const cargo_capacity_text = document.createElement("span");
  cargo_capacity_text.innerText = `Cargo Capacity`;
  cargo_capacity_text.className = "spaceship-grid-ctr";

  const atmos_speed = document.createElement("div");
  atmos_speed.className = "atmos-cargo";
  atmos_speed.className = "atmos-speed-pl";
  const cargo_credits = document.createElement("div");
  cargo_credits.className = "atmos-cargo";

  atmos_speed.appendChild(max_atm_speed);
  atmos_speed.appendChild(max_atm_speed_text);
  cargo_credits.appendChild(cargo_capacity);
  cargo_credits.appendChild(cargo_capacity_text);

  atmos_and_cargo.appendChild(atmos_speed);
  atmos_and_cargo.appendChild(divider);
  atmos_and_cargo.appendChild(cargo_credits);

  container.appendChild(modelAndCredits);
  container.appendChild(manufacturer);
  container.appendChild(atmos_and_cargo);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  return input.filter(
    (ship) => parseInt(ship.passengers) < 10 && parseInt(ship.crew) > 1
  );
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  const totalCost = input
    .map((starship) => parseInt(starship.cost_in_credits))
    .filter((credits) => !isNaN(credits))
    .reduce((acc, curr) => acc + curr);

  return `The cost of all starships is ${totalCost.toLocaleString(
    "en-US"
  )} credits`;
};

//Loading function during the mount phase of page while the page is fetching results for API
const loading = () => {
  let app = document.getElementById("results");
  const loading = document.createElement("p");
  loading.id = "loading-cls";
  loading.textContent = "Fetching API...";
  loading.style.display = "flex";
  loading.style.justifyContent = "center";
  loading.style.alignContent = "center";
  app.appendChild(loading);
};

//Remove Loading state
const removeLoading = () => {
  let loading = document.getElementById("loading-cls");
  loading.remove();
};
//Fetch function
fetchData(URL);

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
