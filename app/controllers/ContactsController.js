const express = require('express')
const router = express.Router() 
const { Contact } = require('../models/Contact')

// localhost:3000/contacts
router.get('/', function (req, res) {
    // will return all the documents in the collection
    Contact.find()
        .then(function (contacts) {
            res.send(contacts)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.post('/', function (req, res) {
    const body = req.body
    const contact = new Contact(body)

    contact.save()
        .then(function (contact) {
            res.send(contact)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.get('/:id', function (req, res) {
    const id = req.params.id
    // find operation 
    Contact.findById(id)
        .then(function (contact) {
            if (contact) { // if contact is found in DB
                res.send(contact)
            } else { // else contact not found in DB, send empty {}
                res.send({})
            }
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.delete('/:id', function (req, res) {
    const id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(function (contact) {
            res.send(contact)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.put('/:id', function (req, res) {
    const id = req.params.id
    const body = req.body
    // findByIdAndUpdate - by default will not run validations
    // new - return the newly updated record, runValidators - to run validations while updating 
    Contact.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(function (contact) {
            res.send(contact)
        })
        .catch(function (err) {
            res.send(err)
        })
})

module.exports = {
    contactsRouter: router 
}