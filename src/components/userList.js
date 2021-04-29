import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../redux/actions/user.actions"
import logo from '../logo.svg'
let UserList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userActions.getAllUser())
    },[])
    return(
        <div>
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
                <tr>
                    <td>ritanshu singh</td>
                    <td>ritanshukumarsingh8922@gmail.com</td>
                    <td>76272793-33</td>
                    <td>32 MARCH</td>
                    <td>amdin</td>
                </tr>

                {/*{*/}
                {/*    contactInfo.contacts.length > 0 ?*/}
                {/*        <React.Fragment>*/}
                {/*            {*/}
                {/*                contactInfo.contacts.map((contact) => {*/}
                {/*                    return (*/}
                {/*                       */}
                {/*                    )*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </React.Fragment> : null*/}
                {/*}*/}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;
