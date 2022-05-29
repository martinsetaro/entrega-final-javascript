
listProd = JSON.parse(localStorage.getItem("Productos"));
 imagenes = JSON.parse(localStorage.getItem("imagenesProdBox"));
let boxProductos = document.getElementById('boxProductos');
let contador = document.querySelector('.contador');





let carrito=[];
let productos=[];



listProd.forEach( item => { 
$('#boxProductos').append((`
<div class='cajas'>
<h2 class="item_titulo">${item.nombre}</h2>
<img  class="item_imagen"src="https://m.media-amazon.com/images/I/71Cm7nHCuNL._SY355_.jpg"/>
<h3 class="item_detalle">${item.detalle}</h3>
<p class='item_precio'> ${item.precio}</p>
<button class='btn_sale'>Agregar Carrito</button>
</div>

`))

})

boxProductos.addEventListener('click',(e)=>{
  let btn = e.target.closest('.btn_sale')
  let btn2 = btn.parentElement;
  let titulo = btn2.querySelector('.item_titulo').textContent;
  let imagen = btn2.querySelector('.item_imagen').src;
  let precio = Number(btn2.querySelector('.item_precio').textContent);
  let cantidad = 1;

  productos={titulo,imagen,precio,cantidad}

  buscar(productos.titulo)
  addCarrito(productos);
  

  

  
})


function buscar(id){
 return carrito.find(item => item.titulo == id);

}

function addCarrito(item,cantidad){
if(buscar(item.titulo)){
    for(const carro of carrito){
      carro.cantidad = carro.cantidad + 1;
      return
    }

     

}else 
{
  carrito.push(productos)
  contador.innerHTML = `${carrito.length}`
  contenedorItems(productos)
  
}


}


function contenedorItems(carr){
  
   
    $('.itemCarritos').append((`<div class="itemAgregados">
    <img src=${carr.imagen} alt="img" title="img"/>
    <h2>${carr.titulo}</h2>
    <input class="input_cantidad" min="1" value="1"/>
    <h3>$ ${carr.precio}</h3>
    <button class="btn_delete">X</button>
    </div>`))
return


}









 
  
  

 


  



  






































  
    
  