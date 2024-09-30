import { Agree_Order } from "./agree_order";
import { order } from "./order_of_compra";




const company =  new Agree_Order();



company.add_order(new order("Company A", 50, 100, "compra"))
company.add_order(new order("Company A", 30, 50, "venta"))





company.show_orders()



company.matchOrders()

company.show_orders()

company.showTransactionHistory()
