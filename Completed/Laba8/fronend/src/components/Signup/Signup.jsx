import React from 'react';
import validateInfo from './validateInfo';
import useForm from './useForm';
import r from '../Registration.module.css';

const Signup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validateInfo
    );

    return (
        <div className={r['form-content']}>
            <form onSubmit={handleSubmit} className={r.form} noValidate>
                <h1>
                    Sign up
                </h1>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Email</label>
                    <input
                        className={r['form-input']}
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Full Name</label>
                    <input
                        className={r['form-input']}
                        type="text"
                        name="full_name"
                        placeholder="Enter your fullname"
                        value={values.full_name}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Group</label>
                    <input
                        className={r['form-input']}
                        type="text"
                        name="group"
                        placeholder="II-00"
                        value={values.group}
                        onChange={handleChange}
                    />

                </div>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Variant</label>
                    <input
                        className={r['form-input']}
                        type="text"
                        name="variant"
                        placeholder="from 1 to 9"
                        value={values.variant}
                        onChange={handleChange}
                    />

                </div>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Phone number</label>
                    <input
                        className={r['form-input']}
                        type="text"
                        name="phone_number"
                        placeholder="+380000000000"
                        value={values.phone_number}
                        onChange={handleChange}
                    />

                </div>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Enter password</label>
                    <input
                        className={r['form-input']}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className={r['form-inputs']}>
                    <label className={r['form-label']}>Confirm password</label>
                    <input
                        className={r['form-input']}
                        type="password"
                        name="password2"
                        placeholder="Confirm your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className={r['form-input-btn']} type="submit">
                    Sign up
                </button>
                <span className={r['form-input-login']}>
                    Already have an account? Sign in <a href="/">here</a>
                </span>
            </form>
        </div>
    );
};

export default Signup;
