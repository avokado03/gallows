/**
 * Created by hz on 23.06.2018.
 */

//очистка input
$('#reset').click(function () {
    $('#name').text("");
});
//старт игры
$('#start').click(function () {
    var name = $('input').val();
    var mistakes=0;

    if (name!=""){
    $.post('getWords.php',{'name':name},function (data){
        $('body').css('background', 'url(images/backClean.png)');
        var alph = "абвгдежзиклмнопрстуфхцчшщъыьэюя".split('');
        var alphDiv="";
        var alphCurrent;
        var word = "";
        var game=$('#game');
        var content = $("#content");
        var letters="";
        var appendToGame=
            '<div id="image"></div>' +
            '<div id="word">' +
            '<div id="wordBlock"></div>'+
            '<div id="category"></div>'+
            '<div id="mistakes"></div>'+
            '</div>';

        content.empty();
        alph.forEach(function (item) {
            alphDiv += '<div class="alph">' + item + '</div>';
        });
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
            var chosenLetter = $(this).text();
            $('.letters').each(function () {
                if(chosenLetter==$(this).text()){
                    $(this).css('opacity','100%');
                }
            });
            $(this).fadeTo(500,0.4);
        });
        game.append(appendToGame);

        var wordBlock=$('#wordBlock');
        word=data[1].words_value.split('');
        word.forEach(function (item) {
            letters+= '<div class="letters">'+item+'</div>';
        });
        wordBlock.append(letters);
        var wordLenght=word.length;
        alert(wordLenght);
        wordBlock.css('grid-template-columns','repeat('+wordLenght+', 1fr)');
        $('#category').text('Категория: '+data[0].categories_name);
        $('#mistakes').text('Ошибок: '+mistakes);

    },'json');
    }
    else {
        alert("Введите имя!");
    }
});

