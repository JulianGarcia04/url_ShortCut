import express, {Express, Router} from 'express';
import RoutesUser from "./routes.user";
import RoutesUrl from "./routes.url";
import RoutesUrlUser from './routes.userUrl';
import RoutesUploadImage from './routes.uploadImage';
import routesRedirect from './routes.redirect';
import path from 'path';

const routesUser = new RoutesUser().router;
const routesUrl = new RoutesUrl().router;
const routesUrlUser = new RoutesUrlUser().router;
const routesUploadImage = new RoutesUploadImage().router;

const adminRoutes = (app:Express)=>{
  let routes = Router();
  app.use('/api/v2', routes);
  app.use('/', routesRedirect);
  routes.use(routesUrlUser);
  routes.use(routesUser);
  routes.use(routesUrl);
  routes.use(routesUploadImage);
  routes.use('/user', express.static(path.join(__dirname, '../../public')))
}

export default adminRoutes;
