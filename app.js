var sections = document.querySelectorAll('section'); // selecciona todos los elementos del documento que compla con el criterio y los guarda como variables
var comenzar = document.querySelector('.comenzar'); // selecciona el elementon del documento que compla con el criterio y los guarda en la variable 
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');
var calcular = document.querySelector('.calcular');
var sig = 0; //se decalra una variable 

TweenMax.set('section',{display: 'none'});
TweenMax.set(sections[sig],{display: 'flex'});
TweenMax.from(sections[sig], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();// metodo especifico
  sig++; //se pone para que se haga el evento de uno en uno
  TweenMax.set('section',{display: 'none'}); //esconder todo
  TweenMax.set(sections[sig],{display: 'flex'}); // muestra el div actual
  TweenMax.from(sections[sig], 0.5, {opacity: 0}); // tiempo y forma de la transicion 
}); // precentacion de el formulario

siguiente.forEach(btn => btn.addEventListener('click', function(e){
  e.preventDefault();
  sig++;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[sig],{display: 'flex'});
  TweenMax.from(sections[sig], 0.5, {opacity: 0});
})); // para el boton siguiente 

calcular.addEventListener('click', function(e){
  e.preventDefault();
  var horas = parseInt(document.getElementById('i1').value);
  var dias = parseInt(document.getElementById('i2').value);
  var gastosVivienda = parseInt(document.getElementById('i3').value);
  var gastosLuz = parseInt(document.getElementById('i4').value);
  var gastosTelefono = parseInt(document.getElementById('i5').value);
  var gastosComida = parseInt(document.getElementById('i6').value);
  var gastosCelular = parseInt(document.getElementById('i7').value);
  var gastosTransporte = parseInt(document.getElementById('i8').value);
  var gastosEntretenimiento = parseInt(document.getElementById('i9').value);
  var ganancia = parseInt(document.getElementById('i10').value);
  var jubilacion = parseInt(document.getElementById('i11').value);
  var totalGastos = gastosVivienda + gastosLuz + gastosTelefono + gastosComida + gastosCelular + gastosTransporte + gastosEntretenimiento;
  console.log(totalGastos);
  var gastosMasGanancia = totalGastos + totalGastos * + (ganancia /100);
  console.log(gastosMasGanancia);
  var gastosMasJubilacion = gastosMasGanancia + gastosMasGanancia * + (jubilacion/100);
  var totalHoras = horas * dias * 4;
  var costoPorHora = gastosMasJubilacion / totalHoras;
  document.getElementById('resGT').innerHTML = totalGastos.toFixed(2);
  document.getElementById('resMim').innerHTML = gastosMasJubilacion.toFixed(2);
  document.getElementById('cph').innerHTML = costoPorHora.toFixed(2);
  sig++;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[sig],{display: 'flex'});
  TweenMax.from(sections[sig], 0.5, {opacity: 0});
} );
/*
calcular.addEventListener('click', function(e){
  e.preventDefault();
  var form = document.querySelector('form');
  var totales = document.querySelector('.totales');
  var mim = document.querySelector('.mim');
  var cph = document.querySelector('.cph');// se declaran las variables 
  var totalGastos = +form.gastosVivienda.value + +form.gastosVivienda.value + +form.gastosLuz.value + +form.gastosTelefono.value + +form.gastosComida.value + +form.gastosCelular.value + +form.gastosTransporte.value + +form.gastosEntretenimiento.value;
  var gastosMasGanancia = totalGastos + totalGastos * + (form.ganancia.value /100);
  var gastosMasJubilacion = gastosMasGanancia + gastosMasGanancia * +form.jubilacion.value/100;
  var totalHoras = form.horas.value * form.dias.value * 4;
  var costoPorHora = gastosMasJubilacion / totalHoras;
  totales.innerHTML = `$${totalGastos.toFixed(2)}`;
  mim.innerHTML = `$${gastosMasJubilacion.toFixed(2)}`;
  cph.innerHTML = `$${costoPorHora.toFixed(2)}`;
  sig++;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[sig],{display: 'flex'});
  TweenMax.from(sections[sig], 0.5, {opacity: 0});
}); //evento con todas las formulas para el boton calcular 
*/

reiniciar.addEventListener('click', function(e){
  e.preventDefault();
  sig = 0;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[sig],{display: 'flex'});
  TweenMax.from(sections[sig], 0.5, {opacity: 0});
}); //boton para reiniciar a la pocision 0

//addEventListener comineza un evento mediante alguna accion. 