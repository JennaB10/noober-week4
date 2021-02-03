async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json') //this is grabbing data from the URL
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  let rides = json // json is an array of rides not an object with a rides attribute in it

  console.log(rides)

  // 🔥 start here: write code to loop through the rides

  //code to loop through the riders

let renderTitle = function() {

  return `

      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
  `
}

let renderPurple = function(leg) {

  return `
 
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
            ${leg.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${leg.pickupLocation.address}</p>
          <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${leg.dropoffLocation.address}</p>
          <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
   `

 }

let renderGray = function(leg) {

  return `
 
    <div class="border-4 border-gray-900 p-4 my-4 text-left"> 
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${leg.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${leg.pickupLocation.address}</p>
          <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${leg.dropoffLocation.address}</p>
          <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
   `
 }


for (let i = 0; i < rides.length; i++) {
   let ride = rides[i] 
   let element = document.querySelector('.rides') // let indicates your own variable
 
     // console.log(i)
    //console.log(ride)

            // index.html is equivalent to document. "Document" represents the html page. Query Selector allows you to select pieces of html from a webpage  
            // div, body, title are all html element
            // look for any html element that has a class of CCS. Query selector needs a unique html 
            // use html as template and javascript looks up data
 
  for(let ix=0; ix < ride.length; ix++){
   let leg = ride[ix]

   console.log(ride)
   console.log(ride.length)

   if (ride.length > 1) {
    levelOfService = 'Noober Pool'

    console.log('Noober Pool') 

  } else if (leg.purpleRequested == true){
    levelOfService = "Noober Purple"

    console.log('Noober Purple') 

  } else if (leg.numberOfPassengers > 3) {
    levelOfService = 'Noober XL'

    console.log('Noober XL') 

  } else {
    levelOfService = 'Noober X'
  
  console.log('Noober X') 

  }
        // console.log(leg)
        //console.log(levelOfService)

if (ix == 0) {
  
      element.insertAdjacentHTML('beforeend', renderTitle())}

if (leg.purpleRequested == true) {

    element.insertAdjacentHTML('beforeend', renderPurple(leg))

  }else{

    element.insertAdjacentHTML('beforeend', renderGray(leg))

      }
}

//console log ride
//console log leg 
// things you define in the loop have to be referenced in the loop 

}
 }


window.addEventListener('DOMContentLoaded', pageLoaded)