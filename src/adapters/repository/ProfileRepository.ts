import { inject, injectable } from "inversify";
import { DataSource } from "typeorm";
import { TYPES } from "../../types/inversify-types";
import { Connection } from "../../utils/orm/connections";
import { Profile } from "../schemas/Profile";

export interface IRepository {
    getUserByTelegramId(id: string): Promise<Profile>;
}

/**
 * Example repository
 */
@injectable()
export class Repository implements IRepository {
    private readonly _connection: DataSource;

    constructor(@inject(TYPES.Connection) connection: Connection) {
        this._connection = connection.connection;
    }

    async getUserByTelegramId(id: string): Promise<Profile> {
        const result = await this._connection
                .getRepository(Profile)
                .createQueryBuilder("profile")
                .where("profile.user_tg_id = :id", { id: id})
                .getOne();
        return result;
    }
}