import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch(method) {
        case 'GET':
            try{
                const product = await Product.findById(id);

                if(!product) {
                    return res.status(400).json({ succsess: false, data: 'No such product'})
                }

                res.status(200).json({ succsess: true, data: product})
            } catch (error) {
                return res.status(400).json({ succsess: false, data: error})
            }
            break;
        case 'PUT':
            try {
                const product = await Product.findByIdAndUpdate(id, req.body, {
                    nex: true,
                    runValidators: true
                });

                if(!product) {
                    return res.status(400).json({ succsess: false, data: 'No such product'})
                }

                res.status(200).json({ succsess: true, data: product})
            } catch (error) {
                return res.status(400).json({ succsess: false, data: error})
            }
            break;
        case 'DELETE':
            try {
                const deletedProduct = await Product.deleteOne({ _id: id })

                if(!deletedProduct) {
                    return res.status(400).json({ succsess: true, data: 'No such product'})
                }

                res.status(200).json({ succsess: false, data: {} })
            } catch (error) {
                return res.status(400).json({ succsess: false, data: error})
            }
            break;
        default:
            return res.status(400).json({ succsess: false, data: 'Unauthorised method'})
            break;
    }
}