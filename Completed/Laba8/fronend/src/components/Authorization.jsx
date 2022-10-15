import React from 'react';
import validateInfo from './Signup/validateInfo';
import useForm from './Signup/useForm';
import a from './Authorization.module.css';

const Authorization = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validateInfo
    );

    return (
        <div className={a.Authorization}>
            <div className={a['form-container']}>
                <div className={a['form-content']}>
                    <form onSubmit={handleSubmit} className={a.form} noValidate>
                        <div className={a['form-inputs']}>
                            <label className={a['form-label']}>Email</label>
                            <input
                                className={a['form-input']}
                                type="text"
                                name="email"
                                placeholder="Enter email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={a['form-inputs']}>
                            <label className={a['form-label']}>Password</label>
                            <input
                                className={a['form-input']}
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <button className={a['form-input-btn']} type="submit">
                            Sign  in
                        </button>
                        <span className={a['form-input-login']}>
                            Don't have an account yet? Sign up{' '}
                            <a href="/registration">here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Authorization;
