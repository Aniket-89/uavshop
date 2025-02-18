import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.tsx";
import ShopListPage from "./Pages/ShopListPage.tsx";
import ShopDetailPage from "./Pages/ShopDetailPage.tsx";
import { CartProvider } from "./assets/CartContext.tsx";
import Cart from "./Components/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement:
    children: [
      {
        index: true,
        element: <ShopListPage />,
      },
      {
        path: "/:id",
        element: <ShopDetailPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
