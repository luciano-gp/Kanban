import { Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/TaskList";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
    </Routes>
  );
}
