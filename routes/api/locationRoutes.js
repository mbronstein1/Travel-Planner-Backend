const router = require('express').Router();
const { Location, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getLocations = await Location.findAll();
        res.status(200).json(getLocations);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const getOneLocation = await Location.findByPk(req.params.id, {
            include: [{ model: Trip }],
        });

        if (!getOneLocation) {
            res.status(404).json({message: `No location found with id ${req.params.id}`})
            return
        }
        res.status(200).json(getOneLocation)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const newLocation = await Location.create({
            location_name: req.body.location_name
        });
        res.status(200).json({
            status: "Successfully posted!",
            body: newLocation
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedLocation = await Location.destroy({
            where: {
                id: req.params.id
            }
        });

        if(!deletedLocation) {
            res.status(404).json({message: `No location found with id ${req.params.id}!`});
            return;
        }
        res.status(200).json({message: `Location with id ${req.params.id} has been deleted`})
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;