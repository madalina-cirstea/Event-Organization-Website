const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('media.ejs', { style: 'style.css',  scriptJs: ''})
})

module.exports = router
