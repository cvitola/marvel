const baseURL = 'https://gateway.marvel.com:443/v1/public';
const character = '/characters'
const code = '?ts=1&apikey=d202b76ad56809c9a98c4e5b781266c7&hash=716a3fea624cb934d481380b7e281737'
/*https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d202b76ad56809c9a98c4e5b781266c7&hash=716a3fea624cb934d481380b7e281737*/
export const getAllCharacters = async() =>{ 
    try {
        const characters = await fetch(baseURL+character+code);
        const data = await characters.json();
        return data.data.results;
    } catch (error) {
        console.log(error)
    }


}