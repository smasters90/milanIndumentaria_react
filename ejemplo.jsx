//OPERADOR SPRED

let usuario = {
    name: 'sebastian',
    age: 32
}

let user;
user.name = 'pepe'

//los objetos se copian x referencia por lo que al cambiar el nombre de un objeto se cambia en el otro tambien
//ambos objetos (user y usuario) van a tener de nombre "pepe"

//Con el operador spread lo que hacemos el volcar las propiedades del objeto en el nuevo objeto creando asi otro objeto.
//Osea: creamos un nuevo objeto(usuarioNuevo) con todas las propeidades del objeto usuario.

let usuarioNuevo = {...usuario} //esto se usa para volcar un objeto

//Tambien funciona con array

function suma (a,b,c){
    return a+b+c
}

let arrayNum = [10,5,20];
suma(... arrayNum);

//al usar el operador spread vuelvo los numeros del array entonces a = 10 b = 5 y c = 20
//si no usara spread a va a ser igual a todo el array y b  y c van a ser undefined
/////////////////////////////////////////////////////////////////////////////////////////////////

//Componentes:
//Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza
//de forma aislada.
//Luego unos componentes se apoyaran en otros para solucionar problemas mayores y al final la app sera un conjunto de componentes


//Podemos tener 2 componentes dentro de uno: estas function estan dentro de un componenete.jsx
function Header(){
    return(
        <header className = "app-coder">
            <Logo/>
            <h1> titulo</h1>
        </header>
    );
}

function Logo(){
    return <h1>Mi tienda</h1>
}
//Si quisiera llamar a Logo que entra en Componente.jsx, desde la App.jsx deberia hacer el import asi: import {Logo} from 'ruta'


//A las funciones componenetes le podemos pasar parametros llamados "props":
function Logo(props){ //en la funcion componenete siempre pondremos props asi sea 1 o muchos parametros
    return <h1>Mi tienda</h1>
}

//EJEMPLO:
//CARPETA Products y dentro de ella tenemos 2 archivos .jsx: Products y Card
//props es un objeto


//Y el otro .jsx:
function Products(){
    // ahora a cada componenete card le pasamos un objeto. Este objeto props tiene las props (title, price, description)
    return(
        <div>                                                   
            <h1>Productos</h1>
            <div className="main container">
                <Card title="Producto 1" price="$100" description="El mejor producto"/> 
                <Card title="Producto 2" price="$300" description="El peor producto" />
                <Card />
                <Card />
            </div>
        </div>
    )
    //EN ESTE EJ PASAMOS TODAS PROPIEDADES STRING PERO PODEMOS PASAR TMB NUMEROS. PARA ESO LO DEBEMOS PASAR ASI:
    // price={400}
}

function Card(props){
    return(
        <div className="card">
            <div className = "img-card">
                <img></img>
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>
    )
    //desde products pasamos el objeto props compuesto por propiedades (title, price y description)
    //luego en card llamamos a las propiedades
    
}
export default Card;

//OTRA OPCION PARA ESCRIBIR LO DE ARRIBA SERIA:
function Products(){
    return(
        <div>                                                   
            <h1>Productos</h1>
            <div className="main container">
                <Card title="Producto 1" price="$100" description="El mejor producto"/> 
                <Card title="Producto 2" price="$300" description="El peor producto" />
                <Card />
                <Card />
            </div>
        </div>
    )

}

function Card({title, price, description}){ // directamente escribimos el objeto anonimo y en las variables solo llamamos a las propiedades

    return(
        <div className="card">
            <div className = "img-card">
                <img></img>
            </div>
            <div className="card-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
    )

}


//Estado de un componente: objeto que almacena valores o propiedades que controlan el comportamiento del componente.
//Cada vez que el estado cambia, el componente vuelve a ser renderizado

// Diferencia con las props, es que las props se pasa al componente (como los parametros) mientras que el state
//se administra dentro del componente(como las variables declaradas dentro de una funcion)

//EJ rapido de children
//archivo Button.jsx

function Button({color, children}){
    return(
        <button>
            {children}
        </button>
    )
}


//archivo flexWrapper.jsx

