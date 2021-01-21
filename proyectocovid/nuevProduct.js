const db = firebase.firestore();


const productoN = document.getElementById("productoN"); 

const saveTask =(producto,descripcion,cantidad,precio) =>
db.collection("productoN").doc().set({
    producto,
    descripcion,
    cantidad,
    precio,
    

});

productoN.addEventListener("submit", async (e) => {
    e.preventDefault();
const  producto = productoN["producto"];
const descripcion = productoN["descripcion"];
const cantidad = productoN["cantidad"];
const precio = productoN["precio"];


  await saveTask(producto.value, 
    descripcion.value, 
    cantidad.value, 
     precio.value);
  productoN.reset();
  producto.focus();
  
});