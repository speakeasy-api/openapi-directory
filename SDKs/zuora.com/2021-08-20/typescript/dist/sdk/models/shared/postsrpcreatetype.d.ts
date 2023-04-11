import { SpeakeasyBase } from "../../../internal/utils";
import { POSTScCreateType } from "./postsccreatetype";
/**
 * Container for custom fields of a Rate Plan object.
 *
 * @remarks
 *
 */
export declare class POSTSrpCreateType extends SpeakeasyBase {
    /**
     * This optional container is used to override the quantity of one or more product rate plan charges for this subscription.
     *
     * @remarks
     *
     */
    chargeOverrides?: POSTScCreateType[];
    /**
     * ID of a product rate plan for this subscription.
     *
     * @remarks
     *
     */
    productRatePlanId: string;
}
