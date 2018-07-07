//clear input
$('#reset').click(() => $('#name').val(''));
//start game
$('#start').click(function () {
    //check the name
    if (name = $('input').val()) {
        // if the name is correct, set name into database and get random
        // category and random word
        $.post('getWords.php', {
            'name': name
        }, function (data) {
            $('body').css('background', 'url(images/backClean.png)');
            // set the alphabet block and other blocks with a word, a category and
            // count of mistakes
            $("#content")
                .empty()
                .append("абвгдежзиклмнопрстуфхцчшщъыьэюя".split('').map(item => '<div class="alph">' + item + '</div>').join(''))
                .addClass('content');
            var word = data[1].words_value.split('');
            var appendToGame =
                `<div id="image"></div>
                <div id="word">
                <div id="wordBlock">${word.map(item => '<div class="letters" letter=' + item + '>' + item + '</div>').join('')}</div>
                <div id="category">Категория: ${data[0].categories_name}<br> Букв: ${word.length}</div>
                <div id="mistakes">Ошибок: 0</div>
                </div>`;

            //fill the base block of the game
            $('#game').append(appendToGame);
            //check chosen letter in the word
            var mistake = 0;
            $('.alph').one('click', function () {
                if (!$(`.letters[letter=${$(this).text()}]`).css('opacity', '1').length) {
                    $('#mistakes').text('Ошибок: ' + (++mistake));
                    $('#image').fadeOut(150, function () {
                        $(this)
                            .css('background-image', 'url(images/' + mistake + '.png')
                            .fadeIn(150);
                    })
                }
                $(this).fadeTo(500, 0.4);
                mistake == 7 && alert("game over");
            });
        }, 'json');
    } else {
        alert("Введите имя!");
    }
});