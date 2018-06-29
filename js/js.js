//clear input
$('#reset').click(function () {
    $('#name').text("");
});
//start game
$('#start').click(function () {
    var name = $('input').val();
    //check the name
    if (name!=""){
    // if the name is correct, set name into database and get random
    // category and random word
    $.post('getWords.php',{'name':name},function (data){
        $('body').css('background', 'url(images/backClean.png)');

        // set the alphabet block and other blocks with a word, a category and
        // count of mistakes
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

        //fill the base block of the game
        game.append(appendToGame);
        var wordBlock=$('#wordBlock');
        word=data[1].words_value.split('');
        word.forEach(function (item) {
            letters+= '<div class="letters">'+item+'</div>';
        });
        wordBlock.append(letters);
        var wordLenght=word.length;
        wordBlock.css('grid-template-columns','repeat('+wordLenght+', 30px)');
        $('#category').html('Категория: '+data[0].categories_name+'<br>'+'Букв: '+wordLenght);
        $('#mistakes').text('Ошибок: 0');

        //check chosen letter in the word
        alphCurrent=$('.alph');
        alphCurrent.one('click',function () {
            var chosenLetter = $(this).text();
            var mistake=0;
            var flag=false;
            $('.letters').each(function () {
                if(chosenLetter===$(this).text()){
                    $(this).css('opacity','1');
                    flag=true;
                }
            });
            if(flag){
                mistake+=1;
                $('#mistakes').text('Ошибок: '+mistake);
                $('#image').css('background-image','url(images/'+mistake+'.png');
                flag=false;
            }
            $(this).fadeTo(500,0.4);
            if(mistake==7){
                alert("game over");
            }
        });
    },'json');
    }
    else {
        alert("Введите имя!");
    }
});

