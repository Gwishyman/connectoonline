import { doc, getDoc, setDoc } from "firebase/firestore";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        admin: false,
        banned: false
      });
    }
    // proceed with rest of your app logic
  }
});