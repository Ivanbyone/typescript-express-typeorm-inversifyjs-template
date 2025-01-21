import { inject, injectable } from "inversify";
import { IRepository } from "../../adapters/repository/ProfileRepository";
import { TYPES } from "../../types/inversify-types";
import { Logger } from "log4js";
import { ILogger } from "../../utils/logger/logger";
import { MESSAGES } from "../../types/messages";
import { BadRequest } from "../errors/BadRequest";
import { Profile } from "../../adapters/schemas/Profile";

export interface IService {
    getProfile(id: string): Promise<Profile>;
}

@injectable()
export class Service implements IService {
    private readonly _repository: IRepository;
    private readonly _logger: Logger;

    constructor(@inject(TYPES.IRepository) repository: IRepository,
                @inject(TYPES.ILogger) logger: ILogger) {
        this._repository = repository;
        this._logger = logger.get();
    }

    /**
     * Example Service method
     * @param id 
     * @returns 
     */
    async getProfile(id: any): Promise<Profile> {
        if (typeof id !== "string") {
            try {
                id = id.toString();
            }
            catch (err: unknown) {
                this._logger.error(`${MESSAGES.ERROR}: ${err}`);
                throw new BadRequest("Bad Request");
            }
        }

        try {
            const profile = await this._repository.getUserByTelegramId(id);
            return profile;
        }
        catch (err: unknown) {
            this._logger.error(`{${MESSAGES.ERROR}: ${err}}`);
            throw new BadRequest("Bad request");
        }
    }
}