import { Module } from '@nestjs/common';
import { PrismaService } from 'src/initializers/prisma';
import { HeroesController } from 'src/controllers/heroes';
import { HeroesRepository } from 'src/repositories/heroes';

@Module({
  controllers: [HeroesController],
  providers: [PrismaService, HeroesRepository],
})
export class HeroesModule {}
