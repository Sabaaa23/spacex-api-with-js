const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/capsules');

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

const getCapsules = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/capsules");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showCapsules = async () => {
  const capsules = await getCapsules();
  cardContainer.innerHTML = "";
  
  capsules.forEach((capsule) => {
    const statusClass = capsule.status === 'active' ? 'green-text' : 'red-text';
    cardContainer.innerHTML += `
      <div class="card-body">
      <h2>${capsule.type}, <span style="opacity: 0.7;">${capsule.serial}</span></h2>
      <br>
      <p style="margin-bottom: 10px; opacity: 0.7;"><span>Reused</span> ${capsule.reuse_count} <span>times</span></p>
      <p style="margin-bottom: 10px; opacity: 0.7;">${capsule.water_landings} <span>water</span> <span>landings</span></p>
      <p style="margin-bottom: 10px; opacity: 0.7;">${capsule.land_landings} <span>land</span> <span>landings</span></p> 
      <p class="card-text ${statusClass}" style="opacity: 0.7;"><span>Status:</span> ${capsule.status}</p>
      <br>
      <p style="opacity: 0.7;">${capsule.last_update}</p>
      </div>
    `;
  });
};

showCapsules();
