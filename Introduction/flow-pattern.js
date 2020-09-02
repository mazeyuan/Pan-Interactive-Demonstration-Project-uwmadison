window.addEventListener("load",() => {
    const canvas = document.querySelector("#my-canvas");
    const ctx = canvas.getContext('2d');


    let painting = false;

    function startPostion() {
        painting = true;
    }

    function finishedPostion() {
        painting = false;
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY-200);
        ctx.stroke();
       
        //ctx.moveTo(e.clientX, e.clientY-200);
        ctx.beginPath();
       
    }
    canvas.addEventListener("mousedown",startPostion);
    canvas.addEventListener("mouseup",finishedPostion);
    canvas.addEventListener("mousemove",draw);




})