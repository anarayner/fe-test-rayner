const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// delay imitation
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 2000);
    });
    next();
});

server.get('/item', (req, res) => {
    try {
            return res.json();
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});


server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
