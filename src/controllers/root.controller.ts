import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { RootService } from '../services/root.service';

@Controller()
export class RootController {
    constructor(
        @Inject(RootService) private readonly rootService: RootService
    ) { }

    @GrpcMethod('RootService')
    async sayHello(data: { name: string }) {
        return this.rootService.sayHello(data.name);
    }
}