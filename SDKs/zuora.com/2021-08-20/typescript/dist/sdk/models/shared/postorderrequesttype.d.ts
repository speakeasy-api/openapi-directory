import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderOrderAction } from "./createorderorderaction";
import { QuoteObjectFields } from "./quoteobjectfields";
import { RampRequest } from "./ramprequest";
import { OrderLineItemCommonPostOrder } from "./orderlineitemcommonpostorder";
import { ProcessingOptions } from "./processingoptions";
export declare class PostOrderRequestTypeSubscriptions extends SpeakeasyBase {
    customFields?: Record<string, any>;
    orderActions?: CreateOrderOrderAction[];
    quote?: QuoteObjectFields;
    ramp?: RampRequest;
    subscriptionNumber?: string;
}
export declare class PostOrderRequestType extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    existingAccountNumber?: string;
    newAccount?: Record<string, string>;
    orderDate: Date;
    orderLineItems?: OrderLineItemCommonPostOrder[];
    orderNumber?: string;
    processingOptions?: ProcessingOptions;
    subscriptions: PostOrderRequestTypeSubscriptions[];
}
