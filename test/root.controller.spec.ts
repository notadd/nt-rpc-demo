import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';
import { RootController } from '../src/controllers/root.controller';

describe('RootController', () => {
    let rootController: RootController;

    beforeAll(async () => {
        const testModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        const app = await testModule.createNestApplication();
        await app.init();

        rootController = app.get(RootController);
    });

    it('sayHello', async () => {
        const { msg } = await rootController.sayHello({ name: 'Testers' });
        expect(msg).toBe('Hello Testers!');
    });
});