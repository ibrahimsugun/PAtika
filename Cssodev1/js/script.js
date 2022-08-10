

function dotime() {

    $("#ekran").css({ "transition": "all 0.8s", "-webkit-transition": "all 0.8s" });
    $("#ekran2").css({ "transition": "all 0.8s", "-webkit-transition": "all 0.8s" }); 
    $("#ekran3").css({ "transition": "all 0.8s", "-webkit-transition": "all 0.8s" });
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();     
    var secs = d.getSeconds();

    if (hours < 10) { hours = "0" + hours };
    if (mins < 10) { mins = "0" + mins }; 
    if (secs < 10) { secs = "0" + secs }; 

    hours.toString();
    mins.toString();  
    secs.toString();

    var hex = "#" + hours + mins + secs;

    $("#tarih").html(hours + " : " + mins + " : " + secs); 
    $("#tarih2").html(hours + " : " + mins + " : " + secs); 
    $("#tarih3").html(hours + " : " + mins + " : " + secs);  


    $("#ekran").css({ "backgroundColor": hex });  
    $("#ekran2").css({ "backgroundColor": hex });  
    $("#ekran3").css({ "backgroundColor": hex });  
}

window.setInterval(function () { dotime(); }, 1000); 