import { order } from "./order_of_compra";
export class MinHeap {
    private heap: order[];
    private n: number; // n = cantidad de elementos ingresados

    constructor(size: number){
        this.heap = new Array(size + 1);
        this.n = 0
    }

    public isEmpty(): boolean {
        return this.n == 0
    }

    public checkMin(): order {
        return this.heap[1]
    }

    public getQuantity(): number {
        return this.n
    }

    public insert(value: order): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2*this.heap.length)
        this.n++;
        this.heap[this.n] = value;
        this.swap(this.n);
    }

    private swap(i:number): void{
        let father: number = Math.floor(i / 2)
        while (i>1 && this.heap[father].GetPrice() > this.heap[i].GetPrice()){
            let temp: order = this.heap[father];
            this.heap[father] = this.heap[i]
            this.heap[i] = temp;
            i = father
            father = Math.floor(i / 2)
        }
    }

    private resize (newSize: number) : void{
        let newHeap: order [] = new Array (newSize);
        for (let i = 0; i < this.heap.length; i++){
            newHeap[i] = this.heap[i]
        this.heap = newHeap
        }
    }


    public getMin():  order {
        let min: order = this.heap[1];
        this.heap[1] = this.heap[this.n];
        delete this.heap[this.n];
        this.n--;
        this.sink(1);
        return min
    }

    private sink(i:number): void {
        // i =1
        // n =6
        let j: number = 2*1
        while (2*i <= this.n) { // mientras 2(1) <= 6
            let j: number = 2*i; // j = 2
            if (j < this.n && this.heap[j]> this.heap[j+1])
                j++;
            if (this.heap[i] <= this.heap[j])
                break
            let temp: order = this.heap[i];
            this.heap[i] = this.heap[j]
            this.heap[j] = temp;
            i = j;

        }
    }
    
    public print(): void {
        let tree: string = "Órdenes de Ventas:\n";
        for (let i = 1; i <= this.n; i++) {
            const currentOrder = this.heap[i];
            tree += `Empresa: ${currentOrder.GetCompany()}, Cantidad: ${currentOrder.GetQuantity()}, Precio: ${currentOrder.GetPrice()}\n`;
        }
        console.log(tree);
    }
}