function FlexWrapper(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

//archivo ListContainer

function ListContainer(){
    <FlexWrapper> 
        <Button> Click me</Button>
    </FlexWrapper>
}
//En este ejemplo FlexWrapper tendra como props el button q a la vez es el children q esta contenido dentro.
//Entonces se renderiza un div con el boton q a la vez al llamar al boton se renderiza un boton e imprime su children, que 
//en este caso es lo q lleva dentro que es "clickme"


//Aclaracion: todo lo q esta dentro de una etiqueta llega como props.children


//Eventos en React:
function Button({   children}){
    let color = "red";
    function handleClick(){
        alert("clickeado");
        color = "blue"
    }
    
    return(
        <button onClick = {handleClick}> 
            {children}
        </button>
    )
}
import React from "react";
//cuando le demos click al boton, llamamos a la function click q nos tira un alert. se una llaves para indicar q es REACT
//la funcion se la llama sin parentesis xq sino la va a llamar y ejecutar cada vez q corra el dom x cada boton q haya

//ESTADOS:
//Hook: funciones que react nos brinda q nos permite traer funcionalidad extra a nuestros componentes
//Hook de useState  Este hook se importa:
import {useState} from React;

//Los hook SIMPRE se deben ejecutar x lo q no pueden ir dentro de condicionales
//Siguiendo el mismo ejemplo, si quisieramos cambiar el color del boton al hacer click:

function Button({children}){
    let [color, setColor] = useState("red") //creo una variable array q tiene 2 valores: 1) la variable q quiero modificar
    //y 2) una funcion que nos va a permitir cambiar dicha variable. Ademas usamos "useState" para asignar el valor inicial
    // de color (en este caso rojo)

    function handleClick(){
        setColor = "blue" //luego usamos la funcion para cambiar el valor. En este caso lo use dentro de la funcion click
        // por lo q cada vez q le de click a un boton que sea de la etiqueta Button, cambiara el estado.
    }
    
    return(
        <button onClick = {handleClick}> 
            {children}
        </button>
    )
}




//En el archivo donde llamamos a ItemCount

<ItemCount initial={1} stock={10}/> // se pasa x parametro los valores con lo que queremos que empiecen o tengan tope.


//Componente ItemCount.jsx
function ItemCount(props){
    const [cantidad, setCantidad] = React.useState(props.initial)

    function handleCLickMas(){
        setCantidad(cantidad + 1)
    }
    function handleCLickMenos(){
        setCantidad(cantidad - 1)
    }
    return(
        <div>
            <button onClick = {handleCLickMas}>+</button>
            <span>{cantidad}</span>
            <button onClick = {handleCLickMenos}>-</button>
        </div>
    )
}


//Anteriormente realizamos la asincronia a traves de callBacks: una funcion que tiene un dato y por parametro le pasamos
//otra funcion. Esto es: se ejecuta esa primera funcion y cuando termine realiza la segunda. Ej:
firsTask(data, function(err, result){
    funcion
})

//Promise: objeto que permite representar y seguir el ciclo de vida/operacion
//Estados posibles: pending => fullfilled o rejected

function getNombreUsuario(){
    return new Promise((resolve, reject)=>{//creamos una promesa para que ejecute si o si el codigo y devuelva algo la funcion. Sino queda en undefined nombreUsuario
                                           //Creamos una callBack en donde tenemos una funcion y datos de esa promise  
        resolve("Sebastian"); //en resolve ponemos lo que queremos que devuelva la funcion
    })  
}
console.log("app iniciada");

let usuarioo = "";

getNombreUsuario()
    .then((response)=>{ // ahora usamos un metodo (then) que lo q hace es hacer un callback que lo q hace es
    // "ok una vez que se resuelva la promesa, esa resolucion (resolve) se guarda en "response" (en este caso se guarda sebastian en "response") "
        usuarioo = response;
        console.log(`tu nombre de usuario es ${nombreUsuario}`);
    });



//Ejemplo de Try and Catch: Se usa para manejo de errores. Siguiendo el mismo ejemplo:
function getNombreUsuario(){
    return new Promise((resolve, reject)=>{
        let error = true;
        if(error){
            reject(new Error("Error en la promise")) //usamos reject y dentro de el llamamos al obj Error
        }else{
            resolve("Sebastian");
        }
         
    })  
}


getNombreUsuario()
    .then((response)=>{ 
        usuarioo = response;
        console.log(`tu nombre de usuario es ${nombreUsuario}`);
    })
    .catch(()=>{
        console.log(error) //Luego "agarramos" ese error y lo "manejamos" (Tiramos un console.log del objeto Error)
    })


//EN RESUMEN SI ENTRA AL RESOLVE, LUEGO LLAMA A .THEN CASO CONTRARIO SI ENTRA AL REJECT, LUEGO LLAMA AL .CATCH

//SUGAR SINTAX DE LO ANTERIOR ---> async y await
async function autenticarUsuario(){ // creamos una funcion para colocar nuestra funcion, pero esta funcion le decimos q es asyncrona
    let estadoUsuario = await getNombreUsuario() //luego le decimos q antes de asignar, espere a q se resuelva la funcion getNombreUsuario
    console.log(estadoUsuario)
}

autenticarUsuario(); //llamamos a la funcion

//Para el manejo de errores con esta sintaxis usamos try and catch:

async function autenticarUsuario(){ 
    try{
        let estadoUsuario = await getNombreUsuario() 
        console.log(estadoUsuario)
    }
    catch{
        console.log("error")
    }
}

///////////////////////////////////////
//1) Creamos una carpeta en components llamada services
//2) creamos un mockAPi.js y cargamos todos los productos en un array de objetos
//3) Creamos una funcion promesa en donde enviamos los datos:

export function getItems(){
    return new Promise((resolve, reject)=>{
        resolve(data) //data seria el nombre del array de objetos del q hablamos en el punto 2
    })
}
//4) En el itemListContainer definimos el estado
function itemListContainer(){
    let [data, setData] = useState([]) //asignamos un array vacio para luego llenarlo

    //tenemos q importar useEfect
    useEffect(()=>{//guardamos el getItem en un efecto para que el codigo no se repita constantemente y los items se traen 1 sola vez
        getItems().then((respuestaDatos)=>{
            setData(respuestaDatos)
        })
    },[])//Este callBack se ejecuta en el 1er montaje del componente. Si despues hay cambios de estado no quiero que se vuelva a ejecutar
    //Es un efecto que lo vamos a ejecutar en el primer montaje. Con el array vacio le decimos q lo ejecute cuando carga el componente

    return(
        <div>
            <div>
                {data.map((item)=>{
                    return(
                        <Producto
                            key = {item.id}
                            precio = {item.precio}
                            titulo = {item.titulo}
                            img = {item.img}
                        />
                    )
                })

                }
            </div>
        </div>
    )
}





///////////////ROUTING Y NAVEGACION////////////////////////
//1)Configuramos nuestro Routing
function App() {

    return (
        <>
            <NavBar />
            <BrowserRouter> {/* Colocamos esta etiqueta en todo lo que queremos que tenga la funcionalidad de navegavilidad*/ }
        
                <Routes>{/*//2) Definimos nuestras rutas */}
                    <Route path="/" element={<ItemListContainer />}/> {/*Este componente route tiene 2 "props". Un "path" q contiene la url
                    con la cual nosotros accedemos al componenete que definimos en el 2do prop */}
                    <Route path="/indumentaria" element={<ItemDetailContainer />} />
                    <Route path="*" elemento={<h1>Esta Ruta no existe</h1>}/> {/*Se usa la ruta x defecto para errores*/}
                </Routes>
                <Link to="/indumentaria">Mujer</Link> {/*Una vez definidas o declaradas las rutas, las usamos a traves del
                elemento "Link" en donde usamos la prop "to" para indicar la ruta, y dentro de la etiqueta ponemos el nombre
                con el que va a aparecer en pantalla
                Se puede realizar un UL con varios li donde dentro de ellos esten los link para el NavBar*/}
            
            </BrowserRouter>
         </>
    
    );
  }

{/*En cada boton de las cart deberiamos definir un link para dicho boton. Podemos encerrar el boton dentro de un link
y en la prop "to" le pasamos la url ej: "/indumentaria/props.id    Simepre tener en cuenta que el id se lo tenemos que
pasar como parametro en la funcion de la card"


Ahora como vamos a pasarle DINAMICAMENTE un parametro al link (/indumentaria/props.id), la ruta definida en ese 
link debe ser DINAMICA.

Entonces en la ROUTE, declarada tenemos que tomar ese parametro dinamico (props.id) de alguna manera entonces le ponemos
: y el nombre q queremos q haga referencia al valor que pasamos. EJ: */}

<Route path="/indumentaria/:id" element={<ItemDetailContainer />} />


{/*Ahora debemos hacer dinamico tambien los datos que le pasamos a las funciones. Por ej en getItem, le pasamos estaticamente
el valor id del dato que necesitamos. Para realizarlo dinamico hacemos lo siguiente: Vamos a utilizar un hook llamado
 useParams*/}


function ItemDetailContainer() {
    let [product, setProduct] = useState({})

    const id = useParams().id; //useParams devuelve un objeto(este objeto se crea en la ruta con el parametro que le pasamos)
    //en este caso /indumentaria/props.id  Por ende useParams es un objeto q tiene como parametro id.

    useEffect(()=>{
      getItemUnico(id).then((respuestaDatos)=>{ //aca en  getItemUnico(1) vamos a cambiar ese valor estatico "1" por el parametro
          setProduct(respuestaDatos)
      })
    },[])

  return (
    <div className = "d-flex flex-wrap justify-content-evenly">
      <ItemDetail
      nombre = {product.nombre}
      precio = {product.precio}
      color = {product.color}
      talle = {product.talle}
      img = {product.img}
      categoria = {product.categoria}
      stock = {product.stock}
      />
    </div>
  )
}

//Para crear las categorias, debemos crear 1 archivo categoria que sea igual para todos y no crear muchos components iguales

<>
<BrowserRouter> 

    <Routes>
        <Route path="/" element={<ItemListContainer />}/> 
        <Route path="/indumentaria" element={<ItemDetailContainer />} />
        <Route path="*" elemento={<h1>Esta Ruta no existe</h1>}/> 
        <Route path ="/categoria/:cat"/>{/*En este caso creamos */}
    </Routes>

</BrowserRouter>
</>;




////////////////////EVENTOS///////////////////////////

//A diferencia de JS, en React anotamos los eventos de la siguiente manera:
 <button onClick={funcion}> Enviar</button> //el evento onClick usa camelCase, ademas la funcion va entre llaves
 // y no se colocan los () de la funcion xq sino se ejecutaria constantemente
 //En React trabajamos con eventos en linea o inLine


 //En este ejemplo tenemos un input donde queermos que no se ingrese ninguna vocal:

 //componenete InputName.jsx

 export default function InputName(props){
    function handleInput(e){ //este event (objeto) no hace falta declararlo
        let target = e.target; //trae la propiedad target del e que contiene el valor del value de cada letra del input
        let value = e.target.value; //aca asignamos a la variable value, cada letra del input
        //Ahora, queremos saber si "value" es una vocal o una consonante

        if(
            (value.includes("a") || value.includes("e") || value.includes("i") || value.includes("o") ||value.includes("u"))
        )
    }

    return(
    <form clasName="container">
        <div className="form-group">
            <label>
                <small> Ingresa solo consonantes</small>
            </label>
            <input
            onChange ={handleInput} // usamos el evento onChange q estara escuchando cada cambio de ese input y con cada
            //cambio, ejecutara la funcion "handleInput"
            type="ejemplo"
            className="form-control"
            id="ejemplo"
            placeholder="ingresa el texto"
            />
        </div>
        <div>
            <button>
                Enviar
            </button>
        </div>
    </form>
    );
 }

 ////////////////ENVENTOS ORIENTADOS A COMPONENTES///////////////////
 //Hasta recien vimos eventos sobre etiquetas del DOM o sobre etiquetas html, pero que pasa si queresmo usar esos eventos en COMPONENTES
 //EJ: en el coponente ItemCount

 function ItemCount{
    function handleSubStract(){
        "funcion q resta"
    }
    function handleAdd(){
        "funcion q suma"
    }
    return(
        <div>
            <Button onClick={handleSubStract}>+</Button> {/*Como no es una etiqueta html, ese onClick es una simple PROPS que vamos a pasar 
            para que se pueda ejecutar en una etiqueta del DOM*/}
            <span></span>
            <Button onClick={handleAdd}>-</Button>
        </div>
    )
 }

 //Componente Button
 function Button(props){

    return(
        <button onClick ={props.onClick}> {/*recordemos que con el "props." accedemos al parametro del Componenete (en este caso es el
            onClick del Button. Ese componenete llama a la funcion handleAdd, por lo que cada vez que damos click en la etiqueta
            button llamamos a la prop onClick del componenete Button, que a la vez llama a la funcion handleAdd)*/}

            {props.children} {/*Aca simplemente mostramos el parametro children, que es el interior de lo que tiene el componente */}
        </button>
    )
 }




 ////////////////////////// CONTEXT ////////////////////////
 //Proporciona una forma de compartir VALORES entre COMPONENETES sin tener que pasar explicitamente una PROP
 //a traves de cada nivel.

 //En el ejemplo vamos a tener un Form de LogIn y un footer que no se comunican entre si. Lo que queremos es que el 
 //usuario inicie sesion y queden esos datos guardados asi los usa el footer.

 //App
 function App(){
    return(
        <>
            <LogInForm />
            <Footer />
        </>
        
    )
 }

 //1) Creamos un archivo userContext.jsx (Se crea en minuscula porque no es un componenete)
 //Luego importamos e inicializamos nuestro CreateContext

 //userContext
 import {createContext} from React //Importamos la funcion de react llamada createContext que nos va a crear el Context

const userContext = createContext({username: "anonimo", logedIn: false}) //podemos pasarle valor por defecto

//2) Definir el provider en App

 function App(){
    return(
        <>
            <UserContextProvider> {/*Definimos el provider para que todos los componentes tengan acceso al CONTEXT*/}
                <LogInForm />
                <Footer />
            </UserContextProvider>            
        </>
        //El Provider provee funcionalidad de todo lo q esta en el context a los componenetes q estan dentro de el.
    )
 }

 //Luego en el userContext:
 import {createContext} from React 

const userContext = createContext({username: "anonimo", logedIn: false}) 

export default function UserContextProvider(props){
    return(//Tenemos que sacar del "userContext" la propiedad "Provider"
        <userContext.Provider> {/*Esto se va a renderizar en App*/}
            {props.children}
        </userContext.Provider>
    )
//En resumen basicamente creamos un context donde todos van a poder acceder con lo q quiero q tenga. Luego usamos el 
//provider de ese context que nos va a rederizar los props del context 
}
export {userContext}
//Tenemos q exportar tanto el userContext como el Provider (componente q vamos a renderizar)


//Footer
//Ahora para poder acceder a ese context desde otro componente, primero debemos importarlo

import {userContext} from "tu ruta"
import {useContext} from 'react' //Usamos este hook para traer la funcionalidad del Context a este componente.

function Footer(){
    //Nos vamos a enganchar a nuestro context(userContext) a traves del "gancho" que nos provee react(useContext)
    const miContext = useContext(userContext);

    return(
        <span> Mi Footer {miContext.username}</span> //Usamos las prop del context
    )
}

//3) Le pasamos al Provider el "value" para los componentes que consuman el context

import {createContext} from React 

const userContext = createContext({username: "anonimo", logedIn: false}) 

export default function UserContextProvider(props){
    return(
        <userContext.Provider value={{logedIn: false, username: "anonimo" }}>  {/*estos datos se pasan en forma de objeto, por eso las 2 llaves*/}
            {props.children} {/*Los children, son los hijos del UserContextProvider que usamos en app, osea, los componentes
            Footer y LogInForm*/}
        </userContext.Provider>
    )
}
export {userContext}


//4) Para realizar esto dinamico y poner re-renderizar, vamos a usar un estado:
//Creamos el estado, e incializamos la variable username y la modificamos con el set cuando renderizamos
import {createContext, useState} from React 

const userContext = createContext({username: "anonimo", logedIn: false}) 

export default function UserContextProvider(props){
    const [username, setUsername] = useState("anonimo")

    function autenticarUsuario(name){
        setUsername(name)
    }

    return(
        <userContext.Provider value={
            {   
                logedIn: false,
                username: username,
                autenticarUsuario
            }
        } >
        </userContext.Provider>
    )
}
export {userContext}


////////////////////////////////////////////////////////////////////////////////////////////

//MANEJO DE ERRORES:

//ej de carga de productos

//En el mockApi, en las funciones donde devolvemos un producto o varios productos debemos usar un if para usar un rejected:

export function getItemCategory(cat){
    return new Promise((resolve, reject)=>{
        let buscarItem = product.filter((item)=>{
            returnitem.categoria == cat})
        
        setTimeout(()=>{
          if(buscarItem) resolve (buscarItem);
          else reject (new Error("Item no encontrado"));
        }, 2000)
    })    
}
//Si encuentra el item, lo devuelve. Si no lo encuentra, "buscarItem" queda undefined y x ende da reject 

function ItemDetailContainer() {
    let [product, setProduct] = useState({})
    let [error, setError] = useState(false)
    const {id} = useParams();

    useEffect(()=>{
      getItemUnico(id)
      .then((respuestaDatos)=>{setProduct(respuestaDatos)}) //Si se encuentra el item llega aca
      .catch((errormsg) => {//Si no se encuentra el item llega aca
        setError(errormsg.message); //generamos un nuevo estado donde guardamos este error
      })
    },[])

    if(!product.title){ //Si no se encuentra el titulo del prod entones: hacemos un return (esto hace terminar la funcion y no ejecuta el ultimo div)
        return (
            <>
                {error ? ( //Si la func del mockApi, devuelve un error xq no enconrto nada tira el mensaje de error
                    <div>
                        <h2> Error obteniendo los datos</h2>
                        <p>{error}</p>
                    </div>
                    )
                : ( //Sino, si se encontro pero tarda en cargar, muestra el cargando
                    <h3>Cargando...</h3>
                )}
                )   
            </>
        )
    }

    <div className = "d-flex flex-wrap justify-content-evenly">
                    <ItemDetail
                    nombre = {product.nombre}
                    precio = {product.precio}
                    color = {product.color}
                    talle = {product.talle}
                    img = {product.img}
                    categoria = {product.categoria}
                    stock = {product.stock}
                    />
                    </div> 
 
}