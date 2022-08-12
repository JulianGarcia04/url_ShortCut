import {Express, Router} from 'express';
import RoutesUser from "./routes.user";
import RoutesUrl from "./routes.url";

const routesUser = new RoutesUser().getRouter();
const routesUrl = new RoutesUrl().getRouter();

const adminRoutes = (app:Express)=>{
  let routes = Router();
  app.use('/api/v1', routes);

  routes.use(routesUser);
  routes.use(routesUrl);
}

export default adminRoutes;
