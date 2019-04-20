window.addEventListener('load', function() {
    var div = document.getElementById('single');
    if(div != null){
    div.style.cursor = 'pointer';
    div.onclick = function() {
        $('#exampleModalCenter').modal('toggle');
        window.location = './game';
    };
    div = document.getElementById('multiplayer');
    
    div.style.cursor = 'pointer';
    div.onclick = function() {
      // $('#exampleModalCenter').show();
          
      $('#exampleModalCenter').modal('toggle');
      window.location = './game'; 
       // $('#exampleModalCenter').modal('show');
       // $('#exampleModalCenter').modal('hide');
    };
    div = document.getElementById('twoplayers');
    
    div.style.cursor = 'pointer';
    div.onclick = function() {
        $('#exampleModalCenter').modal('toggle');
        window.location = './game'; 
    };
    }
    });

    
