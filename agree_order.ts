import { MaxHeap } from "./max_heap";
import { MinHeap } from "./min_heap";
import { order } from "./order_of_compra";

export class Agree_Order{
    sell_order : MinHeap;
    buy_order : MaxHeap;

    constructor(){
        this.sell_order = new MinHeap(50)
        this.buy_order = new MaxHeap(50)

    }


    public add_order(order : order): void{
        if (order.GetType() == "venta"){
            this.sell_order.insert(order)
        }
        else if (order.GetType() == "compra"){
            this.buy_order.insert(order)
        }
    }

    public show_orders(): void { 
        console.log("=== Órdenes de Compra ===");
        this.buy_order.print(); 
    
        console.log("\n=== Órdenes de Venta ===");
        this.sell_order.print(); 
    }


    public matching_order(): void{
        while (!this.buy_order.isEmpty() && !this.sell_order.isEmpty()) {
            let buyOrder : order  = this.buy_order.checkMax();
            let sellOrder : order = this.sell_order.checkMin();
            
            if (buyOrder.GetPrice() >= sellOrder.GetPrice()){
                
            }
        } 
    }
}