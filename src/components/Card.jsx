import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/actions/users";
import { modalStatus } from '../redux/actions/users';
import EditUser from "./EditUser";
import Modal from "./modal";

const Card = props => {
    const { user } = props;
    const dispatch = useDispatch();
    const modalShow = useSelector(state => state.users.modalShow)
    const [userInfo, setUserInfo] = useState()

    // const [modalState, setModalState] = useState(false)
    // const close = () => {
    //     setModalState(false)
    // }
    const handleEdit = (id, userData) => {
        userData = { ...userData, id: id }
        // userData.push({ id: id })
        dispatch(modalStatus(true))
        setUserInfo(userData)
        // setModalState(true)
        // dispatch(editUser({
        //     "id": 1,
        //     "name": "Leanne Graham2 123",
        //     "username": "Bret",
        //     "email": "Sincere@april.biz",
        //     "address": {
        //         "street": "Kulas Light",
        //         "suite": "Apt. 556",
        //         "city": "Gwenborough",
        //         "zipcode": "92998-3874",
        //         "geo": {
        //             "lat": "-37.3159",
        //             "lng": "81.1496"
        //         }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "hildegard.org",
        //     "company": {
        //         "name": "Romaguera-Crona",
        //         "catchPhrase": "Multi-layered client-server neural-net",
        //         "bs": "harness real-time e-markets"
        //     }
        // }))
    }

    const handleDelete = id => {
        // console.log(id)
        dispatch(deleteUser(id))
    }

    const handleClose = () => {
        dispatch(modalStatus(false))
    }

    return (
        <>
            {userInfo ?
                <Modal show={modalShow} handleClose={handleClose} title="Edit User">
                    <EditUser userInfo={userInfo} />
                </Modal>
                : null
            }
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {user.name}
                        <span className="float-right">
                            <button className="btn btn-secondary btn-sm mr-2" onClick={() => handleEdit(user.id, user)}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                        </span>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.company.name}</h6>
                    <p className="card-text">{user.company.catchPhrase}</p>

                </div>
            </div >
            {/* 
            <Modal show={modalState} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    <h4>Popover in a modal</h4>


                    <hr />

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal> */}
        </>

    )
}
export default Card;