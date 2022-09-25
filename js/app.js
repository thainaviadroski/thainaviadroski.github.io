import data from "../data/data.json" assert { type: "json" };

const app = document.getElementById("app");

function execute() {
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		app.innerHTML += `<div class="curso">
		<img src="${element.imagem}" alt="" />
		<div className="content">
			<h3>${element.title}</h3>      
			<p>${element.discription}</p>
		</div>
		<a class="btn" href="${element.link}" target="_blank">Acessar</a>
		
	</div>`;
	}

	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		console.log(element.title);
	}

	
}

execute();
