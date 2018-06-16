function drawBackGround() {
    var canvas = document.getElementById("main-canvas");
    var context = canvas.getContext("2d");
    var img = document.getElementById("bottom-img")
    context.drawImage(img, 0, 400, 500, 100);
    context.font = "30px Arial";
    context.fillStyle = "red";
    context.fillText("대단하신 분", 30, 440);
}

window.onload = function() {
    drawBackGround();
    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'main-canvas', 'daedan.png');
        console.log("Download")
    }, false);
    // onclick='loadImage();'
    document.getElementById('btnLoad').addEventListener('click', function() {
        drawBackGround();
        loadImage();
    }, false);
}


function loadImage() {
    var input, file, fr, img;
    var baseimg = document.getElementById("bottom-img")


    if (typeof window.FileReader !== 'function') {
        write("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('imgfile');
    if (!input) {
        write("Um, couldn't find the imgfile element.");
    }
    else if (!input.files) {
        write("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        write("Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = createImage;
        fr.readAsDataURL(file);
    }

    function createImage() {
        img = new Image();
        img.onload = imageLoaded;
        img.src = fr.result;
        img.width = 500;
        img.height = 400;
    }

    function imageLoaded() {
        var canvas = document.getElementById("main-canvas")
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0, 500, 400);
    }

    function write(msg) {
        var p = document.createElement('p');
        p.innerHTML = msg;
        document.body.appendChild(p);
    }

    function drawText() {
        var canvas = document.getElementById("main-canvas");
        var ctx = canvas.getContext("2d");       	
        var subject = document.getElementById("text-subject");            
//            var etc = document.getElementById("text-etc");
        // ctx.drawImage(baseimg, 0, 400, 500, 100);
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(subject.value, 195, 440);
        console.log('helloworld');
    }
    drawText();
}

function downloadCanvas(link, canvasId, filename) {
    var a = document.getElementById('download-anchor');
    a.download = filename;
    a.href = document.getElementById(canvasId).toDataURL();
    a.click();
}
