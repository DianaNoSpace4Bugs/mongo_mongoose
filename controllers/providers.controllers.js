const Provider = require('../models/providers');

// CREATE
const createProvider = async (req, res) => {
    console.log(req.body);

    try{
        const data = req.body;
        let answer = await new Provider(data).save();
        res.status(201).json({message: "proveedor creado", provider:{answer}});

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// READ
const getProvider = async (req, res) => {
        try {
            
            let provider = await Provider.find({},'-_id');
            res.status(200).json(provider); // 
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

// UPATE
const editProvider = (req, res) => {
    let providerInfo = req.body;
    res.status(200).json({message:`proveedor actualizado: ${providerInfo.company_name}`, provider:{providerInfo}});
}

// DELETE
const deleteProvider = (req, res) => {
    res.status(200).json({message: `Se ha borrado el proveedor: ${req.param.company_name}`});
}

module.exports = {
    createProvider,
    getProvider,
    editProvider,
    deleteProvider
}

// .populate('provider', 'company_name cif address -_id') //selector en singular de la coleccion que quieres relacionar,