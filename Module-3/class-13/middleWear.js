function checkAdminAuth(req , res , next) {
    let password = 'hassan.92';

    if (password === req.params.password) {
        next()
    } else {
        res.send('User is not authorized')
    }
}

module.exports = {
    checkAdminAuth,
}