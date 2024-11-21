import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdatePro = () => {
    const navigate = useNavigate()
    const { updateUser,setPhoto,setName } = useContext(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        setPhoto(photo)
        setName(name)
        updateUser({
            displayName: name, photoURL: photo
        })
        .then(() => {
        navigate('/profile')
        }).catch((error) => {
                console.log(errorMessage)
    });
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center min-h-screen  bg-base-200 gap-6 pb-[9rem] pt-[1rem]'>

                <div className="card w-full bg-white max-w-sm shrink-0 ">
                    <form onSubmit={handleUpdate} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>

                        <button className="btn  bg-gradient-to-b text-white from-cyan-500 to-blue-500">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePro;