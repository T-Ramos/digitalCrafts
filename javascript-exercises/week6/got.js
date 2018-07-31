$(function (){

    var url = 'https://anapioficeandfire.com/api/characters?page=1&pageSize=50' 
    $.get(url)
    .done(function(response){
        console.log(response);
        updateUiSuccess(response);
    })
    .fail(function(error){
        console.log(error);
    })

    function updateUiSuccess(response){
         response.forEach(function(response){
            let name = response.name;
           if(response.name.length > 0){
                console.log(name);

                let $names = $('<a>', {
                    'text': name,
                    'href': '#',
                })
                $('.c1').append($names);
                let $br = $('<br>');
                $('.c1').append($br);

                $names.click(function(){
                    let alliance = response.allegiances;
                    alert(alliance);
                })
           }
        })
    }

    var url = 'https://anapioficeandfire.com/api/characters?page=2&pageSize=40' 
    $.get(url)
    .done(function(response){
        console.log(response);
        updateUiSuccess2(response);
    })
    .fail(function(error){
        console.log(error);
    })

    function updateUiSuccess2(response){
         response.forEach(function(response){
            let name = response.name;
           if(response.name.length > 0){
                console.log(name);

                let $names = $('<a>', {
                    'text': name,
                    'href': '#',
                })
                $('.c2').append($names);
                let $br = $('<br>');
                $('.c2').append($br);

                $names.click(function(){
                    let alliance = response.allegiances;
                    alert(alliance);
                })
           }
        })
    }

    var url = 'https://anapioficeandfire.com/api/characters?page=3&pageSize=40' 
    $.get(url)
    .done(function(response){
        console.log(response);
        updateUiSuccess3(response);
    })
    .fail(function(error){
        console.log(error);
    })

    function updateUiSuccess3(response){
         response.forEach(function(response){
            let name = response.name;
           if(response.name.length > 0){
                console.log(name);

                let $names = $('<a>', {
                    'text': name,
                    'href': '#',
                })
                $('.c3').append($names);
                let $br = $('<br>');
                $('.c3').append($br);

                $names.click(function(){
                    let alliance = response.allegiances;
                    alert(alliance);
                })
           }
        })
    }

    var url = 'https://anapioficeandfire.com/api/characters?page=4&pageSize=40' 
    $.get(url)
    .done(function(response){
        console.log(response);
        updateUiSuccess4(response);
    })
    .fail(function(error){
        console.log(error);
    })

    function updateUiSuccess4(response){
         response.forEach(function(response){
            let name = response.name;
           if(response.name.length > 0){
                console.log(name);

                let $names = $('<a>', {
                    'text': name,
                    'href': '#',
                })
                $('.c4').append($names);
                let $br = $('<br>');
                $('.c4').append($br);

                $names.click(function(){
                    let alliance = response.allegiances;
                    alert(alliance);
                })
           }
        })
    }






})