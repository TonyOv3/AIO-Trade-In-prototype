import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load route components for better performance
const Dashboard = lazy(() => import("./pages/Dashboard"));
const RiskAssessment = lazy(() => import("./pages/RiskAssessment"));
const SyndicateHub = lazy(() => import("./pages/SyndicateHub"));
const MarketAnalysis = lazy(() => import("./pages/MarketAnalysis"));
const Inventory = lazy(() => import("./pages/Inventory"));
const AIGrading = lazy(() => import("./pages/AIGrading"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const TradeIn = lazy(() => import("./pages/TradeIn"));
const Orders = lazy(() => import("./pages/Orders"));
const CRM = lazy(() => import("./pages/CRM"));
const Auctions = lazy(() => import("./pages/Auctions"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/risk-assessment" element={<RiskAssessment />} />
          <Route path="/syndicate" element={<SyndicateHub />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/ai-grading" element={<AIGrading />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/auctions" element={<Auctions />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" element={<div />} />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
