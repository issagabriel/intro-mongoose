const mongoose = require('mongoose')
const Pet = require('./models/Pet')
const Car= require('./models/Car')

mongoose.connect("mongodb://localhost/exampleApp", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));


// const carToCreate = new Car ({
//     make: 'Chevy',
//     model:'Corvette',
//     year: 2021,
//     foreign: false,
//     bodyStyle: 'Sport',
// })


const carArr=[
    {
        make: 'Chevy',
        model:'Corvette',
        year: 2021,
        foreign: false,
        bodyStyle: 'Sport',
    },
    {
        make: 'Ram',
        model:'1500',
        year: 2019,
        foreign: false,
        bodyStyle: 'Pick-up',
    },
    {
        make: 'Mercedes',
        model:'G8',
        year: 2021,
        foreign: true,
        bodyStyle: 'Sport',
    }
]

function createCar(car){
    const carToCreate = new Car(car)

carToCreate
        .save()
        .then((savedCar)=>{
        console.log('this object was saved to Mongo',savedCar)
        })
        .catch((err)=>{
        console.log('something went wrong',err)
        })
}
carArr.map(createCar)









//   const petToCreate = new Pet({
//     name:'Tobes',
//     age:7,
//     likesVet: true,
//     animal: 'dog'
// })

// petToCreate
//         .save()
//         .then((savedDog)=>{
//         console.log('this object was saved to Mongo',savedDog)
//         })
//         .catch((err)=>{
//         console.log('something went wrong',err)
//         })





  
  
  
  
  
  
  
  
  
  
  //mongoose.model

// const Dog = mongoose.model('Dog',{
//     name:String,
//     age:Number,
//     color:String
// })

// const dogArr = [
//     {name:'Max',
//     age: 3,
//     color:'white'}, 
//     {name:'Tobey',
//     age:10,
//     color:'black',}, 
//     {name:'Rusty',
//     age:7,
//     color:'brown'}, 
//     {name:'Copper',
//     age:4,
//     color:'white'},
//     {name:'Tony',
//      age: 5,
//     color:'black'
//     }]

// function createDog(dog){
//     const dogToCreate = new Dog(dog)

    

// //We are now leaving our JS code
// // async
//     dogToCreate
//         .save()
//         .then((savedDog)=>{
//         console.log('this object was saved to Mongo',savedDog)
//         })
//         .catch((err)=>{
//         console.log('something went wrong',err)
//         })
// }

// dogArr.map(createDog)
