
 let listMaquillar="";
for(const maquillar of maquillaje){
   listMaquillar += `<option value="${maquillar}">${maquillar}</option>`
      
}

$('#filterProduct').append(`<label name="maquillaje">Maquillaje</label>
<select id="selector_maquillaje" name="maquillaje">${listMaquillar}</select>`)

let listBijou="";
for(const bijou of bijouterie){
   listBijou += `<option value="${bijou}">${bijou}</option>`
      
}

$('#filterProduct').append(`<label name="bijou">Bijouterie</label>
<select id="selector_bijou" name="bijou">${listBijou}</select>`)

let listPerfume="";
for(const perfume of perfumeria){
   listPerfume += `<option value="${perfume}">${perfume}</option>`
      
}

$('#filterProduct').append(`<label name="perfume">Perfumes</label>
<select id="selector_perfume" name="perfume">${listPerfume}</select>`)

$('#filterProduct').append(`<h2>Perfumeria</h2>`)
$('#filterProduct').append(`<h3>Compras </h3><ion-icon name="cart-outline"></ion-icon>
<span class="contador">0</span>`)


let maquillar="";
$('#selector_maquillaje').change((e)=>{
   maquillar = e.target.value
   alert(`${maquillar}`)
});
let bijoute="";
$('#selector_bijou').change((e)=>{
   bijoute = e.target.value
   alert(`${bijoute}`)
});
let perfum="";
$('#selector_perfume').change((e)=>{
   perfum = e.target.value
   alert(`${perfum}`)
});

$('#filterProduct').on('mouseenter', ()=>{
   $("h2").animate({left: '50px'});
   $("h2").animate({left: '10px'});
   
   

})

$('#filterProduct select').on('mouseenter', ()=>{
   $("select").css("background", "lightgrey")
   
   
   

})
   
