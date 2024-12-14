import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "pages/Home/HomePage";
import QuestionPage from "pages/Question/QuestionPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage />} />
    </Routes>
  );
}
