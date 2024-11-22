// Taking a location array for predefined values
const locations = [
    {
        id: 0,
        name: "Alberta",
        temp: "-20&deg;C",
        weather_cond: "Chilling Cold",
        wind_speed: "20km/h",
        logo_id:"fa-icicles"
    },
    {
        id: 1,
        name: "Winnipeg",
        temp: "-8&deg;C",
        weather_cond: "Cold",
        wind_speed: "20km/h",
        logo_id:"fa-snowflake"
    },
    {
        id: 2,
        name: "Torronto",
        temp: "-2&deg;C",
        weather_cond: "Slightly Cold",
        wind_speed: "5km/h",
        logo_id:"fa-temperature-low"
    }
];

// Showing the cities name in dropdown
locations.forEach(each_location => {
    let city_info = `<option value="${each_location.id}">${each_location.name}</option>`;
    document.getElementById("city_selection").innerHTML += city_info;
});

function getWeather() {

    // removing everything inside div with id weather_info
    document.getElementById("weather_info").innerHTML = "";

    var selected_city = document.getElementById("city_selection").value;

    // counter to check if user manipulated the data
    is_real_city = 0;

    locations.forEach(each_location => {
        if (selected_city == each_location.id) {
            
            // city name
            let gen_div = `<h3>${each_location.name}</h3>`;
            document.getElementById("weather_info").innerHTML += gen_div;

            // Time right now
            let today_date = new Date();
            let hours = today_date.getHours();
            let minutes = today_date.getMinutes();
            gen_div = `<p>Current Time: ${hours}:${minutes}</p>`;
            document.getElementById("weather_info").innerHTML += gen_div;
            
            // Weather Icon
            gen_div = `<i class="fas ${each_location.logo_id}"></i>`;
            document.getElementById("weather_info").innerHTML += gen_div;
            
            // Temperature
            gen_div = `<p>${each_location.temp}</p>`;
            document.getElementById("weather_info").innerHTML += gen_div;
            
            // Weather Conditions
            gen_div = `<p>${each_location.weather_cond}</p>`;
            document.getElementById("weather_info").innerHTML += gen_div;
            
            // Wind Speed
            gen_div = `<p>${each_location.wind_speed}</p>`;
            document.getElementById("weather_info").innerHTML += gen_div;

            is_real_city = 1;
            
            // Customizing the div with weather_info
            document.getElementById("weather_info").style.display="block";
            document.getElementById("weather_info").style.backgroundColor="#e4d5f2";
            document.getElementById("weather_info").style.borderRadius="50px";
            document.getElementById("weather_info").style.padding="20px 0";
            document.getElementById("weather_info").style.marginTop="50px";

        }
    });
    
    if(is_real_city == 0){
        document.getElementById("weather_info").removeAttribute("style");
        document.getElementById("weather_info").innerHTML = "";

        setTimeout(function(){
            alert("Stop manuplating the website");
            
        })

        
    }

}

