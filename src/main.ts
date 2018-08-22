import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:50050',
            package: 'notadd_rpc_demo',
            protoPath: join(__dirname, './protobufs/root.proto')
        }
    });
    await app.listenAsync();
}

bootstrap();