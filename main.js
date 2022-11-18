function App(props) {
  const [base, setBase] = React.useState('none')
  const [decimal, setDecimal] = React.useState('');
  const [binary, setBinary] = React.useState('');
  const handleChange = (value, base) => {    
    switch(base) {
      case "binary":
        setBinary(parseInt(value, 10).toString(2))
        setDecimal(value);
        break;


function NameForm(props) {
    const [name, setName] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Le nom a été soumis: ${name}`);
      case "decimal":
        setDecimal(parseInt(value, 2).toString(10))
        setBinary(value);
        break;
    }

  }


    return(
    <form onSubmit={handleSubmit}>
        <label>
        Nom :
        <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
    </form>
);
  return (
    <React.Fragment>
      <BaseNumberInput 
        number={decimal} 
        onChangeBase={handleChange} 
        base="binary" 
        text="décimale"  />
      <BaseNumberInput 
        number={binary} 
        onChangeBase={handleChange} 
        base ="decimal" 
        text="binaire" />
    </React.Fragment>
  )
}

function EssayForm(props) {
    const [text, setText] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Le texte a été soumis: ${text}`);
    }

    return(
        <form onSubmit={handleSubmit}>
          <label>
            Essay:
            <textarea rows={5} cols={35} value={text} onChange={handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>

      )

function BaseNumberInput({base, text, number, onChangeBase}) {
  const handleChange = ({target: {value}}) => {
    onChangeBase(value, base);
    console.log(base);

  }


function FlavorForm(props) {
    const [value, setValue] = React.useState('coconut');
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`la valeur sélectionnée est: ${value}`);
    }

    return(
        <form onSubmit={handleSubmit}>
          <label>
            Choisissez votre parfum favori :
            <select value={value} onChange={handleChange}>
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
          </label>
          <input type="submit" value="Envoyer" />
        </form>
    );
  return(
      <React.Fragment>
        <p>Base {text} </p>
        <input value={number} onChange={handleChange} />
      </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);


function MultiForm(props) {
    const [inputs, setInputs] = React.useState({
        name: '',
        text: '',
        value: "coconut"
    });


    const handleChange = ({target: {name, value}}) => {
        setInputs(state => ({...state, [name]: value}), []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for(const name in inputs) {
            console.log(`${name}: ${inputs[name]}`)
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            </label>

            <label>
                Essay:
                <textarea name="text" value={inputs.text} onChange={handleChange} />
            </label>

            <label>
                Choisissez votre parfum favori :
                <select name="value" value={inputs.value} onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>

            <input type="submit" value="Envoyer" />
        </form>
    )
}

ReactDOM.render(<MultiForm />, document.querySelector('#app'));