import { SpeakeasyBase } from "../../../internal/utils";
import { Item1 } from "./item1";
import { Metadatum } from "./metadatum";
import { Plan } from "./plan";
import { PurchaseSettings } from "./purchasesettings";
import { ShippingAddress } from "./shippingaddress";
export declare class UpdateSubscriptionbygroupIdRequest extends SpeakeasyBase {
    isSkipped: boolean;
    item: Item1[];
    metadata: Metadatum[];
    plan: Plan;
    purchaseSettings: PurchaseSettings;
    shippingAddress: ShippingAddress;
    status: string;
}
