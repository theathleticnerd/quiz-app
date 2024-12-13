import { BrowserRouter } from "react-router-dom";
import AppRoutes from "router/index.jsx";
import "assets/css/fonts.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
