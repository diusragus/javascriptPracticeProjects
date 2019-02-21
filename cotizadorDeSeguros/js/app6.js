//Cotizador

class Seguro{

    constructor(marca, anio, tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
//funcion cotizar seguro
    cotizareguro(){
    // 1 = americano 1.15
    // 2 = asiatico 1
    // 3 = europeo 1.30

        let cantidad;
        const base = 2000;

        switch(this.marca){
            case '1':
                cantidad = base *1.15;
                break;
            case '2':
                cantidad = base *1.05;
                break;
            case '3':
                cantidad = base *1.30;
                break;
        }

        //leer el año
        const diferencia = new Date().getFullYear() - this.anio;

        //Cada año de diferencia hay que reducir 3% lel valor del seguro
        cantidad -=  ((diferencia * 3) * cantidad) / 100;

        //sie el seguro es basico se multiplca  por 30% mas
        // si el seguro es completo se multiplica por 50 mas
        if(this.tipo ==='basico'){
            cantidad *=1.3;
            console.log(cantidad);
        } else {
            cantidad *=1.5;
            console.log(cantidad);
        }

        return cantidad;
    }
}

//Todo lo que se muestra
class Interfaz{;

    //mensaje que se imprimi en el hTML
    mostrarError(mensaje,tipo){
        const div = document.createElement('div');
        if (tipo === 'error'){
            div.classList='error mensaje';
        } else {
            div.classList = 'correcto';
        }

        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));

        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        }, 3000);
    }

    //Imprimi el resultado en pantala
    mostrarResultado(seguro,total){
        const resultado = document.getElementById('resultado');
        let marca;
        switch(seguro.marca){
            
                case '1':
                    marca='Americano';
                    break;
                case '2':
                    marca='Asiatico';
                    break;
                case '3':
                    marca='Europeo';
                    break;
        };

        //crear u div
        console.log(seguro);
        const div = document.createElement('div');
        //Insertar la info
        div.innerHTML = `
            <p class="header">Tu Resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: ${total}</p>
        `;

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        setTimeout(function(){
            spinner.style.display = 'none';
        }, 3000);

        resultado.appendChild(div);
    };

}

//Event Listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit',function(e){
    e.preventDefault();

    //Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    //Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Leer el radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //revisameos que los campos no esten vacios
    if(marcaSeleccionada ==='' || anioSeleccionado ==='' || tipo === ''){
        //interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisa el formulario e intenta nuevamente','error');
    } else {
        const resultados = document.querySelector('#resultado div')
        if(resultados!=null){
            resultados.remove();
        }
        //instacnciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
        //cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        interfaz.mostrarResultado(seguro,cantidad);
    }
})

//Generador de opciones del select
const max = new Date().getFullYear();
const min = max - 20;

const selectYears = document.getElementById('anio');
for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYears.appendChild(option);
}