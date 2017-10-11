const model = require('../models/todo')

module.exports.getAll = function getAll(req, res){
  model.find({}).exec((err, data) => {
    if (err) return res.status(404).send()
    res.json({ data })
  })
}

module.exports.save = function save(req, res){
  const newUser = new model(req.body)
  newUser.save((err, data) => {
    if (err) return res.status(500).send()
    res.json({ id: data._id })
  })
}
