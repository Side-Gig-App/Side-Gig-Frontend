import { Redirect, Route } from 'react-router-dom';
import { useCurrentUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const user = useCurrentUser();

  return (
    <Route {...routeProps}>
      {user?.email ? children : <Redirect to="/login" />}
    </Route>
  );
}