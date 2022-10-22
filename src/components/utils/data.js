const data = [
    {
        id: Math.floor(Math.random()*1000),
        amount: Math.floor(Math.random()*100000),
        date: new Date().toDateString(),
        addedBy: 'Aditya',
        addedOn: new Date().toDateString(),
        method: 'UPI',
        paymentBy: 'Hemant'
    },
]

for(let i =0; i < 50; i++){
    data.push({
        id: Math.floor(Math.random()*1000),
        amount: Math.floor(Math.random()*100000),
        date: new Date().toDateString(),
        addedBy: 'Aditya',
        addedOn: new Date().toDateString(),
        method: 'UPI',
        paymentBy: 'Hemant'
    })
}


export default data