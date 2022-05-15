
listProd = JSON.parse(localStorage.getItem("Productos"));
 imagenes = JSON.parse(localStorage.getItem("imagenesProdBox"));
let boxProductos = document.getElementById('boxProductos');
let contador = document.querySelector('.contador');


let carrito=[];
let productos=[];


$('#boxProductos').on('click',function(e){
  let box= e.target.closest('.cajas')
  let nombre = box.querySelector('.item_titulo').textContent;
  let imagen = box.querySelector('.item_imagen').src;
  let precio = box.querySelector('.parrafo').textContent;
  let cantidad=1;


  productos ={nombre,imagen,precio,cantidad};

    buscar(productos.nombre)
agregarProductos(nombre,imagen,precio,cantidad)


let largo = carrito.length;
counter(largo);

})

listProd.forEach( item => {

 
$('#boxProductos').append((`
<div class='cajas'>
<h2 class="item_titulo">${item.nombre}</h2>
<img  class="item_imagen"src="https://m.media-amazon.com/images/I/71Cm7nHCuNL._SY355_.jpg"/>
<h3 class="item_detalle">${item.detalle}</h3>
<p class='parrafo'> ${item.precio}</p>
<button class='btn_sale' id=${item.id}'>Agregar Carrito</button>
</div>



`))


})

function buscar(nombre){
  return carrito.find(item => item.nombre === nombre)
  
}
function agregarProductos(nombre,imagen,precio,cantidad){
if(buscar(productos.nombre)){
  for(const carro of carrito){
    if(carro.nombre == productos.nombre){
      carro.cantidad= carro.cantidad+1;
      return
    }
   
  }
}else {
  carrito.push({nombre,imagen,precio,cantidad});
  return;
}


}
function counter(contenido){
  contador.textContent=contenido;
 console.log(contador.textContent)
}

































  
    
  