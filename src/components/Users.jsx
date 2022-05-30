import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getSingleUser } from "../redux/actions/users";
import AddUser from "./AddUser";
import Card from "./Card";

const Users = () => {

    const dispatch = useDispatch();
    const usersState = useSelector(state => state.users)
    const { users, loading, error, user } = usersState
    // const state = useSelector(state => state)
    // console.log('state:', state)

    console.log('users:', users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            <AddUser />
            <button className="btn btn-warning btn-sm" onClick={() => dispatch(getSingleUser(1))}>Get Single User</button>
            {user?.name}
            <hr />
            {users.loading && <p>Loading...</p>}
            {users.length === 0 && !loading && <p>No users available.</p>}
            {error && !loading && <p>{error}</p>}
            {users.length > 0 && users.map(user => (
                <Card key={user.id} user={user} />
            ))}
        </>
    )
}

export default Users;