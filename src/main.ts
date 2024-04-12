import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { GenerateTextModule } from './modules/generate-text/generate-text.module';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('GPT-3 API')
    .setDescription('API para interagir com o GPT-3 da OpenAI')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const app = await NestFactory.create(GenerateTextModule);
  app.setGlobalPrefix('api/v1');
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
      docExpansion: 'none',
    },
  });
  await app.listen(9999);
}
bootstrap();
