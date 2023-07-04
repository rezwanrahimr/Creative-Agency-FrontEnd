import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContext from "./Context/AuthContext.jsx";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>
);
