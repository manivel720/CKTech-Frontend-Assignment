import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import IngredientPage from "./pages/IngredientPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/ingredient/:id" element={<IngredientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
