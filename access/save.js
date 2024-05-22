/*     const user = {
      name: nameInput.value,
      email: emailInput.value,
      web: userWeb.value,
      message: mesage.value,
    };
    const dataToSend = JSON.stringify(user);
    let dataReceived = "";

    fetch("https://borjomi.loremipsum.ge/api/send-message", {
      mode: "no-cors",
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: dataToSend,
    })
      /* .then((resp) => {
        resp = resp.json();
      }) */
/*.then((resp) => {
        if (resp.status === 1) {
          form.classList.add("remove");
          dialog.classList.add("open");
          return resp.JSON();
        } else {
          console.log("Status: " + resp.status);
          return Promise.reject("server");
        }
      })

      .catch((err) => {
        if (err === "server") return;
        console.log(err);
      }); */
/* form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData();

  formData.append("name", nameInput.value);
  formData.append("email", emailInput.value);
  formData.append("web", userWeb.value);
  formData.append("message", mesage.value);

  try {
    const res = await fetch("https://borjomi.loremipsum.ge/api/send-message", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });

    const resData = await res.json();

    if (data.status === 1) {
      form.classList.add("remove");
      dialog.classList.add("open");
    } else {
      console.error();
    }
  } catch (err) {
    console.log(err.message);
  }
}); */
