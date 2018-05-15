const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors())
var curriculums = [{
    curriculum_id: 1,
    name: "B.ENG (COMPUTER ENGINEERING)"
  },
  {
    curriculum_id: 2,
    name: "B.SC (INFORMATION TECHNOLOGY)"
  },
  {
    curriculum_id: 3,
    name: "B.SC (SOFTWARE ENGINEERING)"
  },
  {
    curriculum_id: 4,
    name: "B.SC (ELECTRONIC BUSINESS)"
  }
]

var router = express.Router()

app.use('/api', router)
router.route('/curriculums')
  .get((req, res) => {
    res.send(curriculums)
  })
  .post((req,res)=>{
    const curriculum = {}
    const {name} = req.body
    const id = curriculums.length + 1
    curriculum.curriculum_id = id
    curriculum.name = name
    curriculums.push(curriculum)
    res.send(curriculums)
    })
router.route('/curriculums/:curriculum_id')
  .put((req,res)=>{
    const {name} = req.body
    const {curriculum_id} = req.params
    const index = curriculum_id - 1
    curriculums[index].name = name
    res.send(curriculums)
  })

  .delete((req,res)=>{
    var {curriculum_id} = req.params
    curriculum_id = curriculum_id - 1
    delete curriculums[curriculum_id]
    res.send(curriculums)
  })

app.listen(80, () => {
  console.log("Server listen on port 80")
})
