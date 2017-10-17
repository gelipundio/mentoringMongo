const model = require ('../models/comments')
const userModel = require ('../models/users')

module.exports.getAll = function getAll(req, res){
  model.find({}).exec((err, data) => {
    if (err) return res.status(404).send()
    res.json({ data })
  })
}

module.exports.post = function post(req, res){
  const newComment = new model(req.body)
  userModel.findOne({userName: newComment.userName}).exec((err, data) => {
    if (data){
      if(data.userName === newComment.userName){
        newComment.save((err, data) => {
          res.json({ id: data._id })
        })
      }
    }
    else res.json({message: 'error 404'})
  })
}

module.exports.modify = function modify(req, res) {
  model.findOneAndUpdate(
    {_id: req.body.id},
    {comment: req.body.title}
  ).exec((error,data) => {
    if(error) return console.error(error)
    res.json({message: 'Updated comment'})
  })
}

module.exports.deleteById = function deleteById(req, res){
  model.findOneAndRemove({ '_id': req.body.id }, function (err, person) {
    if (err) return res.json(404).send()
    res.json({ message: 'Deleted' })
  })
}