
 document.querySelector(".btn").addEventListener("click",async(e)=>{
 e.preventDefault()
    console.log(e)
    if (document.querySelector("input[type='text']").value.trim() === "" ){
       alert("enter the required fields")
  }
 let city = document.querySelector("input[type='text']").value
   fetcher(city)
 }
)
   async function fetcher(city) {
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
 const options = {
 	method: 'GET',
 	headers: {
 		'x-rapidapi-key': 'fadda2d6d5mshe180eea80629d42p185a70jsn2bd6aae0b5b6',
 		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    const temp_max = document.getElementById("temp_max");
    const temp_min = document.getElementById("temp_min");
    const humidity = document.getElementById("humidity");
    const speed = document.getElementById("speed");
    const sea_level = document.getElementById("sea_level");
    const grnd_level = document.getElementById("grnd_level");
           
    temp_max.innerHTML = result.main.temp_max;
    temp_min.innerHTML = result.main.temp_min;
    humidity.innerHTML = result.main.humidity;
    speed.innerHTML = result.wind.speed;
    sea_level.innerHTML = result.main.sea_level ?? "N/A";
    grnd_level.innerHTML = result.main.grnd_level ?? "N/A";
} 
catch (error) {
	console.error(error);
}
   }
   // temp_max.innerHTML=result.temp_max
            // temp_min.innerHTML=result.temp_min
            // humidity.innerHTML=result.humidity
            // speed.innerHTML=result.speed
            // sea_level.innerHTML=result.sea_level
            // grnd_level.innerHTML=result.grnd_level


// const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'fadda2d6d5mshe180eea80629d42p185a70jsn2bd6aae0b5b6',
// 		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }




