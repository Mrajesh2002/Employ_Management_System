const express = require('express')

const router = express.Router()
const {
  getAllEmploys,
  addEmploy,
  updateEmploy,
  deleteEmploy,
  searchEmploy,
  getById,
} = require('../controllers/empController')
const auth = require('../middleware/auth')

router.post('/employ',  addEmploy)
router.put('/employ',  updateEmploy)
router.delete('/employ/:id', deleteEmploy)
router.get('/employ',  getAllEmploys)
router.get('/employ/:search', auth, searchEmploy)
router.get('/employ-id/:id', auth, getById)

module.exports = router
