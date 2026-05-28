import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginSignup from './pages/LoginSignup';
import AboutPcos from './pages/AboutPcos';
import AnalysisResult from './pages/AnalysisResult';
import MedicalAssistant from './pages/MedicalAssistant';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import ContactSupport from './pages/ContactSupport';
import ScanHistory from './pages/ScanHistory';
import UploadScan from './pages/UploadScan';

function App() {
  return (
    <Router>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/about" element={<AboutPcos />} />
        <Route path="/analysis-result" element={<AnalysisResult />} />
        <Route path="/medical-assistant" element={<MedicalAssistant />} />
        <Route path="/dashboard" element={<AnalyticsDashboard />} />
        <Route path="/contact" element={<ContactSupport />} />
        <Route path="/history" element={<ScanHistory />} />
        <Route path="/upload" element={<UploadScan />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
