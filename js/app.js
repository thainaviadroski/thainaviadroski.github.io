import data from "../data/data.json" assert { type: "json" };

const app = document.getElementById("app");

function execute() {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    app.innerHTML += `<div>
	
		<h3>${element.title}</h3>

	</div>`;
  }

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element.title);
  }

  console.log("foi");
}

execute();
