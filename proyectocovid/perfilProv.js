const db = firebase.firestore(); 
const taskcontainer = document.getElementById('tasks-container');


const getTask = () => db.collection('productoN').get(); 

const deleteTask = id => db.collection('productoN').doc(id).delete();



window.addEventListener('DOMContentLoaded', async (e) => {
 const querySnapshot = await getTask( );
 querySnapshot.forEach(doc =>{
     
     const task = doc.data();
   task.id = doc.id;
   console.log(task);

taskcontainer.innerHTML += `<div class="card card-body mt-2 border-primary">
<h3>${task.producto}</h3>
<p>${task.descripcion}</p>
<p>${task.cantidad}</p>
<p>${task.precio}</p>
<button class="btn btn-primary btn-delete" data-id="${task.id}">eliminar</button>
</div>`

const btnsDelete = document.querySelectorAll('.btn-delete');
btnsDelete.forEach(btn =>{
btn.addEventListener('click', async (e) =>{
   await deleteTask(e.target.dataset.id)
})
})


 })
})