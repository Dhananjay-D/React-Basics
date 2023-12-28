import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Data from "./FetchData";
import MutableData from "./MutableData";
import Home from "./Home";
import ReduxExample from "./ReduxExample";
import AxiosGet from "./AxiosGet";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/">Use-Reducer</NavLink>
            </li>
            <li>
              <NavLink to="/Data">Fetch Data from an Api</NavLink>
            </li>
            <li>
              <NavLink to="/MutableData">Use-Ref Hook Demo</NavLink>
            </li>
            <li>
              <NavLink to="/redux">Redux Example</NavLink>
            </li>
            <li>
              <NavLink to="/get">Axios Get Request</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/MutableData" element={<MutableData />} />
          <Route path="/redux" element={<ReduxExample />} />
          <Route path="/get" element={<AxiosGet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//      everythings present in react-router-dom

// navlink because it contains the class ' active ' which we can use to style as per requirements
// outlet which is stored in react-router-dom is usefull to accept the data same as children props
// url is consist of params and queryString:
// useParams Hook to get params from url
// useSearchParams
// useNavigate to basically change the url to some different and visit the diff page
// eg:once submitting the form
