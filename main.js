ReactDOM.render(
    React.createElement('div', { 'style': { 'color': 'black' } },
        // définit un élément enfant à l'élément div
        React.createElement('h1', null, "Hello World!")
    ),
    // identifiant root permettant de placer l'élément dans le DOM
    document.getElementById('root')
);
