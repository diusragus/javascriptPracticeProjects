(function() {
    //variables
    var lista = document.getElementById('lista'),
        tareaInput = document.getElementById('tareaInput'),
        btnNuevaTarea = document.getElementById('btn-agregar');

    //funciones
    var agregarTarea = function(){
        //alert("Agregar Tarea");
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea == "") {
          tareaInput.setAttribute("placeholder","agrega una tarea valida");
          tareaInput.className="error";
          //return false;

        }

        //Agregamos contenido al enlace (a)
        enlace.appendChild(contenido);
        //Le establecemos un atributo href
        enlace.setAttribute("href","#")
        //Agregamos enlace a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //Agregar nuevaTarea a la lista
        lista.appendChild(nuevaTarea);
        //limpiamos la tarea escrita del cuadro de texto
        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length-1; i++) { //me meto en la ul, me meto en los eleentos li, y los cuento con el metodo .lenght, determino cuantos elementos hay y le resto 1 para acceder a la posicion en la coleccion html o arrayList
          lista.children[i].addEventListener("click", eliminarTarea);//y aca uno a uno le voy agregando el evento
        }



    };
    var comprobarInput = function(){
        //alert("Comprobar Input");
        tareaInput.className="";
        tareaInput.setAttribute("placeholder","Agrega tu tarea");

    };
    var eliminarTarea = function(){
        //alert("Eliminar Tarea");
        this.parentNode.removeChild(this);

    };

    //eventos
    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);//recordar que aqui cuando se llama a la funcion no se le ponen los parentesis luego del nombre

    //Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    //Eliminar Elementos de la Lista
    for (var i = 0; i <= lista.children.length-1; i++) { //me meto en la ul, me meto en los eleentos li, y los cuento con el metodo .lenght, determino cuantos elementos hay y le resto 1 para acceder a la posicion en la coleccion html o arrayList
      lista.children[i].addEventListener("click", eliminarTarea);//y aca uno a uno le voy agregando el evento
    }
////////////////// BORRAR DE AQUI PARA ABAJO PARA VISUALIZAR CORRECTAMENTE EL PROYECTO!!

    //Traigo un elemento y lo elimino
    //let prueba = document.getElementsByClassName('principal')[0].remove('principal');

    //Traigo un elemento selecciono la clase, y la intercambio
    //console.log(document.getElementsByClassName('principal')[0].classList.toggle('bis'));

    //traigo un elemento selecciono la clase y la elimino
    //console.log(document.getElementsByClassName('principal')[0].classList.remove('bis'));

    //traigo un elemento y le agrego otra clase
    //console.log(document.getElementsByClassName('principal')[0].classList.add('bis'));



    //let prueba = document.getElementsByTagName('ul')[0].innerText='Hola';

    //agarro un elemento HTML by tag name, agarro su hijo, lo vuelvo a agarrar y modifico el texto html!!
    //document.getElementsByTagName('ul')[0].children[0].children[0].innerHTML = 'Hola';
    
    //document.getElementsByTagName('ul')[0].children[1].innerText='Mi nombre es';
    
    //document.getElementsByTagName('ul')[0].children[2].innerText='Manuel';
    






















}());
