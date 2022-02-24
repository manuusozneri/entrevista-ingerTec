let id = new URLSearchParams(window.location.search).get('id');
let img = new URLSearchParams(window.location.search).get('img');

$('#imagen').css('background-image', 'url('+ img+')')
$(document).on('click', '.okButton', function(e){
   let elemento =  window.opener.document.getElementById('contador'+id);
   elemento.innerHTML = parseInt(elemento.innerHTML)+1; 
})
$(document).on('click', '.closeButton', function(e){
    window.close();
})

