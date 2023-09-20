const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone_number");
let password = document.getElementById("user_password");
let passwordConfirm = document.getElementById("confirm_password");
let message = document.querySelector(".message");

document.querySelector("form").addEventListener("submit", async (e) => {
	const body = JSON.stringify({
		"first-name": firstName.value,
		"last-name": lastName.value,
		email: email.value,
		"phone-number": phoneNumber.value,
		password: password.value,
	});
	e.preventDefault();
	await fetch("http://localhost:3006/", {
		method: "POST",
		body,
	}).then((res) => res.json());
});

function checkPassword() {
	if (password.value === "") {
		message.innerHTML = "*Fill the password please!";
		password.setAttribute("invalid", "");
	} else if (password.value !== passwordConfirm.value) {
		message.innerHTML = "*The password isn't the same!";
	} else {
		message.innerHTML = "";
		password.removeAttribute("invalid");
	}
}
