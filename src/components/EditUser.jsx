import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/actions/users';

const EditUser = ({ userInfo }) => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState()
    useEffect(() => {
        setUserData({
            id: userInfo?.id,
            name: userInfo?.name,
            company: {
                name: userInfo?.company?.name,
                catchPhrase: userInfo?.company?.catchPhrase,
                bs: userInfo?.company?.bs
            }
        });
    }, [userInfo])


    // const { userInfo } = props;
    // console.log('userInfo user---', userInfo)
    // console.log('update user---', userData?.name)
    const handleChange = (e) => {
        // console.log('et', e.target.name)
        setUserData(userData => ({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleCompanyChange = e => {
        setUserData({
            ...userData,
            company: {
                ...userData.company,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleEditUser = user => {
        if (user.name !== ""
            && user.company.name !== ""
            && user.company.catchPhrase !== ""
            && user.company.bs !== "") {
            dispatch(editUser(user))
        } else {
            alert('Please fill all the data')
        }
    }

    return (
        <>
            {
                userData ?
                    <>
                        <div className="mb-3">
                            <input className="form-control mb-2" type='text' name='name' placeholder='name' onChange={handleChange} value={userData?.name} />
                            <input className="form-control mb-2" type='text' name="name" placeholder='company name' onChange={handleCompanyChange} value={userData?.company?.name} />
                            <input className="form-control mb-2" type='text' name='catchPhrase' placeholder='company catch-phrase' onChange={handleCompanyChange} value={userData?.company?.catchPhrase} />
                            <input className="form-control mb-2" type='text' name='bs' placeholder='company bs' onChange={handleCompanyChange} value={userData?.company?.bs} />
                        </div>
                        <button className="btn btn-primary btn-sm float-right" onClick={() => handleEditUser(userData)} >Update User</button >
                    </>
                    : null}
        </>

    )
}

export default EditUser;