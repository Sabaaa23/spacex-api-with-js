const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/starlink');

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

const getStarlink = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/starlink");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showStarlink = async () => {
  const starlinks = await getStarlink();
  cardContainer.innerHTML = "";
  
  starlinks.forEach((starlink) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <h2>${starlink.type}</h2>
      <br>
      <p> ${starlink.details}</p>
      </div>
    `;
  });
};

showStarlink();