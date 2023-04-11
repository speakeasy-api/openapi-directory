import { SpeakeasyBase } from "../../../internal/utils";
import { Sku } from "./sku";
export declare class AdditemsubscriptionGroupIdRequest extends SpeakeasyBase {
    endpoint: string;
    priceAtSubscriptionDate: number;
    quantity: number;
    sellingPrice: number;
    sku: Sku;
}
