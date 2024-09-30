import { order } from "./order_of_compra";

class transactions extends order{
    
    private list_transaction : order[]
    
    constructor(company: string, quantity: number, price: number, type: "compra"|"venta"){
        super(company, quantity,price,type)
    }
    
}