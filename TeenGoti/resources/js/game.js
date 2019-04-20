var canvas = document.getElementById('inner');
var canvasouter = document.getElementById('outer');
if(canvas != null && canvasouter != null){
$('#exampleModalCenter').modal('hide');
canvas.width = window.innerWidth-300;
canvas.height =window.innerHeight-200;
var playerid = 1;
canvasouter.width = window.innerWidth-300;
canvasouter.height =100;
var contextoutter = canvasouter.getContext('2d')
var context = canvas.getContext('2d'), elemLeft = canvas.offsetLeft,   elemTop = canvas.offsetTop;
var borderlines = [];

citynames = [];
var sessionid = "";
var fps = 60;
var borderlinespoints=[];
borderlinespoints.push(new points(canvas.width/2, canvas.height/2));
var paused = false;
var outroads = [];
var cPieces = [];
var enterpressed = false;
var borderlineobj= null;
var cpiecesobj = null;
var timmer = new timer();
var bar = null;

var turn =  {oneplayer:0,secondplayer:0};
keypress = false;
    createworld();
    
    window.addEventListener('keydown', function (e){
        keypress = true;
        doKeyDown(e);
    }, false);
 
    $("#closbtn").click(function() {
       
        $('#myModal').modal('hide');
    });  
    $(window).resize(function () {
        canvas.width = window.innerWidth-300;
        canvas.height = window.innerHeight;
    });
    

function doKeyDown(e) {

    
    var code = e.keyCode;
    switch (code) {
        case 37:
        if(cPieces.length > 0 && checklinesdrawn() )
        {
         if(borderlineobj != null && !enterpressed){
             filter();
             borderlineobj.takenpiece(false);
             borderlinespoints.push(borderlineobj);
         }            
         borderlineobj = getavailbletable();
         if(enterpressed || cpiecesobj == null){
         for(var i=0;i<cPieces.length;i++){
             if(cPieces[i].playerid == playerid && cPieces[i].dontdraw == true){                 
             cpiecesobj = cPieces[i];
             cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
             borderlineobj.takenpiece(true);
             borderlinespoints.push(borderlineobj);
             enterpressed = false;            
             break; 
             
         }
     }
     }else
     {
         cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
         borderlineobj.takenpiece(true);
         borderlinespoints.push(borderlineobj);
     }
                
        }else
        {
            alert(1);
        }
            break; //Left key
        case 38: 
        if(cPieces.length > 0 && checklinesdrawn() && checkpiecesdrawn())
           {
            if(borderlineobj != null && !enterpressed){
                filter();
                borderlineobj.takenpiece(false);
                borderlinespoints.push(borderlineobj);
            }            
            borderlineobj = getavailbletable();
            if(enterpressed || cpiecesobj == null){
            for(var i=0;i<cPieces.length;i++){
                if(cPieces[i].playerid == playerid && cPieces[i].dontdraw == true){                 
                cpiecesobj = cPieces[i];
                cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
                borderlineobj.takenpiece(true);
                borderlinespoints.push(borderlineobj);
                enterpressed = false;            
                break;
            }
        }
        }else
        {
            cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
            borderlineobj.takenpiece(true);
            borderlinespoints.push(borderlineobj);
        }
                   
           }else
           {
           
            for(var i=0;i<cPieces.length;i++){
                var val = Math.floor(Math.random()*cPieces.length);
                if(cPieces[val].playerid == playerid ){                 
                cpiecesobj = cPieces[val];
                borderlineobj = getavailbletableforCpieces(cpiecesobj.x,cpiecesobj.y);
                if(borderlineobj != null){
                filterCpiecs(cpiecesobj.x,cpiecesobj.y)
                cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
                borderlineobj.takenpiece(true);
                borderlinespoints.push(borderlineobj);
                cPieces.push(cpiecesobj);
                enterpressed = false;            
                break;
                }
            }
            
        }
    }
           
            break; //Up key

        case 39: 
        if(cPieces.length > 0 && checklinesdrawn())
           {
            if(borderlineobj != null && !enterpressed){
                filter();
                borderlineobj.takenpiece(false);
                borderlinespoints.push(borderlineobj);
            }            
            borderlineobj = getavailbletable();
            if(enterpressed || cpiecesobj == null){
            for(var i=0;i<cPieces.length;i++){
                if(cPieces[i].playerid == playerid && cPieces[i].dontdraw == true){                 
                cpiecesobj = cPieces[i];
                cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
                borderlineobj.takenpiece(true);
                borderlinespoints.push(borderlineobj);
                enterpressed = false;            
                break; 
                
            }
        }
        }else
        {
            cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
            borderlineobj.takenpiece(true);
            borderlinespoints.push(borderlineobj);
        }
                   
           }else
           {
               alert(1);
           } 
         
            break; //Right key
        case 40: 
        if(cPieces.length > 0 && checklinesdrawn())
        {
         if(borderlineobj != null && !enterpressed){
             filter();
             borderlineobj.takenpiece(false);
             borderlinespoints.push(borderlineobj);
         }            
         borderlineobj = getavailbletable();
         if(enterpressed || cpiecesobj == null){
         for(var i=0;i<cPieces.length;i++){
             if(cPieces[i].playerid == playerid && cPieces[i].dontdraw == true){                 
             cpiecesobj = cPieces[i];
             cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
             borderlineobj.takenpiece(true);
             borderlinespoints.push(borderlineobj);
             enterpressed = false;            
             break; 
             
         }
     }
     }else
     {
         cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
         borderlineobj.takenpiece(true);
         borderlinespoints.push(borderlineobj);
     }
                
        }else
        {
            alert(1);
        }
            break; //Down key

            case 13:
            
                if(Checkifwin())
                {
                    alert(playerid);return;
                }
            
            if(enterpressed == false && borderlineobj != null){
            enterpressed = true;
            if(playerid == 1)
            {playerid = 2}
            else{playerid = 1}    
            filter();          
            borderlineobj.takenpiece(true);
            borderlinespoints.push(borderlineobj);
            cpiecesobj.updatedraw(false,borderlineobj.x,borderlineobj.y);
            cpiecesobj = null;
            clearTimeout(bar);
            timmer = null;
            timmer  = new timer();
            bar = null;                      
            }
            break;//Enter key
        default:
            break; //Everything else
    }
    if(bar == null){
    if(checklinesdrawn()){bar=setInterval(timmer.arcMove,100);}else{bar=setInterval(timmer.arcMove,100);}
    
    }
    if(code == 13){
        contextoutter.clearRect(0, 0, 1200, 900);
      
    }
    context.clearRect(0, 0, 1200, 900);
    
    if(keypress){if(playerid ==1){turn.oneplayer = 0;}else{turn.secondplayer = 0;}keypress = false;}
}

function Checkifwin()
{
    var array = [];
    for(var i=0;i< cPieces.length;i++)
    {
        if(cPieces[i].id == playerid)
        {
            if(cPieces[i]){
            array.push(cPieces[i]);
            }
        }
    }
    if (array.length == 3){
    var a = array[0];
    var b =array[1];
    var c = array[2];
    if(a.x *(b.y-c.y)+b.x*(c.y-a.y)+c.x*(a.y-b.y) == 0)
    {
        return true;
    }
}
    return false;    
}
function checklinesdrawn()
{
    for(var i=0;i<borderlinespoints.length;i++)
    {
        if(!(borderlinespoints[i].taken))
        {
            return true;
        }
    }
    return false;
    
}
function checkpiecesdrawn()
{
    for(var i=0;i<cPieces.length;i++)
    {
        if(cPieces[i].dontdraw == true)
        {
            return true;
        }
    }
    return false;
}

function mouseDown(event) {

    var x = event.clientX;
    var y = event.clientY;
   
   

};
function nearbypoints(borderlinespoints, x,y) {
    var isCollision = false;
    var y = false;
    
        var a = borderlinespoints.x - x;
        var b = borderlinespoints.y - y
        var c = Math.sqrt(a * a + b * b);              
        if (c < 500) {
            y = true;
        }    
        console.log(c);
        console.log('------------');
    if (y) {
        isCollision = true;
    }
    return isCollision;
};

function getavailbletableforCpieces(x,y)
{
    for(var i=0;i<borderlinespoints.length;i++)
    {
        if(borderlinespoints[i].taken == false && nearbypoints(borderlinespoints[i],x,y)) 
        {
           return borderlinespoints[i];
        }
    }
    return null;
}
function filterCpiecs(x,y)
{
    for(var i=0;i<borderlinespoints.length;i++)
    {
        if(borderlinespoints[i].x == x && borderlinespoints[i].y == y)
        {
            borderlinespoints[i].taken = false;

        }
    }
}
function filter()
{
    var filtered = borderlinespoints.filter(function(value, index, arr){

        return value != borderlineobj;
    
    });
    borderlinespoints = filtered;
}
function getavailbletable()
{
    for(var i =0;i<borderlinespoints.length;i++)
    {
     if(!(borderlinespoints[i].taken))
     {         
        borderlineobj = borderlinespoints[i];
              
        break;
     }
    }
    return borderlineobj;
}
var personobj = [];

function collidesLast(personobj, shopobj) {
    var isCollision = false;
    var y = false;
    for (var i = 0, len = shopobj.length; i < len; i++) {
        var a = shopobj[i].x - personobj.m;
        var b = shopobj[i].y - personobj.n
        var c = Math.sqrt(a * a + b * b);
              
        if (c < 72) {
            y = true;
        }
    }
    if (y) {
        isCollision = true;
    }
    return isCollision;
};

canvas.onmousemove = function (e) {

    var x = e.offsetX, y = e.offsetY,i = 0, r;   
   
};
canvas.addEventListener('click', function (e) {
    var x = e.offsetX, y = e.offsetY,   
    i = 0, r;    
    
}, false);
function Circle(x, y,color,id,pid) {
    this.x = x;
    this.y = y; 
    this.radius = 15;
    this.color = color;
    this.id = id;
    this.dontdraw = true;
    this.playerid = pid;
    this.draw = function (context) {  
            
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = '#efeaea';
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.font = "12px Arial";
        context.fillStyle = "black";
        context.fillText(this.id,this.x,this.y);
      
    }; 
    this.updatedraw = function(draw,x,y)
    {
        this.dontdraw = draw;
        this.x = x;
        this.y = y; 
    };  
};


function animate() {
    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 500 / fps);
    
    
   for(var i =0;i<borderlines.length;i++)
   {
    borderlines[i].draw();
   } 
   for(var i =0;i<cPieces.length;i++){
       if(cPieces[i].dontdraw)
       {cPieces[i].draw(contextoutter);}
       else
       {cPieces[i].draw(context);}
    
  } 

    
};
function removeItem(array, item) {
    for (var i in array) {
        if (array[i] == item) {
            array.splice(i, 1);
            break;
        }
    }
}
var processing = [];
function borderline(x,y)
{
    this.x = x;
    this.y = y;
    this.taken = false;     

    this.draw = function () {
        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height/2);        
        context.lineTo(this.x, this.y);
        context.lineWidth = 10;
        context.strokeStyle = '#0a0a0a';
        context.stroke();  
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI * 2, false);
        context.strokeStyle = '#efeaea';
        context.stroke();
    };
    

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function createworld()
{
    var angle = 0;
    var bangle = 0;
    
    while(borderlines.length > 0){
        borderlines.pop();
    }
    for(var i=0;i<8;i++)
    {         
        borderlines.push(new borderline(angle,bangle));
        borderlinespoints.push(new points(angle,bangle));
        if(i==2 || i==3)
        {
         bangle+=canvas.height/2;  
        }else if(i==4 || i ==5)
        {angle-=canvas.width/2;}
        else if(i==6)
        {
            bangle-=canvas.height/2;
        }
        else{
            angle+=(canvas.width/2);
            bangle=0;
        }        
    } 
    
    while(cPieces.length > 0){cPieces.pop();}
    var id = "1";
    var circleposition = 50;
    var color = getRandomColor();
    for(var i=0;i<6;i++){
    cPieces.push(new Circle(circleposition,50,color,id,id));  
    if(circleposition ==150)
        {
            id = "2";
            circleposition+=canvasouter.width - 300;
            color = getRandomColor();
        }  else
        {
            circleposition+=50 
        }
    }
    timmer.draw();
};

