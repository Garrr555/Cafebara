function zoomIn(){
    document.getElementById("zoom-image").style.transition = "transform 0.3s ease";
    document.getElementById("zoom-image").style.transform = "scale(1.1)";
    document.getElementById("zoom-image").style.transformOrigin = "center";
    document.getElementById("zoom-image").style.overflow = "hidden";
}

function zoomOut(){
    document.getElementById("zoom-image").style.transition = "transform 0.3s ease";
    document.getElementById("zoom-image").style.transform = "scale(1)";
    document.getElementById("zoom-image").style.transformOrigin = "center";
    document.getElementById("zoom-image").style.overflow = "hidden";
}


function zoomIn2(){
    document.getElementById("zoom-image2").style.transition = "transform 0.3s ease";
    document.getElementById("zoom-image2").style.transform = "scale(1.1)";
    document.getElementById("zoom-image2").style.transformOrigin = "center";
    document.getElementById("zoom-image2").style.overflow = "hidden";
}

function zoomOut2(){
    document.getElementById("zoom-image2").style.transition = "transform 0.3s ease";
    document.getElementById("zoom-image2").style.transform = "scale(1)";
    document.getElementById("zoom-image2").style.transformOrigin = "center";
    document.getElementById("zoom-image2").style.overflow = "hidden";
}