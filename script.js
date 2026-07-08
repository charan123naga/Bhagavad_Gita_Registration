const form = document.getElementById("registrationForm");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Prevent multiple submissions
  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";

  const data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    city: document.getElementById("city").value,
    district: document.getElementById("district").value,
    state: document.getElementById("state").value,
    timing: document.getElementById("timing").value,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyAvzyKvCMzWgOmeYBzLF2GFX5IcirtZbRf747MjLI52Jm4CYpqF6LYHQwsrOjpZwLH/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      },
    );

    form.reset();

    document.getElementById("whatsappSection").style.display = "block";

    submitBtn.innerText = "Submitted ✓";
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");

    // Re-enable button if submission fails
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit";
  }
});
