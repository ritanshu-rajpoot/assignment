import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../redux/actions/user.actions"
import * as userReducers from "../redux/reducer/user.reducer"
let UserList = () => {
    const dispatch = useDispatch();
    let userInfo = useSelector((state)=>{
        return state[userReducers.userFeatureKey];
    })
    useEffect(()=>{
        dispatch(userActions.getAllUser())
    },[])
    return(
        <div>
            {
                userInfo.loading?<h2>loading</h2>:
                    <table className="table table-hover table-primary text-center table-striped">
                        <thead className="bg-primary text-white">
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CONTACT</th>
                            <th>DOB</th>
                            <th>ROLE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            userInfo.users.length > 0?
                                <React.Fragment>
                                    {
                                        userInfo.users.map((eachUser)=>{
                                            return(
                                                <tr>
                                                    <td>{eachUser.name}</td>
                                                    <td>{eachUser.email}</td>
                                                    <td>{eachUser.contact}</td>
                                                    <td>{eachUser.dob}</td>
                                                    <td>{eachUser.role}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment>:null
                        }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default UserList;
