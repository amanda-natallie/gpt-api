import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import Configuration, { ClientOptions, OpenAI } from 'openai';
import { from, lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private openai: OpenAI;
  constructor(private httpService: HttpService) {
    const configuration: Pick<ClientOptions, 'apiKey'> = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.openai = new OpenAI(configuration);
  }

  async generateText(prompt: string): Promise<any> {
    try {
      const payload = {
        model: 'gpt-3.5-turbo-instruct',
        prompt,
        max_tokens: 50,
        temperature: 1, // o quanto vc permite que a IA seja criativa
      };

      const response = await lastValueFrom(
        from(this.openai.completions.create(payload)),
      );
      return {
        message: response.choices[0].text,
        prompt,
      };
    } catch (error) {
      console.log(error);
      throw new Error('Error generating text');
    }
  }
}
