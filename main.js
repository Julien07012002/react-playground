function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous connecter</h1>;
}
function Greeting(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
function App(props) {
  React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersObject => setUsers(usersObject))
  }, [])

  const [users, setUsers] = React.useState([]);

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

  return(
      <React.Fragment>
          {isLoggedIn ? 
          <React.Fragment>
              <UserGreeting />
              <button onClick={handleLogOut}>Se déconnecter</button>
          </React.Fragment> : 
          <React.Fragment>
              <GuestGreeting />
              <button onClick={handleLogIn}>Se connecter</button>
          </React.Fragment> }
      {
          users.map((u) =>(
              <UserCard key={u.id} user={u}/>
          ))
      }
      </React.Fragment>
  )
}

ReactDOM.render(
  <Greeting />,
  document.querySelector('#app')
);
}

function UserCard({user}) {


  return (
      <ul className="user-card">
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.company.name}</li>
          <li>{user.phone}</li>
          <li>{user.website}</li>
      </ul>
  )

}

ReactDOM.render(<App/>, document.querySelector('#app'))