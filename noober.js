async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json') //this is grabbing data from the URL
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  let rides = json // json is an array of rides not an object with a rides attribute in it

  console.log(rides)

  // 🔥 start here: write code to loop through the rides

  
  
  
// //code to loop through the riders

let renderRide = function(ride) {

  return `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerDetails.first} ${passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${passengerDetails.phonenumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupLocation.address}</p>
          <p>${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffLocation.address}</p>
          <p>${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
  
   `

 }


for (let i = 0; i < rides.length; i++) {
  let ride = rides[i] 
  let element = document.querySelector('.rides')



element.insertAdjacentHTML('beforeend', renderProduct(ride))

 }
}

window.addEventListener('DOMContentLoaded', pageLoaded)