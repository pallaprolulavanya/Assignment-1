let temperature = 25;
function updateTemperature(newTemprature){
    temperature = newTemprature;
    console.log(temperature)
}

function simulateTemperatureUpdate() {
    const randomTemperature = Math.floor(Math.random() * 10) + 20;
    updateTemperature(randomTemperature);
}
setInterval(simulateTemperatureUpdate, 3000); 
console.log(temperature);