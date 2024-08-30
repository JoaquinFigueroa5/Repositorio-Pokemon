

export const reqPokemon = async(pokemon) =>{
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        const data = await resp.json()
        const {abilities} = data
        const {sprites} = data
        const {forms} = nombre
        const url = sprites.other.showdown.front_default
        const nameAbility = abilities.ability.name
        const nombre = forms.name
        const efect = abilities.ability.url.effect_entries.effect
        

        const arregloAbilities = abilities.map((abilities) => ({
            nameAbility: abilities.ability.name,
            efect: abiliities.ability.url.effect_entries.effect,
            

        }))

        const arregloForms = forms.map((forms) => ({
            nombre: forms.name,
        }))

        const arregloSprites = sprites.map((sprites) => ({
            url: sprites.pokemon.other.showdown.front_default
        }))
        

        const iPokedex = [nombre, nameAbility, efect, url ]
        console.log(iPokedex)
        
        
    } catch (err) {
        console.error(err)
    }
}