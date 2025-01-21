import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import { TYPES } from "../types/inversify-types";
import { IService } from "../application/services/ProfileService";
import { ProfileNotFoundError } from "../application/errors/ProfileNotFoundError";

export interface IController {
    getProfileById(_request: Request, response: Response): Promise<void>;
}

@injectable()
export class AppController implements IController {
    private readonly _service: IService;

    constructor(@inject(TYPES.IService) service: IService) {
        this._service = service;
        this.getProfileById = this.getProfileById.bind(this);
    }

    /**
     * Example Controller method
     * @param request 
     * @param response 
     */
    public async getProfileById(request: Request, response: Response): Promise<void> {
        try {
            const profile = await this._service.getProfile(request.params['id']);

            if (profile === null) {
                throw new ProfileNotFoundError("Profile was not found");
            }
            response.status(200).send({ ...profile });
        } catch (err: unknown) {
            if (err instanceof ProfileNotFoundError) {
                response.status(404).json({ "error": "Profile was not found" });
            } 
            else {
                response.status(400).json({ "error": "Bad request" });
            }
        }
    }
}