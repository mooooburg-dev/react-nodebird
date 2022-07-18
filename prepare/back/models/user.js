module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // MySQL에는 users 테이블 생성, id가 기본적으로 들어있다.
      email: { type: DataTypes.STRING(30), allowNull: false, unique: true }, // allowNull: false -> 필수
      nickname: { type: DataTypes.STRING(30), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false },
    },
    { charset: 'utf8', collate: 'utf8_general_ci' }
  );

  User.associate = (db) => {};
  return User;
};
