// check off specific todos by clicking
$('li').click(e => {
    $(e.target).toggleClass('completed');
});