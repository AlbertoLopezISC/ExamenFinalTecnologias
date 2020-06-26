const modelDatos = require('./modelo');

const ctrlDatos = {
    api: async (req, res) => {
        const data = await modelDatos.getEstado(req.params.estado);
        res.json(data.data); //la respuesta del servidor se genera aqui
        
    },
    api2: async (req, res) => {
        const data = await modelDatos.getMunicipios(req.params.id);
        res.json(data.data);
    }
}

module.exports = ctrlDatos;