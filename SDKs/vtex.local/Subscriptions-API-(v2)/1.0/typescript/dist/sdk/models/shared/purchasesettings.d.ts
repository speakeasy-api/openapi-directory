import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethod } from "./paymentmethod";
export declare class PurchaseSettings extends SpeakeasyBase {
    currencyCode: string;
    paymentMethod: PaymentMethod;
    purchaseDay: string;
    salesChannel: string;
    selectedSla: string;
    seller: string;
}
