import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import YourProposals from './components/YourProposals';
import AllProposals from './components/AllProposals';
import Matches from './components/Matches';
import NewProposal from './components/NewProposal';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/your-proposals">Your Proposals</Link></li>
            <li><Link to="/all-proposals">All Proposals</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/new-proposal">New Proposal</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/your-proposals" element={<YourProposals />} />
          <Route path="/all-proposals" element={<AllProposals />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/new-proposal" element={<NewProposal />} />
          <Route path="/" element={<YourProposals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;