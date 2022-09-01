const { DataTypes } = require( 'sequelize' );
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = ( sequelize ) => {
    // defino el modelo
    sequelize.define(
        'User',
        {
            usuarioId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            clave: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
                // unique: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                // unique: true,
            },
        },
        { timestamps: false }
    );
};