//FUNCIONES Y VARIABLES
//img1 = document.getElementById ("imagen1");
//document.write (img1.innerHTML);
resultado = 0 
iva = 1.21
function calculoCuotas () {
    resultado = parseFloat ((producto * iva) / cuota) ;
}
function mostrar () {
    alert ("Usted deberia pagar " + cuota  + " cuotas de " + resultado) ;
}

// ARRAY CON OBJETOS
// Esto va a tener mayor relacion con el proyecto cuando implemente el DOM
class zapatilla {
    constructor (nombre, stock, precio, img) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio ;
        this.img = img;
    }
    sumaIva() {
        this.precio = this.precio * 1.21
    } 
}

const zapatillas = []; 
zapatillas.push (new zapatilla ("Nike Cortez Rosa", 20, 2200, "https://www.facebook.com/photo/?fbid=1046950799468969&set=pcb.1046950986135617" ))
zapatillas.push (new zapatilla ("Vans Clasicas", 20, 4400, "https://www.facebook.com/photo?fbid=1046950806135635&set=pcb.1046950986135617" ))
zapatillas.push (new zapatilla ("Nike Air Force Tornasolada Azul", 20, 3000, "https://www.facebook.com/photo?fbid=1046950792802303&set=pcb.1046950986135617"))
zapatillas.push (new zapatilla ("Adidas Ultra Bost Blanco", 20, 4300, "https://www.facebook.com/photo?fbid=1046950896135626&set=pcb.1046950986135617"))
zapatillas.push (new zapatilla ("Adidas NEO Blanco/Violeta", 20, 5000, "https://www.facebook.com/photo?fbid=1046950922802290&set=pcb.1046950986135617"))
zapatillas.push (new zapatilla ("Nike Cortez Verde", 20, 5500, "https://www.facebook.com/photo/?fbid=1046950956135620&set=pcb.1046950986135617"))

for (const zapatilla of zapatillas) {
    zapatilla.sumaIva () ;
}
console.log (zapatillas);

// SIMULADOR INTERACTIVO

alert ("Bienvenido , a continuacion lo ayudaremos a conocer el valor final de cada cuota del producto que hayas elegido")

producto = parseInt(prompt ("Ingrese el valor de su producto")) ;
cuota = parseInt(prompt ("Ingrese la cantidad de cuotas que desea pagar (1, 3, 6, 9, 12)")) ;

calculoCuotas ()
mostrar ()

//