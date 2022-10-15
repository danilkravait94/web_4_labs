export default function validateInfo(values) {
    let errors = {};

    if (!values.full_name.trim()) {
        errors.full_name = 'Enter full name';
    }
    if (!values.email) {
        errors.email = 'Enter email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Enter invalid. Example: example@gmail.com';
    }
    if (!values.password) {
        errors.password = 'Enter password';
    } else if (values.password.length < 6) {
        errors.password = 'Password length must be more 6';
    }

    if (!values.password2) {
        errors.password2 = 'Confirm your password';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords not equal';
    }
    return errors;
}
