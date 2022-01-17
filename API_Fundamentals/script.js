let baseURL = 'https://api.spacexdata.com/v3';
let table = document.querySelector('table');
fetch(`${baseURL}/launches`)//fetch will always return a promise
    .then(response => response.json())//is our means of responding to the promise , whether successful or broken
    .then(json => displayLaunches(json))

    function displayLaunches(json) {
        console.log( json);

        json.forEach(launch => {
           let tr = document.createElement('tr');
           let flightNumber = document.createElement('td');
           let missionName = document.createElement('td');
           let rocketName = document.createElement('td');

           flightNumber.innerText = launch.flight_number;
           missionName.innerText = launch.mission_name;
           rocketName.innerText = launch.rocket.rocket_name;

           tr.appendChild(flightNumber);
           tr.appendChild(missionName);
           tr.appendChild(rocketName);
           table.appendChild(tr);
        })
    }