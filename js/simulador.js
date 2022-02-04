title = document.createElement("h1");
boxSimulador = document.getElementById("boxSimulador");
resultados = document.createElement("p");
select_tarjeta = document.createElement("select");
select_cuotas = document.createElement("select");
btn_calcular = document.createElement("button");
formulario = document.createElement("form");
monto = document.createElement("input");
titulo_monto=document.createElement("label");
titulo_tarjeta=document.createElement("label");
titulo_cuota=document.createElement("label");




select_tarjeta.onchange = (e) => {
   const opcionTarjeta = e.target.value
   console.log(opcionTarjeta);}


select_cuotas.onchange = (e) => {
    const opcionCuota = e.target.value
    console.log(opcionCuota);
    
}



btn_calcular.onclick = function(e){
    e.preventDefault();
    let total1 = (parseInt(monto.value) * parseInt(select_tarjeta.value))/100;
    let total2= parseInt(monto.value) + total1;
    let total3 = Math.round(total2 / parseInt(select_cuotas.value));
    resultados.innerHTML = `El valor de la cuota total es de $ <span style="color:navy">${total3}</span> pesos.`
                           
}
title.innerHTML ="Simula tu compra en cuotas";

monto.setAttribute("type","number");
monto.setAttribute("placeholder","Ingrese aqui");
formulario.id = "formu";
btn_calcular.innerHTML="Calcular";


titulo_cuota.innerHTML = "Seleccione la cantidad de cuotas";
titulo_tarjeta.innerHTML="Seleccione su tarjeta emisora";
titulo_monto.innerHTML="Ingrese su monto";




select_tarjeta.innerHTML =`<option value="10">Visa - int 10%</option>
                          <option value="12">MasterCard - int 12%</option>
                         <option value="8">American Express - int 8</option>
                          <option value="11">Dinner - int 11%</option>`;

select_cuotas.innerHTML =`<option value="1">1 cuota</option>
                          <option value="2">2 cuotas</option>
                         <option value="3">3 cuotas</option>
                           <option value="6">6 cuotas</option>
                            <option value="9">9 cuotas</option>
                         <option value="12">12 cuotas</option>`;  



                          
boxSimulador.appendChild(title);
formulario.appendChild(titulo_monto);
formulario.appendChild(monto);
formulario.appendChild(titulo_tarjeta);
formulario.appendChild(select_tarjeta);
formulario.appendChild(titulo_cuota);
formulario.appendChild(select_cuotas);
formulario.appendChild(btn_calcular);
formulario.appendChild(resultados);
boxSimulador.appendChild(formulario);

