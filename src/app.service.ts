import { Injectable, NotFoundException } from '@nestjs/common';

export type AbilitiesDto = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

@Injectable()
export class AppService {
  // TODO: change for env
  private readonly URL = 'https://pokeapi.co/api/v2/pokemon/';

  getHello(): string {
    return 'Hello World!';
  }

  async fetchSearchApi(search: string): Promise<AbilitiesDto[]> {
    try {
      const response = await fetch(this.URL + search);
      if (!response.ok) {
        if (response.status === 404) {
          throw new NotFoundException('Pokémon não encontrado');
        }
        throw new Error(`HTTP error Status: ${response.status}`);
      }
      const data = await response.json();

      return data.abilities.map((ability: any) => ({
        ability: {
          name: ability.ability.name,
          url: ability.ability.url,
        },
        is_hidden: ability.is_hidden,
        slot: ability.slot,
      }));

    } catch (err) {
      console.error('Error fetchSearchApi:', err);
      throw err;
    }
  }
}
