import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
import theme from "./theme";

const Home = React.lazy(() => import("./pages/Home"));
const FormElements = React.lazy(() => import("./pages/FormElements"));
const ReportsViews = React.lazy(() => import("./pages/ReportsViews"));
const Tables = React.lazy(() => import("./pages/Tables"));

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form-elements" exact component={FormElements} />
            <Route
              path="/reports-views/:reportId"
              exact
              component={ReportsViews}
            />
            <Route path="/tables" exact component={Tables} />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
