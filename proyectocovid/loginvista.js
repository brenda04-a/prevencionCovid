 //signup
 const signupForm = document.querySelector('#signup-form');

 signupForm.addEventListener('submit', (e) =>{
   e.preventDefault();
   const email = document.querySelector('#signup-email').value;
   const password = document.querySelector('#signup-password').value;


   auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          //clear the form
          signupForm.reset();

          //close modal
          $('#signupModal').modal('hide')

          console.log('sign up')
        })
 });

 //signin
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', e =>{
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
   const password = document.querySelector('#login-password').value;
   
   auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          //clear the form
          signupForm.reset();

          //close modal
          $('#signupModal').modal('hide')

          window.location.href = 'inicioClient.html';
          

          console.log('sign in')
        })
});

//signin2
const signinForm2 = document.querySelector('#login-form2');

signinForm2.addEventListener('submit', e =>{
  e.preventDefault();
  const email = document.querySelector('#login-email2').value;
   const password = document.querySelector('#login-password2').value;
   
   auth
   .signInWithEmailAndPassword(email, password)
   .then(userCredential => {
     //clear the form
     signupForm.reset();

     //close modal
     $('#signupModal2').modal('hide')

     window.location.href = 'perfilProv.html';

     console.log('sign in')
   })
});

//logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('sign out')
  })
})
 
//posts
const proveedor = document.querySelector('.proveedor');
//events
//list for auth state changes

auth.onAuthStateChanged(user =>{
  if(user) {
    false.collection('proveedor')
    .get()
    .then((snapshot) =>{
      console.log(snapshot.docs)
    })
  } else{
    console.log('auth:sign out')
  }
})
