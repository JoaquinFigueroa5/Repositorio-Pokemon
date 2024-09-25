export const reqPokemon = async (pokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await resp.json();
        
        const { sprites, forms, abilities } = data;
        const url = sprites.other['official-artwork'].front_default;

        const nombre = forms[0].name;
        const nombreHabilidad = abilities[0].ability.name;

        return { nombre, nombreHabilidad, url };
    } catch (err) {
        console.error(err);
        return null;
    }
};
