import { Routes, Route } from "react-router-dom";
import { TaskCreate } from "./pages/TaskCreate";
import { TaskList } from "./pages/TaskList";
import { TypeCreate } from "./pages/TypeCreate";
export function Router() {
  return (
    <Routes>
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/tasks/create" element={<TaskCreate />} />
      <Route path="/type/create" element={<TypeCreate />} />
    </Routes>
  );
}
