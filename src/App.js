import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import './App.css';
import MonthlyPricingPlan from "./components/MonthlyPricingPlan";
import QuarterlyPricingPlan from "./components/QuarterlyPricingPlan";
import YearlyPricingPlan from "./components/YearlyPricingPlan";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="pricing-header">
          <h1>Server Storage Pricing</h1>
          <p>Choose the plan that's right for you.</p>
          <ul className="pricing-nav">
            
            <div><Link to="/monthly">Monthly</Link></div>
            <div><Link to="/quarterly">Quarterly</Link></div>
            <div><Link to="/yearly">Yearly</Link></div>
          </ul>
          <a href="/" className="btn btn-primary">Close</a>
        </header>

         {/* Routes that dictate which component to render for each URL */}
         <Routes>
          <Route path="/monthly" element={<MonthlyPricingPlan />} />
          <Route path="/quarterly" element={<QuarterlyPricingPlan />} />
          <Route path="/yearly" element={<YearlyPricingPlan />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
