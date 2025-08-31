import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Resume,
  Blogs,
  BlogDetails,
  Contact,
  SignIn,
  SignUp,
} from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path=":id" element={<BlogDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
