export const reqPokemon = async (pokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await resp.json()
        
        const { sprites, forms, abilities } = data;
        const url = sprites.other['official-artwork'].front_default;

        const arregloForms = forms.map((form) => ({
            nombre: form.name

        }))

        const arregloAbilities = abilities.map((abilities) => ({
            nombreHabilidad: abilities.ability.name
        }))


        const nombre = arregloForms[0].nombre
        const nombreHabilidad = arregloAbilities[0].nombreHabilidad

        const arregloSprites = [{
            url: url
        }]

        const iPokedex = [nombre, nombreHabilidad, url];
        console.log(iPokedex);
        
    } catch (err) {
        console.error(err);
    }
};
