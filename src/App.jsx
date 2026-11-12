import { Navigate, Route, Routes } from "react-router-dom";

import BoardListPage from "./pages/BoardListPage.jsx";
import BoardDetailPage from "./pages/BoardDetailPage.jsx";
import BoardCreatePage from "./pages/BoardCreatePage.jsx";
import BoardUpdatePage from "./pages/BoardUpdatePage.jsx";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/board-list" replace />} />

      <Route path="/board-list" element={<BoardListPage />}></Route>
      <Route path="/board-detail/:id" element={<BoardDetailPage />}></Route>
      <Route path="/board-create" element={<BoardCreatePage />}></Route>
      <Route path="/board-update/:id" element={<BoardUpdatePage />}></Route>

    </Routes>
  );
}

export default App;