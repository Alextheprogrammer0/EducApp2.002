//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Cuál de las siguientes actividades disfrutas más?",
        op0:"Escuchar musica",
        op1:"Ver una película",
        op2:"Bailar con buena música",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"

    },
    {
        id:1,
        pregunta:"¿Qué programa de televisión prefieres ?",
        op0:"Reportajes de descubrimientos y lugares ",
        op1:"Cómico y de entretenimeinto",
        op2:"Noticias del mundo",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:2,
        pregunta:"Cuándo conversas con otra persona ¿Qué es lo que haces?",
        op0:"La escuchas atentamente",
        op1:"La observas",
        op2:"Tiendes a tocarla",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:3,
        pregunta:"¿Qué prefieres hacer un sábado por la tarde?",
        op0:"Quedarte en casa",
        op1:"Ir aun cocierto ",
        op2:"Ir al cine",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:4,
        pregunta:"¿Qué tipo de examenes se te facilitan más?",
        op0:"Examen oral",
        op1:"Examen escrito ",
        op2:"Examen de opción multiple",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    
    {
        id:5,
        pregunta:"¿De que manera se te facilita aprender?",
        op0:"Repitiendo en voz alta",
        op1:"Escribiéndolo varias veces",
        op2:"Relacionandolo con algo divertido",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:6,
        pregunta:"¿A qué evento preferirías salir?",
        op0:"A una reunión social",
        op1:"A una exposición social",
        op2:"A una conferencia",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:7,
        pregunta:"Cuando tratas de recordar algo¿Cómo lo haces?",
        op0:"A tráves de imagenes",
        op1:"A tráves de emociones",
        op2:"A tráves de sonidos",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:8,
        pregunta:"Si no encuentras las llaves en una bolsa:",
        op0:"Las buscas mirando",
        op1:"Sacudes la bolsa para oír el ruido ",
        op2:"Buscamos al tacto",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    },
    {
        id:9,
        pregunta:"¿Cómo te consideras?",
        op0:"Atlético",
        op1:"Intelectual",
        op2:"Sociable",
        Visual:"0",
        Auditivo:"1",
        Cinestesico:"2"
    }
]
//visibilad del buton

//crear score de tipo de prendisaje
scoreVisual = 0;
scoreAuditivo = 0;
scoreCinestesico = 0;

//para guardar las respuestas elegidas
let respuestas = [];

//cantidad correctas
//let cantiCorrectas = 0;

//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){

    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida; 
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){   

    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){

        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.Visual == respuestas[i]){ 
            
            //respuesta correcta
            scoreVisual ++ ;
            console.log("scoreVisual"+scoreVisual);
        }
    
 
        //recorro el arreglo que tiene las respuestas y compar
        //cargo la pregunta
        if(pregunta.Auditivo == respuestas[i]){ 
            
            //respuesta correcta
            scoreAuditivo ++ ;
        console.log("scoreAuditivo"+scoreAuditivo);
        }

         //recorro el arreglo que tiene las respuestas y comparo
        //cargo la pregunta
        if(pregunta.Cinestesico == respuestas[i]){ 
            
            //respuesta correcta
            scoreCinestesico ++ ;
            console.log("scoreCinestesico"+scoreCinestesico);
        }
    }
}


    
 
            /*let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
  +          let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
            
        }
    }*/

    //desabilitamos todos los inputs
 //   let inputs = document.getElementsByTagName("input");
  /* for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);


function draw() {
  background(180);
  text("Puntuación: "+ scoreAuditivo, 500,50);

drawSprites ();
}
*/