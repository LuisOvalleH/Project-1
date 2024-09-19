
export class order{
    private company: string;
    private quantity: number;
    private price: number;
    private type: "compra" | "venta";

    constructor(company : string, quantity : number, price: number, type : "compra" | "venta"){

        this.company = company
        this.quantity =  quantity
        this.price = price
        this.type = type

    }
}