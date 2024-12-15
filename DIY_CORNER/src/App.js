import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import E404 from './components/E404';
import Index from './components/Index';
import Blog from './components/Blog';
import { Helmet } from 'react-helmet';
import PrivacyPolicy from './components/other/PrivacyPolicy';
import Aboutus from './components/other/Aboutus';


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route exact path="/:type/:idea" element={<Blog />} />

            <Route exact path="/:type" element={<Index />} />
          </Route>
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
