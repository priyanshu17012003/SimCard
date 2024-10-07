const SimCard = require("../models/simcard-model.js");

exports.activate= async (req,res)=>{

    try {
        const { sim_number } = req.body;
        const simCard = await SimCard.findOneAndUpdate(
            { sim_number },
            { status: 'active', activateDate: new Date() },
            { new: true }
        );

        if (!simCard) {
            return res.status(404).send('SIM card not found.');
        }

        res.status(200).json({
            message: 'SIM card activated successfully.',
            simCard});

    } catch (error) {
        res.status(500).send('Server error.');
        console.log(error);
    }
}

exports.deactivate=async(req,res)=>{

    try{

        const {sim_number}=req.body;
        const simCard=await SimCard.findOneAndUpdate(
            {sim_number},
            {status:"inactive"},
            {new:true}
        );

        if(!simCard)
        {
            res.status(404).json({
                message:"Data not found"
            })
        }

        res.status(200).json({
            message:"Data found",
            simCard
        })

    }
    catch(error)
    {
        res.status(500).send(
            "Internal server error"
        )
        console.log(error);
    }
}

exports.simDetails=async(req,res)=>{

    try{

        const getData=await SimCard.find();

        if(!getData)
        {
            res.status(404).json({
                message:"Data not found"
            })
        }

        res.status(200).json({
            message:"Data found",
            getData
        })

    }
    catch(error)
    {
        res.status(500).send(
            "Internal server error"
        )
        console.log(error);
    }
}