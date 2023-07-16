import { useState } from "react";
import InitPage from "./pages/init-page"
import HomePage from "./pages/home-page";
import DishDetail from "./pages/dish-detail"
<pages />
import { Routes, Route, Navigate } from "react-router-dom";
import DishEdit from "./pages/dish-edit";


function App() {
  // const [showHomePage, setShowHomePage] = useState(false);

  // const handleStartHereClick = () => {

  //   setShowHomePage(true);
  // };
  return (
    <>
      {/* {showHomePage ? (
        <HomePage />
      ) : (
        <InitPage onStartHereClick={handleStartHereClick} />
      )} */}
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products"/>}/>
          <Route path="products" element={<HomePage />}/>
          <Route path="products/:id" element={<DishDetail />}/>
          <Route path="products/:id/edit" element={<DishEdit />}/>
          <Route />
          <Route />
          <Route path= "*" element={<Navigate to="/products" replace={true}/>}/> 
        </Route>
      </Routes>

    </>
  );
}

export default App;
