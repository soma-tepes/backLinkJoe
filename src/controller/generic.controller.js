
exports.createLink = (model) => async (req, res) => {
    try {
        const { url, link } = req.body
        const user = await model.create({ namelink: link, nameurl: url })

        res.status(200).json({
            status: "success",
            user
        })
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Failed to create link or url"
        })
    }
}

exports.findLink  = (model)=> async (req, res) => {

    try {
        const user = await model.findAll({
            where: {
                status: 'active'
            }
        })
        return res.status(200).json({
            status: "success",
            user
        })
    } catch (error) {
        return res.status(400).json({
            status: "fail!",
            message: "Failed search users!"
        })
    }
}

exports.updateLink  = (model)=> async (req, res) => {

    try {
        const { id } = req.params;
        const { nameurl, namelink } = req.body

        const search = await model.findOne({
            where: {
                id,
                status: "active"
            }
        })
        if (!search) {
            res.status(404).json({
                status: "No element"
            })
        }
            await search.update({ nameurl, namelink })
            res.status(200).json({
                status: "Success",
                message: "model Update Exit!",
                search
            })
        
        //

    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

exports.findOneUser  = (model)=> async (req, res) => {
    try {
        const { id } = req.params
        const user = await model.findOne({
            where: {
                id,
                status: "active"
            }
        })

        if (!user) {
            return res.status(404).json({
                message: "No user with ID"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "user successfully!",
            user,
          });
        //
    } catch (error) {

    }
}

exports.deleteLink = (model) => async(req,res)=>{
 try {
    const { id } = req.params
    const deleting = await model.findOne({
        where:{
            id,
            status:"active"
        }
    })

  if(!deleting){
    res.status(404).json({
        status:"fail",
        message:"Link not found"
    })
  }

   await deleting.update({status:"disabled"})

   res.status(200).json({
    status:"success",
    message:"Deleting Exit"
   })

 } catch (error) {
    res.status(404).json({
        error
    })
 }
}
