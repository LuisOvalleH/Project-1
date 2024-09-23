
export class order{
    private company: string;
    private quantity: number;
    private price: number;
    private type: "compra" | "venta";

    constructor(company : string, quantity : number, price: number, type : "compra" | "venta"){

        this.company = company;
        this.quantity =  quantity;
        this.price = price;
        this.type = type;type;

    }

    public GetType() : string {
        return this.type
    }

    public GetCompany() : string {
        return this.company
    }
    public GetPrice() : number {
        return this.price
    }
    public GetQuantity() : number {
        return this.quantity
    }


    
}