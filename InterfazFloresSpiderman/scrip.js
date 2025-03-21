document.addEventListener("DOMContentLoaded", () => {
    const spiderman = document.getElementById("spiderman");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const speed = 20;

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
            case "w":
                y -= speed;
                break;
            case "ArrowDown":
            case "s":
                y += speed;
                break;
            case "ArrowLeft":
            case "a":
                x -= speed;
                break;
            case "ArrowRight":
            case "d":
                x += speed;
                break;
        }

        x = Math.max(0, Math.min(window.innerWidth - 100, x));
        y = Math.max(0, Math.min(window.innerHeight - 100, y));

        spiderman.style.left = `${x}px`;
        spiderman.style.top = `${y}px`;
    });

    // Efecto de resaltar Spiderman al pasar el cursor
    spiderman.addEventListener("mouseover", () => {
        spiderman.style.transform = "scale(1.2)";
        spiderman.style.transition = "0.3s";
        spiderman.style.filter = "drop-shadow(0px 0px 10px yellow)";
    });

    spiderman.addEventListener("mouseout", () => {
        spiderman.style.transform = "scale(1)";
        spiderman.style.filter = "none";
    });

    // Efecto de vibración al hacer clic (telaraña)
    spiderman.addEventListener("click", () => {
        spiderman.style.animation = "vibrar 0.3s ease-in-out";
        setTimeout(() => {
            spiderman.style.animation = ""; // Quita la animación después de ejecutarse
        }, 300);
    });

    // Controles de audio
    const musica = document.getElementById("musica");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");

    playButton.addEventListener("click", () => musica.play());
    pauseButton.addEventListener("click", () => musica.pause());

    // Efecto de brillo en los botones de música
    const addHoverEffect = (button, color) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
            button.style.filter = `drop-shadow(0px 0px 10px ${color})`;
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.filter = "none";
        });
    };

    addHoverEffect(playButton, "red");
    addHoverEffect(pauseButton, "blue");
});