// check off specific todos by clicking
$('li').click(e => {
    $(e.target).toggleClass('completed');
});

// click on X to delete todo
$('span').click(e => {
    $(e.target).parent().fadeOut(500, () => {
        $(e.target).remove();
    });
    e.stopPropagation();
});

$('input[type="text"]').keypress(e =>{
    // .which method is specifying character code for enter key (13)
    if(e.which === 13){
        // grabbing new todo text from input
        let todoText = $(e.target).val();
        $(e.target).val('');
        // create a new li and add to ul
        $('ul').append(`<li>${todoText} <span>X</span></li>`);
    };
});