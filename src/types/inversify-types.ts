// types for DI container
export const TYPES = {
    IApplication: Symbol.for("IApplication"),
    IRouter: Symbol.for("IRouter"),
    ILogger: Symbol.for("ILogger"),

    IController: Symbol.for("IController"),

    IRepository: Symbol.for("IRepository"),

    IService: Symbol.for("IService"),

    Connection: Symbol.for('Connection'),
}