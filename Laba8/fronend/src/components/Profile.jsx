import a from './Profile.module.css';
import React, { useEffect, useState } from 'react';

function Profile(params) {
    const [user, setUser] = useState({
        full_name:'',
        password:'',
        group:'',
        phone_number:'',
        username:'',
        status:'',
        variant:'',
    });
    const [isLogin, setData] = useState([]);
    const [fullNameValue, setFullNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [groupValue, setGroup] = useState('');
    const [variantValue, setVariant] = useState('');
    const [statusValue, setStatus] = useState('');
    const [phoneNumberValue, setPhoneNumber] = useState('');
    const [emailValue, setEmail] = useState('');
    const handleNameInputChanges = (e) => {
        setFullNameValue(e.target.value);
    };
    const handlePasswordInputChanges = (e) => {
        setPasswordValue(e.target.value);
    };
    const handleGroupInputChanges = (e) => {
        setGroup(e.target.value);
    };
    const handleVariantInputChanges = (e) => {
        setVariant(e.target.value);
    };
    const handlePhoneNumberInputChanges = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleStatusInputChanges = (e) => {
        setStatus(e.target.value);
    };
    const handleEmailInputChanges = (e) => {
        setEmail(e.target.value);
    };
    const updateProfile = () => {

        fetch('http://localhost:3001/change', {
            method: 'post',
            withCredentials: true,
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                full_name: document.getElementById('full-name').value,
                group: document.getElementById('group').value,
                variant: document.getElementById('variant').value,
                phone_number: document.getElementById('phone-number').value,
                status: document.getElementById('status').value,
                login: isLogin,
            }),
        });
    };
    useEffect(() => {
        fetch('http://localhost:3001/', {
            withCredentials: true,
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res.user.full_name);
            });

        fetch('http://localhost:3001/profile', {
            withCredentials: true,
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((res) => {
                setUser(res);
            });
    }, [params.user, isLogin]);

    return (
        <div className={a.Profile}>
            <div className={a.profile}>
                <div className={a['profile-main']}>
                    <div className={a['profile-avatar']}>
                        <img
                            className={a['profile-avatar__img']}
                            alt={user.photo}
                            src={user.photo}
                        />
                    </div>
                </div>

                <div className={a['profile-description']}>
                    <div className={a['user-description']}>
                        <span>
                            Your information:
                        </span>
                        <br />
                        <button className={a['changebtn']} onClick={updateProfile}>
                            Edit information
                        </button>
                        <ul>
                            <li>
                                    <label>
                                        Email:{' '}
                                        <input
                                            onChange={handleEmailInputChanges}
                                            id="email"
                                            value={emailValue || user.email}
                                        ></input>
                                    </label>
             
                            </li>
                            <li>
                                    <label>
                                        Full Name:{' '}
                                        <input
                                            onChange={handleNameInputChanges}
                                            id="full-name"
                                            value={fullNameValue || user.full_name}
                                        ></input>
                                    </label>
             
                            </li>
                            <li>
                                    <label>
                                        Group:{' '}
                                        <input
                                            onChange={handleGroupInputChanges}
                                            id="group"
                                            value={
                                                groupValue || user.group
                                            }
                                        ></input>
                                    </label>
                            </li>
                            <li>
                                    <label>
                                        Password:{' '}
                                        <input
                                            onChange={handlePasswordInputChanges}
                                            id="password"
                                            value={
                                                passwordValue || user.password
                                            }
                                        ></input>
                                    </label>
                            </li>
                            <li>
                                    <label>
                                        Variant:{' '}
                                        <input
                                            onChange={handleVariantInputChanges}
                                            id="variant"
                                            value={
                                                variantValue || user.variant
                                            }
                                        ></input>
                                    </label>
                            </li>
                            <li>
                                    <label>
                                        Phone number:{' '}
                                        <input
                                            onChange={handlePhoneNumberInputChanges}
                                            id="phone-number"
                                            value={
                                                phoneNumberValue || user.phone_number
                                            }
                                        ></input>
                                    </label>
                            </li>
                            <li>
                                    <label>
                                        Status:{' '}
                                        <input
                                            onChange={handleStatusInputChanges}
                                            id="status"
                                            value={
                                                statusValue || user.status
                                            }
                                        ></input>
                                    </label>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
