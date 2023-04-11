import { SpeakeasyBase } from "../../../internal/utils";
import { Metadatum } from "./metadatum";
import { Sku } from "./sku";
export declare class Item1 extends SpeakeasyBase {
    subscriptionId: string;
    createdAt: string;
    cycleCount: number;
    endpoint: string;
    isSkipped: boolean;
    lastUpdate: string;
    metadata: Metadatum[];
    originalItemIndex: number;
    originalOrderId: string;
    priceAtSubscriptionDate: number;
    quantity: number;
    sellingPrice: number;
    sku: Sku;
    status: string;
}
