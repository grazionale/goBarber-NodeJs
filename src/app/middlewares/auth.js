// verifica se o usuário está logado ou não
module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user // o locals está disponível em todos os arquivos junjucks, sendo assim, é possível na view utilizar { user } por ex.
    return next()
  }

  return res.redirect('/')
}
