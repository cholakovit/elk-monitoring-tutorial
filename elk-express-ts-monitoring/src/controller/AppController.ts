import { Request, Response } from "express";
import logger from "../helper/logger";

class AppController {
  home(req: Request, res: Response) {
    logger.info('Home page was visited')
    res.status(200).send('Home page was visited')
  }
  about(req: Request, res: Response) {
    logger.info('About page was visited')
    res.status(200).send('About page was visited')
  }
  blog(req: Request, res: Response) {
    logger.info('Blog page was visited')
    res.status(200).send('Blog page was visited')
  }
  contact(req: Request, res: Response) {
    logger.info('Contact page was visited')
    res.status(200).send('Contact page was visited')
  }
}

export default AppController