/**
 * Created by hz on 23.06.2018.
 */
$('#reset').click(function () {
    $('#name').text("");
});

$('#start').click(function (){
        var alph = "абвгдежзиклмнопрстуфхцчшщъыьэюя";
        var alphDiv="";
        var content = $("#content");
        content.empty();
                for (var i in alph){
            alphDiv += '<div class="alph">' + alph[i] + '</div>';
        }
        content.replaceWith(alphDiv);
        $('#words').css({
            'padding':'1em',
            'display':'grid',
            'grid-template-columns': 'repeat(11, 1fr)',
            'grid-template-rows':'1fr 1fr 1fr',
            'grid-gap': '0.4em 1.5em'

        });
        $('.alph').css({
            'color': '#3f0088',
            'border': '0.09em solid #3f0088',
            'border-radius':'1em',
            'font-family': "'Caveat', cursive",
            'font-size': '2em',
            'background-color': 'rgba(255,255,255,0.5)'
        });
});

$('.alph').each(
    function () {
        $(this).click(function () {
            $(this).hide();
        });
    }
);
