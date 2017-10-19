const model = require ('../models/users')

module.exports.getAll = function getAll(req, res){
  model.find({}).exec((err, data) => {
    if (err) return res.status(404).send()
    res.json({ data })
  })
}

module.exports.newUser = function newUser(req, res) {
  model.find({userName:req.body.userName}).exec((error,data) => {
    if (error) return console.error(error)
    if(data.length > 0) return res.json ({message: 'already taken'})
    else {
      const newUser = new model(req.body)
      newUser.save((err, data) => {
        if (err) return res.status(500).send()
        res.json({ id: data._id })
      })
    }
  })
}

module.exports.deleteTrue =  function deleteTrue(req, res) {
  const newUser = new model(req.body)
  model.findOneAndUpdate(
    {userName: req.body.userName},
    {isDelete: true}, 
    function(err,data){
      if(err) return res.json({message: '500'})
      res.json({message: 'sucess on delete'})
    }
  )
}

module.exports.modify = function modify(req, res) {
  model.findOneAndUpdate(
    {userName: req.body.userName},
    {firstName: req.body.firstName}
  ).exec((error,data) => {
    if(error) return console.error(error)
    res.json({message: 'Updated'})
  })
}