import { Router } from "express";
import { injectable, inject } from "inversify";
import { IController } from "./ProfileController";
import { TYPES } from "../types/inversify-types";

export interface IRouter {
    get(): Router;
}

/**
 * Example Router
 */
@injectable()
export class AppRouter implements IRouter {
    private readonly _controller: IController;

    constructor(@inject(TYPES.IController) controller: IController) {
        this._controller = controller;
    }

    get(): Router {
        return Router()
            .get('/profile/:id', this._controller.getProfileById)
    }
}