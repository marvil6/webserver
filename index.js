const http = require('http');

const port = Number.parseInt('3000', 10);
const message = 'Hello from Shipherd 2!';

const server = http.createServer((req, res) => {
    if (req.url === '/status') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(
            JSON.stringify({
                status: 'ok',
                environment: {
                    PORT: String(port),
                    WELCOME_MESSAGE: message,
                },
            })
        );
        return;
    }

    if (req.url === '/health') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        message,
        port,
    }));
});

server.listen(port, () => {
    // Matches backend port detection patterns.
    console.log(`Server listening on port ${port}`);
});
