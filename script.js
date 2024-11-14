function calcularEstatisticas() {
    const colors = [
        { name: "Azul", hex: "#1E90FF" },
        { name: "Verde", hex: "#32CD32" },
        { name: "Vermelho", hex: "#FF4500" },
        { name: "Rosa", hex: "#8A2BE2" },
        { name: "Preto", hex: "#000000" },
        { name: "Cinza", hex: "#A9A9A9" },
        { name: "Laranja", hex: "#FFA500" },
        { name: "Amarelo", hex: "#FFD700" },
        { name: "Branco", hex: "#FFFFFF" },
        { name: "Ciano", hex: "#00FFFF" },

    ];

    let totalPessoas = 0;
    const contagemCores = {};

    // Obtenha e valide os valores das entradas
    colors.forEach(color => {
        const input = document.getElementById(color.name);
        const quantidade = parseInt(input.value) || 0;
        contagemCores[color.name] = quantidade;
        totalPessoas += quantidade;
    });

    // Atualize o total de pessoas
    document.getElementById("total-pessoas").textContent = `Total de pessoas pesquisadas: ${totalPessoas}`;

    // Limpe os resultados anteriores
    const resultadoBarras = document.getElementById("resultado-barras");
    resultadoBarras.innerHTML = "";

    // Exibe as barras de porcentagem com as cores correspondentes
    colors.forEach(color => {
        const quantidade = contagemCores[color.name];
        const porcentagem = totalPessoas ? (quantidade / totalPessoas * 100).toFixed(2) : 0;

        // Criação da barra de resultado
        const barContainer = document.createElement("div");
        barContainer.classList.add("result-bar");

        // Nome da cor
        const colorName = document.createElement("div");
        colorName.classList.add("color-name");
        colorName.textContent = color.name;
        barContainer.appendChild(colorName);

        // Barra de progresso
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");

        const progress = document.createElement("div");
        progress.classList.add("progress");
        progress.style.width = `${porcentagem}%`;
        progress.style.backgroundColor = color.hex;
        progress.textContent = `${porcentagem}%`;

        progressBar.appendChild(progress);
        barContainer.appendChild(progressBar);

        // Porcentagem ao lado da barra
        const percentageLabel = document.createElement("div");
        percentageLabel.classList.add("percentage");
        percentageLabel.textContent = `${porcentagem}%`;
        barContainer.appendChild(percentageLabel);

        resultadoBarras.appendChild(barContainer);
    });
}
