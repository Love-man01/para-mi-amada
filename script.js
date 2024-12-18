document.getElementById('openLetter').addEventListener('click', function() {
    var letter = document.querySelector('.letter');
    if (letter.classList.contains('hidden')) {
        letter.classList.remove('hidden');
        letter.classList.add('visible');
    }
});
