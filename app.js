let cuentas = [ 
    {nombre: "Mali", saldo: 200, password: "1234", dni: 44788834},
    {nombre: "Gera", saldo: 150, password: "“5678", dni: 10247439},
    {nombre: "Sabi", saldo: 60, password: "9102", dni: 98005362}
    
]

let saldo = 0;
const montoInput = document.getElementById("montoInput");
const confirmarBtn = document.getElementById("confirmarBtn");
const saldoActual = document.getElementById("saldoDisplay");
const mensajeErrorContainer = document.querySelector('.mensajeErrorContainer');
let mensajeError = mensajeErrorContainer.querySelector('p');
// FUNCION DE INGRESO

document.querySelector('.ingresar').addEventListener('click', function() {
    let usuarioDNI = parseInt(document.getElementById('usuarioDNI').value);
    let usuarioClave = document.getElementById('usuarioClave').value;
    
    
    let cuentaEncontrada = cuentas.find(cuenta => cuenta.dni === usuarioDNI && cuenta.password === usuarioClave);
    saldo = cuentaEncontrada.saldo
    console.log(saldo)
    if (cuentaEncontrada) {
       
        document.querySelector('.pantalla1').style.display = 'none';
        document.querySelector('.pantalla2').style.display = 'block';
    } else {
        alert('DNI o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        document.getElementById('usuarioDNI').value = '';
        document.getElementById('usuarioClave').value = '';
    }
});

// RETIRO DE DINERO

document.querySelector('.retirarDineroButton').addEventListener('click', function() {
    document.querySelector('.pantalla2').style.display = 'none';
    document.querySelector('.pantalla3').style.display = 'block';
    mensajeErrorContainer.style.display = "none";

});

    
document.getElementById('botonVolver').addEventListener('click', function() {
    document.querySelector('.pantalla3').style.display = 'none';
    document.querySelector('.pantalla2').style.display = 'block';
});

// VALIDACION DEL RETIRO
const montosGridContainer = document.querySelector('.montosGridContainer');
const montoInput2 = document.getElementById('montoInput');

// Delegando eventos a los botones de retiro
montosGridContainer.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('monto')) {
        const monto = target.textContent.replace('S/.', ''); 
        montoInput2.value = monto; 
    }
});

// retiro

document.addEventListener("DOMContentLoaded", function() {
    let montoInput = document.getElementById("montoInput");
    let formularioContainer = document.querySelector(".formularioContainer");
    let mensajeError = null;
    let mensajeErrorContainer = document.querySelector('.mensajeErrorContainer');

    formularioContainer.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let montoIngresado = parseInt(montoInput.value); 
        let saldoUsuario = cuentas[0].saldo; 

        if (isNaN(montoIngresado) || montoIngresado === 0 || montoIngresado > saldoUsuario) {
            if (!mensajeError) { 
                mensajeError = document.createElement("p");
                mensajeError.textContent = "Monto no válido. Debe ingresar un monto mayor que 0.";
                mensajeErrorContainer.appendChild(mensajeError);
                mensajeErrorContainer.style.display = "block";
            }
            return false; // Detener el envío del formulario si las condiciones no se cumplen
        }  
        else if (saldo - montoIngresado < 10 || saldo - montoIngresado > 990) {
            if (!mensajeError) { 
                mensajeError = document.createElement("p");
                mensajeError.textContent = "Tu saldo no puede tener menos de 10!";
                mensajeErrorContainer.appendChild(mensajeError);
                mensajeErrorContainer.style.display = "block";
            }
            return false; // Detener el envío del formulario si las condiciones no se cumplen
        }
        else {
            // Si el monto es válido y no hay mensaje de error existent, se elimina
            if (mensajeErrorContainer.style.display === "block") {
                mensajeErrorContainer.style.display = "none";
                mensajeError.textContent = ""; 
            } 
    
            saldo = saldo - montoIngresado;
            saldoDisplay.textContent = saldo;

            document.querySelector(".pantalla3").style.display = "none";
            document.querySelector(".pantalla4").style.display = "block";
            
            // Mostrando el detalle del retiro
            // fecha y hora reales
            let fechaActual = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });
            document.querySelector(".fechaHorayCajeroFlexContainer p").textContent = fechaActual;
            document.querySelector(".montoTotalRetiroContainer h2").textContent = `S/. ${montoIngresado.toFixed(2)}`;
        }
    });
});

// BOTONES DE SALIR

document.addEventListener("DOMContentLoaded", function() {
    let botonRetirarYVerSaldo = document.querySelector(".button1");

    botonRetirarYVerSaldo.addEventListener("click", function() {
        document.querySelector(".pantalla4").style.display = "none";
        document.querySelector(".pantalla5").style.display = "block";
        
    });

    let botonRetirarSinVerSaldo = document.querySelector(".button2");

    botonRetirarSinVerSaldo.addEventListener("click", function() {
        document.querySelector(".pantalla4").style.display = "none";
        document.querySelector(".pantalla2").style.display = "block";
    });
});

const botonSalirDeSaldoDisponible = document.getElementById('botonSalirDeSaldoDisponible');

botonSalirDeSaldoDisponible.addEventListener("click", ()=>{
    console.log("Hiciste clic en salir")
    document.querySelector(".pantalla5").style.display = "none";
    document.querySelector(".pantalla2").style.display = "block";
  
})


// CONSULTAR SALDO

const consultarSaldoBoton = document.getElementById('consultarSaldoButton');

consultarSaldoBoton.addEventListener('click', () => {
    document.querySelector(".pantalla2").style.display = "none";
    document.querySelector(".pantalla5").style.display = "block";
    saldoDisplay.textContent = saldo;

})


// REALIZAR DEPÓSITO

const realizarDepositoBoton = document.getElementById('realizarDepositoButton');
let mensajeErrorContainerDeposito = document.getElementById('mensajeErrorContainerDeposito');
let mensajeErrorDeposito = document.createElement("p");
let volverBoton = document.querySelector('.volverButton');

volverBoton.addEventListener('click', ()=>{
    document.querySelector(".pantalla2").style.display = "block";
    document.querySelector(".pantalla6").style.display = "none";

})

realizarDepositoBoton.addEventListener('click', ()=>{
    document.querySelector('.pantalla2').style.display = 'none';
    document.querySelector('.pantalla6').style.display = 'block';
    mensajeErrorContainerDeposito.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function() {
    let depositForm = document.getElementById("depositForm");
    let mensajeErrorContainer = document.querySelector('.mensajeErrorContainer');
    let saldoDisplay = document.getElementById('saldoDisplay');

    depositForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let montoInputDeposit = document.getElementById("montoInputDeposit");
        let montoDeposito = parseFloat(montoInputDeposit.value); 

        if (isNaN(montoDeposito) || montoDeposito <= 0) {

            console.log("se cumple el if")

        } else {
            // Verificar si el saldo no excede los 950
            if (saldo + montoDeposito > 950) {
                mensajeErrorDeposito.textContent = "Monto no válido. El saldo de tu cuenta no puede pasar de 950!";
                mensajeErrorContainerDeposito.appendChild(mensajeErrorDeposito);
                mensajeErrorContainerDeposito.style.display = "block";
            } else {
                saldo += montoDeposito;
                saldoDisplay.textContent = saldo;
                mensajeErrorContainer.style.display = "none";
                mensajeErrorContainer.innerHTML = "";
                document.querySelector(".pantalla6").style.display = "none";
                document.querySelector(".pantalla2").style.display = "block";
            }
        }
    });
});










