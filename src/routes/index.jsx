import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/header";
import PublicRoute from "./publicRoute";
let home = React.lazy(() => import("../pages/home"));
let bill = React.lazy(() => import("../pages/generateBill"));

const index = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loading">
            <p className="text-center"> Loading . . . </p>
          </div>
        }
      >
        <Header />
        <Switch>
          <PublicRoute
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={home}
          />

          <PublicRoute
            exact
            path={`${process.env.PUBLIC_URL}/gen-bill`}
            component={bill}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default index;
