'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany(models.ContentRatings, {
        foreignKey: 'contentTypeId'
      });

      this.hasMany(models.Contents, {
        foreignKey: 'contentTypeId'
      });
      
    }
  };
  ContentTypes.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentTypes',
  });
  return ContentTypes;
};