import { Injectable } from '@nestjs/common';
import { Repository } from 'src/initializers/fishery';
import { Prisma, Hero, PrismaService } from 'src/initializers/prisma';

type UnsavedHero = Prisma.HeroCreateInput;

@Injectable()
export class HeroesRepository extends Repository<UnsavedHero, Hero> {
  constructor(private readonly prisma: PrismaService) {
    super((generator) => ({ onCreate }) => {
      onCreate(async (entity) => {
        return this.prisma.hero.create({
          data: entity,
        });
      });

      return {
        name: generator.person.fullName(),
        strength: 3,
        dexterity: 3,
        constitution: 3,
        intelligence: 3,
        wisdom: 3,
        charisma: 3,
      };
    });
  }

  public async findAllBy(where?: Partial<UnsavedHero>): Promise<Hero[]> {
    return this.prisma.hero.findMany({ where });
  }

  public generate(partial?: Partial<UnsavedHero>): UnsavedHero {
    return this.build(partial);
  }

  public async save(hero: Prisma.HeroCreateInput): Promise<Hero> {
    return this.create(hero);
  }
}

export { Hero, UnsavedHero };
