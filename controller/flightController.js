const{Flights} = require('../model/Flight');
const uuid = require('uuid').v4()

//get all users
exports.getFlights = async(req, res) =>
{
    try
    {
        const flights = Flights;
     //   const users = await Users.find();
        res.status(200).json(
            {
               message: "All users",
               flights: flights
            
            }
            );
    
    
    }
    catch(err)
    {
        res.status(500).json( {message:err})
    
    
    }


}

//get a single user
exports.getFlight = async (req, res) =>
{
    try
    {
        let id = req.params.id;
        const flight = Flights.find( (flight) => flight.id === id)
        res.status(200).json(
            {
                message:"User found",
                flight,

            }
        );

    }

    catch (error)
    {

    }
}
//Create a new flight

exports.createFlight = async (req, res) =>
{
    try
    {
        const {  
            id: uuid,
            title,
            time,
            price,
            data} = await req.body;

        flight.id = uuid;
        
        Flights.push(flight)

        res.status(201).json(
            {  
                message: "Flight created",
                flight,
            }

        );
        
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
        
    }

}