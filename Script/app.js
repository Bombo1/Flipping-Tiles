function init(){



let columns = 4;
let rows = 4;
const emojis = ['🧠', '🫀', '🫁', '🦴', '🦷', '👣', '👂', '💪'];


//function to shuffle items
function shuffle(emojis) {
    let currentIndex = emojis.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [emojis[currentIndex], emojis[randomIndex]] = [
        emojis[randomIndex], emojis[currentIndex]];
    }
  
    return emojis;
  }

shuffle(emojis);
console.log(emojis);



//view grid 
let grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div'); // create column
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let row = document.createElement('div'); // create row
        row.className = 'row';
        row.textContent = emojis[i]; // set text
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);



// Timer start when one of grid items clicked
const counter = document.querySelector("#counter"); 
const startBtn = document.querySelector(".grid"); 

counter.innerHTML ='Time: 0 secs'; 
let interval; 
let i = 0; 

startBtn.addEventListener("click", startCounter); 

/*function startCounter(){ 
    interval = setInterval(function() { 
      counter.innerHTML= i++; 
    }, 1000); 
  } */
  
function startCounter(){ 
    interval = setInterval(function() { 
        i++;
      counter.innerHTML= `Time: ${i} secs`; 
    }, 1000); 
  }

}


window.addEventListener('DOMContentLoaded', init)