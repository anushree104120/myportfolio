const sendemail =(req,res)=>{
    try{
        return resizeBy.status(200).send({
            success:true,
            message:"Your message send succesfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'send email api error',
            error
        })
    }
}

module.exports={sendemail}