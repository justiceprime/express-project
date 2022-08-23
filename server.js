const express = require('express');

const friendController = require('./controllers/friends.controller');

const messagesController = require('./controllers/messages.controller');

const model = require('./models/friends.model');

const app = express();

const PORT = 3000;


app.use((req, res, next) => {
    console.log(`noble chances ${req.method, req.url}`);
    next();
});

app.use(express.json());

app.post('/friends', (req, res) => {
    if (!req.body.name) {
        res.status(404).json({
            error: 'invalid friend name'
        });
    } else {
        const newFriend = {
            name: req.body.name,
            id: model.length
        }
    
        friends.push(newFriend);
        res.json(newFriend);
    }
});

app.get('/friends/:friendId', friendController.getSpecificFriend);

app.get('/messages', messagesController.getMessages);

app.get('/friends', friendController.getFriends);

app.get('/', (req, res) => {
    res.send('helloooooo therie');
});

app.get('/list', (req, res) => {
    res.send('list items here');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ....`);
});