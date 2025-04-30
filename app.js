const mercadopago = require('mercadopago');
mercadopago.configure({ access_token: 'TU_ACCESS_TOKEN' });

app.post('/crear-preferencia', async (req, res) => {
    const preference = {
        items: [{
            title: req.body.title,
            unit_price: req.body.price,
            quantity: 1,
        }],
        payer: {
            email: req.body.email // Opcional
        },
        back_urls: {
            success: 'https://tulanding.com/success',
            failure: 'https://tulanding.com/error',
        },
        auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);
    res.json(response.body.id);
});