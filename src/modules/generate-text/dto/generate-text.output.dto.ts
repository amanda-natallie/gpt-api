import { ApiProperty } from '@nestjs/swagger';

export class GenerateTextOutputDto {
  @ApiProperty({
    name: 'prompt',
    description: 'The prompt for text generation',
    type: String,
  })
  prompt: string;

  @ApiProperty({
    name: 'message',
    description: 'The generated text',
    type: String,
  })
  message: string;
}
