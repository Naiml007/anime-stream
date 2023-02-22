import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./Styles.css";
import Releases from "./recent_release/Releases";
import AnimeInfo from "./anime/AnimeInfo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <div>
              <h1>MOMO-STREAMING</h1>
            <Routes>
              <Route path="/" element={<Releases/>} />
              <Route path='details/:id' element={<AnimeInfo/>} />
            </Routes>
          </div>
        </header>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
