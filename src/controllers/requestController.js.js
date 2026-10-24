

const requestController = async (req, res) => {
  const user = req.user;
  try {
    res.send(`${user.firstName} is send connection`)
  } catch (error) {
    res.json({
      message: "connection is not made due to",
      error: error
    })
  }
}


module.exports = requestController
