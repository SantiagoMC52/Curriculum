const Data = require('../model/curriculumModel');

function curriculumController() {
  async function getData(req, res) {
    const information = await Data.find();
    res.json(information);
  }
  return {
    getData
  };
}

module.exports = curriculumController;
