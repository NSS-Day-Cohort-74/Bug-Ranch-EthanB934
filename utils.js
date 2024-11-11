const randomize = (array) => {
    return array.sort(() => Math.random() - 1)
}

module.exports = { randomize }
