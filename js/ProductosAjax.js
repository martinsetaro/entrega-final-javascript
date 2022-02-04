const URLJSON = "/js/lineaDeMaquillaje.json"






$('#productosAjax').prepend(`<button id="btn_information" class="btn_info_news">Conoce las novedades</button>`)


$('#btn_information').click(()=>{
    $.getJSON(URLJSON, function(respuesta,estado){
        if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos){
                $('#productosAjax').append(`<div class="novedades">
                <h2>${dato.name}</h2>
                <img src="${dato.image_link}">
                <p>${dato.description}</p>
                <h4>$${dato.price} ${dato.currency}</h4></div>`)
                
            }}})})   
    
    
            

