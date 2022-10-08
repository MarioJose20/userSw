import { IUser } from "../entities/User";
import { AbstractDao } from "./AbstractDao";
import sqlite from 'sqlite';

export class UserDao extends AbstractDao<IUser>{
    public constructor(db:sqlite.Database){
        super('USER', db as sqlite.Database);
        super.exec('CREATE TABLE IF NOT EXISTS USER('
         + ' _id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, '
         + ' name TEXT, '
         + ' lastName TEXT, '
         + ' user TEXT, '
         + ' password, '
         + ' email TEXT);').then().catch(e=>console.error(e));
    }
    public async getUsers(){
        return super.findAll()
    }
    public async getUserById(identifier: Partial<IUser>){
        try {
            const result = await super.findByID(identifier);
            return result;
        } catch (ex: unknown) {
            console.log("UserDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }
    public async insertNewUser(newUser: IUser){
        try {
            const result = await super.createOne(newUser);
            return result;
        } catch (ex: unknown) {
            console.log("UserDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }
    public async updateNewUser(updateUser: IUser){
        try {
            const {_id, ...updateObject} = updateUser;
            const result = await super.update({_id}, updateObject);
            return result;
        } catch (ex: unknown) {
            console.log("UserDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }
    public async deleteUser(deleteUser: Partial<IUser>){
        try {
            const {_id} = deleteUser;
            const result = await super.delete({_id});
            return result;
        } catch (ex: unknown) {
            console.log("UserDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }
}