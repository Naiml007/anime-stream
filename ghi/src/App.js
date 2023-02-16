import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./Styles.css";
import Releases from "./recent_release/Releases";

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
            <h1>HELLO WORLD</h1>
            <Releases />
          </div>
        </header>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
