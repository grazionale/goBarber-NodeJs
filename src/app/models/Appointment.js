module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' }) // Define que um appointment PERTENCE a um usuário
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' }) // Define que um appointment sera prestado por um provider
  }

  return Appointment
}
