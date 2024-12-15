import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "pages/Home/HomePage";
import QuestionPage from "pages/Question/QuestionPage";
import ReportPage from "pages/Report/ReportPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/report" element={<ReportPage />} />
    </Routes>
  );
}
