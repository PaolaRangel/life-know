var btn = document.getElementById('guardar');

doc = document.getElementById('doc');
enf = document.getElementById('enf');

document.getElementById('uno').addEventListener('click',function(e){
    e.preventDefault();
    window.location.replace("index.html");

});

doc.addEventListener('click',function(e){
    e.preventDefault();
    let doctor = document.getElementById('form-doc');
    doctor.style.display = 'block';
});


 btn.addEventListener('submit',guardarMedico());

 function guardarMedico() {
    var nombree = document.getElementById('usuario');
    var edadd = document.getElementById('edad');
    var correoo = document.getElementById('correo');
    var passs = document.getElementById('pass');
        
console.log(nombree)
    var datos = {
        id: 1,
        nombre: nombree.value,
        edad: edadd.value,
        correo: correoo.value,
        pass: passs.value
    };
    console.log(datos);

    localStorage.setItem('doc', JSON.stringify(datos));

 }

