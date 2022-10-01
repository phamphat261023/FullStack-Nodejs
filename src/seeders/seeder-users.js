"use strict";

//ham up: them du lieu

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Pham",
        lastName: "Phat",
        email: "admin@gmail.com.com",
        password: "12345678",
        address: "Ha Noi",
        gender: 1,
        roleId: "Role",
        phoneNumber: "0904163407",
        positionId: "position",
        images: "images",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
