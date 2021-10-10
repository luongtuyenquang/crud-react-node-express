import { response } from 'express'
import { v4 as uuid } from 'uuid'

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUsers = (req, res) => {
    const user = req.body

    users.push({...user, id: uuid()})
    res.send('User Added Successfully')
}

export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id)
    res.send(singleUser)

}

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send('User deleted successfully')

}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)
    
    user.StudentCode = req.body.StudentCode
    user.Name = req.body.Name
    user.Gender = req.body.Gender
    user.Phone1 = req.body.Phone1
    user.Phone2 = req.body.Phone2
    user.Email = req.body.Email
    user.Image = req.body.Image
    user.Address = req.body.Address
    user.ProvinceID = req.body.ProvinceID
    user.WardID = req.body.WardID
    user.DistrictID = req.body.DistrictID
    user.Birthday = req.body.Birthday
    user.Note = req.body.Note
    user.CreateBy = req.body.CreateBy
    user.CreateDate = req.body.CreateDate
    user.IsDelete = req.body.IsDelete
    user.SearchText = req.body.SearchText

    res.send('User updated successfully')

}