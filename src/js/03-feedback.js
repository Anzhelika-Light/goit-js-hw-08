var throttle = require('lodash.throttle');

const feedbackFormEl = document.querySelector('.feedback-form');
const userData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

const fillFeedbackFormFields = () => {
    try {
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

        // Якщо в localStorage нічого немає
        if (userDataFromLocalStorage === null) {
            return;
        }
    
        // Якщо в localStorage є дані, вносимо їх в поля
        for (const prop in userDataFromLocalStorage) {
            feedbackFormEl.elements[prop].value = userDataFromLocalStorage[prop];
        }
    } catch (err) {
        console.log(err);
    }
};

fillFeedbackFormFields();

const onFeedbackFormItemInput = event => {
    const {target} = event;

    const name = target.name;
    const value = target.value;

    // console.log(name);
    // console.log(value);

    userData[name] = value;

    // console.log(userData);

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

const onContactFormSubmit = event => {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.message.value === '') {
        alert('Усі поля повинні бути заповнені');
    }

    for (const key in userData) {
        delete userData[key];
    };
    feedbackFormEl.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(userData);
}

feedbackFormEl.addEventListener('input', throttle(onFeedbackFormItemInput, 500));
feedbackFormEl.addEventListener('submit', onContactFormSubmit);
