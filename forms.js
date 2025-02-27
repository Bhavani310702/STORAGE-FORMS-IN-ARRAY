let dataform = document.getElementById("dataform");
dataform.addEventListener("submit", function (e) {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("data")) || [];
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let number = document.getElementById("no").value;
  let gender = document.getElementById("gen").value;
  let user = { name, mail, number, gender };
  users.push(user);
  localStorage.setItem("data", JSON.stringify(users));
  dataform.reset();
  
  let userdata = JSON.parse(localStorage.getItem("data"));
  output(userdata);
});

function output(obj) {
  let input = document.getElementById("input");
  input.innerHTML = " ";
  for (let i = 0; i < obj.length; i++) {
    let userobj = obj[i];
    let usersdetails = document.createElement("div");
    usersdetails.classList.add("user");
    usersdetails.innerHTML = `
            <h1>${userobj.name}</h1>
            <h3>Email: ${userobj.mail}</h3>
            <h3>Number: ${userobj.number}</h3>
            <h3>Gender: ${userobj.gender}</h3>`;
    input.append(usersdetails);
  }
   
}
