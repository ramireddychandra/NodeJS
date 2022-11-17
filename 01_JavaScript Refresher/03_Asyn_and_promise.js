/////////////// Single Promise ////////////////////
/*
const fetchData = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Hai This is getdata by Delay');
            resolve('Hello Dear ! ');
        },1500);
    });
    return promise;
};
setTimeout(()=>{
    console.log('This is First delay ...')
    fetchData().then(text =>{
        console.log(text);
    });
},2000);

*/

// ///////////////// Two Promises////////////////////
const fetchData = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Hai This is getdata by Delay');
            resolve('Hello Dear ! ');
        },1500);
    });
    return promise;
};
setTimeout(()=>{
    console.log('This is First delay ...')
    fetchData().then(text =>{
        console.log('hai '+text);
        return fetchData();
    }).then(text2 =>{
        console.log('Hello '+text2)
    });
},2000);
