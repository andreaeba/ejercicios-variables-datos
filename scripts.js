
    // <!-- Ejercicios
    // Indicaciones
    // Cuando la consigna pida ingresar algo hacerlo mediante un prompt, y cuando pida mostrar un mensaje hacerlo mediante alert. Usar const, let y template strings. -->
    
    // <!-- Saludo
    
    // Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada". -->

    // let nombre = prompt("¿Cuál es tu nombre?");

    // let apellido = prompt("¿Cuál es tu apellido?");

    // let saludo = alert(`Hola ${nombre} ` + `${apellido}, ` + `bienvenida a Ada!`)

    // saludo();


    // <!-- Heladería
    
    // Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada". -->

    // let sabor1 = prompt("Indique primer sabor");

    // let sabor2 = prompt("Indique segundo sabor");

    // let sabor3 = prompt("Indique tercer sabor");

    // let mensaje = alert(`Aquí tiene su helado de ${sabor1}, ` + `${sabor2} y ` + `${sabor3}.`)


    // <!-- Datos personales
    
    // Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos. -->

    // let nombre = prompt("Indique su nombre");

    // let apellido = prompt("Indique su apellido");

    // let edad = prompt("Indique su edad");

    // let nacionalidad = prompt("Indique su nacionalidad");

    // let documento = prompt("Indique su documento");

    // let saludoNuevoUsuario = alert(`Nuevo usuario agregado al sistema: nombre: ${nombre} ` + `apellido: ${apellido} ` + `edad: ${edad} ` + `nacionalidad: ${nacionalidad}. Gracias por unirte!`);


    // <!-- Lista de reproducción
    
    // Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'". -->


    // let nombrePlaylist = prompt("¿Cuál es el nombre de tu playlist?");

    // let song1 = prompt("Primera canción");

    // let song2 = prompt("Segunda canción");

    // let song3 = prompt("Tercera canción");

    // let message = alert(`Se ha creado la playplist '${nombrePlaylist}' con las canciones '${song1}', ${song2}, ${song3}`)


    // <!-- Dirección completa
    
    // Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina". -->

    // let calle = prompt("Indique calle");

    // let numero = prompt("Indique nro de puerta");

    // let departamento = prompt("Indique departamento");

    // let zipcode = prompt("Indique zipcode");

    // let ciudad = prompt("Indique ciudad");

    // let country = prompt("Indique country");

    // let direccionFinal = alert(`La dirección que ha ingresado es: ${calle} ${numero}, ${departamento}, ${zipcode
    // }, ${ciudad}, ${country}.`)


    // <!-- Años perro
    
    // Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro. -->

    // let edadHumana = prompt("Indique su edad")

    // let edadAniosPerro = alert(`Usted tiene: ` + edadHumana * 7 + ` años perro`)

    // <!-- Minutos a segundos
    
    // Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos. -->


    // let minutos = prompt("Indique cantidad de minutos");

    // let convertirMinutosASegundos = alert(`${minutos} equivale(n) a ` + minutos * 3600 + ` segundos.`);

    // <!-- Días a segundos
    
    // Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos. -->

    // let dias = prompt("Indique numero de días");

    // let message = alert(`${dias} días equivale(n) a: ` + dias * 86400 + ` segundos.`);


    // <!-- Kilómetros a millas
    
    // Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas. -->

    // let km = prompt("Indique cantidad de kilómetros");

    // let message = alert(`${km} kilómetros equivalen a ` + km * 0.621371 + ` millas.`);


    // <!-- Área de un triangulo
    
    // Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje. -->

    // let base = prompt("Indique base del triángulo");

    // let altura = prompt("Indique altura del triángulo");

    // let areaTriangulo = alert(`El área del triángulo es: ` + ((base * altura)/2) );

    // <!-- Perímetro de un rectángulo
    
    // Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje. -->

    // let base = prompt("Indique base del triángulo");

    // let altura = prompt("Indique altura del triángulo");

    // let perimetroTriangulo = alert(`El perímetro del triángulo es: ` + base + (2 * altura) );


    // <!-- Porcentaje
    
    // Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número. -->


    // let number = prompt("Ingrese un número");

    // let percentaje = prompt("Indique que % desea obtener del mismo");

    // let message = alert((number * percentaje) / 100 );

    // <!-- Tiempo de viaje
    
    // Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.). -->

    // let distance = prompt("Indique la distancia total de su viaje");

    // let message = alert(`Su viaje a pie tadaría: `+ distance * 5 + ` km/h, ` + `bici: ` + distance * 10 + ` km/h`);


    // <!-- Duración vuelo
    
    // Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo. -->

    // let destino1 = prompt("Ingrese su primer destino");

    // let destino2 = prompt("Indique su segundo destino");

    // let destino3 = prompt("Indique su tercero destino");

    // let duracionDestino1 = prompt("Indique la duración de su primer destino");

    // let duracionDestino2 = prompt("Indique la duración de su segundo destino");

    // let duracionDestino3 = prompt("Indique la duración de su tercer destino");

    // let totalDuracion = parseInt(duracionDestino1) + parseInt(duracionDestino2) + parseInt(duracionDestino3);

    // let message = alert(`Sus escalas son: ${destino1}, ${destino2} y ${destino3} y el total del viaje es: ` + totalDuracion + ` hs.`);

    // *********************************************************************************************
    // Consultas a Adrián:
    // - ¿Por qué siempre se concatenan y no se suman?
    // *********************************************************************************************

    // <!-- Incremento
    
    // Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.). -->

    let numeroPartida = prompt("Ingrese número inicial");

    let numeroIncremento = prompt("Cantidad a incrementar");

    alert(`Incremento 1) Total: ` + parseInt((numeroPartida + numeroIncremento)) + `, Incremento 2) Total: ` + parseInt((numeroPartida + (numeroIncremento + numeroIncremento))));



    // <!-- Celsius a Fahrenheit
    
    // Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit. -->

    // let gradosCelsius = prompt("Ingrese cantidad de grados Celsius")

    // let gradosF = (gradosCelsius * 1.8 + 32);

    // let conversion = alert(`${gradosCelsius}ºC equivalen a ` + ${gradosF} + `º F`);

    // <!-- Múltiplos
    
    // Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO -->

    // let primerNumero = prompt("Inserte el primer número");

    // let segundoNumero = prompt("Inserte el segundo número");

    // let resto = alert(`El resto que resulta de la división entre ambos productos es: ` + primerNumero%segundoNumero + `. Si el valor es 0 entonces el ${primerNumero} es múltiplo de ${segundoNumero}`);

    // *********************************************************************************************
    // Consultas a Adrián:
    //     - ¿Cómo evaluar exactamente si el primero número es múltiplo del segundo? Meidnate un condicional if?
    // *********************************************************************************************

    // <!-- Segundos a horas, minutos y segundos
    
    // Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo) -->

    // let segundosIngresados = prompt("Ingrese cantidad de segundos");

    // let conversionAHoras = segundosIngresados/3600;

    // let restoConversionAHoras = segundosIngresados%3600;

    // let conversionAMinutos = restoConversionAHoras/60;

    // let restoConversionAMinutos = restoConversionAHoras%60;

    // let conversionASegundos = restoConversionAMinutos/3600;

    // let conversionFinal = alert(`${segundosIngresados} segundos = ` + conversionAHoras + ` horas,` + conversionAMinutos + ` minutos y ` + conversionASegundos + ` segundos.` )

    // *********************************************************************************************
    // Consultas a Adrián:
    // - ¿Hay una forma más corta y pro de hacerlo?
    // - ¿Cómo sacar los decimales?
    // *********************************************************************************************


    // <!-- Cantidad de caracteres
    
    // Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto. INVESTIGAR CÓMO HACERLO -->

    // let texto = prompt("Ingrese un text");

    // let totalCaracteres = texto.length;
    // console.log(totalCaracteres)

    // let message = alert(`El texto tiene: ` + totalCaracteres + `caracteres.`  );

    // <!-- Cantidad de huéspedes
    
    // Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar. -->

    // let habitacionesPara2Personas = prompt("¿Cuántas habitaciones tiene el hotel para 2 personas?");

    // let habitacionesPara3Personas = prompt("¿Cuántas habitaciones tiene el hotel para 3 personas?");

    // let habitacionesPara4Personas = prompt("¿Cuántas habitaciones tiene el hotel para 4 personas?");

    // let cantidadDePersonas = (parseInt(habitacionesPara2Personas)*2) + (parseInt(habitacionesPara3Personas)*3) + (parseInt(habitacionesPara4Personas)*4);

    // let message = alert(`El número máximo de huéspedes que puede albergar el hotel es: ` + cantidadDePersonas);


    // <!-- Calculador gastos
    
    // Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios. -->

    // let dineroInicial = prompt("¿Cuánto dinero disponible tenés?");


    // let preguntaNombreServicio1 = prompt("¿Cuál es el primer servicio?");
    // let preguntaMontoServicio1 = prompt("¿Cuánto dinero tenés que pagar por el servicio: " + preguntaNombreServicio1);
    // alert(`Te quedan por ingresar 2 servicios más. Dinero disponible: ${dineroInicial - preguntaMontoServicio1}`)
    
    // let preguntaNombreServicio2 = prompt("¿Cuál es el segundo servicio?")
    // let preguntaMontoServicio2 = prompt("¿Cuánto dinero tenés que pagar por el servicio: " + preguntaNombreServicio2);
    // alert(`Te quedan por ingresar 2 servicios más. Dinero disponible: ${dineroInicial - preguntaMontoServicio1 - preguntaMontoServicio2}`)

    // let preguntaNombreServicio3 = prompt("¿Cuál es el tercer servicio?")
    // let preguntaMontoServicio3 = prompt("¿Cuánto dinero tenés que pagar por el servicio: " + preguntaNombreServicio3);
    // alert(`Te quedan por ingresar 2 servicios más. Dinero disponible: ${dineroInicial - preguntaMontoServicio1 - preguntaMontoServicio2 - preguntaMontoServicio3}`);

    // *********************************************************************************************
    // Preguntas a Adrián:
    // - Hay una forma mas pro de hacerlo???
    // *********************************************************************************************



    // <!-- Orden de compras
    
    // Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables. -->

    // let pan = 20;
    // let leche = 50;
    // let chocolate = 30;

    // function convertir(a) {
    //     return parseInt(a);
    // }

    // let ordenDeCompra = prompt("Ingrese la cantidad que desea comprar de ${pan}");




