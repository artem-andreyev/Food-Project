function forms() {
    // Forms

    const forms = document.querySelectorAll("form");

    const message = {
        loading: "img/form/spinner.svg",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    forms.forEach(item => {
        bindpostData(item);
    });

    const postData = async (url, data) => { // Запрос на сервер
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: data
        });

        return await res.json();
    };

    function bindpostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage); // Баг в нижнем модальном окне со спиннером (сдвигаются елементы)
            form.insertAdjacentElement("afterend", statusMessage); // Появляется после формы (все работает хорошо)

            // const request = new XMLHttpRequest();
            // request.open("POST", "server.php");

            // request.setRequestHeader("Content-type", "multipart/form-data"); // Из за того что у нас есть XMLHttpRequest заголовок уже создан автоматически и из за multipart/form-data возникает ошибка
            // request.setRequestHeader("Content-type", "application/json");
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // fetch("server.php", { // если promise попадает на ошибку связанную с http протоколом, то он не выкенет reject, он выполнит resolve
            //     method: "POST",
            //     headers: {
            //         "Content-type": "application/json" // Дублирует функцию postData
            //     },
            //     body: JSON.stringify(object)
            // })

            postData("http://localhost:3000/requests", json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(modal.failure);
            }).finally(() => {
                form.reset();
            });

            // request.send(json); // formData // для XMLHttpRequest
            
            // request.addEventListener("load", () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(modal.failure);
            //     }
            // });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal();

        const thanksModal = document.createElement("div");
        thanksModal.div.classList.add(".modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     body: JSON.stringify({name: "Alex"}),
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));

    fetch("http://localhost:3000/menu")
        .then(data => data.json())
        .then(res => console.log(res));   
}

module.exports = forms;