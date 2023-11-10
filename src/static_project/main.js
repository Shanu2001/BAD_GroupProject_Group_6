$(document).ready(function(){
    console.log('Hello World');
    $('#modal-btn').click(function(){
        $('.ui.modal')
        .modal('show')
        ;
    })
    $('.ui.dropdown').dropdown()
})

