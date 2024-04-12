import { Test, TestingModule } from '@nestjs/testing';
import { GenerateTextService } from '../generate-text.service';
import { GenerateTextController } from './generate-text.controller';

jest.mock('openai');

describe('GenerateTextController', () => {
  let appController: GenerateTextController;

  beforeEach(async () => {
    jest.clearAllMocks();
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GenerateTextController],
      providers: [GenerateTextService],
    }).compile();

    appController = app.get<GenerateTextController>(GenerateTextController);

    const service = app.get<GenerateTextService>(GenerateTextService);
    jest.spyOn(service, 'generateText').mockImplementation(async (prompt) => {
      return {
        message: 'Hello, World!',
        prompt,
      };
    });
  });

  describe('root', () => {
    it('should return any string as message and the prompt', async () => {
      const response = await appController.generateText({ prompt: 'Olá' });
      expect(response).toEqual({
        prompt: 'Olá',
        message: expect.any(String),
      });
    });
  });
});
