import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
