function submitForm() {
    let isNotValid = false;
    const nameRegex = /[А-Я][а-я]+\s+[А-Я]\.\s+[А-Я]\./;
    const groupRegex = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]{2}-[0-9]{2}/;
    const facultyRegex = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]{4}/;
    const birthdateRegex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/; 

    const nameElem = document.getElementById('name');
    const name = nameElem.value
    if (name == null | name.length <= 5 | !nameRegex.test(name)) {
        alert("Введіть правильне ПІБ");
        isNotValid = true
        nameElem.style.border = '1px solid red'
    }

    const variantElem = document.getElementById('variant');
    const variant = variantElem.value
    if (variant == null || variant <= 0 || variant > 10) {
        if (!isNotValid) {
            alert("Введіть правильний варіант");
        }
        variantElem.style.border = '1px solid red'
        isNotValid = true
    }

    const groupElem = document.getElementById('group');
    const group = groupElem.value
    if (group == null || group.length != 5 || !groupRegex.test(group)) {
        if (!isNotValid) {
            alert("Введіть правильну групу");
        }
        groupElem.style.border = '1px solid red'
        isNotValid = true
    }

    const facultyElem = document.getElementById('faculty');
    const faculty = facultyElem.value
    if (faculty == null || faculty.length != 4 || !facultyRegex.test(faculty)) {
        if (!isNotValid) {
            alert("Введіть правильний факультет");
        }
        facultyElem.style.border = '1px solid red'
        isNotValid = true
    }

    const birthdateElem = document.getElementById('birthdate');
    const birthdate = birthdateElem.value
    if (birthdate == null || birthdate.length != 10 || !birthdateRegex.test(birthdate)) {
        if (!isNotValid) {
            alert("Введіть правильну дату народження");
        }
        birthdateElem.style.border = '1px solid red'
        isNotValid = true
    }
    if (isNotValid) {
        return false;
    }

    document.getElementById('name-value').innerHTML = name;
    document.getElementById('variant-value').innerHTML = variant;
    document.getElementById('group-value').innerHTML = group;
    document.getElementById('faculty-value').innerHTML = faculty;
    document.getElementById('birthdate-value').innerHTML = birthdate;


    const responseBlock = document.getElementById('response-block');
    responseBlock.style.display = 'block'

    return false;
}