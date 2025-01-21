# Minimal Typescript Express template with dependency injection (DEV version)
## Description
Minimal example of Express application with Dependency Injection pattern (for development environment).
This projects includes 3 layers:
- controllers
- application (service layer)
- adapters (infrastructure layer).
## Technologies
- Typescript
- Express
- PostgreSQL (typeorm)
- InversifyJs (Dependency Injection framework)
- log4js
- Docker
## Installation
1. Clone this repository:
```bash
   git clone https://github.com/Ivanbyone/typescript-express-typeorm-inversifyjs-template.git
```
2. Create .env file as .env.example with your secrets.
3. Create Docker image.
```bash
    docker build . -t <your_name>
```
4. Run docker
```bash
    docker run <your_name>
```

Congratulations! 
Have a good development.