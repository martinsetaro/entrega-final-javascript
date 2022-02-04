modal = document.getElementById("modal_id");
bienvenido = document.getElementById("bienvenido");
btn_newsLet = document.getElementById("btn_newsLet");
 modal_newsLet = document.getElementById("modal_newsLet");
 inputNombre = document.getElementById("inputNombre");


titulo_modal = document.createElement("h1");
sub_titulo=document.createElement("h3");
entrada = document.createElement("input");
entrada.setAttribute("type","text");
entrada.setAttribute("placeholder","Ingrese aqui su nombre");
entrada.id="entrada_input";
boton = document.createElement("button");
boton.id="btn";



titulo_modal.innerHTML="Bienvenido/a a Perfumeria y Accesorios";
sub_titulo.innerHTML="Valle Verde";
boton.innerHTML ="ENVIAR";

modal.appendChild(titulo_modal);
modal.appendChild(sub_titulo);
modal.appendChild(entrada);
modal.appendChild(boton);

modal.onclick = (e)=>{
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

boton.onclick = () =>{
    if(entrada.value == ""){
        bienvenido.innerHTML = "Bienvenido invitado";
        modal.style.display = "none";
    }else {  bienvenido.innerHTML=`Bienvenido ${entrada.value}`;
    modal.style.display = "none";}
}

$('#modal_id').hide();
$('#modal_id').show(1000);

btn_newsLet.addEventListener("click", function(){
    if(inputNombre.value != ""){
    modal_newsLet.style.display="block";
    inputNombre.value =" ";
    $("#modal_newsLet").hide();
$("#modal_newsLet").show(300);}

})

modal_newsLet.addEventListener("click",function(){
    modal_newsLet.style.display="none";
})

btn_newsLet.addEventListener("click",function(e){
    e.target.value
    console.log(e.target.value)
})









