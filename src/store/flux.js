/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            spells:[],
        },
        actions: {

            getCharacters: () => {
                fetch("https://hp-api.onrender.com/api/characters/")
                    .then(response => response.json())
                    .then(datos => setStore({ characters: datos }))
            },
            getSpells: () => {
                fetch("https://hp-api.onrender.com/api/spells/")
                    .then(response => response.json())
                    .then(datos => setStore({ spells: datos }))
            },
        }
    }
}

export default getStore