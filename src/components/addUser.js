import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../redux/actions/user.actions"
import {Modal} from "react-bootstrap";

let AddUser = (props)=>{
    let dispatch = useDispatch()

    let [user , setUser] = useState({
        name : '',
        email : '',
        password : '',
        contact:'',
        dob:"",
        role:"",

    });

    let [userError , setUserError] = useState({
        nameError : '',
        emailError : '',
        passwordError : '',
        contactError:'',
        dobError:'',
        roleError:''
    });

    let validateUsername = (event) => {
        setUser({...user , name : event.target.value});
        if(event.target.value.length>30){
            setUserError({...userError , nameError: 'Maximum 30 Characters allowed'})
        }else{
            setUserError({...userError , nameError: ''});
        }
    }

    let validateEmail = (event) => {
        setUser({...user , email : event.target.value});
        let regExp = /^\w+([\\.-]?\w+)@\w+([\\.-]?\w+)(\.\w{2,3})+$/;
        !regExp.test(event.target.value) ?
            setUserError({...userError , emailError: 'Enter a proper Email'})
            : setUserError({...userError , emailError: ''});
    }

    let validateRole  = () =>{
        if(user.role===""){
            setUserError({...userError , roleError: 'please select a role'})
            return false
        }else{
            setUserError({...userError , roleError: ''})
            return true
        }
    }

    let submitRegister = (event) => {
        event.preventDefault();
        if(user.name !== '' && user.email !== '' && validateRole()){
            dispatch(userActions.addUser(user));
            props.onHide()
        }
    };
    let updateInput = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <form onSubmit={submitRegister}>
                    <div className="form-group">
                        <input
                            name="name"
                            value={user.name}
                            onChange={validateUsername}
                            type="text" className={`form-control ${userError.nameError.length > 0 ? 'is-invalid' : ''}`} placeholder="Name"/>
                        {userError.nameError.length > 0 ? <small className="text-danger">{userError.nameError}</small> : ''}
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            value={user.email}
                            onChange={validateEmail}
                            type="email" className={`form-control ${userError.emailError.length > 0 ? 'is-invalid' : ''}`} placeholder="Email"/>
                        {userError.emailError.length > 0 ? <small className="text-danger">{userError.emailError}</small> : ''}
                    </div>
                    <div className="form-group">
                        <input
                            name="contact"
                            value={user.contact}
                            onChange={updateInput}
                            type="number" className="form-control" placeholder="contact-number (Optional)"/>
                    </div>
                    <div className="form-group">
                        <input
                            name="dob"
                            value={user.dob}
                            onChange={updateInput}
                            type="date" className="form-control" placeholder="DOB (Optional)"/>
                    </div>
                    <div className="form-group">
                        <select
                            name="role"
                            value={user.role}
                            onChange={updateInput}
                            required
                            className="form-control">
                            <option value="">select role</option>
                            <option value="owner">owner</option>
                            <option value="admin">admin</option>
                            <option value="operator">operator</option>
                            <option value="user">user</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
export default AddUser;