import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenerateTextInputDto } from '../dto/generate-text.input.dto';
import { GenerateTextOutputDto } from '../dto/generate-text.output.dto';
import { GenerateTextService } from '../generate-text.service';

export interface IGenerateTextBody {
  prompt: string;
}

@ApiTags('Text Handlers')
@Controller()
export class GenerateTextController {
  constructor(private readonly generateTextService: GenerateTextService) {}

  @Post('generate-text')
  @ApiOkResponse({
    type: GenerateTextOutputDto,
    description: 'The generated text',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  generateText(
    @Body() body: GenerateTextInputDto,
  ): Promise<GenerateTextOutputDto> {
    try {
      return this.generateTextService.generateText(body.prompt);
    } catch (error) {
      console.log(error);
    }
  }
}
