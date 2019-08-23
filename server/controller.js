

const getProduct = (req, res)=> {
    const db = req.app.get('db')
    db.get_products().then((products)=>{
        res.status(200).send(products)
    })
}



module.exports = {
    getProduct,
}