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

//~============================= For Reading and Entering into Database ============================= 

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

export async function addUser(userId, username, email, firstName, lastName, 
  organizations, position, limitOrg, matchingSequence) {
  try {

    await setDoc(doc(db, "Users", userId), {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      position: position,
      limitOrg: limitOrg,
      posts: [],
      organizations: organizations,
      matchingSequence: matchingSequence
    });
    return false;
  } catch (error) {
    console.error("Error fetching document:", error);
    return true;
  }
}

export async function newPost(username, message, subject){
  try {

    const docRef = await addDoc(collection(db, "Posts"), {
      1: {
        timestamp: Timestamp.fromDate(new Date()),
        username: username,
        subject: subject,
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
}

export async function replyToPost(postId, username, message){

  try {
    const docRef = doc(db, "Posts", postId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      console.log("Document found:", docSnapshot.data()); // Log document data

      const count = (parseInt(docSnapshot.get("count")) + 1).toString(); // Get the count of messages
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

export async function addToOrg(orgId, postId){
  try {
    const docRef = doc(db, "Organizations", orgId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      console.log("Document found:", docSnapshot.data()); // Log document data

      const count = (parseInt(docSnapshot.get("count")) + 1).toString(); // Get the count of messages
      console.log(`count is ${count}`);

      await updateDoc(docRef, {
        [count]: postId,
        count: count
      }), { merge: true };
      return false;

    } else {
      console.log("Document doesn't exist."); // Log when document is not found
      await setDoc(docRef, {
        1: postId,
        count: 1
      });
      
      return false;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return true;
  }
}

//~============================= For Filling In the WebPage ============================= 

export async function getOrgPosts(orgId){
  try {
    //grab organization postIds
    const docRef = doc(db, "Organizations", orgId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      //console.log("Document found:", docSnapshot.data()); // Log document data

      const count = (parseInt(docSnapshot.get("count"))).toString(); // Get the count of messages
      //console.log(`count is ${count}`);

      let postIdsArray = [];
      for (let i = 1; i <= count; i++) {
        const postId = docSnapshot.get(i.toString());
        //console.log(`item ${i} is ${postId}`);
        postIdsArray.push(postId);
      }

      return postIdsArray;

    } else {
      console.log("Document doesn't exist.");
      return [];
  }
  } catch (error) {
    console.error("Error fetching document:", error);
    return [];
  }
}

export async function getPostMessages(postId){
  try {
    //Iterate postIds
    const docRef = doc(db, "Posts", postId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      //console.log("Document found:", docSnapshot.data()); // Log document data

      const count = docSnapshot.get("count"); // Get the count of messages
      //console.log(`count is ${count}`);

      let messageArray = [];
      for (let i = 1; i <= count; i++) {
        if (i == 1){
          //dealing with the first entry, it'll have 4 entries
          let firstArray = docSnapshot.get(i.toString());
          //console.log(firstArray);
          messageArray.push(firstArray);
        }
        else{
          let replyArray = docSnapshot.get(i.toString());
          //console.log(replyArray);
          messageArray.push(replyArray);
        }
      }

      return messageArray;

    } else {
      console.log("Document doesn't exist.");
      return [];
  }
  } catch (error) {
    console.error("Error fetching document:", error);
    return [];
  }
}

export async function getMyQuizResults(userId){
  try {
    const docRef = doc(db, "Users", userId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      let responseArray = [];

      responseArray.push(docSnapshot.get("limitOrg"));
      responseArray.push(docSnapshot.get("position"));
      responseArray.push(docSnapshot.get("organizations")[0]);
      responseArray.push(userId);
      const matchingSequence = docSnapshot.get("matchingSequence");
      for (let i = 0; i < matchingSequence.length; i++) {
        responseArray.push(matchingSequence[i]);
      }

      return responseArray;

    } else {
      console.log("Document doesn't exist.");
      return [];
  }
  } catch (error) {
    console.error("Error fetching document:", error);
    return [];
  }
}

export async function getAllQuizResults(userId){
  try {
    const docRef = doc(db, "Users", userId); // Correct Firestore path
    const docSnapshot = await getDoc(docRef); // Fetch single document

    if (docSnapshot.exists()) {
      let responseArray = [];

      responseArray.push(docSnapshot.get("limitOrg"));
      responseArray.push(docSnapshot.get("position"));
      responseArray.push(docSnapshot.get("organizations")[0]);
      responseArray.push(userId);
      const matchingSequence = docSnapshot.get("matchingSequence");
      for (let i = 0; i < matchingSequence.length; i++) {
        responseArray.push(matchingSequence[i]);
      }

      return responseArray;

    } else {
      console.log("Document doesn't exist.");
      return [];
  }
  } catch (error) {
    console.error("Error fetching document:", error);
    return [];
  }
}

export default app;