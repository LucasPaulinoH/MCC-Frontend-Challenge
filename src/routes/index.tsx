import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import SearchProvider from "@/context/SearchContext";

const AppRoutes = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => setUser(user));
  }, []);

  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
};

export default AppRoutes;
