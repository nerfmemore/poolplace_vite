function handler(req, res) {
    const body = req.body;

    if(!body.Email || !body.Name || !body.Phone) {
        return res.status(400).json({data: 'Неверно введены Имя, Телефон и/или E-mail'});
    }

    return res.status(200).json({data: 'Спасибо за обращение! Скоро с вами свяжется наш специалист'})
}

export default handler;