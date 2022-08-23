const messages = [
    'This is our first message',
    'Na our second message be this'
];

function getMessages(req, res) {
    res.send(messages);
}

module.exports = {
    getMessages,
}