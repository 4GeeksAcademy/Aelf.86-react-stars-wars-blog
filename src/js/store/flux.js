const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// array muchos
			characters: [],
			planets: [],
			//objeto es decir 1
			character: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({ characters: data.results })
				} catch (error) {
					console.log(error)
				}
			},
			getCharacter: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ character: data })
				} catch (error) {
					console.log(error)
				}
			},
			getPlanet: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ planets: data })
				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data)
					setStore({ planets: data.results })
				} catch (error) {
					console.log(error)
				}
			},
			addFaves(name) {
				const store = getStore()
				const fav = store.favorites
				const newFaves = [...fav, { name: name, id: fav.length }]
				setStore({ favorites: newFaves })
			},
			deleteFaves(id) {
				const store = getStore();
				const fav = store.favorites;
				const favesUpdated = fav.filter((item) => item.id !== id);
				setStore({favorites: favesUpdated})
			}
		}
	}

}
export default getState;
