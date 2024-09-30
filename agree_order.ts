import { MaxHeap } from "./max_heap";
import { MinHeap } from "./min_heap";
import { order } from "./order_of_compra";


interface Transaction {
    company: string;
    exchangedShares: number;
    transactionPrice: number;


}

export class Agree_Order{
    private sell_order : MinHeap;
    private buy_order : MaxHeap;
    private transactionHistory: Transaction[];


    constructor(){
        this.sell_order = new MinHeap(50)
        this.buy_order = new MaxHeap(50)
        this.transactionHistory = [];  

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


    public matchOrders(): void {
        while (!this.buy_order.isEmpty() && !this.sell_order.isEmpty()) {
            const buyOrder = this.buy_order.checkMax();
            const sellOrder = this.sell_order.checkMin();

            if (buyOrder.GetPrice() >= sellOrder.GetPrice()) {
                const matchedQuantity = Math.min(buyOrder.GetQuantity(), sellOrder.GetQuantity());

                console.log('Emparejando orden de compra y venta:');
                console.log(`Empresa: ${buyOrder.GetCompany()} vs ${sellOrder.GetCompany()}
                    Precio de compra: ${buyOrder.GetPrice()} vs Precio de venta: ${sellOrder.GetPrice()}
                    Cantidad emparejada: ${matchedQuantity}`);

                // Guardamos la transacción en el historial
                this.transactionHistory.push({
                    company: buyOrder.GetCompany(),
                    exchangedShares: matchedQuantity,
                    transactionPrice: sellOrder.GetPrice(),

                });

                // Ajusta las cantidades de las órdenes después del emparejamiento
                buyOrder.adjustQuantity(buyOrder.GetQuantity() - matchedQuantity);
                sellOrder.adjustQuantity(sellOrder.GetQuantity() - matchedQuantity);

                // Elimina órdenes completamente cumplidas
                if (buyOrder.GetQuantity() === 0) {
                    this.buy_order.getMax();  // Elimina el máximo
                }

                if (sellOrder.GetQuantity() === 0) {
                    this.sell_order.getMin();  // Elimina el mínimo
                }
            } else {
                // No hay más coincidencias posibles
                break;
            }
        }
    }


    public showTransactionHistory(): void {
        console.log("=== Historial de Transacciones ===");
        this.transactionHistory.forEach((transaction) => {
            console.log(`Compañía: ${transaction.company}, Acciones intercambiadas: ${transaction.exchangedShares}, 
            Precio: ${transaction.transactionPrice}`);
        });
    }

    
    
}