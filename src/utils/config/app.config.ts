import express, { Express } from "express";
import cors from 'cors';
import helmet from "helmet";
import { injectable, inject } from "inversify";

import { IRouter } from "../../controllers/Router";
import { TYPES } from "../../types/inversify-types";
import { ILogger } from "../logger/logger";

export interface IApplication {
    start_app_with_conf(): void;
}

/**
 * Application config class
 */
@injectable()
export class Application implements IApplication {
    private readonly _logger: ILogger;
    private readonly _router: IRouter;

    constructor(@inject(TYPES.IRouter) router: IRouter,
                @inject(TYPES.ILogger) logger: ILogger) {
        this._router = router;
        this._logger = logger;
    }

    start_app_with_conf = async (): Promise<void> => {
        
        const router = this._router.get();
        const logger = this._logger.get();

        const application: Express = express();

        application.set('title', 'Example application');

        application.use(cors());
        application.use(helmet());

        application.use(express.json());

        application.use('/api/v1', router);

        try {
            application.listen(process.env.PORT, () => {
                logger.info(`App started on port: ${process.env.PORT}`);
            })
        } catch (e: unknown) {
            logger.error(`App crashed by ${e}`);
        }
    }
}