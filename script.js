/* =====================================================
   AirAlert SmartCity
   script.js
   Part 1/3
=====================================================*/

// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

// Notification Popup

const notification = document.getElementById("notification");

setTimeout(() => {

    notification.classList.add("show");

}, 1500);

setTimeout(() => {

    notification.classList.remove("show");

}, 5000);

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// Dark Mode

const darkBtn = document.getElementById("darkBtn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    darkBtn.classList.remove("fa-moon");

    darkBtn.classList.add("fa-sun");

}

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        darkBtn.classList.remove("fa-moon");

        darkBtn.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme","light");

        darkBtn.classList.remove("fa-sun");

        darkBtn.classList.add("fa-moon");

    }

});

// Animated Counters

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold:0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
/* =====================================================
   script.js
   Part 2/3
=====================================================*/

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Smooth Scroll

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Citizen Report Form

const reportBtn = document.querySelector(".report-box button");

const locationInput = document.querySelector(".report-box input");

const messageInput = document.querySelector(".report-box textarea");

reportBtn.addEventListener("click", () => {

    const location = locationInput.value.trim();

    const message = messageInput.value.trim();

    if(location === "" || message === ""){

        alert("Please complete all fields.");

        return;

    }

    reportBtn.innerHTML = '<i class="fas fa-check"></i> Report Submitted';

    reportBtn.style.background = "#00c853";

    locationInput.value = "";

    messageInput.value = "";

    setTimeout(()=>{

        reportBtn.innerHTML = "Submit Report";

    },2500);

});

// Dashboard Hover Animation

document.querySelectorAll(".glass").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.35),
        rgba(255,255,255,.15))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="";

    });

});

// Scroll Reveal

ScrollReveal().reveal(".hero-content",{

    distance:"70px",

    duration:1200,

    origin:"bottom",

    reset:false

});

ScrollReveal().reveal(".card",{

    interval:150,

    distance:"40px",

    origin:"bottom"

});

ScrollReveal().reveal(".glass",{

    interval:150,

    distance:"50px",

    origin:"bottom"

});

ScrollReveal().reveal(".prediction-box",{

    distance:"60px",

    origin:"left"

});

ScrollReveal().reveal(".report-box",{

    distance:"60px",

    origin:"right"

});
/* =====================================================
   script.js
   Part 3/3
=====================================================*/

// Live Dashboard Simulation

const dashboardValues = [
    {
        selector: ".glass:nth-child(1) h1",
        values: ["Good", "Moderate", "Healthy"]
    },
    {
        selector: ".glass:nth-child(2) h1",
        values: ["30°C", "31°C", "32°C", "33°C"]
    },
    {
        selector: ".glass:nth-child(3) h1",
        values: ["42 AQI", "48 AQI", "55 AQI", "61 AQI"]
    },
    {
        selector: ".glass:nth-child(4) h1",
        values: ["12 km/h", "14 km/h", "16 km/h", "18 km/h"]
    }
];

setInterval(() => {

    dashboardValues.forEach(item => {

        const element = document.querySelector(item.selector);

        if (!element) return;

        const random = Math.floor(Math.random() * item.values.length);

        element.style.opacity = "0";

        setTimeout(() => {

            element.innerText = item.values[random];

            element.style.opacity = "1";

        }, 300);

    });

}, 5000);


// Progress Animation Restart

const progressFill = document.querySelector(".fill");

if (progressFill) {

    setInterval(() => {

        progressFill.style.animation = "none";

        progressFill.offsetHeight;

        progressFill.style.animation = "progressFill 3s forwards";

    }, 10000);

}


// Fade Elements

const fadeElements = document.querySelectorAll(".fade");

const fadeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

fadeElements.forEach(item => {

    fadeObserver.observe(item);

});


// Keyboard Shortcut

document.addEventListener("keydown", e => {

    if (e.key.toLowerCase() === "d") {

        darkBtn.click();

    }

});


// Page Visibility

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        console.log("AirAlert paused.");

    } else {

        console.log("AirAlert resumed.");

    }

});


// Footer Year

