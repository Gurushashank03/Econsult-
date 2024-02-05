const serverLink = () => {
    const mode = process.env.NODE_ENV
    if (mode === 'development') {
        return process.env.LOCAL_SERVER
    }
    return process.env.NORMAL_SERVER
}

module.exports = serverLink;