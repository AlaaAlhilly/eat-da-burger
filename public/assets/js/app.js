
$(function(){
    $('.devour_it').on('click',function(){
        let id = $(this).data('id');
        $(`#${id}`).remove();
        $.ajax('/api/burger/update/'+id,{
            type: 'PUT'
        }).then(function(){
            console.log('the borger devoured');
            location.reload();
        });
    });
    $('.create-form').on('submit',function(e){
        e.preventDefault();
        let newBurger = {
            burger_name: $('#burger').val().trim()
        }
        $.ajax('/api/burger/add',{
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log('new burger added');
            location.reload();
        })
    })
    
})