const { Show } = require("../models");
const httpStatus = require("http-status");

const create = async (req, res) => {
  try {
    const result = await Show.create(req.body);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const result = await Show.find(req.query).exec();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  findAll,
};
