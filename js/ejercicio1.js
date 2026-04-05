document.addEventListener('DOMContentLoaded', function() {
    const cambiarColorBtn = document.getElementById('cambiarColor');
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    cambiarColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
        document.getElementById('colorActual').textContent = getRandomColor();
    });
});