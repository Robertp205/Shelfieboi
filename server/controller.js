

const getInventory = (req, res)=> {
    const db = req.app.get('db')
    db.get_inventory().then(()=>{
        res.status(200).send('inventory')
    })
    
};

const createProduct = (req,res) => {
    const {name, price, img} = req.body;
    const db = req.app.get('db')
    db.create_product([name,price, img]).then(()=>  {
        res.status(200).send('product wuz created')
    })
};

const updateProduct = (req, res) => {
    const {id} = req.params;
    const {name, price, img} = req.body;
    const db = req.app.get('db')
    db.update_product([name, price, img, id]).then(()=>{
        res.status(200).send('updated product')
    })
};


module.exports = {
    getInventory,
    createProduct,
    updateProduct,
}