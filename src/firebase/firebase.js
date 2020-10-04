import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
//import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/* const expenseOne = {
  description: 'Rent',
  note: 'Done!',
  amount: 0,
  createdAt: 0,
};
const expenseTwo = {
  description: 'Phone',
  note: 'Done!',
  amount: 0,
  createdAt: 0,
};
const expenseThree = {
  description: 'Laptop',
  note: 'Done!',
  amount: 0,
  createdAt: 0,
}; */

/* database.ref('expenses').push(expenseOne);
database.ref('expenses').push(expenseTwo);
database.ref('expenses').push(expenseThree); */

/* // on remove event
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// on update event
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// on add event
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); */

/* database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });

  console.log(expenses);
}); */

/* database
  .ref()
  .set({
    name: 'Razine Tarik',
    age: 32,
    stressLevel: 6,
    job: {
      title: 'Software developer',
      company: 'Google',
    },
    location: {
      city: 'Khouribga',
      country: 'Morocco',
    },
  })
  .then(() => {
    console.log('Data is saved!');
  })
  .catch((e) => {
    console.log('Something went wrong!', e);
  }); */

/* database
  .ref('expenses')
  .push(expensesOne); */

/* database
  .ref()
  .update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Casablanca',
  })
  .then(() => {
    console.log('Update with success!');
  })
  .catch((e) => {
    console.log('Something went wrong!', e);
  }); */

/* database
  .ref('expenses/-MI6VgZQerq5V_9Bs2At')
  .remove()
  .then(() => {
    console.log('Removed with success!');
  })
  .catch((e) => {
    console.log('Something went wrong!', e);
  }); */
