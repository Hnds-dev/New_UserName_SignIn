let inputs = document.querySelectorAll("form input");
console.log(inputs);

let patterns = {
  username: /^(\w|\.|\-){5,12}$/gi,
  email: /\w+@\w+.\w{2,8}/gi,
  password: /(\w|\d){6,12}/gi,
  telephone: /07(8|7|5|9)\d{8}/gi,
  slug: /\w{8,}/gi,
};


function validation (input, regex) {
  if (regex.test(input.value)) {
    input.className = "valed";
  } else {
    input.className = "invaled";
  }
}
inputs.forEach((input) =>
  input.addEventListener("keyup", function (e) {
    validation(e.target, patterns[e.target.attributes.name.value]);
  })
);
