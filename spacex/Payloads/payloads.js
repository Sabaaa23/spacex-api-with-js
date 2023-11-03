const getData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/payloads');

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

const getPayloads = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/payloads");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showPayloads = async () => {
  const payloads = await getPayloads();
  cardContainer.innerHTML = "";
  
  payloads.forEach((payload) => {
    cardContainer.innerHTML += `
      <div class="card-body">
      <h2 style="margin-bottom: 10px;">${payload.name}, ${payload.type}</h2>
      <p style="margin-bottom: 10px;"><span>Orbit:</span>    ${payload.orbit}
      <p style="margin-bottom: 10px;"><span>Reference System:</span>    ${payload.reference_system}
      <h2 style="margin-bottom: 10px;">Customers:</h2>
      <p style="margin-bottom: 10px;">${payload.customers}</p>
      <h2 style="margin-bottom: 10px;">Manufacturers:</h2>
      <p style="margin-bottom: 10px;">${payload.manufacturers}</p>
      <h2 style="margin-bottom: 10px;">Countries:</h2>
      <p>${payload.nationalities}</p>
      </div>
    `;
  });
};

showPayloads();