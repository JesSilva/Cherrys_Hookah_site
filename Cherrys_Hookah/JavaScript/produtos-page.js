var butAluminio = document.querySelector('#Aluminio');
var form = document.querySelector('#modalAluminio');
butClica.addEventListener('click', function(){
    form.classList.remove('hide');
})

var butSave = document.querySelector('#butSave');
butSave.addEventListener('click', function(){
    form.classList.add('hide');
})