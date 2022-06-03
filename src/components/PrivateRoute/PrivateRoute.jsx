import { Redirect, Route } from 'react-router-dom';
import { useAuth, useCurrentUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const { loading, user } = useAuth();

if (loading) return (
  <p>...Loading</p>
)

  return (
    <Route {...routeProps}>
      {user?.email ? children : <Redirect to="/login" />}
    </Route>
  );
}