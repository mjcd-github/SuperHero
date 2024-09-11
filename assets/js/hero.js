$(function () {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    $.ajax({
        type: "GET",
        url: `https://superheroapi.com/api.php/5718b82834f41dbe83ea63da50c8aa89/${id}`,
        dataType: "json",

        success: function (data) {
            console.log(data);
            $('div.image').append(`<img class ="information__image--size" src="${data.image.url}"/>`);
            $('div.info').append(`<p >Nombre: ${data.name}</p>`);
            $('div.info').append(`<p>Conexiones: ${data.connections["group-affiliation"]}</p>`);
            $('div.info').append(`<p>Publicado por : ${data.biography["publisher"]}</p><hr>`);
            $('div.info').append(`<p>Ocupación: ${data.work["occupation"]}</p><hr>`);
            $('div.info').append(`<p>Primera Aparición: ${data.biography["first-appearance"]}</p><hr>`);
            $('div.info').append(`<p>Altura: ${data.appearance["height"]}</p><hr>`);
            $('div.info').append(`<p>Peso: ${data.appearance["weight"]}</p><hr>`);
            $('div.info').append(`<p>Alianzas: ${data.biography["aliases"]}</p>`);

            //console.log(id);
            // Código del gráfico


            if (`${data.powerstats.intelligence}` != 'null') {

                console.log(`${data.powerstats.intelligence}`);
                var options = {
                    title: {
                        text: `Estadísticas de Poder para ${data.name}`
                    },
                    subtitles: [{
                        text: "As of November, 2017"
                    }],
                    theme: "light2",
                    animationEnabled: true,
                    data: [{
                        type: "pie",
                        startAngle: 40,
                        toolTipContent: "<b>{label}</b>: {y}%",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}%",
                        dataPoints: [
                            { y: `${data.powerstats.intelligence}`, label: "Inteligencia" },
                            { y: `${data.powerstats.strength}`, label: "Fortaleza" },
                            { y: `${data.powerstats.speed}`, label: "Velocidad" },
                            { y: `${data.powerstats.durability}`, label: "Durabilidad" },
                            { y: `${data.powerstats.power}`, label: "Poder" },
                            { y: `${data.powerstats.combat}`, label: "combate" },

                        ]
                    }]
                };
            } else {

                var options = {
                    title: {
                        text: `SuperHero sin Estadisticas`
                    },
                }}

                $("#chartContainer").CanvasJSChart(options);
            
        }
    })



})


