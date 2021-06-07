canvas=document.getElementById("myCanvas");
ctx=getContext("2d");
var mouseEvent="empty";
var last_position_x,last_position_y;
color="black";
width_of_line=1;
radius="empty";
canvas.addEventLisener("mousedown",my_mouseDown);


function my_mouseDown(e){


    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown"
}
canvas.addEventLisener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="my_mouseup"
}
canvas.addEventLisener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventLisener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_of_x = e.clentX-canvas.offsetLeft;
    current_position_of_y = e.clientY-canas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("Current position of x and y coordinates=");
        console.log("x="+ current_position_of_x+ "y="+ current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    mouseEvent="mouseleave";
}
