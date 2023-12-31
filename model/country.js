const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('sequel', 'root', 'E@asybiz_d@_t@b@se_1234567', {
    dialect: 'mysql'
});
const country = sequelize.define('country', {
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    phonecode: { type: DataTypes.STRING },
    flag: { type: DataTypes.STRING }
}, {
    timestamps: false,
})
country.sync({alter: true}).then((data)=>{
    console.log("country table create ");
})
.catch((err)=>{
    console.log(err);
});
module.exports = country;