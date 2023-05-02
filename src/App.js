import { publicRoutes, authProtectedRoutes } from "./routes";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SendOtp from "./pages/Auth/SendOtp";
import AuthMiddleware from "./routes/Routes";



function App() {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx)=>(
          <Route path={route.path} element={route.component} key={idx} exact={true}/>
        ))}

        {authProtectedRoutes.map((route, idx)=>(
          <Route path={route.path} element={ <AuthMiddleware>{route.component}</AuthMiddleware>} key={idx} exact={true} />
        ))}
      </Routes>

    </React.Fragment>
  );
}

export default App;
