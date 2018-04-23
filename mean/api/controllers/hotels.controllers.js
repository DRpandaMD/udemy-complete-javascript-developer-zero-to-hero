/* Hotels controller */

var hotelData = require('../data/hotel-data.json')

module.exports.getAllHotels = function(req, res){
    console.log("Get the  Hotels")
    console.log(req.query);

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    var returnData = hotelData.slice(offset, offset+count);

    res
        .status(200)
        .json(returnData);
};

module.exports.getHotelByID = function(req, res){
    var hotelID = req.params.hotelID;
    var thisHotel = hotelData[hotelID];
    console.log("Get the  hotel ID", hotelID)
    res
        .status(200)
        .json(thisHotel);
};

module.exports.addHotel = function(req, res){
    console.log("POST new hotel")
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};