const geoLocation = fetch('http://freegeoip.net/json/')
    .then(function(response) {
        return response.json();
    })
    .then((result) => {
        return result;
    })
    .catch( alert );

export default geoLocation;