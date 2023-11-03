const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/landpads');

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

const getLandpads = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/landpads");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showLandpads = async () => {
  const Landpads = await getLandpads();
  cardContainer.innerHTML = "";
  
  Landpads.forEach((landpad) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img src="${landpad.images.large[0]}">
      <h2>${landpad.type},${landpad.full_name}</h2>
      <br>
      <p> ${landpad.details}</p>
      <button>Read more</button>
      </div>
    `;
  });
};

showLandpads();
