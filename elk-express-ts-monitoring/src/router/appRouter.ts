import express from 'express'
import AppController from '../controller/AppController'

const appRouter = express.Router()
const appController = new AppController()

appRouter.get('/home', appController.home)
appRouter.get('/about', appController.about)
appRouter.get('/blog', appController.blog)
appRouter.get('/contact', appController.contact)

export default appRouter
