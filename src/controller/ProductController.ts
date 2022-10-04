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

        console.log(req.body)

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

}

export { ProductController }