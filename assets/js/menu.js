
const button = document.querySelector('.button')
//const buttonContainer = document.querySelector('.button-container');
const dark = document.querySelector('.container');


button.onclick = function()
{
    this.classList.toggle('active')
    //buttonContainer.classList.toggle('active')
    this.classList.toggle('container')
    
}

dark.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})