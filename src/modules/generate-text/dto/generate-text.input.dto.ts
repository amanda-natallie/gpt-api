import { ApiProperty } from '@nestjs/swagger';

export class GenerateTextInputDto {
  @ApiProperty({
    name: 'prompt',
    description: 'The prompt for text generation',
    type: String,
  })
  prompt: string;
}
