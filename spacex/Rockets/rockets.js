const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');

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

const getRockets = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/rockets");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showRockets = async () => {
  const rockets = await getRockets();
  cardContainer.innerHTML = "";
  
  rockets.forEach((rocket) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img src="${rocket.flickr_images[0]}">
      <h2>${rocket.name}</h2>
      <br>
      <p> ${rocket.description}</p>
      <button>Learn more</button>
      </div>
    `;
  });
};

showRockets();