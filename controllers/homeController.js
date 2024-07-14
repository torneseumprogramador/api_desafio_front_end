exports.home = (req, res) => {
    res.json({
        message: 'Home da API criada no desafio',
        documentation: `/api-docs`
    });
};
