const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.VIRTUAL, // Campo virtual, não vai para o banco, só funciona na aplicação
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  }, {
    hooks: { // São ações disparadas antes/depois/etc da execução do comando no banco de dados
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  return User
}
