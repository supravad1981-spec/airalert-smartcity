document.addEventListener("DOMContentLoaded", () => {

const askBtn = document.getElementById("askAI");
const userQuestion = document.getElementById("userQuestion");
const chatArea = document.getElementById("chatArea");

if(!askBtn || !userQuestion || !chatArea) return;

const answers = {

aqi:"📊 Current AQI is 55 (Moderate). Air quality is acceptable for most people.",

pollution:"🌫 Pollution is moderate today. PM2.5 levels are under observation.",

weather:"🌤 Weather is clear with light winds and good visibility.",

mask:"😷 A mask is recommended for children, elderly people and anyone with respiratory issues.",

hotspot:"📍 Pollution hotspot detected near Central Kolkata. AQI is higher than surrounding areas.",

pm25:"🌫 PM2.5 concentration is currently within acceptable limits.",

pm10:"🌁 PM10 levels are stable today.",

help:"🤖 Ask me about AQI, pollution, PM2.5, PM10, weather, hotspot or masks."

};

function getReply(question){

question = question.toLowerCase();

if(question.includes("aqi"))
return answers.aqi;

if(question.includes("pollution"))
return answers.pollution;

if(question.includes("weather"))
return answers.weather;

if(question.includes("mask"))
return answers.mask;

if(question.includes("hotspot"))
return answers.hotspot;

if(question.includes("pm2"))
return answers.pm25;

if(question.includes("pm10"))
return answers.pm10;

return answers.help;

}

function sendMessage(){

const text=userQuestion.value.trim();

if(text==="") return;

chatArea.innerHTML+=`
<div class="user-message">${text}</div>
`;

userQuestion.value="";

chatArea.scrollTop=chatArea.scrollHeight;

setTimeout(()=>{

chatArea.innerHTML+=`
<div class="ai-message">${getReply(text)}</div>
`;

chatArea.scrollTop=chatArea.scrollHeight;

},600);

}

askBtn.addEventListener("click",sendMessage);

userQuestion.addEventListener("keydown",e=>{

if(e.key==="Enter"){

e.preventDefault();

sendMessage();

}

});

});
