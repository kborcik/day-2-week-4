let houseData = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req,res) =>{
        res.status(200).send(houseData)
    },
    deleteHouse: (req,res) => {
        let {id} = req.params
        let index = houseData.findIndex(houses => houses.id === +id)
        houseData.splice(index,1)
        res.status(200).send(houseData)

    },
    createHouse: (req,res) => {
        let newHouse = {...req.body, id:houseId}
        houseData.push(newHouse)
        res.status(200).send(houseData)
        houseId++

    }, 
    updateHouse: (req,res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houseData.findIndex(houses => houses.id === +id)
        if(type === 'minus' && houseData[index].price > 10001){
            houseData[index].price -= 10000
        } else if (type === 'plus' && houseData[index].price > 0){
            houseData[index].price +=10000
        }
            res.status(200).send(houseData)
    }

}