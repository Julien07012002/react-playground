//const helloWorld = React.createElement('h1', {}, 'Hello world!');
const firstname = "Julien"

const greetings =(name) => `Bonjour ${name} !`
const helloWorld = <h1>Hello {firstname}</h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
