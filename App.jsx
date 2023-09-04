import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./About";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

//basically enables us to reuse cached data
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //data fetched by queries will never be stale
      cacheTime: Infinity, //data will never be automatically removed from the cache
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <Navigation />
        </div>
        <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
