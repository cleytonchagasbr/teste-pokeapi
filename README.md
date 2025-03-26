# Pokémon API Proxy

## Description

This project provides a single endpoint to fetch Pokémon data from the [PokéAPI](https://pokeapi.co).  
You can retrieve Pokémon abilities by making a request to:

**Base URL:**  
[https://teste-pokeapi.onrender.com/api/pokemons/{pokemon_name}](https://teste-pokeapi.onrender.com/api/pokemons/ditto)  

**Example Request:**  
```http
GET https://teste-pokeapi.onrender.com/api/pokemons/ditto


# Install dependencies
npm install


# Development mode
npm run start

# Watch mode (auto-restart on changes)
npm run dev

# Production mode
npm run prod


Deployment
The project is deployed on Render for easy evaluation and to simulate a production-like environment.
Check out the live API: https://teste-pokeapi.onrender.com

