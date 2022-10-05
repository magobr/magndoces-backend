import { Request, Response } from "express";
import { ProductsModel } from "../model/Products";

class ProductController {

    async store(req: Request, res: Response){
        if (!req.body) {
            return res.status(200).json({
                error: true,
                message: "disembodied requisition"
            });
        }
        
        ProductsModel.create(req.body, (error: Error)=>{
            if (error) return res.status(500).json({
                error: true,
                message: "Internal Error"
            })

            return res.status(200).json({
                error: false,
                message: "Product registered successfully"
            });
        });
    }

    async find(req: Request, res: Response) { 
        try {
            if (!req.params.id) {
                const result = await ProductsModel.find({});
                return res.status(200).json(result);
            }

            const result = await ProductsModel.findById(req.params.id);
            return res.status(200).json(result);

        } catch (error) {
            return res.status(507).json(error);
        }
    }

    async update(req: Request, res: Response){
        try {
            const result = await ProductsModel.findOneAndReplace({_id: req.params.id}, req.body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(507).json(error);
        }
    }

    async delete(req: Request, res: Response){
        try {
            const result = await ProductsModel.findOneAndRemove({_id: req.params.id});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(507).json(error);
        }
    }

}

export { ProductController }