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





// document.getElementById("increment-btn").onclick(document.getElementById("count-el").innerTex = count += 1);