var trainer = {
    name: 'Ria'
};

var teachService = {
    doTeach: function () {
        console.log(this.name + ' teaching .js');
    }
};


//
// teachService.doTeach();

var teachBtn = document.querySelector('.btn-primary');

// teachBtn.addEventListener('click', teachService.doTeach);

// teachBtn.addEventListener('click', function () {
//     teachService.doTeach.call(trainer);
// });

teachBtn.addEventListener('click',teachService.doTeach.bind(trainer));