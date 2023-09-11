import App from './App';
import Header from './Header';
import About from './About';
import ObjectivesPage from './ObjectivesPage';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
// import { Board } from './Board';
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Router>
    <Header />
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/objectives" element={<ObjectivesPage />}></Route>
    </Routes>
  </Router>,
);
