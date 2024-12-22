'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true // Adjust based on your requirements
      },
      position: {
        type: Sequelize.STRING,
        allowNull: true // Adjust based on your requirements
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true // Adjust based on your requirements
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true // Adjust based on your requirements
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true // Adjust based on your requirements
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false, // Assuming every job must be associated with a user
        references: {
          model: 'Users', // Ensure this matches the name of your users table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // or 'CASCADE' based on your requirements
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set the current timestamp
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set the current timestamp
      }
    });
  },
  async down(queryInterface: any) {
    await queryInterface.dropTable('Jobs');
  }
};