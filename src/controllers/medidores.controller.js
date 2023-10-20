import { Medidor } from "../models/Medidor.js";

export const getMeasurers = async (req, res) => {
  try {
    const medidores = await Medidor.findAll();
    res.json(medidores);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const createMeasurer = async (req, res) => {
  try {
    const { codigo, nombre, fecha_de_creacion, descripcion, clienteId } =
      req.body;

    const NewMeasurer = await Medidor.create({
      codigo,
      nombre,
      fecha_de_creacion,
      descripcion,
      clienteId,
    });

    res.status(200).send({
      status: "success",
      NewMeasurer,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeasurer = async (req, res) => {
  const { id } = req.params;
  try {
    const medidor = await Medidor.findOne({
      where: { id },
    });
    res.json(medidor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateMeasurer = async (req, res) => {
  try {
    const { id } = req.params;
    const medidor = await Medidor.findOne({
      where: { id },
    });
    medidor.set(req.body);
    await medidor.save();
    return res.json(medidor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteMeasurer = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Medidor.destroy({
      where: { id },
    });

    if (result) {
      return res.status(200).send({
        status: "success",
        message: "Medidor Eliminado.",
      });
    } else {
      return res.status(200).send({
        status: "error",
        message: "No se ha podido eliminar el medidor.",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
