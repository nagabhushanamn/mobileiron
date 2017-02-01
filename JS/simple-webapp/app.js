// using DOM API


// document.addEventListener('DOMContentLoaded', function (e) {
//     console.log('DOM ready...');

//     var box = document.querySelector('.jumbotron');
//     var showBtn = document.querySelector('.btn-primary');
//     var hideBtn = document.querySelector('.btn-danger');

//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });
//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });

// });


$(document).ready(function () {
    var $box = $('.jumbotron');
    $('.btn-danger').click(function () {
        $box.hide(5000);
    });
    $('.btn-primary').click(function () {
        $box.show(5000);
    });
})