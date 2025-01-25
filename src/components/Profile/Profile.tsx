import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { Avatar, Button } from "@nextui-org/react";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

function Profile({ isLoggedIn, setIsLoggedIn }) {
  const [currentUser, setCurrentUser] = React.useState<any>({});
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/");
      alert("successfully logged out");
    } catch (error) {
      console.error("error in signout", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("user exists");
          setCurrentUser({
            full_name: userData.full_name || user.displayName,
            email: userData.email || "",
            photoURL: userData.photoURL || "",
          });
        } else {
          // Create a new user document if it doesn't exist
          const newUserData = {
            full_name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          };
          console.log("user registered as new user");
          await setDoc(userRef, newUserData);
          setCurrentUser(newUserData);
        }

        setIsLoggedIn(true);
        console.log(user.displayName);
      } else {
        console.log("notsignedin");
      }
    });
  }, []);

  console.log(isLoggedIn);

  return (
    <div className="dark bg-black text-white overflow-hidden h-screen">
      {isLoggedIn ? (
        <div className="flex flex-col justify-center items-center h-[85vh] text-lg my-10">
          <div className="bg-[#1a1a1a] shadow-2xl px-16 py-20 rounded-lg border border-gray-900">
            <div className="flex flex-col justify-center gap-6">
              <Avatar
                src={currentUser.photoURL}
                className="w-24 h-24 text-2xl mx-auto border-4 border-gray-800"
              />

              <div className="space-y-2">
                <h2 className="font-bold text-gray-400">NAME</h2>
                <p className="border-b-2 border-gray-800 pb-2 text-white">
                  {currentUser.full_name}
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="font-bold text-gray-400">EMAIL</h2>
                <p className="border-b-2 border-gray-800 pb-2 text-white">
                  {currentUser.email}
                </p>
              </div>
              <div className="space-y-4">
                <Button color="danger" size="md" onClick={logout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[85vh] text-xl text-gray-500">
          Login to see your profile
        </div>
      )}
    </div>
  );
}

export default Profile;
