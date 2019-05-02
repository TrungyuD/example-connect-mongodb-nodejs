let router = require('express').Router();
let todoList= require('./models');

router.post ('/', async(req,res) => {
    try {
        let {title} = req.body

        let data = await new todoList({title:title}).save();

        return res.status(200).send({
            succes : true,
            data
        });
    }
    catch(err) {return handlePageError(res,err)}
});

router.get('/:id', async(req,res) => {
    try {
        let data = await todoList.findById(req.params.id);
        return res.status(200).send ({
            succes:true,
            data
        });
    } catch(err) {return handlePageError(res,err)}
});

router.post('/:id', async (req,res) => {
    try {
        let {title} = req.body
        let data = await todoList.findByIdAndUpdate(req.params.id,
            {$set:{title}},{new:true});
        return res.status(200).send({
            succes:true,
            data
        });
    } catch(err) {return handlePageError(res,err)};
});

router.post('/:id/toogle', async(req,res)=>{
    try {
        let objCompletion = await todoList.findById(req.params.id).comleted;
        let data = await todoList.findByIdAndUpdate(req.params.id,
            {$set: {completed: !objCompletion}}, {new:true})
            return res.status(200).send({
                succes:true,
                data
            })
    } catch (err) {
        return handlePageError(res,err)
    }
});

router.delete('/:id', async(req,res) => {
    try {
        await todoList.deleteOne({_id: req.params.id})
        return res.status(200).send({
            succes:true,
            data:true
        })
    } catch(err) {return handlePageError(res,err)}
});

module.exports = router;
