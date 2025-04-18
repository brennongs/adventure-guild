import { Controller, Get, Render, Post, Body } from '@nestjs/common';
import { Hero, UnsavedHero, HeroesRepository } from 'src/repositories/heroes';

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

  @Get('hero')
  public generate(): UnsavedHero {
    return this.heroes.generate();
  }

  @Post()
  public create(@Body() hero: UnsavedHero): Promise<Hero> {
    console.log(hero);
    return this.heroes.save(hero);
  }
}
