function userConstructor(username, email, password, ispremium, courselist = []) {
    this.username = username
    this.email = email,
    this.ispremium = ispremium,
    this.courselist = courselist
    this.password = password
    return this
}

module.exports = {
    userConstructor
}