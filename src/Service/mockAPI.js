let product = [
    {"id": 1, nombre:'Palazo Afra', precio: 6050, color: "Verde", talle: "M", categoria:'MUJERES', cantidad:0, img: '/assets/pantalovestirmujer.png', stock:5, novedades: true},
    {"id":2, nombre:'Tapado Himalaya', precio:37485, color: "Amarillo", talle: "S", categoria: 'MUJERES', cantidad: 0, img: "/assets/tapado.jpeg", stock:5},
    {"id":3, nombre:"Short Lila", precio:1299, color:"Azul", talle:"L", categoria:"NIÑAS", cantidad:0, img:"/assets/shortLila.jpg", stock:5},
    {"id":4, nombre:"Mono Perla", precio:1229, color:"Rojo", talle:"S", categoria:"NIÑAS", cantidad:0, img:"/assets/monoPerla.jpg", stock:5},
    {"id":5, nombre:"Remera Perla", precio:2449, color:"Azul", talle:"M", categoria:"NIÑAS", cantidad:0, img:"/assets/remeraPerla.jpg", stock:5},
    {"id":6, nombre:"Short Wood", precio:999, color:"Azul", talle:"S", categoria:"NIÑAS", cantidad:0, img:"/assets/shortWood.jpg", stock:5},
    {"id":7, nombre:"Short Yenny", precio:1799, color:"Marron", talle:"M", categoria:"NIÑAS", cantidad:0, img:"/assets/shortJenny.jpg", stock:5},
    {"id":8, nombre:"Short Money", precio:1079, color:"Marron", talle:"S", categoria:"NIÑAS", cantidad:0, img:"/assets/shortMonet.jpg", stock:5},
    {"id":9, nombre:"Short Guanacaste", precio:1079, color:"Verde", talle:"M", categoria:"NIÑAS", cantidad:0, img:"/assets/shortGuanacaste.jpg", stock:5},
    {"id":10, nombre:"Calza Indigo ", precio:699, color:"Amarillo", talle:"S", categoria:"NIÑAS", cantidad:0, img:"/assets/calzaIndigo.jpg", stock:5},
    {"id":11, nombre:"Joggin Londres", precio:1289, color:"Marron", talle:"M", categoria:"NIÑAS", cantidad:0, img:"/assets/joggingLondres.jpg", stock:5},
    {"id":12, nombre:"Jean Martina", precio:2149, color:"Azul", talle:"M", categoria:"NIÑAS", cantidad:0, img:"/assets/jeanMartina.jpg", stock:5},
    {"id":13, nombre:"Calza Hanna", precio:999, color:"Azul", talle:"L", categoria:"NIÑAS", cantidad:0, img:"/assets/calzaHanna.jpg", stock:5},
    {"id":14, nombre:"Jean Florence", precio:1899, color:"Marron", talle:"M", categoria:"NIÑAS", cantidad:0, img:"/assets/jeanFlorence.jpg", stock:5},
    {"id":15, nombre:"Vestido Daila", precio:8990, color:"Negro", talle:"M", categoria:'MUJERES', cantidad:0, img:"/assets/vestidoDaila.png", stock:5},
    {"id":16, nombre:"Short Cuero", precio:12990, color:"Negro", talle:"S", categoria:'MUJERES', cantidad:0, img:"/assets/shortSmilCuero.png", stock:5},
    {"id":17, nombre:"Palazo", precio:19890, color:"Marron", talle:"M", categoria:'MUJERES', cantidad:0, img:"/assets/pantalovestirmujer.png", stock:5},
    {"id":18, nombre:"Chaqueta Gabardina", precio:0, color:"Marron", talle:"M", categoria:"novedades", cantidad:0, img:"/assets/novedades3.png", stock:0},
    {"id":19, nombre:"Jean Oxford", precio:0, color:"gris", talle:"M", categoria:"novedades", cantidad:0, img:"/assets/novedades2.png", stock:0},
    {"id":20, nombre:"Jean Engomado", precio:0, color:"Negro2", talle:"M", categoria:"novedades", cantidad:0, img:"/assets/novedades1.png", stock:0},
]

export default function getItems(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(product)
        }, 2000)     
    })
}

export function getItemUnico(idItem){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let buscarItem = product.find(item=>(item.id == idItem))
            resolve(buscarItem)
            }, 2000)
        })     
    }

export function getItemCategory(cat){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let buscarItem = product.filter(item=>(item.categoria == cat))
            resolve(buscarItem)
        }, 2000)
    })    
}
