import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface IGenerateTextBody {
  prompt: string;
}

interface IGenerateTextResponse {
  message: string;
  prompt: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate-text')
  generateText(
    @Body() body: IGenerateTextBody,
  ): Promise<IGenerateTextResponse> {
    try {
      return this.appService.generateText(body.prompt);
    } catch (error) {
      console.log(error);
    }
  }
}
