import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

interface ExtWebSocket extends WebSocket {
    isAlive: boolean;
}

function createChatMessage(content: string, isBroadcast = false, sender = 'NS'): string {
    return JSON.stringify(new ChatMessage(content, sender));
}

function createLoginMessage(user: string): string {
    return JSON.stringify(new LoginMessage(user));
}

export class ChatMessage {
    constructor(
        public content: string,
        public sender: string,
        public reciver = 'All'
    ) { }
}

export class LoginMessage {
    constructor(
        public userName: string,
        public type = 'login'
    ) { }
}

wss.on('connection', (ws: WebSocket) => {

    const extWs = ws as ExtWebSocket;

    extWs.isAlive = true;

    ws.on('pong', () => {
        extWs.isAlive = true;
    });

    //connection is up, let's add a simple simple event
    ws.on('message', (msg: string) => {

        const message = JSON.parse(msg);

        console.log(message);
        setTimeout(() => {
            wss.clients
                .forEach(client => {
                    if (client != ws) {
                        console.log('before sinding ', message);
                        if(message.type === 'login'){
                            client.send(createLoginMessage(message.userName));
                        } else if(message.type === 'chat'){
                            client.send(createChatMessage(message.content, true, message.sender));
                        }
                    }
                });
        }, 1000);

    });

    //send immediatly a feedback to the incoming connection
    //ws.send(createMessage('Hi there, I am a WebSocket server'));

    ws.on('error', (err) => {
        console.warn(`Client disconnected - reason: ${err}`);
    })
});

setInterval(() => {
    wss.clients.forEach((ws: WebSocket) => {

        const extWs = ws as ExtWebSocket;

        if (!extWs.isAlive) return ws.terminate();

        extWs.isAlive = false;
        ws.ping(null, undefined);
    });
}, 10000);

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port 8999 :)`);
});
