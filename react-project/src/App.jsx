import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/"
         element={<Homepage/>}
        />

       <Route
          path="/signin"
         element={<Signin/>}
        />

        <Route
          path="/signup"
         element={<Signup/>}
        />

        <Route
          path="*"
          element={
            <div className="fixed inset-0 bg-red-100 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-xl text-red-500">Page Not Found</p>
                <p className="text-red-400 mt-2">The page you're looking for doesn't exist.</p>
              </div>
            </div>
          }
          
        />
      </Routes>
    </Router>
  );
}

export default App;