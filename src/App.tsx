import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProduct from './components/AddProduct'
import Sidebar from './components/Sidebar'

function App() {
  return (
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Sidebar />} />

          {/* AddProduct Page */}
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>

      // <Router>
      // <div style={{ display: "flex" }}>
      //   {/* Sidebar always visible */}
      //   <Sidebar />
      //   {/* Page content changes based on route */}
      //   <div style={{ flex: 1, padding: "20px" }}>
      //     <Routes>
      //       <Route path="/" element={<h1>Dashboard</h1>} />
      //       <Route path="/profile" element={<h1>Account Profile</h1>} />
      //       <Route path="/products" element={<AddProduct />} />
      //     </Routes>
      //   </div>
      // </div>
      // </Router>
  )
}

export default App
