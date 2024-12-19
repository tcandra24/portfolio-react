import { Suspense } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/css/main.css";

// Router
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);
