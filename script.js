var counter = 1;
function add_more() {
    counter++
    var newDiv =`<div id="row${counter}" class="border-solid border-2 border-slate-100 rounded-lg p-8 space-y-4">
    <p class="font-semibold">Device number ${counter}</p>
    <div class="flex">

      <div class="w-8/12 space-y-4">
        <div class="space-y-1 flex flex-col justify-center items-center">
          <p>Device's Name</p>
          <input class="shadow appearance-none border rounded-full w-3/4 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name${counter}" type="text">
        </div>
        <div class="space-y-1 flex flex-col justify-center items-center">
          <p>Device's Wattage</p>
          <input class="shadow appearance-none border rounded-full w-3/4 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="wattage${counter}" type="text">
        </div>
        <div class="space-y-1 flex flex-col justify-center items-center">
          <p>Hours of use per day</p>
          <input class="shadow appearance-none border rounded-full w-3/4 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="H_per_day${counter}" type="text">
        </div>
        <div class="space-y-1 flex flex-col justify-center items-center">
          <p>Number of Devices</p>
          <input class="shadow appearance-none border rounded-full w-3/4 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="num_of_device${counter}" type="text">
        </div>
        <div class="space-y-1 flex">
          <p class="flex justify-center items-center text-sm">Desired price (per month) </p>
          <input class="ml-2 shadow appearance-none border rounded-full w-1/2 h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ds${counter}" type="text">
        </div>
        <div class="space-y-1 flex flex-col">
          <p>Recommended hours of use per day : </p>
          <p id="rechour${counter}"></p>
        </div>
      </div>

      <div class="space-y-2">
        <div class="flex justify-center items-center">
          <div class="w-28 h-28 rounded-full border-8 inline-flex items-center justify-center border-blue-500 text-gray-700"> 
            <div>
              <p class="flex items-center justify-center text-xs">cost per day</p>
              <p id="circleday${counter}" class="flex items-center justify-center text-sm"></p>
            </div>
          </div> 
        </div>

        <div class="flex justify-center items-center">
          <div class="w-28 h-28 rounded-full border-8 inline-flex items-center justify-center border-blue-600 text-gray-700"> 
            <div>
              <p class="flex items-center justify-center text-xs">cost per month</p>
              <p id="circlemonth${counter}" class="flex items-center justify-center text-sm"></p>
            </div>
          </div> 
        </div>

        <div class="flex justify-center items-center">
          <div class="w-28 h-28 rounded-full border-8 inline-flex items-center justify-center border-blue-700 text-gray-700"> 
            <div>
              <p class="flex items-center justify-center text-xs">cost per year</p>
              <p id="circleyear${counter}" class="flex items-center justify-center text-sm"></p>
            </div>
          </div> 
        </div>

      </div>

    </div>
  </div>`

  var secDiv = `<div class="flex" id="secrow${counter}">
                  <p>Device ${counter} recommended hours of use per day : </p>
                  <p id="reversebill${counter}" class="ml-2"></p>
                </div>`

    var form = document.getElementById('device_form')
    form.insertAdjacentHTML('beforeend', newDiv);
    var form = document.getElementById('device_form2')
    form.insertAdjacentHTML('beforeend', secDiv);
}

function delete_row() {
    if (counter > 1){
    document.getElementById('row'+counter).remove()
    document.getElementById('secrow'+counter).remove()
    counter -= 1
    }
}