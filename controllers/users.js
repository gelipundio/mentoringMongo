const model = require ('../models/users')

module.exports.getAll = function getAll(req, res){
  model.find({}).exec((err, data) => {
    if (err) return res.status(404).send()
    res.json({ data })
  })
}

module.exports.newUser = function newUser(req, res) {
  let alreadyTaken = false 
  const newUser = new model(req.body)
  model.find({userName:newUser.userName}).exec((error,data) => {
    if (error) return console.error(error)
    for (var i = data.length - 1; i >= 0; i--) {
      if(data[i].userName === newUser.userName){
        alreadyTaken = true
        return res.json({message: 'already taken'})
      }
    }

    if(alreadyTaken === false) {
      newUser.save((err, data) => {
        if (err) return res.status(500).send()
        res.json({ id: data._id })
      })
    }
  })
}

module.exports.deleteTrue =  function deleteTrue(req, res) {
  const newUser = new model(req.body)
  let deleted = false
  let found = false
  model.find({userName:newUser.userName}).exec((error,data) => {
    if(error) return console.error(error)
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].userName === newUser.userName){
        found = true
        if(data[i].isDelete === false){
          data[i].isDelete = true
          deleted = true
          data[i].save((err, data) => {
            if (err) return res.status(500).send()
            res.json({message: 'I delete it' })
          })
        }else
      if (data[i].isDelete) return res.json({message: data[i]._id + ' is deleted ' })
      }
    }
    if(found === false) return res.json({message: 'error 404'})
  })
}

module.exports.modify = function modify(req, res) {
  const modified = new model(req.body)
  console.log(modified)
  debugger
  model.findOneAndUpdate(
    {userName: modified.userName},
    {$set:{firstName: modified.firstName}}
  ).exec((error,data) => {
    if(error) return console.error(error)
    res.json({message: 'Updated'})
  })
}