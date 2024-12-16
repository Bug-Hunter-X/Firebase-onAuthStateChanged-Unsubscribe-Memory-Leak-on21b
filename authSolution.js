const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// Clean up the listener when it's no longer needed.  This is crucial!
// For example, in a React component's useEffect hook:
// useEffect(() => {
//   return () => unsubscribe(); // Unsubscribe on component unmount
// }, []);

//or in a function:

function cleanupAuthListener() {
unsubscribe();
}

// Call cleanupAuthListener when appropriate.