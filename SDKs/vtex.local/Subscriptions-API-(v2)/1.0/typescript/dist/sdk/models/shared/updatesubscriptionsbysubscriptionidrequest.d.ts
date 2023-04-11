import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Metadatum } from "./metadatum";
import { Plan } from "./plan";
import { PurchaseSettings } from "./purchasesettings";
import { ShippingAddress } from "./shippingaddress";
export declare class UpdateSubscriptionsbySubscriptionIdRequest extends SpeakeasyBase {
    isSkipped: boolean;
    item: Item;
    metadata: Metadatum[];
    plan: Plan;
    purchaseSettings: PurchaseSettings;
    shippingAddress: ShippingAddress;
    status: string;
}
