function updatePerson(id){
    $.ajax({
        url: '/people/' + id,
        type: 'PUT',
        data: $('#update-person').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};