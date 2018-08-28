import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
    async sayHello(name: string) {
        return { msg: `Hello ${name}!` };
    }
}