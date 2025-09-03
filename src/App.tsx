import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Resume,
  Blogs,
  BlogDetails,
  Contact,
  SignIn,
  SignUp,
  Packages,
  ProjectDetails,
  NotFound,
} from "./pages";
import { ThemeProvider } from "./components/providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path=":id" element={<BlogDetails />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found"/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
