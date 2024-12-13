import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "pages/Home/HomePage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
