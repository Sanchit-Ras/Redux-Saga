import { Route, Routes } from "react-router";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowsListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      
        <Routes>
          <Route path="/" element={<ShowsListPage />} />
          <Route path="show/:showId" element={<ShowDetailPage />} />
        </Routes>

    </div>
  );
}

export default App;
