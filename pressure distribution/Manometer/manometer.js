
//alert("connect!")
$("#thermometer").click(function(){alert("I am clicked!")})


// $("button").on("click",function(){
//     alert("I am clicked!")
// })

$("#connectionBox11").click(function(){
    $("#connectionBox11").css("background", "red");
    console.log("I am clicked!")
})

$("#connectionBox32").click(function(){
    $("#connectionBox32").css("background", "red");
    console.log("I am clicked!")
})

$("#connectionBox21").click(function(){
    $("#connectionBox21").css("background", "green");
    console.log("I am clicked!")
})

$("#connectionBox42").click(function(){
    $("#connectionBox42").css("background", "green");
    console.log("I am clicked!")
})

$("#connectionBox31").click(function(){
    $("#connectionBox31").css("background", "yellow");
    console.log("I am clicked!")
})

$("#connectionBox12").click(function(){
    $("#connectionBox12").css("background", "yellow");
    console.log("I am clicked!")
})

$("#connectionBox41").click(function(){
    $("#connectionBox41").css("background", "pink");
    console.log("I am clicked!")
})

$("#connectionBox22").click(function(){
    $("#connectionBox22").css("background", "pink");
    console.log("I am clicked!")
})

var canvas = document.getElementById("manometer-demo");

var context = canvas.getContext('2d');

function drawutube() {
    context.beginPath();
    context.moveTo(350,150);
    context.lineTo(350,250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(400,150);
    context.lineTo(400,250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(250,150);
    context.lineTo(250,250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(200,200);
    context.lineTo(200,250);
    context.stroke();
    context.closePath();

    // context.beginPath();
    // context.moveTo(350,150);
    // context.lineTo(400,150);
    // context.stroke();
    // context.closePath();

    context.beginPath();
    context.moveTo(200,150);
    context.lineTo(250,150);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(200,150);
    context.lineTo(150,150);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(200,150);
    context.lineTo(150,150);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(200,200);
    context.lineTo(150,200);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(125,175,25*Math.sqrt(2),Math.PI/4,Math.PI*7/4,false);
    context.stroke();
    context.closePath();


    context.beginPath();
    // context.fillStyle() = "blue";
    context.arc(300,250,50,0,Math.PI,false);
    context.stroke();
    context.closePath();


    // context.moveTo(250,250);
    // context.lineTo(200,250);
    context.beginPath();
    context.arc(300,250,100,0,Math.PI,false);
    // context.moveTo(400,250);
    // context.lineTo(350,250);
    context.stroke();

    // context.fill();
    context.closePath();
}

function fillWater() {

    context.beginPath();
    context.strokeStyle = "crimson";
    context.fillStyle= "blue";
    context.moveTo(200,250);
    context.lineTo(250,250);

    context.arc(300,250,50,Math.PI,0,true);

    context.lineTo(400,250);

    context.moveTo(400,250);
    context.arc(300,250,100,0,Math.PI,false);
    context.stroke();
    context.closePath();
    context.fill();
}



var slider = document.getElementById("P_atm");



function changeHeight(c){
    //context.beginPath();
    console.log(c)
    context.fillStyle= "blue";
    context.fillRect(200,250-c,50,c);
}

// function canvasAnimation(c){
//     // console.log(change);
//     changeHeight(c);
//     canvasInterval = requestAnimationFrame(canvasAnimation);
// }


slider.oninput = function() {
    //console.log(change);console.log(this.value);
    change = this.value;
    //console.log(change);

    changeHeight(change);
    // canvasAnimation(change);
}





drawutube();
fillWater();
changeHeight();