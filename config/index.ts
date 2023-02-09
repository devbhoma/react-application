
let json = require(`./${process.env.NODE_ENV}.json`);


const config = json || {}

export default config