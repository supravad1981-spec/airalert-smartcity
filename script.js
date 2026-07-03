const ctx = document.getElementById('aqiChart');

if(ctx){

new Chart(ctx,{

type:'line',

data:{

labels:[
'Now',
'4h',
'8h',
'12h',
'16h',
'20h',
'24h'
],

datasets:[{

label:'Predicted AQI',

data:[72,81,76,95,89,70,62],

borderColor:'#0b63d1',

backgroundColor:'rgba(11,99,209,.2)',

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:true

}

}

}

});

}
