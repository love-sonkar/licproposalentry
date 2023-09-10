import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Spinner from "./components/ui/Spinner";

const CustomerDetail = lazy(
  () => import("./components/Allforms/CustomerDetail")
);
const PlanDetail = lazy(() => import("./components/Allforms/PlanDetail"));
const AgentsDetail = lazy(() => import("./components/Allforms/AgentsDetail"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper>
                <AgentsDetail />
              </Wrapper>
            }
          />
          <Route
            path="/plandetail"
            element={
              <Wrapper>
                <PlanDetail />
              </Wrapper>
            }
          />
          <Route
            path="/customerdetail"
            element={
              <Wrapper>
                <CustomerDetail />
              </Wrapper>
            }
          />
          <Route path="/detailspage" element={<DetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
