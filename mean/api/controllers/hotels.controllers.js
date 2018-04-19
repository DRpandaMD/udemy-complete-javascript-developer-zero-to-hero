/* Hotels controller */

var hotelData = require('../data/hotel-data.json')

module.exports.getAllHotels = function(req, res){
    console.log("Get the  Hotels")
    res
        .status(200)
        .json(hotelData);
};

module.exports.getHotelByID = function(req, res){
    var hotelID = req.params.hotelID;
    var thisHotel = hotelData[hotelID];
    console.log("Get the  hotel ID", hotelID)
    res
        .status(200)
        .json(thisHotel);
};