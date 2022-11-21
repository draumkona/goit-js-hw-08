import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
let dataForm = {
    email: "",
    message: "",
};

const savedInput = event => {
    const {
        elements: { email, message }
    } = form;

    dataForm = {
        email: email.value,
        message: message.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
};

form.addEventListener('input', throttle(savedInput, 500));

const reload = () => {
    const {
        elements: { email, message }
    } = form;

    const dataFromStorage = localStorage.getItem("feedback-form-state");

        try {
            const getData = JSON.parse(dataFromStorage);
            if (getData === "") {
                return;
            } else {
                    email.value = getData.email;
                    message.value = getData.message;
            }
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    };

window.addEventListener("load", reload);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, message }
    } = form;

    const dataToConsole = localStorage.getItem("feedback-form-state");

    if (email.value === "" || message.value === "") {
        return alert("Proszę uzupełnić wymagane pola.")
    } else {
        console.log(dataToConsole);
    }

    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
}; 

form.addEventListener("submit", handleSubmit);