const StudentModel = require('./studentModel');

const getAllStudents = () =>
{
    return new Promise((resolve,reject) =>
    {
        StudentModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            } 
            else
            {
                resolve(data)
            }
        });
    })
}


const getStudent = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        StudentModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            } 
            else
            {
                resolve(data)
            }
        });
    })
}

const createStudent = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let stud = new StudentModel({
            name : obj.name,
            faculty : obj.faculty,
            favMovie : obj.favMovie,
            grades : obj.grades
        })

        stud.save(function(err)
        {
            if(err)
            {
                reject(err)
            } 
            else
            {
                resolve('Created')
            }
        })
       
    })
}


const updateStudent = (id,obj) =>
{
    return new Promise((resolve,reject) =>
    {
        StudentModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                faculty : obj.faculty,
                favMovie : obj.favMovie,
                grades : obj.grades
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                } 
                else
                {
                    resolve('Updated')
                }
            })
    })
}

const deleteStudent = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        StudentModel.findByIdAndDelete(id, function(err)
            {
                if(err)
                {
                    reject(err)
                } 
                else
                {
                    resolve('Deleted')
                }
            })
    })
}




module.exports = {getAllStudents, getStudent, createStudent, updateStudent, deleteStudent}