window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.darksky.net/forecast/c66b86e968a633d0cc1159a8e6be4315/${lat},${long}`;
      
            
            fetch(proxy+api)
                .then(response => {
                   return response.json();
                })
                .then(data =>{
                    console.log(data);
                })
             
        });
        

    }
});

