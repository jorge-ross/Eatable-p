import InitPage from "./pages/init-page"
import HomePage from "./pages/home-page";
import DishDetail from "./pages/dish-detail"
import { Routes, Route, Navigate } from "react-router-dom";
import DishEdit from "./pages/dish-edit";


function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="welcome"/>}/>
          <Route path="welcome" element={<InitPage />}/>
          <Route path="products" element={<HomePage />}/>
          <Route path="products/:id" element={<DishDetail />}/>
          <Route path="products/:id/edit" element={<DishEdit />}/>
          <Route />
          <Route />
          <Route path= "*" element={<Navigate to="/welcome" replace={true}/>}/> 
        </Route>
      </Routes>

    </>
  );
}

export default App;
