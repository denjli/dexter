# ideas

i am planning on building a responsive web app with an awesome blur ui.

1. have an input at the top to search for different pokemons
2. render different pokemons as card on the main homepage
3. these pokemons should come from an external api
4. i can click on any pokemon and it should take me to their dedicated page
5. the dedicated page should contain more information about the pokemon
6. some sleek effects or animations
7. the data should be fetched in chunks (like when the user first loads the site it fetchs the first 30 pokemons, then as the user scrolls it keeps on loading more and more pokemons)
8. store the pokemons fetched in localstorage for performance benefits

# technologies

1. hero ui as the ui library
2. TODO: pokemon data api

# optimizations

1. don't load data again and again (use localstorage to save)
2. don't call api on user typing (use debouncing techniques)
3. lazy load the images if possible
4. the ui should be responsive
5. show loading spinner while data is being fetched
