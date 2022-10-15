import { useState, useEffect } from 'react';
const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        full_name: '',
        email: '',
        group: '',
        variant: '',
        phone_number: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.location.pathname !== '/registration') {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .then(function (response, request) {
                    if (response.user.name === false) {
                        alert('Forbidden');
                    } else {
                        window.location.pathname = '/'
                    }
                });
        } else {
            fetch('http://localhost:3001/register', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify({
                    email: e.target.email.value,
                    full_name: e.target.full_name.value,
                    phone_number: e.target.phone_number.value,
                    group: e.target.group.value,
                    variant: e.target.variant.value,
                    password: e.target.password.value,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .then(function (response) {
                    if (!response.user.name) {
                        alert('Invalid data');
                    } else {
                        setIsSubmitting(true);
                        e.preventDefault();
                        setErrors(validateInfo(values));
                        window.location.pathname = '/'
                    }
                });
        }

        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            (callback)
            callback();
        }
    }, [callback, errors, isSubmitting]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
