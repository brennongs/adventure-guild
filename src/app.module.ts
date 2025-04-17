import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/health';
import { HeroesModule } from './modules/heroes';

@Module({
  imports: [ConfigModule, HeroesModule],
  controllers: [AppController],
})
export class AppModule {}
