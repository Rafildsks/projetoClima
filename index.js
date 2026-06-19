const resultado = document.getElementById().value

function fetchWeather(event) {
  event.preventDefault();
  const cidade = document.getElementById("cidade").value;
  console.log(cidade);

  const APPID = "dd7a6003ef05e32d53dd56769c0ec56b";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APPID}&units=metric&lang=pt_br`)
    .then((res)=> res.json)  // transforma para objeto
    .then((data)=> console.log(data));
    resultado.innerHTML = ´
    <hr class="mt-3 text-white">
    <span class = "text-white text-2xl">$[data.name]</span>
    <div class = "">
        <span class="text-white text-3xl">$[data.main.temp]</span>
        <span class="text-white text-3xl">$[data.main.humudity]</span>
    </div>
    <div class = "flex flex-col items-center my-3">
        <span>$[data.weather.description]</span>
        <img src="https://openweathermap.org/payload/api/media/file/">$[data.weather.icon]
    </div>
    <div class="rounded-2xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
        <span>Temperatura máxima</span>
        <span>$[data.main.temp_max]ºC</span>
    </div>
    <div class="rounded-2xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
        <span>Temperatura mínima</span>
        <span>$[data.main.temp_min]ºC</span>
    </div>
    <div class="rounded-2xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
        <span>Sensação térmica</span>
        <span>$[data.main.feels_like]ºC</span>
    </div>´
}
