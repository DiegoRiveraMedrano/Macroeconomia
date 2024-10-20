function limpiar(){
    document.getElementById('calculadoraid').reset();
}
function calculadora(){
    var ano1 = parseInt(document.getElementById('ano1').value);
    var ano2 = parseInt(document.getElementById('ano2').value);
    var inpc1 = parseFloat(document.getElementById('inpc1').value);
    var inpc2 = parseFloat(document.getElementById('inpc2').value);

    // Validar si alguno de los campos es NaN o está vacío
    if (isNaN(ano1) || isNaN(ano2) || isNaN(inpc1) || isNaN(inpc2)) {
        document.getElementById('resultado').innerHTML = ''; // No mostrar nada si hay valores inválidos
        return; // Detener la ejecución de la función
    }

    var n = Math.abs(ano2 - ano1);  // Calcular la diferencia de años de manera más compacta
    var divicion = inpc2 / inpc1;
    var raiz = Math.pow(divicion, 1 / n);
    var inpc = (raiz - 1) * 100;
    var inpcdec = inpc.toFixed(2);
    
    document.getElementById('resultado').innerHTML = inpcdec + '%';
}

function fox(){
    var inicio = 48.3076712;
    var final = 62.6924236;
    var div= final/inicio;
    var raizsex = Math.pow(div, 1 / 6);
    var inpcsex = (raizsex-1)*100;
    var inpcdecsex = inpcsex.toFixed(2);
    document.getElementById('presidente').innerHTML= '<h2>Vicente Fox Quesada (2000-2006)</h2><br><a><img src="fox.jpg" alt="Vicente Fox Quesada"  class="imag" ></a><br><p>LA INFLACIÓN FUE DE: <span id="infla"></span></p>';
    document.getElementById('infla').innerHTML= inpcdecsex + '%';
}
function calderon(){
    var inicio = 62.6924236;
    var final = 80.5682433;
    var div= final/inicio;
    var raizsex = Math.pow(div, 1 / 6);
    var inpcsex = (raizsex-1)*100;
    var inpcdecsex = inpcsex.toFixed(2);
    document.getElementById('presidente').innerHTML= '<h2>Felipe Calderón Hinojosa (2006-2012)</h2><br><a><img src="calderon.jpg" alt="Felipe Calderón Hinojosa"  class="imag" ></a><br><p>LA INFLACIÓN FUE DE: <span id="infla"></span></p>';
    document.getElementById('infla').innerHTML= inpcdecsex + '%';
}
function nieto(){
    var inicio = 80.5682433;
    var final = 103.02;
    var div= final/inicio;
    var raizsex = Math.pow(div, 1 / 6);
    var inpcsex = (raizsex-1)*100;
    var inpcdecsex = inpcsex.toFixed(2);
    document.getElementById('presidente').innerHTML= '<h2>Enrique Peña Nieto (2012-2018)</h2><br><a><img src="nieto.jpg" alt="Enrique Peña Nieto"  class="imag" ></a><br><p>LA INFLACIÓN FUE DE: <span id="infla"></span></p>';
    document.getElementById('infla').innerHTML= inpcdecsex + '%';
}
function obrador(){
    var inicio = 103.02;
    var final = 117.308;
    var div= final/inicio;
    var raizsex = Math.pow(div, 1 / 4);
    var inpcsex = (raizsex-1)*100;
    var inpcdecsex = inpcsex.toFixed(2);
    document.getElementById('presidente').innerHTML= '<h2>Andrés Manuel López Obrador (2018-Solo medido hasta el 2021)</h2><br><a><img src="obrador.jpg" alt="Andrés Manuel López Obrador"  class="imag" ></a><br><p>LA INFLACIÓN FUE DE: <span id="infla"></span></p>';
    document.getElementById('infla').innerHTML= inpcdecsex + '%';
}

