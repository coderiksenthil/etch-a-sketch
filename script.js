function get(){
    let name = prompt("Enter the amount of grids you need? (1-100): ");
    if(name>0 && name<=100){
        start();
    }else{
        alert("Enter between 1-100");
        let name = prompt("Enter the amount of grids you need? (1-100): ");
    }
}
 
function start(){
    
}