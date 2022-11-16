
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 



// Étape 3

 class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  


function Clock(props) {
    React.useEffect(() => {
        tick();        
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [color, setcolor] = React.useState("#000000");
    const intervalid = React.useRef(null);

    const inputRef = React.useRef();

    React.useEffect(() => {
      console.log(intervalid);
    }, [intervalid]);

    const tick = () => {

       intervalid.current = setInterval(() => {
            setDate(new Date())
        }, 1000)
    };

    const changeColor = () => {
      let randomHexadecimalValue = Math.floor(Math.random() * 16777215).toString(16);

      setColor(randomHexadecimalValueWithInteger)
    }

    const resetColor = () => {
      setColor("#000000")
    };

    const stopClock = () => {
      clearInterval(intervalid.current)
    }
    

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style ={{Color}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={changeColor}>Changer la couleur</button>
            <button onClick={resetColor}>Reset la couleur</button>

            <button onClick={tick}>Restart</button>
            <button onClick={stopClock}>Stop</button>

            <input ref={intervalid} type="text" name="" id=""/>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





