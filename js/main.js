//function to start the Leaflet map
function createMap() {

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' + ' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.

    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiYWRyaWVsamltZW5leiIsImEiOiJja3ZvNzB6NHBjdXVpMnB0OXk0d3EwOXh5In0.AFicDocMOcimDrELTTDrGg'; //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */

     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';

    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'adrieljimenez/ckvo77tsd0z3f14tcih0yzwbg', token: apitoken, attribution: mbAttr});

//For MabBox Standard Basemaps
var standardBasemap = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});

//create the map*/
var map = L.map('map', {
center: [34.9756, 138.3827],//Coordinated to center the map
zoom: 10, //zoom level
layers: customeBasemap //basemap
});

//create the basemap control layer*/
var baseLayers = {
"Standard": standardBasemap,
"Custom": customeBasemap
};

L.control.layers(baseLayers).addTo(map);

};

//calling the funcation
$(document).ready(createMap);