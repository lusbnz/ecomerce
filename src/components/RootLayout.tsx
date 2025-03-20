import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import SideMenu from "./SideMenu";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading="loading" persistor={persistor}>
        <Header />
        <ScrollRestoration />
        <SideMenu />
        <Outlet />
        <Footer />
      </PersistGate>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000000",
            color: "#ffffff",
          },
        }}
      />
    </Provider>
  );
};

export default RootLayout;
