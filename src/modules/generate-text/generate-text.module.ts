import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GenerateTextController } from './controller/generate-text.controller';
import { GenerateTextService } from './generate-text.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [GenerateTextController],
  providers: [GenerateTextService],
})
export class GenerateTextModule {}
