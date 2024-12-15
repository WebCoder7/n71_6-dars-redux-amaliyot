import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";

function App() {
  return (
    <>
      <header className="p-[20px] bg-blue-400 flex justify-center gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