function points(x,y) {
   this.x = x;
   this.y = y;
   this.taken = false;
   this.takenpiece = function(taken)
   {
       this.taken = taken;
   }
};


// var mouse = {
//     x: 0,
//     y: 0
// };



// // Event Listeners
// addEventListener("mousemove", function (event) {
//     mouse.x = event.clientX;
//     mouse.y = event.clientY;    
// });

// function collides(rects, x, y) {
//     var isCollision = false;
//     var shopde = null; 
//     for (var i = 0, len = rects.length; i < len; i++) {
//         var left = rects[i].x, right = rects[i].x + rects[i].dx;
//         var top = rects[i].y, bottom = rects[i].y + rects[i].dy;
//         if (right >= x
//             && left <= x
//             && bottom >= y
//             && top <= y) {
//             isCollision = rects[i];
//             shopde = rects[i];
//         }
//     }

//     return { code: isCollision, message: shopde };
// };

function timer()
{
var al=0;
var start=4.72;
var cw=contextoutter.canvas.width/2;
var ch=contextoutter.canvas.height/2;
this.diff;
this.draw =  function()
{
    diff=(al/9)*Math.PI*2;
    contextoutter.beginPath();
    contextoutter.arc(cw,ch,30,0,2*Math.PI,false);
    contextoutter.fillStyle='#FFF';
    contextoutter.fill();
    contextoutter.strokeStyle='#e7f2ba';
    contextoutter.stroke();
    contextoutter.fillStyle='#000';
    contextoutter.strokeStyle='#b3cf3c';
    contextoutter.textAlign='center';
    contextoutter.lineWidth=15;
    contextoutter.font = '10pt Verdana';
    contextoutter.beginPath();
    contextoutter.arc(cw,ch,30,start,diff+start,false);
    contextoutter.stroke();
    al++;  
}
this.arcMove = function (){
diff=(al/9)*Math.PI*2;
contextoutter.beginPath();
contextoutter.arc(cw,ch,30,0,2*Math.PI,false);
contextoutter.fillStyle='#FFF';
contextoutter.fill();
contextoutter.strokeStyle='#e7f2ba';
contextoutter.stroke();
contextoutter.fillStyle='#000';
contextoutter.strokeStyle='#b3cf3c';
contextoutter.textAlign='center';
contextoutter.lineWidth=15;
contextoutter.font = '10pt Verdana';
contextoutter.beginPath();
contextoutter.arc(cw,ch,30,start,diff+start,false);
contextoutter.stroke();
if(al>=9){
clearTimeout(bar);
start = 4.72;
diff = 0;
al = 0;
bar = null;
// e = {
//     keyCode: 38
// };
// doKeyDown(e); 
// if(checkpiecesdrawn()){
// var e = {
//     keyCode: 13
// };
// enterpressed = false;
// doKeyDown(e);

// }else
// {
//     var e = {
//         keyCode: 13
//     };
//     enterpressed = false;
//     doKeyDown(e);
    
// }
// if(playerid == 1)
// {
//     turn.oneplayer++;;
// }else
// {
//     turn.secondplayer++;
// }

// if(turn.oneplayer>2)
// {
// alert('player '+playerid);
// window.location.reload(true);
// }else if(turn.secondplayer>2)
// {
//     alert('player '+playerid);
//     window.location.reload(true); 
// }
}
 
al++;
}

}
 
animate();
}