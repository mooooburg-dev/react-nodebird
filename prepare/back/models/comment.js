module.exports = (sequelize, DateTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      // id가 기본적으로 들어있다.
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' } // utf4mb4를 넣어주면 이모티콘을 저장할 수 있다.
  );

  Comment.associate = (db) => {};
  return Comment;
};
