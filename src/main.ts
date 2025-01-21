import 'dotenv/config';

import { TYPES } from "./types/inversify-types";
import { IApplication } from "./utils/config/app.config";
import { container } from "./utils/config/inversify.config";
import { Connection } from './utils/orm/connections';
import { ILogger } from './utils/logger/logger';

/**
 * App's entrypoint
 * @returns 
 */
const entrypoint = async () => {
    const logger = container.get<ILogger>(TYPES.ILogger);
    const connection: Connection = await container.getAsync(TYPES.Connection);

    // creating db connection 
    await connection.initialize()
        .then(() => {
            logger.get().info("Database connected");
        })
        .catch((err) => {
            logger.get().info(`Database connection error: ${err}`);
        });

    const application = container.get<IApplication>(TYPES.IApplication);
    return application.start_app_with_conf();
}

entrypoint();