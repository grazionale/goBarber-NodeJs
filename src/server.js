const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const nunjucks = require('nunjucks')
const path = require('path')
const flash = require('connect-flash')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    this.express.use(session({
      name: 'root', // nome da sessão
      secret: 'MyAppSecret', // serve para criptografar a sessão
      resave: true, // resave true pois é recomendação da biblioteca Session file store
      store: new FileStore({
        path: path.resolve(__dirname, '..', 'tmp', 'sessions') // Caminho para armazenar as sessões
      }),
      saveUninitialized: true // saveUninitialized true pois é recomendação da biblioteca Session file store
    }))
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
