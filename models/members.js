// Creating our diary_data model
module.exports = function(sequelize, DataTypes) {
  var DiaryData = sequelize.define("DiaryData", {
    // The diary data cannot be null, 
    userData: {
      type: DataTypes.STRING,
      allowNull: false 
    }
   });
DiaryData.associate = function (models) {
	DiaryData.belongsTo(models.User, {
		foreignKey: {
			allowNull: false
		}
	})
}
return DiaryData;
}