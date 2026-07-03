function airAlertAI(){

const input=document.getElementById("userQuestion");
const chat=document.getElementById("chatArea");

const q=input.value.toLowerCase().trim();

if(q==="") return;

chat.innerHTML+=`
<div class="user-message">${input.value}</div>
`;

let ans="🤖 I can answer questions about AQI, pollution, weather, PM2.5 and hotspots.";

if(q.includes("aqi"))
ans="📊 Current AQI is 55 (Moderate).";

else if(q.includes("weather"))
ans="🌤 Weather is clear today.";

else if(q.includes("pollution"))
ans="🌫 Pollution is moderate today.";

else if(q.includes("mask"))
ans="😷 Wear a mask if AQI exceeds 100.";

else if(q.includes("hotspot"))
ans="📍 Hotspot detected near Central Kolkata.";

else if(q.includes("pm"))
ans="🌫 PM2.5 is currently within acceptable limits.";

setTimeout(()=>{

chat.innerHTML+=`
<div class="ai-message">${ans}</div>
`;

chat.scrollTop=chat.scrollHeight;

},500);

input.value="";

}
