// moi si gluposti
// var button = document.getElementById("increment-btn");

// button.addEventListener("click", function() {
//     button.classList.add("active");
// });


// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the "count-el" in the HTML to reflect the new count

let countEl = document.getElementById("count-el"); // tva v skobite e argument, tuka passvame argument na funkciqta (v sluchaq e metod), a samata promenliva ti idva obekt, polzvash metod , na koito zadawash argument)

console.log(countEl);


let count = 0;


function increment() {
    count += 1;
    console.log("button was clicked and the count is: " + count)
    countEl.innerText = count;
}


function decrement() {
    count -= 1;
    console.log("button was clicked and the count is: " + count)
    countEl.innerText = count;
}


// pravish promenliva (obekt), koito polzva metod, koito metod se otnasq do HTML documenta vzima mu elementa po ID i go suhranqwa, weche s toq obekt (promenlivata) mojesh da go manipulirash vuv funkciq ili drugo
let dogsCounter = document.getElementById("dogs-counter");

// vij koi element si vzel
console.log(dogsCounter);

// nashiq counter s purvonachalna stoinost 0
let incDogCount = 0;

// funkciqta, koqto prilagame na butona increment, kato go natisnem dobavq 1 kum broikata kucheta
function incDoggo() {
    incDogCount += 1;
    console.log("button was clicked, the dog count now is: " + incDogCount);
    dogsCounter.innerText = incDogCount;
}


function decDoggo() {
    incDogCount -= 1;
    console.log("button was clicked, the dog count now is: " + incDogCount);
    dogsCounter.innerText = incDogCount;
}

// 


// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count);
}











