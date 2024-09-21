class MaxHeap {
    private heap: number[];
    private n: number; // n = cantidad de elementos ingresados

    constructor(size: number){
        this.heap = new Array(size + 1);
        this.n = 0
    }

    public isEmpty(): boolean {
        return this.n == 0
    }

    public checkMax(): number {
        return this.heap[1]
    }

    public getQuantity(): number {
        return this.n
    }

    public insert(value: number): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2*this.heap.length)
        this.n++;
        this.heap[this.n] = value
        this.swap(this.n)
    }

    private swap(i:number): void{
        let father: number = Math.floor(i / 2)
        while (i>1 && this.heap[father] < this.heap[i]){
            let temp: number = this.heap[father];
            this.heap[father] = this.heap[i]
            this.heap[i] = temp;
            i = father
            father = Math.floor(i / 2)
        }
    }

    private resize (newSize: number) : void{
        let newHeap: number [] = new Array (newSize);
        for (let i = 0; i < this.heap.length; i++){
            newHeap[i] = this.heap[i]
        this.heap = newHeap
        }
    }

    public getMax():  number {
        let max: number = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = 0;
        this.n--;
        this.sink(1);
        return max
    }
    private sink(i:number): void {
        // i =1
        // n =6
        while (2*i <= this.n) { // mientras 2(1) <= 6
            let j: number = 2*i; // j = 2
            if (j < this.n && this.heap[j] < this.heap[j+1])
                j++;
            if (this.heap[i] >= this.heap[j])
                break
            let temp:number = this.heap[i];
            this.heap[i] = this.heap[j]
            this.heap[j] = temp;
            i = j;

        }
    }
}
