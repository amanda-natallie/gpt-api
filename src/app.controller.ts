import { Body, Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

interface IGenerateTextBody {
  prompt: string;
}

interface IGenerateTextResponse {
  message: string;
  prompt: string;
}

@ApiTags('Text Handlers')
@Controller()
export class AppController {
  @ApiProperty()
  message: string;

  @ApiProperty()
  prompt: string;

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
