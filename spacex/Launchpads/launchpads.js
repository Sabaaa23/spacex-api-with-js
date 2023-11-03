const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launchpads');

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

const getLaunchpads = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/launchpads");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showLaunchpads = async () => {
  const launchpads = await getLaunchpads();
  cardContainer.innerHTML = "";
  
  launchpads.forEach((launchpad) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img class="launchpadimg" src="${launchpad.images.large[0]}">
      <h2>${launchpad.name}</h2>
      <br>
      <p> ${launchpad.details}</p>
      <button>Read more</button>
      </div>
    `;
  });
};

showLaunchpads();