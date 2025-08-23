import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CityPage from "@/pages/city";
import CostCalculator from "@/pages/cost-calculator";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculator" component={CostCalculator} />
      <Route path="/city/:slug" component={CityPage} />
      {/* Direct city access routes - redirect to proper format */}
      <Route path="/mumbai">{() => <Redirect to="/city/mumbai" />}</Route>
      <Route path="/bangalore">{() => <Redirect to="/city/bangalore" />}</Route>
      <Route path="/goa">{() => <Redirect to="/city/goa" />}</Route>
      <Route path="/pune">{() => <Redirect to="/city/pune" />}</Route>
      <Route path="/new-delhi">{() => <Redirect to="/city/new-delhi" />}</Route>
      <Route path="/kolkata">{() => <Redirect to="/city/kolkata" />}</Route>
      <Route path="/jaipur">{() => <Redirect to="/city/jaipur" />}</Route>
      <Route path="/udaipur">{() => <Redirect to="/city/udaipur" />}</Route>
      <Route path="/gangtok">{() => <Redirect to="/city/gangtok" />}</Route>
      <Route path="/mcleodganj">{() => <Redirect to="/city/mcleodganj" />}</Route>
      <Route path="/mussoorie">{() => <Redirect to="/city/mussoorie" />}</Route>
      <Route path="/shillong">{() => <Redirect to="/city/shillong" />}</Route>
      <Route path="/ziro">{() => <Redirect to="/city/ziro" />}</Route>
      <Route path="/dehradun">{() => <Redirect to="/city/dehradun" />}</Route>
      <Route path="/rishikesh">{() => <Redirect to="/city/rishikesh" />}</Route>
      <Route path="/pondicherry">{() => <Redirect to="/city/pondicherry" />}</Route>
      <Route path="/kochi">{() => <Redirect to="/city/kochi" />}</Route>
      <Route path="/wayanad">{() => <Redirect to="/city/wayanad" />}</Route>
      <Route path="/dharamkot">{() => <Redirect to="/city/dharamkot" />}</Route>
      <Route path="/darjeeling">{() => <Redirect to="/city/darjeeling" />}</Route>
      <Route path="/alleppey">{() => <Redirect to="/city/alleppey" />}</Route>
      <Route path="/varkala">{() => <Redirect to="/city/varkala" />}</Route>
      <Route path="/kasol">{() => <Redirect to="/city/kasol" />}</Route>
      <Route path="/tosh">{() => <Redirect to="/city/tosh" />}</Route>
      <Route path="/bir">{() => <Redirect to="/city/bir" />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
