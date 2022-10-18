//the following is using outdated syntax, but provides an overview of the different
//layers which are happening when calling an API/link

// resource params links to multiple json requests
const getTodos = (resource, callback) => {

    return new Promise ((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                // callback(undefined, request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                // console.log('could not fetch the data')
                reject('error getting resource')
            }
        });

        request.open('GET', resource);
        request.send ();

        });
};

getTodos('todos/luigi.json').then(data =>{
    console.log('promise 1 resolved', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

    // const request = new XMLHttpRequest();

    // request.addEventListener('readystatechange', () => {
    // // console.log(request, request.readyState);
    //     if(request.readyState === 4 && request.status === 200) {
    //         // console.log(request.responseText);
    //         const data = JSON.parse(request.responseText);
    //         // callback(undefined, request.responseText);
    //         callback(undefined, data);
    //     } else if(request.readyState === 4){
    //         // console.log('could not fetch the data')
    //         callback('could not fetch data', undefined);
    //     }
    // })

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // request.open('GET', 'todos.json');
    
    //call the resource here
//     request.open('GET', resource);
//     request.send ();

// };

// getTodos((err, data)=>{
//     console.log('callback fired');
//     // console.log(err, data);
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
//     }
// );

//name the resource at the beginning
// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         })
//     }) 
// });

// //example of promise in action

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         resolve('some data');
//         reject('some error')
//     });
// };

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });