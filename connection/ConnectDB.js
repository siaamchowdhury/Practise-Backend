const mongoose = require('mongoose')

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://siam:52251214@cluster0.sicxchu.mongodb.net/shop?retryWrites=true&w=majority"
    )
    console.log(connect.connection.host)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}


module.exports = ConnectDB