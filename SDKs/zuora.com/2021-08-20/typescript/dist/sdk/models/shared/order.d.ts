import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAction } from "./orderaction";
import { QuoteObjectFields } from "./quoteobjectfields";
import { OrderLineItemRetrieveOrder } from "./orderlineitemretrieveorder";
export declare enum OrderStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
export declare class OrderSubscriptions extends SpeakeasyBase {
    baseVersion?: number;
    customFields?: Record<string, any>;
    newVersion?: number;
    orderActions?: OrderAction[];
    quote?: QuoteObjectFields;
    ramp?: Record<string, any>;
    sequence?: number;
    subscriptionNumber?: string;
}
/**
 * Represents the order information that will be returned in the GET call.
**/
export declare class Order extends SpeakeasyBase {
    createdBy?: string;
    createdDate?: string;
    currency?: string;
    customFields?: Record<string, any>;
    description?: string;
    existingAccountNumber?: string;
    orderDate?: Date;
    orderLineItems?: OrderLineItemRetrieveOrder[];
    orderNumber?: string;
    status?: OrderStatusEnum;
    subscriptions?: OrderSubscriptions[];
    updatedBy?: string;
    updatedDate?: string;
}
