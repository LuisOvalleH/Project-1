import { Agree_Order } from "./agree_order";
import { order } from "./order_of_compra";

const company =  new Agree_Order();

company.add_order(new order("Company A", 50, 300, "compra"))
company.add_order(new order("Company B", 50, 200, "venta"))
company.add_order(new order("Company C", 50, 500, "compra"))
company.add_order(new order("Company D", 50, 400, "compra"))
company.add_order(new order("Company E", 50, 450, "compra"))






company.show_orders()