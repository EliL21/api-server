'use strict';

module,exports = ( sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('characters',{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
