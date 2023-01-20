import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'students',
})
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nickname!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    registered!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    login!: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status!: string;
}
