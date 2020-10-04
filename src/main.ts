import { AppModule } from './app.module';
import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

dotenv.config();
const logger = new Logger('main');

export async function createApp(): Promise<INestApplication> {
    return NestFactory.create(AppModule);
}

export async function configureApp(app: INestApplication): Promise<void> {
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true
        })
    );

    app.use('/files', express.static(join(__dirname, '..', 'files'))); // <-


    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    if (require.main === module) {
        const port = process.env.PORT || 3000;
        logger.log(`Starting server on port: ${port}`);
        await app.listen(port);
    }
}

createApp()
    .then(async app => configureApp(app))
    .then(() => logger.log(`Bootstrap configuration complete.`))
    .catch(e => {
        throw e;
    });
