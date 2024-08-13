import { fetchJSON, includes } from "./utils.js";

export class Pokedex{

    constructor(Pokemon_API){

        if (!Pokemon_API || Pokemon_API.length === 0) {
            throw new Error("URL doldurulması zorunludur!");
        }

        this.Pokemon_API = Pokemon_API;
        this.limit = 25;
    }


    async fetchData(){
        const data = await fetchJSON(`${this.Pokemon_API}?limit=${this.limit}`);
        return data;
    }

    async loadMore() {
        this.limit += 25;
        return await this.fetchData();
    }


    async findPokemonName(keyword) {

        this.limit = 1302;
        const { results } = await this.fetchData();

        if (!keyword.length) {
            this.limit = 25;
            return results;
        }

        const filteredResults = results.filter(response =>
            response.name.toLowerCase().includes(keyword.toLowerCase())
        );

        this.limit = 25;
        return filteredResults;
    }
}