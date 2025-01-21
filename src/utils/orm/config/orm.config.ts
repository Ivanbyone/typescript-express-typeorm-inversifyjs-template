import 'dotenv/config';
import { DataSourceOptions } from "typeorm";

export const CONFIG: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD.toString(),
    database: process.env.POSTGRES_DB,
    logging: false,
    entities: ['src/adapters/schemas/**/*.ts'],
    migrations: ['src/utils/orm/migrations/**/*.ts']
}