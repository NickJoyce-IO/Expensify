
// OBJECT DESTRUCTURING

// console.log('hello')

// const person = {
//     name: 'Nick',
//     age: 34,
//     location: {
//         city: 'Bath',
//         temp: 23
//     }
// }

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// // get the name variable rename it to publisherName and give it a default of self published
// const { name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName) 


const address = ['67 Hayfield', 'Marshfield', 'South Gloucestershire', 'SN14 8RA']

const [ street, city, county, postCode ] = address

console.log(`You are in ${city} ${county}`)

const item = ['Coffee (hot)', '£2.00', '£2.50', '2.75']

const [ product, small, medium, large ] = item

console.log(`A ${product} costs ${medium}`)