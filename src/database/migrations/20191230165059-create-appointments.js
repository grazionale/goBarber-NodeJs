'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: { // Chave estrangeira
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, // Faz referência a tabela users
        onUpdate: 'CASCADE', // Se o ID do usuário alterar na tabela users, ela irá alterar aqui automaticamente
        onDelete: 'CASCADE', // Se um usuário for removido, todos os agendamentos também serão
        allowNull: false
      },
      provider_id: { // Chave estrangeira
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, // Faz referência a tabela users
        onUpdate: 'CASCADE', // Se o ID do usuário alterar na tabela users, ela irá alterar aqui automaticamente
        onDelete: 'CASCADE', // Se um usuário for removido, todos os agendamentos também serão
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('appointments')
  }
}
