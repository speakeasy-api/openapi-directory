import { SpeakeasyBase } from "../../../internal/utils";
import { OrderActionForEvergreen } from "./orderactionforevergreen";
import { QuoteObjectFields } from "./quoteobjectfields";
export declare class OrderForEvergreenSubscriptions extends SpeakeasyBase {
    baseVersion?: number;
    customFields?: Record<string, any>;
    newVersion?: number;
    orderActions?: OrderActionForEvergreen[];
    quote?: QuoteObjectFields;
    sequence?: number;
    subscriptionNumber?: string;
}
/**
 * Represents the order information that will be returned in the GET call.
**/
export declare class OrderForEvergreen extends SpeakeasyBase {
    createdBy?: string;
    createdDate?: string;
    currency?: string;
    customFields?: Record<string, any>;
    description?: string;
    existingAccountNumber?: string;
    orderDate?: string;
    orderNumber?: string;
    status?: string;
    subscriptions?: OrderForEvergreenSubscriptions[];
    updatedBy?: string;
    updatedDate?: string;
}
