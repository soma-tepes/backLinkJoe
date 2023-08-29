const Title = require('../models/titles.model')

exports.createTitle = async (req, res) => {
    try {
        const { title } = req.body
        const titlee = await Title.create({ title })

        res.status(200).json({
            status: "success",
            message: "title created",
            titlee
        })
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Failed to create link or url"
        })
    }
}

exports.findAllTitles = async (req, res) => {
    try {

        const title = await Title.findAll({
            where: {

                status: 'active'
            }
        })
        res.status(200).json({
            status: "success",
            title
        })

    } catch (error) {
        res.status(404).json({
            error
        })
    }
}

exports.findOneTitles = async (req, res) => {
    try {
        const { id } = req.params
        const title = await Title.findOne({
            where: {
                id,
                status: 'active'
            }
        })

      return  res.status(200).json({
            status: "success",
            title
        })

    } catch (error) {
        res.status(404).json({
            error
        })
    }
}
exports.updateTitle = async (req, res) => {
    try {
     
        const { id  } = req.params 
        const { title } = req.body

        const titlee = await Title.findOne({
            where:{
                id,
                status:'active'
            }
        })
     
        if(!titlee){
         return    res.status(400).json({
                message:"User not Found"
            })
        }
        await titlee.update({ title })

        res.status(200).json({
            status:"success",
        
        })


    } catch (error) {

        res.status(400).json({
            error
        })
    }
}
exports.deleteTitle = async (req, res) => {
    try {

        const { id  } = req.params 

        const titlee = await Title.findOne({
            where:{
                id,
                status:'active'
            }
        })

        if(!titlee){
            return    res.status(400).json({
                   message:"User not Found"
               })
           }
           await titlee.update({ status:'disabled' })
   
           res.status(200).json({
               status:"success",
               message: "Data elimined"
           
           })
    } catch (error) {

    }
}