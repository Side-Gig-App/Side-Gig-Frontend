import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth }from '../../context/UserProvider';

export default function PrivateRoute({ children, ...rest }) {
  // let authFromDb = useAuth();
  return (
      <Route
      {...rest}
      render={({ location }) => 
    useAuth ? (
        children
    ) : (
        <Redirect
          to={{
              pathname: '/login',
              state: { from: location },
          }}
        />
      )
    }
  />
  )
}