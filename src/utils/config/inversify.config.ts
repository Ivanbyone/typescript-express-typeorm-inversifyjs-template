import "reflect-metadata";

import { Container } from "inversify";

import { Application, IApplication } from "./app.config";
import { TYPES } from "../../types/inversify-types";
import { IRouter, AppRouter } from "../../controllers/Router";
import { ILogger, AppLogger } from "../logger/logger";
import { IController, AppController } from "../../controllers/ProfileController";
import { Connection } from "../orm/connections";
import { IRepository, Repository } from "../../adapters/repository/ProfileRepository";
import { IService, Service } from "../../application/services/ProfileService";

// DI container instance
const container: Container = new Container();

container.bind<IApplication>(TYPES.IApplication).to(Application).inSingletonScope();
container.bind<IRouter>(TYPES.IRouter).to(AppRouter).inSingletonScope();
container.bind(TYPES.Connection).to(Connection).inSingletonScope();

container.bind<IController>(TYPES.IController).to(AppController);

container.bind<IRepository>(TYPES.IRepository).to(Repository);

container.bind<IService>(TYPES.IService).to(Service);

container.bind<ILogger>(TYPES.ILogger).to(AppLogger).inSingletonScope();


export { container };