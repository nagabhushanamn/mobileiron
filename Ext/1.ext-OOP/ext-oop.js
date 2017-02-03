// Ext - OOP

// Ext.define('Name',{},callback);


//-------------------------------------------------
// Basic class
//-------------------------------------------------

// Ext.define('Person', {
//     // properties
//     name: 'Nil',
//     age: 0,
//     sayName: function () {
//         console.log('im '+this.name);
//     },
//     sayAge: function () {
//         console.log('im '+this.age);
//     }
// }, function () { console.log('Person class defined'); });


// // var person = new Person();
// var person = Ext.create('Person');  // recommended

//-------------------------------------------------
// constructor
//-------------------------------------------------


// Ext.define('Person', {
//     // properties
//     name: 'Nil',
//     age: 0,
//     // constructor: function (name,age) {
//     //     console.log('Person constructor');
//     //     if (name) {
//     //         this.name = name;
//     //     }
//     //     if (age) {
//     //         this.age = age;
//     //     }
//     // },
//     constructor: function (config) {
//         Ext.apply(this, config);
//     },
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     sayAge: function () {
//         console.log('im ' + this.age);
//     }
// });


// // var person = Ext.create('Person','Nag');
// var person = Ext.create('Person', { name: 'Nag', age: 32 });


//-------------------------------------------------
// Encapsulation  ==> config block

/*
    ==> will generate acessor(set,get) methods for all config properties
    ==> we can also write applyXXX & updateXX methods

    applyXXX ==> will execute before setXXX
    updateXXX ==> if original property value changed
    
*/

//-------------------------------------------------


// Ext.define('Person', {
//     config: {
//         name: 'Nil',
//         age: 0
//     },
//     constructor: function (config) {
//         Ext.apply(this, config);
//         this.initConfig(config);
//     },
//     sayName: function () {
//         console.log('im ' + this.getName());
//     },
//     sayAge: function () {
//         console.log('im ' + this.getAge());
//     },
//     applyAge: function (newAge, oldAge) {
//         console.log('applying age');
//         if (newAge > 0) {
//             return newAge;
//         } else {
//             return oldAge;
//         }
//     },
//     updateAge: function (newAge, oldAge) {
//         console.log('updated age');
//         // we can emit any custom-event , 
//     }
// });

// var person = Ext.create('Person', {
//     name: 'Nag',
//     age: 32
// });
// // person.setAge(-0);



//-------------------------------------------------
// alias , alternateClassName
//-------------------------------------------------


// Ext.define('Person', {
//     alias: 'folk',
//     alternateClassName: 'dude',
//     name: 'Nil',
//     age: 0,
//     constructor: function (config) {
//         Ext.apply(this, config);
//         console.log('Person created...');
//     },
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     sayName: function () {
//         console.log('im ' + this.age);
//     }
// });

// var person1 = Ext.create('folk', {name: 'Nag',age: 32});
// var person2 = Ext.create('dude', {name: 'Nag',age: 32});





//-------------------------------------------------
// Inheritance
//-------------------------------------------------


// Ext.define('Person', {
//     config: {
//         name: 'Nil',
//         age: 0,
//     },
//     constructor: function (config) {
//         Ext.apply(this, config);
//         this.initConfig(config);
//         console.log('Person created...');
//     },
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     sayAge: function () {
//         console.log('im ' + this.age);
//     }
// });

// Ext.define('Employee', {
//     extend: 'Person',
//     salary: 0,
//     constructor: function (config) {
//         Ext.apply(this, config);
//         this.initConfig(config);
//         console.log('Employee created...');
//     },
//     askForRaise: function (percentage) {
//         return this.salary * 0.02;
//     }
// });

// Ext.define('Boss', {
//     extend: 'Employee',
//     constructor: function (config) {
//         Ext.apply(this, config);
//         this.initConfig(config);
//         console.log('Boss created...');
//     },
//     askForRaise: function (percentage) {
//         return this.salary * 0.20 + this.callParent(arguments);
//     }
// });

// // var emp = Ext.create('Employee', {
// //     name: 'Nag',
// //     salary: 1000
// // });

// var boss = Ext.create('Boss', {
//     name: 'Nag',
//     salary: 1000
// });


//-------------------------------------------------
// statics
//------------------------------------------------


// Ext.define('Person', {
//     name: 'Nil',
//     age: 0,
//     statics: {
//         totalPersonCount: 0,
//         nextId: function () {
//             //...
//         }
//     },
//     inheritableStatics: {
//         //..
//     },
//     constructor: function (config) {
//         Ext.apply(this, config);
//         console.log('Person created...');
//         //this.self.totalPersonCount++;
//         //this.statics().totalPersonCount++;
//         //Person.totalPersonCount++;
//     },
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     sayAge: function () {
//         console.log('im ' + this.age);
//     }
// });

// var p1 = Ext.create('Person', {});
// var p2 = Ext.create('Person', {});

// console.log(Person.totalPersonCount);


//-------------------------------------------------
//  Singleton
//------------------------------------------------


// Ext.define('Logger', {
//     singleton: true,
//     log: function (msg) {
//         console.log(msg);
//     }
// });

// // var logger = Ext.create('Logger');  // can't  instantiate

// Logger.log('hello');


//-------------------------------------------------
//  Mixins
//------------------------------------------------


// Ext.define('HasCamera', {
//     takePhoto: function () {
//         console.log('Say cheese...Click');
//     }
// });


// Ext.define('SmartPhone', {
//     mixins: {
//         camera: 'HasCamera'
//     },
//     useCamera: function () {
//         this.focus();
//         //this.takePhoto();
//         this.mixins.camera.takePhoto.call(this);
//     },
//     focus: function () {
//         console.log('focusing subject...');
//     }
// });

// var smartPhone = Ext.create('SmartPhone', {});
// smartPhone.useCamera();


//-------------------------------------------------------


// Tasks

// Ext.define('AttendClient', {
//     attendClient: function (clientName) {
//         console.log(this.name + ' is attending client: ' + clientName);
//     }
// });

// Ext.define('AttendMeeting', {
//     attendMeeting: function (person) {
//         console.log(this.name + ' is attending a meeting with ' + person);
//     }
// });

// Ext.define('AttendPhone', {
//     answerPhone: function () {
//         console.log(this.name + ' is answering the phone');
//     }
// });

// Ext.define('SuperviseEmployees', {
//     superviseEmployee: function (supervisor, employee) {
//         console.log(supervisor.name + ' is supervising : ' + employee.name);
//     }
// });

Ext.define('AttendCellPhone', {
    extend: 'Ext.Mixin',
    callCount: 0,
    mixinConfig: {
        before: {
            answerCellPhone: 'cellPhoneRinging'
        },
        after: {
            answerCellPhone: 'finishCall'
        }
    },
    cellPhoneRinging: function () {
        console.log('cell phone is ringing you may attend call');
    },
    finishCall: function () {
        console.log('cell phone call is over');
        this.callCount++;
    },
    // answerCellPhone: function () {
    //   //..  
    // }
});



Ext.define('Employee', {
    name: 'Unknown',
    constructor: function (config) {
        this.initConfig(config);
    }
});


Ext.define('Secretary', {
    extend: 'Employee',
    mixins: {
        //answerPhone: 'AttendPhone',
        util: 'AttendCellPhone'
    },
    constructor: function (config) {
        Ext.apply(this, config || {});
        console.log('Secretary class created – name:' + this.name);
    },
    answerCellPhone: function () {
        console.log(this.name + ' is answering the cellphone');
    }
});

var sec1 = Ext.create('Secretary', {
    name: 'SEC1'
});
sec1.answerCellPhone();
sec1.answerCellPhone();


var sec2 = Ext.create('Secretary', {
    name: 'SEC2'
});
sec2.answerCellPhone();


// console.log(sec1.callCount);
// console.log(sec2.callCount);




// Ext.define('Manager', {
//     extend: 'Employee',
//     mixins: {
//         attendClient: 'AttendClient',
//         attendMeeting: 'AttendMeeting',
//         superviseEmployees: 'SuperviseEmployees'
//     },
//     constructor: function (config) {
//         Ext.apply(this, config || {}); // this.name= config.name;
//         console.log('Manager class created – name:' + this.name);
//     },
//     supervise: function (employee) {
//         console.log(this.name + ' starts supervision ');
//         this.mixins.superviseEmployees.superviseEmployee(this, employee);
//         console.log(this.name + ' finished supervision ');
//     }
// });

// var emp = Ext.create('Employee', { name: 'EMP' });

// var mgr = Ext.create('Manager', { name: 'Manager' });
// mgr.supervise(emp);




//---------------------------------------------------------