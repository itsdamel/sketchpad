let space = 16
let totalgrid = space * space 
let choosenColor = 'black'
 
let mainDiv = document.getElementById('container')


//Creating grids
function makeGrid(){
    {
        for(let i = 0; i < totalgrid; i++){
            let grid = document.createElement('vid')
            grid.classList.add('grid', 'gridOn')
            mainDiv.append(grid)
        }
    
    }
}
window.onload = makeGrid()



//fill grid event
let grids = document.querySelectorAll('.grid')
grids.forEach(grid => grid.addEventListener('mouseenter', function(){
            grid.style= `background-color: ${choosenColor}`
            
}))

//Clean grid event
let button = document.getElementById('cleanAll')
button.addEventListener('click', eraseAll)

function eraseAll(){
    grids.forEach(grid => grid.style = 'background-color: white')
}



//Grid on and off event
let gridOn = true;
let gridButton = document.querySelector('#changeGrid')
let statusText = document.getElementById('gridStatus')
statusText.textContent = 'Off'

gridButton.addEventListener('click', function() 
{

    if(gridOn){
            grids.forEach((grid) => {
                grid.classList.remove('gridOn')

            
            })
            gridButton.style.color = 'green'
            statusText.textContent = 'On'
           gridOn = false;
    }else{

        grids.forEach((grid) =>{
            grid.classList.add('gridOn')
        })
        gridButton.style.color = 'red'
        statusText.textContent = 'Off'
        gridOn = true;
    }
   
})


//change color event
let color = document.getElementById('colorButton')

color.addEventListener('input', function(){
    choosenColor = color.value
})