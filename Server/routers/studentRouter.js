const studentBL = require('../models/studentBL')
const express = require('express')

const router = express.Router();

router.route('/')
    .get(async function(req, resp)
    {
        let data = await studentBL.getAllStudents();
        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp)
    {
        let data = await studentBL.getStudent(req.params.id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp)
    {
        let status = await studentBL.createStudent(req.body);
        return resp.json(status)
    })

 router.route('/:id')
    .put(async function(req, resp)
    {
        let status = await studentBL.updateStudent(req.params.id, req.body);
        return resp.json(status)
    })

router.route('/:id')
    .delete(async function(req, resp)
    {
        let status = await studentBL.deleteStudent(req.params.id);
        return resp.json(status)
    })


module.exports = router
