import * as firebase from 'firebase'
import expenses from '../selectors/expenses';


 // Initialize Firebase
 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };


  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })




// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })







// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })


//   database.ref('expenses').push({
//     descripton: 'rent',
//     note:'',
//     amount:109500,
//     createdAt: 976123498763
//   })




//   const firebaseNotes = {
//       notes: {
//           adassd:{
//             title: 'first note',
//             body:'this is my note'
//           }
//       }
//   }

//   const notes = [{
//     id: '12',
//     title: 'first note',
//     body:'this is my note'
//   }, {
//     id: '13',
//     title: 'second note',
//     body:'this is my  2.note'

// }]

// database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   })

//   database.ref('name')
//     .once('value')
//     .then((snapshot) => {
//         const val= snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('failed database connection (read data)', e)
//     })

//   database.ref().set({
//       name:'Yngve',
//       age:'27',
//       stressLevel:5,
//       job: {
//           title: 'sofware dev',
//           company: 'google'
//       },
//       location: {
//         city:'cape Town',
//         country:'sotuh aficaaa'
//       }
//   }).then(() => {
//       console.log('data is saved!')
//   }).catch((e) => {
//     console.log('failed database connection', e)
//   })

//   database.ref('attrubtes').set({
//       height: 198,
//       weight:83
//   }).then(() => {
//       console.log('second call wokrd')
//   }).catch((e) => {
//     console.log('second didnt work', e)
//   })

//   database.ref().update({
      
//   })

// database.ref()
//     .remove()
//     .then(() => {
//           console.log('data is remove!')
//       }).catch((e) => {
//         console.log('failed database connection', e)
//       })
