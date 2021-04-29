import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import UserList from "./components/userList";
import AddUser from "./components/addUser";
function App() {
    const [addUserModal, setAddUserModal] = React.useState(false);
    return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="/" className="navbar-brand">Assignment</a>
      </nav>
        <div className="list-container p-3">
            <div className="btn-container d-flex flex-column align-items-start justify-content-start my-5">
                <button className="btn btn-primary mt-2" onClick={()=>setAddUserModal(true)}>Add User</button>
            </div>
            <UserList/>
            <AddUser show={addUserModal} onHide={()=>setAddUserModal(false)}/>
        </div>
    </div>
  );
}

export default App;
