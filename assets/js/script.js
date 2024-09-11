
$(function () {

    let boton = $('.boton1');
    
    $('#idHero').on('keydown', function (event) {
        if (event.key === 'Enter') { // Verificar si la tecla presionada es 'Enter'
            event.preventDefault();  // Prevenir que el formulario se envíe
            $('button').click();     // Simular el clic en el botón 'Buscar'
        }})
    
    boton.on('click', function () {
        var id = Number($('#idHero').val());
        event.preventDefault();
        
            $.ajax({
                type: "GET",
                url: `https://superheroapi.com/api.php/5718b82834f41dbe83ea63da50c8aa89/${id}`,
                dataType: "json",

                success: function (data) {

                    if (data.response == "success") {
                        window.location.href = `SuperHero.html?id=${id}`;
                    } else {
                        
                        $('#heroModal').modal('show');
                        
                    }
                },
                error: function () {

                    $('#heroModal').modal('show');
                },

            })
    
    }
    )



});

