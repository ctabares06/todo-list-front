import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routeMap from './routes/index';

const App = () => (
  <BrowserRouter>
  <Switch>
    {
      routeMap.map(({ path, Component }) => (
        <Route path={path}>
          <Component />
        </Route>
      ))
    }
  </Switch>
  </BrowserRouter>
)

export default App;

