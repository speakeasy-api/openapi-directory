import { SpeakeasyBase } from "../../../internal/utils";
export declare class List extends SpeakeasyBase {
    shippingEstimatedDate: string;
    shippingEstimatedDateMax: string;
    shippingEstimatedDateMin: string;
    affiliateId: string;
    authorizedDate: string;
    callCenterOperatorName: string;
    clientName: string;
    creationDate: string;
    currencyCode: string;
    items: string;
    lastMessageUnread: string;
    listId: string;
    listType: string;
    marketPlaceOrderId: string;
    orderId: string;
    orderIsComplete: boolean;
    origin: string;
    paymentNames: string;
    salesChannel: string;
    sequence: string;
    status: string;
    /**
     * `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.
     */
    statusDescription: string;
    totalItems: number;
    totalValue: number;
    workflowInErrorState: boolean;
    workflowInRetry: boolean;
}
