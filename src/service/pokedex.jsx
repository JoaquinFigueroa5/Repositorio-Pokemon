export const reqPokemon = async(pokemon) =>{
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        const {data} = await resp.json()

        const arregloPokedex = data.map((abilities) => ({
            name: forms.name,
            nameAbility: abilities.ability.name,
            efect: abiliities.ability.url.effect_entries.effect,
            url: sprites.other.showdown.front_default

        }))

        return arregloPokedex
        
    } catch (err) {
        console.error(err)
    }
}