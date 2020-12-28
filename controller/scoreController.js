const ejs = require('ejs')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const score = mongoose.model('score')

router.get('/addEdit', (req, res) => {
    res.render('addEdit', { valueText: 'Insert details' })
})



router.post('/addEdit', (req, res) => {
    insertRecord(req, res)
})


function insertRecord(req, res) {
    var Score = new score()
    Score.name = req.body.name;
    Score.email = req.body.email;
    Score.firstTest = req.body.firstTest;
    Score.secondTest = req.body.secondTest;
    Score.thirdTest = req.body.thirdTest;
    Score.save((err, doc) => {
        if (!err)
            res.redirect('/result')

        else {
            console.log('Error during record insertion' + err)
        }
    })
}

router.get('/result', (req, res) => {
    score.find((err, docs) => {
        if (!err) {
            res.render('result', {
                list: docs
            })

        } else {
            console.log('Error in Scores List :' + err)
        }
    })
})

router.get('/addEdit', (req, res) => {
    score.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('addEdit', {
                viewTitle: "Update score",
                Score: doc

            })
        }
    })
})

module.exports = router