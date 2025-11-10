// Data limite para a contagem regressiva (72 horas a partir do carregamento da página)
const limiteData = new Date().getTime() + (72 * 60 * 60 * 1000);

const cronometroElemento = document.getElementById('cronometro');

// Função para atualizar o cronômetro a cada segundo
function atualizarCronometro() {
    // Data e hora atual
    const agora = new Date().getTime();

    // Distância (tempo restante)
    const distancia = limiteData - agora;

    // Cálculos de tempo (horas, minutos, segundos)
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formatação para ter sempre dois dígitos
    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');

    // Exibe o resultado no elemento
    cronometroElemento.innerHTML = `${horasFormatadas}h : ${minutosFormatados}m : ${segundosFormatados}s`;

    // Se a contagem regressiva acabar
    if (distancia < 0) {
        clearInterval(intervalo);
        cronometroElemento.innerHTML = "OFERTA EXPIRADA!";
        // Você pode adicionar código aqui para ocultar botões de compra se quiser
    }
}

// Atualiza o cronômetro a cada 1 segundo
const intervalo = setInterval(atualizarCronometro, 1000);

// Executa a função na carga inicial para evitar delay de 1s
atualizarCronometro();
