import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./Styles.css";
import Releases from "./pages/Releases";
import AnimeInfo from "./components/AnimeDetail/AnimeDetail";
import SearchResults from "./pages/SearchResults";
import SearchBar from "./components/SearchBar/searchBar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [query, setQuery] = useState("");

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <div>
            <h1>MOMO-STREAMING</h1>
            <SearchBar onSubmit={setQuery} />
            <Routes>
              <Route path="/" element={<Releases />} />
              <Route path="details/:id" element={<AnimeInfo />} />
              <Route
                path="search/:query"
                element={<SearchResults query={query} />}
              />
            </Routes>
          </div>
        </header>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
