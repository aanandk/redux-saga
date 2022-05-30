import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/users";

const AddUser = () => {
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        name: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    const handleChange = (e) => {
        // console.log('et', e.target.name)
        setNewUser(newUser => ({
            ...newUser,
            [e.target.name]: e.target.value
        }))
    }

    const handleCompanyChange = e => {
        setNewUser({
            ...newUser,
            company: {
                ...newUser.company,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleAddUser = newUser => {
        if (newUser.name !== ""
            && newUser.company.name !== ""
            && newUser.company.catchPhrase !== ""
            && newUser.company.bs !== "") {
            dispatch(addUser(newUser))
        } else {
            alert('Please fill data for all the fileds')
        }
    }
    // console.log('newUser', newUser)
    // const newUser = {
    //     // id: 1,
    //     name: 'ánand',
    //     company: {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //     }
    // }

    return (
        <>
            <div className="mb-3">
                <input className="form-control mb-2" type='text' name='name' placeholder='name' onChange={handleChange} />
                <input className="form-control mb-2" type='text' name="name" placeholder='company name' onChange={handleCompanyChange} />
                <input className="form-control mb-2" type='text' name='catchPhrase' placeholder='company catch-phrase' onChange={handleCompanyChange} />
                <input className="form-control mb-2" type='text' name='bs' placeholder='company bs' onChange={handleCompanyChange} />
            </div>
            <button className="btn btn-primary btn-sm float-right" onClick={() => handleAddUser(newUser)}>Add User</button>
        </>
    )
}

export default AddUser;