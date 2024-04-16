import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

dbConnect();



export default async function get(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const products = await Product.find({});

                res.status(200).json({ success: true, data: products });
            } catch (error) {
                res.status(400).json({ success: false, data: error });
            }
            break;
        default:
            res.status(400).json({ success: false, data: 'Unauthorised method' });
            break;
    }
}