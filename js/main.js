

//Lista de productos
class Productos {
    constructor(id,nombre,detalle,cantidad,precio) {
        this.id = id;
        this.nombre= nombre;
        this.detalle= detalle;
        this.cantidad = cantidad;
        this.precio = precio;
    }
 
}

const prodPerfu =[];

prodPerfu.push(new Productos (200,"MISS DIOR","La eau de toilette Miss Dior es una composición olfativa fresca y embriagadora",1, 2000));
prodPerfu.push(new Productos (210,"COCO CHANNEL","Esta fragancia floral oriental tiene una mezcla de limón, bergamota, naranja, rosa, jazmín",1, 3000));
prodPerfu.push(new Productos (220,"FUSION","Nota alta de jazmín, rosa, ylang ylang y lirio del valle.",1, 3000));
prodPerfu.push(new Productos (230,"ROCCO","notas de lavanda y eucalipto, evolucionando en notas corporales con rosa y geranio",1, 1800));
prodPerfu.push(new Productos (240,"COFRE","Eau de Parfum con atomizador de 3,4oz/100ml",1, 1800));
prodPerfu.push(new Productos (250,"OCEAN","Notas medias son sándalo, romero, geranio y cardamomo.",1, 1800));
prodPerfu.push(new Productos (260,"MILENIUM","Una mezcla de manzana, cedro, almizcle, ámbar, loto de agua, hoja verde y notas de mimosa",1, 2000));
prodPerfu.push(new Productos (270,"MILLON","Para todo tipo de piel Fragancia de larga duración Se recomienda para uso casual",1, 2000));


let perfumeria = ["Spray","Colonias","Jabon liquido","Extractos"];
    let maquillaje = ["Rubores","Sombras","Lapiz labial","Delineador"];
    let bijouterie=["Aros","Vinchas","Pulseras","Collares"];

let imagenesProdBox = [{id:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-mejores-perfumes-miss-dior-1636556379.png?crop=1xw:1xh;center,top&resize=480:*"},
{id:"https://m.media-amazon.com/images/I/71Cm7nHCuNL._SY355_.jpg"},
{id:"https://fimgs.net/mdimg/perfume/375x500.25867.jpg"},
{id:"https://fimgs.net/mdimg/perfume/375x500.39066.jpg"},
{id:"https://d2jsg6pismtyd7.cloudfront.net/products/6058/large/8411061927144-2.jpg?1548772989"},
{id:"https://m.media-amazon.com/images/I/515gb9ViMyL._SL1024_.jpg"},
{id:"https://www.1parfum.es/images/img/FenzMilleniumMen.jpg"},
{id:"https://static.chemistwarehouse.com.au/ams/media/pi/62212/F2D_800.jpg"},
];



//Local storage de productos
localStorage.setItem("perfumeria",perfumeria);
localStorage.setItem("maquillaje",maquillaje);
localStorage.setItem("bijouterie",bijouterie);
localStorage.setItem("Productos",JSON.stringify(prodPerfu));
localStorage.setItem("imagenes",JSON.stringify(imagenesProdBox));

    

   

   
