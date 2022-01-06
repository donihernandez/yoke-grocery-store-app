import "./App.css";
import React, { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

const Products = lazy(() => import("./views/products"));
const Account = lazy(() => import("./views/account"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
