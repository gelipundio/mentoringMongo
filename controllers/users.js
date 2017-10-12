const model = require ('../models/users')
const todoController = require ('./todo')


module.exports.newUser = function newUser(req, res) {
  let alreadyTaken = false //model.filter(model => model.userName === req.body.userName)
  const newUser = new model(req.body)
  // console.log(newUser)
  model.find({userName:newUser.userName}).exec((error,data) => {
    if (error) return console.error(error)
    for (var i = data.length - 1; i >= 0; i--) {
      // console.log(data[i].userName, newUser.userName)
      if(data[i].userName === newUser.userName){
        alreadyTaken = true
        return res.json({message: 'already taken'})
      }
    }
    if(alreadyTaken === false) {
      // console.log ('voy a guardar')
      newUser.save((err, data) => {
        if (err) return res.status(500).send()
        res.json({ id: data._id })
      })
    }
  })
  // //for (var i = model.length - 1; i >= 0; i--) {
  //   if(model.schema.obj.userName === req.body.userName){ //revisar
  //     alreadyTaken = true
  //     console.log(alreadyTaken)
  //   }
  // //}
  // if (alreadyTaken) return console.log('already taken')
  // // const newUser = new model(req.body)
  // // newUser.save((err, data) => {
  // //   if (err) return res.status(500).send()
  // //   res.json({ id: data._id })
  // // })
}

module.exports.deleteTrue =  function deleteTrue(req, res) {
  console.log('Hello')
  const newUser = new model(req.body)
  let deleted = false
  let found = false
  model.find({userName:newUser.userName}).exec((error,data) => {
    if(error) return console.error(error)
    for (var i = data.length - 1; i >= 0; i--) {
      console.log (data[i].isDelete)
      if (data[i].userName === newUser.userName){
        found = true
        if(data[i].isDelete === false){
          data[i].isDelete = true
          deleted = true
          data[i].save((err, data) => {
          if (err) return res.status(500).send()
            res.json({message: 'I delete ' + data[i]._id})
        })}
        //return res.json({message: 'I delete ' + data[i]._id})
      }else if (data[i].isDelete) return res.json({message: data[i]._id + ' is deleted'})
    }
    if(found === false) return res.json({message: 'error 404'})
  })
  // let deleted = false
  // // var userFilter = model.filter(user => user._id === id)
  // // if (model.filter(user => user._id === id)) {}
  // for (var i = model.length - 1; i >= 0; i--) {
  //   if(model[i]._id === id){
  //     model[i].isDelete = true
  //     console.log('Success on deleting')
  //     deleted = true
  //   }
  // }
  // if(deleted === false){
  //   console.log('Error 404, Sorry')
  // }

}