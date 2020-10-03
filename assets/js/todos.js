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