import { Cliente } from "../models/Cliente.js";
import { Medidor } from "../models/Medidor.js";
export const getClients = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();

    res.json(clientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findOne({
      where: {
        id,
      },
    });

    if (!cliente) {
      return res.status(404).json({ message: "El cliente no existe." });
    }

    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  const { rut, nombre, direccion } = req.body;

  try {
    const newClient = await Cliente.create({
      rut: rut,
      nombre: nombre,
      direccion: direccion,
    });
    return res.status(200).send({
      status: "success",
      newClient,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const UpdateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, direccion } = req.body;

    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado." });
    }
    cliente.nombre = nombre;
    cliente.direccion = direccion;
    await cliente.save();
    // Utiliza el método save() en la instancia del modelo
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const DeleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteclient = await Cliente.destroy({
      where: {
        id,
      },
    });
    if (deleteclient) {
      res.status(200).send({
        status: "success",
        message: "Cliente Eliminado.",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: "No se ha eliminado al cliente",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClientMeasures = async (req, res) => {
  const { id } = req.params;
  const medidor = await Medidor.findAll({
    where: { clienteId: id },
  });

  return res.status(200).send({
    status: "success",
    medidores: medidor,
  });
};

export const getIdsClients = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      attributes: ["id", "rut"], // Solo selecciona el atributo 'id'
    });

    const ids = clientes.map((cliente) => cliente.id); // Extrae las IDs

    res.status(200).send({
      ids,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
