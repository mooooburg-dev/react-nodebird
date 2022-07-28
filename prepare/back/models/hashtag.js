module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Nodebird_Hashtag',
    {
      // id가 기본적으로 들어있다.
      name: { type: DataTypes.STRING(20), allowNull: false },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' } // utf4mb4를 넣어주면 이모티콘을 저장할 수 있다.
  );

  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'Nodebird_PostHashtag' });
  };
  return Hashtag;
};
