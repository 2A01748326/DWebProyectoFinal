import {Model} from 'sequelize';

interface RegistroAttributes{
    id:number;
    embarazos :number;
    glucosa: number;
    presion : number;
    grosorPiel : number;
    insulina : number;
    bmi : number;
    dpf : number;
    edad : number;
    resultado : number;

}

module.exports = (sequelize: any, DataTypes: any) =>{
    class Registro extends Model<RegistroAttributes> implements RegistroAttributes{
        id!:number;
        embarazos! :number;
        glucosa!: number;
        presion! : number;
        grosorPiel! : number;
        insulina! : number;
        bmi! : number;
        dpf! : number;
        edad! : number;
        resultado! : number;

        static associate(models:any){
            //Proyecto.belongsToMany(models.User, {through:'AsignacionProyecto'})
        }
    }
    Registro.init({
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        embarazos:{
            type : DataTypes.INTEGER,
            allowNull:false,
        },
        glucosa:{
            type : DataTypes.INTEGER,
            allowNull:false,
        },
        presion:{
            type : DataTypes.INTEGER,
            allowNull:false,
        },
        grosorPiel:{
            type : DataTypes.INTEGER,
            allowNull:false,
        },
        insulina:{
            type : DataTypes.INTEGER,
            allowNull:false,
        },
        bmi:{
            type : DataTypes.FLOAT,
            allowNull:false,
        },
        dpf:{
            type : DataTypes.FLOAT,
            allowNull:false,
        },
        edad:{
            type : DataTypes.INTEGER,
            allowNull:false,
        },
        resultado:{
            type : DataTypes.INTEGER,
            allowNull:false,
        }


    },{
        sequelize, 
        modelName: 'Registro'
    });
    return Registro;
}