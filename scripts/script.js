let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const api_key = "at_R0yCGoPqeTtllJ2OZYQQ1vZmxvDrV";
  
const bttn = document.querySelector('#myButton');
bttn.addEventListener("click", () => {
    const ip = document.querySelector('#myInput').value;
    //var ip = "31.183.149.134";
    //const api_key = "at_R0yCGoPqeTtllJ2OZYQQ1vZmxvDrV";
    $(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: ip, domain: ip},
        success: function(data) {
            console.log("My public IP address is: ", data.ip);
            //$("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
            console.log(data.location.country);
            document.getElementById('ipRes').innerHTML = data.ip;
            document.getElementById('locationRes').innerHTML = (data.location.country + ", " + data.location.city);
            document.getElementById('timezoneRes').innerHTML = "UTC: " + data.location.timezone;
            document.getElementById('ispRes').innerHTML = data.isp;
            //console.log(JSON.stringify(data));
            //let map = L.map('map').setView([data.location.lat, data.location.lng], 13);
            map.setView([data.location.lat, data.location.lng], 13);
            L.marker([data.location.lat, data.location.lng]).addTo(map).bindPopup('This is your ip location').openPopup();
        }
    });
    });

});



/*
navigator.geolocation.getCurrentPosition(position =>{
    console.log(position);
    console.log(position.coords.longitude);
});
*/