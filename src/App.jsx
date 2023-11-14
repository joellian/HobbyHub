import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import Post from './components/pages/Post';
import Update from './components/pages/Update';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/post/:id/update" element={<Update />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
