import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchResults from "./components/SearchResults";
import JobPage from "./pages/JobPage";
function App() {
	return (
		<div>
			<Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/search" element={<SearchResults/>}/>
        <Route path="/jobs/:id" element={<JobPage/>}/>
      </Routes>
		</div>
	);
}

export default App;
