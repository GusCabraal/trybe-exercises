const fieldsValidation = (req, res, next) => {
    const activitiesFields = req.body;
    const requiredProperties = ['name', 'price', 'description'];
    const hasProperties = requiredProperties.every((property) => property in activitiesFields);
    const propIsMissing = requiredProperties.find((property) => !(property in activitiesFields));
  
    if (!hasProperties) {
      return res.status(400).json({ message: `O campo ${propIsMissing} é obrigatório` });
    }

    next();
};

module.exports = fieldsValidation;