const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/ships');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
getData();


const cardContainer = document.getElementById('card');

const getShips = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/ships");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showShips = async () => {
  const ships = await getShips();
  cardContainer.innerHTML = "";
  
  ships.forEach((ship) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img src="${ship.image}" alt="${ship.name} Image" />
      <h2>${ship.name}</h2>
      <br>
      <p>Home port: ${ship.home_port}</p>
      <button>Learn more</button>
      </div>
    `;
  });
};

showShips();