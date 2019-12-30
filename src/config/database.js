module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 9090,
  username: 'admin',
  password: 'admin',
  database: 'gonodemodulo2',
  operatorAliases: false,
  define: {
    timestamps: true, // Em todas as tabelas, adiciona data de criação e modificação
    underscored: true, // Utilizar _ ao invés de caixa alta em nome de tabelas
    underscoreAll: true // Utilizar _ ao invés de caixa alta em nome de colunas
  }
}
