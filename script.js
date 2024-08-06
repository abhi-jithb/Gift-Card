document.addEventListener('DOMContentLoaded', function() {
    const giftLink = document.getElementById('giftLink');
    const giftPopup = document.getElementById('giftPopup');
    const closeBtn = document.querySelector('.close-btn');

    giftLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Confetti explosion settings
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 1 }, // Start from the bottom
            gravity: -0.5 // Negative gravity to move particles upwards
        });

        // Delay the popup to allow confetti explosion to finish
        setTimeout(function() {
            giftPopup.classList.add('show');
        }, 1500); // 1.5 seconds delay
    });

    closeBtn.addEventListener('click', function() {
        giftPopup.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target == giftPopup) {
            giftPopup.classList.remove('show');
        }
    });
});
