// Caso usuário esteja logado, redirecionar caso ele tente acessar a página de login
module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }
  return res.redirect('/app/dashboard')
}
