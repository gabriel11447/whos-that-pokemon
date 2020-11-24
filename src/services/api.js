import axios from 'axios';

export default async function fetchData(name) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data.id;
    } catch (error) {
        console.error(error);
        return 0;
    }
}