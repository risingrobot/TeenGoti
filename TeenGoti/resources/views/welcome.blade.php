<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Teen Goti</title>
        <link href="./css/app.css" rel="stylesheet">
        <script src='./js/app.js'></script>
        
        @yield('style')
    </head>
    <body id="Mbody">
    <div id="allthethings">
    <div id="single"><p>SINGLE PLAYER</p></div>
    <br>
    <div id="multiplayer"><p>SEARCH FOR PLAYERS</p></div>
    <br>
    <div id="twoplayers"><p>TWO PLAYERS...</p></div>
    <br>
    <br> 
    </div>
 

    @yield('content')
    @yield('script')
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">        
        
      <div class="modal-body">
      <canvas id='loading' style='width:100%;height:100%;'>
        <canvas>
        
      </div>
     
    </div>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
  </div>
  </div>
  
 
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>
    <a href='{{url('/game')}}'>Click mE</a>
    </body>
</html>
