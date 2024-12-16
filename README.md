# Firebase onAuthStateChanged Unsubscribe

This repo demonstrates a common error in Firebase Authentication: forgetting to unsubscribe from the `onAuthStateChanged` listener.  Failure to unsubscribe can cause memory leaks and unpredictable behavior in your application.

## The Problem

The `onAuthStateChanged` listener continues to listen for authentication changes even after the component or function that set it up is unmounted or no longer needed. This can lead to excess memory consumption and unexpected behavior.