import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

// initializing Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1u0DvN4e_J2lKrLQONtnt9izXyZJdvO4",
  authDomain: "chattie-f1f16.firebaseapp.com",
  projectId: "chattie-f1f16",
  storageBucket: "chattie-f1f16.appspot.com",
  messagingSenderId: "921154741139",
  appId: "1:921154741139:web:8617668413b65290a73e66",
  measurementId: "G-RYV03T67GV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

type ContextProps = {
  products: any;
};

const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider = ({ children }: any) => {
  const labtopRef = collection(db, "products");
  const [products] = useCollectionData(labtopRef);

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
