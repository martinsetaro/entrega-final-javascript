
listProd = JSON.parse(localStorage.getItem("Productos"));
 imagenes = JSON.parse(localStorage.getItem("imagenesProdBox"));


let carrito=[];
let addCart=[];

for (const producto in listProd){
  $('#boxProductos').append(`<div class="cajas"><h2>${listProd[producto].nombre}</h2>
    <img src="${imagenesProdBox[producto].id}">
    <h4 class="parrafo">${listProd[producto].detalle}</h4>
    <h3>$${listProd[producto].precio}</h3>
    <button class="btn_sale" id ="btnsale${listProd[producto].id}">Agregar</button></div>`)

    $(`#btnsale${listProd[producto].id}`).on('click', function() {
             carrito.push(listProd[producto]);})
           
              
                
                
  }
 
  


  
    
  