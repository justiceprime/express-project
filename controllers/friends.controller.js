const model = require('../models/friends.model');

function getFriends(req, res) {
    res.send(model);
}

function getSpecificFriend (req, res) {
    const friendId = req.params.friendId;
    const friend = model[friendId];
    if (friend) {
        res.send(friend);
    } else {
        res.status(404);
        res.send({
            error: 'this friend does not exist'
        });
    }
}

module.exports = {
    getFriends,
    getSpecificFriend
}