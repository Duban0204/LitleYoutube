function mostrarConstaseña() {
    var x = document.getElementById("contraseña");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

const obtener_Datos = ()=> {

    let ingresar = document.getElementById("btn_ingresar");
    ingresar.addEventListener("click",(e)=>{
        e.preventDefault();
        let correo = document.getElementById('form-input').value;
        let contraseña = document.getElementById("contraseña").value;        
        validarCorreo(correo, contraseña);
    },false);

}

const validarCorreo = (correo,pass) => {
    
    let advertencia = document.getElementById("p_advertencia-correo");
    let advertencia1 = document.getElementById("p_advertencia-pass");
    advertencia.innerHTML = "";
    advertencia1.innerHTML = "";


    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)){
        advertencia.setAttribute("style","color:green")
        advertencia.innerHTML = "Direccion de correo correcta"
    }
    else{
        advertencia.setAttribute("style","color:red")
        advertencia.innerHTML = "La direccion electronica requiere de un arroba y un dominio";
    }

    if(!/^(?=.*[a-z])\S{8,16}$/.test(pass)){
        advertencia1.setAttribute("style","color:red")
        advertencia1.innerHTML = "La contraseña debe tener de 8 a 16 caracteres";
    }
    else if(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])$/.test(pass)){
        advertencia1.setAttribute("style","color:green")
        advertencia1.innerHTML = "Contraseña correcta"
    }
    else{
        advertencia1.setAttribute("style","color:red")
        advertencia1.innerHTML = "La contraseña requiere mayusculas, numeros, y caracteres especiales";
    }
}



function orientacionCambiada() {
    let elemento = document.getElementById("div__titulo");
    let elemento1 = document.getElementById("div__formulario");
    let elemento2 = document.getElementById("form-input")
    let elemento3 = document.getElementById("contraseña")

    if (window.orientation === 90 || window.orientation === -90) {
        elemento.classList.remove("col-12");
        elemento.classList.add("col-6");
        elemento1.classList.remove("col-12");
        elemento1.classList.add("col-6");
        elemento2.classList.remove("form-control");
        elemento3.classList.remove("form-control");
    } else if (window.orientation === 0 || window.orientation === 180) {
        elemento.classList.remove("col-6");
        elemento.classList.add("col-12");
        elemento1.classList.remove("col-6");
        elemento1.classList.add("col-12");
        elemento2.classList.add("form-control");
        elemento3.classList.add("form-control");
    }
}


setInterval('orientacionCambiada()', 100);
window.onload = obtener_Datos();