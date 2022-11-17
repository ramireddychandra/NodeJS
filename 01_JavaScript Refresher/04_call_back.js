const carron = callback =>{
    setTimeout(()=>{
        callback('Haii this is call back ...')
    },1500)

}
const fetchData = ()=>{
    setTimeout(()=>{
        console.log('Hello this Is Timer Start => ');
        carron(text => {
            console.log(text)
        })

    },2000)
    console.log('Hello this Is Timer END => ');
}
fetchData();
console.log('Hello ! ');
console.log('HI!')
