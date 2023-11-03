const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/crew');

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

const getCrew = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/crew");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showCrew = async () => {
  const crew = await getCrew();
  cardContainer.innerHTML = "";
  
  crew.forEach((crew) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <img src="${crew.image}" />
      <h3>${crew.name}</h3>
      </div>
    `;
  });
};

showCrew();
