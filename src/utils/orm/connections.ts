import { injectable } from "inversify";
import { DataSource } from "typeorm";

import { CONFIG } from "./config/orm.config";

/**
 * Database connection class
 */
@injectable()
export class Connection {
    readonly connection: DataSource;

    constructor() {
        this.connection = new DataSource(CONFIG);
    }

    async initialize(): Promise<void> {
        if (!this.connection.isInitialized) {
            await this.connection.initialize();
        }
    }

    async close(): Promise<void> {
        if (this.connection.isInitialized) {
            await this.connection.destroy();
        }
    }
}