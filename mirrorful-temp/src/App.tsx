import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MarketAnalysis from './pages/MarketAnalysis';
import DealFinder from './pages/DealFinder';
import ProductDetail from './pages/ProductDetail';
import TradeIn from './pages/TradeIn';
import PhoneGrading from './pages/PhoneGrading';
import Inventory from './pages/Inventory';
import OrderManagement from './pages/OrderManagement';
import TraderCRM from './pages/TraderCRM';
import WholesaleAuctions from './pages/WholesaleAuctions';
import UserProfile from './pages/UserProfile';
import RiskAssessment from './pages/RiskAssessment';
import SyndicateHub from './pages/SyndicateHub';
import SyndicateCreation from './pages/SyndicateCreation';
import SyndicateDetail from './pages/SyndicateDetail';
import SyndicateContribution from './pages/SyndicateContribution';
import SyndicateDistribution from './pages/SyndicateDistribution';
import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
export function App() {
  return <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout>
                  <Dashboard />
                </Layout>} />
            <Route path="/market-analysis" element={<Layout>
                  <MarketAnalysis />
                </Layout>} />
            <Route path="/deal-finder" element={<Layout>
                  <DealFinder />
                </Layout>} />
            <Route path="/product/:id" element={<Layout>
                  <ProductDetail />
                </Layout>} />
            <Route path="/trade-in" element={<Layout>
                  <TradeIn />
                </Layout>} />
            <Route path="/phone-grading" element={<Layout>
                  <PhoneGrading />
                </Layout>} />
            <Route path="/inventory" element={<Layout>
                  <Inventory />
                </Layout>} />
            <Route path="/order-management" element={<Layout>
                  <OrderManagement />
                </Layout>} />
            <Route path="/trader-crm" element={<Layout>
                  <TraderCRM />
                </Layout>} />
            <Route path="/wholesale-auctions" element={<Layout>
                  <WholesaleAuctions />
                </Layout>} />
            <Route path="/syndicate-hub" element={<Layout>
                  <SyndicateHub />
                </Layout>} />
            <Route path="/syndicate-creation" element={<Layout>
                  <SyndicateCreation />
                </Layout>} />
            <Route path="/syndicate-detail/:id" element={<Layout>
                  <SyndicateDetail />
                </Layout>} />
            <Route path="/syndicate-contribution/:id" element={<Layout>
                  <SyndicateContribution />
                </Layout>} />
            <Route path="/syndicate-distribution/:id" element={<Layout>
                  <SyndicateDistribution />
                </Layout>} />
            <Route path="/risk-assessment" element={<Layout>
                  <RiskAssessment />
                </Layout>} />
            <Route path="/profile" element={<Layout>
                  <UserProfile />
                </Layout>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>;
}