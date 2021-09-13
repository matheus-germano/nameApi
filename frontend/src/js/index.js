async function convertName() {
  let name = document.getElementById("nameInput").value;

  await fetch("http://localhost:3333/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
    }),
  });

  fetch("http://localhost:3333/get")
    .then(response => response.json())
    .then(response => {
      document.getElementById("convertedName").innerText = response.name;
      document.getElementById("convertedName").style.color = "#333";
      document.getElementById("convertedName").style.fontWeight = "bold";
    });
}