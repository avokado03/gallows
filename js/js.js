/**
 * Created by hz on 23.06.2018.
 */

//очистка input
$('#reset').click(function () {
    $('#name').text("");
});
//старт игры
$('#start').click(function (){
    $('body').css('background', 'url(images/backClean.png)');

    var alph = "абвгдежзиклмнопрстуфхцчшщъыьэюя";
    var alphDiv="";
    var alphCurrent;
    var game=$('#game');
    var content = $("#content");
    var appendToGame='<div id="image"></div>' +
        '<div id="word">' +
            '<div id="wordBlock"></div>'+
            '<div id="category"></div>'+
            '<div id="mistakes"></div>'+
        '</div>';
    content.empty();
    for (var i in alph){
        alphDiv += '<div class="alph">' + alph[i] + '</div>';
    }
    content.append(alphDiv);
    content.css({
        'padding':'1em',
        'display':'grid',
        'grid-template-columns': 'repeat(11, 1fr)',
        'grid-template-rows':'1fr 1fr 1fr',
        'grid-gap': '0.4em 1.5em'
    });
    alphCurrent=$('.alph');
    alphCurrent.one('click',function () {
        $(this).fadeTo(700,0.4);
    });
    game.append(appendToGame);
});

