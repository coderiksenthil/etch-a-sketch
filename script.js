/*function get(){
    let name = prompt("Enter the amount of grids you need? (1-100): ");
    if(name>0 && name<=100){
        start();
    }else{
        alert("Enter between 1-100");
        let name = prompt("Enter the amount of grids you need? (1-100): ");
    }
}
 
function start(){

}*/


/*const container = document.getElementById('grid-container');
        let currentColor = 'black';

        function createCustomGrid() {
            const rows = parseInt(prompt('Enter the number of rows (1-100):'));
            const columns = parseInt(prompt('Enter the number of columns (1-100):'));

            if (isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1 || rows > 100 || columns > 100) {
                alert('Please enter valid row and column values between 1 and 100.');
                return;
            }

            container.innerHTML = '';
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            for (let i = 0; i < rows * columns; i++) {
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('grid-square');
                container.appendChild(gridSquare);
            }
            addHoverListeners();
        }

        function handleHover(e) {
            if (currentColor === 'rainbow') {
                const randomColor = getRandomColor();
                e.target.style.backgroundColor = randomColor;
            } else {
                e.target.style.backgroundColor = currentColor;
            }
        }

        function setColor(color) {
            currentColor = color;
        }

        function clearGrid() {
            const gridSquares = document.querySelectorAll('.grid-square');
            gridSquares.forEach((square) => {
                square.style.backgroundColor = 'white';
            });
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function addHoverListeners() {
            const gridSquares = document.querySelectorAll('.grid-square');
            gridSquares.forEach((square) => {
                square.addEventListener('mouseenter', handleHover);
            });
        }*/