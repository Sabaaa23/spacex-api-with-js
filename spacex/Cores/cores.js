// const getData = async () => {
//   try {
//     const response = await fetch('https://api.spacexdata.com/v3/cores');

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// };
// getData();


const cardContainer = document.getElementById('card');

const getCores = async () => {
  try {
    const res = await fetch("https://api.spacexdata.com/v3/cores");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const showCores = async () => {
  const cores = await getCores();
  cardContainer.innerHTML = "";
  
  cores.forEach((core) => {
    const statusClass = core.status === 'active' ? 'green-text' : 'red-text';
    cardContainer.innerHTML += `
      <div class="card-body">
      <h2 style="margin-bottom: 20px;">${core.core_serial}</h2>
      <p style="margin-bottom: 10px; opacity: 0.7;"><span>Reused</span>      ${core.reuse_count}    <span>times</span></p>
      <p style="margin-bottom: 10px; opacity: 0.7;">${core.rtls_landings}    <span>RTLS</span>      <span>landings</span></p>
      <p style="margin-bottom: 10px; opacity: 0.7;">${core.asds_landings}    <span>ASDS</span>      <span>landings</span></p>
      <p style="margin-bottom: 10px; opacity: 0.7;" class="card-text ${statusClass}"><span>Status:</span> ${core.status}</p>
      <br>
      <p style="opacity: 0.7;">${core.details}</p>
      </div>
    `;
  });
};

showCores();




