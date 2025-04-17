import { Controller, Get, Render } from '@nestjs/common';
import { Hero, HeroesRepository } from 'src/repositories/heroes';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroes: HeroesRepository) {}

  @Get()
  @Render('heroes')
  public async index(): Promise<{ heroes: Hero[] }> {
    let heroes = await this.heroes.findAllBy();

    if (!heroes.length) {
      heroes = await this.heroes.createList(10);
    }

    return { heroes };
  }
}
