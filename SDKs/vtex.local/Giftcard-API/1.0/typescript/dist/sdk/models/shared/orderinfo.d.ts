import { SpeakeasyBase } from "../../../internal/utils";
import { Cart1 } from "./cart1";
import { ClientProfile } from "./clientprofile";
import { Shipping } from "./shipping";
export declare class OrderInfo extends SpeakeasyBase {
    cart?: Cart1;
    clientProfile?: ClientProfile;
    orderId?: string;
    sequence?: number;
    shipping?: Shipping;
}
