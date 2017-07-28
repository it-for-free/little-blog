
$(function(){
    hideLoaderIdentity();
    actionLike();
    sessionLikesScore();
    
});

function actionLike()
{
    $('img').on('click', function(){
        showLoaderIdentity();
        var articleId = $(this).attr('data-articleId');
        $.ajax({
            url: '/index.php?route=ajax/likes', 
            data: {id : articleId},
            dataType: 'text',
        })
        .done (function(obj){
            hideLoaderIdentity();    
            console.log('Ответ получен');
            $('span.' + articleId).text(obj); 
            
        })
        .fail(function(){
            hideLoaderIdentity();
            console.log('Ошибка соединения с сервером');
        });
    });
}


function sessionLikesScore()
{
    setInterval(function(){
        showLoaderIdentity();
        $.ajax({
            url: '/index.php?route=ajax/sessionLikesCount', 
            dataType: 'text',
        })
        .done (function(obj){
            hideLoaderIdentity();    
            console.log('Ответ получен');
            $('#sessionLikesCount').text("Понравилось: " + obj); 
            
        })
        .fail(function(){
            hideLoaderIdentity();
            console.log('Ошибка соединения с сервером');
        });
    }, 5000);
}

