window.addEventListener('load', function() {
    alert(1);
    var something = document.getElementById('single');

something.style.cursor = 'pointer';
something.onclick = function() {
    alert('single');
};
something = document.getElementById('multiplayer');

something.style.cursor = 'pointer';
something.onclick = function() {
    $('#exampleModalCenter').show();
};
something = document.getElementById('options');

something.style.cursor = 'pointer';
something.onclick = function() {
    alert('options');
};
});

