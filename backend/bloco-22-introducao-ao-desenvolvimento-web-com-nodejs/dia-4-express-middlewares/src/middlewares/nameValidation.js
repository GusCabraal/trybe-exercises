const nameValidation = (req, res, next) => {
    const { name, price } = req.body;
    let message;
    if (name.lenght < 4) {
       message = 'O campo name deve ter pelo menos 4 caracteres';
    } else if (price < 0 || typeof price !== 'number') {
      message = 'O campo price deve ser um número maior ou igual a zero';
    }
    if (message) {
      return res.status(400).json({ message });
    }
    next();
};

module.exports = nameValidation;