const express = require("express")

const router = express.Router()
const web = require("./web/view")
const api = require("./api/api")

router.use(web)
router.use(api)

module.exports = router