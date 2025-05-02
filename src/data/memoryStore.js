const players = [] //{socketId, name, avatar, game}

const games = []
// {
//     status: 'WAITING' | 'IN_PROGRESS' | 'FINISHED',
//     player1,
//     player2,
//     black,
//     white,
//     board,
//     turn: 'white' | 'black',
//     access,
// }

module.exports = { players, games }