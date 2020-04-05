"use strict";

const fuelOptions = {
  '["Diesel", "Unleaded", "Super Unleaded", "PremiumDiesel", "LPG", "EvCharging"]': 'All Available Fuel Types',
  'Unleaded': 'Unleaded',
  '["Super"]': 'Super Unleaded',
  'Diesel': 'Diesel',
  'Premium Diesel': 'Premium Diesel',
  'LPG': 'LPG',
  //'EvCharging': 'EvCharging'

};

const select = document.getElementById("FuelSelect");
let key;
for(key in fuelOptions) {
    select.options[select.options.length] = new Option(fuelOptions[key], key);
}

(function() {
  // creates a new object called xhr
  // which will handle the API call
  const xhr = new XMLHttpRequest();


  const queryBox = document.getElementById("fuelQuery");
  const searchForm = document.getElementById("searchForm");
  const results = document.getElementById("results");
  const select = document.getElementById("FuelSelect");

  // constructs the base for the request url
  const baseURL = "https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&auth_apikey=ad0c114a-3b05-4346-9c41-1a9071f0b950&key_POSTCODE=";



  function gatherData(data) {
    // console.log(data);
    // initialise some variables
    let theData = "";
    let fuelDetails = "";
    const fuelPriceList = select.value;
console.log(fuelPriceList);
    let k;
    let key;
    let distancesort = data.Response.DataItems.FuelStationDetails.FuelStationList;
    //sort by neareast fuel station
    distancesort.sort((a, b) => a.DistanceFromSearchPostcode - b.DistanceFromSearchPostcode)
    for (key in data.Response.DataItems.FuelStationDetails.FuelStationList) {
      let tmp = data.Response.DataItems.FuelStationDetails.FuelStationList[key];
      console.log(tmp);
      let title = `<strong>${tmp.Name} </p>${tmp.DistanceFromSearchPostcode} Miles </strong> <span class="Additional">${tmp.Brand} </p> ${tmp.Street} </p> ${tmp.Suburb} </p> ${tmp.Town} </p> ${tmp.County} </p> ${tmp.Postcode}</span>`;

      console.log(title);

      fuelDetails = "";
      for (k in tmp.FuelPriceList) {
        if (fuelPriceList.includes(tmp.FuelPriceList[k].FuelType)) {
          console.log((tmp.FuelPriceList[k].FuelType));
          fuelDetails += `</p><strong>${tmp.FuelPriceList[k].FuelType} &nbsp ${tmp.FuelPriceList[k].LatestRecordedPrice.InPence} </p> Last Updated ${tmp.FuelPriceList[k].LatestRecordedPrice.TimeRecorded} </strong> `;
          console.log(tmp.FuelPriceList[k].FuelType);
          console.log(tmp.FuelPriceList[k].LatestRecordedPrice.InPence);
          console.log(tmp.FuelPriceList[k].FuelType);
        }
      }
      theData += `<li>${title}<span class="langs">${fuelDetails}</span></li>`;
    }
    console.log(theData);
    results.innerHTML = theData;
  }



  // the API call is triggered once the user submits a query
  searchForm.addEventListener("submit", function(ev) {
    // complete the request url
    let fprice = baseURL + queryBox.value;
    console.log(fprice);
    // open a connection to the requested API url
    xhr.open("GET", fprice, true)
    // send off that request
    xhr.send();
    // if the response was ok, handle the response data using the gatherData function
    xhr.onreadystatechange = function() {
      // console.log(`Current readyState: ${xhr.readyState}`);
      if (xhr.readyState === 4 && xhr.status === 200) {
        // parse the response JSON
        let response = JSON.parse(xhr.responseText);
        console.log(response);

        // deal with the parsed JSON data
        gatherData(response);
      }
    };
    // clear the search box
    queryBox.value = "";
    ev.preventDefault();
  }, false);

}());
