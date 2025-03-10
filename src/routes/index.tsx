import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import SearchProvider from "@/context/SearchContext";
import CountryDetails from "@/pages/CountryDetails";

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
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route path="/countries" element={<Home />} />
              <Route path="/countries/details" element={<CountryDetails />} />
              <Route path="*" element={<Navigate to="/countries" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
};

export default AppRoutes;
