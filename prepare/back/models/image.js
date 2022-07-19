module.exports = (sequelize, DateTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      // id가 기본적으로 들어있다.
      source: { type: DataTypes.STRING(200), allowNull: false },
    },
    { charset: 'utf8', collate: 'utf8_general_ci' } // utf4mb4를 넣어주면 이모티콘을 저장할 수 있다.
  );

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
