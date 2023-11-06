let form = document.querySelector("form");
form.addEventListener("submit", (createApi) => {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
    form.classList.add("was-validated");
});

function createApi(event) {
    event.preventDefault();

    let name = event.target.fname.value;
    let email = event.target.mail.value;
    let phone = event.target.num.value;
    let time = event.target.time.value;
    let date = event.target.date.value;

    formData = {
        name,
        email,
        phone,
        time,
        date,
    };

    //post method create api call in axios
    axios
        .post(
            "https://crudcrud.com/api/128cfb77c29643fc806ef4f3fb5bc858/appintmentData",
            formData
        )
        .then((res) => {
            showUserDisplay(res.data);
            // console.log(res);
        })
        .catch((err) => {
            document.body.innerHTML =
                document.body.innerHTML + "<h4>something went Wrong</h4>";
            let error = "Something went wrong";
            alert(error);
            console.log(err);
        });
}

function showUserDisplay() {
    let new_ele = document.createElement("li");
    new_ele.textContent =
        formData.name +
        " " +
        formData.email +
        " " +
        formData.phone +
        " " +
        formData.date +
        " " +
        formData.time;

    list.append(new_ele);

    let new_button = document.createElement("input");
    new_button.type = "button";
    new_button.value = "delete";
    new_button.className = "btn-danger btn-sm float-right delete";
    new_ele.appendChild(new_button);

    new_button.onclick = () => {
        localStorage.removeItem("formData");
        new_ele.remove();
    };

    let edit_button = document.createElement("input");
    edit_button.type = "button";
    edit_button.className = "btn-success btn-sm float-right delete";
    edit_button.value = "Edit";
    new_ele.appendChild(edit_button);

    edit_button.onclick = () => {
        localStorage.removeItem("formData");
        new_ele.remove();

        fname.value = formData.name;
        mail.value = formData.email;
        num.value = formData.phone;
        date.value = formData.date;
        time.value = formData.time;
    };
}