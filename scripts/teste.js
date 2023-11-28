document.addEventListener("DOMContentLoaded", function () {
    const mapa = document.getElementById("mapa");
    const packman = document.getElementById("packman");
    packman.className = "packman";
    packman.style.position = "absolute";
    mapa.appendChild(packman);

    let packmanLeft = 0;
    let packmanTop = 0;

    document.addEventListener("keydown", function (event) {
        movePackman(event.key);
    });

    function movePackman(direction) {
        const speed = 1;

        switch (direction) {
            //para cima
            case "ArrowUp":
                packmanTop -= speed;
                break;
            case "w":
                packmanTop -= speed;
                break;
            //para baixo
            case "ArrowDown":
                packmanTop += speed;
                break;
            case "s":
                packmanTop += speed;
                break;
            //para esquerda
            case "ArrowLeft":
                packmanLeft -= speed;
                break;
            case "a":
                packmanLeft -= speed;
                break;
            //para direita
            case "ArrowRight":
                packmanLeft += speed;
                break;
            case "d":
                packmanLeft += speed;
                break;
        }

        packman.style.left = packmanLeft + "em";
        packman.style.top = packmanTop + "em";
    }
});
