const toggleBtn = document.getElementById("darkModeToggle");

// Check saved theme
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggleBtn.textContent = "☀️";
localStorage.setItem("theme","dark");
}
else{
toggleBtn.textContent = "🌙";
localStorage.setItem("theme","light");
}

});

const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = form.name.value;
let date = form.date.value;
let time = form.time.value;

alert(
"Reservation Confirmed!\n\n" +
"Name: " + name +
"\nDate: " + date +
"\nTime: " + time
);

form.reset();

});



let counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let target = +counter.getAttribute("data-target");

let count = 0;

let update = () => {

let increment = target / 100;

count += increment;

if(count < target){
counter.innerText = Math.floor(count);
requestAnimationFrame(update);
}else{
counter.innerText = target;
}

};

update();

});


