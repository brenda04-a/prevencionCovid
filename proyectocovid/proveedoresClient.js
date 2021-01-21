const db = firebase.firestore(); 
const taskcontainer = document.getElementById('tasks-container');


const getTask = () => db.collection('proveedor').get(); 

const deleteTask = id => db.collection('proveedor').doc(id).delete();



window.addEventListener('DOMContentLoaded', async (e) => {
 const querySnapshot = await getTask( );
 querySnapshot.forEach(doc =>{
     
     const task = doc.data();
   task.id = doc.id;
   console.log(task);

taskcontainer.innerHTML += `<div class="card card-body mt-2 border-primary">
<h3>${task.nombre}</h3>
<p>${task.contacto}</p>
<p>${task.cp}</p>
<p>${task.estado}</p>
<p>${task.producto}</p>
<p>${task.correo}</p>
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