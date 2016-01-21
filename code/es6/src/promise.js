/*
 * babel-node
 */


'use strict';

// {

    // const promise = new Promise(resolve => {
    //         setTimeout(
    //             () => resolve('Result from promise'),
    //             1000);
    //     }
    // );
    //promise.then(value => console.log(value));
    // Output after 1 second: Result from promise
// }
//
//// Chaining Promises
//{
//    const promise = new Promise(resolve =>
//        setTimeout(
//            () => resolve('Result from promise'),
//            1000)
//    );
//    const promise2 = promise.then(value => `${value} plus stuff`);
//    promise2.then(value => console.log(value));
//    // Output after 1 second: Result from promise plus stuff
//}
//
//// Catching clause
//{
//    Promise
//        .resolve('Result from promise') // creates and directly resolves promise
//        .then(x => {
//            // this will be printed
//            console.log(x);
//            // Result from promise
//        })
//        .then(() => {
//            console.log('This will be printed');
//        })
//        // this will NOT be printed
//        .catch(e => console.log('error: ', e))
//}
//
//// Catching error
//{
//    Promise
//        .resolve('Result from promise') // creates and directly resolves promise
//        .then(x => {
//            // this will be printed
//            console.log(x);
//            // Result from promise
//            throw Error('Something went wrong');
//        })
//        .then(() => {
//            console.log('This will NOT be printed');
//        })
//        // this will be printed
//        .catch(e => console.log('error: ', e))
//}
//
//// Catching reject
//{
//    Promise
//        .reject('Promise rejected') // creates and directly rejects promise
//        .then(x => {
//            // this will NOT be printed
//            console.log(x);
//        })
//        .then(() => {
//            console.log('This will NOT be printed');
//        })
//        // this will be printed
//        .catch(e => console.log('error: ', e))
//}

//// Catch returns promise
{
   Promise
       .resolve('Result from promise') // creates and directly resolves promise
       .then(x => {
           // this will be printed
           console.log(x);
           // Result from promise
           throw Error('Something went wrong');
       })
       .then(() => {
           console.log('This will NOT be printed');
       })
       // this will be printed
       .catch(e => {
         console.log('error: ', e);
         return 'Default Value';
       })
        .then((value) => {
           console.log(`You can continue after catch, value=${value}`);
           return 'new value';
       })
       // this will be printed
      .then((value) => {
           console.log(`This will also be printed, value=${value}`);
           throw Error('Another problem');
       })
      .catch(e => console.log('Second catch: ', e));
}

// then flattens Promise
{
   Promise
       .resolve('Result from promise') // creates and directly resolves promise
      .then(() => Promise.resolve('Promises will be flattened'))
      .then((flat) => console.log(`Flat result=${flat}`));
}


// Promise.all
// {

//     const promise1 = new Promise(resolve => {
//             setTimeout(
//                 () => resolve('Result from promise1'),
//                 1000);
//         }
//     );
//     const promise2 = new Promise(resolve => {
//             setTimeout(
//                 () => resolve('Result from promise2'),
//                 2000);
//         }
//     );
//     const promise3 = Promise.all([promise1, promise2]);

//     promise3.then(value => console.log(value));
//     // Output after 2 seconds: Result from promise
// }
