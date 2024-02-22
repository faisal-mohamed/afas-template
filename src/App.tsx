import { RouterProvider } from "react-router-dom";
import "./App.css?inline";
import "./assets/scss/themes.scss";
import "./assets/scss/config/material/app.scss";
import "./assets/scss/custom_scss/common.scss";
import { Suspense } from "react";
import MainRouteDriver from "./app/routes";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={MainRouteDriver} />
      </Suspense>
    </div>
  );
}

export default App;
