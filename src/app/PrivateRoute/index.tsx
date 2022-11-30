import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../app/services/authenticationService";

export const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated() ? (
      React.createElement(component, props)
    ) : (
      <Navigate to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};
