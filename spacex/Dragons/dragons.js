const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');

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

const getDragons = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/dragons");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showDragons = async () => {
  const Dragons = await getDragons();
  cardContainer.innerHTML = "";
  
  Dragons.forEach((dragon) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img src="${dragon.flickr_images[2]}">
      <h2>${dragon.name}</h2>
      <br>
      <p class="dragon-info"> ${dragon.description}</p>
      <br>
      <br>
      <button>Read more</button>
      </div>
    `;
  });
};

showDragons();
