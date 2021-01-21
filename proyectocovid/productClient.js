const db = firebase.firestore(); 
const taskcontainer = document.getElementById('tasks-container');


const getTask = () => db.collection('productoN').get(); 

window.addEventListener('DOMContentLoaded', async (e) => {
 const querySnapshot = await getTask( );
 querySnapshot.forEach(doc =>{
     console.log(doc.data())

     const task = doc.data();
taskcontainer.innerHTML += `<div class="card card-body mt-2 border-primary">
<h3>${task.producto}</h3>
<p>${task.descripcion}</p>
<p>${task.cantidad}</p>
<p>${task.precio}</p>
</div>`


 })
})