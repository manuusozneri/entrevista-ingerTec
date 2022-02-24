
/* modal img pares */

var modal = document.querySelector('.modal-container');
var imgParUno = document.querySelectorAll('#imagenParUno img');
var imgParDos = document.querySelector('#imagenParDos img');
var originalImg = document.querySelector('.full-img');

var counterValue = document.querySelector('.counterpar')
var counter = 0;

var counterValueImgFour = document.querySelector('#counterParDos')
var counterFour = 0

imgParUno.forEach((imgPares) =>{
    imgPares.addEventListener('click', () => {
        counter++
        counterValue.innerHTML = counter;
        modal.classList.add("open");
        const img = imgPares.getAttribute('data-original');
        originalImg.src = `./assets/${img}`;
    });
    imgParDos.addEventListener('click', ()=>{
        counterFour++
        counterValueImgFour.innerHTML = counterFour;
        modal.classList.add("open");
        const img = imgParDos.getAttribute('data-original');
        originalImg.src = `./assets/${img}`;
    })
});
modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal-container")) {
        modal.classList.remove("open");
    }
}) 


/* llenar textarea */

var buttonData = document.querySelector('.load-data');

buttonData.addEventListener('click', ()=> {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','home.json', true);
    xhttp.send();
    xhttp.onreadystatechange = () =>{
        if (xhttp.readyState == 4 && xhttp.status == 200){
            let data = JSON.parse(xhttp.responseText);
            let textarea = document.querySelector('.form-control')
            textarea.innerHTML = ''
            for(let item of data){
                textarea.innerHTML += item.texto
            }
        }
    }
})
           

/* pop up img impares */
var newWindow

$(document).on('click', '.imagenImpar img', function(e){
    let id = this.getAttribute('identificador');
    let img = this.getAttribute('src');
    newWindow = window.open("popup.html?id="+id+"&img="+img, "popup","width=800,height=400");
})









