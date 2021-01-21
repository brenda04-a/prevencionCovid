const db = firebase.firestore();


const proveedor = document.getElementById("proveedor"); 
const tasksContainer = document.getElementById('tasks-container');

const saveTask =(nombre,contacto,cp,estado,producto,correo) =>
db.collection("proveedor").doc().set({
    nombre,
    contacto,
    cp,
    estado,
    producto,
    correo,

});

const getTasks = () => db.collection('proveedor').get();
const getTask = (id) => db.collection('proveedor').doc(id).get();
const onGetTasks = (callback) => db.collection('proveedor').onSnapshot(callback);
const deleteTask = id => db.collection('proveedor').doc(id).delete();


window.addEventListener('DOMContentLoaded',  async (e) =>{

 onGetTasks((querySnapshot) =>{
   tasksContainer.innerHTML = '';
  querySnapshot.forEach(doc =>{
    const task =doc.data();
    task.id = doc.id;
    
    tasksContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.nombre}</h3>
    <p>${task.contacto}</p>
    <p>${task.cp}</p>
    <p>${task.estado}</p>
    <p>${task.producto}</p>
    <p>${task.correo}</p>
    <div>
    <button class="btn btn-primary btn-delete" data-id="${task.id}">delete</button>
    <button class="btn btn-secondary btn-edit" data-id="${task.id}">edit</button>
    </div>
    </div>`
    const  btnsDelete = document.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn => {
      btn.addEventListener('click', async(e) => {
       await deleteTask(e.target.dataset.id)
        
      })
    });

    const btnsEdit = document.querySelectorAll('.btn-edit');
     btnsEdit.forEach(btn =>{
       btn.addEventListener('click', async (e) =>{
         const doc = await getTask(e.target.dataset.id);
         const task = doc.data();

         proveedor['task-nombre'].value = task.nombre;
         proveedor['task-contacto'].value = task.contacto;
         proveedor['task-cp'].value = task.cp;
         proveedor['task-producto'].value = task.producto;
         proveedor['task-correo'].value = task.correo;
        
       })
     })
  });
 });

});

proveedor.addEventListener("submit", async (e) => {
    e.preventDefault();
const nombre = proveedor["nombre"];
const contacto = proveedor['contacto'];
const cp = proveedor['cp'];
const estado = proveedor['estado'];
const producto = proveedor['producto'];
const correo = proveedor['correo'];
  
  await saveTask(nombre.value,  
      contacto.value, 
     cp.value, 
     estado.value, 
         producto.value ,
         correo.value 
       );
  proveedor.reset();
  nombre.focus();
  
});

