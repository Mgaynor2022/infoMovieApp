const express = require("express")
const favoriteRouter = express.Router()
const Favorite = require("../models/favoriteModel.jsx")


//Get All
favoriteRouter.route("/")
.get((req,res,next) => {
    Favorite.find((err, favorite) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(favorite)
    })
})

//Post To Database 
favoriteRouter.post("/", (req,res,next) => {
    const newFavorite = new Favorite(req.body)
    newFavorite.save((err, savedFavorite) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedFavorite)
    })
})

//Delete From Database 
favoriteRouter.delete("/:favoriteId", (req,res, next) =>{
    Favorite.findOneAndDelete({_id: req.params.favoriteId},(err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Item ${deletedItem.Title} Was Deleted`)
    })
})

module.exports = favoriteRouter