const clientLink = () => {
    const mode = process.env.NODE_ENV
    if (mode === 'development') {
        return process.env.LOCAL_CLIENT
    }
    return process.env.NORMAL_CLIENT
}

module.exports = clientLink;