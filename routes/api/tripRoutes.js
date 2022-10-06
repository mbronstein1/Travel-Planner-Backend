const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const addTrip = await Trip.create({
            trip_budget: req.body.trip_budget,
            traveller_amount: req.body.traveller_amount,
            traveller_id: req.body.traveller_id,
            location_id: req.body.location_id
        });
        res.status(200).json({
            status: "Successfully posted!",
            body: addTrip
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTrip = await Trip.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!deletedTrip) {
            res.status(404).json({message: `No trip found with id ${req.params.id}!`});
            return;
        }
        res.status(200).json(`Trip with id ${req.params.id} has been deleted`);
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;