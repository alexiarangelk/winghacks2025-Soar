// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, addDoc, setDoc, updateDoc, Timestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiCtfNiuOvrI-TORUry-t6VQbBMyR_ZSE",
  authDomain: "soar-f7910.firebaseapp.com",
  projectId: "soar-f7910",
  storageBucket: "soar-f7910.firebasestorage.app",
  messagingSenderId: "190239307923",
  appId: "1:190239307923:web:10c7378c7701162a12f566",
  measurementId: "G-W28QBPKZFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function newUserCheck(userId) {

  console.log("I exist in newUserCheck");
  let userExists = undefined;

  try {
    const docRef = doc(db, "Users", userId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      console.log("Document found:", docSnapshot.data()); // Log document data
      userExists = true;
    } else {
      console.log("Document doesn't exist."); // Log when document is not found
      userExists = false;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }

  return userExists;
}

export async function addUser(userId, username, email, firstName, lastName) {
  try {
    await setDoc(doc(db, "Users", userId), {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      posts: [],
      groups: ["WingHacks", "McDonalds", "Back-End Programming"]
    });
    return false;
  } catch (error) {
    console.error("Error fetching document:", error);
    return true;
  }
}

export async function newPost(username, message){
  try {

    const docRef = await addDoc(collection(db, "Posts"), {
      1: {
        timestamp: Timestamp.fromDate(new Date()),
        username: username,
        message: message,
      },
      count: 1
    });
    console.log("New post created with ID:", docRef.id);
    return docRef.id; // Firestore auto-generates a unique postId
  } catch (error) {
    console.error("Error fetching document:", error);
    return "0";
  }
}

export async function addPostToId(userId, postId){
  console.log("Adding post to the id");

  try {
    const docRef = doc(db, "Users", userId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      console.log("Document found:", docSnapshot.data()); // Log document data

      const posts = docSnapshot.get("post") || []; // Get the count of messages
      //console.log(`posts is ${posts}`);
      posts.push(postId);

      await updateDoc(doc(db, "Users", userId), {
        posts: posts
      }), { merge: true };
      return false;
    } else {
      console.log("Document doesn't exist."); // Log when document is not found
      return true;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return true;
  }
  
  return;
}

export async function replyToPost(postId, username, message){

  try {
    const docRef = doc(db, "Posts", postId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      console.log("Document found:", docSnapshot.data()); // Log document data

      const count = docSnapshot.get("count") + 1; // Get the count of messages
      console.log(`count is ${count}`);

      await updateDoc(doc(db, "Posts", postId), {
        [count]: {
          timestamp: Timestamp.fromDate(new Date()),
          username: username,
          message: message,
        },
        count: count
      }), { merge: true };
      return false;
    } else {
      console.log("Document doesn't exist."); // Log when document is not found
      return true;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return true;
  }
}

export async function addToGroup(groupId, postId){
  
}

export default app;