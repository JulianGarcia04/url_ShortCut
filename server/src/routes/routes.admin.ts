import {Express, Router} from 'express';
import RoutesUser from "./routes.user";
import RoutesUrl from "./routes.url";
import RoutesUrlUser from './routes.userUrl';

const routesUser = new RoutesUser().router;
const routesUrl = new RoutesUrl().router;
const routesUrlUser = new RoutesUrlUser().router;

const adminRoutes = (app:Express)=>{
  let routes = Router();
  app.use('/api/v1', routes);

  routes.use(routesUrlUser);
  routes.use(routesUser);
  routes.use(routesUrl);
}

export default adminRoutes;
