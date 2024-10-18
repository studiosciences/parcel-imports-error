import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const rootNode = document.getElementById("app");
const root = createRoot(rootNode!);

(async () => {
  const router = createBrowserRouter(routes);

  root.render(
      <RouterProvider router={router} />
  );
})();
