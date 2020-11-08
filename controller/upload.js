const fs = require('fs')
const path = require('path')
const os = require('os')

function getIPAdress() {
    let localIPAddress = "";
    let interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                localIPAddress = alias.address;
            }
        }
    }
    return localIPAddress;
}
console.log(getIPAdress());
const upload = async (ctx) => {
    const { avatar } = ctx.request.files
    const reader = fs.createReadStream(avatar.path)
    let filePath = path.join(__dirname, '../public/images/') + `${avatar.name}`
    const upStream = fs.createWriteStream(filePath)
    reader.pipe(upStream)
    return ctx.success({
        imgUrl: `http://${getIPAdress()}:8888/images/${avatar.name}`
    })
}



module.exports = {
    upload
}