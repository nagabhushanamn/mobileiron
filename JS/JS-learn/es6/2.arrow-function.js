// syntax


// var getPrice = () => 100.00;

// var getPrice = (count) => count * 100.00;
// var getPrice = (count, tax) => count * 100.00 + tax;
// var getPrice = (count, tax) => { return count * 100.00 + tax };



// whey we need arrow function ?


var trainer = {
    name: 'Nag',
    doTeach: function (sub) {
        console.log(this.name + " teaching " + sub);

        // var self = this;
        // function askQues(ques) {
        //     console.log(this);
        //     console.log(self.name + " answering " + ques + " on " + sub);
        // }

        var askQues = (ques) => {
            console.log(this);
            console.log(this.name + " answering " + ques + " on " + sub);
        }

        console.log("teaching end");
        return askQues;
    }
};

var askQuesFunc = trainer.doTeach('.js');
askQuesFunc('what is .js?');