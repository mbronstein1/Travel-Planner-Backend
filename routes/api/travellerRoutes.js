const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const getTravellers = await Traveller.findAll();
        res.status(200).json(getTravellers);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const getOneTraveller = await Traveller.findByPk(req.params.id, {
            include: [{ model : Location }, { model: Trip }]
        });

        if (!getOneTraveller) {
            res.status(404).json({message: `No traveller found with id ${req.params.id}`})
            return
        }
        res.status(200).json(getOneTraveller);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
    const newTraveller = await Traveller.create({
        name: req.body.name,
        email: req.body.email
    });
    res.status(200).json({
        status: "Successfully posted!",
        body: newTraveller})
} catch (err) {
    res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTraveller = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!deletedTraveller) {
            res.status(404).json({message: `No traveller found with id ${req.params.id}`});
            return;
        }

        res.status(200).json({message: `Traveller with id ${req.params.id} has been deleted`})
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;