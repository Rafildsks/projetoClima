const resultado = document.getElementById("resultado")

function fetchWeather(event) {
  event.preventDefault()
  const cidade = document.getElementById("cidade").value
  console.log(cidade)

  const APPID = "dd7a6003ef05e32d53dd56769c0ec56b"
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APPID}&units=metric&lang=pt_br`) 
  .then((res)=> res.json()) //tranforma para objeto
  .then((data)=> {
    resultado.innerHTML = `
      <button type="button" class=" cursor-pointer text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">Pesquisar outra  cidade</button>
      <hr class="mt-5 text-white">
          <span class="text-white text-2xl">${data.name}</span>
          <div class="flex justify-between my-3">
            <span class="text-white text-3xl">${data.main.temp}ºC</span>
            <span class="text-white text-3xl">${data.main.humidity}%</span>
          </div>
          <div class="flex flex-col items-center my-3">
            <span class="text-white text-lg">${data.weather[0].description}</span>
            <img src='https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png' alt='icone clima'>
          </div>
          <div class="rounded-xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
            <span>Temperatura máxima</span>
            <span>${data.main.temp_max}ºC</span>
          </div>
          <div class="rounded-xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
            <span>Temperatura mínima</span>
            <span>${data.main.temp_min}ºC</span>
          </div>
          <div class="rounded-xl bg-gray-300 p-3 mb-3 flex flex-col items-center">
            <span>Sensação térmica</span>
            <span>${data.main.feels_like}ºC</span>
          </div>
    `
  })
}

function retornarPadrao() {
  window.location.href = "index.html"
}

