import mongoose from "mongoose";

const { Schema } = mongoose;

const Products = new Schema(
    {
        products: {
            name: {
                type: String, 
                required: true
            },
            value: {
                type: String,
                required: true
            },
            ingredients: {
                type: Array
            }
        }
    
    },
    {
        timestamps: true
    }
)

const ProductsModel = mongoose.model("Products", Products);

export { ProductsModel };