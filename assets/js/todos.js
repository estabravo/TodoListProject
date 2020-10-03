// check off specific todos by clicking
$('li').click(e => {
    $(e.target).css({
        color: 'gray',
        textDecoration: 'line-through'
    });
});