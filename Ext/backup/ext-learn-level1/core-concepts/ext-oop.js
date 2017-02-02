
//----------------------------------------
// Ext.Loader.setConfig({
//     enabled: true,
//     paths: {
//         'MyApp': 'app'
//     }
// });
//----------------------------------------  

// Ext.application({
//     name: 'MyApp',
//     requires: [
//         'MyApp.person.Person'
//     ],
//     launch: function () {
//         var p = Ext.create('MyApp.person.Person');
//         p.name = "Nag";
//         p.sayName();
//     }
// });

Ext.onReady(function () {

    //----------------------------------------   
    // dynamic class Loading
    //----------------------------------------   

    // Ext.require('App.emp.Employee', function () {
    //     var p = Ext.create('App.emp.Employee');
    //     p.name = "Nag";
    //     p.sayName();
    // });


    //----------------------------------------    
    // # basic class    
    //----------------------------------------   

    // Ext.define('Person', {
    //     extend:'Ext.Base',
    //     name: 'Nil',
    //     age: 0,
    //     sayName: function () {
    //         console.log('im ' + this.name);
    //     }
    // });

    // var p = new Person();
    // var p = Ext.create('Person');
    // p.name = 'Nag';

    // p.sayName();

    // Ext.Msg.alert('Alert','i am '+p.name);



    //----------------------------------------   
    // constructor    
    //----------------------------------------   

    // Ext.define('Person', {
    //     name: 'Nil',
    //     age: 0,
    //     // constructor(name, age) {
    //     //     if (name) {
    //     //         this.name = name;
    //     //     }
    //     //     if (age) {
    //     //         this.age = age;
    //     //     }
    //     // },
    //     constructor(config) {
    //         Ext.apply(this, config);
    //     },
    //     sayName: function () {
    //         console.log('im ' + this.name);
    //     },
    //     sayAge: function () {
    //         console.log('im ' + this.age);
    //     }
    // });

    // //var p = Ext.create('Person', 'Nag', 32);
    // var p = Ext.create('Person', {
    //     name: 'Nag',
    //     age: 32
    // });
    // p.sayName();
    // p.sayAge();


    //----------------------------------------   
    // Inheritance    
    //----------------------------------------       


    // Ext.define('Person', {
    //     name: 'Nil',
    //     age: 0,
    //     constructor(config) {
    //         Ext.apply(this, config);
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
    //     constructor(config) {
    //         Ext.apply(this, config);
    //     },
    //     askForRaise: function () {
    //         return this.salary * 0.02;
    //     }
    // });

    // Ext.define('Boss', {
    //     extend: 'Employee',
    //     salary: 0,
    //     constructor(config) {
    //         Ext.apply(this, config);
    //     },
    //     askForRaise: function () {
    //         return this.salary * 0.25 + this.callParent(arguments);
    //     }
    // });


    // // var emp = Ext.create('Employee', { name: 'Emp', salary: 1000 });
    // // console.log(emp.askForRaise());

    // var boss = Ext.create('Boss', {
    //     name: 'Emp',
    //     salary: 1000
    // });
    // console.log(boss.askForRaise());


    //----------------------------------------   
    // Encapsulation - config block    
    //----------------------------------------          


    // Ext.define('Person', {
    //     config: {
    //         name: 'Nil',
    //         age: 0,
    //     },
    //     constructor(config) {
    //         Ext.apply(this, config);
    //         this.initConfig(config);
    //     },
    //     sayName: function () {
    //         console.log('im ' + this.name);
    //     },
    //     sayAge: function () {
    //         console.log('im ' + this.age);
    //     },
    //     applyName: function (newName, oldName) {
    //         console.log('applying name');
    //         if (!newName) {
    //             return oldName;
    //         }
    //         return newName;
    //     },
    //     updateName: function () {
    //         console.log('updating Name');
    //     }
    // });


    // var p = Ext.create('Person', {
    //     name: "Nag",
    //     age: 32
    // });

    // // p.name = "Ria"; // will not apply 


    // p.setName('New Nag');
    // console.log(p.getName());



    //----------------------------------------   
    //Statics
    //----------------------------------------    


    // Ext.define('Person', {
    //     config: {
    //         id: 0
    //     },
    //     statics: {
    //         instanceCount: 0,
    //         baseId: 1000,
    //         nextId: function () {
    //             return (this.baseId + this.instanceCount);
    //         }
    //     },
    //     inheritableStatics: {},
    //     constructor: function () {
    //         this.setId(this.statics().nextId());
    //         this.self.instanceCount++;
    //     }
    // });


    // var p1 = Ext.create('Person');
    // var p2 = Ext.create('Person');

    // console.log(Person.instanceCount);

    // console.log(p1.getId());
    // console.log(p2.getId());


    //----------------------------------------   
    //alias
    //----------------------------------------        


    // Ext.define('Person', {
    //     alias: 'folk',
    //     alternateClassName:'buddy',
    //     constructor: function () {
    //         console.log('New Person created');
    //     }
    // });

    // Ext.create('folk');
    // Ext.create('buddy');


    //----------------------------------------   
    //singleton
    //----------------------------------------      

    // Ext.define('Logger', {
    //     singleton: true,
    //     log: function (msg) {
    //         console.log(msg);
    //     }
    // });

    // Logger.log('Hello');


    //----------------------------------------   
    //mixins
    //----------------------------------------      


    // Ext.define('CanSing', {
    //     sing: function () {
    //         console.log("For he's a jolly good fellow...")
    //     }
    // });

    // Ext.define('Musician', {
    //     mixins: ['CanSing']
    // })

    // var m = Ext.create('Musician');
    // m.sing();


    //----------------------------------------   


    // Ext.define('HasCamera', {
    //     takePhoto: function () {
    //         console.log('Say Cheese! .... Click!');
    //     }
    // });

    // Ext.define('Smartphone', {
    //     mixins: {
    //         camera: 'HasCamera'
    //     },
    //     useCamera: function () {
    //         this.focus();
    //         // this.takePhoto();
    //         this.mixins.camera.takePhoto.call(this);
    //     },
    //     focus: function () {
    //         console.log('Focusing Subject...');
    //     }
    // });

    // var smartphone = Ext.create('Smartphone');
    // smartphone.useCamera(); // alerts 'Say Cheese! .... Click!


    //----------------------------------------   

    // mixins

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


    // Ext.define('AttendCellPhone', {
    //     extend: 'Ext.Mixin',
    //     mixinConfig: {
    //         before: {
    //             answerCellPhone: 'cellPhoneRinging'
    //         },
    //         after: {
    //             answerCellPhone: 'finishCall'
    //         }
    //     },
    //     cellPhoneRinging: function () {
    //         console.log('cell phone is ringing you may attend call');
    //     },
    //     finishCall: function () {
    //         console.log('cell phone call is over');
    //     }
    // });



    // Ext.define('Employee', {
    //     name: 'Unknown',
    //     constructor: function (config) {
    //         this.initConfig(config);
    //     }
    // });


    // Ext.define('Secretary', {
    //     extend: 'Employee',
    //     mixins: {
    //         answerPhone: 'AttendPhone',
    //         util: 'AttendCellPhone'
    //     },
    //     constructor: function (config) {
    //         Ext.apply(this, config || {});
    //         console.log('Secretary class created – name:' + this.name);
    //     },
    //     answerCellPhone: function () {
    //         console.log(this.name + ' is answering the cellphone');
    //     }
    // });

    // var sec = Ext.create('Secretary', {
    //     name: "SEC"
    // });
    // //sec.answerPhone();
    // sec.answerCellPhone();

    // Ext.define('Accountant', {
    //     extend: 'Employee',
    //     mixins: {
    //         attendClient: 'AttendClient',
    //         attendMeeting: 'AttendMeeting'
    //     },
    //     constructor: function (config) {
    //         Ext.apply(this, config || {});
    //         console.log('Accountant class created – name:' + this.name);
    //     }
    // });

    // Ext.define('Manager', {
    //     extend: 'Employee',
    //     mixins: {
    //         attendClient: 'AttendClient',
    //         attendMeeting: 'AttendMeeting',
    //         supervisePersons: 'SuperviseEmployees'
    //     },
    //     constructor: function (config) {
    //         Ext.apply(this, config || {}); // this.name= config.name;
    //         console.log('Manager class created – name:' + this.name);
    //     },
    //     supervise: function (employee) {
    //         console.log(this.name + ' starts supervision ');
    //         this.mixins.supervisePersons.superviseEmployee(this, employee);
    //         console.log(this.name + ' finished supervision ');
    //     }
    // });

    
    // // var emp = Ext.create('Employee', {
    // //     name: 'EMP'
    // // });
    // // var mgr = Ext.create('Manager', {
    // //     name: 'MANAGER'
    // // });
    // // mgr.supervise(emp);



    //----------------------------------------------------------------------------

});