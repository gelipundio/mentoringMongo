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

module.exports.modify = function modify(req, res) {
  const modified = new model(req.body)
  model.findOneAndUpdate(
    {_id: modified.id},
    {title: modified.title}
  ).exec((error,data) => {
    if(error) return console.error(error)
    res.json({message: 'Updated'})
  })
}

module.exports.deleteById = function deleteById(req, res){
  model.findOneAndRemove({ '_id': req.body.id }, function (err, person) {
    if (err) return res.json(404).send()
    res.json({ message: 'Deleted' })
  })
}