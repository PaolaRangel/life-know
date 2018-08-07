new Vue({
    el: '#app',
    data: {
        mensaje: "Hello World"
    }
});


var login = document.getElementById('logi');

login.addEventListener('submit',function (e) { 
    var usuario = document.getElementById('user');
    var pass = document.getElementById('pass');
    e.preventDefault();
    let usu = 'admin@admin.com';
    let pas = 'admin';
    let usu2 = 'test@test.com';
    let pas2= '1234';
    let usu3 = 'testfa@hospital.com';
    let pas3= '12345';
    if(usuario.value == usu && pass.value == pas){
        alert('welcome');
        window.location.replace("dashboard.html");
    }
    else if(usuario.value == usu2 && && pass.value == pas2){
        window.location.replace("dashboard2.html");
    }
    else if(usuario.value == usu3 && && pass.value == pas3)
    {
        window.location.replace("dashboard3.html");
    }
    else {
        alert('Error');
    }
 });


 

/*
"medico": {
[{
ID: 2,
NOMBRE: "fullname",
Edad: 22,
Sexo: hombre,
Correo: alguno@algo.com,
Password: test1
}],
[{
ID: 3,
NOMBRE: "fullname",
Edad: 22,
Sexo: hombre,
Correo: algun@algo.com,
Password: test2
}],
[{n}]
}


*/