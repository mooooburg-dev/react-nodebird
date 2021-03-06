module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Nodebird_Post',
    {
      // id가 기본적으로 들어있다.
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    // RetweetId
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' } // utf4mb4를 넣어주면 이모티콘을 저장할 수 있다.
  );

  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: 'Nodebird_HashtagPost' });
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Nodebird_Like', as: 'Likers' });
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };
  return Post;
};
