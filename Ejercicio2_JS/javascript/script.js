const botonR= document.getElementById('red');
const botonA= document.getElementById('blue');
const botonV= document.getElementById('green');
const botonReset = document.getElementById('reset');


botonR.addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove('blueB', 'greenB');
    document.body.classList.add('redB');
});

botonA.addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove('redB', 'greenB');
    document.body.classList.add('blueB');
});
  
botonV.addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove('redB', 'blueB');
    document.body.classList.add('greenB');
});

botonReset.addEventListener('click', function(event){
    event.preventDefault();
    document.body.classList.remove('redB', 'blueB', 'greenB');
});