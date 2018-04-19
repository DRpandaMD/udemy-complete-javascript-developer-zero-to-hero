/* Hotels controller */

var hotelData = require('../data/hotel-data.json')
module.exports.getAllHotels = function(req, res){
    console.log("Get the  Hotels")
        res
            .status(200)
            .json(hotelData);
};