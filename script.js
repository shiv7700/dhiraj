(function () {
  console.log("gg");
  const apiKey = "c35b967a4387ba70e6b2d475275deb372e8bb8fe87c36a5c725bb286";
  const url = `https://api.ipdata.co?api-key=${apiKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      postData(data.city, data.region, data.country_name, data.ip);
    });
})();

function postData(v1, v2, v3, v4) {
  const apiUrl = "https://6526591e917d673fd76c101e.mockapi.io/blame";

  // Data to be posted
  const postData = {
    city: v1,
    region: v2,
    country: v3,
    ip: v4,
  };

  // Options for the fetch request
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if required by the API
    },
    body: JSON.stringify(postData),
  };

  // Make the fetch request
  fetch(apiUrl, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data posted successfully:", data);
    })
    .catch((error) => {
      console.error("Error posting data:", error);
    });
}

const form = document.querySelector("form");

// clear error
function clearError(element) {
  element.innerHTML = "";
}

function apiWork(p1, p2, p3) {
  const d1 = new Date().getDate();
  const d2 = new Date().getMonth();
  const d3 = new Date().getFullYear();

  const url = "https://657172c2d61ba6fcc012907a.mockapi.io/user";
  const postData = {
    name: p1,
    email: p2,
    message: p3,
    date: `${d1}-${d2}-${d3}`,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };
  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("POST request successful:", data);
    })
    .catch((error) => {
      console.error("Error making POST request:", error);
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.querySelector("#firstname");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  // select error
  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const messageError = document.querySelector(".message-error");

  // logic
  if (fullName.value.trim() === "") {
    nameError.innerHTML = "name is empty 🥺🥺🥺";
    throw new Error("name error");
  } else if (fullName.value.length <= 3 || fullName.value.length >= 25) {
    nameError.innerHTML = `full name must be between 3 and 25 characters`;
    throw new Error("name error");
  } else {
    clearError(nameError);
  }

  const emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emailAddress = email.value;
  let result = emailValidationRegex.test(emailAddress);
  if (email.value === "") {
    emailError.innerHTML = `email address is empty 🥺🥺🥺`;
    throw new Error("email error");
  } else if (result === false) {
    emailError.innerHTML = `email is not in valid form`;
    throw new Error("email error");
  } else {
    clearError(emailError);
  }

  if (message.value === "") {
    messageError.innerHTML = `message is empty 🥺🥺🥺`;
    throw new Error("message error");
  } else {
    clearError(messageError);
  }

  apiWork(fullName.value, email.value, message.value);
});
