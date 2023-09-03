function userConstructor(username, email, password, university, ispremium, courselist = []) {
    this.username = username
    this.email = email
    this.ispremium = ispremium
    this.courselist = courselist
    this.password = password
    this.university = university

    Object.keys(this).forEach((ele) => { if(!this[ele]) delete this[ele] })
    return this
}

module.exports = {
    userConstructor
}