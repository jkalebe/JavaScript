const items = [
    {name: 'Bike',      price:100},
    {name: 'TV',        price:200},
    {name: 'Album',     price:10},
    {name: 'Book',      price:5},
    {name: 'Phone',     price:500},
    {name: 'Computer',  price:25}
]

// const filteredItems = items.filter((item) => {
//     return item.price <=100
// })


// const filteredItems = items.map((item) => {
//     return item.price
// })

// const foundItem = items.find((item) => {
//     return item.name ==='Album'
// })

items.find((item) => {
    console.log(item.name)
})

console.log(items)
console.log(foundItem)