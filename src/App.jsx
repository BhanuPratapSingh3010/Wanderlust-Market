import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this is properly configured to include Tailwind CSS
import ShopItems from './components/ShopItems';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ShopItems />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
