import { Module } from '@nestjs/common';

import { RootController } from './controllers/root.controller';
import { RootService } from './services/root.service';

@Module({
    controllers: [RootController],
    providers: [RootService]
})
export class AppModule { }