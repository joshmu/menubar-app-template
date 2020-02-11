const menubar = require('menubar')

let mb = menubar()

mb.on('ready', () => {
    console.log('app is ready')
})
