import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import UserList from "./components/userList";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="/" className="navbar-brand">Assignment</a>
      </nav>
        <div className="list-container p-3">
            <h3 className="text-left font-weight-normal text-primary my-5">Users list</h3>
            <UserList/>
        </div>
    </div>
  );
}

export default App;
