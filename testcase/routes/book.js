const express=require('express')
const router=express.Router()
const book=require("../controllers/book")
router.get('/books',book.index)
router.get('/show',book.show)
router.post('/update',book.update)
router.post('/store',book.store)
router.post('/delete',book.destroy)
module.exports=router