const footerYear = document.querySelector("footer p:last-child");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} AirAlert SmartCity`;

}


// Welcome Console Message

console.log("%cAirAlert SmartCity", "font-size:28px;color:#00c853;font-weight:bold;");
console.log("AI Powered Pollution Monitoring Platform");


// Initialization

window.addEventListener("DOMContentLoaded", () => {

    console.log("Application Loaded Successfully");

});
/* ===========================
   AQI Trend Chart
=========================== */

const chartCanvas = document.getElementById("aqiChart");

if (chartCanvas) {

    const ctx = chartCanvas.getContext("2d");

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{

                label: "AQI",

                data: [
                    45,
                    52,
                    49,
                    61,
                    55,
                    70,
                    63
                ],

                borderColor: "#00c853",

                backgroundColor: "rgba(0,200,83,0.15)",

                fill: true,

                tension: 0.4,

                pointRadius: 5,

                pointBackgroundColor: "#00c853"

            }]

        },

        options: {

        responsive: true,
maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}
/* ==========================================
   Interactive Pollution Map
========================================== */

const mapContainer = document.getElementById("pollutionMap");

if (mapContainer) {

    const map = L.map("pollutionMap");

map.setView([22.5726, 88.3639], 11);

setTimeout(() => {
    map.invalidateSize();
}, 300);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
   setTimeout(() => {
    map.invalidateSize();
}, 500);

    const locations = [

        {
            name: "Central Kolkata",
            lat:22.5726,
            lng:88.3639,
            aqi:72,
            color:"red"
        },

        {
            name:"Salt Lake",
            lat:22.5867,
            lng:88.4172,
            aqi:48,
            color:"orange"
        },

        {
            name:"New Town",
            lat:22.5958,
            lng:88.4737,
            aqi:31,
            color:"green"
        },

        {
            name:"Howrah",
            lat:22.5958,
            lng:88.2636,
            aqi:58,
            color:"orange"
        },

        {
            name:"Dum Dum",
            lat:22.6200,
            lng:88.4200,
            aqi:67,
            color:"red"
        }

    ];

    locations.forEach(place=>{

        L.circleMarker([place.lat,place.lng],{

            radius:10,

            color:place.color,

            fillColor:place.color,

            fillOpacity:0.9

        })

        .addTo(map)

        .bindPopup(

        `<b>${place.name}</b>

        <br>

        AQI : ${place.aqi}`

        );

    });

}
/* ===========================
   AI Assistant
=========================== */

document.addEventListener("DOMContentLoaded", () => {
const aiReplies = {

    pollution: "🚨 Pollution levels are currently moderate. Sensitive groups should reduce prolonged outdoor activity.",

    aqi: "📊 Current AQI is around 55, which falls under the Moderate category.",

    mask: "😷 Wearing a mask is recommended if AQI exceeds 100.",

    pm25: "🌫 PM2.5 levels are currently within safe limits.",

    hotspot: "📍 Current hotspot detected near Central Kolkata based on simulated sensor readings.",

    weather: "🌤 Weather is clear with light wind.",

    default: "🤖 I can answer questions about AQI, pollution, weather and hotspots."

};
const askBtn = document.getElementById("askAI");
const userQuestion = document.getElementById("userQuestion");
const chatArea = document.getElementById("chatArea");

if(!askBtn || !userQuestion || !chatArea){
    console.log("AI Assistant not found");
    return;
}

askBtn.onclick = function(){

    const text = userQuestion.value.trim();

    if(text==="") return;

    chatArea.innerHTML += `
        <div class="user-message">${text}</div>
    `;

    userQuestion.value="";

    let answer="🤖 I can answer questions about AQI, pollution, weather and hotspots.";

  const q = text.toLowerCase();

if (q.includes("aqi")) {
    answer = aiReplies.aqi;
}
else if (q.includes("pollution")) {
    answer = aiReplies.pollution;
}
else if (q.includes("mask")) {
    answer = aiReplies.mask;
}
else if (q.includes("pm") || q.includes("pm2.5")) {
    answer = aiReplies.pm25;
}
else if (
    q.includes("hotspot") ||
    q.includes("hot spot") ||
    q.includes("polluted area") ||
    q.includes("highest pollution")
) {
    answer = aiReplies.hotspot;
}
else if (
    q.includes("weather") ||
    q.includes("temperature") ||
    q.includes("rain")
) {
    answer = aiReplies.weather;
}
else {
    answer = aiReplies.default;
}

    setTimeout(()=>{

        chatArea.innerHTML += `
            <div class="ai-message">${answer}</div>
        `;

        chatArea.scrollTop=chatArea.scrollHeight;

    },700);

};

userQuestion.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        askBtn.click();

    }

});




