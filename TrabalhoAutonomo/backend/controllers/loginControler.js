const db = require('../models');
const bcrypt = require('bcrypt');

const fazerlogin = async (req, res) => {
    const { email, senha } = req.body;

    console.log('email Controller', email);
    console.log('senha Controller', senha);
    try {
        let user = await db.Cliente.findOne({ where: { email } });
        if (!user) {
            user = await db.Trabalhador.findOne({ where: { email } });
            if (!user) {
                console.log('Usuário não encontrado');
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
        }

        console.log('Usuário encontrado:', user);

        if (bcrypt.compareSync(senha, user.senha)) {
            return res.json(user);
        } else {
            return res.status(401).json({ error: 'Senha incorreta' });
        }
    } catch (error) {
        console.error('Erro interno no servidor:', error);
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
};


module.exports = { fazerlogin };
