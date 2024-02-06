import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Top from '@/pages/index';
import Radio from '@/pages/project/radio';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Top />} />
        <Route path='/' element={<Top />} />
        <Route path='/project/radio' element={<Radio />} />
      </Routes>
    </Router>
  );
};

export default App;
