const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');

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

const getLaunches = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/launches");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showLaunches = async () => {
  const Landpads = await getLaunches();
  cardContainer.innerHTML = "";
  
  Landpads.forEach((launch) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img class="launchimg" src="${launch.links.patch.small}">
      <h2>${launch.name}</h2>
      <br>
      <p> ${launch.details}</p>
      </div>
    `;
  });
};

showLaunches();