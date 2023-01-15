const express =require('express')
const {
    getStats,getStat,createStat,updateStat,deleteStat
}=require('../controllers/controller')
const router =express.Router()


router.get('/',getStats)

router.get('/:id',getStat)
//router.get('/:country',getStatCountry)
//POST
router.post('/',createStat)

//delete
router.delete('/:id',deleteStat)

//update
router.patch('/:id',updateStat)

module.exports=router