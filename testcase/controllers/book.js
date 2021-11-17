const Book=require('../models/book')
const index=(req,res,next)=>{
    Book.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
           
                message:"an error occured"
            })
        })
}
const show=(req,res,next)=>{
    let bookID=req.body.bookID
    Book.findById(bookID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
           
                message:"an error occured"
            })
    })
}

const store=(req,res,next)=>{
    let book=new Book({
        name:req.body.name,
        author:req.body.author,
        file:req.body.file
    })
    book.save()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
           
                message:"an error occured"
            })
    })
}
const update=(req,res,next)=>{
    let bookID=req.body.bookID
    let updateData={
        name:req.body.name,
        author:req.body.author,
        file:req.body.file
    }
    Book.findByIdAndUpdate(bookId,{$set:updateData})
    .then(()=>{
        message:"book updated successfully"
    })
    .catch(error=>{
        res.json({
           
                message:"an error occured"
            })
        })
}
const destroy=(req,res,next)=>{
    let bookID=req.body.bookID
    Book.findByIdAndRemove(bookID)
    .then(()=>{
        res.json({

            message:"book deleted successfully"
        })
    })
    .catch(error=>{
        res.json({
           
                message:"an error occured"
            })
        })
}
module.exports={
    index,
    show,
    store,
    update,
    destroy
}