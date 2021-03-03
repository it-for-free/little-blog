/* 
 * Пример работы JS с помощью Asset.
 * 
 * 
 */
$(function(){
    
    console.log('Start work');
    homePageAlert();
});


function homePageAlert() {
            $('h1.callAlert').click(function(){
                alert("This is our country!");
            });
}

// function homePageAlert() {
//     $('h1.callAlert').click(function(){
//         alert("This is our country!");
//     });
// }
