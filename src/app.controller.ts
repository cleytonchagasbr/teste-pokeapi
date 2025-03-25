import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AbilitiesDto } from './dto/abilities.dto';

@Controller('api/pokemons')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':pokemon')
  async getAbility(@Param('pokemon') pokemon: string): Promise<AbilitiesDto[]> {
    return await this.appService.fetchSearchApi(pokemon);
  }
}
