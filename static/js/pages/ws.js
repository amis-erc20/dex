
export const socket = new window.WebSocket(`http://dex.lunochkin.com/api/v1`)

export const send = socket.send.bind(socket)



// WEBPACK FOOTER //
// ./src/ws.js
