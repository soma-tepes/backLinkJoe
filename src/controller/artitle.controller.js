const Artitle = require("../models/artitle.model");

exports.createArtitle = async (req, res) => {
  /* try { */
  const { title, description, img } = req.body;
  console.log(req.file);
  console.table(req.body);
  res.json({
    ok: true,
  });
  /*  const artitle = await Artitle.create({
      title,
      description,
      img,
    });
    res.status(200).json({
      status: "success",
      message: "add artitle Exit",
      artitle,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  } */
};
exports.viewArtitle = async (req, res) => {
  try {
    const artitle = await Artitle.findAll({
      where: {
        status: "active",
      },
    });
    res.status(200).json({
      status: "success",
      message: "add artitle Exit",
      artitle,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
