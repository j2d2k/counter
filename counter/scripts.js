document.addEventListener('DOMContentLoaded', () => { 
    const counter = document.getElementById('counter'); 
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement'); 
    const resetButton = document.getElementById('reset');

    incrementButton.addEventListener('click', () =>{
        counter.textContent = parseInt(counter.textContent) + 1; 
    });

    decrementButton.addEventListener('click', () => { 
        counter.textContent = parseInt(counter.textContent) - 1; 
    });
   
    resetButton.addEventListener('click', () => {
        counter.textContent = 0; 
    });
});
