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
          <div className="container">
              <h1>HELLO WORLD</h1>
            <br />
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
